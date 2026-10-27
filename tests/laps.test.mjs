import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createGame,destinations,recordThrow,legalMoves,move,validateSave} from '../web/src/rules.mjs';
const pawn=(pos,laps=1,route='outer')=>({pos,route,laps});
const opts=(p,v)=>destinations(p,v).map(({pos,route,laps})=>({pos,route,laps}));
test('Back-do from reserve crosses backwards and adds a lap on either route',()=>{
 assert.deepEqual(opts(pawn('S'),-1),[pawn('O19',2),pawn('B5',2,'b')]);
 assert.deepEqual(opts(pawn('O20'),-1),[pawn('O19',2),pawn('B5',2,'b')]);
});
test('returning over the line pays the extra lap instead of finishing',()=>{
 assert.deepEqual(opts(pawn('O19',2),1),[pawn('O20',1)]);
 assert.deepEqual(opts(pawn('B5',2,'b'),3),[pawn('O2',1)]);
 assert.deepEqual(opts(pawn('O20',1),2),[pawn('O2',1)]);
 assert.deepEqual(opts(pawn('O19',1),3),[pawn('H',0)]);
 assert.deepEqual(opts(pawn('O1'),-1),[pawn('O20',1)]);
});
test('joined group retains individual laps and only completed members leave',()=>{
 const g=createGame();g.teams[0].pieces[0]=pawn('O19');g.teams[0].pieces[1]=pawn('O19',2);
 recordThrow(g,3);move(g,legalMoves(g).find(m=>m.piece===0));
 assert.deepEqual(g.teams[0].pieces.slice(0,2),[pawn('H',0),pawn('O2',1)]);assert.ok(validateSave(g));
});
test('capture resets extra laps and only the chosen result is consumed',()=>{
 const g=createGame();g.teams[1].pieces[0]=pawn('O3',3);recordThrow(g,4);recordThrow(g,5);recordThrow(g,3);
 move(g,legalMoves(g).find(m=>m.result===2&&m.piece===0));assert.deepEqual(g.pending,[4,5]);
 assert.deepEqual(g.teams[1].pieces[0],pawn('S'));assert.ok(validateSave(g));
});
test('legacy v3 migrates laps without altering source or pending order',()=>{
 const g=createGame();g.version=3;g.phase='move';g.pending=[4,5,2];g.teams[0].pieces[0]=pawn('H',0);
 for(const t of g.teams)for(const p of t.pieces)delete p.laps;
 const migrated=validateSave(g);assert.equal(migrated.version,4);assert.equal(migrated.teams[0].pieces[0].laps,0);
 assert.equal(migrated.teams[0].pieces[1].laps,1);assert.deepEqual(migrated.pending,[4,5,2]);assert.equal(g.version,3);assert.equal(g.teams[0].pieces[1].laps,undefined);
});
test('invalid v4 lap counts cannot corrupt the game',()=>{
 for(const laps of [-1,0,1.5,Infinity]){const g=createGame();g.teams[0].pieces[0]=pawn('O3',laps);assert.equal(validateSave(g),null);}
});
