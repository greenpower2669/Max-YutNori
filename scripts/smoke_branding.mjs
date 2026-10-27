import assert from 'node:assert/strict';

// Catches a missing image, a square stretched by the old title CSS, or a header
// that hides controls/playing space after rotation. Uses the rendered product.
export async function brandingScenarios(page,ready,report){
 const original=page.viewportSize();
 for(const size of [{width:844,height:390},{width:390,height:844},{width:1000,height:600}]){
  await page.setViewportSize(size);await ready();
  await page.locator('.brand img').evaluate(i=>i.decode());
  const layout=await page.evaluate(()=>{
   const rect=e=>{const r=e.getBoundingClientRect();return {left:r.left,right:r.right,top:r.top,bottom:r.bottom,width:r.width,height:r.height};};
   const img=document.querySelector('.brand img');
   return {image:rect(img),natural:[img.naturalWidth,img.naturalHeight],src:img.currentSrc,header:rect(document.querySelector('header')),name:document.querySelector('.brand').textContent,controls:[...document.querySelectorAll('header button,header select')].map(rect),overflow:document.documentElement.scrollWidth>innerWidth};
  });
  assert.ok(layout.src.endsWith('/art/max-yutnori-logo.png'),'the new emblem is loaded locally');
  assert.deepEqual(layout.natural,[256,256]);
  assert.ok(Math.abs(layout.image.width-layout.image.height)<.1,'square emblem must not be stretched');
  assert.ok(layout.image.width>=40&&layout.image.width<=48,'emblem stays readable in the compact header');
  assert.match(layout.name,/MAX\s*YUTNORI/);
  assert.equal(layout.overflow,false);
  for(const r of [layout.image,...layout.controls])assert.ok(r.left>=0&&r.right<=size.width&&r.top>=0&&r.bottom<=layout.header.bottom,'header contents remain visible');
  for(const r of layout.controls){assert.ok(r.width>=44&&r.height>=44);assert.ok(r.right<=layout.image.left||r.left>=layout.image.right||r.top>=layout.image.bottom,'logo does not cover controls');}
  if(size.width===844)assert.ok(layout.header.height<=54,'landscape playing space is preserved');
  await page.screenshot({path:`temp/native-branding-${size.width}.png`});
 }
 await page.setViewportSize(original);
 report.checks.push('New jade/gold emblem loads offline, remains square and readable, and preserves accessible compact header controls after rotation');
}
