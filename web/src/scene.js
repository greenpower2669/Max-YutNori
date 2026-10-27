import * as T from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {NODES} from './rules.mjs';
import {TABLE,SUPPORT,TRAY} from './physics.mjs';
import {createStickGeometry} from './yut-geometry.js';
import {woodTextures,engravedMaterial} from './materials.js';
import {TEAM_STYLES} from './teams.mjs';
import {BX,WX,POS,PAWN_TABLE_Y,PAWN_STACK,PAWN_CARRY_Y,pawnPosition,reservePosition,buildSelection} from './board-layout.mjs';
import {ViewZoom,boardFrame,fitDistance,approachFrame} from './camera-framing.mjs';
import {ChaseCamera} from './chase-camera.mjs';
import {PawnInput} from './pawn-input.js';
import {SelectionHalos} from './halos.js';
import {advancePawn,stackOffsets} from './pawn-motion.mjs';
import {TopView,teamPulse} from './comfort.mjs';
import {LivingPanorama} from './living-panorama.js';
export const COLORS=TEAM_STYLES.map(t=>t.color);
export {BX,WX};
function label(text,color='#fff0c9',size=.24){const c=document.createElement('canvas');c.width=128;c.height=128;const ctx=c.getContext('2d');ctx.fillStyle=color;ctx.font='bold 64px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,64,68);const map=new T.CanvasTexture(c);map.colorSpace=T.SRGBColorSpace;const mesh=new T.Mesh(new T.PlaneGeometry(size,size),new T.MeshBasicMaterial({map,transparent:true,depthWrite:false}));mesh.rotation.x=-Math.PI/2;return mesh;}
export class GameScene {
 constructor(canvas,physics,onPick,onGesture,onTray={}){this.canvas=canvas;this.physics=physics;this.onPick=onPick;this.onGesture=onGesture;this.mode='board';this.free=false;this.targets=[];this.pawns=[];this.teamGlows=[];this.particles=[];this.time=0;this.reduced=false;this.chase=new ChaseCamera();this.focusPawn=null;this.drag=null;this.lifted=null;this.topView=new TopView();this.safeInsets={top:0,bottom:0,left:0,right:0};this.actionCamera=true;this.viewZoom=new ViewZoom();this.freeZoomValue=1;this.flightPoints=Array.from({length:32},()=>new T.Vector3());
 this.renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:false});this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=T.PCFSoftShadowMap;this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.05;
 this.scene=new T.Scene();this.scene.background=new T.Color(0x102b28);this.scene.fog=new T.Fog(0x102b28,26,50);const room=new RoomEnvironment(),pmrem=new T.PMREMGenerator(this.renderer);this.environment=pmrem.fromScene(room,.04);this.scene.environment=this.environment.texture;this.scene.environmentIntensity=.55;room.dispose();pmrem.dispose();
 this.camera=new T.PerspectiveCamera(42,1,.1,80);this.camera.position.set(BX,11,5);this.controls=new OrbitControls(this.camera,canvas);this.controls.target.set(BX,0,0);this.controls.enablePan=false;this.controls.enableDamping=true;this.controls.enableRotate=false;this.controls.minDistance=3;this.controls.maxDistance=60;this.controls.maxPolarAngle=1.2;
 this.scene.add(new T.HemisphereLight(0xfff3df,0x374943,1.25));const light=new T.DirectionalLight(0xffedcf,2.5);light.position.set(-3,12,7);light.castShadow=true;light.shadow.mapSize.set(1024,1024);Object.assign(light.shadow.camera,{left:-13,right:13,top:10,bottom:-10});light.shadow.bias=-.0005;this.scene.add(light);
 const timber=woodTextures();this.timber=timber;this.wood=new T.MeshStandardMaterial({...timber,normalScale:new T.Vector2(.6,.6),roughness:.8,color:0xb58a58});this.bronze=new T.MeshStandardMaterial({color:0xcda96a,roughness:.35,metalness:.55});const weave=document.createElement('canvas');weave.width=weave.height=128;const cx=weave.getContext('2d');cx.fillStyle='#808080';cx.fillRect(0,0,128,128);for(let i=0;i<128;i+=4){cx.fillStyle=i%8?'#969696':'#707070';cx.fillRect(i,0,1,128);cx.fillRect(0,i,128,1);}const bump=new T.CanvasTexture(weave);bump.wrapS=bump.wrapT=T.RepeatWrapping;bump.repeat.set(7,7);this.cloth=new T.MeshStandardMaterial({color:0x28594e,roughness:.96,bumpMap:bump,bumpScale:.05});const fill=new T.DirectionalLight(0xc8e5ff,.8);fill.position.set(-10,5,-7);this.scene.add(fill);light.shadow.normalBias=.025;light.shadow.radius=3;
 const table=this.mesh(new T.BoxGeometry(TABLE.halfX*2,.3,TABLE.halfZ*2),this.wood,0,-.50,0);table.receiveShadow=true;
 for(const x of [-11.85,11.85])this.mesh(new T.BoxGeometry(.3,1.1,12),this.wood,x,.2,0);
 for(const z of [-5.85,5.85])this.mesh(new T.BoxGeometry(23.4,1.1,.3),this.wood,0,.2,z);
 this.board();this.bowl();this.sticks();this.pieces();this.halos=new SelectionHalos();this.scene.add(this.halos.group);this.targets.push(this.halos.group);
 this.pawnInput=new PawnInput(canvas,{
  allowView:()=>this.mode==='top'&&!this.free,viewTap:p=>{const node=this.destinationAt(p);if(node)this.onPick({node});},
  pick:p=>this.pickPawn(p),select:pick=>{if(!this.onPick(pick))return false;this.focus(pick.team,this.selected);return true;},
  begin:p=>{this.controls.enabled=false;const mesh=this.pawns[this.state.turn*4+this.selected];this.drag={point:p,reference:this.camera.clone(),distance:this.camera.position.distanceTo(mesh.position),anchor:mesh.position.clone(),start:this.onPlane(p,this.camera),focus:mesh.position.clone(),members:this.dragMembers(),moving:false};},
  drag:p=>{this.drag.point=p;if(!this.drag.moving)this.chase.zoomBy(1);this.drag.moving=true;const q=this.onPlane(p,this.drag.reference);this.drag.focus.copy(this.drag.anchor).add(q.sub(this.drag.start).multiplyScalar(this.chase.dragGain(this.drag.distance,this.camera.aspect)));this.drag.focus.x=T.MathUtils.clamp(this.drag.focus.x,BX-5,BX+5);this.drag.focus.z=T.MathUtils.clamp(this.drag.focus.z,-5,5);},
  zoom:r=>this.mode==='top'?this.topView.zoomBy(r):this.chase.zoomBy(r),end:(p,cancel,interrupted)=>{const moved=!!this.drag?.moving,node=moved&&!cancel?this.destinationAt(p):null;if(moved||interrupted){this.lifted=null;this.drag?.members.forEach((m,i)=>m.userData.travelOffset=i*PAWN_STACK);}this.drag=null;this.controls.enabled=true;this.halos.hover(null);if(node)this.onPick({node});}
 });
 const ray=new T.Raycaster();let pointer=null;
 const aim=e=>{const r=canvas.getBoundingClientRect();ray.setFromCamera(new T.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),this.camera);};
 this.cancelTrayGesture=()=>{const old=pointer;pointer=null;if(old?.tray){this.controls.enabled=true;onTray.end?.();}if(old&&canvas.hasPointerCapture(old.id))canvas.releasePointerCapture(old.id);};
 canvas.addEventListener('pointerdown',e=>{if(pointer||e.button!==0)return;aim(e);const trayHit=this.trayGroup.visible&&this.mode==='bowl'&&!this.free&&ray.intersectObject(this.trayGroup,true).length>0;
 if(trayHit){if(!onTray.begin?.())return;pointer={id:e.pointerId,x:e.clientX,y:e.clientY,tray:true};this.controls.enabled=false;canvas.setPointerCapture(e.pointerId);e.stopImmediatePropagation();e.preventDefault();}else pointer={id:e.pointerId,x:e.clientX,y:e.clientY,tray:false};},{capture:true});
 canvas.addEventListener('pointermove',e=>{if(!pointer?.tray||e.pointerId!==pointer.id)return;const r=canvas.getBoundingClientRect();onTray.move?.({roll:Math.max(-.28,Math.min(.28,(e.clientX-pointer.x)/r.width*1.4)),pitch:0,x:0,z:0,lift:Math.max(0,Math.min(TRAY.maxLift,(pointer.y-e.clientY)/r.height*5))});e.preventDefault();});
 for(const type of ['pointercancel','lostpointercapture'])canvas.addEventListener(type,e=>{if(pointer?.id===e.pointerId)this.cancelTrayGesture();});
 canvas.addEventListener('pointerup',e=>{if(!pointer||e.pointerId!==pointer.id)return;if(pointer.tray){this.cancelTrayGesture();return;}const dx=e.clientX-pointer.x,dy=e.clientY-pointer.y;pointer=null;if(this.free)return;
 if(this.mode==='bowl'&&Math.hypot(dx,dy)>35){onGesture(Math.min(1,Math.hypot(dx,dy)/250),{x:dx/160,z:dy/160});return;}
 if(Math.hypot(dx,dy)>10)return;const r=canvas.getBoundingClientRect();ray.setFromCamera(new T.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),this.camera);const hit=ray.intersectObjects(this.targets.filter(o=>o.visible),true)[0];if(hit){let o=hit.object;while(o&&!o.userData.pick)o=o.parent;if(o)onPick(o.userData.pick);}});
 canvas.addEventListener('wheel',e=>{if(this.mode==='top'&&!this.free){e.preventDefault();this.topView.zoomBy(Math.exp(-e.deltaY*.001));}},{passive:false});
 this.resize();this.controls.update();
 }
 async loadArtwork(){
  const [material,panorama]=await Promise.all([engravedMaterial('./art/engraved-table.png',this.renderer),new T.TextureLoader().loadAsync('./art/moonlit-panorama.png')]);
  this.tableArt=this.mesh(new T.PlaneGeometry(20.8,11.7,128,72),material,0,-.312,0);this.tableArt.rotation.x=-Math.PI/2;
  panorama.mapping=T.EquirectangularReflectionMapping;panorama.colorSpace=T.SRGBColorSpace;this.panorama=new LivingPanorama(panorama);this.scene.add(this.panorama.mesh);this.scene.background=null;
  const pmrem=new T.PMREMGenerator(this.renderer),old=this.environment;this.environment=pmrem.fromEquirectangular(panorama);this.scene.environment=this.environment.texture;this.scene.environmentIntensity=.4;old.dispose();pmrem.dispose();
 }
 artDiagnostic(){const m=this.tableArt?.material;return {panorama:!!this.panorama,animation:this.panorama?.diagnostic(),engraved:!!m?.map&&!!m?.normalMap&&!!m?.displacementMap&&!!m?.roughnessMap,engravingDepth:m?.displacementScale,uvSize:this.tableArt?[20.8,11.7]:null};}
 activeTeamDiagnostic(){return this.pawns.filter(p=>p.visible).map(p=>({...p.userData.pick,glowing:p.userData.activeGlow.visible,glowOpacity:p.userData.activeGlow.material.opacity,glowColors:[p.userData.activeGlow.material.color.getHexString(),p.userData.accentGlow.material.color.getHexString()],emissive:p.children[0].material.emissiveIntensity}));}
 mesh(g,m,x=0,y=0,z=0,parent=this.scene){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
 ring(radius,tube,x,y,z,material=this.bronze,parent=this.scene){const o=this.mesh(new T.TorusGeometry(radius,tube,8,64),material,x,y,z,parent);o.rotation.x=Math.PI/2;return o;}
 board(){this.mesh(new T.CylinderGeometry(3.6,3.7,.28,96),this.wood,BX,-.12,0);this.mesh(new T.CylinderGeometry(3.36,3.36,.04,96),this.cloth,BX,.04,0);this.ring(3.43,.045,BX,.1,0);this.ring(3.1,.014,BX,.08,0);
 const line=(a,b)=>{const [x,z]=POS[a],[xx,zz]=POS[b],points=[new T.Vector3(BX+x,.078,z),new T.Vector3(BX+xx,.078,zz)];this.scene.add(new T.Line(new T.BufferGeometry().setFromPoints(points),new T.LineBasicMaterial({color:0x8d9568})));};
 for(let i=1;i<=20;i++)line(`O${i}`,`O${i%20+1}`);line('O5','O15');line('O10','O20');
 for(const name of NODES){const [x,z]=POS[name],corner=['O5','O10','O15','O20','C'].includes(name);const disc=this.mesh(new T.CylinderGeometry(corner?.22:.17,corner?.22:.17,.045,32),new T.MeshStandardMaterial({color:corner?0xc7ac76:0x5c7762,roughness:.7}),BX+x,.1,z);disc.userData.pick={node:name};this.targets.push(disc);const t=label(name==='C'?'✦':name.startsWith('O')?name.slice(1):'•',corner?'#183a35':'#e7ddba',corner?.27:.23);t.position.set(BX+x,.128,z);this.scene.add(t);}
 const title=label('YUT','#c7ac76',.85);title.position.set(BX-1.4,.09,.7);this.scene.add(title);
 }
 bowl(){this.trayGroup=new T.Group();this.trayGroup.position.set(WX+TRAY.centerX,TRAY.baseY,TRAY.centerZ);this.scene.add(this.trayGroup);this.pedestal=this.mesh(new T.CylinderGeometry(SUPPORT.radius,SUPPORT.radius,SUPPORT.halfHeight*2,48),this.wood.clone(),WX+TRAY.centerX,SUPPORT.y,TRAY.centerZ);
 const points=[[0,0],[2.55,0],[2.7,.16],[2.88,.65],[3.02,1.22],[2.86,1.28],[2.7,.8],[2.55,.2],[0,.2]].map(p=>new T.Vector2(...p));this.mesh(new T.LatheGeometry(points,96),this.wood,0,-.2,0,this.trayGroup);this.mesh(new T.CylinderGeometry(2.57,2.57,.02,80),new T.MeshStandardMaterial({...this.timber,color:0x61402b,roughness:.9}),0,.015,0,this.trayGroup);this.ring(2.94,.045,0,1.06,0,this.bronze,this.trayGroup);this.trayGroup.traverse(o=>{if(o.isMesh)o.material=o.material.clone();});}
 sticks(){const geo=createStickGeometry();const lacquer=new T.MeshPhysicalMaterial({color:0x090b10,roughness:.28,metalness:0,clearcoat:.7,clearcoatRoughness:.25});const cedar=new T.MeshStandardMaterial({...this.timber,color:0xee633c,roughness:.64,normalScale:new T.Vector2(.7,.7)});
 this.stickMeshes=Array.from({length:4},(_,i)=>{const group=new T.Group();this.scene.add(group);this.mesh(geo,[lacquer,cedar],0,0,0,group);
 for(const z of [-.45,0,.45])for(const angle of [-.6,.6]){const mark=this.mesh(new T.BoxGeometry(.19,.009,.026),new T.MeshStandardMaterial({color:0xffe7b3,roughness:.65}),0,-.085,z,group);mark.rotation.y=angle;}
 if(i===0){const mark=this.mesh(new T.CylinderGeometry(.064,.064,.012,24),new T.MeshBasicMaterial({color:0xffcf65}),0,-.09,.67,group);mark.userData.backDo=true;}
 return group;});}
 pieces(){this.reserveLabels=[];for(let t=0;t<4;t++){for(const finished of [false,true]){const pos=reservePosition(t,1.5,finished),tag=label(TEAM_STYLES[t].symbol+(finished?' ✓':''),TEAM_STYLES[t].css,.35);tag.position.set(pos[0]-1.5,PAWN_TABLE_Y+.015,pos[2]);tag.userData.team=t;this.reserveLabels.push(tag);this.scene.add(tag);}}for(let team=0;team<4;team++)for(let index=0;index<4;index++){const group=new T.Group();group.userData.pick={team,piece:index};this.scene.add(group);this.targets.push(group);const style=TEAM_STYLES[team],material=style.finish==='wood'?new T.MeshStandardMaterial({...this.timber,color:style.color,roughness:.6,normalScale:new T.Vector2(.4,.4)}):new T.MeshPhysicalMaterial({color:style.color,roughness:.24,metalness:0,clearcoat:.85,clearcoatRoughness:.23,envMapIntensity:.35});this.mesh(new T.CylinderGeometry(.24,.28,.19,32),material,0,.1,0,group);this.ring(.245,.018,0,.19,0,this.bronze,group);const t=label(TEAM_STYLES[team].symbol+String(index+1),style.ink,.35);t.position.y=.205;group.add(t);const glow=new T.Mesh(new T.RingGeometry(.30,.345,48),new T.MeshBasicMaterial({color:style.glow,transparent:true,opacity:.65,depthWrite:false,side:T.DoubleSide}));glow.rotation.x=-Math.PI/2;glow.position.y=.013;glow.visible=false;group.add(glow);const outer=glow.clone();outer.geometry=new T.RingGeometry(.36,.39,48);outer.material=glow.material.clone();outer.material.color.set(style.accent);outer.position.y=.012;group.add(outer);group.userData.accentGlow=outer;group.userData.activeGlow=glow;group.userData.goal=new T.Vector3();this.pawns.push(group);}}
 sync(state,moves=[],selected=-1,candidates=moves){
 this.state=state;this.moves=moves;this.pickable=candidates;this.selected=selected;
 const offsets=stackOffsets(this.pawns.map(p=>({...p.userData.goal,team:p.userData.pick.team})));
 if(this.lifted&&(this.lifted.team!==state.turn||this.lifted.piece!==selected||state.teams[state.turn].pieces[selected]?.pos!==this.lifted.pos||!moves.length))this.lifted=null;
 for(let t=0;t<4;t++)for(let i=0;i<4;i++){const mesh=this.pawns[t*4+i];mesh.visible=t<state.teams.length;if(!mesh.visible)continue;
  const goal=new T.Vector3(...pawnPosition(state,t,i));
  if(!mesh.userData.placed||Math.hypot(goal.x-mesh.userData.goal.x,goal.z-mesh.userData.goal.z)>.001)mesh.userData.travelOffset=offsets[t*4+i];
  mesh.userData.goal.copy(goal);if(!mesh.userData.placed){mesh.position.copy(mesh.userData.goal);mesh.userData.placed=true;}
  const chosen=moves.length&&state.turn===t&&state.teams[t].pieces[i].pos===state.teams[t].pieces[selected]?.pos&&(state.teams[t].pieces[i].pos!=='S'||i===selected);
  mesh.userData.chosen=!!chosen;const active=state.turn===t&&state.phase!=='over';mesh.userData.activeGlow.visible=mesh.userData.accentGlow.visible=active;mesh.scale.setScalar(chosen?1.08:1);mesh.children[0].material.emissive.setHex(active?TEAM_STYLES[t].glow:0);mesh.children[0].material.emissiveIntensity=chosen?.16:active?.065:0;
 }
 this.halos.sync(buildSelection(state,moves,selected),TEAM_STYLES[state.turn].glow);
 if(this.chase.active){
  // A remaining result may automatically select a different pawn after a move.
  if(moves.length&&selected>=0){this.focusPawn=this.pawns[state.turn*4+selected];this.chase.destinations=this.halos.group.children.filter(h=>h.userData.kind==='destination').map(h=>h.position.clone());}
  else{this.chase.reset();this.focusPawn=null;}
 }
 for(const group of this.reserveLabels)group.visible=group.userData.team<state.teams.length;
 }
 view(mode){this.cancelPawnGesture();this.chase.reset();this.focusPawn=null;this.cancelTrayGesture();this.mode=mode==='bowl'?'bowl':mode==='top'?'top':'board';this.free=mode==='free';this.controls.enableRotate=this.free;this.controls.enableZoom=this.free;this.controls.minDistance=3;this.controls.maxDistance=60;if(this.free){const frame=approachFrame(boardFrame(BX,this.camera.aspect),this.viewZoom.value);this.controls.target.copy(frame.target);this.camera.position.copy(frame.position);this.freeZoomValue=this.viewZoom.value;}}
 toggleZoom(){return this.viewZoom.toggle();}
 cancelPawnGesture(){this.pawnInput?.cancel();this.lifted=null;}
 focus(team,piece){this.lifted={team,piece,pos:this.state.teams[team].pieces[piece].pos};if(!this.actionCamera||this.free||this.mode!=='board')return;this.focusPawn=this.pawns[team*4+piece];if(!this.focusPawn)return;this.chase.select(this.focusPawn.position,this.halos.group.children.filter(h=>h.userData.kind==='destination').map(h=>h.position));}
 project(position){const p=position.clone().project(this.camera),r=this.canvas.getBoundingClientRect();return {x:r.left+(p.x+1)*r.width/2,y:r.top+(1-p.y)*r.height/2};}
 projectedPawns(){return this.pawns.filter(p=>p.visible).map(p=>({...p.userData.pick,...this.project(p.position),position:p.position.toArray()}));}
 projectedDestinations(){return this.halos.group.children.filter(h=>h.userData.kind==='destination').map(h=>({node:h.userData.pick.node,...this.project(h.position)}));}
 pickPawn(point){if(this.free||!['board','top'].includes(this.mode)||!this.pickable?.length)return null;
  const legal=new Set(this.pickable.map(m=>m.piece)),team=this.state.turn;
  // Allow every member of a selectable stack, with a comfortable screen-space hit area.
  const positions=new Set([...legal].map(i=>this.state.teams[team].pieces[i].pos).filter(p=>p!=='S'&&p!=='H'));
  return this.projectedPawns().filter(p=>p.team===team&&(legal.has(p.piece)||positions.has(this.state.teams[team].pieces[p.piece].pos))).map(p=>({...p,d:Math.hypot(p.x-point.x,p.y-point.y)})).filter(p=>p.d<28).sort((a,b)=>a.d-b.d)[0];
 }
 onPlane(point,camera){const height=this.carryHeight();const r=this.canvas.getBoundingClientRect(),ray=new T.Raycaster();ray.setFromCamera(new T.Vector2((point.x-r.left)/r.width*2-1,1-(point.y-r.top)/r.height*2),camera);return ray.ray.intersectPlane(new T.Plane(new T.Vector3(0,1,0),-height),new T.Vector3())||new T.Vector3(BX,height,0);}
 dragMembers(){const own=this.state.teams[this.state.turn].pieces,from=own[this.selected].pos;return own.flatMap((p,i)=>(from==='S'?i===this.selected:p.pos===from)?[this.pawns[this.state.turn*4+i]]:[]);}
 destinationAt(point){return this.projectedDestinations().map(p=>({...p,d:Math.hypot(p.x-point.x,p.y-point.y)})).filter(p=>p.d<34).sort((a,b)=>a.d-b.d)[0]?.node??null;}
 carryHeight(){return Math.max(PAWN_CARRY_Y,...this.pawns.filter(p=>p.visible&&!p.userData.chosen).map(p=>p.userData.goal.y+.32));}
 cameraDiagnostic(){return {mode:this.free?'free':this.mode,topZoom:this.topView.zoom,doubleZoom:this.viewZoom.active,magnification:this.viewZoom.value,projectionZoom:this.camera.zoom,fov:this.camera.fov,safeInsets:{...this.safeInsets},input:this.pawnInput.active?(this.pawnInput.viewOnly?'view':'pawn'):null,phase:this.chase.phase,zoom:this.chase.zoom,fog:{near:this.scene.fog.near,far:this.scene.fog.far},position:this.camera.position.toArray(),target:this.controls.target.toArray(),dragging:!!this.drag?.moving,candidate:this.drag?.moving?this.destinationAt(this.drag.point):null};}
 resize(){const r=this.canvas.getBoundingClientRect();this.renderer.setSize(r.width,r.height,false);const {top,bottom,left=0,right=0}=this.safeInsets,usable=Math.max(80,r.height-top-bottom),width=Math.max(100,r.width-left-right);this.camera.setViewOffset(width,usable,-left,-top,r.width,r.height);this.camera.updateProjectionMatrix();}
 quality(low,reduced){this.low=low;this.renderer.setPixelRatio(low?1:Math.min(devicePixelRatio,1.5));this.renderer.shadowMap.enabled=!low;this.reduced=reduced;this.resize();}
 effect(pos,team){if(this.reduced)return;const p=POS[pos]||[0,0];for(let i=0;i<24;i++){const mesh=this.mesh(new T.SphereGeometry(.035,6,4),new T.MeshBasicMaterial({color:TEAM_STYLES[team].glow}),BX+p[0],.5,p[1]);this.particles.push({mesh,v:new T.Vector3((Math.random()-.5)*2,1+Math.random()*2,(Math.random()-.5)*2),life:1});}}
 flightBounds(){let i=0;this.stickMeshes.forEach((mesh,index)=>{const p=mesh.position,v=this.physics.bodies[index].linvel();for(const x of [-.9,.9])for(const y of [-.9,.9])for(const z of [-.9,.9])this.flightPoints[i++].set(p.x+x,p.y+y+(y>0?Math.max(0,v.y)*.2:0),p.z+z);});return this.flightPoints;}
 projectedTray(){const p=this.trayGroup.localToWorld(new T.Vector3(0,.02,1)).project(this.camera);return {x:p.x,y:p.y};}
 projectedSticks(){return this.stickMeshes.map(m=>{const p=m.position.clone().project(this.camera);return {x:p.x,y:p.y,z:p.z,height:m.position.y};});}
 frame(dt){const approach=this.viewZoom.frame(dt,this.reduced);this.time+=dt;this.panorama?.frame(dt,this.reduced,this.low);this.pulse=teamPulse(this.time,this.reduced);const opacity=this.bowlCycle?.opacity??1;this.trayGroup.visible=this.pedestal.visible=opacity>0;for(const root of [this.trayGroup,this.pedestal])root.traverse(o=>{if(o.isMesh){if(o.material.transparent!==(opacity<1)){o.material.transparent=opacity<1;o.material.needsUpdate=true;}o.material.opacity=opacity;o.material.depthWrite=opacity===1;o.castShadow=opacity===1;}});const tp=this.physics.tray.translation(),tq=this.physics.tray.rotation();this.trayGroup.position.set(WX+tp.x,tp.y,tp.z);this.trayGroup.quaternion.set(tq.x,tq.y,tq.z,tq.w);this.stickMeshes.forEach((mesh,i)=>{const b=this.physics.bodies[i],p=b.translation(),q=b.rotation();mesh.position.set(WX+p.x,p.y,p.z);mesh.quaternion.set(q.x,q.y,q.z,q.w);});
 this.halos.frame(dt,this.reduced);const clearance=this.carryHeight();let liftIndex=0;
 this.pawns.forEach(p=>{
  const active=p.userData.activeGlow.visible,chosen=p.userData.chosen;p.userData.activeGlow.material.opacity=.38+.57*this.pulse;p.userData.accentGlow.material.opacity=.95-.42*this.pulse;
  p.children[0].material.emissiveIntensity=active?(chosen?.12+.35*this.pulse:.025+.2*this.pulse):0;
  if(!this.drag?.moving||!this.drag.members.includes(p)){
   const goal=p.userData.goal.clone();if(this.lifted&&chosen)goal.y=clearance+liftIndex++*PAWN_STACK;
   advancePawn(p.position,goal,dt,clearance+(p.userData.travelOffset||0),this.reduced);
  }
 });
 const selectedHalo=this.halos.group.children.find(h=>h.userData.kind==='selection');
 if(selectedHalo&&this.selected>=0){const pawn=this.pawns[this.state.turn*4+this.selected];selectedHalo.position.copy(pawn.position);selectedHalo.position.y+=.035;}
 if(!this.free){
  let {target,position}=boardFrame(BX,this.camera.aspect);
  if(this.mode==='bowl'){
   const flightHeight=this.physics.active?Math.max(...this.stickMeshes.map(m=>m.position.y)):0;
   target=new T.Vector3(.8,Math.max(.8,flightHeight*.42),.6);
   const direction=new T.Vector3(0,.85,.55).normalize(),points=[];
   for(const x of [BX-3.85,WX+TRAY.centerX+3.2])for(const z of [-4.3,4.3])points.push(new T.Vector3(x,.4,z));
   if(this.physics.active)points.push(...this.flightBounds());
   const distance=fitDistance(points,target,direction,this.camera.aspect,1);
   position=target.clone().addScaledVector(direction,distance);
  }
  const action=this.focusPawn&&this.mode==='board'?this.chase.frame(dt,this.drag?.moving?this.drag.focus:this.focusPawn.position,this.camera.aspect,this.reduced,approach):null;
  if(action){target=action.target;position=action.position;}
  if(this.mode==='top'){target=new T.Vector3(BX,0,0);position=new T.Vector3(BX,this.topView.distance(this.camera.aspect),.001);}
  if(!action)({target,position}=approachFrame({target,position},approach));
  const blend=this.reduced?1:1-Math.exp(-dt*5);this.controls.target.lerp(target,blend);this.camera.position.lerp(position,blend);
 }else{
  // Keep orbit and manual pinch independent of the two-state approach switch.
  this.camera.position.sub(this.controls.target).multiplyScalar(this.freeZoomValue/approach).add(this.controls.target);
  this.freeZoomValue=approach;this.controls.minDistance=3/approach;
  const normal=boardFrame(BX,this.camera.aspect);this.controls.maxDistance=normal.position.distanceTo(normal.target)*1.35/approach;
 }
 this.controls.update();
 // Back away immediately if easing would clip a fast ascending stick. No body is moved.
 if(this.physics.active){const direction=this.camera.position.clone().sub(this.controls.target).normalize(),distance=fitDistance(this.flightBounds(),this.controls.target,direction,this.camera.aspect,this.camera.zoom);if(this.camera.position.distanceTo(this.controls.target)<distance)this.camera.position.copy(this.controls.target).addScaledVector(direction,distance);}
 this.camera.updateMatrixWorld();

 const distance=this.camera.position.distanceTo(this.controls.target);this.scene.fog.near=Math.max(26,distance+12);this.scene.fog.far=Math.max(50,distance+36);
 if(this.drag?.moving){const p=this.onPlane(this.drag.point,this.camera),base=this.drag.members[0];
  if(this.reduced||base.position.y>=p.y-.003)this.drag.members.forEach((mesh,i)=>mesh.position.set(p.x,p.y+i*PAWN_STACK,p.z));
  else this.drag.members.forEach((mesh,i)=>{const up=mesh.position.clone();up.y=p.y+i*PAWN_STACK;advancePawn(mesh.position,up,dt,p.y,this.reduced);});
  this.halos.hover(this.destinationAt(this.drag.point));
 }
 for(let i=this.particles.length-1;i>=0;i--){const p=this.particles[i];p.life-=dt;p.v.y-=dt*5;p.mesh.position.addScaledVector(p.v,dt);p.mesh.scale.setScalar(Math.max(0,p.life));if(p.life<=0){this.scene.remove(p.mesh);p.mesh.geometry.dispose();p.mesh.material.dispose();this.particles.splice(i,1);}}
 this.renderer.render(this.scene,this.camera);}
}
