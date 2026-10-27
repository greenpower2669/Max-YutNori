import {resultFromFaces} from './rules.mjs';
export function summaryFromPhysics({faces,invalid}){const value=resultFromFaces(faces);return {faces:[...faces],invalid:!!invalid,value:invalid?null:value};}
export function readSummary(s){try{if(!s||typeof s.invalid!=='boolean')return null;const result=summaryFromPhysics(s);return s.value===result.value?result:null;}catch{return null;}}
