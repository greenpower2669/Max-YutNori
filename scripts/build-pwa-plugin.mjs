import {readFile,writeFile,readdir,stat} from 'node:fs/promises';
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
  transformIndexHtml:{order:'pre',handler(){return [
   {tag:'link',attrs:{rel:'manifest',href:'./manifest.webmanifest'},injectTo:'head'},
   {tag:'link',attrs:{rel:'apple-touch-icon',href:'./pwa/icon-192.png'},injectTo:'head'},
   {tag:'meta',attrs:{name:'apple-mobile-web-app-capable',content:'yes'},injectTo:'head'},
   {tag:'meta',attrs:{name:'description',content:'Max YutNori de Fab : jouez aux quatre bâtonnets en 3D, sur votre téléphone ou ordinateur.'},injectTo:'head'},
   {tag:'script',attrs:{type:'module',src:'./pwa/client.js'},injectTo:'body'}
  ];}},
  async closeBundle(){
   const dir=resolve(root,'pwa-dist');await writeFile(resolve(dir,'web-version.json'),JSON.stringify(version,null,2)+'\n');
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
