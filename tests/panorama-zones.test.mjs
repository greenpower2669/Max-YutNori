import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createLowMistTexture} from '../web/src/low-mist.mjs';
const at=(map,x,y,c)=>{const {data,width,height}=map.image;return data[(Math.floor(y/768*height)*width+Math.floor(x/1536*width))*4+c];};
test('annotated valley banks extend around the panorama while mountain tops stay clear',()=>{
 const map=createLowMistTexture();
 for(const [x,y]of [[32,345],[300,445],[485,367],[810,360],[1460,380],[350,644],[1050,636],[1200,645]])assert.ok(at(map,x,y,1)>70,`valley ${x},${y}`);
 for(const [x,y]of [[700,300],[1110,249],[780,680]])assert.equal(at(map,x,y,1),0);
 assert.ok(map.image.data.byteLength<=131072);
});
test('turquoise sky clouds have their own mask that excludes the moon and star fields',()=>{
 const map=createLowMistTexture();
 for(const [x,y]of [[520,240],[180,268],[900,205],[1410,220],[630,45]])assert.ok(at(map,x,y,2)>80,`cloud ${x},${y}`);
 for(const [x,y]of [[1110,250],[780,135],[1180,130],[800,700]])assert.equal(at(map,x,y,2),0,`clear sky/moon ${x},${y}`);
});
test('water follows lake channels and excludes foreground shores and islands',()=>{
 const map=createLowMistTexture();
 for(const [x,y]of [[1110,475],[910,455],[605,401],[780,510]])assert.ok(at(map,x,y,3)>150,`water ${x},${y}`);
 for(const [x,y]of [[1200,445],[1005,490],[760,456],[920,560],[300,300],[800,700]])assert.equal(at(map,x,y,3),0,`land ${x},${y}`);
});
