const point=e=>({x:e.clientX,y:e.clientY});
const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
// Owns accepted pawn pointers only. Tray and orbit gestures remain separate.
export class PawnInput {
 constructor(canvas,callbacks){this.canvas=canvas;this.cb=callbacks;this.points=new Map();this.primary=null;this.dragged=false;
  canvas.addEventListener('pointerdown',e=>this.down(e),{capture:true});
  canvas.addEventListener('pointermove',e=>this.move(e),{capture:true});
  canvas.addEventListener('pointerup',e=>this.up(e),{capture:true});
  for(const type of ['pointercancel','lostpointercapture'])canvas.addEventListener(type,e=>{if(this.points.has(e.pointerId)){this.stop(e);this.cancel();}},{capture:true});
 }
 get active(){return this.primary!==null;}
 stop(e){e.stopImmediatePropagation();e.preventDefault();}
 down(e){if(e.button!==0)return;
  if(!this.active){const pick=this.cb.pick(point(e));if(!pick||!this.cb.select(pick))return;this.primary=e.pointerId;this.start=point(e);this.dragged=false;this.cb.begin(point(e),pick);}
  else if(this.points.size>=2){this.stop(e);return;}
  this.points.set(e.pointerId,point(e));this.canvas.setPointerCapture(e.pointerId);this.stop(e);
 }
 move(e){if(!this.points.has(e.pointerId))return;this.stop(e);const old=[...this.points.values()];this.points.set(e.pointerId,point(e));
  if(this.points.size===2){const now=[...this.points.values()],a=distance(...old),b=distance(...now);if(a>8&&b>8)this.cb.zoom(b/a);}
  if(e.pointerId===this.primary&&distance(this.start,point(e))>8)this.dragged=true;
  if(this.dragged)this.cb.drag(this.points.get(this.primary));
 }
 up(e){if(!this.points.has(e.pointerId))return;this.stop(e);
  if(e.pointerId!==this.primary){this.points.delete(e.pointerId);this.release(e.pointerId);return;}
  this.finish(point(e),!this.dragged);
 }
 release(id){if(this.canvas.hasPointerCapture(id))this.canvas.releasePointerCapture(id);}
 finish(p,cancel){const ids=[...this.points.keys()];this.primary=null;this.points.clear();this.cb.end(p,cancel);for(const id of ids)this.release(id);}
 cancel(){if(this.active)this.finish(this.points.get(this.primary),true);}
}
