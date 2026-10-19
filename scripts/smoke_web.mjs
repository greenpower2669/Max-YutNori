// Real Unity startup test; all non-local requests are blocked.
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
const require = createRequire(import.meta.url);
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assets = path.join(root, 'android/app/src/main/assets/game');
const output = path.join(root, 'temp');
fs.mkdirSync(output, {recursive:true});
const missing = [];
const external = [];
const errors = [];
const logs = [];
const server = http.createServer((request, response) => {
  const name = decodeURIComponent(new URL(request.url, 'http://localhost').pathname).replace(/^\//, '');
  const file = path.resolve(assets, name || 'index.html');
  if (!file.startsWith(assets + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    if (name !== 'favicon.ico') missing.push(name);
    response.writeHead(404); response.end(); return;
  }
  const mime = {'.wasm':'application/wasm','.js':'application/javascript','.html':'text/html'}[path.extname(file)] || 'application/octet-stream';
  response.writeHead(200, {'Content-Type':mime}); fs.createReadStream(file).pipe(response);
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
let browser;
try {
  browser = await chromium.launch({channel:process.env.CHROME_CHANNEL || 'chrome', headless:true,
    args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  const context = await browser.newContext({viewport:{width:960,height:600}, hasTouch:true, deviceScaleFactor:1});
  await context.route('**/*', route => {
    if (route.request().url().startsWith(origin + '/')) return route.continue();
    external.push(route.request().url().split('?')[0]); return route.abort();
  });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(String(error)));
  page.on('console', message => logs.push(message.text()));
  await page.goto(origin + '/index.html');
  await page.waitForFunction(() => window.__gameReady || window.__gameError, null, {timeout:120000});
  const state = await page.evaluate(() => ({ready:window.__gameReady,error:window.__gameError}));
  if (!state.ready || state.error) throw new Error(JSON.stringify(state));
  await page.waitForTimeout(10000);
  await page.screenshot({path:path.join(output, 'web-startup.png')});
  const lateError = await page.evaluate(() => window.__gameError);
  if (lateError || errors.length || missing.length || external.length) {
    throw new Error(JSON.stringify({lateError,errors,missing,external}));
  }
  fs.writeFileSync(path.join(output, 'web-smoke.json'), JSON.stringify({ready:true,external,missing,errors,logs},null,2));
  console.log('PASS: real Unity game starts, renders for 10 seconds, no external request or missing asset.');
} finally {
  fs.writeFileSync(path.join(output, 'web-console.txt'), logs.join('\n'));
  if (browser) await browser.close();
  server.close();
}
