import * as T from 'three';
import {LivingPanorama} from '../../web/src/living-panorama.js';
import {LivingPanorama as ReferencePanorama} from './panorama-v081-reference.js';
const renderer=new T.WebGLRenderer({canvas:document.querySelector('canvas'),preserveDrawingBuffer:true,antialias:false});
renderer.setSize(480,280);renderer.toneMapping=T.ACESFilmicToneMapping;
const scene=new T.Scene(),camera=new T.PerspectiveCamera(32,480/280,.1,10),texture=await new T.TextureLoader().loadAsync('/image.png');
texture.colorSpace=T.SRGBColorSpace;const panorama=new LivingPanorama(texture);scene.add(panorama.mesh);
function draw(t,low=false){
 panorama.uniforms.time.value=t;panorama.frame(0,false,low);renderer.render(scene,camera);
 const gl=renderer.getContext(),pixels=new Uint8Array(480*280*4);gl.readPixels(0,0,480,280,gl.RGBA,gl.UNSIGNED_BYTE,pixels);return pixels;
}
function difference(a,b,centre=false){
 let delta=0,changed=0,count=0;
 const radius=typeof centre==='number'?centre/2:8;
 for(let y=centre?140-radius:0;y<(centre?140+radius:280);y++)for(let x=centre?240-radius:0;x<(centre?240+radius:480);x++){
  const i=(y*480+x)*4,d=Math.abs(a[i]-b[i])+Math.abs(a[i+1]-b[i+1])+Math.abs(a[i+2]-b[i+2]);delta+=d;changed+=d>6;count++;
 }
 return {meanDelta:delta/(count*3),changedFraction:changed/count};
}
const quietMaps=new Map();
function withoutChannel(real,channel){
 const key=real.uuid+':'+channel;
 if(!quietMaps.has(key)){const data=new Uint8Array(real.image.data);for(let i=channel;i<data.length;i+=4)data[i]=0;const quiet=new T.DataTexture(data,real.image.width,real.image.height,T.RGBAFormat);quiet.wrapS=real.wrapS;quiet.wrapT=real.wrapT;quiet.minFilter=real.minFilter;quiet.magFilter=real.magFilter;quiet.generateMipmaps=false;quiet.needsUpdate=true;quietMaps.set(key,quiet);}
 return quietMaps.get(key);
}
function lowCloudCompare(centre=false,low=false,channel=1){
 const uniform=panorama.uniforms.lowMistData,real=uniform?.value;
 if(!real)return {contribution:0,advection:0,drawCalls:renderer.info.render.calls,textureBytes:0};
 try{
  uniform.value=real;const on0=draw(0,low),on12=draw(12,low);
  uniform.value=withoutChannel(real,channel);const off0=draw(0,low),off12=draw(12,low);
  const effect0=new Int16Array(on0.length),effect12=new Int16Array(on0.length);for(let i=0;i<on0.length;i++){effect0[i]=on0[i]-off0[i];effect12[i]=on12[i]-off12[i];}
  return {contribution:difference(on0,off0,centre).meanDelta,advection:difference(effect0,effect12,centre).meanDelta,drawCalls:renderer.info.render.calls,textureBytes:real.image.data.byteLength};
 }finally{uniform.value=real;draw(12,low);}
}
const reference=new ReferencePanorama(texture);
const unwarpedMaterial=panorama.mesh.material.clone();unwarpedMaterial.uniforms=panorama.uniforms;
unwarpedMaterial.fragmentShader=unwarpedMaterial.fragmentShader.replace('sampleImage(uv+offset*strength)','sampleImage(uv)');
function distortion(){
 const real=panorama.mesh.material,phases=[];
 try{for(const t of [0,1,3,7,12]){panorama.mesh.material=real;const on=draw(t);panorama.mesh.material=unwarpedMaterial;const off=draw(t);phases.push({t,...difference(on,off,4)});}return phases;}
 finally{panorama.mesh.material=real;draw(12);}
}
function compareReference(centre=true,withoutFog=false){
 const currentMap=panorama.uniforms.lowMistData.value,referenceMap=reference.uniforms.lowMistData.value;
 try{
  if(withoutFog){panorama.uniforms.lowMistData.value=withoutChannel(currentMap,1);reference.uniforms.lowMistData.value=withoutChannel(referenceMap,1);}
  const current0=draw(0),current12=draw(12);scene.remove(panorama.mesh);scene.add(reference.mesh);
  const pixels=t=>{reference.uniforms.time.value=t;reference.frame(0,false,false);renderer.render(scene,camera);const gl=renderer.getContext(),p=new Uint8Array(current0.length);gl.readPixels(0,0,480,280,gl.RGBA,gl.UNSIGNED_BYTE,p);return p;};
  return {at0:difference(current0,pixels(0),centre).meanDelta,at12:difference(current12,pixels(12),centre).meanDelta};
 }finally{panorama.uniforms.lowMistData.value=currentMap;reference.uniforms.lowMistData.value=referenceMap;scene.remove(reference.mesh);scene.add(panorama.mesh);draw(12);}
}
window.panoramaProbe={
 aim(u,p){const a=(u-.5)*2*Math.PI,b=(.5-p)*Math.PI;camera.lookAt(new T.Vector3(Math.cos(a)*Math.cos(b),Math.sin(b),Math.sin(a)*Math.cos(b)).applyAxisAngle(new T.Vector3(0,1,0),-.3*Math.PI));},
 compare(){return difference(draw(0),draw(3));},
 lowCloudCompare,
 compareReference,
 distortion,
 maskOverview(){
  const canvas=document.createElement('canvas');canvas.width=1536;canvas.height=768;const ctx=canvas.getContext('2d');ctx.drawImage(texture.image,0,0);
  const {data,width,height}=panorama.uniforms.lowMistData.value.image;
  for(let y=0;y<height;y++)for(let x=0;x<width;x++){const i=(y*width+x)*4;for(const [channel,color]of [[1,'170,60,230'],[2,'0,220,195'],[3,'250,230,0']])if(data[i+channel]){ctx.fillStyle=`rgba(${color},${data[i+channel]/255*.65})`;ctx.fillRect(x*6,y*6,6,6);}}
  return canvas.toDataURL('image/png');
 },
 showTime(t){draw(t);},
 still(){panorama.frame(0,true,false);renderer.render(scene,camera);const gl=renderer.getContext(),a=new Uint8Array(480*280*4);gl.readPixels(0,0,480,280,gl.RGBA,gl.UNSIGNED_BYTE,a);panorama.frame(3,true,false);renderer.render(scene,camera);const b=new Uint8Array(a.length);gl.readPixels(0,0,480,280,gl.RGBA,gl.UNSIGNED_BYTE,b);return a.every((x,i)=>x===b[i]);}
};window.__probeReady=true;
