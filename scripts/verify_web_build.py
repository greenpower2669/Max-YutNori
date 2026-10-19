"""Verify the exact embedded upstream game; fail before producing an empty APK."""
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'android/app/src/main/assets/game'
manifest = json.loads((ROOT / 'upstream-web-build.json').read_text())
required = {'Build/game.data', 'Build/game.wasm', 'Build/framework.js', 'Build/loader.js'}
assert {item['file'] for item in manifest['files']} == required
for item in manifest['files']:
    data = (ASSETS / item['file']).read_bytes()
    assert len(data) == item['size'], item['file'] + ': wrong size'
    assert hashlib.sha256(data).hexdigest() == item['sha256'], item['file'] + ': corrupt data'
assert (ASSETS / 'Build/game.wasm').read_bytes()[:8] == b'\x00asm\x01\x00\x00\x00'
assert (ASSETS / 'Build/game.data').read_bytes().startswith(b'UnityWebData1.0\x00')
assert (ASSETS / 'index.html').is_file()
assert (ASSETS / 'launcher.js').is_file()
print('Verified: four original game files, WASM/data headers and local launcher.')
