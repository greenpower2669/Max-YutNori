// Shared by touch, sensor, saved settings and automatic/AI throws.
export const POWER=Object.freeze({min:.3,max:1.5,default:.9,version:2});
export function clampPower(value){return Number.isFinite(value)?Math.max(POWER.min,Math.min(POWER.max,value)):POWER.default;}
export function migratePower(value,version){
 if(!Number.isFinite(value))return POWER.default;
 return version===POWER.version?clampPower(value):clampPower(.3+(Math.max(.15,Math.min(1,value))-.15)/.85*1.2);
}
