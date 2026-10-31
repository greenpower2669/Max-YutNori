import assert from 'node:assert/strict';
export async function webInstallLanguageScenario(browser,page,url,report){
 const mainContext=page.context();
 async function guide(p){await p.getByRole('button',{name:'Pause',exact:true}).click();await p.locator('#installSteps').click();}
 // The main context uses a real French browser locale; no language API is replaced.
 await guide(page);
 assert.equal(await page.locator('#installGuide').getAttribute('lang'),'fr');
 assert.doesNotMatch(await page.locator('#installGuideSteps').innerText(),/[가-힣]/);
 const before=await page.evaluate(()=>localStorage.getItem('max-yutnori-native-v4'));
 await page.locator('#installLanguage').selectOption('ko');
 assert.equal(await page.locator('#installGuide').getAttribute('lang'),'ko');
 assert.match(await page.locator('#closeInstallGuide').innerText(),/게임/);
 await page.locator('#closeInstallGuide').click();
 await page.reload();await page.waitForFunction(()=>window.__gameReady);
 assert.equal(await page.locator('#installShortcut').innerText(),'📲 설치');
 assert.equal(await page.evaluate(()=>localStorage.getItem('max-yutnori-native-v4')),before);
 await guide(page);await page.locator('#installLanguage').selectOption('en');
 assert.match(await page.locator('#installGuideSteps').innerText(),/Chrome or Edge/);
 await page.locator('#installLanguage').selectOption('auto');
 assert.equal(await page.locator('#installGuide').getAttribute('lang'),'fr');
 await page.locator('#closeInstallGuide').click();
 await page.getByRole('button',{name:'Reprendre la partie',exact:true}).click();
 report.checks.push('Manual installation language persists across reload, returns to automatic and preserves exact game save');
 // Run locale renderers sequentially; keep the original context's cache and saves.
 await page.close();
 for(const [locale,want,menu] of [['ko-KR','ko','홈 화면에 추가'],['es-ES','en','Add to Home Screen']]){
  const context=await browser.newContext({viewport:{width:390,height:844},locale,userAgent:'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1'});
  let guidePage;const diagnostic={locale,stage:'context',errors:[],requests:[]};
  try{
   await context.route('https://api.github.com/**',r=>r.fulfill({json:[]}));
   guidePage=await context.newPage();guidePage.setDefaultTimeout(90000);guidePage.on('pageerror',e=>{report.errors.push(String(e));diagnostic.errors.push(String(e));});
   guidePage.on('console',m=>{if(m.type()==='error')diagnostic.errors.push(m.text().slice(0,500));});
   guidePage.on('requestfailed',r=>diagnostic.requests.push({url:r.url(),error:r.failure()?.errorText}));
   diagnostic.stage='navigate';await guidePage.goto(url);diagnostic.stage='game-ready';await guidePage.waitForFunction(()=>window.__gameReady);
   diagnostic.stage='guide';
   await guide(guidePage);
   assert.equal(await guidePage.locator('#installGuide').getAttribute('lang'),want);
   assert.match(await guidePage.locator('#installGuideSteps').innerText(),new RegExp(menu));
   if(want==='en')assert.doesNotMatch(await guidePage.locator('#installGuideSteps').innerText(),/[가-힣]/);
   await guidePage.screenshot({path:'test-results/pwa-install-'+want+'.png'});
  }catch(error){
   try{diagnostic.page=await guidePage?.evaluate(()=>({url:location.href,ready:!!window.__gameReady,loading:document.getElementById('loading')?.innerText,body:document.body.innerText.slice(-1500),language:navigator.language,languages:navigator.languages}));console.log(JSON.stringify({installationFailure:diagnostic}));await guidePage?.screenshot({path:'test-results/pwa-install-failure.png',timeout:5000});}catch{}
   report.installationFailure=diagnostic;throw error;
  }finally{await context.close();}
 }
 report.checks.push('Real browser locale chooses Korean iPhone guide or English fallback for unsupported languages');
 const restored=await mainContext.newPage();restored.setDefaultTimeout(60000);restored.on('pageerror',e=>report.errors.push(String(e)));
 await restored.goto(url);await restored.waitForFunction(()=>window.__gameReady);
 return restored;
}
