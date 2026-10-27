const bound=(x,n)=>Math.max(-n,Math.min(n,x));
/** Gravity controls relative tilt; linear acceleration still triggers MotionThrow. */
export class TrayMotion {
 constructor(){this.reset();}
 reset(){this.base=null;this.last=-Infinity;}
 sample({x,y,z,time},eligible){
  if(!eligible||![x,y,z,time].every(Number.isFinite)||Math.hypot(x,y,z)<2||time<=this.last){this.reset();return null;}
  if(time-this.last>500)this.base=null;this.last=time;
  const angles=[Math.atan2(x,Math.hypot(y,z)),Math.atan2(y,Math.hypot(x,z))];this.base??=angles;
  const clean=v=>Math.abs(v)<.015?0:bound(v*.85,.28);
  return {roll:clean(angles[0]-this.base[0]),pitch:clean(angles[1]-this.base[1])};
 }
}
