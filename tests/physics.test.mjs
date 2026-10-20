import {test} from 'node:test';import assert from 'node:assert/strict';
import {createPhysics} from '../web/src/physics.mjs';
test('real WASM throws settle inside bowl or explicitly report invalid faces',async()=>{
 const p=await createPhysics();let seed=193;const random=()=>((seed=(1664525*seed+1013904223)>>>0)/2**32);let valid=0;
 for(let t=0;t<12;t++){p.throwSticks(.55,{x:0,z:0},random);let result;
 for(let frame=0;frame<1800&&!result;frame++)result=p.step(1/120);
 assert.ok(result,'throw must terminate');assert.ok(p.bodies.every(b=>b.translation().y>-.5),'no tunnelling');
 if(!result.invalid){assert.equal(result.faces.length,4);valid++;}}
 assert.ok(valid>=10,`${valid}/12 valid throws`);p.world.free();
});
