import assert from 'node:assert/strict';
import {createGame,recordThrow} from '../web/src/rules.mjs';
export async function actionScenarios(page,ready,report){
 const diagnostic=()=>page.evaluate(()=>window.maxYutDiagnostic());
 const load=async g=>{await page.evaluate(g=>{localStorage.setItem('max-yutnori-native-v4',JSON.stringify(g));localStorage.removeItem('test-frozen-clock');const s=JSON.parse(localStorage.getItem('max-yutnori-settings-v3')||'{}');Object.assign(s,{auto:false,reduced:false,actionCamera:true,low:true});localStorage.setItem('max-yutnori-settings-v3',JSON.stringify(s));},g);await page.reload();await ready();};
 const pawn=async piece=>(await diagnostic()).projectedPawns.find(p=>p.team===0&&p.piece===piece);
 const stable=async()=>{await page.evaluate(()=>{window.__cameraPrevious=null;window.__cameraStable=0;});await page.waitForFunction(()=>{const p=window.maxYutDiagnostic().camera.position,o=window.__cameraPrevious;window.__cameraPrevious=p;window.__cameraStable=o&&Math.hypot(...p.map((v,i)=>v-o[i]))<.002?window.__cameraStable+1:0;return window.__cameraStable>=3;});};
 await page.setViewportSize({width:1000,height:600});
 const g=createGame({computers:[false,false]});recordThrow(g,4);recordThrow(g,5);recordThrow(g,2);await load(g);await stable();
 const reserve=await pawn(2);await page.mouse.click(reserve.x,reserve.y);await page.waitForFunction(()=>window.maxYutDiagnostic().camera.phase==='lateral');
 const near=await diagnostic();const norm=(a,b)=>Math.hypot(...a.map((v,i)=>v-b[i]));assert.ok(norm(near.camera.position,near.camera.target)<6);
 await page.waitForFunction(()=>window.maxYutDiagnostic().camera.phase==='follow');await stable();const wide=await diagnostic();assert.ok(norm(wide.camera.position,wide.camera.target)>8);assert.deepEqual(wide.state.pending,[4,5,2]);await page.screenshot({path:'temp/native-action-camera.png'});
 assert.equal(await page.locator('#pieces button[aria-pressed=true]').textContent(),'Pion 3');report.checks.push('Touch selects a reserve pawn; camera approaches, moves sideways, then reveals action without consuming a result');
 // Real two-touch sequence: primary holds the pawn, secondary controls zoom.
 await page.evaluate(()=>{window.__pointers=[];for(const type of ['pointerdown','pointerup','pointercancel','lostpointercapture'])document.addEventListener(type,e=>window.__pointers.push({type,id:e.pointerId,x:e.clientX,y:e.clientY}),{capture:true});});
 const cdp=await page.context().newCDPSession(page);let touches=[];
 const send=async(type,points)=>{touches=points;await cdp.send('Input.dispatchTouchEvent',{type,touchPoints:points.map(p=>({...p,radiusX:3,radiusY:3,force:1}))});};
 let p=await pawn(2),first={id:1,x:p.x,y:p.y};await send('touchStart',[first]);first={...first,x:first.x+18};await send('touchMove',[first]);
 await page.waitForFunction(()=>window.maxYutDiagnostic().camera.dragging);
 const second={id:2,x:first.x+65,y:first.y-30};await send('touchStart',[first,second]);await send('touchMove',[first,{...second,x:second.x+65}]);
 await page.waitForFunction(()=>window.maxYutDiagnostic().camera.zoom<.8);await stable();await page.screenshot({path:'temp/native-action-pinch.png'});p=await pawn(2);assert.ok(Math.hypot(p.x-first.x,p.y-first.y)<3,'held pawn stays under the first finger during zoom');
 await send('touchMove',[first]);assert.equal((await diagnostic()).camera.dragging,true,JSON.stringify(await page.evaluate(()=>window.__pointers)));assert.deepEqual((await diagnostic()).state.pending,[4,5,2]);
 let destination;
 for(let i=0;i<5;i++){destination=(await diagnostic()).projectedDestinations[0];first={...first,x:destination.x,y:destination.y};await send('touchMove',[first]);await page.evaluate(()=>new Promise(r=>requestAnimationFrame(r)));}
 const beforeDrop=await diagnostic();assert.equal(beforeDrop.camera.candidate,'O4');await send('touchEnd',[]);
 const moved=await diagnostic();assert.equal(moved.state.teams[0].pieces[2].pos,'O4');assert.deepEqual(moved.state.pending,[5,2]);report.checks.push('Two-finger zoom keeps the pawn under its finger; releasing only the second finger does not drop; legal drag consumes one result');
 // Order can be changed after a move, and a cancelled or invalid drag does not spend it.
 await page.locator('#results button').filter({hasText:'Gae'}).click();await page.locator('#pieces button').filter({hasText:'Pion 3'}).click();await page.waitForFunction(()=>window.maxYutDiagnostic().camera.phase==='follow');await stable();
 p=await pawn(2);first={id:1,x:p.x,y:p.y};await send('touchStart',[first]);first={...first,x:10,y:200};await send('touchMove',[first]);await send('touchEnd',[]);assert.deepEqual((await diagnostic()).state.pending,[5,2]);
 await page.locator('[data-view=board]').click();await stable();p=await pawn(2);first={id:1,x:p.x,y:p.y};await send('touchStart',[first]);first={...first,x:first.x+30};await send('touchMove',[first]);await page.evaluate(()=>window.setNativePaused(true));await send('touchEnd',[]);assert.deepEqual((await diagnostic()).state.pending,[5,2]);assert.equal((await diagnostic()).camera.dragging,false);await page.evaluate(()=>window.setNativePaused(false));
 await page.locator('#destinations button').first().click();assert.deepEqual((await diagnostic()).state.pending,[5]);assert.equal((await diagnostic()).state.teams[0].pieces[2].pos,'O6');report.checks.push('Invalid drop and pause preserve the result; accumulated results play in chosen order 4 then 2 then 5');
 const back=createGame({computers:[false,false]});back.phase='move';back.pending=[-1,1];await load(back);assert.equal(await page.getByText('Passer ce résultat',{exact:true}).count(),0);
 await page.locator('#destinations button').filter({hasText:'Case 19'}).click();let d=await diagnostic();assert.equal(d.state.teams[0].pieces[0].laps,2);await page.locator('#destinations button').filter({hasText:'Case 20'}).click();d=await diagnostic();assert.equal(d.state.teams[0].pieces[0].pos,'O20');assert.equal(d.state.teams[0].pieces[0].laps,1);report.checks.push('Back-do is playable from reserve; reversing across the line adds a lap and returning does not finish');
 await cdp.detach();
}
