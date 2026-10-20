# Max YutNori — refonte 0.2.0

Jeu de YutNori 3D sans Unity, en français : Three.js / WebGL2 et Rapier / WebAssembly, intégré dans une APK Android hors ligne. Branche de travail feature/native-webgl-v020 ; aucune fusion main. Version de test, validation Samsung par Fab nécessaire.

## Jouer et modifier

```sh
npm ci
python3 scripts/extract_music.py
npm test
npm run dev
```

Le morceau original est extrait du build historique uniquement s'il manque ; il est ensuite un fichier AAC indépendant. Le code du jeu est dans web/src/. La sortie de npm run build est web-dist/game/. Seule cette sortie entre dans l'APK ; les anciens binaires Unity restent archivés dans le dépôt.

Deux équipes de quatre pions, jusqu'à six noms tournants par équipe, ordinateur réglable, relances Yut/Mo, résultats stockés, Back-do, captures, groupes et raccourcis. Au centre, un groupe suit la route du dernier groupe arrivé. Musique en boucle, sons, pause, sauvegarde, lancers par bouton ou glissement. Capteurs prévus dans une étape ultérieure.

## APK

GitHub Actions vérifie règles, physique, interface hors ligne, boucle audio et sauvegarde, puis compile et analyse l'APK. Le fichier brut est dans temp/ sur la branche. Le script verify_native_apk.py contrôle l'absence de Unity.

La clé debug diffère de 0.1.0 : désinstaller cette ancienne application avant la refonte. Cela supprime les données locales de l'ancienne application. Ce n'est pas une signature de production Play Store.

## Mémoire FabCopilot

ordres-de-mission.md, brain.md, brainmap.md, debughistorical.md, todo.md. Contrat et choix : docs/refonte-webgl.md. APK 0.1.0 conservé sur feature/android-webview-v001 ; FabYut reste la référence en lecture seule.
