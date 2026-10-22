# Max YutNori — version de test 0.4.0

Jeu de YutNori 3D en français, sans Unity : Three.js/WebGL2 et Rapier/WebAssembly, dans une APK Android hors ligne. Branche feature/native-webgl-v020, PR brouillon #2 ; aucune fusion main ni publication définitive.

[APK 0.4.0 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.4.0-debug.apk) · [AAB de test 0.4.0](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.4.0-debug.aab).

APK d’environ 7,9 Mo, installable par-dessus 0.3.0 ou 0.2.0 sans désinstallation : signature, identité `fr.fab.maxyutnori` et icône conservées. Version 0.4.0/code 4. L’AAB est signé pour les tests, pas une publication Play de production. La 0.1.0 historique avait une autre signature.

## Changements 0.4.0
Le bac suit l’inclinaison et de petits mouvements du téléphone. Le capteur est activé par défaut à l’entrée dans cette version ; son arrêt est mémorisé dans Réglages → Bac mobile et lancer au mouvement. Tenir le téléphone au repos un instant pour la calibration, puis incliner ou faire un petit geste pour lancer. L’écoute s’arrête pendant pause, dialogue, tour IA et vol ; bouton/glissement restent disponibles.

Les yut montent plus haut et retombent sur la table, bordée de collisions physiques. Faces plates noires laquées et faces bombées en cèdre rouge ; bois texturé et relief plus visibles. Le HUD supérieur aligne les quatre faces du dernier lancer réel, sauvegardé avec le résultat. Nom initial Joueur 1. Les quatre couleurs d’équipes et les règles restent conservées.

De deux à quatre équipes de quatre pions, chacune avec un à six participants humains ou IA, relayés après le tour complet. Réglages individuels IA, relances Yut/Mo, Back-do, captures, groupes et raccourcis. Sélection/destinations avec halos tournants ; animation réduite disponible. Musique originale en boucle, sons de contacts et de plateau, volumes séparés, sauvegarde locale et migration des anciennes parties.

## Modifier
```sh
npm ci
python3 scripts/extract_music.py
npm test
npm run dev
```
Le morceau original est extrait du build historique seulement s’il manque ; le jeu utilise ensuite un AAC indépendant. Sources dans web/src/, sortie `npm run build` dans web-dist/game/. Seule cette sortie entre dans le paquet Android ; aucun runtime Unity.

## Vérification de livraison
CI [39724824806](https://github.com/greenpower2669/Max-YutNori/actions/runs/39724824806) réussie : 34/34 tests unitaires, 16/16 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Même certificat APK/AAB que 0.3.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Source `0155dc784e1583b1ffe4a2ee16c354d02e36b64f`, binaires/preuves `8b1da4710fc4b4dd16b0a102e84d85bf0a5e4d26`. Téléchargements bruts HTTP 200, intégrité et SHA-256 comparés.

APK : 7,938,053 octets, SHA-256 `ff5920323e17843bbf4fce1ea49caa0dfa942f11aeeefebd152c3af2bc90158b`. AAB : 7,611,631 octets, SHA-256 `47476f2916660179382cd630ece58c0cf3a1a8b813a03a856899cd0a3b1a22c5`.

Deux défauts importants corrigés après revue indépendante : marge de retombée insuffisante après contacts entre yut, et nouvelle partie en vol laissant la simulation active. Régressions physiques/UI ajoutées ; 72 lancers déterministes de contrôle restent sur des surfaces supportées. Preuves dans docs/revue-v040.md et temp/native-*.

Le confort, la sensibilité/orientation du bac et du geste, ainsi que le son prolongé restent à essayer sur Samsung SM-A576B Android 16. Le pont capteur est testé par injection navigateur ; aucun essai physique du téléphone n’est revendiqué.

## Mémoire FabCopilot
ordres-de-mission.md, brain.md, brainmap.md, debughistorical.md, todo.md. Plan/suivi 0.4.0 : docs/plan-bac-v040.md et docs/bac-progress.md. Historique 0.1.0/0.2.0/0.3.0 conservé ; FabYut reste la référence en lecture seule.
