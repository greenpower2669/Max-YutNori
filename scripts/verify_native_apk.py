import sys,zipfile,hashlib,json,struct,re
from pathlib import Path
from verify_branding import png_size
apk=Path(sys.argv[1])
with zipfile.ZipFile(apk) as z:
    names=z.namelist()
    assert 'assets/game/index.html' in names
    assert 'assets/game/audio/ariranlike25102026.mp3' in names
    assert not any('/Build/' in n or n.endswith(('game.data','game.wasm','game.loader.js')) for n in names),'Unity build accidentally packaged'
    for art in Path('web/public/art').glob('*.png'):
        assert z.read('assets/game/art/'+art.name)==art.read_bytes(), 'Original art missing or changed: '+art.name
        png_size(z.read('assets/game/art/'+art.name))
    assert 'assets/game/art/max-yutnori-logo.png' in names
    assert any(re.fullmatch(r'res/mipmap-anydpi-v26/ic_launcher.xml',n) for n in names), 'Adaptive launcher icon missing'
    legacy={}
    for density,size in [('mdpi',48),('hdpi',72),('xhdpi',96),('xxhdpi',144),('xxxhdpi',192)]:
        matches=[n for n in names if re.fullmatch(r'res/mipmap-'+density+r'(?:-v\d+)?/ic_launcher.png',n)]
        assert len(matches)==1, 'Launcher density missing: '+density
        b=z.read(matches[0]);assert b[:8]==b'\x89PNG\r\n\x1a\n' and struct.unpack('>II',b[16:24])==(size,size)
        legacy[density]=size
    foreground=[n for n in names if re.fullmatch(r'res/drawable-nodpi(?:-v\d+)?/ic_launcher_foreground.png',n)]
    assert len(foreground)==1
    assert struct.unpack('>II',z.read(foreground[0])[16:24])==(432,432)
    scripts=[n for n in names if n.startswith('assets/game/assets/') and n.endswith('.js')]
    assert scripts
    code=b''.join(z.read(n) for n in scripts)
    assert b'WebAssembly' in code,'WASM physics missing'
    assert b'UnityLoader' not in code and b'createUnityInstance' not in code
    assert hashlib.sha256(z.read('assets/game/audio/ariranlike25102026.mp3')).hexdigest()=='96c5a95a442f50ac8c0b7c1e9ea80b468434adb57f671a3c45d77c3111fd8c10'
print(json.dumps({'apk':apk.name,'bytes':apk.stat().st_size,'unityRuntime':False,'arisongsMusic':True,'wasmPhysics':True,'jadeLogo':True,'adaptiveLauncherIcon':True,'launcherDensities':legacy},indent=2))
