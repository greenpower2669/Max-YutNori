# Reproduce the delivered-package checks: python this_file.py BINARY_COMMIT SOURCE_COMMIT RUN_ID
# Requires Python cryptography; run from the repository root. No private signing key is read.
import hashlib, json, re, struct, sys, urllib.request, zipfile
from pathlib import Path
from cryptography import x509
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.serialization import pkcs7
ref, source, run = sys.argv[1:4]
out=Path('.superpowers/delivery-v080');out.mkdir(parents=True,exist_ok=True)
base=f'https://raw.githubusercontent.com/greenpower2669/Max-YutNori/{ref}/temp/'
names=['native-SHA256SUMS','native-build-info.txt','native-apk-verification.txt','native-aab-verification.txt','native-package.json','native-smoke.json','native-panorama-animation.json','native-signing-certificate.pem','Max-YutNori-v0.8.0-debug.apk','Max-YutNori-v0.8.0-debug.aab']
http={}
for name in names:
    with urllib.request.urlopen(base+name,timeout=90) as r:
        http[name]=r.status; assert r.status==200; (out/name).write_bytes(r.read())
expected='0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a'
fingerprint=lambda cert:cert.fingerprint(hashes.SHA256()).hex()
assert fingerprint(x509.load_pem_x509_certificate((out/'native-signing-certificate.pem').read_bytes()))==expected
manifest={Path(name).name:sha for sha,name in (line.split() for line in (out/'native-SHA256SUMS').read_text().splitlines())}
build=(out/'native-build-info.txt').read_text();assert source in build and run in build and 'Same signing certificate as 0.7.0: True' in build
apklog=(out/'native-apk-verification.txt').read_text();aablog=(out/'native-aab-verification.txt').read_text()
assert 'Verified using v2 scheme (APK Signature Scheme v2): true' in apklog
assert "name='fr.fab.maxyutnori' versionCode='9' versionName='0.8.0'" in apklog
assert expected in apklog and 'jar verified.' in aablog
smoke=json.loads((out/'native-smoke.json').read_text());assert smoke['result']=='PASS' and not smoke['errors'] and not smoke['externalRequests'];assert len(smoke['checks'])>=44

panorama=json.loads((out/'native-panorama-animation.json').read_text());assert panorama['reducedStill'];assert all(panorama[z]['meanDelta']>.15 for z in ['water','waterfall','mist','clouds','lamps'])

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
proof={'version':'0.8.0','versionCode':9,'sourceCommit':source,'binaryCommit':ref,'workflowRun':run,'http':http,'checks':len(smoke['checks']),'unitTests':71,'certificateSha256':expected,'packages':{},'physicalSamsungTest':'pending'}
for suffix in ['apk','aab']:
    name=f'Max-YutNori-v0.8.0-debug.{suffix}';path=out/name;data=path.read_bytes();sha=hashlib.sha256(data).hexdigest();assert sha==manifest[name]
    with zipfile.ZipFile(path) as z:
        assert z.testzip() is None
        prefix='base/' if suffix=='aab' else ''
        assert prefix+'res/drawable/ic_launcher.xml' in z.namelist()
        assert b'0.8.0' in z.read(prefix+'assets/game/index.html')
        assert not any('/Build/' in n for n in z.namelist())
        assert hashlib.sha256(z.read(prefix+'assets/game/audio/ariranlike25102026.mp3')).hexdigest()=='96c5a95a442f50ac8c0b7c1e9ea80b468434adb57f671a3c45d77c3111fd8c10'
        arts=list(Path('web/public/art').glob('*.png'));assert len(arts)==4
        for art in arts: assert z.read(prefix+'assets/game/art/'+art.name)==art.read_bytes()
        if suffix=='apk': cert=apk_certificate(data)
        else:
            signature=next(n for n in z.namelist() if n.startswith('META-INF/') and n.endswith('.RSA'))
            certs=pkcs7.load_der_pkcs7_certificates(z.read(signature));assert len(certs)==1;cert=certs[0]
        assert fingerprint(cert)==expected
    proof['packages'][suffix]={'bytes':len(data),'sha256':sha,'zipIntegrity':True,'originalArtCount':4,'arisongsMusic':True,'certificateExtractedAndMatched':True}
Path('temp/native-delivery-verification-v080.json').write_text(json.dumps(proof,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(proof,ensure_ascii=False,indent=2))
