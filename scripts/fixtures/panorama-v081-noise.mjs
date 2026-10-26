import * as T from 'three';
const SIZE=128;
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
function valley(u,v,cx,cy,rx,ry){const d=Math.abs(u-cx),x=Math.min(d,1-d)/rx,y=(v-cy)/ry;return 1-smooth(.4,1,Math.hypot(x,y));}
// R: seamless density; G: stationary valley mask. Generated once, never per frame.
export function createLowMistTexture(){
 const data=new Uint8Array(SIZE*SIZE*4),levels=[[4,.56],[8,.28],[16,.12],[32,.04]];
 for(let y=0;y<SIZE;y++)for(let x=0;x<SIZE;x++){
  const u=(x+.5)/SIZE,v=(y+.5)/SIZE,i=(y*SIZE+x)*4;
  let density=0;for(const [period,weight] of levels)density+=noise(u,v,period)*weight;
  const mask=Math.max(valley(u,v,.51,.635,.46,.105),valley(u,v,.22,.735,.19,.070),valley(u,v,.80,.735,.17,.070));
  data[i]=Math.round(density*255);data[i+1]=Math.round(mask*255);data[i+3]=255;
 }
 const texture=new T.DataTexture(data,SIZE,SIZE,T.RGBAFormat);
 texture.wrapS=texture.wrapT=T.RepeatWrapping;texture.minFilter=texture.magFilter=T.LinearFilter;texture.generateMipmaps=false;texture.needsUpdate=true;return texture;
}
