import * as T from 'three';
import {RADIUS,LENGTH} from './physics.mjs';
export function createStickGeometry(){
 const shape=new T.Shape();shape.moveTo(RADIUS,-.08);for(let i=1;i<=24;i++){const a=i/24*Math.PI;shape.lineTo(Math.cos(a)*RADIUS,Math.sin(a)*RADIUS-.08);}shape.closePath();
 const geo=new T.ExtrudeGeometry(shape,{depth:LENGTH,bevelEnabled:false,steps:1,curveSegments:24});geo.translate(0,0,-LENGTH/2);geo.clearGroups();const normals=geo.getAttribute('normal');let start=0,material=normals.getY(0)<-.99?0:1;
 for(let i=3;i<=normals.count;i+=3){const next=i<normals.count&&(normals.getY(i)<-.99?0:1);if(i===normals.count||next!==material){geo.addGroup(start,i-start,material);start=i;material=next;}}return geo;
}
