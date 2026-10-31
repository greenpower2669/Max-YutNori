import {checkVersions,validateVersion,canApplyUpdate} from './version.mjs';
import './pwa.css';
const $=id=>document.getElementById(id);
const panel=document.createElement('section');panel.id='webApp';panel.setAttribute('aria-label','Installation et mises à jour');
panel.innerHTML=`<h2>Max YutNori · Web</h2><p id="webVersion">Lecture de la version…</p><p id="offlineStatus" role="status">Préparation du jeu hors ligne…</p><p id="versionStatus" role="status">Vérification des versions…</p><p id="versionDetail" class="hint"></p><div class="web-actions"><button id="installWeb">Installer le jeu</button><button id="fullscreenWeb">Plein écran</button><button id="checkWeb">Vérifier les mises à jour</button><button id="updateWeb" hidden>Actualiser le jeu</button></div><p id="installHelp" class="hint">Android : menu du navigateur → Installer l’application ou Ajouter à l’écran d’accueil. Ordinateur : icône d’installation près de l’adresse dans Chrome ou Edge. iPhone/iPad : Safari → Partager → Sur l’écran d’accueil. Les possibilités dépendent du navigateur.</p><p id="webActionStatus" role="status"></p><p class="hint">La partie reste sauvegardée dans ce navigateur. Gardez les données du site pour la retrouver. L’APK et les autres navigateurs ont leurs propres sauvegardes.</p><p><a id="androidDownload" href="https://github.com/greenpower2669/Max-YutNori/releases/tag/v0.8.8" target="_blank" rel="noopener">Télécharger la version Android</a></p>`;
$('pause').append(panel);
// Installation entry point outside Pause, available only in the Web/PWA build.
const shortcut=document.createElement('button');
shortcut.id='installShortcut';shortcut.type='button';
shortcut.textContent=/^ko(?:-|$)/i.test(navigator.language||'')?'📲 설치':'📲 Installer';
shortcut.setAttribute('aria-label','Installer Max YutNori sur cet appareil');
document.body.append(shortcut);
const installGuide=document.createElement('dialog');
installGuide.id='installGuide';
installGuide.setAttribute('aria-label',"Aide à l’installation de Max YutNori");
installGuide.innerHTML='<h1>Installer Max YutNori</h1><div id="installGuideSteps"></div><button id="closeInstallGuide" class="primary">Retour au jeu</button>';
document.body.append(installGuide);
$('closeInstallGuide').onclick=()=>installGuide.close();
const stepsButton=document.createElement('button');
stepsButton.id='installSteps';stepsButton.type='button';stepsButton.textContent='Voir les étapes';
$('installWeb').insertAdjacentElement('afterend',stepsButton);
stepsButton.onclick=()=>showInstallGuide();
function showInstallGuide(){
 const ua=navigator.userAgent||'';
 const ios=/iPad|iPhone|iPod/i.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
 const android=/Android/i.test(ua)||navigator.userAgentData?.platform==='Android';
 $('installGuideSteps').innerHTML=ios?
  '<p>Sur votre iPhone ou iPad, ouvrez le jeu dans Safari, puis :</p><ol><li>Touchez <strong>Partager</strong> (공유, carré avec flèche vers le haut).</li><li>Choisissez <strong>Sur l’écran d’accueil</strong> (홈 화면에 추가).</li><li>Touchez <strong>Ajouter</strong> (추가), puis ouvrez le jeu avec sa nouvelle icône.</li></ol><p>Vous pourrez alors profiter de l’affichage autonome, selon la version d’iOS.</p>':
  android?'<p>Dans le navigateur, ouvrez son menu (⋮), puis choisissez <strong>Installer l’application</strong> ou <strong>Ajouter à l’écran d’accueil</strong>. Ouvrez ensuite le jeu depuis son icône.</p>':
  '<p>Dans Chrome ou Edge, utilisez l’icône d’installation près de l’adresse ou la commande <strong>Installer</strong> dans le menu du navigateur.</p>';
 if(!installGuide.open)installGuide.showModal();
}
const tip=document.createElement('p');tip.className='hint';tip.textContent='Installation, plein écran et mises à jour sont disponibles dans Pause.';$('settings').append(tip);
let current,registration,installEvent,checking=false,lastCheck=0,reloadRequested=false;
let offlineReady=false;
function action(text){$('webActionStatus').textContent=text;}
function installed(){return matchMedia('(display-mode: standalone)').matches||matchMedia('(display-mode: fullscreen)').matches||navigator.standalone===true;}
function installState(){const done=installed();$('installWeb').hidden=done;$('installHelp').hidden=done;shortcut.hidden=done;if(done)$('webApp').dataset.installed='true';}
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installEvent=event;installState();});
window.addEventListener('appinstalled',()=>{installEvent=null;installState();action('Le jeu est installé.');});
async function installWebApp(){
 if(installEvent){
  try{await installEvent.prompt();const result=await installEvent.userChoice;action(result.outcome==='accepted'?'Installation demandée au navigateur.':'Vous pourrez installer le jeu plus tard.');installEvent=null;}
  catch{action('Installation depuis le navigateur : suivez le guide.');showInstallGuide();}
 }else{action('Voici les étapes pour installer le jeu.');showInstallGuide();}
 try{await navigator.storage?.persist?.();}catch{}
}
$('installWeb').onclick=installWebApp;
shortcut.onclick=installWebApp;
async function fullscreen(){try{
 if(document.fullscreenElement){await document.exitFullscreen();return;}
 if(!document.documentElement.requestFullscreen){action('Le plein écran dépend de ce navigateur. L’installation ouvre une fenêtre autonome lorsque le système le permet.');return;}
 await document.documentElement.requestFullscreen();try{await screen.orientation?.lock?.('landscape');}catch{}
 }catch{action('Le navigateur a refusé le plein écran. Vous pouvez installer le jeu depuis son menu.');}
}
$('fullscreenWeb').onclick=fullscreen;
document.addEventListener('fullscreenchange',()=>{$('fullscreenWeb').textContent=document.fullscreenElement?'Quitter le plein écran':'Plein écran';});
function safe(){return canApplyUpdate(window.maxYutDiagnostic?.(),window.__gameReady);}
function updateButton(){const waiting=!!registration?.waiting;$('updateWeb').hidden=!waiting;$('updateWeb').disabled=!safe();if(waiting)$('versionDetail').textContent='Une version est téléchargée. Actualisez depuis cette pause lorsque les yut sont immobiles. La partie sera reprise.';}
function offlineStatus(){
 const online=navigator.onLine;
 $('offlineStatus').textContent=offlineReady?(online?'Jeu hors ligne prêt · musique incluse.':'Hors ligne · votre partie continue.'):(online?'Préparation du mode hors ligne, musique incluse…':'Hors ligne · le cache complet n’est pas encore confirmé.');
}
async function check(force=false){
 if(checking||!current||!force&&Date.now()-lastCheck<15*60*1000)return;checking=true;lastCheck=Date.now();$('checkWeb').disabled=true;
 const result=await checkVersions(current,fetch,new URL('./web-version.json',document.baseURI));$('versionStatus').textContent=result.status;$('versionDetail').textContent=result.detail;
 try{if(registration&&navigator.onLine)await registration.update();}catch{if(result.status==='À jour'){$('versionStatus').textContent='Vérification impossible';$('versionDetail').textContent='La vérification du cache a échoué. Réessayez plus tard.';}}
 checking=false;$('checkWeb').disabled=false;updateButton();
}
$('checkWeb').onclick=()=>check(true);
$('updateWeb').onclick=async()=>{
 if(!safe()){action('Attendez la fin du lancer et du rangement des yut, puis ouvrez Pause.');return;}
 if(!registration?.waiting){await check(true);return;}
 // The core persists state after each move. Snapshot validation confirms the save before takeover.
 try{const state=window.maxYutDiagnostic().state;localStorage.setItem('max-yutnori-native-v4',JSON.stringify(state));JSON.parse(localStorage.getItem('max-yutnori-native-v4'));}
 catch{action('La sauvegarde est indisponible ; actualisation annulée.');return;}
 reloadRequested=true;action('Actualisation demandée ; votre partie est sauvegardée.');registration.waiting.postMessage({type:'ACTIVATE_WHEN_ALONE'});
};
navigator.serviceWorker?.addEventListener('message',event=>{if(event.data?.type==='UPDATE_BLOCKED'){reloadRequested=false;action('Fermez les autres fenêtres de ce jeu, puis réessayez. La partie reste ouverte.');}});
navigator.serviceWorker?.addEventListener('controllerchange',()=>{offlineReady=true;offlineStatus();if(reloadRequested)location.reload();});
async function start(){
 installState();
 try{current=validateVersion(__WEB_VERSION__);$('webVersion').textContent=`Moteur ${current.engineVersion} · PWA ${current.pwaVersion} · build ${current.build} · ${current.commit.slice(0,8)}`;}
 catch{$('webVersion').textContent='Version interne indisponible.';$('versionStatus').textContent='Vérification impossible';}
 if('serviceWorker' in navigator&&isSecureContext){
  try{
   registration=await navigator.serviceWorker.register(new URL('./sw.js',document.baseURI),{scope:'./',updateViaCache:'none'});
   const watch=worker=>worker?.addEventListener('statechange',()=>{if(worker.state==='activated'){offlineReady=true;offlineStatus();}if(worker.state==='installed')updateButton();if(worker.state==='redundant'&&!registration.active){$('offlineStatus').textContent='Préparation hors ligne impossible. Gardez une connexion et réessayez lors de la prochaine ouverture.';}});
   watch(registration.installing);registration.addEventListener('updatefound',()=>watch(registration.installing));
   if(registration.active){offlineReady=true;offlineStatus();}updateButton();
  }catch{$('offlineStatus').textContent='Mode hors ligne indisponible dans ce navigateur ; le jeu reste accessible en ligne.';}
 }else{$('offlineStatus').textContent='Ce navigateur nécessite HTTPS et les service workers pour jouer hors ligne.';}
 await check(true);
}
window.addEventListener('online',()=>{offlineStatus();check();});window.addEventListener('offline',offlineStatus);
document.addEventListener('visibilitychange',()=>{if(!document.hidden){check();updateButton();}});
$('pause').addEventListener('close',updateButton);new MutationObserver(updateButton).observe($('pause'),{attributes:true,attributeFilter:['open']});
setInterval(()=>{if(!document.hidden){check();updateButton();}},6*60*60*1000);
start().catch(()=>{$('versionStatus').textContent='Vérification impossible';});
