import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createGame,resultFromFaces,destinations,recordThrow,legalMoves,move,pass,chooseMove,validateSave} from '../web/src/rules.mjs';
test('faces, marked Back-do, Yut and Mo',()=>{
 assert.equal(resultFromFaces([false,false,false,false]),5);
 assert.equal(resultFromFaces([true,false,false,false]),-1);
 assert.equal(resultFromFaces([false,true,false,false]),1);
 assert.equal(resultFromFaces([true,true,false,false]),2);
 assert.equal(resultFromFaces([true,true,true,false]),3);
 assert.equal(resultFromFaces([true,true,true,true]),4);
});
test('shortcuts selected only at their starting node; both exits at centre',()=>{
 assert.deepEqual(destinations({pos:'O4',route:'outer'},2).map(x=>x.pos),['O6']);
 assert.deepEqual(destinations({pos:'O5',route:'outer'},3).map(x=>x.pos),['O8','C']);
 assert.deepEqual(destinations({pos:'C',route:'a'},1).map(x=>x.pos),['A4','B4']);
});
test('all bonus throws before moving, stored results selected freely',()=>{
 const g=createGame();recordThrow(g,4);recordThrow(g,5);assert.equal(legalMoves(g).length,0);
 recordThrow(g,2);assert.deepEqual(g.pending,[4,5,2]);assert.equal(g.phase,'move');
 move(g,legalMoves(g).find(m=>m.result===2));assert.deepEqual(g.pending,[4,5]);assert.equal(g.turn,0);
});
test('linked pieces move and capture a complete enemy group',()=>{
 const g=createGame();g.teams[0].pieces[0].pos='O2';g.teams[0].pieces[1].pos='O2';
 g.teams[1].pieces[0].pos='O4';g.teams[1].pieces[1].pos='O4';recordThrow(g,2);
 const event=move(g,legalMoves(g).find(m=>m.piece===0));assert.equal(event.captured,2);
 assert.equal(g.teams[0].pieces[1].pos,'O4');assert.equal(g.teams[1].pieces[0].pos,'S');assert.equal(g.turn,1);
});
test('Back-do cannot enter from reserve, passes if no moves',()=>{
 const g=createGame();recordThrow(g,-1);assert.equal(legalMoves(g).length,0);pass(g,0);assert.equal(g.turn,1);
});
test('finishing whole group wins and forged moves are rejected',()=>{
 const g=createGame();for(const p of g.teams[0].pieces)p.pos='O19';recordThrow(g,1);
 assert.throws(()=>move(g,{piece:0,result:0,to:'H',route:'fake'}));move(g,legalMoves(g)[0]);assert.equal(g.winner,0);
 assert.ok(validateSave(g));assert.equal(validateSave({...g,turn:7}),null);
});
test('50 complete computer games do not stall',()=>{
 let seed=884;const random=()=>((seed=(seed*1664525+1013904223)>>>0)/2**32);
 for(let n=0;n<50;n++) {const g=createGame();let actions=0;
 while(g.phase!=='over'&&actions++<3000){if(g.phase==='throw')recordThrow(g,resultFromFaces(Array.from({length:4},()=>random()>.5)));else {const m=chooseMove(g,random);if(m)move(g,m);else pass(g,0);}}
 assert.equal(g.phase,'over');assert.ok(validateSave(g));}
});

test('joined groups follow the arriving route for Back-do regardless of pawn IDs',()=>{
 for(const arriving of [0,1]){const g=createGame();g.teams[0].pieces[arriving]={pos:'B2',route:'b'};g.teams[0].pieces[1-arriving]={pos:'C',route:'a'};
 recordThrow(g,1);move(g,legalMoves(g).find(m=>m.piece===arriving&&m.to==='C'));
 recordThrow(g,-1);pass(g,0);recordThrow(g,-1);
 assert.equal(legalMoves(g).find(m=>m.piece===0).to,'B2');
 assert.ok(g.teams[0].pieces.filter(p=>p.pos==='C').every(p=>p.route==='b'));}
});
test('picking any pawn in a stack resolves to that stack, not another pawn',async()=>{
 const {groupLeader}=await import('../web/src/rules.mjs');assert.equal(typeof groupLeader,'function');
 const g=createGame();g.teams[0].pieces[0].pos='O2';g.teams[0].pieces[2].pos='O4';g.teams[0].pieces[3].pos='O4';
 assert.equal(groupLeader(g,3),2);assert.equal(groupLeader(g,1),1);
});
