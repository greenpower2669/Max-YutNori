// Supplemental DOM/API-boundary checks; native OS installation is not exercised.
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const source=(await readFile(new URL('../../web/pwa/client.js',import.meta.url),'utf8')).replace(/^import .*;\n/gm,'');
import * as languageModule from '../../web/pwa/install-language.mjs';
export function client({ua='',platform='',touch=0,language='fr',languages=[],storage=new Map(),standalone=false,iosStandalone=false,fullscreen='unsupported',lockDenied=false}={}){
 const elements=new Map(),events=new Map(),calls=[];
 const localStorage=storage instanceof Map?{getItem:key=>storage.get(key)??null,setItem:(key,value)=>storage.set(key,String(value)),removeItem:key=>storage.delete(key)}:storage;
 class Element{
  constructor(){this.hidden=false;this.open=false;this.dataset={};}
  set id(v){this._id=v;elements.set(v,this);}get id(){return this._id;}
  set innerHTML(v){this.html=v;for(const [,id] of v.matchAll(/id="([^"]+)"/g))if(!elements.has(id)){const e=new Element();e.id=id;}}
  get innerHTML(){return this.html;}
  setAttribute(name,value){this[name]=value;}append(){}insertAdjacentElement(){}addEventListener(){}
  showModal(){this.open=true;}close(){this.open=false;}
 }
 for(const id of ['pause','settings']){const e=new Element();e.id=id;}
 const document={createElement:()=>new Element(),getElementById:id=>elements.get(id),body:new Element(),baseURI:'https://game.test/',addEventListener(){}};
 document.documentElement={};document.fullscreenElement=null;
 if(fullscreen!=='unsupported')document.documentElement.requestFullscreen=async()=>{
  calls.push('request');if(fullscreen==='refused')throw Error('fullscreen denied');
  await Promise.resolve();document.fullscreenElement=document.documentElement;calls.push('entered');
 };
 document.exitFullscreen=async()=>{calls.push('exit');document.fullscreenElement=null;};
 const screen={orientation:{lock:async orientation=>{calls.push('lock:'+orientation);if(lockDenied)throw Error('orientation denied');}}};
 const navigator={userAgent:ua,platform,maxTouchPoints:touch,language,languages,standalone:iosStandalone,onLine:false,storage:{persist:async()=>true}};
 vm.runInNewContext(source,{...languageModule,localStorage,document,navigator,screen,window:{addEventListener:(name,fn)=>events.set(name,fn)},matchMedia:q=>({matches:standalone&&q==='(display-mode: standalone)'}),MutationObserver:class{observe(){}},setInterval(){},isSecureContext:true,URL,fetch:async()=>{throw Error('network forbidden');},checkVersions:async()=>({status:'Vérification impossible',detail:'offline fixture'}),validateVersion:v=>v,canApplyUpdate:()=>false,__WEB_VERSION__:{engineVersion:'0.8.8',pwaVersion:'0.1.0',build:6,commit:'1'.repeat(40)}});
 return {get:id=>elements.get(id),events,calls,document,navigator,storage};
}
