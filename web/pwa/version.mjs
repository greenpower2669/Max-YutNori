const REPO='greenpower2669/Max-YutNori';
const SEMVER=/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/;
function parse(v){
 const m=typeof v==='string'&&v.match(SEMVER);if(!m)throw Error('Version invalide');
 const pre=m[4]?.split('.')||[];if(pre.some(s=>/^\d+$/.test(s)&&s.length>1&&s[0]==='0'))throw Error('Préversion invalide');
 return {nums:m.slice(1,4).map(BigInt),pre};
}
export function compareSemver(a,b){
 const x=parse(a),y=parse(b);for(let i=0;i<3;i++)if(x.nums[i]!==y.nums[i])return x.nums[i]>y.nums[i]?1:-1;
 if(!x.pre.length||!y.pre.length)return x.pre.length===y.pre.length?0:x.pre.length?-1:1;
 for(let i=0;i<Math.max(x.pre.length,y.pre.length);i++){
  const u=x.pre[i],v=y.pre[i];if(u===v)continue;if(u===undefined)return -1;if(v===undefined)return 1;
  const un=/^\d+$/.test(u),vn=/^\d+$/.test(v);if(un&&vn)return BigInt(u)>BigInt(v)?1:-1;if(un!==vn)return un?-1:1;return u>v?1:-1;
 }return 0;
}
export function validateVersion(m){
 if(!m||m.schema!==1||m.product!=='max-yutnori'||m.channel!=='web-pwa'||!Number.isSafeInteger(m.build)||m.build<1||typeof m.commit!=='string'||!/^[a-f0-9]{40}$/.test(m.commit))throw Error('Manifeste Web invalide');
 parse(m.pwaVersion);parse(m.engineVersion);return m;
}
export function compareBuilds(current,candidate){
 validateVersion(current);validateVersion(candidate);const order=compareSemver(candidate.pwaVersion,current.pwaVersion);
 if(candidate.build===current.build){if(order!==0||candidate.commit!==current.commit||candidate.engineVersion!==current.engineVersion)throw Error('Identifiant de build réutilisé');return 'current';}
 if(candidate.build>current.build){if(order<0)throw Error('Version/build incohérents');return 'update';}
 if(order>0)throw Error('Version/build incohérents');return 'older';
}
export function selectWebRelease(releases){
 if(!Array.isArray(releases))throw Error('Réponse GitHub invalide');let latest=null;
 for(const r of releases){
  if(r.draft||r.prerelease||typeof r.tag_name!=='string'||!r.tag_name.startsWith('web-v'))continue;
  const marker=r.body?.match(/<!-- max-yutnori-web-version:\s*(\{[^\n]*\})\s*-->/);
  if(!marker||!r.assets?.some(a=>a.name==='web-version.json'&&a.state==='uploaded'))throw Error('Publication Web incomplète');
  const m=validateVersion(JSON.parse(marker[1]));if(r.tag_name!=='web-v'+m.pwaVersion)throw Error('Tag Web incohérent');
  if(!latest||compareBuilds(latest,m)==='update')latest=m;
 }return latest;
}
export async function checkVersions(current,fetcher=fetch,manifestURL=new URL('./web-version.json',globalThis.location?.href),online=globalThis.navigator?.onLine??true){
 if(!online)return {status:'Vérification impossible',hostReady:false,detail:'Hors ligne : reconnectez-vous pour vérifier les versions.'};
 try{
  validateVersion(current);const get=async url=>{const r=await fetcher(url,{cache:'no-store',signal:AbortSignal.timeout(12000),headers:{Accept:'application/json'}});if(!r.ok)throw Error('HTTP '+r.status);return r.json();};
  const host=validateVersion(await get(manifestURL));const releases=[];let complete=false;
  for(let page=1;page<=10;page++){
   const items=await get(`https://api.github.com/repos/${REPO}/releases?per_page=100&page=${page}`);if(!Array.isArray(items))throw Error('Réponse GitHub invalide');releases.push(...items);if(items.length<100){complete=true;break;}
  }
  if(!complete)throw Error('Liste GitHub trop longue');const published=selectWebRelease(releases);if(published)compareBuilds(host,published);
  const hostOrder=compareBuilds(current,host),publishedOrder=published?compareBuilds(current,published):'older';
  const available=hostOrder==='update'||publishedOrder==='update';
  return {status:available?'Mise à jour disponible':'À jour',hostReady:hostOrder==='update',host,published,detail:available?(hostOrder==='update'?'Une version est prête sur ce site.':'Une version Web est publiée sur GitHub ; ce site doit encore être déployé.'):published?'Versions Web vérifiées.':'Version de test : aucune release Web publiée.'};
 }catch(error){return {status:'Vérification impossible',hostReady:false,detail:'Réessayez avec une connexion réseau. '+String(error.message||error)};}
}

export function canApplyUpdate(d,ready){return !!(ready&&d?.paused&&!d.rolling&&['ready','hidden'].includes(d.bowl?.phase));}
