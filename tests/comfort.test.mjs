import {test} from 'node:test';import assert from 'node:assert/strict';import {TopView,teamPulse} from '../web/src/comfort.mjs';
test('top view fits reserves in portrait and landscape and keeps bounded independent zoom',()=>{
 const top=new TopView();for(const aspect of [.45,2.6]){const half=top.distance(aspect)*Math.tan(21*Math.PI/180);assert.ok(half>5.2&&half*aspect>4.3);}
 const before=top.distance(2);top.zoomBy(1.5);assert.ok(top.distance(2)<before);const saved=top.zoom;top.distance(.45);top.zoomBy(Infinity);assert.equal(top.zoom,saved);top.zoomBy(.00001);assert.ok(top.distance(.45)<=60);top.zoomBy(1e10);assert.ok(top.distance(2)>=4);
});
test('team light pulses slowly without switching off and stays steady in reduced mode',()=>{
 const values=Array.from({length:241},(_,i)=>teamPulse(i/60,false));assert.ok(Math.max(...values)-Math.min(...values)>.5);assert.ok(Math.min(...values)>=.18&&Math.max(...values)<=1);assert.ok(values.slice(1).every((v,i)=>Math.abs(v-values[i])<.06));assert.equal(teamPulse(0,true),teamPulse(13,true));
});
