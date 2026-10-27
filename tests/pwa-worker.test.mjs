import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const code=await readFile(new URL('../web/pwa/sw-template.js',import.meta.url),'utf8').catch(()=>'');
function worker({fail=false}={}){
 const handlers={},storage=new Map(),deleted=[],claimed=[];let waiting=0;
 const cache={put:async(k,v)=>storage.set(String(k),v.clone()),match:async k=>storage.get(String(k))?.clone()};
 const self={location:{href:'https://game.test/sub/sw.js'},registration:{scope:'https://game.test/sub/'},clients:{claim:async()=>claimed.push(true),matchAll:async()=>[]},addEventListener:(n,f)=>handlers[n]=f,skipWaiting:async()=>waiting++};
 const caches={open:async()=>cache,keys:async()=>['unrelated','max-yutnori-web-old'],delete:async n=>deleted.push(n)};
 const fetch=async req=>{if(fail)throw Error('offline');return new Response(String(req).includes('music')?'0123456789':'hello',{headers:{'Content-Type':String(req).includes('music')?'audio/mpeg':'text/html'}});};
 vm.runInNewContext(code.replace('__CACHE_ID__','test').replace('__PRECACHE__',JSON.stringify(['./index.html','./audio/music.mp3'])),{self,caches,fetch,URL,Request,Response,Headers,console,ArrayBuffer});
 return {handlers,storage,deleted,claimed,cache,waiting:()=>waiting};
}
async function event(f,arg={}){let promise;f({...arg,waitUntil:p=>promise=p,respondWith:p=>promise=p});return promise;}
test('worker precaches full audio and shell without forcing activation',async()=>{
 assert.ok(code.length>0,'service worker not implemented');const w=worker();await event(w.handlers.install);
 assert.equal(w.storage.size,2);assert.equal(w.waiting(),0);assert.equal(w.deleted.length,0);
});
test('offline navigation and audio Range are served from full cache',async()=>{
 assert.ok(code.length>0,'service worker not implemented');const w=worker();await event(w.handlers.install);
 const request=new Request('https://game.test/sub/audio/music.mp3',{headers:{Range:'bytes=2-5'}});
 const response=await event(w.handlers.fetch,{request});assert.equal(response.status,206);assert.equal(await response.text(),'2345');assert.equal(response.headers.get('Content-Range'),'bytes 2-5/10');
 const suffix=await event(w.handlers.fetch,{request:new Request(request.url,{headers:{Range:'bytes=-3'}})});assert.equal(await suffix.text(),'789');
 const bad=await event(w.handlers.fetch,{request:new Request(request.url,{headers:{Range:'bytes=20-'}})});assert.equal(bad.status,416);
 const nav=new Request('https://game.test/sub/');Object.defineProperty(nav,'mode',{value:'navigate'});
 assert.equal(await (await event(w.handlers.fetch,{request:nav})).text(),'hello');
});
test('failed initial cache install rejects instead of promising offline availability',async()=>{
 assert.ok(code.length>0,'service worker not implemented');const w=worker({fail:true});await assert.rejects(()=>event(w.handlers.install));
});
test('activation preserves other caches and never deletes old game versions mid-session',async()=>{
 assert.ok(code.length>0,'service worker not implemented');const w=worker();await event(w.handlers.activate);assert.deepEqual(w.deleted,[]);
});
