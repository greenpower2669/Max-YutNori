"""Prepare exact technical resizes of Fab's artwork (development only, Pillow).

Run from the repository root. No generated/redrawn content; source stays intact.
"""
import hashlib, io, json
from pathlib import Path
from PIL import Image, ImageDraw
from verify_branding import png_size

source = Path('docs/assets/25701-logo-original.jpg')
assert hashlib.sha256(source.read_bytes()).hexdigest() == 'afb8df0a1d8540ddac46ba8bbda8ae5208f4d4051a86c5029d508af15b3d7096'
art = Image.open(source).convert('RGB')
assert art.size == (1536, 1536)
res = Path('android/app/src/main/res')
assets = {}
def save(image, path):
    path.parent.mkdir(parents=True, exist_ok=True)
    buffer = io.BytesIO()
    image.save(buffer, format='PNG', optimize=True)
    data = buffer.getvalue()
    assert png_size(data) == image.size
    temporary = path.with_suffix(path.suffix+'.tmp')
    temporary.write_bytes(data)
    temporary.replace(path)
    assert path.read_bytes() == data
    assets[str(path)] = {'size': list(image.size), 'sha256': hashlib.sha256(data).hexdigest()}

save(art.resize((256, 256), Image.Resampling.LANCZOS), Path('web/public/art/max-yutnori-logo.png'))
for density, size in [('mdpi',48),('hdpi',72),('xhdpi',96),('xxhdpi',144),('xxxhdpi',192)]:
    save(art.resize((size,size),Image.Resampling.LANCZOS),res/f'mipmap-{density}/ic_launcher.png')

# A 56 dp complete artwork centred on a 108 dp layer. The supplied rounded
# jade frame and all yut stay inside the visible circle; only outer background
# corners can be masked. 4x pixels keep scaling crisp on dense Samsung screens.
foreground = Image.new('RGBA', (432,432))
foreground.paste(art.resize((224,224), Image.Resampling.LANCZOS), (104,104))
save(foreground, res/'drawable-nodpi/ic_launcher_foreground.png')
Path('docs/branding-assets.json').write_text(json.dumps({'source':str(source),'sourceSha256':hashlib.sha256(source.read_bytes()).hexdigest(),'method':'Lanczos resampling only; adaptive 108 dp layer with 56 dp artwork','assets':assets},indent=2)+'\n')

# Review the 72 dp launcher viewport through common OEM masks, not the full
# 108 dp layer (which would misleadingly make the artwork appear too small).
out=Path('temp');out.mkdir(exist_ok=True)
tile=Image.new('RGBA',(432,432),'#073b34');tile.alpha_composite(foreground)
tile=tile.crop((72,72,360,360))
preview=Image.new('RGB',(864,288),'#132e2b')
for i,shape in enumerate(['circle','rounded','square']):
    mask=Image.new('L',(288,288));draw=ImageDraw.Draw(mask)
    if shape=='circle':draw.ellipse((0,0,287,287),fill=255)
    elif shape=='rounded':draw.rounded_rectangle((0,0,287,287),radius=64,fill=255)
    else:draw.rectangle((0,0,287,287),fill=255)
    preview.paste(tile,(i*288,0),mask)
preview.save(out/'native-icon-masks.png')
print(json.dumps({'assets':len(assets),'sourceUnchanged':True,'preview':str(out/'native-icon-masks.png')}))
