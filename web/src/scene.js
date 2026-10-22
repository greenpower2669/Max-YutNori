import * as T from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {NODES} from './rules.mjs';
import {TABLE} from './physics.mjs';
import {createStickGeometry} from './yut-geometry.js';
import {woodTextures} from './materials.js';
import {TEAM_STYLES} from './teams.mjs';
import {BX,WX,POS,pawnPosition,reservePosition,buildSelection} from './board-layout.mjs';
import {SelectionHalos} from './halos.js';
export const COLORS=TEAM_STYLES.map(t=>t.color);
export {BX,WX};
function label(text,color='#fff0c9',size=.24){const c=document.createElement('canvas');c.width=128;c.height=128;const ctx=c.getContext('2d');ctx.fillStyle=color;ctx.font='bold 64px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,64,68);const map=new T.CanvasTexture(c);map.colorSpace=T.SRGBColorSpace;const mesh=new T.Mesh(new T.PlaneGeometry(size,size),new T.MeshBasicMaterial({map,transparent:true,depthWrite:false}));mesh.rotation.x=-Math.PI/2;return mesh;}
export class GameScene {
 constructor(canvas,physics,onPick,onGesture){this.canvas=canvas;this.physics=physics;this.onPick=onPick;this.onGesture=onGesture;this.mode='board';this.free=false;this.targets=[];this.pawns=[];this.particles=[];this.time=0;this.reduced=false;
 this.renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:false});this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=T.PCFSoftShadowMap;this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.05;
 this.scene=new T.Scene();this.scene.background=new T.Color(0x102b28);this.scene.fog=new T.Fog(0x102b28,26,50);const room=new RoomEnvironment(),pmrem=new T.PMREMGenerator(this.renderer);this.environment=pmrem.fromScene(room,.04);this.scene.environment=this.environment.texture;this.scene.environmentIntensity=.55;room.dispose();pmrem.dispose();
 this.camera=new T.PerspectiveCamera(42,1,.1,80);this.camera.position.set(BX,11,5);this.controls=new OrbitControls(this.camera,canvas);this.controls.target.set(BX,0,0);this.controls.enablePan=false;this.controls.enableDamping=true;this.controls.enableRotate=false;this.controls.minDistance=7;this.controls.maxDistance=18;this.controls.maxPolarAngle=1.2;
 this.scene.add(new T.HemisphereLight(0xfff3df,0x374943,1.25));const light=new T.DirectionalLight(0xffedcf,2.5);light.position.set(-3,12,7);light.castShadow=true;light.shadow.mapSize.set(1024,1024);Object.assign(light.shadow.camera,{left:-13,right:13,top:10,bottom:-10});light.shadow.bias=-.0005;this.scene.add(light);
 const timber=woodTextures();this.timber=timber;this.wood=new T.MeshStandardMaterial({...timber,normalScale:new T.Vector2(.6,.6),roughness:.8,color:0xb58a58});this.bronze=new T.MeshStandardMaterial({color:0xcda96a,roughness:.35,metalness:.55});const weave=document.createElement('canvas');weave.width=weave.height=128;const cx=weave.getContext('2d');cx.fillStyle='#808080';cx.fillRect(0,0,128,128);for(let i=0;i<128;i+=4){cx.fillStyle=i%8?'#969696':'#707070';cx.fillRect(i,0,1,128);cx.fillRect(0,i,128,1);}const bump=new T.CanvasTexture(weave);bump.wrapS=bump.wrapT=T.RepeatWrapping;bump.repeat.set(7,7);this.cloth=new T.MeshStandardMaterial({color:0x28594e,roughness:.96,bumpMap:bump,bumpScale:.05});const fill=new T.DirectionalLight(0xc8e5ff,.8);fill.position.set(-10,5,-7);this.scene.add(fill);light.shadow.normalBias=.025;light.shadow.radius=3;
 const table=this.mesh(new T.BoxGeometry(TABLE.halfX*2,.3,TABLE.halfZ*2),this.wood,0,-.48,0);table.receiveShadow=true;
 for(const x of [-11.85,11.85])this.mesh(new T.BoxGeometry(.3,1.1,12),this.wood,x,.2,0);
 for(const z of [-5.85,5.85])this.mesh(new T.BoxGeometry(23.4,1.1,.3),this.wood,0,.2,z);
 this.board();this.bowl();this.sticks();this.pieces();this.halos=new SelectionHalos();this.scene.add(this.halos.group);this.targets.push(this.halos.group);
 const ray=new T.Raycaster();let pointer=null;
 canvas.addEventListener('pointerdown',e=>{pointer={x:e.clientX,y:e.clientY};});canvas.addEventListener('pointerup',e=>{if(!pointer||this.free)return;const dx=e.clientX-pointer.x,dy=e.clientY-pointer.y;pointer=null;
 if(this.mode==='bowl'&&Math.hypot(dx,dy)>35){onGesture(Math.min(1,Math.hypot(dx,dy)/250),{x:dx/160,z:dy/160});return;}
 if(Math.hypot(dx,dy)>10)return;const r=canvas.getBoundingClientRect();ray.setFromCamera(new T.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),this.camera);const hit=ray.intersectObjects(this.targets.filter(o=>o.visible),true)[0];if(hit){let o=hit.object;while(o&&!o.userData.pick)o=o.parent;if(o)onPick(o.userData.pick);}});
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
 bowl(){this.trayGroup=new T.Group();this.scene.add(this.trayGroup);this.mesh(new T.CylinderGeometry(1.05,1.05,.8,48),this.wood,WX,.07,0);
 const points=[[0,0],[2.55,0],[2.7,.16],[2.88,.65],[3.02,1.22],[2.86,1.28],[2.7,.8],[2.55,.2],[0,.2]].map(p=>new T.Vector2(...p));this.mesh(new T.LatheGeometry(points,96),this.wood,0,-.2,0,this.trayGroup);this.mesh(new T.CylinderGeometry(2.57,2.57,.02,80),new T.MeshStandardMaterial({...this.timber,color:0x61402b,roughness:.9}),0,.015,0,this.trayGroup);this.ring(2.94,.045,0,1.06,0,this.bronze,this.trayGroup);}
 sticks(){const geo=createStickGeometry();const lacquer=new T.MeshPhysicalMaterial({color:0x090b10,roughness:.28,metalness:0,clearcoat:.7,clearcoatRoughness:.25});const cedar=new T.MeshStandardMaterial({...this.timber,color:0xee633c,roughness:.64,normalScale:new T.Vector2(.7,.7)});
 this.stickMeshes=Array.from({length:4},(_,i)=>{const group=new T.Group();this.scene.add(group);this.mesh(geo,[lacquer,cedar],0,0,0,group);
 for(const z of [-.45,0,.45])for(const angle of [-.6,.6]){const mark=this.mesh(new T.BoxGeometry(.19,.009,.026),new T.MeshStandardMaterial({color:0xffe7b3,roughness:.65}),0,-.085,z,group);mark.rotation.y=angle;}
 if(i===0){const mark=this.mesh(new T.CylinderGeometry(.064,.064,.012,24),new T.MeshBasicMaterial({color:0xffcf65}),0,-.09,.67,group);mark.userData.backDo=true;}
 return group;});}
 pieces(){this.reserveLabels=[];for(let t=0;t<4;t++){for(const finished of [false,true]){const pos=reservePosition(t,1.5,finished),tag=label(TEAM_STYLES[t].symbol+(finished?' ✓':''),TEAM_STYLES[t].css,.35);tag.position.set(pos[0]-1.5,.09,pos[2]);tag.userData.team=t;this.reserveLabels.push(tag);this.scene.add(tag);}}for(let team=0;team<4;team++)for(let index=0;index<4;index++){const group=new T.Group();group.userData.pick={team,piece:index};this.scene.add(group);this.targets.push(group);const material=new T.MeshStandardMaterial({color:COLORS[team],roughness:.32,metalness:.12});this.mesh(new T.CylinderGeometry(.18,.23,.19,32),material,0,.1,0,group);this.ring(.19,.018,0,.19,0,this.bronze,group);const t=label(TEAM_STYLES[team].symbol+String(index+1),'#122b28',.26);t.position.y=.205;group.add(t);group.userData.goal=new T.Vector3();this.pawns.push(group);}}
 sync(state,moves=[],selected=-1){
 for(let t=0;t<4;t++)for(let i=0;i<4;i++){const mesh=this.pawns[t*4+i];mesh.visible=t<state.teams.length;if(!mesh.visible)continue;
  mesh.userData.goal.set(...pawnPosition(state,t,i));if(!mesh.userData.placed){mesh.position.copy(mesh.userData.goal);mesh.userData.placed=true;}
  const chosen=moves.length&&state.turn===t&&state.teams[t].pieces[i].pos===state.teams[t].pieces[selected]?.pos&&(state.teams[t].pieces[i].pos!=='S'||i===selected);
  mesh.scale.setScalar(chosen?1.08:1);mesh.children[0].material.emissive.setHex(chosen?COLORS[t]:0);mesh.children[0].material.emissiveIntensity=chosen?.18:0;
 }
 this.halos.sync(buildSelection(state,moves,selected),COLORS[state.turn]);
 for(const group of this.reserveLabels)group.visible=group.userData.team<state.teams.length;
 }
 view(mode){this.mode=mode==='bowl'?'bowl':'board';this.free=mode==='free';this.controls.enableRotate=this.free;this.controls.enableZoom=this.free;}
 resize(){const r=this.canvas.getBoundingClientRect();this.renderer.setSize(r.width,r.height,false);this.camera.aspect=r.width/r.height;this.camera.updateProjectionMatrix();}
 quality(low,reduced){this.renderer.setPixelRatio(low?1:Math.min(devicePixelRatio,1.5));this.renderer.shadowMap.enabled=!low;this.reduced=reduced;this.resize();}
 effect(pos,team){if(this.reduced)return;const p=POS[pos]||[0,0];for(let i=0;i<24;i++){const mesh=this.mesh(new T.SphereGeometry(.035,6,4),new T.MeshBasicMaterial({color:COLORS[team]}),BX+p[0],.5,p[1]);this.particles.push({mesh,v:new T.Vector3((Math.random()-.5)*2,1+Math.random()*2,(Math.random()-.5)*2),life:1});}}
 projectedSticks(){return this.stickMeshes.map(m=>{const p=m.position.clone().project(this.camera);return {x:p.x,y:p.y,z:p.z,height:m.position.y};});}
 frame(dt){this.time+=dt;const tp=this.physics.tray.translation(),tq=this.physics.tray.rotation();this.trayGroup.position.set(WX+tp.x,tp.y,tp.z);this.trayGroup.quaternion.set(tq.x,tq.y,tq.z,tq.w);this.stickMeshes.forEach((mesh,i)=>{const b=this.physics.bodies[i],p=b.translation(),q=b.rotation();mesh.position.set(WX+p.x,p.y,p.z);mesh.quaternion.set(q.x,q.y,q.z,q.w);});
 this.halos.frame(dt,this.reduced);this.pawns.forEach(p=>p.position.lerp(p.userData.goal,this.reduced?1:1-Math.exp(-dt*12)));
 if(!this.free){const x=this.mode==='bowl'?WX:BX,target=new T.Vector3(x,this.mode==='bowl'?1.4:0,this.mode==='bowl'?1.6:0),position=new T.Vector3(x,(this.mode==='bowl'?13:11)*Math.max(1,.92/this.camera.aspect),(this.mode==='bowl'?12:5)*Math.max(1,.92/this.camera.aspect));this.controls.target.lerp(target,this.reduced?1:1-Math.exp(-dt*7));this.camera.position.lerp(position,this.reduced?1:1-Math.exp(-dt*7));}
 this.controls.update();for(let i=this.particles.length-1;i>=0;i--){const p=this.particles[i];p.life-=dt;p.v.y-=dt*5;p.mesh.position.addScaledVector(p.v,dt);p.mesh.scale.setScalar(Math.max(0,p.life));if(p.life<=0){this.scene.remove(p.mesh);p.mesh.geometry.dispose();p.mesh.material.dispose();this.particles.splice(i,1);}}
 this.renderer.render(this.scene,this.camera);}
}
