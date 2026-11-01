// Supplemental DOM/API-boundary checks; native OS installation is not exercised.
import assert from 'node:assert/strict';
import {client} from '../../tests/helpers/pwa-client-fixture.mjs';
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
