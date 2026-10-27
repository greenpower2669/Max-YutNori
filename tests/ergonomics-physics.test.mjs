import {test} from 'node:test';import assert from 'node:assert/strict';
import {createPhysics,TABLE,TRAY} from '../web/src/physics.mjs';
import {BowlCycle} from '../web/src/bowl-cycle.mjs';
const seeded=seed=>()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
test('the real bowl, starting yut and dock all move right while staying over the table',async()=>{
 const p=await createPhysics();try{assert.ok(p.tray.translation().x>1.5);assert.ok(p.bodies.every(b=>b.translation().x>.7));p.setTrayPose({x:.4,roll:.28,pitch:.28});for(let i=0;i<120;i++)p.prepare(1/120);assert.ok(p.tray.translation().x+TRAY.radius<6.8);p.dockTray();assert.ok(Math.abs(p.tray.translation().x-1.6)<.001);}finally{p.world.free();}
});
test('both force ends are stronger and high-speed yut hit invisible walls above the wooden rim',async()=>{
 for(const power of [.3,1.5]){const p=await createPhysics();try{p.throwSticks(power,{x:1,z:-1},seeded(123));const vy=p.bodies[0].linvel().y;assert.ok(vy>=(power===.3?8.49:14.49),`vertical velocity ${vy}`);
 const b=p.bodies[0];b.setTranslation({x:6,y:8,z:0},true);b.setLinvel({x:80,y:0,z:0},true);for(let i=0;i<30;i++)p.step(1/120);assert.ok(b.translation().x<6.8,'a high fast stick cannot leave over the low rim');
 }finally{p.world.free();}}
});
test('all four physical volumes must clear a raised tilted rim before flight fading begins',async()=>{
 const p=await createPhysics(),c=new BowlCycle(p);try{
 p.setTrayPose({roll:.28,pitch:.28,lift:1.6});for(let i=0;i<120;i++)p.prepare(1/120);
 p.throwSticks(1.5,{x:0,z:0},seeded(42));c.launch?.();assert.equal(c.phase,'flying');
 const at=p.tray.translation();p.bodies.forEach((b,i)=>{b.setRotation({x:0,y:0,z:0,w:1},true);b.setTranslation({x:at.x+(i-1.5)*.5,y:at.y+6,z:0},true);});
 p.bodies[3].setRotation({x:Math.SQRT1_2,y:0,z:0,w:Math.SQRT1_2},true);p.bodies[3].setTranslation({x:at.x,y:at.y+2.4,z:0},true);
 c.update(.1);assert.equal(c.phase,'flying');assert.equal(p.tray.isEnabled(),true,'one lower tip keeps bowl collision enabled');
 p.bodies[3].setTranslation({x:at.x,y:at.y+6,z:0},true);const before=p.bodies.map(b=>({...b.translation()}));c.update(.01);assert.equal(p.tray.isEnabled(),false);assert.equal(p.active,true);assert.ok(p.bodies.every(b=>b.isDynamic()));assert.deepEqual(p.bodies.map(b=>({...b.translation()})),before,'hiding never teleports airborne yut');
 const opacity=c.opacity;c.update(0);assert.equal(c.opacity,opacity);for(let i=0;i<30;i++)c.update(.01);assert.equal(c.opacity,0);
 }finally{p.world.free();}
});
test('seeded minimal and maximal natural flights stay contained, settle and return to the moved bowl',async()=>{
 for(const power of [.3,1.5])for(const seed of [1,5,42,193]){const p=await createPhysics(),c=new BowlCycle(p);try{
 p.throwSticks(power,{x:1,z:-1},seeded(seed));c.launch?.();let result,hidden=false,peak=0;
 for(let i=0;i<1800&&!result;i++){result=p.step(1/120);c.update(1/120);hidden||=c.opacity===0;for(const b of p.bodies){const q=b.translation();peak=Math.max(peak,q.y);assert.ok(q.x>-16.85&&q.x<6.85&&Math.abs(q.z)<5.85&&q.y>-.5,`power ${power}, seed ${seed}, ${JSON.stringify(q)}`);}}
 assert.ok(result);assert.ok(hidden,'bowl hides during real flight');assert.ok(peak>(power===.3?5.3:11));c.settle();c.requestStow();for(let i=0;i<600&&!c.ready;i++)c.update(1/120);assert.equal(c.ready,true);assert.ok(p.bodies.every(b=>Math.abs(b.translation().x-1.6)<1&&Math.abs(b.translation().z)<.1));
 }finally{p.world.free();}}
});
test('invisible walls contain outward motion on every edge and at a high diagonal corner',async()=>{
 for(const [x,z,vx,vz] of [[6,0,80,0],[-16,0,-80,0],[-5,5,0,80],[-5,-5,0,-80],[6,5,80,80]]){const p=await createPhysics();try{p.throwSticks(1.5,{x:0,z:0},seeded(5));const b=p.bodies[0];b.setTranslation({x,y:18,z},true);b.setLinvel({x:vx,y:0,z:vz},true);for(let i=0;i<60;i++){p.step(1/120);const a=b.translation();assert.ok(a.x>-16.85&&a.x<6.85&&Math.abs(a.z)<5.85,'high-speed edge or corner escape');}}finally{p.world.free();}}
});
test('reduced animations still wait for geometric clearance and elapsed time alone cannot hide a stuck launch',async()=>{
 const p=await createPhysics(),c=new BowlCycle(p);try{p.throwSticks(.3);c.launch();p.bodies.forEach(b=>b.setTranslation({x:1.6,y:1,z:0},true));for(let i=0;i<200;i++)c.update(.1,true);assert.equal(c.phase,'flying');assert.equal(p.tray.isEnabled(),true);p.bodies.forEach(b=>b.setTranslation({x:1.6,y:5,z:0},true));c.update(.01,true);assert.equal(c.opacity,0);assert.equal(p.tray.isEnabled(),false);assert.equal(p.active,true);}finally{p.world.free();}
});
