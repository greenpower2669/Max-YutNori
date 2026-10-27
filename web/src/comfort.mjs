const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
export class TopView {
 constructor(){this.zoom=1;}
 zoomBy(ratio){if(Number.isFinite(ratio)&&ratio>0)this.zoom=clamp(this.zoom/ratio,.35,2);}
 distance(aspect){return clamp(Math.max(5.25,4.5/Math.max(.1,aspect))/Math.tan(21*Math.PI/180)*this.zoom,4,60);}
}
// One rounded pulse per 2.8 seconds. Keep the team identifiable at the trough.
export function teamPulse(time,reduced){return reduced?.65:.2+.8*Math.pow(.5-.5*Math.cos(time*Math.PI*2/2.8),2);}
