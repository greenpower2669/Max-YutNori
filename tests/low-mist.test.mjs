import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {LivingPanorama} from '../web/src/living-panorama.js';
const maskAt=(texture,u,v)=>{const {data,width,height}=texture.image;return data[(Math.min(height-1,Math.floor(v*height))*width+Math.min(width-1,Math.floor(u*width)))*4+1];};
test('low clouds use one small static periodic texture restricted to the valleys',()=>{
 const p=new LivingPanorama(new T.Texture()),map=p.uniforms.lowMistData?.value;
 assert.ok(map,'the independent low-cloud density texture must exist');
 assert.ok(map.image.data.byteLength<=65536,'fog density stays within 64 KiB');
 assert.ok(maskAt(map,.50,.63)>100,'lake valleys receive low clouds');
 assert.equal(maskAt(map,.50,.20),0,'sky remains outside the low-cloud layer');
 assert.equal(maskAt(map,.50,.95),0,'foreground remains outside the low-cloud layer');
 assert.equal(map.wrapS,T.RepeatWrapping);assert.equal(map.wrapT,T.RepeatWrapping);
 const {data,width,height}=map.image;for(let y=0;y<height;y++)assert.ok(Math.abs(data[y*width*4]-data[(y*width+width-1)*4])<=3,'noise remains continuous at its repeat seam');
});
test('advancing low clouds reuses the uploaded texture and the original single panorama draw',()=>{
 const p=new LivingPanorama(new T.Texture()),map=p.uniforms.lowMistData?.value;
 assert.ok(map,'low-cloud texture must exist before checking its lifecycle');const version=map.version,data=map.image.data;
 for(let i=0;i<1000;i++)p.frame(1/60,false,false);
 assert.equal(p.uniforms.lowMistData.value,map);assert.equal(map.image.data,data);assert.equal(map.version,version,'animation must not upload or recreate its density texture');
 assert.equal(p.mesh.children.length,0,'low clouds do not create extra meshes');
 const before=p.uniforms.time.value;p.frame(5,true,true);assert.equal(p.uniforms.time.value,before);assert.equal(p.uniforms.strength.value,0);
});
