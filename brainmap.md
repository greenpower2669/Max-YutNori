# Carte active — livraison de test 0.3.0
- Mission et autorisation : ordres-de-mission.md, MYN-006 ; contrat approuvé : docs/evolution-equipes-capteurs-halos.md.
- Plan/suivi : docs/plan-evolution-v030.md, docs/evolution-progress.md ; état : brain.md et todo.md.
- web/src/teams.mjs et rules.mjs : participants, quatre équipes, migration et IA.
- team-form.js : réglages individuels ; board-layout.mjs et halos.js : positions et repères ; scene.js : rendu Three.js ; main.js : interface, pause, sauvegarde et animation.
- physics.mjs et impact.mjs : collisions Rapier bornées ; audio.js : musique en boucle, sons locaux, volume et pause.
- motion.mjs : détection du geste ; android/app/src/main/java/fr/fab/maxyutnori/MotionSensors.java : capteur natif ; MainActivity.java : pont local et cycle de vie.
- docs/revue-v030.md : revue et corrections ; temp/native-download-verification.json : preuve de téléchargement brut.
- tests/ : 25 tests ; scripts/smoke_native.mjs : 14 scénarios navigateur avec capteur simulé, rendu et audio hors ligne.
- .github/workflows/android.yml : APK/AAB, lint, contenu et comparaison des signatures. temp/native-* : preuves du dernier build indiqué dans native-build-info.txt.
- Paquets livrés : temp/Max-YutNori-v0.3.0-debug.apk et .aab ; validation physique Samsung ouverte.
- Branche feature/native-webgl-v020, PR brouillon #2. Aucun merge main ni Release.

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
