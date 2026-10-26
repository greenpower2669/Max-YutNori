import sys,zipfile,hashlib,json
from pathlib import Path
apk=Path(sys.argv[1])
with zipfile.ZipFile(apk) as z:
    names=z.namelist()
    assert 'assets/game/index.html' in names
    assert 'assets/game/audio/ariranlike25102026.mp3' in names
    assert not any('/Build/' in n or n.endswith(('game.data','game.wasm','game.loader.js')) for n in names),'Unity build accidentally packaged'
    for art in Path('web/public/art').glob('*.png'):
        assert z.read('assets/game/art/'+art.name)==art.read_bytes(), 'Original art missing or changed: '+art.name
    scripts=[n for n in names if n.startswith('assets/game/assets/') and n.endswith('.js')]
    assert scripts
    code=b''.join(z.read(n) for n in scripts)
    assert b'WebAssembly' in code,'WASM physics missing'
    assert b'UnityLoader' not in code and b'createUnityInstance' not in code
    assert hashlib.sha256(z.read('assets/game/audio/ariranlike25102026.mp3')).hexdigest()=='96c5a95a442f50ac8c0b7c1e9ea80b468434adb57f671a3c45d77c3111fd8c10'
print(json.dumps({'apk':apk.name,'bytes':apk.stat().st_size,'unityRuntime':False,'arisongsMusic':True,'wasmPhysics':True},indent=2))
