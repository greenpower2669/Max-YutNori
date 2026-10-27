import {Vector3} from 'three';
const HALF_FOV=21*Math.PI/180;
// Fit world-space points, including their depth, into the usable camera viewport.
export function fitDistance(points,target,direction,aspect,magnification=1,padding=1.08){
 const axis=direction.clone().normalize(),right=new Vector3(axis.z,0,-axis.x).normalize(),up=new Vector3().crossVectors(axis,right),tan=Math.tan(HALF_FOV)/magnification;
 let distance=3;
 for(const point of points){const relative=point.clone().sub(target),depth=relative.dot(axis);distance=Math.max(distance,depth+Math.abs(relative.dot(up))/tan*padding,depth+Math.abs(relative.dot(right))/(tan*Math.max(.1,aspect))*padding);}
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
