import {test} from 'node:test';import assert from 'node:assert/strict';import {Vector3} from 'three';
test('the view zoom is a reversible switch and smooth transitions never accumulate',async()=>{
 const {ViewZoom}=await import('../web/src/camera-framing.mjs');const z=new ViewZoom();assert.equal(z.frame(0),1);assert.equal(z.toggle(),true);const first=z.frame(.03);assert.ok(first>1&&first<2);for(let i=0;i<120;i++)z.frame(.1);assert.ok(Math.abs(z.value-2)<1e-8);assert.equal(z.toggle(),false);assert.equal(z.frame(.01,true),1);assert.equal(z.toggle(),true);assert.equal(z.frame(.01,true),2);
});
test('framing encloses actual elevated flight points at wide and narrow aspects and respects projection zoom',async()=>{
 const {fitDistance}=await import('../web/src/camera-framing.mjs');const target=new Vector3(0,4,0),direction=new Vector3(0,1,.6).normalize();const points=[new Vector3(-7,0,4),new Vector3(8,18,-2),new Vector3(0,15,2)];
 for(const aspect of [.6,2.4])for(const zoom of [1,2]){const d=fitDistance(points,target,direction,aspect,zoom),right=new Vector3(1,0,0),up=new Vector3().crossVectors(direction,right);for(const p of points){const rel=p.clone().sub(target),depth=d-rel.dot(direction);assert.ok(Math.abs(rel.dot(right))/depth<Math.tan(21*Math.PI/180)*aspect/zoom);assert.ok(Math.abs(rel.dot(up))/depth<Math.tan(21*Math.PI/180)/zoom);}}
});
test('normal board camera enlarges pawns compared with 0.8.4 while preserving every reserve',async()=>{
 const {PerspectiveCamera}=await import('three'),{boardFrame}=await import('../web/src/camera-framing.mjs');
 const project=(position,target)=>{const c=new PerspectiveCamera(42,2,.1,80);c.position.copy(position);c.lookAt(target);c.updateMatrixWorld();return p=>p.clone().project(c);};
 const old=project(new Vector3(-5,11.4,5.2),new Vector3(-5,0,0)),frame=boardFrame(-5,2),current=project(frame.position,frame.target);
 const a=new Vector3(-7.8,.1,0),b=new Vector3(-2.2,.1,0);assert.ok(current(b).x-current(a).x>(old(b).x-old(a).x)*1.03,'the actual perspective magnification must increase');
 for(const x of [-8.35,-1.65])for(const z of [-4.23,4.23]){const p=current(new Vector3(x,-.31,z));assert.ok(Math.abs(p.x)<1&&Math.abs(p.y)<1,'full reserve bounds stay in the normal camera');}
});
