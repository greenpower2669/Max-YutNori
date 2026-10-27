import * as T from 'three';
import {panoramaMasks} from './panorama-zones.mjs';
const WIDTH=256,HEIGHT=128;
const smooth=(a,b,v)=>{const t=Math.max(0,Math.min(1,(v-a)/(b-a)));return t*t*(3-2*t);};
function cell(x,y,period){
 x=(x%period+period)%period;y=(y%period+period)%period;
 let h=Math.imul(x+period*3,374761393)^Math.imul(y+period*7,668265263);
 h=Math.imul(h^(h>>>13),1274126177);return ((h^(h>>>16))>>>0)/4294967295;
}
function noise(u,v,period){
 const x=u*period,y=v*period,ix=Math.floor(x),iy=Math.floor(y),fx=smooth(0,1,x-ix),fy=smooth(0,1,y-iy);
 const a=cell(ix,iy,period)*(1-fx)+cell(ix+1,iy,period)*fx,b=cell(ix,iy+1,period)*(1-fx)+cell(ix+1,iy+1,period)*fx;
 return a*(1-fy)+b*fy;
}
// R: seamless density; G/B/A: valleys, sky clouds, water. Prepared once.
export function createLowMistTexture(){
 const data=new Uint8Array(WIDTH*HEIGHT*4),levels=[[4,.56],[8,.28],[16,.12],[32,.04]];
 for(let y=0;y<HEIGHT;y++)for(let x=0;x<WIDTH;x++){
  const u=(x+.5)/WIDTH,v=(y+.5)/HEIGHT,i=(y*WIDTH+x)*4;
  let density=0;for(const [period,weight] of levels)density+=noise(u,v,period)*weight;
  const [fog,clouds,water]=panoramaMasks(u,v);
  data[i]=Math.round(density*255);data[i+1]=Math.round(fog*255);data[i+2]=Math.round(clouds*255);data[i+3]=Math.round(water*255);
 }
 const texture=new T.DataTexture(data,WIDTH,HEIGHT,T.RGBAFormat);
 texture.wrapS=texture.wrapT=T.RepeatWrapping;texture.minFilter=texture.magFilter=T.LinearFilter;texture.generateMipmaps=false;texture.needsUpdate=true;return texture;
}
