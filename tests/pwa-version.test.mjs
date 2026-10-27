import test from 'node:test';
import assert from 'node:assert/strict';
const api = await import('../web/pwa/version.mjs').catch(()=>({}));
const base={schema:1,product:'max-yutnori',channel:'web-pwa',pwaVersion:'0.1.0',build:1,engineVersion:'0.8.8',commit:'a'.repeat(40)};
const release=(m,extra={})=>({tag_name:'web-v'+m.pwaVersion,draft:false,prerelease:false,body:'<!-- max-yutnori-web-version: '+JSON.stringify(m)+' -->',assets:[{name:'web-version.json',state:'uploaded'}],...extra});
test('compares numeric semver including prereleases',()=>{
 assert.equal(typeof api.compareSemver,'function');
 assert.equal(api.compareSemver('0.10.0','0.9.9'),1);
 assert.equal(api.compareSemver('1.0.0','1.0.0-rc.2'),1);
 assert.equal(api.compareSemver('1.0.0-rc.10','1.0.0-rc.2'),1);
 assert.throws(()=>api.compareSemver('01.0.0','1.0.0'));
});
test('rejects invalid channel, commit, unsafe build and misleading Android versions',()=>{
 assert.equal(typeof api.validateVersion,'function');
 for(const m of [{...base,channel:'android'},{...base,commit:'main'},{...base,build:0},{...base,build:1.2},{...base,build:Number.MAX_SAFE_INTEGER+1}])assert.throws(()=>api.validateVersion(m));
 assert.deepEqual(api.validateVersion(base),base);
});
test('selects only complete Web publications and ignores Android/audio/drafts',()=>{
 assert.equal(typeof api.selectWebRelease,'function');
 assert.equal(api.selectWebRelease([{tag_name:'v99.0.0'},{tag_name:'Arisongs'}]),null);
 const next={...base,pwaVersion:'0.2.0',build:2};
 assert.deepEqual(api.selectWebRelease([release(base),release(next),release({...next,build:3},{draft:true})]),next);
 assert.throws(()=>api.selectWebRelease([release(next,{body:''})]));
 assert.throws(()=>api.selectWebRelease([release(next,{tag_name:'web-v0.3.0'})]));
});
test('same version with new build updates; conflicting reused build is impossible',()=>{
 assert.equal(typeof api.compareBuilds,'function');
 assert.equal(api.compareBuilds(base,{...base,build:2,commit:'b'.repeat(40)}),'update');
 assert.equal(api.compareBuilds(base,base),'current');
 assert.equal(api.compareBuilds({...base,build:3},base),'older');
 assert.throws(()=>api.compareBuilds(base,{...base,commit:'b'.repeat(40)}));
 assert.throws(()=>api.compareBuilds(base,{...base,pwaVersion:'0.2.0'}));
});
test('real version checker paginates GitHub and never mistakes Android for Web',async()=>{
 assert.equal(typeof api.checkVersions,'function');
 const calls=[];
 const fetcher=async url=>{calls.push(String(url));return {ok:true,json:async()=>String(url).includes('api.github.com')?[{tag_name:'v99.0.0'}]:base};};
 assert.equal((await api.checkVersions(base,fetcher,'https://game.test/web-version.json')).status,'À jour');
 assert.ok(calls.some(u=>u.includes('/releases?per_page=100&page=1')));
 const offline=async()=>{throw Error('offline');};
 assert.equal((await api.checkVersions(base,offline,'https://game.test/web-version.json')).status,'Vérification impossible');
 const next={...base,build:2,commit:'b'.repeat(40)};
 const newer=async url=>({ok:true,json:async()=>String(url).includes('api.github.com')?[release(next)]:base});
 const result=await api.checkVersions(base,newer,'https://game.test/web-version.json');
 assert.equal(result.status,'Mise à jour disponible');assert.equal(result.hostReady,false);
});
test('update gate permits a saved move result but rejects flight and transitional poses',()=>{
 assert.equal(typeof api.canApplyUpdate,'function');
 const d={paused:true,rolling:false,bowl:{phase:'hidden'}};
 assert.equal(api.canApplyUpdate(d,true),true);
 assert.equal(api.canApplyUpdate({...d,bowl:{phase:'ready'}},true),true);
 assert.equal(api.canApplyUpdate({...d,rolling:true},true),false);
 assert.equal(api.canApplyUpdate({...d,paused:false},true),false);
 assert.equal(api.canApplyUpdate({...d,bowl:{phase:'hiding'}},true),false);
});
test('host and published builds must agree on reused build identity',async()=>{
 const host={...base,build:2,commit:'b'.repeat(40)},published={...host,commit:'c'.repeat(40)};
 const f=async url=>({ok:true,json:async()=>String(url).includes('api.github.com')?[release(published)]:host});
 assert.equal((await api.checkVersions(base,f,'https://game.test/web-version.json')).status,'Vérification impossible');
});
