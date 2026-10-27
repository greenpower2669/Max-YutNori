import {Vector3} from 'three';
const HALF_FOV=21*Math.PI/180;
// Fit world-space points, including their depth, into the usable camera viewport.
export function fitDistance(points,target,direction,aspect,magnification=1,padding=1.08){
 const axis=direction.clone().normalize(),right=new Vector3(axis.z,0,-axis.x).normalize(),up=new Vector3().crossVectors(axis,right),tan=Math.tan(HALF_FOV)/magnification;
 let distance=3;const relative=new Vector3();
 for(const point of points){relative.copy(point).sub(target);const depth=relative.dot(axis);distance=Math.max(distance,depth+Math.abs(relative.dot(up))/tan*padding,depth+Math.abs(relative.dot(right))/(tan*Math.max(.1,aspect))*padding);}
 return distance;
}
export class ViewZoom {
 constructor(){this.active=false;this.value=1;}
 toggle(){this.active=!this.active;return this.active;}
 frame(dt,reduced=false){const goal=this.active?2:1;this.value=reduced?goal:this.value+(goal-this.value)*(1-Math.exp(-Math.max(0,dt)*12));if(Math.abs(this.value-goal)<1e-6)this.value=goal;return this.value;}
}
export function boardFrame(centerX,aspect){
 const target=new Vector3(centerX,0,0),direction=new Vector3(0,1,.28).normalize(),points=[];
 for(const x of [-3.85,3.85])for(const z of [-4.25,4.25])points.push(new Vector3(centerX+x,-.31,z));
 const distance=fitDistance(points,target,direction,aspect,1,1.02);
 return {target,position:target.clone().addScaledVector(direction,distance)};
}

// A dolly changes world-space distance, never the lens or CSS scale.
export function approachFrame(frame,factor=1,minDistance=0){
 const offset=frame.position.clone().sub(frame.target),distance=offset.length();
 if(distance>0)offset.multiplyScalar(Math.max(minDistance,distance/factor)/distance);
 return {target:frame.target.clone(),position:frame.target.clone().add(offset)};
}
const playingBounds=new Map();
// Static samples of the real cylindrical board, shared by automatic camera poses.
export function boardBounds(centerX){
 if(!playingBounds.has(centerX)){const points=[];for(let i=0;i<64;i++){const a=i*Math.PI/32;for(const y of [-.26,.18])points.push(new Vector3(centerX+3.72*Math.cos(a),y,3.72*Math.sin(a)));}playingBounds.set(centerX,points);}
 return playingBounds.get(centerX);
}
