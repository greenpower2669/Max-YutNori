import {compareSemver} from './version.mjs';
// Fill only after the exact official listing and its versions have been verified.
// An Android GitHub APK release does not prove Google Play or App Store publication.
export const STORE_CATALOG={schema:1,product:'max-yutnori',android:null,ios:null};
export const STORE_OFFER_KEY='max-yutnori-store-offer-v1';
export function getStoreOffer(catalog,platform,webEngineVersion){
 try{
  if(catalog?.schema!==1||catalog.product!=='max-yutnori'||!['android','ios'].includes(platform))return null;
  const entry=catalog[platform];
  if(!entry||entry.published!==true||typeof entry.verifiedAt!=='string'||!/^\d{4}-\d{2}-\d{2}T/.test(entry.verifiedAt)||!Number.isFinite(Date.parse(entry.verifiedAt)))return null;
  compareSemver(entry.version,entry.version);
  if(compareSemver(entry.engineVersion,webEngineVersion)<0)return null;
  if(typeof entry.url!=='string')return null;
  const url=new URL(entry.url);
  if(url.protocol!=='https:'||url.port||url.username||url.password||url.hash)return null;
  if(platform==='android'){
   if(entry.packageId!=='fr.fab.maxyutnori'||url.hostname!=='play.google.com'||url.pathname!=='/store/apps/details'||url.searchParams.getAll('id').length!==1||url.searchParams.get('id')!==entry.packageId)return null;
  }else if(typeof entry.appId!=='string'||!/^\d{6,20}$/.test(entry.appId)||url.hostname!=='apps.apple.com'||!/^\/(?:[a-z]{2}\/)?app\/(?:[^/]+\/)?id\d+$/.test(url.pathname)||!url.pathname.endsWith('/id'+entry.appId))return null;
  return {platform,url:url.href,version:entry.version,engineVersion:entry.engineVersion,store:platform==='android'?'Google Play':'App Store'};
 }catch{return null;}
}
