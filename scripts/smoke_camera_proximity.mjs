import {assertBoardVisible,cameraAngleScenario} from './smoke_camera_angle.mjs';
import assert from 'node:assert/strict';
import {createGame} from '../web/src/rules.mjs';
export async function cameraProximityScenarios(page,ready,report){
 if(process.env.ANGLE_ONLY)return cameraAngleScenario(page,ready,report);
 if(process.env.PROXIMITY_MOVE_ONLY)return accumulatedCameraScenario(page,ready,report);
 const d=()=>page.evaluate(()=>window.maxYutDiagnostic()),distance=c=>Math.hypot(...c.position.map((n,i)=>n-c.target[i]));
 const stable=async()=>{await page.evaluate(()=>{window.__proxOld=null;window.__proxStable=0;});await page.waitForFunction(()=>{const c=window.maxYutDiagnostic().camera,p=c.mode==='free'?[Math.hypot(...c.position.map((n,i)=>n-c.target[i])),c.magnification]:[...c.position,...c.target,c.magnification],old=window.__proxOld;window.__proxOld=p;window.__proxStable=old&&Math.hypot(...p.map((n,i)=>n-old[i]))<.001?window.__proxStable+1:0;return window.__proxStable>=3;});};
 const g=createGame({teams:Array.from({length:4},(_,i)=>({players:[{name:`Humain ${i+1}`,computer:false}]}))});
 await page.setViewportSize({width:844,height:390});await page.evaluate(g=>{localStorage.setItem('max-yutnori-native-v4',JSON.stringify(g));localStorage.setItem('max-yutnori-settings-v3',JSON.stringify({auto:false,reduced:true,low:true,music:false,actionCamera:true}));localStorage.removeItem('test-frozen-clock');},g);await page.reload();await ready();await stable();
 if(!process.env.PROXIMITY_RETURNS_ONLY){
 let freeNormal=0;
 for(const mode of ['board','top','bowl','free']){
  await page.locator('#viewMode').selectOption(mode);await stable();const normal=(await d()).camera;if(mode==='free')freeNormal=distance(normal);if(['board','top'].includes(mode))assertBoardVisible(normal,{width:844,height:390});
  await page.locator('#zoom2').click();await stable();const close=(await d()).camera;
  assert.equal(close.projectionZoom??close.magnification,1,'×2 must keep the lens fixed in '+mode);assert.equal(close.fov,42);
  if(['board','top'].includes(mode)){assert.ok(distance(close)<distance(normal)*.99&&distance(close)>=distance(normal)*.5,'physical approach stops at the full-board framing limit in '+mode);assertBoardVisible(close,{width:844,height:390});}else assert.ok(distance(close)<distance(normal)*.55,'×2 must physically halve the camera distance in '+mode);
  await page.locator('#zoom2').click();await stable();const back=(await d()).camera;
  assert.ok(Math.hypot(...normal.position.map((n,i)=>n-back.position[i]))<.01,'toggle off restores the close normal pose in '+mode);
 }
 report.checks.push('Physical ×2 approaches at fixed projection, keeps the full board in automatic views and restores the original pose without accumulation');
 const cdp=await page.context().newCDPSession(page),send=(type,points)=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints:points.map(p=>({...p,radiusX:3,radiusY:3,force:1}))});
 await page.locator('#viewMode').selectOption('free');await stable();await page.locator('#zoom2').click();await stable();
 const orbitBefore=(await d()).camera;await page.mouse.move(450,180);await page.mouse.down();await page.mouse.move(495,195,{steps:6});await page.mouse.up();await stable();const orbited=(await d()).camera;
 assert.ok(Math.hypot(...orbited.position.map((n,i)=>n-orbitBefore.position[i]))>.1,'free orbit still changes the actual camera');
 const a={id:1,x:400,y:180},b={id:2,x:500,y:180};await send('touchStart',[a]);await send('touchStart',[a,b]);await send('touchMove',[a,{...b,x:580}]);await send('touchEnd',[]);await stable();const pinched=(await d()).camera;
 assert.ok(distance(pinched)<distance(orbited)*.9,'free-view touch pinch physically approaches');
 await page.locator('#zoom2').click();await stable();const unzoomed=(await d()).camera;assert.ok(Math.abs(distance(unzoomed)-distance(pinched)*2)<.03,'toggle off keeps the independent free pinch');
 await page.locator('#zoom2').click();await page.locator('#viewMode').selectOption('board');await stable();const boardClose=(await d()).camera;await page.locator('#viewMode').selectOption('free');await stable();const freeClose=(await d()).camera;assert.ok(Math.abs(freeNormal/2-distance(freeClose))<.01&&freeClose.doubleZoom,'free re-entry preserves its independent physical approach');await page.locator('#zoom2').click();await stable();await cdp.detach();
 report.checks.push('Free orbit and genuine touch pinch remain independent of physical ×2, including toggle-off and re-entry');
 if(process.env.PROXIMITY_FREE_ONLY)return;
 }
 const samples=[];
 for(const size of [{width:844,height:390},{width:390,height:844}]){
  await page.setViewportSize(size);g.turn=2;g.phase='move';g.pending=[1];await page.evaluate(g=>localStorage.setItem('max-yutnori-native-v4',JSON.stringify(g)),g);await page.reload();await ready();await stable();const normal=(await d()).camera;
  for(const piece of [0,1,0]){await page.locator('#pieces button').nth(piece).click();await stable();let c=(await d()).camera;assert.equal(c.phase,'follow');assertBoardVisible(c,size);assert.ok(distance(c)<=distance(normal)*1.15,'selection must not back away beyond the normal close framing');
   const points=(await d()).projectedDestinations;assert.ok(points.every(p=>p.x>c.safeInsets.left&&p.x<size.width-c.safeInsets.right&&p.y>c.safeInsets.top&&p.y<size.height-c.safeInsets.bottom),'destinations remain inside the safe viewport');
   await page.locator('#zoom2').click();await stable();const close=(await d()).camera;assert.ok(distance(close)<=distance(c)+.01,'×2 never makes action retreat farther');assert.equal(close.projectionZoom,1);assertBoardVisible(close,size);if(piece===0)await page.screenshot({path:`temp/native-camera-action-${size.width}.png`});await page.locator('#zoom2').click();await stable();
   await page.locator('#viewMode').selectOption('board');await stable();c=(await d()).camera;assert.equal(c.phase,'idle');assert.ok(Math.hypot(...c.position.map((n,i)=>n-normal.position[i]))<.01,'every action return restores the same close framing');samples.push({size,piece,normalDistance:distance(normal),actionDistance:distance(close)});
  }
  await page.screenshot({path:`temp/native-camera-proximity-${size.width}.png`});
 }
 await accumulatedCameraScenario(page,ready,report);
 await cameraAngleScenario(page,ready,report);
 report.cameraProximity=samples;
 report.checks.push('Repeated distant-reserve selections and returns retain close framing in landscape and portrait, including ×2 and all legal destinations');
}

async function accumulatedCameraScenario(page,ready,report){
 const g=createGame({teams:Array.from({length:4},(_,i)=>({players:[{name:`Humain ${i+1}`,computer:false}]}))});g.phase='move';g.pending=[5,1];
 await page.setViewportSize({width:844,height:390});await page.evaluate(g=>{localStorage.setItem('max-yutnori-native-v4',JSON.stringify(g));localStorage.setItem('max-yutnori-settings-v3',JSON.stringify({auto:false,reduced:true,low:true,music:false,actionCamera:true}));localStorage.removeItem('test-frozen-clock');},g);await page.reload();await ready();await page.locator('#zoom2').click();await page.locator('#pieces button').nth(2).click();await page.locator('#destinations button').filter({hasText:'Case 5'}).click();
 await page.waitForFunction(()=>{const d=window.maxYutDiagnostic();return d.state.pending.length===1&&d.camera.phase==='follow';});
 // Reduced animations settle each rendered pose directly; wait until the held pawn reaches its new support.
 await page.waitForFunction(()=>window.maxYutDiagnostic().projectedPawns.find(p=>p.team===0&&p.piece===2).position[0]>-2.3);
 await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
 const d=await page.evaluate(()=>window.maxYutDiagnostic()),c=d.camera;
 assert.equal(await page.locator('#pieces button[aria-pressed=true]').textContent(),'Pion 1');
 assert.ok(d.projectedDestinations.length>0);
 assert.ok(d.projectedDestinations.every(p=>p.x>c.safeInsets.left&&p.x<844-c.safeInsets.right&&p.y>c.safeInsets.top&&p.y<390-c.safeInsets.bottom),'remaining result must frame the new pawn and legal destination after another pawn moves');
 const selected=d.projectedPawns.find(p=>p.team===0&&p.piece===0);assert.ok(selected.x>c.safeInsets.left&&selected.x<844-c.safeInsets.right&&selected.y>c.safeInsets.top&&selected.y<390-c.safeInsets.bottom,'newly selected reserve pawn remains visible');
 report.checks.push('Accumulated results retarget the camera to the automatically selected next pawn and its legal destination with physical ×2');
}
