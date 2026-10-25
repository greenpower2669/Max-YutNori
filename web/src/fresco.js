export class FrescoViewer {
 constructor(viewport,image,output){
  this.viewport=viewport;this.image=image;this.output=output;this.zoom=1;this.points=new Map();image.draggable=false;
  new ResizeObserver(()=>this.setZoom(this.zoom)).observe(viewport);
  viewport.addEventListener('pointerdown',e=>{if(e.button!==0||this.points.size>=2)return;this.points.set(e.pointerId,{x:e.clientX,y:e.clientY});viewport.setPointerCapture(e.pointerId);e.preventDefault();});
  viewport.addEventListener('pointermove',e=>{
   if(!this.points.has(e.pointerId))return;e.preventDefault();
   const previous=this.points.get(e.pointerId),old=[...this.points.values()];this.points.set(e.pointerId,{x:e.clientX,y:e.clientY});
   if(this.points.size===2){const now=[...this.points.values()],distance=a=>Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);const a=distance(old),b=distance(now);if(a>8&&b>8){const rect=viewport.getBoundingClientRect();this.setZoom(this.zoom*b/a,{x:(now[0].x+now[1].x)/2-rect.left,y:(now[0].y+now[1].y)/2-rect.top});}}
   else{viewport.scrollLeft-=e.clientX-previous.x;viewport.scrollTop-=e.clientY-previous.y;}
  });
  for(const type of ['pointerup','pointercancel','lostpointercapture'])viewport.addEventListener(type,e=>this.points.delete(e.pointerId));
 }
 setZoom(value,anchor){
  const v=this.viewport,next=Math.max(1,Math.min(4,value)),oldWidth=this.width||v.clientWidth,oldHeight=oldWidth*864/1536;
  anchor??={x:v.clientWidth/2,y:v.clientHeight/2};
  const x=(v.scrollLeft+anchor.x)/Math.max(1,oldWidth),y=(v.scrollTop+anchor.y)/Math.max(1,oldHeight);
  this.zoom=next;this.width=v.clientWidth*next;this.image.style.width=this.width+'px';v.scrollLeft=x*this.width-anchor.x;v.scrollTop=y*this.width*864/1536-anchor.y;this.output.textContent=Math.round(next*100)+' %';
 }
 reset(){this.points.clear();this.setZoom(1);this.viewport.scrollTo(0,0);}
}
