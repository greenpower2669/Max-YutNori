import assert from 'node:assert/strict';
import {createGame} from '../web/src/rules.mjs';
export async function visibilityScenarios(page,ready,report){
 const diagnostic=()=>page.evaluate(()=>window.maxYutDiagnostic());
 const stable=async()=>{await page.evaluate(()=>{window.__visibilityLast=null;window.__visibilityStill=0;});await page.waitForFunction(()=>{const p=window.maxYutDiagnostic().camera.position,last=window.__visibilityLast;window.__visibilityLast=p;window.__visibilityStill=last&&Math.hypot(...p.map((v,i)=>v-last[i]))<.001?window.__visibilityStill+1:0;return window.__visibilityStill>=3;});};
 const g=createGame({teams:Array.from({length:4},(_,i)=>({players:[{name:`Équipe ${i+1}`,computer:false,level:2,aggression:50}]}))});
 await page.evaluate(g=>{localStorage.setItem('max-yutnori-native-v4',JSON.stringify(g));localStorage.setItem('max-yutnori-settings-v3',JSON.stringify({auto:false,reduced:false,low:true,music:true}));localStorage.removeItem('test-frozen-clock');},g);await page.setViewportSize({width:844,height:390});await page.reload();await ready();await stable();
 assert.equal(await page.locator('header #viewMode').count(),1,'all views share one header control');
 const layout=await page.evaluate(()=>{const r=id=>{const b=document.querySelector(id).getBoundingClientRect();return {x:b.x,y:b.y,width:b.width,height:b.height,right:b.right,bottom:b.bottom};};return {header:r('header'),bottom:r('#controls'),view:r('#viewMode'),music:r('#music'),teams:[0,1,2,3].map(i=>r('#team'+i)),width:innerWidth};});
 assert.ok(layout.header.height<=64,'landscape header keeps room for the board');assert.ok(layout.bottom.height<=112,'bottom controls remain compact');assert.ok(layout.view.right<=layout.music.x,'view picker sits left of music');assert.ok(layout.teams[0].right<layout.width/2&&layout.teams[1].right<layout.width/2);assert.ok(layout.teams[2].x>layout.width/2&&layout.teams[3].x>layout.width/2);
 assert.ok(await page.locator('#team0 .turn-marker').isVisible());
 for(const mode of ['top','bowl','free','board']){await page.locator('#viewMode').selectOption(mode);await stable();assert.equal((await diagnostic()).camera.mode,mode);assert.equal(await page.locator('#currentView').textContent(),'Vue : '+({board:'Plateau',top:'Vue de dessus',bowl:'Bol et lancer',free:'Vue libre'}[mode]));}
 await page.locator('#viewMode').selectOption('top');await stable();for(const size of [{width:844,height:390},{width:1000,height:600},{width:390,height:844}]){await page.setViewportSize(size);await stable();const d=await diagnostic();assert.ok(await page.evaluate(pawns=>pawns.every(p=>document.elementFromPoint(p.x,p.y)===document.querySelector('#scene')),d.projectedPawns),'all reserves are available at '+size.width);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:`temp/native-visibility-${size.width}.png`});}
 report.checks.push('Single view picker left of music, compact landscape HUD, teams split on both sides and reachable reserves across three sizes');
 await page.setViewportSize({width:844,height:390});await page.locator('#viewMode').selectOption('board');await stable();await page.locator('#throw').click();assert.equal(await page.locator('#currentView').textContent(),'Vue : Bol et lancer','automatic camera change updates the picker');await page.waitForFunction(()=>!window.maxYutDiagnostic().rolling,{},{timeout:60000});
 await page.waitForFunction(()=>window.__testAudio[0].duration>2100);const audio=await page.evaluate(()=>{const a=window.__testAudio[0];return {src:a.src,loop:a.loop,count:window.__testAudio.length};});assert.ok(audio.src.endsWith('/audio/ariranlike25102026.mp3'));assert.equal(audio.loop,true);assert.equal(audio.count,1);
 for(let n=0;n<2;n++){await page.evaluate(async()=>{const a=window.__testAudio[0];await a.play();a.currentTime=a.duration-.5;});await page.waitForFunction(()=>window.__testAudio[0].currentTime<3&&!window.__testAudio[0].paused,{},{timeout:15000});}
 await page.locator('[data-open=pause]').click();assert.equal((await diagnostic()).audio.paused,true);await page.locator('#pause [data-close]').click();await page.waitForFunction(()=>!window.__testAudio[0].paused);assert.equal(await page.evaluate(()=>window.__testAudio.length),1);
 report.checks.push('New 36-minute MP3 plays offline, crosses its loop boundary twice and pauses/resumes without duplication');
 const two=createGame({teams:g.teams.slice(0,2).map(t=>({players:t.players}))});two.turn=1;await page.evaluate(g=>{localStorage.setItem('max-yutnori-native-v4',JSON.stringify(g));},two);await page.reload();await ready();await stable();assert.equal(await page.locator('#scores .team').count(),2);assert.ok(await page.locator('#team1 .turn-marker').isVisible());assert.ok(await page.evaluate(()=>{const a=document.querySelector('#team0').getBoundingClientRect(),b=document.querySelector('#team1').getBoundingClientRect();return a.right<innerWidth/2&&b.left>innerWidth/2;}));
 report.checks.push('Two-team saves keep one team on each side and identify the current player');
 await recallViewScenario(page,ready,report);
}

export async function recallViewScenario(page,ready,report){
 const g=createGame({teams:Array.from({length:4},(_,i)=>({players:[{name:`Équipe ${i+1}`,computer:false,level:2,aggression:50}]}))});g.phase='move';g.pending=[2];
 await page.evaluate(g=>{localStorage.setItem('max-yutnori-native-v4',JSON.stringify(g));localStorage.setItem('max-yutnori-settings-v3',JSON.stringify({auto:false,reduced:true,low:true,music:false,actionCamera:true}));},g);await page.reload();await ready();
 await page.locator('#pieces button').first().click();await page.waitForFunction(()=>window.maxYutDiagnostic().camera.phase==='follow');
 // Real native-menu interaction: selectOption synthesizes change even when the
 // value is already selected, hiding a regression in re-calling Plateau.
 await page.locator('#viewMode').click();await page.keyboard.press('Home');await page.keyboard.press('Enter');await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
 assert.equal((await page.evaluate(()=>window.maxYutDiagnostic())).camera.phase,'idle','choosing Plateau again must cancel action-camera following');
 report.checks.push('Real native menu can recall the current Plateau view after following a pawn');
}
