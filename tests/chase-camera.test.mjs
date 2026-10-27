import {test} from 'node:test';import assert from 'node:assert/strict';
import * as T from 'three';
import {ChaseCamera} from '../web/src/chase-camera.mjs';
const origin=new T.Vector3(-5,.25,2);
test('camera approaches, travels laterally then pulls back to include the destination',()=>{
 const chase=new ChaseCamera();chase.select(origin,[new T.Vector3(-5,.15,-2)]);
 const near=chase.frame(.8,origin,1.8,false),side=chase.frame(.5,origin,1.8,false),wide=chase.frame(1.5,origin,1.8,false);
 assert.ok(near.position.distanceTo(near.target)<5);assert.ok(Math.abs(side.position.x-near.position.x)>.25);
 assert.ok(wide.position.distanceTo(wide.target)>near.position.distanceTo(near.target));
 assert.equal(chase.phase,'follow');assert.ok(wide.target.distanceTo(origin)<3);
});
test('pinch interrupts cinema, follows the pawn and clamps manual zoom',()=>{
 const chase=new ChaseCamera();chase.select(origin,[]);chase.zoomBy(1.5);const a=chase.frame(.1,origin,1.8,false);
 const shifted=origin.clone().add(new T.Vector3(1,0,1)),b=chase.frame(.1,shifted,1.8,false);
 assert.equal(chase.phase,'follow');assert.ok(b.target.clone().sub(a.target).distanceTo(new T.Vector3(1,0,1))<.01);assert.ok(b.position.clone().sub(a.position).distanceTo(new T.Vector3(1,0,1))<.01);
 chase.zoomBy(1e10);const close=chase.frame(.1,shifted,1.8,false);assert.ok(close.position.distanceTo(close.target)>=2.9);
 chase.zoomBy(1e-20);const far=chase.frame(.1,shifted,1.8,false);assert.ok(far.position.distanceTo(far.target)<=60);
});
test('reduced animations skip the close-up and reset returns normal board control',()=>{
 const chase=new ChaseCamera();chase.select(origin,[]);const frame=chase.frame(.01,origin,1.8,true);
 assert.equal(chase.phase,'follow');assert.ok(frame.position.distanceTo(frame.target)<=6);chase.reset();assert.equal(chase.frame(.1,origin,1.8,false),null);
});

test('action framing includes every reserve-to-destination route in landscape and portrait',async()=>{
 const {createGame,recordThrow,legalMoves}=await import('../web/src/rules.mjs');const {pawnPosition,buildSelection}=await import('../web/src/board-layout.mjs');
 for(const aspect of [2.5,.7])for(const approach of [1,2])for(let team=0;team<4;team++)for(const result of [-1,1,5]){
  const g=createGame({teamCount:4});g.turn=team;g.phase='move';g.pending=[result];const source=new T.Vector3(...pawnPosition(g,team,0));
  const points=buildSelection(g,legalMoves(g).filter(m=>m.piece===0),0).destinations.map(p=>new T.Vector3(...p));
  const chase=new ChaseCamera();chase.select(source,points);const pose=chase.frame(3,source,aspect,false,approach);const camera=new T.PerspectiveCamera(42,aspect,.1,80);camera.position.copy(pose.position);camera.lookAt(pose.target);camera.updateMatrixWorld();
  for(const point of points){const p=point.clone().project(camera);assert.ok(Math.abs(p.x)<.95&&Math.abs(p.y)<.95,`team ${team} result ${result} aspect ${aspect}: ${p.x},${p.y}`);}
 }
});

test('drag follow remains a contraction even at close zoom after a distant view',()=>{
 const chase=new ChaseCamera();chase.select(origin,[]);
 for(const zoom of [.3,.5,1,1.8])for(const reference of [5,18,60]){chase.zoom=zoom;const gain=chase.dragGain(reference,1.8);assert.ok(gain>0);assert.ok(gain*reference/chase.followDistance(1.8)<.5,'camera displacement cannot outrun the finger correction');}
});

test('automatic retreat frames the route instead of backing away by its full radius',()=>{
 const focus=new T.Vector3(-8,.4,-4),destination=new T.Vector3(-2,.2,2);
 for(const aspect of [.7,2,2.6]){
  const chase=new ChaseCamera();chase.select(focus,[destination]);
  const pose=chase.frame(3,focus,aspect,false),distance=pose.position.distanceTo(pose.target);
  assert.ok(distance<17,`route must stay close at aspect ${aspect}, got ${distance}`);
  assert.ok(pose.target.distanceTo(focus)<focus.distanceTo(destination)*.75,'target stays on the playable route');
  const camera=new T.PerspectiveCamera(42,aspect,.1,80);camera.position.copy(pose.position);camera.lookAt(pose.target);camera.updateMatrixWorld();
  for(const point of [focus,destination]){const p=point.clone().project(camera);assert.ok(Math.abs(p.x)<.93&&Math.abs(p.y)<.93,'both ends stay visible');}
 }
});

test('x2 approaches the action physically and never increases its maximum retreat',()=>{
 const focus=new T.Vector3(-5,.5,0),destination=new T.Vector3(-4,.15,.7);
 const pose=factor=>{const c=new ChaseCamera();c.select(focus,[destination]);return c.frame(3,focus,2,false,factor);};
 const normal=pose(1),close=pose(2);
 assert.ok(close.position.distanceTo(close.target)<normal.position.distanceTo(normal.target)*.8,'x2 must move the camera closer');
 for(const point of [focus,destination]){const camera=new T.PerspectiveCamera(42,2,.1,80);camera.position.copy(close.position);camera.lookAt(close.target);camera.updateMatrixWorld();const p=point.clone().project(camera);assert.ok(Math.abs(p.x)<1&&Math.abs(p.y)<1);}
});
