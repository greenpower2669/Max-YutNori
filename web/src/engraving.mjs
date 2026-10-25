/** Derive recessed ink strokes from local contrast, leaving broad painted shading alone. */
export function engravingMaps(pixels,width,height){
 const n=width*height,stride=width+1,integral=new Float32Array((height+1)*stride),luma=new Float32Array(n),depth=new Float32Array(n);
 for(let y=0;y<height;y++){let row=0;for(let x=0;x<width;x++){const i=y*width+x,j=i*4;luma[i]=(pixels[j]*.2126+pixels[j+1]*.7152+pixels[j+2]*.0722)/255;row+=luma[i];integral[(y+1)*stride+x+1]=integral[y*stride+x+1]+row;}}
 const radius=Math.max(3,Math.round(width/170));
 for(let y=0;y<height;y++)for(let x=0;x<width;x++){
  const x0=Math.max(0,x-radius),x1=Math.min(width,x+radius+1),y0=Math.max(0,y-radius),y1=Math.min(height,y+radius+1);
  const local=(integral[y1*stride+x1]-integral[y0*stride+x1]-integral[y1*stride+x0]+integral[y0*stride+x0])/((x1-x0)*(y1-y0));
  depth[y*width+x]=Math.max(0,Math.min(1,(local-luma[y*width+x]-.045)/.24));
 }
 const maps={height:new Uint8ClampedArray(n*4),normal:new Uint8ClampedArray(n*4),roughness:new Uint8ClampedArray(n*4)};
 for(let y=0;y<height;y++)for(let x=0;x<width;x++){
  const i=y*width+x,j=i*4,d=depth[i],dx=(depth[y*width+Math.min(width-1,x+1)]-depth[y*width+Math.max(0,x-1)])*2,dy=(depth[Math.min(height-1,y+1)*width+x]-depth[Math.max(0,y-1)*width+x])*2,len=Math.hypot(dx,dy,1);
  maps.height.set([255-d*160,255-d*160,255-d*160,255],j);maps.roughness.set([155+d*85,155+d*85,155+d*85,255],j);
  // Canvas Y points down; a tangent-space normal map uses Y up.
  maps.normal.set([128+127*dx/len,128-127*dy/len,128+127/len,255],j);
 }
 return maps;
}
