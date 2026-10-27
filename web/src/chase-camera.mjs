import {Vector3} from 'three';
import {fitDistance} from './camera-framing.mjs';
const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
const smooth=v=>{v=clamp(v,0,1);return v*v*(3-2*v);};
const direction=angle=>new Vector3(Math.sin(angle)*.55,.84,Math.cos(angle)*.55).normalize();
export class ChaseCamera {
 constructor(){this.reset();}
 reset(){this.active=false;this.phase='idle';this.elapsed=0;this.zoom=1;this.destinations=[];this.focus=new Vector3();this.approach=1;}
 select(origin,destinations=[]){this.active=true;this.elapsed=0;this.zoom=1;this.phase='close';this.focus.copy(origin);this.destinations=destinations.map(p=>p.clone());}
 zoomBy(ratio){if(!this.active||!Number.isFinite(ratio)||ratio<=0)return;this.elapsed=3;this.phase='follow';this.zoom=clamp(this.zoom/ratio,.3,1.8);}
 routeFrame(focus,aspect){
  const points=[];
  // Include the pawn and halo footprints, not a sphere with the entire route as radius.
  for(const p of [focus,...this.destinations])for(const x of [-.42,.42])for(const y of [0,.35])for(const z of [-.42,.42])points.push(new Vector3(p.x+x,p.y+y,p.z+z));
  const min=points[0].clone(),max=min.clone();for(const p of points){min.min(p);max.max(p);}
  const target=min.add(max).multiplyScalar(.5),required=fitDistance(points,target,direction(.22),aspect,1,1.12);
  return {target,required,distance:Math.max(5.5,required*1.08)};
 }
 followDistance(aspect){const shot=this.routeFrame(this.focus,aspect);return clamp(Math.max(shot.required,shot.distance/this.approach)*this.zoom,3,60);}
 dragGain(referenceDistance,aspect){return Math.min(.25,.3*this.followDistance(aspect)/Math.max(1,referenceDistance));}
 frame(dt,focus,aspect,reduced,approach=1){
  if(!this.active)return null;
  this.focus.copy(focus);this.approach=approach;
  this.elapsed+=Math.max(0,dt);if(reduced)this.elapsed=Math.max(3,this.elapsed);
  const t=this.elapsed,reveal=smooth((t-1.4)/1.2),shot=this.routeFrame(focus,aspect);
  this.phase=t<.9?'close':t<1.4?'lateral':t<2.6?'reveal':'follow';
  const wide=Math.max(shot.required,shot.distance/approach),near=Math.max(3,3.8/approach);
  const distance=clamp((near+(wide-near)*reveal)*this.zoom,3,60);
  const target=focus.clone().lerp(shot.target,reveal),offset=direction(.22*smooth((t-.9)/.5)).multiplyScalar(distance);
  return {target,position:target.clone().add(offset)};
 }
}
