const vector=value=>value&&['x','y','z'].every(key=>Number.isFinite(value[key]))?[value.x,value.y,value.z]:null;
/** Adapt browser sensors to the existing Android callbacks, in m/s² and screen axes. */
export class BrowserMotion {
 constructor(win,onState=()=>{}){
  this.win=win;this.onState=onState;this.state='idle';this.received=0;this.enabled=false;this.hasData=false;this.listening=false;this.lastReading=null;this.reset();
 }
 reset(){this.gravity=null;this.previous=null;this.started=null;this.delivered=-Infinity;this.angle=null;}
 available(){return this.hasData;}
 status(){return {state:this.state,received:this.received,enabled:this.enabled,lastReading:this.lastReading,source:this.source||null};}
 stateChanged(state){this.state=state;this.onState(this.status());}
 supported(){
  if(!this.win.isSecureContext){this.stateChanged('insecure');return false;}
  if(!this.win.DeviceMotionEvent){this.stateChanged('unsupported');return false;}
  const policy=this.win.document.permissionsPolicy||this.win.document.featurePolicy;
  if(policy?.allowsFeature&&['accelerometer','gyroscope'].some(feature=>!policy.allowsFeature(feature))){this.stateChanged('blocked');return false;}
  return true;
 }
 start(){
  if(!this.supported())return;
  if(typeof this.win.DeviceMotionEvent.requestPermission==='function'){this.stateChanged('permission');return;}
  this.listen();
 }
 activateOnInteraction(wanted){if(wanted&&this.state==='permission')return this.request();}
 async request(){
  if(this.requesting||!this.supported())return;
  this.requesting=true;
  try{
   // Called directly from a button click, before any other await (Safari user activation).
   if(typeof this.win.DeviceMotionEvent.requestPermission==='function'&&await this.win.DeviceMotionEvent.requestPermission()!=='granted'){
    this.hasData=false;this.win.onNativeMotionStatus?.(false);this.stateChanged('denied');return;
   }
   this.listen();
  }catch{this.hasData=false;this.win.onNativeMotionStatus?.(false);this.stateChanged('denied');}
  finally{this.requesting=false;}
 }
 listen(){if(!this.listening){this.win.addEventListener('devicemotion',event=>this.sample(event));this.listening=true;}this.reset();this.stateChanged(this.hasData?'ready':'waiting');}
 setEnabled(enabled){enabled=!!enabled;if(this.enabled!==enabled){this.enabled=enabled;this.reset();}}
 sample(event){
  if(this.win.document.hidden){this.reset();return;}
  const linear=vector(event.acceleration),raw=vector(event.accelerationIncludingGravity);
  if(!linear&&!raw)return;
  this.received++;this.lastReading=this.win.performance.now();this.source=linear?'linear':'gravity-filter';
  if(!this.hasData){this.hasData=true;this.win.onNativeMotionStatus?.(true);this.stateChanged('ready');}
  if(!this.enabled)return;
  const time=event.timeStamp,angle=((this.win.screen?.orientation?.angle??this.win.orientation??0)%360+360)%360;
  if(!Number.isFinite(time))return;
  if(this.angle!==angle||this.previous!==null&&(time<=this.previous||time-this.previous>500)){this.reset();this.angle=angle;}
  this.angle=angle;
  const dt=this.previous===null ? .02 : Math.min(.2,(time-this.previous)/1000);
  this.previous=time;this.started??=time;
  if(raw){
   this.gravity??=[...raw];const alpha=Math.exp(-dt/.35);
   this.gravity=this.gravity.map((v,i)=>alpha*v+(1-alpha)*raw[i]);
  }
  if(time-this.started<400||time-this.delivered<30)return;
  this.delivered=time;
  const deliver=(values,callback)=>{
   let [x,y,z]=values;
   if(angle===90)[x,y]=[-y,x];else if(angle===180)[x,y]=[-x,-y];else if(angle===270)[x,y]=[y,-x];
   callback?.(x,y,z,time);
  };
  if(this.gravity)deliver(this.gravity,this.win.onNativeTilt);
  // Never feed gravity directly to MotionThrow: it must be able to arm at rest.
  const acceleration=linear||raw.map((v,i)=>v-this.gravity[i]);
  deliver(acceleration,this.win.onNativeMotion);
 }
}
