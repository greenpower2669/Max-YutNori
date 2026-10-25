# Max YutNori — version de test 0.6.0

Jeu 3D en français sans Unity : Three.js/WebGL2 et Rapier/WebAssembly, Android hors ligne. Branche feature/native-webgl-v020, PR brouillon #2.

[APK 0.6.0 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.6.0-debug.apk) · [AAB de test 0.6.0](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.6.0-debug.aab).

Version 0.6.0/code 7. Mise à jour compatible depuis les versions 0.2.0 à 0.5.0. L’AAB est signé pour les tests ; la 0.1.0 historique avait une autre signature.

## Nouveautés
Sens latéral du bol corrigé ; tous les pions et réserves de l’équipe active portent une lumière douce, sélection plus marquée. Bol soulevable au doigt, effacé après un résultat stabilisé, réapparu pour ranger les quatre yut avant le tour suivant ou une relance. Faces/résultats conservés, pause et nouvelle partie respectées. Titre transparent original, panorama 360° et décor bois avec cartes de gravure en creux, normales et rugosité.

Dans « Bol et lancer », glissez le bol vers le haut pour le lever et sur le côté pour l’incliner ; relâchez pour le reposer. Le mouvement du téléphone reste actif par défaut, avec choix OFF mémorisé. Attendez la fin du rangement avant de relancer. Les yut passent au-dessus du rebord ; les corps du bol et du socle sont désactivés lorsqu’ils disparaissent.

## Jouer
Deux à quatre équipes, quatre pions et un à six participants humains/IA par équipe. Pions chêne, cèdre rouge, noir laqué et vert sapin laqué. Musique originale en boucle, sons/vibrations, HUD des quatre faces physiques et sauvegarde locale.

Touchez un pion ou glissez-le vers un halo légal ; le halo s’agrandit quand le dépôt est possible. Le second doigt zoome sans lâcher le pion. Caméra action proche, latérale, recul puis suivi ; Plateau rétablit la vue générale. Les boutons restent disponibles. Réglages → Confort permet de couper la caméra action, réduire les animations ou alléger les graphismes.

Jouez les résultats accumulés dans l’ordre voulu. Un franchissement arrière de la ligne ajoute un tour restant ; un franchissement avant le retire ; chaque pion termine à zéro. Capture et compteurs individuels de groupe préservés, aucun passage de résultat. Relance lorsque la physique produit une face indéterminée.

## Modifier
```sh
npm ci
python3 scripts/extract_music.py
npm test
npm run build
npm run smoke
```
Sources web/src/, sortie web-dist/game/. Aucun runtime Unity dans le paquet. Chrome requis pour smoke ; CHROME_PATH précise son chemin. Plan docs/plan-ambience-v060.md, revue docs/revue-v060.md. PNG originaux dans web/public/art ; les maps sont calculées localement au chargement.

## Vérification
CI [40168413538](https://github.com/greenpower2669/Max-YutNori/actions/runs/40168413538) réussie : 62/62 tests unitaires, 34/34 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `a5d12ed492e0ad0656184cb68ab977280ef15c48`, binaires/preuves `03b939304c60a7923f99d560c906015cd6782614`. Téléchargements HTTP 200, intégrité ZIP et SHA-256 contrôlés ; certificat APK v2 et certificat AAB extraits des vrais fichiers téléchargés identiques à 0.5.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Les trois PNG embarqués sont identiques aux originaux fournis par Fab.

APK : 9,533,239 octets, SHA-256 `1ac1b449e11c0b123d52ad1bb0a5ed14ebd2ca52aa5c29dbc90bef690fc1d3a9`.
AAB : 9,150,265 octets, SHA-256 `17e93b234e466b916cb4e9d28a10350ca969e0b2401fb6d33f867c04dfe15b83`.

Mise à jour de 0.5.0 sans désinstallation : identité fr.fab.maxyutnori, icône, signature et sauvegarde v4 conservées. Les gestes, le confort graphique et le sens réel dans les deux paysages restent à valider sur Samsung SM-A576B Android 16. Le relief est dérivé des traits de l’image, pas d’une sculpture 3D mesurée. Aucun merge main ni Release définitive.

## Mémoire FabCopilot
ordres-de-mission.md, todo.md, brain.md, brainmap.md, debughistorical.md. MYN-009/MYN-012 livrées, à valider sur appareil. Historique conservé ; FabYut reste en lecture seule.
