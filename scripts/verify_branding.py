"""Fail the build if an approved branding source or PNG derivative is damaged."""
import hashlib, json, struct, zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

def png_size(data):
    assert data[:8] == b'\x89PNG\r\n\x1a\n', 'Invalid PNG signature'
    offset = 8
    size = None
    while offset + 12 <= len(data):
        length = struct.unpack_from('>I', data, offset)[0]
        kind = data[offset+4:offset+8]
        end = offset + 8 + length
        assert end + 4 <= len(data), 'Truncated PNG chunk'
        assert zlib.crc32(data[offset+4:end]) == struct.unpack_from('>I', data, end)[0], 'PNG CRC mismatch'
        if kind == b'IHDR':
            assert size is None and offset == 8 and length == 13
            size = struct.unpack_from('>II', data, offset+8)
        if kind == b'IEND':
            assert length == 0 and end + 4 == len(data) and size
            return size
        offset = end + 4
    raise AssertionError('PNG is missing IEND')

def verify():
    manifest = json.loads((ROOT/'docs/branding-assets.json').read_text())
    source = (ROOT/manifest['source']).read_bytes()
    assert hashlib.sha256(source).hexdigest() == manifest['sourceSha256'] == 'afb8df0a1d8540ddac46ba8bbda8ae5208f4d4051a86c5029d508af15b3d7096'
    for name, info in manifest['assets'].items():
        data = (ROOT/name).read_bytes()
        assert png_size(data) == tuple(info['size']), name
        assert hashlib.sha256(data).hexdigest() == info['sha256'], name
    print('PASS: original artwork and all 7 complete branding PNGs match their recorded sizes and SHA-256')

if __name__ == '__main__':
    verify()
