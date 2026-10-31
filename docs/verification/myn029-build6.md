# MYN-029 — livraison publique de test PWA0.1.0/build6

31 octobre 2026 · branche `feature/web-pwa-v010` · moteur Android0.8.8/code17.

Le build6 préparé dans MYN-028 est vérifié et publié sur **https://max-yutnori-web.gnrationsia.chatgpt.site**, avec la même origine et le même accès public révision2. PR#3 ouverte en brouillon ; aucune fusion main, aucune Release définitive et aucune distribution Android nouvelle.

## Provenance exacte
- HEAD repris : `38a96ce21e44321449d536a4a194faa2140368a9`.
- Source des fichiers Web publiés : `19cb558fc293de1e0833c5578be077e044b266f0`. Seuls quatre documents mémoire ont changé entre ce commit et le HEAD repris ; aucune entrée de build/test différente.
- [CI41233773003](https://github.com/greenpower2669/Max-YutNori/actions/runs/41233773003), job124633152182 : réussite complète, artefact13054258459. Archive ZIP SHA-256 `bd3c428af278344d570a5ec5f957f01f663b121f83acb13358f93326416170e6` vérifié avant extraction.
- Les27 fichiers pwa-dist publiés sont byte-identiques à ceux de cet artefact. Source hébergement `8e77dcbd19f9ac9d4edbbaa0d86a782ae9ab8faf`.
- Version Sites7 : `appgprj_6ae11aa948088191a7b93cc0bbfa9652~appgver_7bb8cbe4804c8191b8ec829b8bb822b9` ; **compteur distinct du build PWA6**.
- Déploiement `appgdep_6ae6469acff481918f0b7e22ab22470a` : `succeeded`. SHA-256 du fichier archive local téléversé : `0a6922418eab6a073d9c3a1d1dfde6b512dc05e2293d23a32ed3a25836188d38`. Le champ `archive_storage.content_hash` renvoyé par Sites vaut séparément `sha256:733c4df6feca06162e8beb23110c527a19bde9f8b13be9d1d72188fb0395b420` ; ce n’est pas présenté comme l’empreinte du fichier local.

## Résultats réels
| Contrôle | Résultat et portée |
| --- | --- |
| Unités |119/119 en CI ;119/119 relancées localement, zéro échec/skip |
| Branding |Source et sept PNG vérifiés localement et en CI |
| Builds |Vite Android et Web réussis localement et en CI ; bundle >3Mo signalé en avertissement |
| Navigateur CI |23 parcours Chrome/SwiftShader, zéro erreur JS, réellement exécutés sur build6 |
| Moteur |Démarrage Three.js/WebGL, Rapier WASM et lancer physique réel, caméra de dessus/×2 et cadrage MYN-021 |
| Installabilité |Manifest display/orientation/icônes et bouton/guide confirmés en CI ; scope `./` contrôlé dans l’artefact |
| Contrôles supplémentaires |8 scénarios DOM/API : Android, iPhone coréen, iPad, démarrage autonome, bureau, invite Chromium acceptée/reportée et commandes plein écran/lock paysage (succès, sortie, refus et API absente) ; [script](myn029-install-check.mjs) et [résultat](myn029-install-check.json) |
| Hors ligne et musique |Cache complet, réouverture HTML redirigé, restauration partie/dernier lancer ; MP3 décodé hors ligne et Range audio |
| Mises à jour |Worker en attente, seconde fenêtre bloque activation forcée, actualisation explicite préserve exactement la sauvegarde |
| Capteurs |6 parcours d'événements simulés vers vrai MotionThrow/Rapier ; pause/reprise, OFF, permission accordée/refusée et premier toucher |
| Formats |Paysage844×390, portrait390×844 et bureau1000×600 sans débordement horizontal ; cela ne certifie pas tous les gestes tactiles |
| Intégrité |52 fichiers web/src + web/index.html + android byte-identiques au socle cdb2ff4, empreintes revérifiées |
| Android |assembleDebug, bundleDebug, lintDebug réussis ; APK/AAB **unsigned de compatibilité**, aucune nouvelle clé/signature/distribution |
| Version publique |Manifeste HTTPS lu sans connexion : PWA0.1.0/build6, moteur0.8.8, commit19cb558 |

## Service worker et conservation des parties
Cache généré : `max-yutnori-web-83378bf757c87c7f8bfae499`, différent de build5 ; SHA-256 sw.js `43938623553dd73eb17bf382b8669a62b626929d90cd3684931d162d716f2eb1`. Worker publié dans l'archive exacte, même scope et même origine. Le code conserve les anciens caches et n'efface jamais localStorage ; l’activation forcée depuis le jeu exige une pause sûre et une seule fenêtre. Le cycle normal active aussi le nouveau worker après fermeture des anciens clients. Les anciennes clés/migrations et les sources moteur n'ont pas changé. Le cycle mise à jour/sauvegarde est vérifié en CI ; **la migration d'une installation réelle build5 n'est pas encore attestée**.

## Installation et essai matériel
- Android : ouvrir l'URL dans Chrome → **📲 Installer** ; suivre l'invite ou menu⋮ → Installer/Ajouter à l'écran d'accueil.
- iPhone XS : Safari → **공유** (Partager) → **홈 화면에 추가** → **추가** ; lancer avec la nouvelle icône.
- Installation existante : Pause → Vérifier les mises à jour → Actualiser le jeu. Si demandé, fermer les autres fenêtres de ce jeu. Garder les données du site. Attendre « Jeu hors ligne prêt · musique incluse » avant l'essai hors ligne ; vérifier partie et dernier lancer après fermeture/réouverture.
- Samsung : mouvement ON, premier toucher/permission éventuelle, repos environ1s puis geste avec Auto désactivé ; tester deux paysages, pause/reprise. Un OFF mémorisé reste OFF.

## Limites et anomalies restantes
L'aperçu cloud échoue à créer un contexte WebGL ; aucun test GPU Samsung/iPhone n'est revendiqué. Le manifeste public est observable, mais les requêtes HTTP brutes reçoivent403 et la navigation directe sw.js est bloquée (`ERR_BLOCKED_BY_CLIENT`). Le déploiement et son archive sont confirmés ; l'activation effective du SW sur les installations matérielles reste à vérifier. Aucun contournement navigateur.

Dialogues OS, installation/autonomie/plein écran/orientation effectifs, gestes tactiles complets, permissions et capteurs physiques, éviction du cache et confort/chauffe demeurent ouverts dans todo.md. Le repli des cartes/noms longs en portrait étroit reste un point de surveillance historique. Aucune anomalie bloquante de code démontrée par les vérifications de MYN-029.

La clé de signature canonique n'était pas disponible dans le cache de la branche PWA en CI ; les paquets de contrôle sont non signés et ne remplacent pas l'APK officiel0.8.8. Gradle confirme minSdk26/targetSdk36 et package fr.fab.maxyutnori.

La règle Google Play est conservée, toujours inactive jusqu'à publication et vérification d'une fiche officielle. Le user-agent ne certifie jamais la compatibilité SDK. APK GitHub autonome et chaîne AAB restent préservés.

## Reproduire les contrôles accessibles
```sh
npm test
python3 scripts/verify_branding.py
npm run build
WEB_COMMIT=19cb558fc293de1e0833c5578be077e044b266f0 npm run build:web
node docs/verification/myn029-install-check.mjs
```
Le parcours navigateur `node scripts/smoke_pwa.mjs` reste reproductible dans le runner Chrome/SwiftShader de `.github/workflows/web-pwa.yml`. Ne pas confondre une reconstruction locale avec l'artefact exact publié ; vérifier les inputs et l'absence de fichiers temporaires dans public avant un futur build.

Preuves JSON : [web-pwa-source-integrity.json](web-pwa-source-integrity.json). Cinq mémoires synchronisées ; l'ancien todo est archivé intégralement dans sauvegarde.md.

## Revue finale MYN-029
Revue indépendante en lecture seule : archive CI,27 fichiers publiés,52 empreintes protégées, rapport des119 unités/23 parcours, sauvegarde intégrale du todo et fixture installation contrôlés. Deux points corrigés : distinguer SHA du fichier archive local et content_hash renvoyé par l'hôte ; ajouter les branches plein écran/lock paysage à la fixture. Huit groupes DOM/API verts ensuite, sans modification du produit.
Précision appliquée : la pause sûre et la fenêtre unique gouvernent l'activation **forcée**, tandis que le cycle normal peut activer le worker une fois les anciens clients fermés.
Mineur différé : le libellé du smoke CI mentionne scope, mais il n'en contient pas d'assertion dédiée. Scope `./` contrôlé directement dans le manifeste de l'artefact pour cette livraison ; ajout de l'assertion automatisée dans une prochaine intervention. Les limites matérielles et l'activation du SW public restent celles documentées ci-dessus, sans prétention supplémentaire.
