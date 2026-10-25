import {Quaternion,Vector3} from 'three';
import {TABLE,TRAY,RADIUS,LENGTH} from './physics.mjs';
const ease=t=>{t=Math.max(0,Math.min(1,t));return t*t*(3-2*t);};
const poses=p=>p.bodies.map(b=>({position:{...b.translation()},rotation:{...b.rotation()}}));
// Only the presentation moves after the result has been recorded. No rule or face is recomputed.
function tablePose(i,rotation){
 const q=new Quaternion(rotation.x,rotation.y,rotation.z,rotation.w);let minY=Infinity;
 for(const z of [-LENGTH/2,LENGTH/2])for(let j=0;j<=16;j++){const a=j*Math.PI/16;minY=Math.min(minY,new Vector3(Math.cos(a)*RADIUS,Math.sin(a)*RADIUS-.08,z).applyQuaternion(q).y);}
 return {position:{x:-4.7+i*.55,y:TABLE.top+.025-minY,z:4.25},rotation};
}
export class BowlCycle {
 constructor(physics){this.physics=physics;this.reset();}
 get ready(){return this.phase==='ready';}
 reset(){this.phase='ready';this.time=0;this.opacity=1;this.queued=false;this.physics.setTrayEnabled(true);this.physics.releaseSticks();}
 settle(){
  this.physics.holdSticks();this.from=poses(this.physics);const at=this.physics.tray.translation(),q=this.physics.tray.rotation(),ny=1-2*(q.x*q.x+q.z*q.z);this.clearance=at.y+TRAY.top+TRAY.radius*Math.sqrt(Math.max(0,1-ny*ny))+LENGTH/2+.25;
  this.parked=this.from.map((p,i)=>Math.hypot(p.position.x-at.x,p.position.z-at.z)<3.4&&p.position.y>.2?tablePose(i,p.rotation):p);
  this.phase='hiding';this.time=0;this.opacity=1;this.queued=false;
 }
 restoreResult(faces){
  this.physics.holdSticks();this.physics.placeSticks(Array.from({length:4},(_,i)=>tablePose(i,faces?.[i]?{x:1,y:0,z:0,w:0}:{x:0,y:0,z:0,w:1})));
  this.physics.setTrayEnabled(false);this.phase='hidden';this.opacity=0;
 }
 requestStow(){if(this.ready)return;this.queued=true;if(this.phase==='hidden')this.startStow();}
 startStow(){this.physics.dockTray();this.physics.setTrayEnabled(true);this.from=poses(this.physics);this.clearance=Math.max(TRAY.baseY+TRAY.top+LENGTH/2+.25,...this.from.map(p=>p.position.y+LENGTH/2+.25));this.outside=this.from.map(p=>{const at=new Vector3().copy(p.position),radius=Math.hypot(at.x,at.z),safe=TRAY.radius+LENGTH/2+.25;if(radius<safe){if(radius<.001){at.x=safe;at.z=0;}else{at.x*=safe/radius;at.z*=safe/radius;}}return at;});this.phase='appearing';this.time=0;this.opacity=0;}
 update(dt,reduced=false){
  if(this.ready||this.phase==='hidden'||dt<=0)return;
  this.time+=Math.min(.1,dt);
  if(this.phase==='hiding'){
   const t=reduced?1:Math.min(1,this.time/1.05);
   this.physics.placeSticks(this.from.map((p,i)=>{if(p===this.parked[i])return p;const target=this.parked[i].position,position=new Vector3().copy(p.position).lerp(target,ease((t-.25)/.5));position.y=t<.25?p.position.y+(this.clearance-p.position.y)*ease(t/.25):t>.75?this.clearance+(target.y-this.clearance)*ease((t-.75)/.25):this.clearance;return {rotation:p.rotation,position};}));
   this.opacity=reduced?0:1-ease((this.time-.75)/.5);
   if(this.opacity===0){this.physics.setTrayEnabled(false);this.physics.dockTray();this.phase='hidden';if(this.queued)this.startStow();}
  }
  if(this.phase==='appearing'){
   this.opacity=reduced?1:ease(this.time/.4);
   if(this.opacity===1){this.phase='stowing';this.time=0;}
  }
  if(this.phase==='stowing'){
   const t=reduced?1:Math.min(1,this.time/1.25);
   this.physics.placeSticks(this.from.map((p,i)=>{
    const target=new Vector3((i-1.5)*.5,TRAY.baseY+.2,0),outside=this.outside[i],cross=ease((t-.4)/.4);let position;
    if(t<.18)position=new Vector3().copy(p.position).lerp(outside,ease(t/.18));
    else if(t<.4){position=outside.clone();position.y+=(this.clearance-position.y)*ease((t-.18)/.22);}
    else {position=outside.clone().lerp(target,cross);position.y=t<.8?this.clearance:this.clearance+(target.y-this.clearance)*ease((t-.8)/.2);}
    return {position,rotation:new Quaternion(p.rotation.x,p.rotation.y,p.rotation.z,p.rotation.w).slerp(new Quaternion(),cross)};
   }));
   if(t===1){this.physics.releaseSticks();this.phase='ready';this.queued=false;}
  }
 }
}
