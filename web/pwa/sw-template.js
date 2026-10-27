/* Generated from the complete Web build. No automatic takeover of an open game. */
const CACHE='max-yutnori-web-__CACHE_ID__';
const FILES=__PRECACHE__;
const absolute=path=>new URL(path,self.registration.scope).href;
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 try{for(const path of FILES){const url=absolute(path);const response=await fetch(url,{cache:'reload',credentials:'same-origin'});if(!response.ok||response.type==='opaque')throw Error('Ressource hors ligne incomplète : '+path);await cache.put(url,response);}}
 catch(error){await caches.delete(CACHE);throw error;}
})()));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
// Keep old caches while documents may still refer to their hashed assets.
// LocalStorage game saves are never touched by this worker.
self.addEventListener('message',event=>{
 if(event.data?.type!=='ACTIVATE_WHEN_ALONE')return;
 event.waitUntil((async()=>{
  const windows=await self.clients.matchAll({type:'window',includeUncontrolled:true});
  if(windows.length>1){event.source?.postMessage({type:'UPDATE_BLOCKED'});return;}
  await self.skipWaiting();
 })());
});
async function rangeResponse(response,header){
 const bytes=await response.arrayBuffer(),length=bytes.byteLength,match=/^bytes=(\d*)-(\d*)$/.exec(header);
 if(!match||!match[1]&&!match[2])return new Response(null,{status:416,headers:{'Content-Range':`bytes */${length}`}});
 let start=match[1]?Number(match[1]):Math.max(0,length-Number(match[2]));
 let end=match[1]?(match[2]?Number(match[2]):length-1):length-1;end=Math.min(end,length-1);
 if(!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||start<0||end<start||start>=length)return new Response(null,{status:416,headers:{'Content-Range':`bytes */${length}`}});
 const headers=new Headers(response.headers);headers.delete('Content-Encoding');headers.set('Content-Range',`bytes ${start}-${end}/${length}`);headers.set('Content-Length',String(end-start+1));headers.set('Accept-Ranges','bytes');
 return new Response(bytes.slice(start,end+1),{status:206,headers});
}
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==new URL(self.registration.scope).origin||!url.href.startsWith(self.registration.scope))return;
 // Version checks must prove network access; never answer them with stale cache.
 if(url.pathname.endsWith('/web-version.json')&&request.cache==='no-store'){event.respondWith(fetch(request));return;}
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE),key=url.href.split('#')[0];
  const response=await cache.match(key)||((request.mode==='navigate')?await cache.match(absolute('./index.html')):null);
  if(response)return request.headers.has('Range')?rangeResponse(response,request.headers.get('Range')):response;
  return fetch(request);
 })());
});
