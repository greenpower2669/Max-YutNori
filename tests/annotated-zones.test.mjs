import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createAnnotatedTexture,FALL_PATHS,VIOLET_PATHS,SKY_PATHS} from '../web/src/annotated-zones.mjs';

const texture=createAnnotatedTexture(),{data,width,height}=texture.image;
const at=(x,y,c)=>data[(Math.min(height-1,Math.floor(y/768*height))*width+Math.min(width-1,Math.floor(x/1536*width)))*4+c];
test('24 annotated waterfalls are mapped with precise independent ribbons',()=>{
 assert.equal(FALL_PATHS.length,24);
 for(const [i,path]of FALL_PATHS.entries()){
  const mid=path[Math.floor(path.length/2)];
  assert.ok(at(mid[0],mid[1],0)>40,'pink waterfall '+(i+1)+' missing');
 }
 for(const [x,y]of [[720,300],[1110,249],[780,680],[300,50]])
  assert.equal(at(x,y,0),0,'false waterfall coverage on sky/land');
});
test('independent additional fog and sky bands, opaque moon exclusion, one-time 512 KiB texture',()=>{
 assert.equal(data.byteLength,512*256*4);
 assert.equal(VIOLET_PATHS.length,5);
 assert.equal(SKY_PATHS.length,7);
 for(const path of VIOLET_PATHS){const p=path[Math.floor(path.length/2)];assert.ok(at(p[0],p[1],1)>40,'missing purple band');}
 for(const path of SKY_PATHS){const p=path[Math.floor(path.length/2)];assert.ok(at(p[0],p[1],2)>40,'missing turquoise cloud band');}
 assert.equal(at(1110,249,2),0,'moon must be protected');
 assert.equal(at(750,700,1),0,'foreground must remain clear');
});
test('0.8.3 lake ripples and validated waterfall spray equations are frozen',async()=>{
 const src=await readFile(new URL('../web/src/living-panorama.js',import.meta.url),'utf8');
 const frozen=[
  'float water=step(.98,regions.a)*lakeColor(original);',
  'vec2 offset=vec2(sin(p.y*240.+time*1.6)*.0008,sin(p.x*260.-time*2.1)*.0005)*water;',
  'float sourceLake=step(.98,texture2D(lowMistData,sourceP).a)*lakeColor(displaced);',
  'float ripples=sin(p.y*900.+sin(p.x*100.-time*1.8)*2.+time*4.);',
  'color+=vec3(.018,.035,.045)*ripples*water*strength;',
  'color+=vec3(.075,.11,.13)*falls*foam*strength;',
  'spray*=smoothstep(0.,.25,f.y)*(1.-smoothstep(.75,1.,f.y))*falls;',
  'this.uniforms.strength.value=reduced?0:low?.7:1;'
 ];
 for(const expression of frozen)assert.ok(src.includes(expression),'regression in protected 0.8.3 expression: '+expression);
 assert.ok(src.includes('float dry=1.-step(.005,regions.a);'));
 assert.ok(src.includes('float newFallMask=annotation.r*dry*'));
 assert.ok(src.includes('float extraValley=max(annotation.g,valleyMask*.45)*(1.-annotation.r)*dry;'));
});
