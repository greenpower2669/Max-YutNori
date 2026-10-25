import sys,zipfile,hashlib,json
from pathlib import Path
apk=Path(sys.argv[1])
with zipfile.ZipFile(apk) as z:
    names=z.namelist()
    assert 'assets/game/index.html' in names
    assert 'assets/game/audio/arirang.m4a' in names
    assert not any('/Build/' in n or n.endswith(('game.data','game.wasm','game.loader.js')) for n in names),'Unity build accidentally packaged'
    for art in Path('web/public/art').glob('*.png'):
        assert z.read('assets/game/art/'+art.name)==art.read_bytes(), 'Original art missing or changed: '+art.name
    scripts=[n for n in names if n.startswith('assets/game/assets/') and n.endswith('.js')]
    assert scripts
    code=b''.join(z.read(n) for n in scripts)
    assert b'WebAssembly' in code,'WASM physics missing'
    assert b'UnityLoader' not in code and b'createUnityInstance' not in code
    assert hashlib.sha256(z.read('assets/game/audio/arirang.m4a')).hexdigest()=='c83cf020a6a146ef26cf53be1c0a548dacc427dfdfc464dc12fea1fda2c9270b'
print(json.dumps({'apk':apk.name,'bytes':apk.stat().st_size,'unityRuntime':False,'originalMusic':True,'wasmPhysics':True},indent=2))
