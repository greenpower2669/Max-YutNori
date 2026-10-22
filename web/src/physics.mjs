import RAPIER from '@dimforge/rapier3d-compat';
import {ImpactLimiter} from './impact.mjs';
export const RADIUS=.19,LENGTH=1.65,BOWL_RADIUS=2.65;
// Physics coordinates are centred on the tray; the scene adds WX=5.
export const TABLE={centerX:-5,halfX:12,halfZ:6,top:-.33,rimY:.2,rimHalfHeight:.55,rimThickness:.15};
const clamp=(n,min,max)=>Math.max(min,Math.min(max,Number.isFinite(n)?n:0));
export async function createPhysics({onImpact=()=>{}}={}){
 await RAPIER.init();const world=new RAPIER.World({x:0,y:-9.81,z:0});world.timestep=1/120;world.numSolverIterations=8;
 const collider=desc=>world.createCollider(desc.setFriction(.75).setRestitution(.28));
 collider(RAPIER.ColliderDesc.cuboid(TABLE.halfX,.15,TABLE.halfZ).setTranslation(TABLE.centerX,-.48,0));
 for(const x of [-16.85,6.85])collider(RAPIER.ColliderDesc.cuboid(.15,.55,6).setTranslation(x,.2,0));
 for(const z of [-5.85,5.85])collider(RAPIER.ColliderDesc.cuboid(11.7,.55,.15).setTranslation(-5,.2,z));
 // The board and tray support are solid too, matching the visible table furniture.
 collider(RAPIER.ColliderDesc.cylinder(.19,3.65).setTranslation(-10,-.09,0));
 collider(RAPIER.ColliderDesc.cylinder(.4,1.05).setTranslation(0,.07,0));
 const tray=world.createRigidBody(RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(0,.65,0));
 world.createCollider(RAPIER.ColliderDesc.cylinder(.12,2.85).setTranslation(0,-.12,0).setFriction(.7).setRestitution(.3),tray);
 for(let i=0;i<40;i++){const a=i*Math.PI*2/40;world.createCollider(RAPIER.ColliderDesc.cuboid(.16,.65,2.75*Math.tan(Math.PI/40)+.015).setTranslation(Math.cos(a)*2.75,.65,Math.sin(a)*2.75).setRotation({x:0,y:Math.sin(-a/2),z:0,w:Math.cos(-a/2)}).setFriction(.04).setFrictionCombineRule(RAPIER.CoefficientCombineRule.Min).setRestitution(.35),tray);}
 const vertices=[];for(const z of [-LENGTH/2,LENGTH/2])for(let j=0;j<=16;j++){const a=j*Math.PI/16;vertices.push(Math.cos(a)*RADIUS,Math.sin(a)*RADIUS-.08,z);}
 const bodies=Array.from({length:4},(_,i)=>{const b=world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation((i-1.5)*.5,.85,0).setCcdEnabled(true).setLinearDamping(.22).setAngularDamping(1));world.createCollider(RAPIER.ColliderDesc.convexHull(new Float32Array(vertices)).setDensity(1).setFriction(.7).setRestitution(.3).setActiveEvents(RAPIER.ActiveEvents.CONTACT_FORCE_EVENTS).setContactForceEventThreshold(.6),b);return b;});
 for(let i=0;i<150;i++)world.step();let active=false,elapsed=0,stable=0,accumulator=0,preparation=0;const events=new RAPIER.EventQueue(true);let impacts=new ImpactLimiter();
 let pose={roll:0,pitch:0,x:0,z:0,lift:0},target={...pose};
 function advanceTray(){for(const k of Object.keys(pose))pose[k]+=(target[k]-pose[k])*(1-Math.exp(-10/120));const sx=Math.sin(pose.pitch/2),cx=Math.cos(pose.pitch/2),sz=Math.sin(pose.roll/2),cz=Math.cos(pose.roll/2);tray.setNextKinematicTranslation({x:pose.x,y:.65+pose.lift,z:pose.z});tray.setNextKinematicRotation({x:sx*cz,y:-sx*sz,z:cx*sz,w:cx*cz});}
 function freezeTray(){target={...pose};tray.setNextKinematicTranslation(tray.translation());tray.setNextKinematicRotation(tray.rotation());}
 return {world,bodies,tray,get active(){return active;},
 reset(){active=false;elapsed=stable=accumulator=preparation=0;impacts=new ImpactLimiter();pose={roll:0,pitch:0,x:0,z:0,lift:0};target={...pose};tray.setTranslation({x:0,y:.65,z:0},true);tray.setRotation({x:0,y:0,z:0,w:1},true);freezeTray();bodies.forEach((b,i)=>{b.setTranslation({x:(i-1.5)*.5,y:.85,z:0},true);b.setRotation({x:0,y:0,z:0,w:1},true);b.setLinvel({x:0,y:0,z:0},true);b.setAngvel({x:0,y:0,z:0},true);});},
 setTrayPose(next){if(active)return;target={roll:clamp(next.roll,-.28,.28),pitch:clamp(next.pitch,-.28,.28),x:clamp(next.x,-.4,.4),z:clamp(next.z,-.4,.4),lift:clamp(next.lift,0,.2)};},
 prepare(dt){if(active)return;preparation+=clamp(dt,0,.1);while(preparation>=1/120){advanceTray();world.step();preparation-=1/120;}},
 throwSticks(power=.6,direction={x:0,z:0},random=Math.random){power=clamp(power,.15,1);freezeTray();const at=tray.translation();bodies.forEach((b,i)=>{
 b.setTranslation({x:at.x+(i-1.5)*.5,y:at.y+1.7+i*.12,z:at.z+(random()-.5)*.7},true);
 const q={x:random()-.5,y:random()-.5,z:random()-.5,w:random()-.5};const norm=Math.hypot(q.x,q.y,q.z,q.w);if(norm<1e-8){q.x=q.y=q.z=0;q.w=1;}else for(const k in q)q[k]/=norm;b.setRotation(q,true);
 // Aim at the open centre of the table, leaving room for stick extent and mutual impacts.
 // The previous target near z=4.5 left too little margin when sticks collided at launch.
 const up=5+power*4,flight=(up+Math.sqrt(up*up+2*9.81*(b.translation().y-TABLE.top)))/9.81;
 b.setLinvel({x:(-4+(random()-.5)*1.2+clamp(direction.x,-1,1)*.7-b.translation().x)/flight,y:up,z:(2.3+(random()-.5)*.6+clamp(direction.z,-1,1)*.5-b.translation().z)/flight},true);
 b.setAngvel({x:(random()-.5)*16,y:(random()-.5)*12,z:(random()-.5)*16},true);});active=true;elapsed=stable=accumulator=preparation=0;impacts=new ImpactLimiter();},
 step(dt){if(!active)return null;accumulator+=clamp(dt,0,.1);
 while(accumulator>=1/120){world.step(events);accumulator-=1/120;elapsed+=1/120;let force=0;events.drainContactForceEvents(event=>{force=Math.max(force,event.totalForceMagnitude());});const impact=impacts.accept(force/45,elapsed);if(impact)onImpact(impact);const stopped=bodies.every(b=>{const v=b.linvel(),a=b.angvel();return Math.hypot(v.x,v.y,v.z)<.1&&Math.hypot(a.x,a.y,a.z)<.2;});stable=stopped?stable+1/120:0;
 if(elapsed>1.5&&stable>.45||elapsed>=12){active=false;const faces=[];let invalid=stable<=.45;for(const b of bodies){const q=b.rotation(),p=b.translation(),flatY=2*(q.x*q.x+q.z*q.z)-1;faces.push(flatY>0);if(Math.abs(flatY)<.68||p.x< -16.8||p.x>6.8||Math.abs(p.z)>5.8||p.y<-.45||p.y>2)invalid=true;}
 return {faces,invalid,seconds:elapsed};}}
 return null;}
 };
}
