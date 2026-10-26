## Marge des commandes 0.7.0
main.fit inclut aussi le bas réel de #views + 8px dans safeInsets.top ; réserve projetée hors boutons en vue verticale. Tests navigateur sur trois formats, même matrice pour dessin et pointage.

## Carte 0.7.0 en cours
pawn-motion.mjs advancePawn/stackOffsets : hauteur de passage et offsets de groupe ; comfort.mjs : TopView/teamPulse ; living-panorama.js : sphère shader et horloge ; fresco.js : zoom/pan. Scene partage projection étendue rendu/raycast ; PawnInput possède aussi les gestes du fond en vue verticale. Main renseigne les marges par ResizeObserver et la pulsation HUD.

## Carte de reprise MYN-013 — 25/10/2026, sans modification produit
Prompt complet : docs/passation-2026-10-25.md. Fresque originale/provenance : docs/references/rules-fresco-25492.png et README.md voisin.
- Hauteurs : board-layout.mjs reservePosition/pawnPosition/buildSelection → scene.js maillages/labels/activeGlow/onPlane/frame → halos.js ; pawn-input.js et chase-camera.mjs à préserver. Y réserve=.15 identique plateau malgré support plus bas ; ne pas corriger sans trajectoire de levage/sélection/retour.
- HUD : main.js fit() exclut actuellement header/controls de la surface du stage ; la semi-transparence exige une scène derrière et le maintien du cadrage/tactile.
- Vue verticale : scene.js view/focus/frame/OrbitControls ; ajouter mode/zoom persistants sans écrasement par chase. Deux doigts avec et sans pion tenu.
- Panorama : scene.background equirectangulaire et environnement PMREM, actuellement statiques ; prochains effets localisés à concevoir avec masques/coût/pause/qualité réduite.
- Règles : intégrer plus tard la fresque et l'agrandissement, garder explication Do/Back-do avec bâton marqué.
Clarification résolue : la table flottante est voulue. Aucun code de MYN-013 écrit.

## Référence active 0.6.0
Plan docs/plan-ambience-v060.md ; revue docs/revue-v060.md. BowlCycle orchestre présentation et restitution des corps ; Physics garde les vrais résultats et collisions ; Main gère les transitions et annule le retour caméra périmé. Scene rend l’équipe active et charge les PNG locaux ; engravingMaps et engravedMaterial dérivent les cartes de matière. Smoke_ambience ajoute 7 scénarios aux 27 historiques.

CI [40168413538](https://github.com/greenpower2669/Max-YutNori/actions/runs/40168413538) réussie : 62/62 tests unitaires, 34/34 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `a5d12ed492e0ad0656184cb68ab977280ef15c48`, binaires/preuves `03b939304c60a7923f99d560c906015cd6782614`. Téléchargements HTTP 200, intégrité ZIP et SHA-256 contrôlés ; certificat APK v2 et certificat AAB extraits des vrais fichiers téléchargés identiques à 0.5.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Les trois PNG embarqués sont identiques aux originaux fournis par Fab.

## Historique — états antérieurs

## Retour invisible 0.6.0
BowlCycle termine hiding par setTrayEnabled(false) puis dockTray : neutralise un retour interrompu, même sans relance. Test unitaire dédié + ancien scénario UI auto depuis un bol saisi.

## Revue 0.6.0 et régressions
BowlCycle.startStow calcule outside et clearance ; update stowing effectue dégagement/montée/traversée/descente. Main.playMove annule returnToBoard quand il demande le rangement. Tests/bowl-cycle.test.mjs vérifie proche/loin et sortie ; smoke_ambience.mjs joue un résultat physique déterministe immédiatement pour couvrir le minuteur caméra. docs/revue-v060.md garde les preuves et limites de revue.

## Interfaces réalisées 0.6.0
BowlCycle(physics) : settle/requestStow/update/reset/restoreResult, ready/phase/opacity. Physics : holdSticks/placeSticks/releaseSticks/setTrayEnabled/dockTray, garde de lancer tant que tenus/invisibles. main.js orchestre résultat→cycle et attend ready pour lancer/victoire ; pause ne fait aucun update. Scene charge art via loadArtwork, anneaux activeGlow, opacité et recompilation shader quand transparence change. engravingMaps -> buffers RGBA height/normal/roughness ; engravedMaterial crée textures Canvas et displacement ; couleur PNG d’origine. Smoke_ambience : assets/équipe/transitions/pause/reset/capteur/victoire.

## Travail 0.6.0 — 25/10/2026
Plan docs/plan-ambience-v060.md. tray-motion.mjs : signe latéral ; nouveau bowl-cycle.mjs : cycle résultat/disparition/rangement séparé des règles. physics.mjs : immobilisation et restitution des corps, collisions du bol/socle cohérentes avec visibilité. main.js : orchestration et verrouillage, scene.js : opacité/lumière/chargement art ; engraving.mjs et materials.js : cartes de matériau depuis dessin original. web/public/art : trois PNG fournis par Fab, sans changement. Tests ciblés puis smoke complet et workflow Android.

## Référence active 0.5.0
Plan docs/plan-action-v050.md ; suivi docs/action-progress.md ; revue docs/revue-v050.md. rules.mjs/teams.mjs : compteurs laps et migration v4. chase-camera.mjs : séquence/cadrage/zoom/gain. pawn-input.js : propriété des doigts. scene.js : projections et brouillard adapté. main.js : sauvegarde et actions validées. scripts/smoke_action.mjs : sept nouveaux scénarios intégrés au smoke complet.

CI [40078589575](https://github.com/greenpower2669/Max-YutNori/actions/runs/40078589575) réussie : 51/51 tests unitaires, 27/27 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `4a28e1c84ef76f628a85f12dae0b7f2c467d9bfe`, binaires/preuves `c37c719642b5e8b6bb14c40fb2a5ef4e054061f9`. Téléchargements HTTP 200, ZIP et SHA-256 contrôlés ; certificat APK v2 et certificat AAB extraits des fichiers téléchargés identiques à 0.4.1 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

## Historique des étapes précédentes

## Point de vérification 0.5.0 — 23/10/2026
0.5.0 : chase-camera.mjs (séquence, cadrage, zoom, gain de suivi), pawn-input.js (propriété des pointeurs), scene.js (projection et brouillard adapté), rules.mjs/teams.mjs (laps), main.js (v4/UI/annulation). Tests ciblés scripts/smoke_action.mjs importés dans smoke_native.mjs. Revue docs/revue-v050.md.

## 23/10/2026 — Réalisation autorisée 0.5.0
Réalisation 0.5.0 : rules.mjs/teams.mjs, nouveaux chase-camera.mjs/pawn-input.js, scene.js/main.js, physics.mjs. Tests sous tests/ et scripts/smoke_native.mjs.
Plan docs/plan-action-v050.md ; suivi docs/action-progress.md.

# Carte active — 0.4.1 / MYN-008 livré pour test
- Audit MYN-010 / MYN-D018 : rules.mjs destinations/pass/move et teams.mjs ne portent aucun compteur de tours ; référence FabYut, commit 81ba459b39306b4f0c36ca69d8483d7bc3d552a8, yutFab/Assets/fabchoc.cs releaseGrab/Turnleft et Globals.cs SaveTurns/istrigable. Pending et sélection d’un résultat : main.js render/selectedResult. Toucher des pions : scene.js pointerup + main.js onPick ; déplacement >10 px ignoré pour les pions. Espacement réserve : board-layout.mjs reservePosition. Hauteur auto : main.js launch(settings.power), physics.mjs throwSticks. Audit sans modification produit.
- ordres-de-mission.md : demandes de Fab ; MYN-009 (décor) reste différé.
- todo.md et brain.md : état, livraison et validation Samsung attendue.
- web/src/teams.mjs : matières/accents ; scene.js : pions, bac et capture tactile.
- web/src/physics.mjs : géométrie partagée, dégagement à chaque pas, levage, retour en attente pendant le vol et validité du résultat élevé.
- web/src/main.js : priorité doigt/capteur et retour hors phase de saisie ; pause/vol conservés.
- web/src/rules.mjs, team-form.js : règles, participants et migration ; halos.js : sélection/destinations.
- web/src/audio.js, motion.mjs, tray-motion.mjs : boucle/effets et capteurs ; MotionSensors.java/MainActivity.java : pont Android.
- tests/ : 38 tests ; scripts/smoke_native.mjs : 20 scénarios navigateur hors ligne.
- docs/revue-v041.md et debughistorical.md MYN-D013/14/15/16/17 : diagnostics et corrections vérifiées.
- .github/workflows/android.yml : compilation/lint, APK/AAB, signature comparée à 0.4.0 ; temp/native-* : preuves du build indiqué dans native-build-info.txt.
- temp/Max-YutNori-v0.4.1-debug.apk et .aab ; native-download-verification.json : contrôles des vrais téléchargements.
- Branche feature/native-webgl-v020, PR brouillon #2 ; aucun merge main ni Release.

## Historique
---

## Carte historique
# Max-YutNori — Carte technique

## Références
- `FabYut` : projet Unity original, commit inspecté `81ba459b39306b4f0c36ca69d8483d7bc3d552a8`, aucune écriture.
- `yutFab/Assets/Globals.cs` contient la logique Unity ; scènes, ressources et autres scripts dans Assets.
- Unity Play : jeu `f7ab238a-cec3-44ad-a517-7a3c1e00faa3`, export publié `4d547ac9-eecc-45b5-802e-a5b9c81ca3e5`.

## Architecture implémentée
- `android/` : projet Gradle, un module `app`, Java 17.
- `MainActivity.java` : WebView, cycle de vie, confirmation de sortie, interception HTTPS locale stricte, journal de diagnostic borné.
- `android/app/src/main/assets/game/index.html` : démarrage Unity, progression, erreurs lisibles, reprise audio sur interaction.
- `android/app/src/main/assets/game/Build/` : fichiers publiés figés, Brotli décodé sans altération du contenu.
- `upstream-web-build.json` : provenance, tailles et SHA-256 des quatre fichiers de l'export.
- `.github/workflows/android.yml` : vérifications, compilation APK, copie vers `temp/` dans la même branche ; aucun merge et aucune Release définitive.
- `scripts/verify_web_build.py` : intégrité et complétude de l'export embarqué.
- `scripts/fetch_web_build.mjs` : restauration de l'export figé via sa page publique ; URLs signées temporaires jamais enregistrées ; contrôle SHA-256 obligatoire avant toute écriture.
- `scripts/smoke_web.mjs` : vrai démarrage Unity sous Chrome avec tactile émulé et toutes les requêtes externes bloquées ; contrôle des fichiers absents et erreurs JS, capture PNG.
- `scripts/test_offline_restore.mjs` : régression du restaurateur, quatre fichiers locaux présents et réseau amont interdit.

## Contrôles techniques
Java 17 / Gradle 8.13 / AGP 8.13.0 / compile et target SDK 36 / minimum SDK 26. Aucune dépendance AndroidX ni bibliothèque native embarquée. Le runtime natif est le WebView système.
Le bouton Retour utilise OnBackInvokedDispatcher sur Android 13+ ; dialogue avec copie des 100 dernières lignes de diagnostic, sans envoi automatique. Insets système/caméra respectés, barres escamotables.
Signature de test conservée dans le cache CI `max-yutnori-debug-key-v1`. Une perte du cache peut nécessiter une réinstallation ; aucune clé privée n'est committée. La signature de production reste hors périmètre.
Le premier commit distant contient le code et le manifeste d'empreintes. CI restaure les quatre binaires, les teste et les commite avec l'APK ; les builds suivants retrouvent ainsi les fichiers figés directement dans Git.

## Livraison 0.1.0
- Source compilée : `3042fed5ca7a9a0fa551d5330ef1a5739ef5f9cb`.
- Commit CI exposant fichiers originaux, APK et preuves : `4b8ee92f83e65fba8ad7da437bb9b8fa3a9b0366`.
- APK : `temp/Max-YutNori-v0.1.0-debug.apk` ; SHA-256 `ebcde4dce56996c8771ebe5b07313cd6754464bc984257a5b64be46c1c598b5d`.
- Le code natif gère Android 13+ avec OnBackInvokedDispatcher ; seule la méthode de secours API 26-32 porte une suppression lint ciblée et justifiée.

## Flux et limites
Lancement Android → page locale → loader Unity → framework/WASM/data locaux → scène du jeu. Le contenu local est servi sous `https://appassets.androidplatform.net/game/` avec MIME explicites. Les chemins hors périmètre et les requêtes réseau externes sont refusés. Aucune interface JavaScript vers Java.

## Carte audio inspectée — MYN-D005
- Conteneur `Build/game.data` au SHA-256 d'origine inchangé : `b406d6d1ab60b395a69ecc20d6b4e4f0d550b598e31c6aeb9f0eb738dc2da75f`.
- `data.unity3d` : `sharedassets0.assets`, AudioClip path ID 161, `ARIRinstr`, stéréo 44 100 Hz, durée 239,3279877 s ; `level0`, AudioSource path ID 1942 sur `Audio Source`, `Loop=false`, `m_PlayOnAwake=true`, activé, volume 1.
- Lecture effectuée avec UnityPy 1.25.4, sans sauvegarde/réécriture du binaire.
- `Build/framework.js` : `_JS_Sound_SetLoop` délègue au canal Web Audio ; la capacité de boucler est présente. `_JS_Sound_Init` reprend le contexte audio sur touchstart/mousedown.
- `launcher.js` ne contient pas de correction de boucle ; l'application charge des assets locaux et n'a pas de mécanisme de mise à jour du jeu installé.

## Refonte v0.2.0 en cours
web/src/rules.mjs : règles pures ; tests/rules.test.mjs : cas limites et parties IA ; docs/refonte-webgl.md : contrat et suivi. Branche feature/native-webgl-v020.

- web/src/physics.mjs : Rapier WASM et lecture des faces.
- web/src/scene.js : rendu procédural Three.js.
- web/src/main.js : UI, sauvegarde, pause et IA.
- web/src/audio.js : musique originale en boucle et sons synthétisés.
- scripts/extract_music.py : extraction vérifiée du morceau original, indépendant de Unity.
- scripts/smoke_native.mjs : démarrage hors ligne, lancer, sauvegarde, victoire, boucle et formats téléphone.
- android/app : WebView locale, nouvelle source assets web-dist et prise en charge des requêtes audio Range.

Les preuves de la refonte sont dans `temp/native-*`. Elles se rapportent au commit indiqué par `temp/native-build-info.txt`. Le premier APK 0.2.0 est remplacé après les corrections de la relecture.

## Évolution 0.3.0
web/src/teams.mjs : palette, participants, activePlayer et construction équipes. rules.mjs : rotation modulo nombre équipes, captures et IA multi-adversaires, validation/migration v2→v3. tests/teams.test.mjs : preuves moteur et migration.

0.3.0 : team-form.js construit les participants ; board-layout.mjs centralise positions et sélection ; halos.js anime les anneaux ; impact.mjs borne les collisions sonores ; motion.mjs filtre le geste et impose repos/réarmement. MotionSensors.java écoute les capteurs sur le thread UI, retire la gravité si nécessaire et remappe le paysage. MainActivity expose MaxYutMotion au seul document local ; main.js pilote écoute selon tour/pause. settings-v2 conservé avec ajouts fxVolume/motion/sensitivity ; parties v3 avec fallback migration v2. Smoke couvre configurations, halos, migrations, faux capteur de test, volumes, formats.

MYN-007 livré pour test : docs/plan-bac-v040.md et docs/bac-progress.md ; revue dans docs/revue-v040.md.

0.4.0 : physics.mjs expose TABLE, tray, setTrayPose, prepare et les lancers ; tray-motion.mjs calibre la gravité selon la tenue et borne l'inclinaison ; MotionSensors.java émet onNativeTilt et onNativeMotion, avec accélération linéaire préférée et fallback filtré. main.js conserve les contrôles d'éligibilité/pause. materials.js génère trois cartes bois locales ; yut-geometry.js affecte la face plate au matériau laqué ; throw-view.mjs valide les faces/résultats du résumé. Stockages : réglages settings-v3 (ancien v2 conservé), dernier lancer last-throw-v1 ; partie native-v3 inchangée. HUD en header, hauteur mesurée pour réserver la zone 3D ; diagnostic readonly expose pose du bac et positions projetées des yut.

0.4.0 : `physics.reset()` annule le vol lors de `newGame`. Preuves et deux corrections de revue dans `docs/revue-v040.md`, régressions dans `tests/table.test.mjs` et `scripts/smoke_native.mjs`.

Livraison 0.4.0 : temp/Max-YutNori-v0.4.0-debug.apk et .aab ; preuves CI temp/native-build-info.txt, native-SHA256SUMS, native-package.json, native-smoke.json, native-apk-verification.txt, native-aab-verification.txt et téléchargement comparé native-download-verification.json. CI 39724824806.

0.4.1 : SUPPORT et TRAY centralisent les dimensions ; advanceTray calcule la hauteur de sécurité à chaque pas contre table et socle. GameScene capture le doigt sur le bac en vue Bol, transmet begin/move/end et libère à pointercancel, changement de vue ou pause. main.js utilise trayEligible pour préparer même sans capteur ; motionEligible exclut trayGrab. TEAM_STYLES distingue color (matière), css/glow (accents lisibles), finish et ink.
