import {test} from 'node:test';import assert from 'node:assert/strict';
import * as T from 'three';
import {ChaseCamera} from '../web/src/chase-camera.mjs';
const origin=new T.Vector3(-5,.25,2);
test('camera approaches, travels laterally then pulls back to include the destination',()=>{
 const chase=new ChaseCamera();chase.select(origin,[new T.Vector3(-5,.15,-2)]);
 const near=chase.frame(.8,origin,1.8,false),side=chase.frame(.5,origin,1.8,false),wide=chase.frame(1.5,origin,1.8,false);
 assert.ok(near.position.distanceTo(near.target)<5);assert.ok(Math.abs(side.position.x-near.position.x)>.25);
 assert.ok(wide.position.distanceTo(wide.target)>near.position.distanceTo(near.target)+4);
 assert.equal(chase.phase,'follow');assert.ok(wide.target.distanceTo(origin)<.01);
});
test('pinch interrupts cinema, follows the pawn and clamps manual zoom',()=>{
 const chase=new ChaseCamera();chase.select(origin,[]);chase.zoomBy(1.5);const a=chase.frame(.1,origin,1.8,false);
 const shifted=origin.clone().add(new T.Vector3(1,0,1)),b=chase.frame(.1,shifted,1.8,false);
 assert.equal(chase.phase,'follow');assert.ok(b.target.distanceTo(shifted)<.01);assert.ok(b.position.clone().sub(a.position).distanceTo(new T.Vector3(1,0,1))<.01);
 chase.zoomBy(1e10);const close=chase.frame(.1,shifted,1.8,false);assert.ok(close.position.distanceTo(close.target)>=2.9);
 chase.zoomBy(1e-20);const far=chase.frame(.1,shifted,1.8,false);assert.ok(far.position.distanceTo(far.target)<=28);
});
test('reduced animations skip the close-up and reset returns normal board control',()=>{
 const chase=new ChaseCamera();chase.select(origin,[]);const frame=chase.frame(.01,origin,1.8,true);
 assert.equal(chase.phase,'follow');assert.ok(frame.position.distanceTo(frame.target)>8);chase.reset();assert.equal(chase.frame(.1,origin,1.8,false),null);
});
