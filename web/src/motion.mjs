import {POWER,clampPower} from './throw-power.mjs';
export class MotionThrow {
 constructor(sensitivity=.5){this.sensitivity=sensitivity;this.reset();}
 reset(){this.armed=false;this.restSince=null;this.last=-Infinity;}
 sample({x,y,z,time},eligible){
  if(!eligible||![x,y,z,time].every(Number.isFinite)){this.reset();return null;}
  if(time<=this.last){this.reset();return null;}
  if(time-this.last>200){this.armed=false;this.restSince=null;}this.last=time;
  const magnitude=Math.hypot(x,y,z),threshold=12-7*Math.max(0,Math.min(1,this.sensitivity));
  if(magnitude<1.7){this.restSince??=time;if(time-this.restSince>=350)this.armed=true;return null;}
  this.restSince=null;if(!this.armed||magnitude<threshold)return null;this.armed=false;
  return {power:clampPower(POWER.min+(magnitude/22)*(POWER.max-POWER.min)),direction:{x:Math.max(-1,Math.min(1,x/14)),z:Math.max(-1,Math.min(1,-y/14))}};
 }
}
