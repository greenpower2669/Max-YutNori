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
 result.reducedStill=await page.evaluate(()=>window.panoramaProbe.still());assert.equal(result.reducedStill,true);assert.deepEqual(errors,[]);
 await writeFile(resolve(output,'native-panorama-animation.json'),JSON.stringify(result,null,2)+'\n');console.log('PASS: real panorama pixels move in five regions; reduced animation is identical');
}finally{await browser?.close();server?.close();await rm(scratch,{recursive:true,force:true});}
