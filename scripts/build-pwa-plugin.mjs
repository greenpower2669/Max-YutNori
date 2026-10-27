import {readFile,writeFile,readdir,stat,mkdir,unlink} from 'node:fs/promises';
import {resolve,relative} from 'node:path';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {validateVersion} from '../web/pwa/version.mjs';
export function webPwaPlugin(){
 let version,root;
 return {
  name:'max-yutnori-pwa',
  async config(config){
   root=resolve(config.root,'..');const release=JSON.parse(await readFile(resolve(root,'web-release.json'))),pkg=JSON.parse(await readFile(resolve(root,'package.json')));
   const commit=process.env.WEB_COMMIT||execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();
   version=validateVersion({schema:1,product:'max-yutnori',channel:'web-pwa',pwaVersion:release.pwaVersion,build:release.build,engineVersion:pkg.version,commit});
   return {define:{__WEB_VERSION__:JSON.stringify(version)}};
  },
  transform(code,id){
   if(!id.endsWith('/web/src/audio.js'))return;
   const original="new Audio('./audio/ariranlike25102026.mp3')";
   if(!code.includes(original))throw Error('Le transport audio Web doit être réexaminé : source audio modifiée');
   return "import {createWebMusic} from '../pwa/music.mjs';\n"+code.replace(original,'createWebMusic()');
  },
  transformIndexHtml:{order:'pre',handler(){return [
   {tag:'link',attrs:{rel:'manifest',href:'./manifest.webmanifest'},injectTo:'head'},
   {tag:'link',attrs:{rel:'apple-touch-icon',href:'./pwa/icon-192.png'},injectTo:'head'},
   {tag:'meta',attrs:{name:'apple-mobile-web-app-capable',content:'yes'},injectTo:'head'},
   {tag:'meta',attrs:{name:'description',content:'Max YutNori de Fab : jouez aux quatre bâtonnets en 3D, sur votre téléphone ou ordinateur.'},injectTo:'head'},
   {tag:'script',attrs:{type:'module',src:'./pwa/client.js'},injectTo:'body'}
  ];}},
  async closeBundle(){
   const dir=resolve(root,'pwa-dist');
   const musicPath=resolve(dir,'audio/ariranlike25102026.mp3'),music=await readFile(musicPath),parts=[];
   for(let offset=0,i=0;offset<music.length;offset+=8*1024*1024,i++){const bytes=music.subarray(offset,offset+8*1024*1024),path='music-part-'+String(i).padStart(3,'0')+'.bin';await writeFile(resolve(dir,'audio',path),bytes);parts.push({path,size:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')});}
   await writeFile(resolve(dir,'audio/music-parts.json'),JSON.stringify({size:music.length,sha256:createHash('sha256').update(music).digest('hex'),parts},null,2)+'\n');await unlink(musicPath);
   await writeFile(resolve(dir,'web-version.json'),JSON.stringify(version,null,2)+'\n');
   const manifest={id:'./',name:'Max YutNori',short_name:'YutNori',description:'Le jeu de yutnori de Fab, en 3D et hors ligne.',lang:'fr',dir:'ltr',start_url:'./',scope:'./',display:'standalone',display_override:['fullscreen','standalone'],orientation:'landscape',background_color:'#102b28',theme_color:'#102b28',categories:['games'],icons:[{src:'./pwa/icon-192.png',sizes:'192x192',type:'image/png',purpose:'any'},{src:'./pwa/icon-512.png',sizes:'512x512',type:'image/png',purpose:'any'},{src:'./pwa/maskable-512.png',sizes:'512x512',type:'image/png',purpose:'maskable'}]};
   await writeFile(resolve(dir,'manifest.webmanifest'),JSON.stringify(manifest,null,2)+'\n');
   const files=[];async function scan(folder){for(const item of await readdir(folder)){const f=resolve(folder,item);if((await stat(f)).isDirectory())await scan(f);else files.push(f);}}await scan(dir);files.sort();
   const hash=createHash('sha256');for(const f of files){hash.update(relative(dir,f));hash.update(await readFile(f));}
   const id=hash.digest('hex').slice(0,24),paths=files.map(f=>'./'+relative(dir,f).split('\\').join('/'));
   const template=await readFile(resolve(root,'web/pwa/sw-template.js'),'utf8');await writeFile(resolve(dir,'sw.js'),template.replace('__CACHE_ID__',id).replace('__PRECACHE__',JSON.stringify(paths)));
   await writeFile(resolve(dir,'_headers'),'/sw.js\n  Cache-Control: no-cache\n/web-version.json\n  Cache-Control: no-store\n/index.html\n  Cache-Control: no-cache\n/manifest.webmanifest\n  Content-Type: application/manifest+json\n');
  }
 };
}
