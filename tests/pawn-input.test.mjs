import {test} from 'node:test';import assert from 'node:assert/strict';
import {PawnInput} from '../web/src/pawn-input.js';
function harness(){const canvas=new EventTarget();canvas.setPointerCapture=()=>{};canvas.hasPointerCapture=()=>false;const calls=[];
 const input=new PawnInput(canvas,{pick:()=>({team:0,piece:0}),select:()=>true,begin:p=>calls.push(['begin',p]),drag:p=>calls.push(['drag',p]),zoom:r=>calls.push(['zoom',r]),end:(p,cancel)=>calls.push(['end',cancel])});
 const send=(type,id,x,y)=>{const e=new Event(type,{cancelable:true});Object.assign(e,{pointerId:id,clientX:x,clientY:y,button:0});canvas.dispatchEvent(e);};return {input,calls,send};}
test('secondary pinch release keeps the primary pawn held; primary release drops once',()=>{
 const {input,calls,send}=harness();send('pointerdown',1,100,100);send('pointermove',1,115,100);send('pointerdown',2,200,100);send('pointermove',2,230,100);send('pointerup',2,230,100);
 assert.equal(input.active,true);assert.equal(calls.filter(c=>c[0]==='end').length,0);assert.ok(calls.find(c=>c[0]==='zoom')[1]>1);
 send('pointerup',1,115,100);assert.equal(input.active,false);assert.deepEqual(calls.filter(c=>c[0]==='end'),[['end',false]]);
});
test('tap selects but cancellation never commits a destination',()=>{
 const {input,calls,send}=harness();send('pointerdown',1,100,100);send('pointerup',1,100,100);assert.deepEqual(calls.filter(c=>c[0]==='end'),[['end',true]]);
 send('pointerdown',1,100,100);send('pointermove',1,140,100);input.cancel();send('pointerup',1,140,100);assert.deepEqual(calls.filter(c=>c[0]==='end'),[['end',true],['end',true]]);
});

test('empty top-view pinch neither selects nor drops; a single tap alone picks a destination',()=>{
 const canvas=new EventTarget();canvas.setPointerCapture=()=>{};canvas.hasPointerCapture=()=>false;const calls=[];
 const input=new PawnInput(canvas,{pick:()=>null,allowView:()=>true,select:()=>{throw Error('no pawn');},zoom:r=>calls.push(['zoom',r]),viewTap:p=>calls.push(['tap',p])});
 const send=(type,id,x,y)=>{const e=new Event(type,{cancelable:true});Object.assign(e,{pointerId:id,clientX:x,clientY:y,button:0});canvas.dispatchEvent(e);};
 send('pointerdown',1,100,100);send('pointerdown',2,200,100);send('pointermove',2,240,100);send('pointerup',2,240,100);assert.equal(input.active,true);send('pointerup',1,100,100);assert.ok(calls.some(c=>c[0]==='zoom'));assert.equal(calls.filter(c=>c[0]==='tap').length,0);
 send('pointerdown',3,100,100);send('pointerup',3,100,100);assert.equal(calls.filter(c=>c[0]==='tap').length,1);send('pointerdown',4,100,100);input.cancel();assert.equal(calls.filter(c=>c[0]==='tap').length,1);
});
test('lost capture distinguishes interruption from a normal selected tap',()=>{
 const {input,send}=harness();const endings=[];input.cb.end=(p,cancel,interrupted)=>endings.push({cancel,interrupted});send('pointerdown',1,100,100);send('pointerup',1,100,100);send('pointerdown',2,100,100);send('pointercancel',2,100,100);assert.deepEqual(endings,[{cancel:true,interrupted:false},{cancel:true,interrupted:true}]);
});
