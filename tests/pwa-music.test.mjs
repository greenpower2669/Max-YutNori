import test from 'node:test';import assert from 'node:assert/strict';import {webcrypto} from 'node:crypto';
const api=await import('../web/pwa/music.mjs').catch(()=>({}));
const bytes=new TextEncoder().encode('original music bytes');const hash=async b=>Buffer.from(await webcrypto.subtle.digest('SHA-256',b)).toString('hex');
test('chunked music reconstructs exact original bytes and validates integrity',async()=>{
 assert.equal(typeof api.assembleMusic,'function');const chunks=[bytes.slice(0,8),bytes.slice(8)],manifest={size:bytes.length,sha256:await hash(bytes),parts:await Promise.all(chunks.map(async(b,i)=>({path:'music-part-'+String(i).padStart(3,'0')+'.bin',size:b.length,sha256:await hash(b)})))};
 const fetcher=async url=>({ok:true,json:async()=>manifest,arrayBuffer:async()=>chunks[Number(String(url).match(/part-(\d+)/)[1])].buffer});
 const blob=await api.assembleMusic(fetcher,'https://game.test/audio/music-parts.json',webcrypto);assert.deepEqual(new Uint8Array(await blob.arrayBuffer()),bytes);assert.equal(blob.type,'audio/mpeg');
 const broken=async url=>({ok:true,json:async()=>manifest,arrayBuffer:async()=>new Uint8Array([1,2]).buffer});await assert.rejects(()=>api.assembleMusic(broken,'https://game.test/audio/music-parts.json',webcrypto));
});
