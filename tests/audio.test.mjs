import {test} from 'node:test';import assert from 'node:assert/strict';
import {createPhysics} from '../web/src/physics.mjs';
test('real physical throw reports bounded audible impacts',async()=>{const impacts=[];const p=await createPhysics({onImpact:s=>impacts.push(s)});p.throwSticks();for(let i=0;i<1500&&p.active;i++)p.step(1/120);assert.ok(impacts.length>0);assert.ok(impacts.every(v=>v>0&&v<=1));p.world.free();});
test('impact limiter rejects chatter, clamps strength and ignores silence',async()=>{const {ImpactLimiter}=await import('../web/src/impact.mjs');const l=new ImpactLimiter();assert.equal(l.accept(0,1),0);assert.equal(l.accept(.6,1),.6);assert.equal(l.accept(1,1.01),0);assert.equal(l.accept(20,1.1),1);assert.equal(l.accept(NaN,2),0);});
