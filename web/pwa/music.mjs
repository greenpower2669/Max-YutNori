// Transport only: reassemble the approved MP3 bytes without transcoding.
const hex=bytes=>Array.from(new Uint8Array(bytes),n=>n.toString(16).padStart(2,'0')).join('');
export async function assembleMusic(fetcher=fetch,manifestURL=new URL('./audio/music-parts.json',document.baseURI),cryptoAPI=crypto){
 const response=await fetcher(manifestURL);if(!response.ok)throw Error('Manifeste musique indisponible');const m=await response.json();
 if(!Number.isSafeInteger(m.size)||m.size<1||!/^[a-f0-9]{64}$/.test(m.sha256)||!Array.isArray(m.parts)||!m.parts.length)throw Error('Manifeste musique invalide');
 const buffers=[];let length=0;
 for(const p of m.parts){
  if(!/^music-part-\d{3}\.bin$/.test(p.path)||!Number.isSafeInteger(p.size)||p.size<1||!/^[a-f0-9]{64}$/.test(p.sha256))throw Error('Fragment musique invalide');
  const r=await fetcher(new URL(p.path,manifestURL));if(!r.ok)throw Error('Fragment musique indisponible');const bytes=await r.arrayBuffer();
  if(bytes.byteLength!==p.size||hex(await cryptoAPI.subtle.digest('SHA-256',bytes))!==p.sha256)throw Error('Fragment musique corrompu');buffers.push(bytes);length+=bytes.byteLength;
 }
 const blob=new Blob(buffers,{type:'audio/mpeg'});
 if(length!==m.size||hex(await cryptoAPI.subtle.digest('SHA-256',await blob.arrayBuffer()))!==m.sha256)throw Error('Musique incomplète');return blob;
}
export function createWebMusic(){
 const audio=new Audio(),play=audio.play.bind(audio),pause=audio.pause.bind(audio);let requested=false;
 const ready=assembleMusic().then(blob=>{audio.src=URL.createObjectURL(blob);});
 ready.catch(()=>window.dispatchEvent(new Event('max-yut-music-error')));
 audio.play=async()=>{requested=true;await ready;if(requested)return play();};
 audio.pause=()=>{requested=false;pause();};return audio;
}
