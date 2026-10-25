import {test} from 'node:test';import assert from 'node:assert/strict';
import {engravingMaps} from '../web/src/engraving.mjs';
function pixels(w,h,line=false){const p=new Uint8ClampedArray(w*h*4);for(let y=0;y<h;y++)for(let x=0;x<w;x++){const i=(y*w+x)*4,v=line&&x>=14&&x<=16?30:170;p.set([v,v,v,255],i);}return p;}
test('engraved dark strokes are recessed and rougher, with opposite normals on their two edges',()=>{const m=engravingMaps(pixels(32,24,true),32,24),at=x=>(12*32+x)*4;assert.ok(m.height[at(15)]<m.height[at(4)]-40);assert.ok(m.roughness[at(15)]>m.roughness[at(4)]+15);assert.ok(m.normal[at(13)]>128);assert.ok(m.normal[at(17)]<128);});
test('uniform wood does not invent relief, including image boundaries',()=>{const m=engravingMaps(pixels(32,24),32,24);for(let i=0;i<32*24*4;i+=4){assert.equal(m.height[i],255);assert.equal(m.normal[i],128);assert.equal(m.normal[i+1],128);assert.equal(m.normal[i+2],255);}});
