export class ImpactLimiter {
 constructor(){this.last=-Infinity;}
 accept(strength,time){if(!Number.isFinite(strength)||!Number.isFinite(time)||strength<=.035||time-this.last<.045)return 0;this.last=time;return Math.min(1,strength);}
}
