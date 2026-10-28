import assert from 'node:assert/strict';
import {createGame} from '../web/src/rules.mjs';
export async function webMotionScenario(page,ready,report){
 const fresh=createGame({teamCount:4});
 const reset=async(permission='')=>{
  await page.evaluate(({fresh,permission})=>{localStorage.setItem('max-yutnori-native-v4',JSON.stringify(fresh));localStorage.removeItem('max-yutnori-last-throw-v1');localStorage.setItem('test-motion-permission',permission);const settings=JSON.parse(localStorage.getItem('max-yutnori-settings-v3'))||{};Object.assign(settings,{auto:false,motion:true});localStorage.setItem('max-yutnori-settings-v3',JSON.stringify(settings));},{fresh,permission});
  await page.reload();await ready();
 };
 await page.addInitScript(()=>{
  const permission=localStorage.getItem('test-motion-permission');
  if(permission)Object.defineProperty(DeviceMotionEvent,'requestPermission',{value:async()=>{window.__permissionRequests=(window.__permissionRequests||0)+1;return permission;},configurable:true});
 });
 const gesture=()=>page.evaluate(async()=>{
  const send=(x=0)=>window.dispatchEvent(new DeviceMotionEvent('devicemotion',{acceleration:{x,y:0,z:0},accelerationIncludingGravity:{x,y:0,z:9.81},interval:40}));
  // Real monotonic event timestamps, through the real window listener, never the native callbacks.
  for(let i=0;i<28;i++){send();await new Promise(r=>setTimeout(r,40));}send(20);
 });
 await reset();await gesture();assert.equal((await page.evaluate(()=>window.maxYutDiagnostic())).rolling,true);assert.equal((await page.evaluate(()=>window.maxYutWebMotionDiagnostic())).source,'linear');report.checks.push('Browser DeviceMotion events launch real Rapier physics through the Web adapter');
 await reset();await page.getByRole('button',{name:'Pause',exact:true}).click();await gesture();assert.equal((await page.evaluate(()=>window.maxYutDiagnostic())).rolling,false);await page.getByRole('button',{name:'Reprendre la partie',exact:true}).click();await gesture();assert.equal((await page.evaluate(()=>window.maxYutDiagnostic())).rolling,true);report.checks.push('Browser motion cannot throw while paused and rearms on resume');
 await reset();await page.getByRole('button',{name:'Réglages',exact:true}).click();await gesture();assert.equal(await page.locator('#motion').isDisabled(),false);assert.equal(await page.locator('#enableWebMotion').isHidden(),true);await page.locator('#motion').uncheck();await page.locator('#settings [data-close]').click();await gesture();assert.equal((await page.evaluate(()=>window.maxYutDiagnostic())).rolling,false);await page.reload();await ready();await gesture();assert.equal((await page.evaluate(()=>window.maxYutDiagnostic())).motion.enabled,false);assert.equal((await page.evaluate(()=>window.maxYutDiagnostic())).rolling,false);report.checks.push('Sensor availability needs data; explicit motion OFF survives reload');
 await reset('denied');await page.getByRole('button',{name:'Réglages',exact:true}).click();assert.equal(await page.evaluate(()=>window.__permissionRequests||0),0);assert.equal(await page.locator('#motion').isDisabled(),true);await page.locator('#enableWebMotion').click();assert.equal(await page.evaluate(()=>window.__permissionRequests),1);await gesture();assert.equal(await page.locator('#motion').isDisabled(),true);assert.match(await page.locator('#motionStatus').textContent(),/refusé/);report.checks.push('Permission is requested by the activation button; denied sensors stay unavailable');
 await reset('granted');await page.getByRole('button',{name:'Réglages',exact:true}).click();await page.locator('#enableWebMotion').click();await page.locator('#settings [data-close]').click();await gesture();assert.equal((await page.evaluate(()=>window.maxYutDiagnostic())).rolling,true);report.checks.push('Granted permission enables browser motion and a real throw');
 await reset();
}
