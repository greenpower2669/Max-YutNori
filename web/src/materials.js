import * as T from 'three';
/** Local timber maps: long fibres, knots, small pores and matching surface relief. */
export function woodTextures(){
 const size=512,height=new Float32Array(size*size),canvas=()=>{const c=document.createElement('canvas');c.width=c.height=size;return c;};
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const knot=Math.exp(-((x-165)**2/6000+(y-245)**2/1500))*22;
  const flow=y+7*Math.sin(x*.014)+3*Math.sin(x*.047)+knot;
  const grain=.5+.16*Math.sin(flow*.52)+.08*Math.sin(flow*2.7)+.07*Math.sin(flow*.09);
  const noise=((Math.imul(x+1,374761393)^Math.imul(y+1,668265263))>>>0)%101/100-.5;
  height[y*size+x]=Math.max(0,Math.min(1,grain+noise*.12));
 }
 const color=canvas(),normal=canvas(),rough=canvas();
 const ctx=color.getContext('2d'),nc=normal.getContext('2d'),rc=rough.getContext('2d');const a=ctx.createImageData(size,size),n=nc.createImageData(size,size),r=rc.createImageData(size,size);
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){const i=y*size+x,j=i*4,h=height[i],v=120+h*120;for(let k=0;k<3;k++){a.data[j+k]=v;r.data[j+k]=155+h*70;}a.data[j+3]=r.data[j+3]=n.data[j+3]=255;
  const dx=(height[y*size+(x+1)%size]-height[y*size+(x+size-1)%size])*.7,dy=(height[((y+1)%size)*size+x]-height[((y+size-1)%size)*size+x])*.7,len=Math.hypot(dx,dy,1);n.data[j]=128-dx/len*127;n.data[j+1]=128-dy/len*127;n.data[j+2]=128+127/len;
 }
 ctx.putImageData(a,0,0);nc.putImageData(n,0,0);rc.putImageData(r,0,0);
 const map=c=>{const t=new T.CanvasTexture(c);t.wrapS=t.wrapT=T.RepeatWrapping;return t;};const maps={map:map(color),normalMap:map(normal),roughnessMap:map(rough)};maps.map.colorSpace=T.SRGBColorSpace;return maps;
}

/** One UV projection shared by colour, recess, normals and roughness. */
export async function engravedMaterial(url,renderer){
 const {engravingMaps}=await import('./engraving.mjs');
 const map=await new T.TextureLoader().loadAsync(url);map.colorSpace=T.SRGBColorSpace;map.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
 const c=document.createElement('canvas');c.width=1024;c.height=Math.round(c.width*map.image.height/map.image.width);const ctx=c.getContext('2d',{willReadFrequently:true});ctx.drawImage(map.image,0,0,c.width,c.height);
 const data=engravingMaps(ctx.getImageData(0,0,c.width,c.height).data,c.width,c.height),texture=rgba=>{const canvas=document.createElement('canvas');canvas.width=c.width;canvas.height=c.height;canvas.getContext('2d').putImageData(new ImageData(rgba,c.width,c.height),0,0);const t=new T.CanvasTexture(canvas);t.anisotropy=map.anisotropy;return t;};
 return new T.MeshStandardMaterial({map,normalMap:texture(data.normal),normalScale:new T.Vector2(.55,.55),displacementMap:texture(data.height),displacementScale:.035,displacementBias:-.035,roughnessMap:texture(data.roughness),roughness:1,metalness:0});
}
