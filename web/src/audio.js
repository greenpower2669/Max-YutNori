export class GameAudio {
 constructor(log){this.log=log;this.music=new Audio('./audio/arirang.m4a');this.music.loop=true;this.music.preload='metadata';this.music.volume=.22;this.enabled=true;this.fx=true;this.paused=false;this.unlocked=false;this.context=null;this.music.addEventListener('error',()=>log('Musique indisponible : '+this.music.error?.code));}
 async unlock(){this.unlocked=true;try{this.context??=new AudioContext();await this.context.resume();}catch{}this.resume();}
 resume(){if(this.enabled&&this.unlocked&&!this.paused&&!document.hidden)this.music.play().catch(()=>{});}
 setPaused(value){this.paused=value;if(value){this.music.pause();this.context?.suspend();}else{if(this.unlocked)this.context?.resume();this.resume();}}
 configure(s){this.enabled=s.music;this.fx=s.fx;this.music.volume=s.volume;if(!this.enabled)this.music.pause();else this.resume();}
 effect(kind='move'){if(!this.fx||this.paused||!this.context)return;const notes=kind==='win'?[523,659,784,1046]:kind==='capture'?[330,440,660]:[440];notes.forEach((hz,i)=>{const start=this.context.currentTime+i*.1,o=this.context.createOscillator(),g=this.context.createGain();o.type='sine';o.frequency.value=hz;g.gain.setValueAtTime(.0001,start);g.gain.exponentialRampToValueAtTime(.09,start+.01);g.gain.exponentialRampToValueAtTime(.0001,start+.22);o.connect(g).connect(this.context.destination);o.start(start);o.stop(start+.25);});}
}
