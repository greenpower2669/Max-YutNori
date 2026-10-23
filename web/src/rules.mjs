import {makeTeams,activePlayer} from './teams.mjs';
export {activePlayer} from './teams.mjs';
// Pure rules: no rendering, audio, clock or randomness except the AI's supplied RNG.
export const RESULTS={'-1':'Back-do · −1',1:'Do · 1',2:'Gae · 2',3:'Geol · 3',4:'Yut · 4',5:'Mo · 5'};
export const OUTER=Array.from({length:20},(_,i)=>`O${i+1}`);
export const NODES=[...OUTER,'A1','A2','C','A4','A5','B1','B2','B4','B5'];
const ROUTES={outer:['S',...OUTER,'H'],a:['O5','A1','A2','C','A4','A5',...OUTER.slice(14),'H'],b:['O10','B1','B2','C','B4','B5','O20','H']};
export function resultFromFaces(faces){if(!Array.isArray(faces)||faces.length!==4||faces.some(x=>typeof x!=='boolean'))throw Error('Faces invalides');const n=faces.filter(Boolean).length;return n===0?5:n===1&&faces[0]?-1:n;}
export function createGame(options={}){return {version:4,teams:makeTeams(options),turn:0,phase:'throw',pending:[],turnNumber:1,winner:null,captureReroll:!!options.captureReroll,last:'À vous de lancer les bâtonnets.'};}
export const playerName=g=>activePlayer(g).name;
export const isComputer=g=>activePlayer(g).computer;
export function groupLeader(g,index){const pieces=g.teams[g.turn].pieces,p=pieces[index];if(!p)return -1;return p.pos==='S'||p.pos==='H'?index:pieces.findIndex(other=>other.pos===p.pos);}
// A backward departure crosses the finish line before the first lap begins.
function walk(piece,value,via){
 let pos=piece.pos,laps=piece.laps??1,route=via;
 if(pos==='S'&&value<0)pos='O20';
 for(let step=0;step<Math.abs(value);step++){
  const before=pos,path=ROUTES[route],i=path.indexOf(pos);
  if(value>0){
   if(pos==='O20'){pos='O1';route='outer';}
   else pos=path[i+1];
   if(pos==='O20'&&--laps===0)return {pos:'H',route:'outer',laps:0,via};
  }else{
   if(pos==='O20')laps++;
   if(pos==='O1'){pos='O20';route='outer';}
   else if(i===0){pos=`O${Number(before.slice(1))-1}`;route='outer';}
   else pos=path[i-1];
  }
 }
 return {pos,route:/^O/.test(pos)?'outer':route,laps,via};
}
export function destinations(piece,value){
 const {pos}=piece;if(pos==='H'||!Object.hasOwn(RESULTS,value))return [];
 let routes=[piece.route];
 if(pos==='S'||/^O/.test(pos))routes=['outer'];
 if(value>0&&pos==='O5')routes.push('a');
 if(value>0&&pos==='O10')routes.push('b');
 if(pos==='C'&&value>0)routes=['a','b'];
 if(pos==='O15'&&value<0)routes.push('a');
 if((pos==='O20'||pos==='S')&&value<0)routes.push('b');
 const found=[];
 for(const route of routes){const d=walk(piece,value,route);
  if(!found.some(x=>x.pos===d.pos&&x.route===d.route&&x.laps===d.laps))found.push(d);
 }return found;
}
const groupFor=(pieces,index)=>pieces.filter((p,i)=>pieces[index].pos==='S'?i===index:p.pos===pieces[index].pos);
export function recordThrow(g,value){if(g.phase!=='throw'||!Object.hasOwn(RESULTS,value))throw Error('Lancer interdit');g.pending.push(value);g.last=RESULTS[value];if(value!==4&&value!==5)g.phase='move';}
export function legalMoves(g){if(g.phase!=='move')return [];const out=[],seen=new Set(),pieces=g.teams[g.turn].pieces;
 pieces.forEach((p,piece)=>{if(p.pos==='H'||p.pos!=='S'&&seen.has(p.pos))return;seen.add(p.pos);
 const group=groupFor(pieces,piece),representative={...p,laps:Math.max(...group.map(p=>p.laps??1))};
 g.pending.forEach((value,result)=>destinations(representative,value).forEach(d=>out.push({piece,result,to:d.pos,route:d.route,via:d.via,laps:d.laps,finished:group.filter(p=>walk(p,value,d.via).pos==='H').length})));});return out;
}
function endTurn(g){if(g.pending.length)return;const t=g.teams[g.turn];t.member=(t.member+1)%t.players.length;g.turn=(g.turn+1)%g.teams.length;g.turnNumber++;g.phase='throw';}
export function move(g,choice){const m=legalMoves(g).find(x=>['piece','result','to','route'].every(k=>x[k]===choice[k]));if(!m)throw Error('Déplacement interdit');
 const own=g.teams[g.turn].pieces,from=own[m.piece].pos;const group=groupFor(own,m.piece);
 let captured=0;if(m.to!=='H'&&m.to!=='S')for(const t of g.teams.filter((_,i)=>i!==g.turn))for(const p of t.pieces)if(p.pos===m.to){p.pos='S';p.route='outer';p.laps=1;captured++;}
 group.forEach(p=>{const d=walk(p,g.pending[m.result],m.via);p.pos=d.pos;p.route=d.route;p.laps=d.laps;});
 // A merged group inherits the last arriving group's route, independent of pawn IDs.
 if(m.to!=='S'&&m.to!=='H')own.filter(p=>p.pos===m.to).forEach(p=>{p.route=m.route;});
 g.pending.splice(m.result,1);
 const event={captured,count:group.length,to:m.to,team:g.turn};
 g.last=captured?`${captured} pion${captured>1?'s':''} capturé${captured>1?'s':''} !`:m.to==='H'?'Pion arrivé !':'À vous de jouer.';
 if(own.every(p=>p.pos==='H')){g.phase='over';g.winner=g.turn;g.last='Victoire !';}
 else if(captured&&g.captureReroll)g.phase='throw';else endTurn(g);return event;
}
export function progress(pos){if(pos==='S')return 0;if(pos==='H')return 25;if(/^O/.test(pos))return +pos.slice(1);return {A1:7,A2:10,C:13,A4:14,A5:15,B1:11,B2:12,B4:17,B5:19}[pos];}
export function chooseMove(g,random=Math.random){const moves=legalMoves(g),team=g.teams[g.turn],player=activePlayer(g),enemies=g.teams.filter((_,i)=>i!==g.turn).flatMap(t=>t.pieces);if(!moves.length)return null;if(player.level===1&&random()<.45)return moves[Math.floor(random()*moves.length)];
 const score=m=>{const group=team.pieces.filter((p,i)=>team.pieces[m.piece].pos==='S'?i===m.piece:p.pos===team.pieces[m.piece].pos).length;
 const capture=enemies.filter(p=>p.pos===m.to&&m.to!=='S'&&m.to!=='H').length;
 const link=team.pieces.filter((p,i)=>i!==m.piece&&p.pos===m.to&&m.to!=='S'&&m.to!=='H').length;
 const exposed=player.level<3?0:enemies.filter(p=>[1,2,3].some(v=>destinations(p,v).some(d=>d.pos===m.to))).length*1.5;
 return (progress(m.to)-Math.max(0,m.laps-1)*20)*group+m.finished*25+capture*(6+player.aggression*.2)+link*4-exposed+(random()*.5);};
 return moves.map(m=>({m,s:score(m)})).sort((a,b)=>b.s-a.s)[0].m;
}
export function validateSave(input){try{
 const g=structuredClone(input);
 if(g.version===2){
  if(!Array.isArray(g.teams)||g.teams.length!==2)return null;
  for(const t of g.teams){if(!Array.isArray(t.names)||!t.names.length||t.names.length>6)return null;
   t.players=t.names.map(name=>({name,computer:t.computer,level:t.level,aggression:t.aggression}));
   for(const key of ['names','computer','level','aggression'])delete t[key];
  }g.version=3;
 }
 if(g.version===3){for(const t of g.teams)for(const p of t.pieces)p.laps=p.pos==='H'?0:1;g.version=4;}
 if(g.version!==4||!Array.isArray(g.teams)||g.teams.length<2||g.teams.length>4||!Number.isInteger(g.turn)||g.turn<0||g.turn>=g.teams.length||!['throw','move','over'].includes(g.phase)||!Number.isInteger(g.turnNumber)||g.turnNumber<1||typeof g.captureReroll!=='boolean'||!Array.isArray(g.pending)||g.pending.length>100||g.pending.some(v=>!Number.isInteger(v)||!Object.hasOwn(RESULTS,v)))return null;
 const occupied=new Map();
 for(const [index,t] of g.teams.entries()){
  if(!Array.isArray(t.players)||t.players.length<1||t.players.length>6||!Number.isInteger(t.member)||t.member<0||t.member>=t.players.length||!Array.isArray(t.pieces)||t.pieces.length!==4)return null;
  for(const p of t.players)if(!p||typeof p.name!=='string'||!p.name.trim()||p.name.length>30||typeof p.computer!=='boolean'||![1,2,3].includes(p.level)||!Number.isFinite(p.aggression)||p.aggression<0||p.aggression>100)return null;
  for(const p of t.pieces){if(!p||!Number.isSafeInteger(p.laps)||p.laps<0||(p.pos==='H'?p.laps!==0:p.laps<1)||(p.pos==='S'&&p.laps!==1)||!['S','H',...NODES].includes(p.pos)||!Object.hasOwn(ROUTES,p.route)||p.pos!=='H'&&!ROUTES[p.route].includes(p.pos))return null;
   if(p.pos!=='S'&&p.pos!=='H'){if(occupied.has(p.pos)&&occupied.get(p.pos)!==index)return null;occupied.set(p.pos,index);}
  }
 }
 if(g.phase==='move'&&!g.pending.length)return null;
 if(g.phase==='over'){if(g.winner!==g.turn||!g.teams[g.winner]?.pieces.every(p=>p.pos==='H'))return null;}
 else if(g.winner!==null||g.teams.some(t=>t.pieces.every(p=>p.pos==='H')))return null;
 g.last=typeof g.last==='string'?g.last.slice(0,150):'';return g;
 }catch{return null;}}
