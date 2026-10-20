"""Extract the unchanged original AAC clip from the pinned Unity export; no Unity runtime required."""
import hashlib, struct
from pathlib import Path
root=Path(__file__).resolve().parents[1]
source=root/'android/app/src/main/assets/game/Build/game.data'
target=root/'web/public/audio/arirang.m4a'
expected='c83cf020a6a146ef26cf53be1c0a548dacc427dfdfc464dc12fea1fda2c9270b'
if target.exists() and hashlib.sha256(target.read_bytes()).hexdigest()==expected:
    print('Original music already verified');raise SystemExit
blob=source.read_bytes()
assert hashlib.sha256(blob).hexdigest()=='b406d6d1ab60b395a69ecc20d6b4e4f0d550b598e31c6aeb9f0eb738dc2da75f','Unexpected Unity data'
magic=b'UnityWebData1.0\0';assert blob.startswith(magic)
end=struct.unpack_from('<I',blob,len(magic))[0];pos=len(magic)+4
while pos<end:
    offset,size,length=struct.unpack_from('<III',blob,pos);pos+=12
    name=blob[pos:pos+length].decode();pos+=length
    if name.endswith('sharedassets0.resource'):
        audio=blob[offset:offset+5785924];assert hashlib.sha256(audio).hexdigest()==expected,'Unexpected music'
        assert audio[4:8]==b'ftyp';target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(audio)
        print('Original ARIRinstr music verified and extracted:',len(audio),'bytes');break
else:raise RuntimeError('Original music not found')
