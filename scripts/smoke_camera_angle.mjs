import assert from 'node:assert/strict';
import {PerspectiveCamera,Vector3} from 'three';
import {createGame} from '../web/src/rules.mjs';
// Project independent measurements of the real rim through the browser's actual camera pose.
export function assertBoardVisible(pose,size){
 const {top,bottom,left=0,right=0}=pose.safeInsets,w=Math.max(100,size.width-left-right),h=Math.max(80,size.height-top-bottom);
 const camera=new PerspectiveCamera(pose.fov,w/h,.1,80);camera.position.fromArray(pose.position);camera.lookAt(new Vector3().fromArray(pose.target));camera.setViewOffset(w,h,-left,-top,size.width,size.height);camera.updateMatrixWorld();
 for(let i=0;i<64;i++)for(const y of [-.26,.16]){const a=i*Math.PI/32,p=new Vector3(-5+3.7*Math.cos(a),y,3.7*Math.sin(a)).project(camera),x=(p.x+1)*size.width/2,screenY=(1-p.y)*size.height/2;assert.ok(x>left+2&&x<size.width-right-2&&screenY>top+2&&screenY<size.height-bottom-2,`board rim must stay in usable view: ${x.toFixed(1)},${screenY.toFixed(1)}; bounds ${left},${top}..${size.width-right},${size.height-bottom}`);}
}
export async function cameraAngleScenario(page,ready,report){
 const g=createGame({teams:Array.from({length:4},(_,i)=>({players:[{name:i===0?'Joueur 1':`Humain ${i+1}`,computer:false}]}))});g.phase='move';g.pending=[1];
 const size={width:844,height:390};await page.setViewportSize(size);await page.evaluate(g=>{localStorage.setItem('max-yutnori-native-v4',JSON.stringify(g));localStorage.setItem('max-yutnori-settings-v3',JSON.stringify({low:true,reduced:true,music:false,auto:false,actionCamera:true}));localStorage.removeItem('test-frozen-clock');},g);await page.reload();await ready();await page.locator('#zoom2').click();await page.locator('#pieces button').first().click();await page.waitForFunction(()=>window.maxYutDiagnostic().camera.phase==='follow');await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
 await page.screenshot({path:'temp/native-camera-angle-844.png'});const d=await page.evaluate(()=>window.maxYutDiagnostic());assertBoardVisible(d.camera,size);assert.ok(d.projectedDestinations.every(p=>p.x>d.camera.safeInsets.left&&p.x<size.width-d.camera.safeInsets.right&&p.y>d.camera.safeInsets.top&&p.y<size.height-d.camera.safeInsets.bottom));
 report.checks.push('Screenshot25695 regression: reserve pawn selected with physical x2 keeps the entire playing surface and far rim clear of the HUD');
}
