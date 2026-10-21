import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createGame,recordThrow,legalMoves,move,pass,chooseMove,validateSave,isComputer,playerName,resultFromFaces} from '../web/src/rules.mjs';
const human=name=>({name,computer:false,level:2,aggression:50});
test('2, 3 and 4 teams rotate and keep four pieces each',()=>{
 for(const teamCount of [2,3,4]){const g=createGame({teamCount});assert.equal(g.teams.length,teamCount);
 for(let i=0;i<teamCount;i++){assert.equal(g.turn,i);assert.equal(g.teams[i].pieces.length,4);recordThrow(g,-1);pass(g,0);}assert.equal(g.turn,0);}
});
test('individual humans and AI alternate only after all results are spent',()=>{
 const g=createGame({teams:[{players:[human('Fab'),{...human('Robot'),computer:true}]},{players:[human('Yann')]}]});
 assert.equal(playerName(g),'Fab');assert.equal(isComputer(g),false);recordThrow(g,4);recordThrow(g,2);
 move(g,legalMoves(g)[0]);assert.equal(playerName(g),'Fab');move(g,legalMoves(g)[0]);recordThrow(g,-1);pass(g,0);
 assert.equal(playerName(g),'Robot');assert.equal(isComputer(g),true);
});
test('fourth team can be captured and AI considers all opponents',()=>{
 const g=createGame({teamCount:4});g.teams[0].pieces[0].pos='O2';g.teams[3].pieces[0].pos='O4';g.teams[3].pieces[1].pos='O4';recordThrow(g,2);
 const choice=chooseMove(g,()=>0);assert.equal(choice.to,'O4');assert.equal(move(g,choice).captured,2);assert.equal(g.teams[3].pieces[1].pos,'S');assert.ok(validateSave(g));
});
test('v2 multi-name save migrates without losing active member or pending results',()=>{
 const old={...createGame(),version:2,pending:[4,2],phase:'move'};
 old.teams=old.teams.map((t,i)=>({pieces:t.pieces,names:['One','Two'],member:1,computer:i===1,level:3,aggression:65}));old.teams[0].pieces[0]={pos:'C',route:'b'};
 const g=validateSave(old);assert.ok(g);assert.equal(g.version,3);assert.deepEqual(g.pending,[4,2]);assert.equal(g.teams[0].member,1);assert.deepEqual(g.teams[0].pieces,old.teams[0].pieces);assert.equal(playerName(g),'Two');assert.equal(g.teams[1].players[1].computer,true);assert.equal(old.version,2);
});
test('3 and 4 team AI games complete and save round-trips',()=>{
 let seed=321;const random=()=>((seed=(seed*1664525+1013904223)>>>0)/2**32);
 for(const teamCount of [3,4])for(let n=0;n<12;n++){const g=createGame({teamCount});let actions=0;
 while(g.phase!=='over'&&actions++<5000){if(g.phase==='throw')recordThrow(g,resultFromFaces(Array.from({length:4},()=>random()>.5)));else{const m=chooseMove(g,random);if(m)move(g,m);else pass(g,0);}}
 assert.equal(g.phase,'over');assert.deepEqual(validateSave(g),g);}
});
test('malformed players and incoherent save states are rejected',()=>{
 const g=createGame({teamCount:4});g.teams[2].players=[];assert.equal(validateSave(g),null);
 const h=createGame({teamCount:4});h.teams[0].pieces[0].pos=h.teams[3].pieces[0].pos='O3';assert.equal(validateSave(h),null);
});
