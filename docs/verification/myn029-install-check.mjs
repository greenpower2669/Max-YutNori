// Supplemental DOM/API-boundary checks; native OS installation is not exercised.
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const source=(await readFile(new URL('../../web/pwa/client.js',import.meta.url),'utf8')).replace(/^import .*;\n/gm,'');
function client({ua='',platform='',touch=0,language='fr',standalone=false,iosStandalone=false,fullscreen='unsupported',lockDenied=false}={}){
 const elements=new Map(),events=new Map(),calls=[];
 class Element{
  constructor(){this.hidden=false;this.open=false;this.dataset={};}
  set id(v){this._id=v;elements.set(v,this);}get id(){return this._id;}
  set innerHTML(v){this.html=v;for(const [,id] of v.matchAll(/id="([^"]+)"/g))if(!elements.has(id)){const e=new Element();e.id=id;}}
  get innerHTML(){return this.html;}
  setAttribute(){}append(){}insertAdjacentElement(){}addEventListener(){}
  showModal(){this.open=true;}close(){this.open=false;}
 }
 for(const id of ['pause','settings']){const e=new Element();e.id=id;}
 const document={createElement:()=>new Element(),getElementById:id=>elements.get(id),body:new Element(),baseURI:'https://game.test/',addEventListener(){}};
 document.documentElement={};document.fullscreenElement=null;
 if(fullscreen!=='unsupported')document.documentElement.requestFullscreen=async()=>{
  calls.push('request');if(fullscreen==='refused')throw Error('fullscreen denied');
  await Promise.resolve();document.fullscreenElement=document.documentElement;calls.push('entered');
 };
 document.exitFullscreen=async()=>{calls.push('exit');document.fullscreenElement=null;};
 const screen={orientation:{lock:async orientation=>{calls.push('lock:'+orientation);if(lockDenied)throw Error('orientation denied');}}};
 const navigator={userAgent:ua,platform,maxTouchPoints:touch,language,standalone:iosStandalone,onLine:false,storage:{persist:async()=>true}};
 vm.runInNewContext(source,{document,navigator,screen,window:{addEventListener:(name,fn)=>events.set(name,fn)},matchMedia:q=>({matches:standalone&&q==='(display-mode: standalone)'}),MutationObserver:class{observe(){}},setInterval(){},isSecureContext:true,URL,fetch:async()=>{throw Error('network forbidden');},checkVersions:async()=>({status:'Vérification impossible',detail:'offline fixture'}),validateVersion:v=>v,canApplyUpdate:()=>false,__WEB_VERSION__:{engineVersion:'0.8.8',pwaVersion:'0.1.0',build:6,commit:'1'.repeat(40)}});
 return {get:id=>elements.get(id),events,calls,document};
}
const checks=[];
let c=client({ua:'Mozilla/5.0 (Linux; Android 10) Chrome/140'});
assert.equal(c.get('installShortcut').hidden,false);await c.get('installShortcut').onclick();
assert.equal(c.get('installGuide').open,true);assert.match(c.get('installGuideSteps').innerHTML,/Installer l’application/);
assert.doesNotMatch(c.get('installGuideSteps').innerHTML,/play\.google/);checks.push('Android shortcut opens PWA guide; no premature Play routing');
c=client({ua:'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)',language:'ko-KR'});
assert.equal(c.get('installShortcut').textContent,'📲 설치');await c.get('installShortcut').onclick();
for(const text of ['공유','홈 화면에 추가','추가','Safari'])assert.ok(c.get('installGuideSteps').innerHTML.includes(text));
c.get('closeInstallGuide').onclick();assert.equal(c.get('installGuide').open,false);checks.push('Korean iPhone guide and return to game');
c=client({ua:'Macintosh',platform:'MacIntel',touch:5});await c.get('installWeb').onclick();
assert.match(c.get('installGuideSteps').innerHTML,/iPhone ou iPad/);checks.push('Desktop-style iPad identity uses Apple guide from Pause');
for(const options of [{standalone:true},{iosStandalone:true}]){c=client(options);assert.equal(c.get('installShortcut').hidden,true);assert.equal(c.get('installWeb').hidden,true);}
checks.push('Installed standalone launch hides both install buttons on Chromium and iOS');
c=client();await c.get('installShortcut').onclick();assert.match(c.get('installGuideSteps').innerHTML,/Chrome ou Edge/);checks.push('Desktop manual installation guide');
for(const outcome of ['accepted','dismissed']){
 c=client();let prompts=0,prevented=false;
 c.events.get('beforeinstallprompt')({preventDefault(){prevented=true;},async prompt(){prompts++;},userChoice:Promise.resolve({outcome})});
 await c.get('installShortcut').onclick();assert.equal(prevented,true);assert.equal(prompts,1);assert.equal(c.get('installGuide').open,false);
 assert.match(c.get('webActionStatus').textContent,outcome==='accepted'?/Installation demandée/:/plus tard/);
}
checks.push('Native Chromium invitation accepted/dismissed keeps game open');
c=client({fullscreen:'supported'});await c.get('fullscreenWeb').onclick();
assert.deepEqual(c.calls,['request','entered','lock:landscape']);assert.ok(c.document.fullscreenElement);
await c.get('fullscreenWeb').onclick();assert.equal(c.calls.at(-1),'exit');assert.equal(c.document.fullscreenElement,null);
checks.push('Fullscreen completes before landscape lock; second command exits');
c=client();await c.get('fullscreenWeb').onclick();assert.match(c.get('webActionStatus').textContent,/plein écran dépend/);
c=client({fullscreen:'refused'});await c.get('fullscreenWeb').onclick();assert.deepEqual(c.calls,['request']);assert.match(c.get('webActionStatus').textContent,/refusé le plein écran/);
c=client({fullscreen:'supported',lockDenied:true});await c.get('fullscreenWeb').onclick();assert.ok(c.document.fullscreenElement);assert.deepEqual(c.calls,['request','entered','lock:landscape']);
checks.push('Unsupported fullscreen, denial and refused orientation lock preserve fallback');
console.log(JSON.stringify({result:'PASS',checks,limits:'DOM/API-boundary fixtures only; real installation, fullscreen, orientation, sensors and Korean Safari still need device tests.'},null,2));
