import {BrowserMotion} from './motion.mjs';
// This import is injected before main.js ONLY in the Web build. Never replace a native bridge.
if(!window.MaxYutMotion){
 const input=document.getElementById('motion'),status=document.getElementById('motionStatus');
 const activate=document.createElement('button');activate.id='enableWebMotion';activate.type='button';activate.textContent='Activer les capteurs';status.before(activate);status.setAttribute('role','status');
 const bridge=new BrowserMotion(window,render);
 window.MaxYutMotion={available:()=>bridge.available(),setEnabled:value=>bridge.setEnabled(value)};
 window.maxYutWebMotionDiagnostic=()=>bridge.status();
 function render(){
  const info=bridge.status(),messages={
   insecure:'Les capteurs nécessitent une connexion HTTPS.',unsupported:'Ce navigateur ne fournit pas les capteurs de mouvement.',
   blocked:'Les capteurs sont bloqués pour ce site. Autorisez les capteurs de mouvement dans les paramètres du navigateur.',
   permission:'Touchez « Activer les capteurs », puis autorisez leur accès pour lancer au mouvement.',
   denied:'Accès aux capteurs refusé. Autorisez les capteurs de mouvement pour ce site dans les paramètres du navigateur, puis réessayez.',
   waiting:'En attente des capteurs. Si aucune donnée n’arrive, autorisez les capteurs de mouvement pour ce site dans les paramètres du navigateur.',
   ready:'Capteurs reçus. Reprenez la partie, désactivez Auto et gardez le téléphone immobile un instant avant le geste de lancer.'
  };
  input.disabled=!bridge.available();status.textContent=messages[info.state]||messages.waiting;
  activate.hidden=bridge.available()||['unsupported','insecure'].includes(info.state);
 }
 activate.addEventListener('click',()=>bridge.request());
 new MutationObserver(render).observe(document.getElementById('settings'),{attributes:true,attributeFilter:['open']});
 bridge.start();
}
