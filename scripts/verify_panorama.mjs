// Render the production shader itself: an advancing diagnostic clock alone is
// insufficient evidence that water, falls and mist actually move on screen.
import {build} from 'vite';
import {chromium} from 'playwright';
import {createServer} from 'node:http';
import {readFile,writeFile,mkdir,mkdtemp,rm} from 'node:fs/promises';
import {resolve} from 'node:path';
import {tmpdir} from 'node:os';
import {pathToFileURL} from 'node:url';
import assert from 'node:assert/strict';
const output=resolve('temp');await mkdir(output,{recursive:true});
const scratch=await mkdtemp(resolve(tmpdir(),'max-yut-panorama-'));
let browser,server;
try{
 await build({configFile:false,build:{lib:{entry:resolve('scripts/fixtures/panorama-render.js'),formats:['es'],fileName:()=> 'entry.js'},outDir:scratch,emptyOutDir:true,minify:true},logLevel:'error'});
 server=createServer(async(req,res)=>{try{if(req.url==='/'){res.setHeader('Content-Type','text/html');res.end('<canvas></canvas><script type="module" src="/entry.js"></script>');return;}const picture=req.url==='/image.png';res.setHeader('Content-Type',picture?'image/png':'application/javascript');res.end(await readFile(picture?resolve('web/public/art/moonlit-panorama.png'):resolve(scratch,'entry.js')));}catch{res.writeHead(404);res.end();}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 let executablePath=process.env.CHROME_PATH||'/usr/bin/google-chrome',args=['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader'];
 if(process.env.SPARTICUZ_MODULE){const {default:c}=await import(pathToFileURL(resolve(process.env.SPARTICUZ_MODULE)));executablePath=await c.executablePath();args=[...c.args,'--enable-unsafe-swiftshader'];}
 browser=await chromium.launch({executablePath,args});const page=await browser.newPage({viewport:{width:500,height:300}}),errors=[];page.on('pageerror',e=>errors.push(String(e)));
 await page.goto('http://127.0.0.1:'+server.address().port);await page.waitForFunction(()=>window.__probeReady);
 const result={};
 for(const [name,u,v]of [['water',.52,.565],['waterfall',.079,.719],['mist',.53,.73],['clouds',.52,.15],['lamps',.04,.51],['seam',.001,.70]]){
  await page.evaluate(([u,v])=>window.panoramaProbe.aim(u,v),[u,v]);result[name]=await page.evaluate(()=>window.panoramaProbe.compare());await page.screenshot({path:resolve(output,'native-panorama-'+name+'.png')});
  if(name!=='seam')assert.ok(result[name].meanDelta>.15,name+' must visibly change actual rendered pixels');
 }
 // Isolate only the new low-cloud layer using a zero-density copy of its
 // static map in this test fixture, without adding hooks to product classes.
 await page.evaluate(()=>window.panoramaProbe.aim(.50,.63));
 result.lowClouds=await page.evaluate(()=>window.panoramaProbe.lowCloudCompare());
 assert.ok(result.lowClouds.contribution>.5,'independent low clouds must be visible over the lake valleys');
 assert.ok(result.lowClouds.advection>.2,'the low-cloud layer must drift, not merely reuse old waterfall animation');
 assert.equal(result.lowClouds.drawCalls,1,'low clouds must keep the existing single panorama draw');
 assert.ok(result.lowClouds.textureBytes<=65536,'low-cloud density remains within 64 KiB');
 result.lowCloudsLight=await page.evaluate(()=>window.panoramaProbe.lowCloudCompare(false,true));
 assert.ok(result.lowCloudsLight.contribution>.2&&result.lowCloudsLight.advection>.1);
 for(const time of [0,12]){await page.evaluate(t=>window.panoramaProbe.showTime(t),time);await page.screenshot({path:resolve(output,'native-low-clouds-'+time+'.png')});}
 result.preservedWaterfalls=[];
 for(const [u,v]of [[.079,.719],[.230,.717],[.294,.580],[.600,.746],[.822,.721],[.946,.728]]){
  await page.evaluate(([u,v])=>window.panoramaProbe.aim(u,v),[u,v]);const sample=await page.evaluate(()=>window.panoramaProbe.lowCloudCompare(true));
  assert.equal(sample.contribution,0,'the new low clouds must leave waterfall/spray cores pixel-identical');result.preservedWaterfalls.push({u,v,...sample});
 }
 result.reducedStill=await page.evaluate(()=>window.panoramaProbe.still());assert.equal(result.reducedStill,true);assert.deepEqual(errors,[]);
 await writeFile(resolve(output,'native-panorama-animation.json'),JSON.stringify(result,null,2)+'\n');console.log('PASS: panorama and low clouds move; six waterfall cores unchanged, one draw, 64 KiB; reduced mode identical');
}finally{await browser?.close();server?.close();await rm(scratch,{recursive:true,force:true});}
