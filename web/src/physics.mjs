import RAPIER from '@dimforge/rapier3d-compat';
export const RADIUS=.19,LENGTH=1.65,BOWL_RADIUS=2.65;
export async function createPhysics(){
 await RAPIER.init();const world=new RAPIER.World({x:0,y:-9.81,z:0});world.timestep=1/120;world.numSolverIterations=8;
 world.createCollider(RAPIER.ColliderDesc.cylinder(.12,2.85).setTranslation(0,-.12,0).setFriction(.7).setRestitution(.35));
 for(let i=0;i<40;i++){const a=i*Math.PI*2/40;world.createCollider(RAPIER.ColliderDesc.cuboid(.16,.65,2.75*Math.tan(Math.PI/40)+.015).setTranslation(Math.cos(a)*2.75,.65,Math.sin(a)*2.75).setRotation({x:0,y:Math.sin(-a/2),z:0,w:Math.cos(-a/2)}).setFriction(.04).setFrictionCombineRule(RAPIER.CoefficientCombineRule.Min).setRestitution(.4));}
 const vertices=[];for(const z of [-LENGTH/2,LENGTH/2])for(let j=0;j<=16;j++){const a=j*Math.PI/16;vertices.push(Math.cos(a)*RADIUS,Math.sin(a)*RADIUS-.08,z);}
 const bodies=Array.from({length:4},(_,i)=>{const b=world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation((i-1.5)*.5,.15,0).setCcdEnabled(true).setLinearDamping(.22).setAngularDamping(1));world.createCollider(RAPIER.ColliderDesc.convexHull(new Float32Array(vertices)).setDensity(1).setFriction(.7).setRestitution(.35),b);return b;});
 for(let i=0;i<150;i++)world.step();let active=false,elapsed=0,stable=0,accumulator=0;
 return {world,bodies,get active(){return active;},
 throwSticks(power=.6,direction={x:0,z:0},random=Math.random){power=Math.max(.15,Math.min(1,power));bodies.forEach((b,i)=>{
 b.setTranslation({x:(i-1.5)*.5,y:1.7+i*.12,z:(random()-.5)*.7},true);
 const q={x:random()-.5,y:random()-.5,z:random()-.5,w:random()-.5};const norm=Math.hypot(q.x,q.y,q.z,q.w);for(const k in q)q[k]/=norm||1;b.setRotation(q,true);
 b.setLinvel({x:(random()-.5)*1.5+Math.max(-1,Math.min(1,direction.x||0)),y:2+power*2,z:(random()-.5)*1.5+Math.max(-1,Math.min(1,direction.z||0))},true);
 b.setAngvel({x:(random()-.5)*16,y:(random()-.5)*12,z:(random()-.5)*16},true);});active=true;elapsed=stable=accumulator=0;},
 step(dt){if(!active)return null;accumulator+=Math.min(.1,Math.max(0,dt));
 while(accumulator>=1/120){world.step();accumulator-=1/120;elapsed+=1/120;const stopped=bodies.every(b=>{const v=b.linvel(),a=b.angvel();return Math.hypot(v.x,v.y,v.z)<.1&&Math.hypot(a.x,a.y,a.z)<.2;});stable=stopped?stable+1/120:0;
 if(elapsed>1.5&&stable>.45||elapsed>=12){active=false;const faces=[];let invalid=stable<=.45;for(const b of bodies){const q=b.rotation(),p=b.translation(),flatY=2*(q.x*q.x+q.z*q.z)-1;faces.push(flatY>0);if(Math.abs(flatY)<.68||Math.hypot(p.x,p.z)>BOWL_RADIUS+.3||p.y>1.2)invalid=true;}
 return {faces,invalid,seconds:elapsed};}}
 return null;}
 };
}
