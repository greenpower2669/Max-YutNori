import {test} from 'node:test';
import assert from 'node:assert/strict';
import {MotionThrow} from '../web/src/motion.mjs';
// Hardware is the only substituted boundary; filtering and the real throw detector run together.
async function setup({angle=0,permission,secure=true,policy=true}={}){
 const {BrowserMotion}=await import('../web/pwa/motion.mjs');
 const win=new EventTarget(),motion=new MotionThrow(),throws=[],tilts=[];
 Object.assign(win,{isSecureContext:secure,DeviceMotionEvent:permission?{requestPermission:permission}:function(){},screen:{orientation:{angle}},document:{hidden:false,permissionsPolicy:{allowsFeature:()=>policy}},performance:{now:()=>0}});
 win.onNativeMotion=(x,y,z,time)=>{const impulse=motion.sample({x,y,z,time},true);if(impulse)throws.push(impulse);};
 win.onNativeTilt=(x,y,z,time)=>tilts.push({x,y,z,time});
 const bridge=new BrowserMotion(win);win.onNativeMotionStatus=available=>bridge.setEnabled(available);
 const send=(time,acceleration={x:0,y:0,z:0},accelerationIncludingGravity={x:0,y:0,z:9.81})=>{const e=new Event('devicemotion');Object.defineProperties(e,{timeStamp:{value:time},acceleration:{value:acceleration},accelerationIncludingGravity:{value:accelerationIncludingGravity}});win.dispatchEvent(e);};
 bridge.start();return {win,bridge,throws,tilts,send};
}
function rest(s,start=0){for(let t=start;t<=start+1000;t+=40)s.send(t);}
test('browser device motion reaches the existing throw detector after rest, once only',async()=>{
 const s=await setup();assert.equal(s.bridge.available(),false);rest(s);assert.equal(s.bridge.available(),true);assert.equal(s.throws.length,0);s.send(1040,{x:20,y:0,z:0});assert.equal(s.throws.length,1);s.send(1080,{x:20,y:0,z:0});assert.equal(s.throws.length,1);
});
test('screen rotation uses the same axes as Android in both landscapes',async()=>{
 for(const [angle,x] of [[90,-20],[270,20]]){const s=await setup({angle});rest(s);s.send(1040,{x:0,y:20,z:0});assert.equal(s.throws.length,1);assert.equal(s.throws[0].direction.x,Math.sign(x));assert.equal(Math.abs(s.throws[0].direction.z),0);}
});
test('fallback removes gravity and does not launch on a stationary phone',async()=>{
 const s=await setup();for(let t=0;t<=1200;t+=40)s.send(t,null);assert.equal(s.throws.length,0);s.send(1240,null,{x:20,y:0,z:9.81});assert.equal(s.throws.length,1);assert.ok(s.tilts.length>0);
});
test('pause and resume discard old arming and rotation starts a fresh calibration',async()=>{
 const s=await setup();rest(s);s.bridge.setEnabled(false);s.send(1040,{x:30,y:0,z:0});assert.equal(s.throws.length,0);s.bridge.setEnabled(true);s.send(1080,{x:30,y:0,z:0});assert.equal(s.throws.length,0);rest(s,1120);s.win.screen.orientation.angle=90;s.send(2160,{x:30,y:0,z:0});assert.equal(s.throws.length,0);rest(s,2200);s.send(3240,{x:0,y:20,z:0});assert.equal(s.throws.length,1);
});
test('permission is requested by activation only; rejection and no sensor are not availability',async()=>{
 let calls=0;const s=await setup({permission:async()=>{calls++;return 'denied';}});s.send(0);assert.equal(calls,0);assert.equal(s.bridge.available(),false);await s.bridge.request();assert.equal(calls,1);assert.equal(s.bridge.status().state,'denied');rest(s);assert.equal(s.bridge.available(),false);
 const granted=await setup({permission:async()=>'granted'});await granted.bridge.request();rest(granted);assert.equal(granted.bridge.available(),true);
});
test('invalid/null data, HTTPS and permissions policy cannot enable or launch sensors',async()=>{
 const s=await setup();for(let t=0;t<1000;t+=40)s.send(t,null,{x:null,y:null,z:null});assert.equal(s.bridge.available(),false);s.send(1000,{x:NaN,y:0,z:0},null);assert.equal(s.bridge.available(),false);
 for(const options of [{secure:false},{policy:false}]){const blocked=await setup(options);rest(blocked);assert.equal(blocked.bridge.available(),false);assert.equal(blocked.throws.length,0);}
});
test('default motion requests permission on interaction once, preserving explicit OFF and refusal',async()=>{
 let calls=0,resolve;const s=await setup({permission:()=>{calls++;return new Promise(r=>resolve=r);}});
 assert.equal(calls,0);
 await s.bridge.activateOnInteraction?.(false);assert.equal(calls,0);
 const first=s.bridge.activateOnInteraction?.(true);assert.equal(calls,1);
 await s.bridge.activateOnInteraction?.(true);assert.equal(calls,1);
 resolve('denied');await first;assert.equal(s.bridge.status().state,'denied');
 await s.bridge.activateOnInteraction?.(true);assert.equal(calls,1);
});
test('default permission granted still requires samples before enabling the detector',async()=>{
 let calls=0;const s=await setup({permission:async()=>{calls++;return 'granted';}});
 await s.bridge.activateOnInteraction?.(true);assert.equal(calls,1);assert.equal(s.bridge.available(),false);
 rest(s);s.send(1040,{x:20,y:0,z:0});assert.equal(s.throws.length,1);
});
