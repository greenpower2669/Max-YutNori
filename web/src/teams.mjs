export const TEAM_STYLES=[
 {name:'Chêne',symbol:'◆',color:0xdbb777,css:'#e7c88e',glow:0xe7c88e,finish:'wood',ink:'#251607'},
 {name:'Cèdre',symbol:'●',color:0xa83218,css:'#ff957a',glow:0xff957a,finish:'wood',ink:'#ffffff'},
 {name:'Noir',symbol:'▲',color:0x070a0e,css:'#e0e5ee',glow:0xe0e5ee,finish:'lacquer',ink:'#ffffff'},
 {name:'Sapin',symbol:'✦',color:0x064528,css:'#7adea7',glow:0x7adea7,finish:'lacquer',ink:'#ffffff'}
];
export function defaultPlayer(team,index=0){return {name:team===0&&index===0?'Joueur 1':`${TEAM_STYLES[team].name} ${index+1}`,computer:team!==0,level:2,aggression:50};}
export function makeTeams(options={}){
 const count=options.teams?.length??options.teamCount??2;
 if(!Number.isInteger(count)||count<2||count>4)throw Error('Choisissez de 2 à 4 équipes.');
 return Array.from({length:count},(_,t)=>{
  const input=options.teams?.[t]?.players??options.names?.[t]?.map(name=>({name,computer:options.computers?.[t]??t!==0,level:options.levels?.[t]??2,aggression:options.aggressions?.[t]??50}))??[{...defaultPlayer(t),computer:options.computers?.[t]??t!==0}];
  if(!input.length||input.length>6)throw Error('Une équipe accueille de 1 à 6 participants.');
  const players=input.map((p,i)=>({name:String(p.name||defaultPlayer(t,i).name).trim().slice(0,30)||defaultPlayer(t,i).name,computer:!!p.computer,level:[1,2,3].includes(p.level)?p.level:2,aggression:Number.isFinite(p.aggression)?Math.max(0,Math.min(100,p.aggression)):50}));
  return {players,member:0,pieces:Array.from({length:4},()=>({pos:'S',route:'outer'}))};
 });
}
export const activePlayer=g=>g.teams[g.turn].players[g.teams[g.turn].member];
