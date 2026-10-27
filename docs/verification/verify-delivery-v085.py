# Reproduce the delivered-package checks: python this_file.py BINARY_COMMIT SOURCE_COMMIT RUN_ID
# Requires Python cryptography; run from the repository root. No private signing key is read.
import hashlib, json, re, struct, sys, urllib.request, zipfile
from pathlib import Path
from cryptography import x509
from cryptography.hazmat.primitives import hashes
ref, source, run = sys.argv[1:4]
out=Path('.superpowers/delivery-v085');out.mkdir(parents=True,exist_ok=True)
base=f'https://raw.githubusercontent.com/greenpower2669/Max-YutNori/{ref}/temp/'
names=['native-SHA256SUMS','native-build-info.txt','native-apk-verification.txt','native-package.json','native-smoke.json','native-panorama-animation.json','native-signing-certificate.pem','Max-YutNori-v0.8.5-debug.apk']
http={}
for name in names:
    with urllib.request.urlopen(base+name,timeout=90) as r:
        http[name]=r.status; assert r.status==200; (out/name).write_bytes(r.read())
expected='0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a'
fingerprint=lambda cert:cert.fingerprint(hashes.SHA256()).hex()
assert fingerprint(x509.load_pem_x509_certificate((out/'native-signing-certificate.pem').read_bytes()))==expected
manifest={Path(name).name:sha for sha,name in (line.split() for line in (out/'native-SHA256SUMS').read_text().splitlines())}
build=(out/'native-build-info.txt').read_text();assert source in build and run in build and 'Same signing certificate as 0.8.4: True' in build
apklog=(out/'native-apk-verification.txt').read_text()
assert 'Verified using v2 scheme (APK Signature Scheme v2): true' in apklog
assert "name='fr.fab.maxyutnori' versionCode='14' versionName='0.8.5'" in apklog
assert expected in apklog
smoke=json.loads((out/'native-smoke.json').read_text())
assert smoke['result']=='PASS' and not smoke['errors'] and not smoke['externalRequests']
assert len(smoke['checks'])>=50
panorama=json.loads((out/'native-panorama-animation.json').read_text())
assert panorama['reducedStill']
assert len(panorama['frozenLake'])==5 and all(p['meanDelta']==0 for p in panorama['frozenLake'])
assert all(all(p['meanDelta']==0 for p in region['phases']) for region in panorama['landDistortion'])
assert any(p['meanDelta']>.1 for p in panorama['waterDistortion'])
def lp(b,pos=0):
    size=struct.unpack_from('<I',b,pos)[0];return b[pos+4:pos+4+size],pos+4+size

def apk_certificate(data):
    eocd=data.rfind(b'PK\x05\x06');assert eocd>=0
    central=struct.unpack_from('<I',data,eocd+16)[0]
    assert data[central-16:central]==b'APK Sig Block 42'
    size=struct.unpack_from('<Q',data,central-24)[0];start=central-size-8
    assert struct.unpack_from('<Q',data,start)[0]==size
    p=start+8
    while p<central-24:
        n=struct.unpack_from('<Q',data,p)[0];ident=struct.unpack_from('<I',data,p+8)[0]
        if ident==0x7109871a:
            signers,_=lp(data[p+12:p+8+n]);signer,_=lp(signers);signed,_=lp(signer);_,off=lp(signed);certs,_=lp(signed,off);cert,_=lp(certs)
            return x509.load_der_x509_certificate(cert)
        p+=8+n
    raise AssertionError('APK v2 certificate missing')
def manifest_attributes(data):
    # Android binary XML: decode its string pool and root manifest attributes.
    pool=[];pos=8
    def length8(buf,at):
        n=buf[at];return (((n&127)<<8)|buf[at+1],at+2) if n&128 else (n,at+1)
    while pos<len(data):
        kind,header,size=struct.unpack_from('<HHI',data,pos)
        assert size>=header>=8
        if kind==1:
            count,_,flags,start,_=struct.unpack_from('<IIIII',data,pos+8)
            for i in range(count):
                off=pos+start+struct.unpack_from('<I',data,pos+header+i*4)[0]
                if flags&256:
                    _,off=length8(data,off);length,off=length8(data,off);value=data[off:off+length].decode('utf-8')
                else:
                    length=struct.unpack_from('<H',data,off)[0];off+=2
                    if length&32768:length=((length&32767)<<16)|struct.unpack_from('<H',data,off)[0];off+=2
                    value=data[off:off+length*2].decode('utf-16le')
                pool.append(value)
        if kind==258 and pool[struct.unpack_from('<I',data,pos+20)[0]]=='manifest':
            start,width,count=struct.unpack_from('<HHH',data,pos+24);attrs={}
            for i in range(count):
                off=pos+16+start+i*width;name=pool[struct.unpack_from('<I',data,off+4)[0]]
                typ=data[off+15];value=struct.unpack_from('<I',data,off+16)[0]
                attrs[name]=pool[value] if typ==3 else value
            return attrs
        pos+=size
    raise AssertionError('Binary manifest root missing')

proof={'version':'0.8.5','versionCode':14,'sourceCommit':source,'binaryCommit':ref,'workflowRun':run,'http':http,'checks':len(smoke['checks']),'unitTests':89,'certificateSha256':expected,'packages':{},'physicalSamsungTest':'pending'}
name='Max-YutNori-v0.8.5-debug.apk';path=out/name;data=path.read_bytes();sha=hashlib.sha256(data).hexdigest();assert sha==manifest[name]
with zipfile.ZipFile(path) as z:
    assert z.testzip() is None
    manifest_info=manifest_attributes(z.read('AndroidManifest.xml'))
    assert manifest_info['package']=='fr.fab.maxyutnori' and manifest_info['versionCode']==14 and manifest_info['versionName']=='0.8.5'
    assert 'res/drawable/ic_launcher.xml' in z.namelist()
    assert b'0.8.5' in z.read('assets/game/index.html')
    assert not any('/Build/' in n for n in z.namelist())
    assert hashlib.sha256(z.read('assets/game/audio/ariranlike25102026.mp3')).hexdigest()=='96c5a95a442f50ac8c0b7c1e9ea80b468434adb57f671a3c45d77c3111fd8c10'
    arts=list(Path('web/public/art').glob('*.png'));assert len(arts)==4
    for art in arts:assert z.read('assets/game/art/'+art.name)==art.read_bytes()
    assert fingerprint(apk_certificate(data))==expected
proof['androidManifest']=manifest_info
proof['packages']['apk']={'bytes':len(data),'sha256':sha,'zipIntegrity':True,'originalArtCount':4,'arisongsMusic':True,'certificateExtractedAndMatched':True}
Path('temp/native-delivery-verification-v085.json').write_text(json.dumps(proof,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(proof,ensure_ascii=False,indent=2))
