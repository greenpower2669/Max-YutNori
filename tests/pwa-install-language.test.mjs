import test from 'node:test';
import assert from 'node:assert/strict';
import {client} from './helpers/pwa-client-fixture.mjs';
const iphone='Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)';
const key='max-yutnori-web-language-v1';
test('French iPhone guide contains French menu names without Korean instructions',async()=>{
 const c=client({ua:iphone,languages:['fr-CA','en-US']});await c.get('installShortcut').onclick();
 assert.match(c.get('installGuideSteps').innerHTML,/Partager/);
 assert.doesNotMatch(c.get('installGuideSteps').innerHTML,/[가-힣]/);
 assert.equal(c.get('installGuide').lang,'fr');
});
test('preferred navigator.languages selects Korean before the fallback language',async()=>{
 const c=client({ua:iphone,languages:['ko-KR','fr-FR'],language:'fr'});await c.get('installShortcut').onclick();
 assert.equal(c.get('installShortcut').textContent,'📲 설치');
 assert.match(c.get('installGuideSteps').innerHTML,/홈 화면에 추가/);
 assert.doesNotMatch(c.get('installGuideSteps').innerHTML,/Partager/);
 assert.equal(c.get('installGuide').lang,'ko');
});
test('first supported preference and English fallback work on Android',async()=>{
 const c=client({ua:'Android',languages:['de-DE','en-GB','fr-FR'],language:'fr'});await c.get('installShortcut').onclick();
 assert.match(c.get('installGuideSteps').innerHTML,/Install app/);assert.equal(c.get('installGuide').lang,'en');
 const fallback=client({ua:iphone,languages:['es-ES'],language:'es'});await fallback.get('installShortcut').onclick();
 assert.match(fallback.get('installGuideSteps').innerHTML,/Add to Home Screen/);
});
test('manual language survives reopening without touching game storage',async()=>{
 const storage=new Map([['max-yutnori-native-v4','game-snapshot'],['max-yutnori-settings-v3','settings-snapshot']]);
 let c=client({ua:iphone,languages:['fr-FR'],storage});await c.get('installShortcut').onclick();
 const select=c.get('installLanguage');assert.ok(select,'language choice is available');select.value='ko';select.onchange();
 assert.equal(storage.get(key),'ko');assert.equal(c.get('installGuide').open,true);assert.match(c.get('installGuideSteps').innerHTML,/공유/);
 c=client({ua:iphone,languages:['en-US'],storage});await c.get('installShortcut').onclick();assert.equal(c.get('installGuide').lang,'ko');
 assert.equal(storage.get('max-yutnori-native-v4'),'game-snapshot');assert.equal(storage.get('max-yutnori-settings-v3'),'settings-snapshot');
});
test('automatic choice follows browser changes while manual choice stays stable',async()=>{
 const c=client({ua:iphone,languages:['fr-FR']});await c.get('installShortcut').onclick();
 const select=c.get('installLanguage');assert.ok(select);select.value='ko';select.onchange();
 c.navigator.languages=['en-US'];c.events.get('languagechange')();assert.equal(c.get('installGuide').lang,'ko');
 select.value='auto';select.onchange();assert.equal(c.get('installGuide').lang,'en');
 c.navigator.languages=['fr-BE'];c.events.get('languagechange')();assert.equal(c.get('installGuide').lang,'fr');
});
test('blocked storage still allows immediate language choice and invalid saved value is ignored',async()=>{
 const storage={getItem(){throw Error('denied');},setItem(){throw Error('quota');}};
 const c=client({ua:iphone,language:'fr',storage});await c.get('installShortcut').onclick();
 const select=c.get('installLanguage');assert.ok(select);select.value='en';assert.doesNotThrow(()=>select.onchange());
 assert.equal(c.get('installGuide').lang,'en');
 const bad=client({ua:iphone,language:'fr',storage:new Map([[key,'<script>']])});await bad.get('installShortcut').onclick();
 assert.equal(bad.get('installGuide').lang,'fr');
});
test('installation status follows language changes without relabeling unrelated French actions',async()=>{
 const c=client({ua:iphone,language:'fr'});await c.get('installShortcut').onclick();
 const select=c.get('installLanguage');select.value='en';select.onchange();
 assert.match(c.get('webActionStatus').textContent,/steps to install/);assert.equal(c.get('webActionStatus').lang,'en');
 select.value='ko';select.onchange();assert.match(c.get('webActionStatus').textContent,/설치/);assert.equal(c.get('webActionStatus').lang,'ko');
 await c.get('fullscreenWeb').onclick();const fullscreenText=c.get('webActionStatus').textContent;assert.equal(c.get('webActionStatus').lang,'fr');
 select.value='en';select.onchange();assert.equal(c.get('webActionStatus').textContent,fullscreenText);assert.equal(c.get('webActionStatus').lang,'fr');
});
