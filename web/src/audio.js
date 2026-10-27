import {ImpactLimiter} from './impact.mjs';
export class GameAudio {
 constructor(log){this.log=log;this.music=new Audio('./audio/ariranlike25102026.mp3');this.music.loop=true;this.music.preload='metadata';this.music.volume=.22;this.enabled=true;this.fx=true;this.fxVolume=.6;this.paused=false;this.unlocked=false;this.context=null;this.voices=new Set();this.limiter=new ImpactLimiter();this.effectsPlayed=0;this.music.addEventListener('error',()=>log('Musique indisponible : '+this.music.error?.code));}
 async unlock(){this.unlocked=true;try{this.context??=new AudioContext();if(!this.master){this.master=this.context.createGain();this.master.gain.value=this.fx?this.fxVolume:0;this.master.connect(this.context.destination);}if(!this.paused)await this.context.resume();}catch{}this.resume();}
 resume(){if(this.enabled&&this.unlocked&&!this.paused&&!document.hidden)this.music.play().catch(()=>{});}
 silence(){for(const source of this.voices){try{source.stop();}catch{}}this.voices.clear();}
 setPaused(value){this.paused=value;if(value){this.music.pause();this.silence();this.context?.suspend().catch(()=>{});}else{if(this.unlocked)this.context?.resume().catch(()=>{});this.resume();}}
 configure(s){this.enabled=s.music;this.fx=s.fx;this.fxVolume=Number.isFinite(s.fxVolume)?Math.max(0,Math.min(1,s.fxVolume)):.6;this.music.volume=s.volume;if(this.master)this.master.gain.value=this.fx?this.fxVolume:0;if(!this.fx)this.silence();if(!this.enabled)this.music.pause();else this.resume();}
 allowed(){return this.fx&&this.fxVolume>0&&!this.paused&&this.context?.state==='running'&&this.master&&this.voices.size<8;}
 track(source,nodes,end){this.voices.add(source);source.onended=()=>{this.voices.delete(source);source.disconnect();nodes.forEach(n=>n.disconnect());};source.stop(end);}
 impact(strength=.5){if(!this.allowed()||this.voices.size>6)return;const c=this.context,now=c.currentTime,s=this.limiter.accept(strength,now);if(!s)return;
  const source=c.createBufferSource(),filter=c.createBiquadFilter(),gain=c.createGain();const buffer=c.createBuffer(1,Math.ceil(c.sampleRate*.13),c.sampleRate),data=buffer.getChannelData(0);
  for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*Math.exp(-i/(c.sampleRate*.025));source.buffer=buffer;filter.type='bandpass';filter.frequency.value=650+s*700;filter.Q.value=1.8;gain.gain.value=.5*s;source.connect(filter).connect(gain).connect(this.master);source.start(now);this.track(source,[filter,gain],now+.14);this.effectsPlayed++;
  const tone=c.createOscillator(),tg=c.createGain();tone.frequency.setValueAtTime(210+s*140,now);tone.frequency.exponentialRampToValueAtTime(105,now+.09);tg.gain.setValueAtTime(.12*s,now);tg.gain.exponentialRampToValueAtTime(.0001,now+.1);tone.connect(tg).connect(this.master);tone.start(now);this.track(tone,[tg],now+.12);
 }
 effect(kind='move'){if(!this.allowed())return;if(kind==='move'){this.impact(.65);return;}const notes=kind==='win'?[523,659,784,1046]:[330,440,660];notes.forEach((hz,i)=>{if(this.voices.size>=8)return;const start=this.context.currentTime+i*.1,o=this.context.createOscillator(),g=this.context.createGain();o.type='sine';o.frequency.value=hz;g.gain.setValueAtTime(.0001,start);g.gain.exponentialRampToValueAtTime(.09,start+.01);g.gain.exponentialRampToValueAtTime(.0001,start+.22);o.connect(g).connect(this.master);o.start(start);this.track(o,[g],start+.25);this.effectsPlayed++;});}
}
