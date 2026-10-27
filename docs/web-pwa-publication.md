# Max YutNori Web/PWA — installation et publication

## Installer et jouer

Ouvrir https://max-yutnori-web.gnrationsia.chatgpt.site — version de test privée, accessible au propriétaire avec son compte ChatGPT. Le jeu occupe la fenêtre ; le paysage est conseillé. Dans **Pause**, activer **Plein écran** si le navigateur le permet, ou choisir **Installer le jeu**. Dans Chrome/Edge Android et ordinateur, l'icône/menu du navigateur peut également proposer l'installation. Sur iPhone/iPad, Safari → Partager → Sur l'écran d'accueil ; les possibilités d'installation, d'orientation et de plein écran diffèrent selon le système. Les navigateurs sans installation peuvent jouer depuis le site avec WebGL.

Pour la première ouverture, rester connecté jusqu'à **Jeu hors ligne prêt · musique incluse** dans Pause. Environ65Mo de ressources sont préparés ; la musique originale est reconstituée depuis des fragments sans changement de qualité. Ensuite ouvrir le raccourci installé ou la même URL hors ligne. Le navigateur peut effacer les données d'un site si l'utilisateur les supprime ou si le système récupère son stockage. L'application demande la persistance si elle est disponible lors de l'installation.

La partie et les réglages restent dans le navigateur et l'origine utilisés. APK et PWA ont des sauvegardes distinctes ; changer d'URL d'hébergement ne transfère pas les parties. Les clés historiques v2/v3/v4 ne sont pas supprimées.

## Mises à jour

Pause affiche moteur, PWA, build et commit source. Vérification au lancement, toutes les6h en page visible, au retour en ligne (au plus une fois par15min), et par le bouton manuel. États : **À jour**, **Mise à jour disponible**, **Vérification impossible**. Les releases Android et musicales sont ignorées ; la PWA compare des builds entiers monotones et des versions semver cohérentes.

Le nouveau worker se télécharge en arrière-plan puis attend. **Actualiser le jeu** fonctionne seulement dans Pause, quand les yut sont immobiles (bol prêt ou caché après un résultat) ; il confirme la sauvegarde puis recharge. Fermer les autres fenêtres du même jeu si nécessaire. Les fenêtres étrangères au scope ne bloquent pas. Une publication GitHub Web plus récente ne garantit pas que l'hôte a déjà été déployé : le texte l'indique. Une erreur d'API, une limite GitHub ou des manifestes incompatibles donnent **Vérification impossible**.

Les générations antérieures du cache sont conservées tant que des documents peuvent encore employer leurs fichiers. Aucune mise à jour ne supprime les sauvegardes locales. La suppression des données du site par l'utilisateur supprime également ses sauvegardes.

## Construction reproductible

```sh
npm ci
python3 scripts/verify_branding.py
npm test
npm run build            # web-dist/game pour Android
npm run build:web        # pwa-dist pour hébergement statique HTTPS
node scripts/smoke_pwa.mjs
```

Le Web utilise **exactement les mêmes sources moteur**. Le plugin Vite injecte uniquement en mode web la surcouche PWA et le transport musical fragmenté. Les sources Android et `web/src/` restent inchangées. La compilation APK/AAB et le lint sont vérifiés en CI, avec la clé debug existante, sans publication d'un nouvel APK de la PWA. Pour Android, `gradle -p android assembleDebug bundleDebug lintDebug` après le build par défaut ; la configuration de signature et le package restent invariants.

Publier tout le contenu de `pwa-dist` sous une même racine HTTPS ou un sous-dossier ; ne pas publier la racine du dépôt. Préserver les sous-dossiers, binaires audio et types MIME. `sw.js` : JavaScript et Cache-Control:no-cache ; `web-version.json` : application/json et no-store ; `.webmanifest` : application/manifest+json. `_headers` fournit ces règles aux hôtes qui le comprennent ; les configurer autrement si nécessaire. Les chemins sont relatifs et le scope reste le répertoire du jeu. Toutes les ressources du cache doivent être accessibles avant d'annoncer le jeu hors ligne.

`web-release.json` porte **pwaVersion** et **build**, à augmenter pour chaque déploiement différent. `package.json` porte **engineVersion**. Le commit Git du build est intégré dans le bundle et dans `web-version.json` ; `WEB_COMMIT` permet de désigner le commit GitHub réel lorsque la copie locale possède une identité de commit différente mais le même arbre de sources. Ne jamais réutiliser un numéro build pour un autre commit.

La CI `.github/workflows/web-pwa.yml` automatise tests, deux builds,intégrité du moteur approuvé, scénario PWA et cadrage caméra et compilation/lint Android, puis conserve les rapports et le dossier publiable. Sites héberge une copie de test privée ; le dépôt GitHub reste la source canonique. La réexécution utilise le même projet Sites, jamais un nouveau site.

## Future publication GitHub Web — seulement après validation de Fab

Aucune release PWA définitive n'est créée dans MYN-024. Lorsqu'elle sera autorisée :

1. Augmenter `web-release.json`, committer, construire/tester ce commit et déployer les fichiers exacts.
2. Créer un tag **web-vVERSION_PWA**, distinct du tag Android vVERSION_MOTEUR.
3. Joindre **web-version.json** au nom exact, ainsi qu'une archive du contenu `pwa-dist` et ses SHA256.
4. Ajouter aux notes de release la ligne exacte suivante, avec le JSON compact du manifeste réel du build :

```html
<!-- max-yutnori-web-version: {"schema":1,"product":"max-yutnori","channel":"web-pwa","pwaVersion":"VERSION_PWA","build":NUMERO_ENTIER,"engineVersion":"VERSION_MOTEUR","commit":"SHA_GIT_40_CARACTERES"} -->
```

Le JSON des notes et l'asset doivent correspondre au même manifeste. Cette ligne permet la vérification CORS via l'API GitHub, sans dépendre des redirections des téléchargements de pièces jointes. Les publications brouillon/prerelease sont ignorées par le canal stable actuel. Si la release Web annoncée est incohérente ou incomplète, la vérification échoue explicitement.

## Sources techniques

- MDN : https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
- MDN : https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting
- GitHub : https://docs.github.com/en/rest/releases/releases

## Limites de vérification

L'aperçu cloud disponible ne crée pas de contexte WebGL. La CI utilise le vrai Chrome avec SwiftShader, ce qui prouve le rendu logiciel et les parcours automatisés, pas la fluidité GPU Samsung, le dialogue d'installation de chaque OS, l'orientation/plein écran réels ni le comportement d'éviction à long terme. Ces essais matériels restent consignés dans todo.md.
