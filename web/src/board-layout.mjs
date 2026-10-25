import {groupLeader} from './rules.mjs';
export const BX=-5,WX=5,POS={};
export const PAWN_TABLE_Y=-.31,PAWN_BOARD_Y=.126,PAWN_STACK=.21,PAWN_CARRY_Y=.48;
for(let i=1;i<=20;i++){const a=i/20*Math.PI*2;POS[`O${i}`]=[Math.sin(a)*2.8,Math.cos(a)*2.8];}
for(const [prefix,from,to]of [['A','O5','O15'],['B','O10','O20']])for(let i=1;i<=5;i++){const t=i/6;POS[i===3?'C':prefix+i]=[POS[from][0]*(1-t)+POS[to][0]*t,POS[from][1]*(1-t)+POS[to][1]*t];}
POS.H=POS.O20;
export function reservePosition(team,index,finished=false){return [BX+(team%2?1.9:-1.9)+(index-1.5)*.78,PAWN_TABLE_Y,(team<2?1:-1)*(finished?4.8:3.95)];}
export function pawnPosition(state,team,index){const p=state.teams[team].pieces[index];if(p.pos==='S'||p.pos==='H')return reservePosition(team,index,p.pos==='H');const [x,z]=POS[p.pos];return [BX+x,PAWN_BOARD_Y+state.teams[team].pieces.slice(0,index).filter(v=>v.pos===p.pos).length*PAWN_STACK,z];}
export function buildSelection(state,moves,selected){
 if(selected<0||!state.teams[state.turn]?.pieces[selected])return null;const leader=groupLeader(state,selected),legal=moves.filter(m=>m.piece===leader);if(!legal.length)return null;
 const destinations=[...new Map(legal.map(m=>[m.to,m])).values()].map(m=>m.to==='S'?reservePosition(state.turn,leader):[BX+POS[m.to][0],PAWN_BOARD_Y,POS[m.to][1]]);
 return {origin:pawnPosition(state,state.turn,leader),destinations,nodes:[...new Set(legal.map(m=>m.to))]};
}
