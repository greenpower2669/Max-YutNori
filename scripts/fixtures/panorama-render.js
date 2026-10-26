import * as T from 'three';
import {LivingPanorama} from '../../web/src/living-panorama.js';
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
 for(let y=centre?132:0;y<(centre?148:280);y++)for(let x=centre?232:0;x<(centre?248:480);x++){
  const i=(y*480+x)*4,d=Math.abs(a[i]-b[i])+Math.abs(a[i+1]-b[i+1])+Math.abs(a[i+2]-b[i+2]);delta+=d;changed+=d>6;count++;
 }
 return {meanDelta:delta/(count*3),changedFraction:changed/count};
}
let quietMist;
function lowCloudCompare(centre=false,low=false){
 const uniform=panorama.uniforms.lowMistData,real=uniform?.value;
 if(!real)return {contribution:0,advection:0,drawCalls:renderer.info.render.calls,textureBytes:0};
 if(!quietMist){const data=new Uint8Array(real.image.data);for(let i=1;i<data.length;i+=4)data[i]=0;quietMist=new T.DataTexture(data,real.image.width,real.image.height,T.RGBAFormat);quietMist.wrapS=real.wrapS;quietMist.wrapT=real.wrapT;quietMist.minFilter=real.minFilter;quietMist.magFilter=real.magFilter;quietMist.generateMipmaps=false;quietMist.needsUpdate=true;}
 try{
  uniform.value=real;const on0=draw(0,low),on12=draw(12,low);
  uniform.value=quietMist;const off0=draw(0,low),off12=draw(12,low);
  const effect0=new Int16Array(on0.length),effect12=new Int16Array(on0.length);for(let i=0;i<on0.length;i++){effect0[i]=on0[i]-off0[i];effect12[i]=on12[i]-off12[i];}
  return {contribution:difference(on0,off0,centre).meanDelta,advection:difference(effect0,effect12,centre).meanDelta,drawCalls:renderer.info.render.calls,textureBytes:real.image.data.byteLength};
 }finally{uniform.value=real;draw(12,low);}
}
window.panoramaProbe={
 aim(u,p){const a=(u-.5)*2*Math.PI,b=(.5-p)*Math.PI;camera.lookAt(new T.Vector3(Math.cos(a)*Math.cos(b),Math.sin(b),Math.sin(a)*Math.cos(b)).applyAxisAngle(new T.Vector3(0,1,0),-.3*Math.PI));},
 compare(){return difference(draw(0),draw(3));},
 lowCloudCompare,
 showTime(t){draw(t);},
 still(){panorama.frame(0,true,false);renderer.render(scene,camera);const gl=renderer.getContext(),a=new Uint8Array(480*280*4);gl.readPixels(0,0,480,280,gl.RGBA,gl.UNSIGNED_BYTE,a);panorama.frame(3,true,false);renderer.render(scene,camera);const b=new Uint8Array(a.length);gl.readPixels(0,0,480,280,gl.RGBA,gl.UNSIGNED_BYTE,b);return a.every((x,i)=>x===b[i]);}
};window.__probeReady=true;
