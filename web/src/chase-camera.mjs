import {Vector3} from 'three';
const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
const smooth=v=>{v=clamp(v,0,1);return v*v*(3-2*v);};
export class ChaseCamera {
 constructor(){this.reset();}
 reset(){this.active=false;this.phase='idle';this.elapsed=0;this.zoom=1;this.reach=3;}
 select(origin,destinations=[]){this.active=true;this.elapsed=0;this.zoom=1;this.phase='close';this.reach=Math.max(3,...destinations.map(p=>p.distanceTo(origin)));}
 zoomBy(ratio){if(!this.active||!Number.isFinite(ratio)||ratio<=0)return;this.elapsed=3;this.phase='follow';this.zoom=clamp(this.zoom/ratio,.3,1.8);}
 followDistance(aspect){const halfFov=Math.min(21*Math.PI/180,Math.atan(Math.tan(21*Math.PI/180)*aspect));return clamp(Math.max(9,this.reach/Math.sin(halfFov)*1.12)*this.zoom,3,60);}
 dragGain(referenceDistance,aspect){return Math.min(.25,.3*this.followDistance(aspect)/Math.max(1,referenceDistance));}
 frame(dt,focus,aspect,reduced){
  if(!this.active)return null;
  this.elapsed+=Math.max(0,dt);if(reduced)this.elapsed=Math.max(3,this.elapsed);
  const t=this.elapsed,wide=this.followDistance(aspect)/this.zoom;
  this.phase=t<.9?'close':t<1.4?'lateral':t<2.6?'reveal':'follow';
  const distance=clamp((t<1.4?3.8:3.8+(wide-3.8)*smooth((t-1.4)/1.2))*this.zoom,3,60);
  const angle=.22*smooth((t-.9)/.5),offset=new Vector3(Math.sin(angle)*.55,.84,Math.cos(angle)*.55).normalize().multiplyScalar(distance);
  return {target:focus.clone(),position:focus.clone().add(offset)};
 }
}
