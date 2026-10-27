import {test} from 'node:test';import assert from 'node:assert/strict';
import {BowlCycle} from '../web/src/bowl-cycle.mjs';
import {createPhysics} from '../web/src/physics.mjs';
test('real WASM throws settle inside bowl or explicitly report invalid faces',async()=>{
 const p=await createPhysics(),cycle=new BowlCycle(p);let seed=193;const random=()=>((seed=(1664525*seed+1013904223)>>>0)/2**32);let valid=0;
 for(let t=0;t<12;t++){p.reset();cycle.reset();p.throwSticks(.55,{x:0,z:0},random);cycle.launch();let result;
 for(let frame=0;frame<1800&&!result;frame++){result=p.step(1/120);cycle.update(1/120);}
 assert.ok(result,'throw must terminate');assert.ok(p.bodies.every(b=>b.translation().y>-.5),'no tunnelling');
 if(!result.invalid){assert.equal(result.faces.length,4);valid++;}}
 assert.ok(valid>=10,`${valid}/12 valid throws`);p.world.free();
});

test('a continuously moving throw at the deadline must be invalid',async()=>{
 const p=await createPhysics();p.throwSticks();let result;
 for(let i=0;i<1600&&!result;i++){
  p.bodies.forEach((body,j)=>{body.setTranslation({x:(j-1.5)*.5,y:.3,z:0},true);body.setRotation({x:0,y:0,z:0,w:1},true);body.setLinvel({x:1,y:0,z:0},true);body.setAngvel({x:0,y:0,z:0},true);});
  result=p.step(1/120);
 }
 assert.ok(result);assert.ok(result.seconds>=12);assert.equal(result.invalid,true,'readable faces are insufficient while bodies still move');p.world.free();
});

test('automatic loft rises higher while returning all sticks inside the table',async()=>{
 const peak=async loft=>{const p=await createPhysics();let seed=102;const random=()=>((seed=(1664525*seed+1013904223)>>>0)/2**32);p.throwSticks(.6,{x:0,z:0},random,{loft});let height=0,result;
 for(let i=0;i<1600&&!result;i++){result=p.step(1/120);height=Math.max(height,...p.bodies.map(b=>b.translation().y));}
 assert.ok(result);for(const b of p.bodies){const q=b.translation();assert.ok(q.x>-16&&q.x<6&&Math.abs(q.z)<5.7);}p.world.free();return height;};
 assert.ok(await peak(2.5)>await peak(0)+1.3);
});
