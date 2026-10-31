import assert from 'node:assert/strict';
export async function webInstallLanguageScenario(browser,page,url,report){
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
 for(const [locale,want,menu] of [['ko-KR','ko','홈 화면에 추가'],['es-ES','en','Add to Home Screen']]){
  const context=await browser.newContext({viewport:{width:390,height:844},locale,userAgent:'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1'});
  try{
   await context.route('https://api.github.com/**',r=>r.fulfill({json:[]}));
   const guidePage=await context.newPage();guidePage.setDefaultTimeout(90000);guidePage.on('pageerror',e=>report.errors.push(String(e)));
   await guidePage.goto(url);await guidePage.waitForFunction(()=>window.__gameReady);
   await guide(guidePage);
   assert.equal(await guidePage.locator('#installGuide').getAttribute('lang'),want);
   assert.match(await guidePage.locator('#installGuideSteps').innerText(),new RegExp(menu));
   if(want==='en')assert.doesNotMatch(await guidePage.locator('#installGuideSteps').innerText(),/[가-힣]/);
   await guidePage.screenshot({path:'test-results/pwa-install-'+want+'.png'});
  }finally{await context.close();}
 }
 report.checks.push('Real browser locale chooses Korean iPhone guide or English fallback for unsupported languages');
}
