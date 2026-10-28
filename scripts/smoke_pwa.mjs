// Reproducible browser QA; run in CI with Chrome/SwiftShader, independently of hosting.
import {createServer} from 'node:http';
import {readFile,writeFile,mkdir,stat} from 'node:fs/promises';
import {createReadStream} from 'node:fs';
import {resolve,extname,sep} from 'node:path';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {cameraAngleScenario} from './smoke_camera_angle.mjs';
import {webMotionScenario} from './smoke_pwa_motion.mjs';
const root=resolve('pwa-dist'),report={checks:[],errors:[]};await mkdir('test-results',{recursive:true});
const version=JSON.parse(await readFile(resolve(root,'web-version.json'),'utf8'));
const sw=await readFile(resolve(root,'sw.js'),'utf8');let candidate=false,failMusic=false;
const server=createServer(async(req,res)=>{try{
 const url=new URL(req.url,'http://localhost'),pathname=url.pathname;
 if(pathname==='/index.html'){res.writeHead(302,{Location:'./'});res.end();return;}
 if(pathname.endsWith('/web-version.json')&&candidate){res.setHeader('Content-Type','application/json');res.end(JSON.stringify({...version,build:version.build+1,commit:'b'.repeat(40)}));return;}
 if(pathname.endsWith('/sw.js')){res.setHeader('Content-Type','application/javascript');res.setHeader('Cache-Control','no-store');res.end(candidate?sw.replace(/const CACHE='[^']+'/,'const CACHE=\'max-yutnori-web-next\''):sw);return;}
 if(failMusic&&pathname.endsWith('.bin')){res.writeHead(503);res.end();return;}
 const file=resolve(root,'.'+(pathname==='/'?'/index.html':decodeURIComponent(pathname)));if(!file.startsWith(root+sep))throw Error('path');const info=await stat(file);if(!info.isFile())throw Error();
 const types={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.webmanifest':'application/manifest+json','.mp3':'audio/mpeg','.png':'image/png','.txt':'text/plain'};
 res.setHeader('Content-Type',types[extname(file)]||'application/octet-stream');res.setHeader('Cache-Control','no-store');
 let start=0,end=info.size-1;const range=req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);if(range){start=+range[1];if(range[2])end=Math.min(end,+range[2]);}
 res.writeHead(range?206:200,{'Content-Length':end-start+1,'Accept-Ranges':'bytes',...(range?{'Content-Range':`bytes ${start}-${end}/${info.size}`}:{})});createReadStream(file,{start,end}).pipe(res);
 }catch{res.writeHead(404);res.end();}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));const url=`http://127.0.0.1:${server.address().port}/`;let browser,activePage;
try{
 browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'/usr/bin/google-chrome',args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const context=await browser.newContext({viewport:{width:1000,height:600},serviceWorkers:'allow'});
 await context.route('https://api.github.com/**',r=>r.fulfill({json:[{tag_name:'v99.0.0',draft:false,prerelease:false}]}));
 const page=await context.newPage();activePage=page;page.setDefaultTimeout(60000);page.on('pageerror',e=>report.errors.push(String(e)));await page.goto(url);
 await page.waitForFunction(()=>window.__gameReady);report.checks.push('Real Three.js WebGL + Rapier WASM start');
 await page.waitForFunction(()=>navigator.serviceWorker.controller);await page.evaluate(()=>navigator.serviceWorker.ready);report.checks.push('Service worker install/activate and complete initial precache');
 const manifest=await page.evaluate(async()=>{const m=await fetch(document.querySelector('link[rel=manifest]').href);return m.json();});assert.equal(manifest.display,'standalone');assert.equal(manifest.orientation,'landscape');assert.deepEqual(manifest.icons.map(i=>i.sizes),['192x192','512x512','512x512']);report.checks.push('Installable manifest, official icons, scope and landscape');
 await webMotionScenario(page,()=>page.waitForFunction(()=>window.__gameReady),report);
 await page.getByRole('button',{name:'Pause',exact:true}).click();await page.getByText('À jour',{exact:true}).waitFor();assert.match(await page.locator('#webVersion').innerText(),/Moteur 0.8.8 · PWA/);report.checks.push('Android 99.0.0 never reported as Web update');
 const state=await page.evaluate(()=>JSON.parse(localStorage.getItem('max-yutnori-native-v4')));await page.getByRole('button',{name:'Reprendre la partie',exact:true}).click();
 await page.getByRole('button',{name:/Lancer les bâtonnets/}).click();await page.waitForFunction(()=>!window.maxYutDiagnostic().rolling&&window.maxYutDiagnostic().lastThrow,{},{timeout:120000});report.checks.push('Real physical throw and result');
 await page.getByRole('button',{name:'Pause',exact:true}).click();await page.screenshot({path:'test-results/pwa-pause.png'});
 await context.setOffline(true);await page.reload();await page.waitForFunction(()=>window.__gameReady);const restored=await page.evaluate(()=>window.maxYutDiagnostic());assert.ok(restored.lastThrow);assert.ok(restored.state);report.checks.push('Offline reload restores game and last throw from localStorage');report.checks.push('Redirected HTML shell reopens offline without ERR_FAILED');await page.waitForFunction(()=>window.maxYutDiagnostic().audio.duration>60);report.checks.push('Original MP3 reassembled and decoded offline');
 const audioRange=await page.evaluate(async()=>{const r=await fetch('./audio/music-part-000.bin',{headers:{Range:'bytes=100-199'}});return {status:r.status,length:(await r.arrayBuffer()).byteLength,range:r.headers.get('Content-Range')};});assert.equal(audioRange.status,206);assert.equal(audioRange.length,100);report.checks.push('Offline original music chunks and byte ranges served from complete cache');
 await page.getByRole('button',{name:'Pause',exact:true}).click();await page.getByRole('button',{name:'Vérifier les mises à jour',exact:true}).click();await page.getByText('Vérification impossible',{exact:true}).waitFor();report.checks.push('Offline checks explicitly report verification impossible');
 await page.getByRole('button',{name:'Reprendre la partie',exact:true}).click();await page.locator('#viewMode').selectOption('top');assert.match(await page.locator('#currentView').textContent(),/dessus/);await page.locator('#zoom2').click();assert.equal(await page.locator('#zoom2').getAttribute('aria-pressed'),'true');report.checks.push('Offline top view and physical ×2 remain available');
 for(const viewport of [{width:844,height:390},{width:390,height:844},{width:1000,height:600}]){await page.setViewportSize(viewport);await page.waitForTimeout(100);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);assert.equal(await page.locator('header button').first().isVisible(),true);}report.checks.push('Landscape, portrait and desktop controls without horizontal overflow');
 await context.setOffline(false);candidate=true;const saved=await page.evaluate(()=>localStorage.getItem('max-yutnori-native-v4'));
 await page.getByRole('button',{name:'Pause',exact:true}).click();await page.getByRole('button',{name:'Vérifier les mises à jour',exact:true}).click();await page.waitForFunction(async()=>!!(await navigator.serviceWorker.getRegistration()).waiting);assert.equal(await page.evaluate(()=>localStorage.getItem('max-yutnori-native-v4')),saved);report.checks.push('New worker waits while game and save remain unchanged');
 const second=await context.newPage();await second.goto(url);await second.waitForFunction(()=>window.__gameReady);await second.getByRole('button',{name:'Pause',exact:true}).click();await page.bringToFront();
 // A move phase can leave the bowl visible at the result pose; wait for its safe ready state.
 await page.waitForFunction(()=>['ready','hidden'].includes(window.maxYutDiagnostic().bowl.phase));await page.getByRole('button',{name:'Actualiser le jeu',exact:true}).click();await page.getByText(/Fermez les autres fenêtres/).waitFor();report.checks.push('Multiple open windows block forced activation');await second.close();
 const before=await page.evaluate(()=>localStorage.getItem('max-yutnori-native-v4'));
 await Promise.all([page.waitForEvent('load'),page.getByRole('button',{name:'Actualiser le jeu',exact:true}).click()]);await page.waitForFunction(()=>window.__gameReady);assert.equal(await page.evaluate(()=>localStorage.getItem('max-yutnori-native-v4')),before);report.checks.push('Explicit update reload preserves exact saved game');
 await cameraAngleScenario(page,()=>page.waitForFunction(()=>window.__gameReady),report);
 assert.deepEqual(report.errors,[]);await page.screenshot({path:'test-results/pwa-board.png'});report.result='PASS';
}catch(error){report.result='FAIL';report.failure=String(error.stack);try{report.diagnostics=await activePage?.evaluate(()=>({online:navigator.onLine,versionStatus:document.getElementById('versionStatus')?.textContent,offlineStatus:document.getElementById('offlineStatus')?.textContent,gameReady:!!window.__gameReady,webMotion:window.maxYutWebMotionDiagnostic?.(),game:window.maxYutDiagnostic?.()}));}catch{}throw error;}
finally{await writeFile('test-results/pwa-smoke.json',JSON.stringify(report,null,2));await browser?.close();server.close();console.log(JSON.stringify(report));}
