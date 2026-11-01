import test from 'node:test';
import assert from 'node:assert/strict';
import {client} from './helpers/pwa-client-fixture.mjs';
import {getStoreOffer} from '../web/pwa/store-offer.mjs';
// Test-only metadata. This does not assert that the listing has been published.
const android={published:true,verifiedAt:'2026-11-01T10:00:00Z',packageId:'fr.fab.maxyutnori',version:'1.0.0',engineVersion:'0.8.8',url:'https://play.google.com/store/apps/details?id=fr.fab.maxyutnori'};
const catalog=()=>({schema:1,product:'max-yutnori',android:{...android},ios:null});
test('PWA guide remains primary and a verified Store offer can be declined without changing the game save',async()=>{
 const storage=new Map([['max-yutnori-native-v4','saved-game']]);const c=client({ua:'Android',storeCatalog:catalog(),storage});
 await c.get('installShortcut').onclick();assert.equal(c.get('installGuide').open,true);
 assert.equal(c.get('storeOfferDialog')?.open,false,'Store does not replace the PWA guide');
 c.get('closeInstallGuide').onclick();assert.equal(c.get('storeOfferDialog')?.open,true,'optional Store dialog follows the guide');
 assert.equal(c.get('storeOfferLink').href,android.url);assert.match(c.get('storeOfferVersion').textContent,/1\.0\.0/);
 c.get('continueWebApp').onclick();assert.equal(c.get('storeOfferDialog').open,false);assert.equal(storage.get('max-yutnori-native-v4'),'saved-game');
 await c.get('installShortcut').onclick();c.get('closeInstallGuide').onclick();assert.equal(c.get('storeOfferDialog').open,false,'dismissal prevents repeated prompting');
});
test('the Chromium PWA invitation runs before any optional Store offer',async()=>{
 const c=client({ua:'Android',storeCatalog:catalog()});let called=false;
 c.events.get('beforeinstallprompt')({preventDefault(){},async prompt(){called=true;assert.equal(c.get('storeOfferDialog')?.open,false);},userChoice:Promise.resolve({outcome:'accepted'})});
 await c.get('installShortcut').onclick();assert.equal(called,true);assert.equal(c.get('storeOfferDialog')?.open,true);
});
test('unpublished, wrong-product and stale-engine Store metadata cannot propose an installation',()=>{
 assert.equal(typeof getStoreOffer,'function','Store validation must exist');
 for(const patch of [{published:false},{verifiedAt:''},{version:'invalid'},{engineVersion:'0.8.7'},{packageId:'another.app'},{url:'https://example.com/install'},{url:'https://play.google.com:8443/store/apps/details?id=fr.fab.maxyutnori'},{url:'https://play.google.com/store/apps/details?id=another.app'}]){
  const c=catalog();Object.assign(c.android,patch);assert.equal(getStoreOffer(c,'android','0.8.8'),null);
 }
 assert.equal(getStoreOffer({...catalog(),product:'another-game'},'android','0.8.8'),null);
 assert.equal(getStoreOffer(catalog(),'ios','0.8.8'),null);
 assert.equal(getStoreOffer(catalog(),'android','0.8.8').version,'1.0.0','native package version is distinct from engine/PWA version');
});
test('iPhone offer requires the exact verified App Store identifier',async()=>{
 const cata={...catalog(),ios:{published:true,verifiedAt:'2026-11-01T10:00:00Z',appId:'987654321',version:'1.0.0',engineVersion:'0.8.8',url:'https://apps.apple.com/fr/app/max-yutnori/id987654321'}};
 const c=client({ua:'iPhone',storeCatalog:cata});await c.get('installShortcut').onclick();c.get('closeInstallGuide').onclick();
 assert.equal(c.get('storeOfferDialog').open,true);assert.equal(c.get('storeOfferLink').href,cata.ios.url);assert.match(c.get('storeOfferLink').textContent,/App Store/);
 cata.ios.appId='123456789';assert.equal(getStoreOffer(cata,'ios','0.8.8'),null);
});
test('declining a Store offer still works when preference storage is blocked',async()=>{
 const c=client({ua:'Android',storeCatalog:catalog(),storage:{getItem(){throw Error('denied');},setItem(){throw Error('quota');}}});
 await c.get('installShortcut').onclick();c.get('closeInstallGuide').onclick();assert.equal(c.get('storeOfferDialog').open,true);
 assert.doesNotThrow(()=>c.get('continueWebApp').onclick());await c.get('installShortcut').onclick();c.get('closeInstallGuide').onclick();assert.equal(c.get('storeOfferDialog').open,false);
});
test('no Store catalog entry leaves WebApp installation and updates usable',async()=>{
 const c=client({ua:'Android'});await c.get('installShortcut').onclick();c.get('closeInstallGuide').onclick();
 assert.equal(c.get('storeOfferDialog')?.open,false);assert.ok(c.get('checkWeb'));assert.equal(c.get('installShortcut').hidden,false);
});
test('Store popup follows the selected language and Escape remembers the refusal',async()=>{
 const storage=new Map();const c=client({ua:'Android',language:'en',storeCatalog:catalog(),storage});
 await c.get('installShortcut').onclick();c.get('closeInstallGuide').onclick();assert.equal(c.get('storeOfferDialog')?.lang,'en');
 assert.match(c.get('continueWebApp').textContent,/WebApp/);c.get('storeOfferDialog').oncancel();c.get('storeOfferDialog').close();
 const next=client({ua:'Android',storeCatalog:catalog(),storage});await next.get('installShortcut').onclick();next.get('closeInstallGuide').onclick();assert.equal(next.get('storeOfferDialog').open,false);
});
test('a Store refusal in one tab is respected by an already open second tab',async()=>{
 const storage=new Map();const a=client({ua:'Android',storeCatalog:catalog(),storage});const b=client({ua:'Android',storeCatalog:catalog(),storage});
 await a.get('installShortcut').onclick();a.get('closeInstallGuide').onclick();a.get('continueWebApp').onclick();
 await b.get('installShortcut').onclick();b.get('closeInstallGuide').onclick();assert.equal(b.get('storeOfferDialog').open,false);
});
test('Play listing cannot contain conflicting package identifiers',()=>{
 const c=catalog();c.android.url+='&id=com.other';assert.equal(getStoreOffer(c,'android','0.8.8'),null);
});
test('Apple identifier must be on an App Store listing route',()=>{
 const c={...catalog(),ios:{published:true,verifiedAt:'2026-11-01T10:00:00Z',appId:'987654321',version:'1.0.0',engineVersion:'0.8.8',url:'https://apps.apple.com/not-an-app/id987654321'}};
 assert.equal(getStoreOffer(c,'ios','0.8.8'),null);
});
