import RAPIER from '@dimforge/rapier3d-compat';
import {POWER,clampPower} from './throw-power.mjs';
import {ImpactLimiter} from './impact.mjs';
export const RADIUS=.19,LENGTH=1.65,BOWL_RADIUS=2.65;
// Physical table frame is unchanged; the bowl has an explicit right-hand origin. Scene adds WX=5.
export const TABLE={centerX:-5,halfX:12,halfZ:6,top:-.33,rimY:.2,rimHalfHeight:.55,rimThickness:.15};
export const SUPPORT={radius:1.05,halfHeight:.4,y:.07};
// Encloses both the visible lathe/rim and all tray colliders.
export const TRAY={centerX:1.6,centerZ:0,baseY:.78,bottom:-.24,top:1.3,radius:3.08,maxLift:1.6};
const clamp=(n,min,max)=>Math.max(min,Math.min(max,Number.isFinite(n)?n:0));
export async function createPhysics({onImpact=()=>{}}={}){
 await RAPIER.init();const world=new RAPIER.World({x:0,y:-9.81,z:0});world.timestep=1/120;world.numSolverIterations=8;world.maxCcdSubsteps=4;
 const collider=desc=>world.createCollider(desc.setFriction(.75).setRestitution(.28));
 collider(RAPIER.ColliderDesc.cuboid(TABLE.halfX,.15,TABLE.halfZ).setTranslation(TABLE.centerX,-.48,0));
 for(const x of [-16.85,6.85])collider(RAPIER.ColliderDesc.cuboid(.15,.55,6).setTranslation(x,.2,0));
 for(const z of [-5.85,5.85])collider(RAPIER.ColliderDesc.cuboid(11.7,.55,.15).setTranslation(-5,.2,z));
 // Tall invisible walls extend OUTWARD from the wooden inner planes. Two-unit
 // thickness catches even a fast spinning stick between discrete CCD substeps.
 for(const x of [-17.7,7.7])world.createCollider(RAPIER.ColliderDesc.cuboid(1,13,7.7).setTranslation(x,12.67,0).setFriction(.15).setRestitution(.35));
 for(const z of [-6.7,6.7])world.createCollider(RAPIER.ColliderDesc.cuboid(13.7,13,1).setTranslation(-5,12.67,z).setFriction(.15).setRestitution(.35));
 // The board and tray support are solid too, matching the visible table furniture.
 collider(RAPIER.ColliderDesc.cylinder(.19,3.65).setTranslation(-10,-.09,0));
 const pedestal=collider(RAPIER.ColliderDesc.cylinder(SUPPORT.halfHeight,SUPPORT.radius).setTranslation(TRAY.centerX,SUPPORT.y,TRAY.centerZ));
 const tray=world.createRigidBody(RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(TRAY.centerX,TRAY.baseY,TRAY.centerZ));
 world.createCollider(RAPIER.ColliderDesc.cylinder(.12,2.85).setTranslation(0,-.12,0).setFriction(.7).setRestitution(.3),tray);
 for(let i=0;i<40;i++){const a=i*Math.PI*2/40;world.createCollider(RAPIER.ColliderDesc.cuboid(.16,.65,2.75*Math.tan(Math.PI/40)+.015).setTranslation(Math.cos(a)*2.75,.65,Math.sin(a)*2.75).setRotation({x:0,y:Math.sin(-a/2),z:0,w:Math.cos(-a/2)}).setFriction(.04).setFrictionCombineRule(RAPIER.CoefficientCombineRule.Min).setRestitution(.35),tray);}
 const vertices=[];for(const z of [-LENGTH/2,LENGTH/2])for(let j=0;j<=16;j++){const a=j*Math.PI/16;vertices.push(Math.cos(a)*RADIUS,Math.sin(a)*RADIUS-.08,z);}
 const bodies=Array.from({length:4},(_,i)=>{const b=world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(TRAY.centerX+(i-1.5)*.5,.85,TRAY.centerZ).setCcdEnabled(true).setLinearDamping(.22).setAngularDamping(1));world.createCollider(RAPIER.ColliderDesc.convexHull(new Float32Array(vertices)).setDensity(1).setFriction(.7).setRestitution(.3).setActiveEvents(RAPIER.ActiveEvents.CONTACT_FORCE_EVENTS).setContactForceEventThreshold(.6),b);return b;});
 for(let i=0;i<150;i++)world.step();let active=false,elapsed=0,stable=0,accumulator=0,preparation=0;const events=new RAPIER.EventQueue(true);let impacts=new ImpactLimiter();
 let held=false;
 let pose={roll:0,pitch:0,x:0,z:0,lift:0},target={...pose},returning=false;
 function advanceTray(){for(const k of Object.keys(pose))pose[k]+=(target[k]-pose[k])*(1-Math.exp(-10/120));if(returning&&Object.values(pose).every(v=>Math.abs(v)<1e-4)){pose={roll:0,pitch:0,x:0,z:0,lift:0};returning=false;}const sx=Math.sin(pose.pitch/2),cx=Math.cos(pose.pitch/2),sz=Math.sin(pose.roll/2),cz=Math.cos(pose.roll/2),q={x:sx*cz,y:-sx*sz,z:cx*sz,w:cx*cz};
 // Kinematic bodies do not stop at static contacts. Constrain every intermediate pose,
 // including the underside over the pedestal, rather than only the final target height.
 const nx=2*(q.x*q.y-q.w*q.z),ny=1-2*(q.x*q.x+q.z*q.z),nz=2*(q.y*q.z+q.w*q.x),slope=Math.hypot(nx,nz);
 const tableY=TABLE.top+.04-TRAY.bottom*ny+TRAY.radius*slope;
 const supportY=SUPPORT.y+SUPPORT.halfHeight+.04+(-TRAY.bottom+SUPPORT.radius*slope-nx*pose.x-nz*pose.z)/ny;
 tray.setNextKinematicTranslation({x:TRAY.centerX+pose.x,y:Math.max(TRAY.baseY,tableY,supportY)+pose.lift,z:TRAY.centerZ+pose.z});tray.setNextKinematicRotation(q);}
 // Freeze the physical pose during flight without losing a queued return.
 function freezeTray(){tray.setNextKinematicTranslation(tray.translation());tray.setNextKinematicRotation(tray.rotation());}
 return {world,bodies,tray,get active(){return active;},get returning(){return returning;},
 reset(){held=false;tray.setEnabled(true);pedestal.setEnabled(true);bodies.forEach(b=>b.setBodyType(RAPIER.RigidBodyType.Dynamic,true));active=returning=false;elapsed=stable=accumulator=preparation=0;impacts=new ImpactLimiter();pose={roll:0,pitch:0,x:0,z:0,lift:0};target={...pose};tray.setTranslation({x:TRAY.centerX,y:TRAY.baseY,z:TRAY.centerZ},true);tray.setRotation({x:0,y:0,z:0,w:1},true);freezeTray();bodies.forEach((b,i)=>{b.setTranslation({x:TRAY.centerX+(i-1.5)*.5,y:TRAY.baseY+.2,z:TRAY.centerZ},true);b.setRotation({x:0,y:0,z:0,w:1},true);b.setLinvel({x:0,y:0,z:0},true);b.setAngvel({x:0,y:0,z:0},true);});},
 setTrayPose(next){if(active)return;returning=false;target={roll:clamp(next.roll,-.28,.28),pitch:clamp(next.pitch,-.28,.28),x:clamp(next.x,-.4,.4),z:clamp(next.z,-.4,.4),lift:clamp(next.lift,0,TRAY.maxLift)};},
 returnTray(){target={roll:0,pitch:0,x:0,z:0,lift:0};returning=true;},
 holdSticks(){if(active)return;held=true;bodies.forEach(b=>{b.setBodyType(RAPIER.RigidBodyType.KinematicPositionBased,true);b.setLinvel({x:0,y:0,z:0},true);b.setAngvel({x:0,y:0,z:0},true);});},
 placeSticks(poses){if(active||!held)return;poses.forEach(({position,rotation},i)=>{const b=bodies[i];b.setTranslation(position,true);b.setNextKinematicTranslation(position);b.setRotation(rotation,true);b.setNextKinematicRotation(rotation);});},
 releaseSticks(){held=false;bodies.forEach(b=>{b.setBodyType(RAPIER.RigidBodyType.Dynamic,true);b.setLinvel({x:0,y:0,z:0},true);b.setAngvel({x:0,y:0,z:0},true);});},
 trayCleared(){
  if(!active)return false;
  const at=tray.translation(),q=tray.rotation(),ny=1-2*(q.x*q.x+q.z*q.z);
  const rim=at.y+TRAY.top*ny+TRAY.radius*Math.sqrt(Math.max(0,1-ny*ny))+.15;
  return bodies.every(b=>{const r=b.rotation(),p=b.translation();let bottom=Infinity;
   const xx=2*(r.x*r.y+r.z*r.w),yy=1-2*(r.x*r.x+r.z*r.z),zz=2*(r.y*r.z-r.x*r.w);
   for(let j=0;j<vertices.length;j+=3)bottom=Math.min(bottom,p.y+xx*vertices[j]+yy*vertices[j+1]+zz*vertices[j+2]);
   return bottom>rim;
  });
 },
 setTrayEnabled(on){tray.setEnabled(on);pedestal.setEnabled(on);},
 dockTray(){pose={roll:0,pitch:0,x:0,z:0,lift:0};target={...pose};returning=false;tray.setTranslation({x:TRAY.centerX,y:TRAY.baseY,z:TRAY.centerZ},true);tray.setRotation({x:0,y:0,z:0,w:1},true);freezeTray();},
 prepare(dt){if(active||held)return;preparation+=clamp(dt,0,.1);while(preparation>=1/120){advanceTray();world.step();preparation-=1/120;}},
 throwSticks(power=POWER.default,direction={x:0,z:0},random=Math.random,{loft=0}={}){if(held||!tray.isEnabled())return;power=clampPower(power);freezeTray();const at=tray.translation();bodies.forEach((b,i)=>{
 // Preserve the established release height at rest; raise it only for a lifted tray.
 b.setTranslation({x:at.x+(i-1.5)*.5,y:Math.max(2.35,at.y+1.5)+i*.12,z:at.z+(random()-.5)*.7},true);
 const q={x:random()-.5,y:random()-.5,z:random()-.5,w:random()-.5};const norm=Math.hypot(q.x,q.y,q.z,q.w);if(norm<1e-8){q.x=q.y=q.z=0;q.w=1;}else for(const k in q)q[k]/=norm;b.setRotation(q,true);
 // Aim at four spread landing patches on the open table. Higher flights otherwise
 // cluster at the same target after air damping and can balance on each other.
 const up=7+power*5+clamp(loft,0,3),flight=(up+Math.sqrt(up*up+2*9.81*(b.translation().y-TABLE.top)))/9.81;
 b.setLinvel({x:(-6+(i%2)*3.2+(random()-.5)*.8+clamp(direction.x,-1,1)*1.0-b.translation().x)/flight,y:up,z:(1.1+Math.floor(i/2)*2.9+(random()-.5)*.5+clamp(direction.z,-1,1)*.7-b.translation().z)/flight},true);
 b.setAngvel({x:(random()-.5)*16,y:(random()-.5)*12,z:(random()-.5)*16},true);});active=true;elapsed=stable=accumulator=preparation=0;impacts=new ImpactLimiter();},
 step(dt){if(!active)return null;accumulator+=clamp(dt,0,.1);
 while(accumulator>=1/120){
 // Keep unusually fast impacts below ~.167 units per solve. Normal throws keep
 // the established 120 Hz step; CCD also remains enabled on every stick.
 let speed=0;for(const b of bodies){const v=b.linvel();speed=Math.max(speed,Math.hypot(v.x,v.y,v.z));}
 const substeps=Math.min(8,Math.max(1,Math.ceil(speed/20)));world.timestep=1/(120*substeps);
 for(let sub=0;sub<substeps;sub++)world.step(events);world.timestep=1/120;
 accumulator-=1/120;elapsed+=1/120;let force=0;events.drainContactForceEvents(event=>{force=Math.max(force,event.totalForceMagnitude());});const impact=impacts.accept(force/45,elapsed);if(impact)onImpact(impact);const stopped=bodies.every(b=>{const v=b.linvel(),a=b.angvel();return Math.hypot(v.x,v.y,v.z)<.1&&Math.hypot(a.x,a.y,a.z)<.2;});stable=stopped?stable+1/120:0;
 if(elapsed>1.5&&stable>.45||elapsed>=12){active=false;const faces=[],tq=tray.rotation(),ny=1-2*(tq.x*tq.x+tq.z*tq.z),maxY=Math.max(2,tray.translation().y+TRAY.top*ny+TRAY.radius*Math.sqrt(Math.max(0,1-ny*ny))+Math.hypot(LENGTH/2,RADIUS));let invalid=stable<=.45;for(const b of bodies){const q=b.rotation(),p=b.translation(),flatY=2*(q.x*q.x+q.z*q.z)-1;faces.push(flatY>0);if(Math.abs(flatY)<.68||p.x< -16.8||p.x>6.8||Math.abs(p.z)>5.8||p.y<-.45||p.y>maxY)invalid=true;}
 return {faces,invalid,seconds:elapsed};}}
 return null;}
 };
}
