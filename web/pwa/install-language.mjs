export const INSTALL_LANGUAGE_KEY='max-yutnori-web-language-v1';
export function resolveInstallLanguage(choice,languages,language){
 if(['fr','en','ko'].includes(choice))return choice;
 const preferences=[...(Array.isArray(languages)?languages:[]),language];
 for(const value of preferences){
  const base=typeof value==='string'?value.trim().toLowerCase().split('-')[0]:'';
  if(['fr','en','ko'].includes(base))return base;
 }
 return 'en';
}
export const installCopy={
 fr:{
  storeTitle:'Version application, au choix',storeText:'Vous pouvez continuer avec la WebApp ou ouvrir la fiche officielle de l’application.',continueWeb:'Continuer avec la WebApp',openStore:'Ouvrir {store}',storeVersion:'Application {version} · moteur {engineVersion}',
  shortcut:'Installer',install:'Installer le jeu',aria:'Installer Max YutNori sur cet appareil',title:'Installer Max YutNori',guide:'Aide à l’installation de Max YutNori',steps:'Voir les étapes',back:'Retour au jeu',language:'Langue',auto:'Automatique (navigateur)',
  help:'Android : menu du navigateur → Installer l’application ou Ajouter à l’écran d’accueil. Ordinateur : icône d’installation dans Chrome ou Edge. iPhone/iPad : Safari → Partager → Sur l’écran d’accueil.',
  ios:'<p>Sur votre iPhone ou iPad, ouvrez le jeu dans Safari, puis :</p><ol><li>Touchez <strong>Partager</strong> (carré avec une flèche vers le haut).</li><li>Choisissez <strong>Sur l’écran d’accueil</strong>.</li><li>Touchez <strong>Ajouter</strong>, puis ouvrez le jeu avec sa nouvelle icône.</li></ol><p>L’affichage autonome dépend de la version d’iOS.</p>',
  android:'<p>Ouvrez le menu du navigateur (⋮), puis choisissez <strong>Installer l’application</strong> ou <strong>Ajouter à l’écran d’accueil</strong>. Ouvrez ensuite le jeu depuis son icône.</p>',
  desktop:'<p>Dans Chrome ou Edge, utilisez l’icône d’installation près de l’adresse ou la commande <strong>Installer</strong> dans le menu du navigateur.</p>',
  installed:'Le jeu est installé.',accepted:'Installation demandée au navigateur.',dismissed:'Vous pourrez installer le jeu plus tard.',failed:'Installation depuis le navigateur : suivez le guide.',show:'Voici les étapes pour installer le jeu.'
 },
 en:{
  storeTitle:'Optional app version',storeText:'Continue with the WebApp or open the official app listing.',continueWeb:'Continue with the WebApp',openStore:'Open {store}',storeVersion:'App {version} · engine {engineVersion}',
  shortcut:'Install',install:'Install game',aria:'Install Max YutNori on this device',title:'Install Max YutNori',guide:'Max YutNori installation guide',steps:'Show steps',back:'Back to game',language:'Language',auto:'Automatic (browser)',
  help:'Android: browser menu → Install app or Add to Home screen. Desktop: install icon in Chrome or Edge. iPhone/iPad: Safari → Share → Add to Home Screen.',
  ios:'<p>Open the game in Safari on your iPhone or iPad, then:</p><ol><li>Tap <strong>Share</strong> (square with an upward arrow).</li><li>Choose <strong>Add to Home Screen</strong>.</li><li>Tap <strong>Add</strong>, then open the game using its new icon.</li></ol><p>Standalone display depends on your iOS version.</p>',
  android:'<p>Open the browser menu (⋮), then choose <strong>Install app</strong> or <strong>Add to Home screen</strong>. Open the game using its new icon.</p>',
  desktop:'<p>In Chrome or Edge, use the install icon near the address bar or choose <strong>Install</strong> from the browser menu.</p>',
  installed:'The game is installed.',accepted:'Installation requested from the browser.',dismissed:'You can install the game later.',failed:'Follow the browser installation guide.',show:'Here are the steps to install the game.'
 },
 ko:{
  storeTitle:'앱 설치는 선택 사항입니다',storeText:'WebApp을 계속 사용하거나 공식 앱 페이지를 열 수 있습니다.',continueWeb:'WebApp 계속 사용',openStore:'{store} 열기',storeVersion:'앱 {version} · 엔진 {engineVersion}',
  shortcut:'설치',install:'게임 설치',aria:'이 기기에 Max YutNori 설치',title:'Max YutNori 설치',guide:'Max YutNori 설치 안내',steps:'설치 방법 보기',back:'게임으로 돌아가기',language:'언어',auto:'자동 (브라우저)',
  help:'Android: 브라우저 메뉴 → 앱 설치 또는 홈 화면에 추가. 컴퓨터: Chrome 또는 Edge의 설치 아이콘. iPhone/iPad: Safari → 공유 → 홈 화면에 추가.',
  ios:'<p>iPhone 또는 iPad의 Safari에서 게임을 연 후 다음 단계를 따르세요.</p><ol><li><strong>공유</strong> 버튼(위쪽 화살표가 있는 사각형)을 누르세요.</li><li><strong>홈 화면에 추가</strong>를 선택하세요.</li><li><strong>추가</strong>를 누른 후 새 아이콘으로 게임을 실행하세요.</li></ol><p>독립 실행 화면은 iOS 버전에 따라 다릅니다.</p>',
  android:'<p>브라우저 메뉴(⋮)에서 <strong>앱 설치</strong> 또는 <strong>홈 화면에 추가</strong>를 선택한 후 새 아이콘으로 게임을 실행하세요.</p>',
  desktop:'<p>Chrome 또는 Edge에서 주소 표시줄 근처의 설치 아이콘을 누르거나 브라우저 메뉴의 <strong>설치</strong>를 선택하세요.</p>',
  installed:'게임이 설치되었습니다.',accepted:'브라우저에 설치를 요청했습니다.',dismissed:'나중에 게임을 설치할 수 있습니다.',failed:'브라우저 설치 안내를 따라주세요.',show:'게임 설치 방법을 안내합니다.'
 }
};
