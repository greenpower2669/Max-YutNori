"""Fetch Fab's pinned Arisongs track once; the installed game never uses the network."""
import hashlib
from pathlib import Path
from urllib.request import urlopen

URL = 'https://github.com/greenpower2669/Max-YutNori/releases/download/Arisongs/ariranlike25102026.mp3'
SHA256 = '96c5a95a442f50ac8c0b7c1e9ea80b468434adb57f671a3c45d77c3111fd8c10'
SIZE = 52386596
TARGET = Path(__file__).resolve().parents[1] / 'web/public/audio/ariranlike25102026.mp3'

def valid(path):
    if not path.is_file() or path.stat().st_size != SIZE:
        return False
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest() == SHA256

def main():
    if valid(TARGET):
        print('Arisongs MP3 verified:', SIZE, 'bytes')
        return
    TARGET.parent.mkdir(parents=True, exist_ok=True)
    temporary = TARGET.with_suffix('.mp3.part')
    try:
        with urlopen(URL, timeout=60) as response, temporary.open('wb') as output:
            while chunk := response.read(1024 * 1024):
                output.write(chunk)
        if not valid(temporary):
            raise ValueError('Arisongs download has an unexpected size or SHA-256')
        temporary.replace(TARGET)
        print('Arisongs MP3 downloaded and verified:', SIZE, 'bytes')
    finally:
        temporary.unlink(missing_ok=True)

if __name__ == '__main__':
    main()
