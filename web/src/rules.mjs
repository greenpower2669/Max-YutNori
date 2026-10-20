// Pure rules: no rendering, audio, clock or randomness except the AI's supplied RNG.
export const RESULTS={'-1':'Back-do · −1',1:'Do · 1',2:'Gae · 2',3:'Geol · 3',4:'Yut · 4',5:'Mo · 5'};
export const OUTER=Array.from({length:20},(_,i)=>`O${i+1}`);
export const NODES=[...OUTER,'A1','A2','C','A4','A5','B1','B2','B4','B5'];
const ROUTES={outer:['S',...OUTER,'H'],a:['O5','A1','A2','C','A4','A5',...OUTER.slice(14),'H'],b:['O10','B1','B2','C','B4','B5','O20','H']};
export function resultFromFaces(faces){if(!Array.isArray(faces)||faces.length!==4||faces.some(x=>typeof x!=='boolean'))throw Error('Faces invalides');const n=faces.filter(Boolean).length;return n===0?5:n===1&&faces[0]?-1:n;}
export function createGame(options={}){return {version:2,teams:[0,1].map(t=>({names:options.names?.[t]?.slice(0,6)||[t?'Ordinateur':'Fab'],member:0,computer:options.computers?.[t]??t===1,level:options.levels?.[t]??2,aggression:options.aggressions?.[t]??50,pieces:Array.from({length:4},()=>({pos:'S',route:'outer'}))})),turn:0,phase:'throw',pending:[],turnNumber:1,winner:null,captureReroll:!!options.captureReroll,last:'À vous de lancer les bâtonnets.'};}
export const playerName=g=>g.teams[g.turn].names[g.teams[g.turn].member];
export const isComputer=g=>g.teams[g.turn].computer;
export function groupLeader(g,index){const pieces=g.teams[g.turn].pieces,p=pieces[index];if(!p)return -1;return p.pos==='S'||p.pos==='H'?index:pieces.findIndex(other=>other.pos===p.pos);}
export function destinations(piece,value){
 const {pos}=piece;if(pos==='H'||pos==='S'&&value<0)return [];
 let routes=[piece.route];
 if(pos==='S'||/^O/.test(pos))routes=['outer'];
 if(value>0&&pos==='O5')routes.push('a');
 if(value>0&&pos==='O10')routes.push('b');
 if(pos==='C'&&value>0)routes=['a','b'];
 if(pos==='O15'&&value<0)routes.push('a');
 if(pos==='O20'&&value<0)routes.push('b');
 const found=[];
 for(const route of routes){const path=ROUTES[route];let i=path.indexOf(pos);if(i<0)continue;
 let to;if(value<0&&pos==='O1')to='O20';else {i+=value;if(i<0)continue;to=path[Math.min(i,path.length-1)];if(value>0&&to==='O20')to='H';}
 const entry={pos:to,route:/^O/.test(to)||to==='H'||to==='S'?'outer':route};
 if(!found.some(d=>d.pos===entry.pos&&d.route===entry.route))found.push(entry);
 }return found;
}
export function recordThrow(g,value){if(g.phase!=='throw'||!Object.hasOwn(RESULTS,value))throw Error('Lancer interdit');g.pending.push(value);g.last=RESULTS[value];if(value!==4&&value!==5)g.phase='move';}
export function legalMoves(g){if(g.phase!=='move')return [];const out=[],seen=new Set();
 g.teams[g.turn].pieces.forEach((p,piece)=>{if(p.pos==='H'||p.pos!=='S'&&seen.has(p.pos))return;seen.add(p.pos);
 g.pending.forEach((value,result)=>destinations(p,value).forEach(d=>out.push({piece,result,to:d.pos,route:d.route})));});return out;
}
function endTurn(g){if(g.pending.length)return;const t=g.teams[g.turn];t.member=(t.member+1)%t.names.length;g.turn=1-g.turn;g.turnNumber++;g.phase='throw';}
export function move(g,choice){const m=legalMoves(g).find(x=>['piece','result','to','route'].every(k=>x[k]===choice[k]));if(!m)throw Error('Déplacement interdit');
 const own=g.teams[g.turn].pieces,from=own[m.piece].pos;const group=own.filter((p,i)=>from==='S'?i===m.piece:p.pos===from);
 let captured=0;if(m.to!=='H'&&m.to!=='S')for(const p of g.teams[1-g.turn].pieces)if(p.pos===m.to){p.pos='S';p.route='outer';captured++;}
 group.forEach(p=>{p.pos=m.to;p.route=m.route;});
 // A merged group inherits the last arriving group's route, independent of pawn IDs.
 if(m.to!=='S'&&m.to!=='H')own.filter(p=>p.pos===m.to).forEach(p=>{p.route=m.route;});
 g.pending.splice(m.result,1);
 const event={captured,count:group.length,to:m.to,team:g.turn};
 g.last=captured?`${captured} pion${captured>1?'s':''} capturé${captured>1?'s':''} !`:m.to==='H'?'Pion arrivé !':'À vous de jouer.';
 if(own.every(p=>p.pos==='H')){g.phase='over';g.winner=g.turn;g.last='Victoire !';}
 else if(captured&&g.captureReroll)g.phase='throw';else endTurn(g);return event;
}
export function pass(g,result){if(g.phase!=='move'||!Number.isInteger(result)||result<0||result>=g.pending.length||legalMoves(g).some(m=>m.result===result))throw Error('Ce résultat peut être joué');g.pending.splice(result,1);g.last='Résultat sans déplacement : passé.';endTurn(g);}
export function progress(pos){if(pos==='S')return 0;if(pos==='H')return 25;if(/^O/.test(pos))return +pos.slice(1);return {A1:7,A2:10,C:13,A4:14,A5:15,B1:11,B2:12,B4:17,B5:19}[pos];}
export function chooseMove(g,random=Math.random){const moves=legalMoves(g),team=g.teams[g.turn];if(!moves.length)return null;if(team.level===1&&random()<.45)return moves[Math.floor(random()*moves.length)];
 const score=m=>{const group=team.pieces.filter((p,i)=>team.pieces[m.piece].pos==='S'?i===m.piece:p.pos===team.pieces[m.piece].pos).length;
 const capture=g.teams[1-g.turn].pieces.filter(p=>p.pos===m.to&&m.to!=='S'&&m.to!=='H').length;
 const link=team.pieces.filter((p,i)=>i!==m.piece&&p.pos===m.to&&m.to!=='S'&&m.to!=='H').length;
 const exposed=team.level<3?0:g.teams[1-g.turn].pieces.filter(p=>[1,2,3].some(v=>destinations(p,v).some(d=>d.pos===m.to))).length*1.5;
 return progress(m.to)*group+capture*(6+team.aggression*.2)+link*4-exposed+(random()*.5);};
 return moves.map(m=>({m,s:score(m)})).sort((a,b)=>b.s-a.s)[0].m;
}
export function validateSave(input){try{const g=structuredClone(input);if(g.version!==2||![0,1].includes(g.turn)||!['throw','move','over'].includes(g.phase)||!Number.isInteger(g.turnNumber)||g.turnNumber<1||typeof g.captureReroll!=='boolean'||!Array.isArray(g.pending)||g.pending.length>100||g.pending.some(v=>!Number.isInteger(v)||!Object.hasOwn(RESULTS,v))||!Array.isArray(g.teams)||g.teams.length!==2)return null;
 for(const t of g.teams){if(!Array.isArray(t.names)||!t.names.length||t.names.length>6||t.names.some(n=>typeof n!=='string'||!n.trim()||n.length>30)||!Number.isInteger(t.member)||t.member<0||t.member>=t.names.length||typeof t.computer!=='boolean'||![1,2,3].includes(t.level)||!Number.isFinite(t.aggression)||t.aggression<0||t.aggression>100||!Array.isArray(t.pieces)||t.pieces.length!==4)return null;
 for(const p of t.pieces)if(!p||!['S','H',...NODES].includes(p.pos)||!Object.hasOwn(ROUTES,p.route)||p.pos!=='H'&&!ROUTES[p.route].includes(p.pos))return null;}
 if(g.phase==='move'&&!g.pending.length)return null;if(g.phase==='over'){if(![0,1].includes(g.winner)||!g.teams[g.winner].pieces.every(p=>p.pos==='H'))return null;}else if(g.winner!==null||g.teams.some(t=>t.pieces.every(p=>p.pos==='H')))return null;
 g.last=typeof g.last==='string'?g.last.slice(0,150):'';return g;
 }catch{return null;}}
