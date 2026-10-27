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
 result.landDistortion=[];
 for(const [x,y]of [[720,420],[780,510],[930,500],[620,390],[1200,445],[920,560],[452,478],[520,240]]){
  await page.evaluate(([x,y])=>window.panoramaProbe.aim(x/1536,y/768),[x,y]);const phases=await page.evaluate(()=>window.panoramaProbe.distortion());
  result.landDistortion.push({x,y,phases});assert.ok(phases.every(p=>p.meanDelta===0),'land must have no geometric deformation '+JSON.stringify({x,y,phases}));
 }
 await page.evaluate(()=>window.panoramaProbe.aim(910/1536,455/768));result.waterDistortion=await page.evaluate(()=>window.panoramaProbe.distortion());
 assert.ok(result.waterDistortion.some(p=>p.meanDelta>.1),'water itself must retain refraction');
 // The old v0.8.3 wave shader is frozen: compare actual rendered pixels
 // frame-for-frame at the centre of the known water channel.
 await page.evaluate(()=>window.panoramaProbe.aim(910/1536,455/768));
 result.frozenLake=await page.evaluate(()=>window.panoramaProbe.compareLakeV083());
 assert.ok(result.frozenLake.every(p=>p.meanDelta===0),
  '0.8.3 lake wave pixels MUST remain identical: '+JSON.stringify(result.frozenLake));
 for(const [name,u,v]of [['water',.52,.565],['waterfall',.079,.719],['mist',.53,.73],['clouds',520/1536,240/768],['lamps',.04,.51],['seam',.001,.70]]){
  await page.evaluate(([u,v])=>window.panoramaProbe.aim(u,v),[u,v]);result[name]=await page.evaluate(()=>window.panoramaProbe.compare());await page.screenshot({path:resolve(output,'native-panorama-'+name+'.png')});
  if(name!=='seam')assert.ok(result[name].meanDelta>.15,name+' must visibly change actual rendered pixels');
 }
 // Isolate only the new low-cloud layer using a zero-density copy of its
 // static map in this test fixture, without adding hooks to product classes.
 await page.evaluate(()=>window.panoramaProbe.aim(1050/1536,636/768));
 result.lowClouds=await page.evaluate(()=>window.panoramaProbe.lowCloudCompare());
 assert.ok(result.lowClouds.contribution>.5,'independent low clouds must be visible over the lake valleys');
 assert.ok(result.lowClouds.advection>.2,'the low-cloud layer must drift, not merely reuse old waterfall animation');
 assert.equal(result.lowClouds.drawCalls,1,'low clouds must keep the existing single panorama draw');
 assert.ok(result.lowClouds.textureBytes<=131072,'four packed channels remain within 128 KiB');
 result.lowCloudsLight=await page.evaluate(()=>window.panoramaProbe.lowCloudCompare(false,true));
 assert.ok(result.lowCloudsLight.contribution>.2&&result.lowCloudsLight.advection>.1);
 for(const time of [0,12]){await page.evaluate(t=>window.panoramaProbe.showTime(t),time);await page.screenshot({path:resolve(output,'native-low-clouds-'+time+'.png')});}
 result.preservedWaterfalls=[];
 for(const [u,v]of [[.079,.719],[.230,.717],[.294,.580],[.600,.746],[.822,.721],[.946,.728]]){
  await page.evaluate(([u,v])=>window.panoramaProbe.aim(u,v),[u,v]);const sample=await page.evaluate(()=>window.panoramaProbe.lowCloudCompare(true));
  assert.equal(sample.contribution,0,'the new low clouds must leave waterfall/spray cores pixel-identical');
  const reference=await page.evaluate(()=>window.panoramaProbe.compareReference());result.preservedWaterfalls.push({u,v,...sample,reference});
 }
 result.annotatedRegions=[];
 // Just beyond the third fall: preserve a soft transition from its legacy
 // water contribution instead of an abrupt ellipse-shaped animated edge.
 await page.evaluate(()=>window.panoramaProbe.aim(.294,.580+.043*1.005));
 result.waterfallBoundary=await page.evaluate(()=>window.panoramaProbe.compareReference(4,true));
 for(const [name,x,y,channel,active]of [
  ['valley-left',32,345,1,true],['valley-back',810,360,1,true],['valley-front',350,644,1,true],['valley-right',1200,645,1,true],
  ['sky-left',180,268,2,true],['sky-middle',520,240,2,true],['sky-right',1410,220,2,true],
  ['water-main',1110,475,3,true],['water-channel',616,420,3,true],
  ['island-right',1200,445,3,false],['islet',1005,490,3,false],['shore',920,560,3,false],['moon',1110,250,2,false],['stars',780,135,2,false]
 ]){
  await page.evaluate(([x,y])=>window.panoramaProbe.aim(x/1536,y/768),[x,y]);const sample=await page.evaluate(c=>window.panoramaProbe.lowCloudCompare(true,false,c),channel);
  if(active){assert.ok(sample.contribution>.1,name+' must be visible: '+JSON.stringify(sample));assert.ok(sample.advection>.03,name+' must move: '+JSON.stringify(sample));}
  else assert.equal(sample.contribution,0,name+' must remain outside the new effect');
  result.annotatedRegions.push({name,x,y,channel,active,...sample});
 }
 const overview=await page.evaluate(()=>window.panoramaProbe.maskOverview());await writeFile(resolve(output,'native-panorama-zone-masks.png'),Buffer.from(overview.split(',')[1],'base64'));
 result.reducedStill=await page.evaluate(()=>window.panoramaProbe.still());assert.equal(result.reducedStill,true);assert.deepEqual(errors,[]);
 await writeFile(resolve(output,'native-panorama-animation.json'),JSON.stringify(result,null,2)+'\n');console.log('PASS: land UVs fixed at five phases, water still refracts; fog/clouds/falls animate, one draw, 128 KiB; reduced mode identical');
}finally{await browser?.close();server?.close();await rm(scratch,{recursive:true,force:true});}
