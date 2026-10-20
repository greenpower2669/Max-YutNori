import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {NODES} from './rules.mjs';
import {RADIUS,LENGTH} from './physics.mjs';
export const COLORS=[0x55d8ca,0xf5a477],BX=-5,WX=5;
const POS={};for(let i=1;i<=20;i++){const a=i/20*Math.PI*2;POS[`O${i}`]=[Math.sin(a)*2.8,Math.cos(a)*2.8];}
for(const [prefix,from,to]of [['A','O5','O15'],['B','O10','O20']])for(let i=1;i<=5;i++){const t=i/6;POS[i===3?'C':prefix+i]=[POS[from][0]*(1-t)+POS[to][0]*t,POS[from][1]*(1-t)+POS[to][1]*t];}
POS.H=POS.O20;
function texture(){const c=document.createElement('canvas');c.width=c.height=256;const x=c.getContext('2d');x.fillStyle='#69432b';x.fillRect(0,0,256,256);for(let i=0;i<180;i++){x.strokeStyle=`rgba(${i%2?'210,162,99':'25,12,5'},${.02+(i%7)*.007})`;x.beginPath();for(let j=0;j<=256;j+=8){const y=i*1.6+Math.sin(j*.025+i)*3;x.lineTo(j,y);}x.stroke();}const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;t.wrapS=t.wrapT=T.RepeatWrapping;return t;}
function label(text,color='#fff0c9',size=.24){const c=document.createElement('canvas');c.width=128;c.height=128;const ctx=c.getContext('2d');ctx.fillStyle=color;ctx.font='bold 64px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,64,68);const map=new T.CanvasTexture(c);map.colorSpace=T.SRGBColorSpace;const mesh=new T.Mesh(new T.PlaneGeometry(size,size),new T.MeshBasicMaterial({map,transparent:true,depthWrite:false}));mesh.rotation.x=-Math.PI/2;return mesh;}
export class GameScene {
 constructor(canvas,physics,onPick,onGesture){this.canvas=canvas;this.physics=physics;this.onPick=onPick;this.onGesture=onGesture;this.mode='board';this.free=false;this.targets=[];this.pawns=[];this.particles=[];this.time=0;this.reduced=false;
 this.renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:false});this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=T.PCFSoftShadowMap;this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.05;
 this.scene=new T.Scene();this.scene.background=new T.Color(0x102b28);this.scene.fog=new T.Fog(0x102b28,26,50);
 this.camera=new T.PerspectiveCamera(42,1,.1,80);this.camera.position.set(BX,9.5,8.5);this.controls=new OrbitControls(this.camera,canvas);this.controls.target.set(BX,0,0);this.controls.enablePan=false;this.controls.enableDamping=true;this.controls.enableRotate=false;this.controls.minDistance=7;this.controls.maxDistance=18;this.controls.maxPolarAngle=1.2;
 this.scene.add(new T.HemisphereLight(0xfff3df,0x374943,2));const light=new T.DirectionalLight(0xffedcf,3);light.position.set(-3,12,7);light.castShadow=true;light.shadow.mapSize.set(1024,1024);Object.assign(light.shadow.camera,{left:-13,right:13,top:10,bottom:-10});light.shadow.bias=-.0005;this.scene.add(light);
 this.wood=new T.MeshStandardMaterial({map:texture(),roughness:.75,color:0xf4cc9b});this.bronze=new T.MeshStandardMaterial({color:0xcda96a,roughness:.35,metalness:.55});this.cloth=new T.MeshStandardMaterial({color:0x1d4942,roughness:1});
 const table=this.mesh(new T.BoxGeometry(24,.3,12),this.wood,0,-.48,0);table.receiveShadow=true;
 this.board();this.bowl();this.sticks();this.pieces();this.highlights=new T.Group();this.scene.add(this.highlights);
 const ray=new T.Raycaster();let pointer=null;
 canvas.addEventListener('pointerdown',e=>{pointer={x:e.clientX,y:e.clientY};});canvas.addEventListener('pointerup',e=>{if(!pointer||this.free)return;const dx=e.clientX-pointer.x,dy=e.clientY-pointer.y;pointer=null;
 if(this.mode==='bowl'&&Math.hypot(dx,dy)>35){onGesture(Math.min(1,Math.hypot(dx,dy)/250),{x:dx/160,z:dy/160});return;}
 if(Math.hypot(dx,dy)>10)return;const r=canvas.getBoundingClientRect();ray.setFromCamera(new T.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),this.camera);const hit=ray.intersectObjects(this.targets,true)[0];if(hit){let o=hit.object;while(o&&!o.userData.pick)o=o.parent;if(o)onPick(o.userData.pick);}});
 this.resize();this.controls.update();
 }
 mesh(g,m,x=0,y=0,z=0,parent=this.scene){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
 ring(radius,tube,x,y,z,material=this.bronze,parent=this.scene){const o=this.mesh(new T.TorusGeometry(radius,tube,8,64),material,x,y,z,parent);o.rotation.x=Math.PI/2;return o;}
 board(){this.mesh(new T.CylinderGeometry(3.6,3.7,.28,96),this.wood,BX,-.12,0);this.mesh(new T.CylinderGeometry(3.36,3.36,.04,96),this.cloth,BX,.04,0);this.ring(3.43,.045,BX,.1,0);this.ring(3.1,.014,BX,.08,0);
 const line=(a,b)=>{const [x,z]=POS[a],[xx,zz]=POS[b],points=[new T.Vector3(BX+x,.078,z),new T.Vector3(BX+xx,.078,zz)];this.scene.add(new T.Line(new T.BufferGeometry().setFromPoints(points),new T.LineBasicMaterial({color:0x8d9568})));};
 for(let i=1;i<=20;i++)line(`O${i}`,`O${i%20+1}`);line('O5','O15');line('O10','O20');
 for(const name of NODES){const [x,z]=POS[name],corner=['O5','O10','O15','O20','C'].includes(name);const disc=this.mesh(new T.CylinderGeometry(corner?.22:.17,corner?.22:.17,.045,32),new T.MeshStandardMaterial({color:corner?0xc7ac76:0x5c7762,roughness:.7}),BX+x,.1,z);disc.userData.pick={node:name};this.targets.push(disc);const t=label(name==='C'?'✦':name.startsWith('O')?name.slice(1):'•',corner?'#183a35':'#e7ddba',corner?.27:.23);t.position.set(BX+x,.128,z);this.scene.add(t);}
 const title=label('YUT','#c7ac76',.85);title.position.set(BX-1.4,.09,.7);this.scene.add(title);
 }
 bowl(){const points=[[0,0],[2.55,0],[2.7,.16],[2.88,.65],[3.02,1.22],[2.86,1.28],[2.7,.8],[2.55,.2],[0,.2]].map(p=>new T.Vector2(...p));this.mesh(new T.LatheGeometry(points,96),this.wood,WX,-.2,0);this.mesh(new T.CylinderGeometry(2.57,2.57,.02,80),new T.MeshStandardMaterial({color:0x413623,roughness:1}),WX,.015,0);this.ring(2.94,.045,WX,1.06,0);}
 sticks(){const shape=new T.Shape();shape.moveTo(RADIUS,-.08);for(let i=1;i<=24;i++){const a=i/24*Math.PI;shape.lineTo(Math.cos(a)*RADIUS,Math.sin(a)*RADIUS-.08);}shape.closePath();const geo=new T.ExtrudeGeometry(shape,{depth:LENGTH,bevelEnabled:false,steps:1,curveSegments:24});geo.translate(0,0,-LENGTH/2);
 this.stickMeshes=Array.from({length:4},(_,i)=>{const group=new T.Group();this.scene.add(group);this.mesh(geo,new T.MeshStandardMaterial({color:i?0xcda16a:0xe1ba80,roughness:.65}),0,0,0,group);
 for(const z of [-.45,0,.45]){for(const angle of [-.6,.6]){const mark=this.mesh(new T.BoxGeometry(.19,.008,.022),new T.MeshStandardMaterial({color:i?0x5d3827:0x9a3025}),0,-.084,z,group);mark.rotation.y=angle;}}
 return group;});}
 pieces(){for(let team=0;team<2;team++)for(let index=0;index<4;index++){const group=new T.Group();group.userData.pick={team,piece:index};this.scene.add(group);this.targets.push(group);const material=new T.MeshStandardMaterial({color:COLORS[team],roughness:.32,metalness:.12});this.mesh(new T.CylinderGeometry(.18,.23,.19,32),material,0,.1,0,group);this.ring(.19,.018,0,.19,0,this.bronze,group);const t=label(String(index+1),'#122b28',.24);t.position.y=.205;group.add(t);group.userData.goal=new T.Vector3();this.pawns.push(group);}}
 sync(state,moves=[],selected=-1){for(let t=0;t<2;t++)for(let i=0;i<4;i++){const p=state.teams[t].pieces[i],mesh=this.pawns[t*4+i];let x,z,y=.15;
 if(p.pos==='S'||p.pos==='H'){x=(i-1.5)*.58+(t?1.65:-1.65);z=p.pos==='S'?3.6:4.2;}
 else{[x,z]=POS[p.pos];y+=state.teams[t].pieces.slice(0,i).filter(v=>v.pos===p.pos).length*.21;}
 mesh.userData.goal.set(BX+x,y,z);if(!mesh.userData.placed){mesh.position.copy(mesh.userData.goal);mesh.userData.placed=true;}mesh.scale.setScalar(state.turn===t&&i===selected?1.13:1);}
 for(const m of [...this.highlights.children]){this.highlights.remove(m);m.geometry.dispose();m.material.dispose();}
 for(const move of moves){const pos=POS[move.to]||[0,3.6];this.ring(.3,.035,BX+pos[0],.16,pos[1],new T.MeshBasicMaterial({color:0xffe39b}),this.highlights);}
 }
 view(mode){this.mode=mode==='bowl'?'bowl':'board';this.free=mode==='free';this.controls.enableRotate=this.free;this.controls.enableZoom=this.free;}
 resize(){const r=this.canvas.getBoundingClientRect();this.renderer.setSize(r.width,r.height,false);this.camera.aspect=r.width/r.height;this.camera.updateProjectionMatrix();}
 quality(low,reduced){this.renderer.setPixelRatio(low?1:Math.min(devicePixelRatio,1.5));this.renderer.shadowMap.enabled=!low;this.reduced=reduced;this.resize();}
 effect(pos,team){if(this.reduced)return;const p=POS[pos]||[0,0];for(let i=0;i<24;i++){const mesh=this.mesh(new T.SphereGeometry(.035,6,4),new T.MeshBasicMaterial({color:COLORS[team]}),BX+p[0],.5,p[1]);this.particles.push({mesh,v:new T.Vector3((Math.random()-.5)*2,1+Math.random()*2,(Math.random()-.5)*2),life:1});}}
 frame(dt){this.time+=dt;this.stickMeshes.forEach((mesh,i)=>{const b=this.physics.bodies[i],p=b.translation(),q=b.rotation();mesh.position.set(WX+p.x,p.y+.045,p.z);mesh.quaternion.set(q.x,q.y,q.z,q.w);});
 this.pawns.forEach(p=>p.position.lerp(p.userData.goal,this.reduced?1:1-Math.exp(-dt*12)));
 if(!this.free){const x=this.mode==='bowl'?WX:BX,target=new T.Vector3(x,0,0),position=new T.Vector3(x,9.5,8.5);this.controls.target.lerp(target,this.reduced?1:1-Math.exp(-dt*7));this.camera.position.lerp(position,this.reduced?1:1-Math.exp(-dt*7));}
 this.controls.update();for(let i=this.particles.length-1;i>=0;i--){const p=this.particles[i];p.life-=dt;p.v.y-=dt*5;p.mesh.position.addScaledVector(p.v,dt);p.mesh.scale.setScalar(Math.max(0,p.life));if(p.life<=0){this.scene.remove(p.mesh);p.mesh.geometry.dispose();p.mesh.material.dispose();this.particles.splice(i,1);}}
 this.renderer.render(this.scene,this.camera);}
}
