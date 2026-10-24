# Max YutNori — version de test 0.5.0

Jeu 3D en français sans Unity : Three.js/WebGL2 et Rapier/WebAssembly, APK Android hors ligne. Branche feature/native-webgl-v020, PR brouillon #2.

[APK 0.5.0 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.5.0-debug.apk) · [AAB de test 0.5.0](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.5.0-debug.aab).

Version 0.5.0/code 6, environ 8 Mo. Mise à jour compatible depuis 0.4.1, 0.4.0, 0.3.0 et 0.2.0. L’AAB est signé pour les tests ; la 0.1.0 historique avait une autre signature.

## Jouer
Caméra action douce (proche, latérale, recul, suivi), zoom avec le second doigt, pions sélectionnables directement et glissables sur un halo légal, réserves espacées. Tours restants individuels rétablis, Back-do jouable au départ, aucun passage de résultat ; résultats accumulés jouables dans l’ordre voulu. Lancers auto/IA plus hauts. Les invalidités physiques proposent toujours une relance.

Touchez un pion pour le sélectionner. Glissez-le vers un halo : il grandit lorsque le dépôt est valide. Pendant la prise, écartez/rapprochez le second doigt pour zoomer. Relâcher ailleurs annule le déplacement. Plateau rétablit la vue générale ; Vue libre conserve ses commandes. Réglages → Confort permet de couper la caméra action ou de réduire les animations. Les boutons restent disponibles.

Deux à quatre équipes de quatre pions, un à six participants humains/IA par équipe. Pions chêne, cèdre rouge, noir laqué et vert sapin laqué ; yut à deux faces cèdre/noir. Musique originale en boucle, sons et vibrations, HUD des quatre faces réelles et sauvegarde locale. Dans Bol et lancer, glissez le bac vers le haut pour le lever, sur le côté pour l’incliner ; relâchez pour le poser. Le capteur reste activé par défaut et le choix OFF mémorisé.

## Modifier
```sh
npm ci
python3 scripts/extract_music.py
npm test
npm run build
npm run smoke
```
Sources web/src/, sortie web-dist/game/. Seule la sortie native entre dans le paquet ; aucun runtime Unity. Chrome est requis pour smoke ; CHROME_PATH permet de préciser son chemin. Plan docs/plan-action-v050.md ; revue docs/revue-v050.md.

## Vérification
CI [40078589575](https://github.com/greenpower2669/Max-YutNori/actions/runs/40078589575) réussie : 51/51 tests unitaires, 27/27 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `4a28e1c84ef76f628a85f12dae0b7f2c467d9bfe`, binaires/preuves `c37c719642b5e8b6bb14c40fb2a5ef4e054061f9`. Téléchargements HTTP 200, ZIP et SHA-256 contrôlés ; certificat APK v2 et certificat AAB extraits des fichiers téléchargés identiques à 0.4.1 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 7,942,389 octets, SHA-256 `4507098b866055aeee207bfafbd17b0dd43145ee9a7d39df6f95a368113548e2`.
AAB : 7,615,363 octets, SHA-256 `18f9380af968b8efb8793bfb8bad0bfe40aadfde4a6bdc38b94f9475736d8885`.

Installation en mise à jour de 0.4.1 sans désinstallation : identité fr.fab.maxyutnori, icône et signature conservées. Sauvegarde v4 séparée, anciens v2/v3 conservés ; les compteurs absents des anciennes parties sont initialisés à 1 (0 pour les pions terminés), sans inventer leur historique. Confort caméra/tactile et capteur encore à valider sur Samsung SM-A576B Android 16. Décor MYN-009 reporté ; aucune fusion main ni Release définitive.

## Mémoire FabCopilot
ordres-de-mission.md, todo.md, brain.md, brainmap.md, debughistorical.md. MYN-010/MYN-011 livrées, à valider sur appareil. Historique conservé ; FabYut reste la référence en lecture seule.
