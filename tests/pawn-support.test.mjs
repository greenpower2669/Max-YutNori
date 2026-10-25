import {test} from 'node:test';import assert from 'node:assert/strict';import {Vector3} from 'three';
import {createGame} from '../web/src/rules.mjs';import {pawnPosition,reservePosition} from '../web/src/board-layout.mjs';
import {advancePawn,stackOffsets} from '../web/src/pawn-motion.mjs';
test('reserve and finished pawns rest on table; playing pawns rest on raised nodes',()=>{
 const g=createGame({teamCount:4});for(let t=0;t<4;t++)for(let i=0;i<4;i++)for(const done of [false,true]){const p=reservePosition(t,i,done);assert.ok(p[1]+.005>=-.312&&p[1]+.005<-.29);}
 g.teams[0].pieces[0].pos='O5';g.teams[0].pieces[1].pos='O5';const a=pawnPosition(g,0,0),b=pawnPosition(g,0,1);assert.ok(a[1]+.005>=.1225&&a[1]+.005<.14);assert.ok(Math.abs(b[1]-a[1]-.21)<1e-8);
});
test('reserve to board and return rise before translation and descend only on destination',()=>{
 for(const [start,end] of [[[-7,-.31,3.95],[-5,.126,2.8]],[[-5,.126,2.8],[-7,-.31,3.95]]]){
  const p=new Vector3(...start),goal=new Vector3(...end);let travelled=false;
  for(let f=0;f<360;f++){const old=p.clone();advancePawn(p,goal,1/60,.48);if(Math.hypot(p.x-old.x,p.z-old.z)>1e-8){travelled=true;assert.ok(p.y>=.479);}if(p.y<.479&&Math.hypot(p.x-start[0],p.z-start[2])>.01)assert.ok(Math.hypot(p.x-goal.x,p.z-goal.z)<.006);}
  assert.ok(travelled);assert.ok(p.distanceTo(goal)<.001);
 }
});
test('pause preserves pose; reduced motion moves atomically to stack destination',()=>{
 const p=new Vector3(-7,-.31,4),goal=new Vector3(-5,.756,2.8),before=p.clone();advancePawn(p,goal,0,1.1);assert.deepEqual(p,before);advancePawn(p,goal,.016,1.1,true);assert.deepEqual(p,goal);
});
test('ordinary four-pawn stack preserves vertical spacing through rise travel and descent',()=>{
 const pawns=Array.from({length:4},(_,i)=>new Vector3(-5,.126+i*.21,2.8)),goals=pawns.map(p=>new Vector3(-3,p.y,1));
 const offsets=stackOffsets(pawns.map(p=>({...p,team:0})));
 for(let f=0;f<360;f++){
  pawns.forEach((p,i)=>advancePawn(p,goals[i],1/60,1.076+offsets[i]));
  for(let i=1;i<4;i++){assert.ok(Math.abs(pawns[i].y-pawns[i-1].y-.21)<.001);assert.ok(Math.hypot(pawns[i].x-pawns[0].x,pawns[i].z-pawns[0].z)<.001);}
 }
 pawns.forEach((p,i)=>assert.ok(p.distanceTo(goals[i])<.001));
});
test('captured stack fans out above supports and settles in separate reserve spaces',()=>{
 const pawns=Array.from({length:4},(_,i)=>new Vector3(-5,.126+i*.21,2.8)),goals=pawns.map((p,i)=>new Vector3(...reservePosition(0,i))),offsets=stackOffsets(pawns.map(p=>({...p,team:0})));
 for(let f=0;f<360;f++)pawns.forEach((p,i)=>{const old=p.clone();advancePawn(p,goals[i],1/60,1.076+offsets[i]);if(Math.hypot(p.x-old.x,p.z-old.z)>1e-8)assert.ok(p.y>=1.075);});
 pawns.forEach((p,i)=>assert.ok(p.distanceTo(goals[i])<.001));
});
