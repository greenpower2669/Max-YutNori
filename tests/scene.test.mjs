import {test} from 'node:test';import assert from 'node:assert/strict';
import {createGame,recordThrow,legalMoves} from '../web/src/rules.mjs';
test('selection tracks reserve, stack and legal destination without changing state',async()=>{
 const {buildSelection,pawnPosition}=await import('../web/src/board-layout.mjs');const g=createGame({teamCount:4});recordThrow(g,1);const before=structuredClone(g),moves=legalMoves(g).filter(m=>m.piece===0);
 const selection=buildSelection(g,moves,0);assert.deepEqual(selection.origin,pawnPosition(g,0,0));assert.equal(selection.destinations.length,1);assert.deepEqual(g,before);
 g.teams[0].pieces[0].pos='O5';g.teams[0].pieces[2].pos='O5';const both=legalMoves(g).filter(m=>m.piece===0);assert.equal(buildSelection(g,both,2).destinations.length,2);assert.equal(buildSelection(g,[],0),null);
});
test('four reserves and arrivals have distinct separated positions',async()=>{
 const {pawnPosition}=await import('../web/src/board-layout.mjs');const g=createGame({teamCount:4});const positions=[];
 for(let t=0;t<4;t++)for(let i=0;i<4;i++)positions.push(pawnPosition(g,t,i));assert.equal(new Set(positions.map(p=>p.join(','))).size,16);
 for(let t=0;t<4;t++){const start=pawnPosition(g,t,0);g.teams[t].pieces[0].pos='H';assert.notDeepEqual(pawnPosition(g,t,0),start);}
});
test('halo turns, remains fixed with reduced motion and clears without stale children',async()=>{
 const {SelectionHalos}=await import('../web/src/halos.js');const h=new SelectionHalos();h.sync({origin:[0,.1,0],destinations:[[1,.1,1],[2,.1,2]]},0x55d8ca);assert.equal(h.group.children.length,3);
 const a=h.group.children[0].rotation.y;h.frame(1,false);assert.notEqual(h.group.children[0].rotation.y,a);const b=h.group.children[0].rotation.y;h.frame(1,true);assert.equal(h.group.children[0].rotation.y,b);h.sync(null);assert.equal(h.group.children.length,0);
});
