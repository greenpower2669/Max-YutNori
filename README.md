# Max YutNori — version de test 0.8.0

Jeu 3D en français sans Unity : Three.js/WebGL2 et Rapier/WebAssembly, Android hors ligne. Branche feature/native-webgl-v020, PR brouillon #2.

[APK 0.8.0 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/79ce9005ee4556c1d9c0d8cc5b0c65073e124fb3/temp/Max-YutNori-v0.8.0-debug.apk) · [AAB de test 0.8.0](https://github.com/greenpower2669/Max-YutNori/raw/79ce9005ee4556c1d9c0d8cc5b0c65073e124fb3/temp/Max-YutNori-v0.8.0-debug.aab).

Version 0.8.0/code9 livrée pour test. Mise à jour compatible depuis 0.2.0 ; la 0.1.0 historique avait une autre signature. AAB signé pour les tests, pas pour une publication Play définitive.

## Nouveautés 0.8.0
HUD plus compact et transparent, fiches 1–2 à gauche / 3–4 à droite, bouton unique Vue à gauche de musique et cadrage rapproché. Pions plus lisibles, repère actif bicolore pulsé et mention « À TOI DE JOUER ». Panorama sans couture pointillée, eau/chutes/brume/nuages/lumières et embruns animés ; musique Arisongs de 36 minutes embarquée et bouclée. Table flottante, fresque agrandissable, règles, sauvegardes et gestes conservés.

## Jouer
Deux à quatre équipes, quatre pions et un à six participants humains/IA par équipe. Pions chêne, cèdre rouge, noir laqué et vert sapin laqué. Musique locale en boucle, sons/vibrations, HUD des quatre faces physiques et sauvegarde locale.

Touchez un pion ou glissez-le vers un halo légal ; le second doigt zoome sans lâcher. La caméra action rapproche la vue, décale puis recule et suit le pion. Vue de dessus propose un zoom indépendant ; pincez pour cadrer les pions. Les boutons restent disponibles. Réglages → Confort permet de couper la caméra action, réduire les animations ou alléger les graphismes. Règles → fresque propose zoom par pincement et boutons, avec glissement pour explorer.

Jouez les résultats accumulés dans l’ordre voulu. Un franchissement arrière de la ligne ajoute un tour restant ; un franchissement avant le retire ; chaque pion termine à zéro. Capture et compteurs individuels de groupe préservés, aucun passage de résultat. Relance lorsque la physique produit une face indéterminée.

Dans Bol et lancer, glissez le bol vers le haut pour le lever, sur le côté pour l’incliner ; relâchez pour le reposer. Le mouvement du téléphone reste actif par défaut, avec choix OFF mémorisé. Le bol s’efface après le lancer et revient pour ranger les yut avant la suite.

## Modifier
```sh
npm ci
python3 scripts/fetch_music.py
npm test
npm run build
npm run smoke
```
Sources web/src/, sortie web-dist/game/. Chrome requis pour smoke ; CHROME_PATH précise son chemin. Plan courant : docs/plan-visibility-v080.md ; dernière revue livrée : docs/revue-v070.md. PNG originaux dans web/public/art ; maps de gravure et effets du panorama calculés localement, sources intactes.

## Vérification 0.8.0

CI [40259390198](https://github.com/greenpower2669/Max-YutNori/actions/runs/40259390198) réussie : 71/71 tests unitaires, 45/45 parcours navigateur hors ligne, zéro erreur JS/requête externe ; cinq zones du panorama vérifiées sur leurs pixels réels et mode réduit identique. Compilation APK/AAB et lint Android réussis. Source `7ab9f8761c56bc899242a234b24a406e0e17d909`, binaires `79ce9005ee4556c1d9c0d8cc5b0c65073e124fb3`. Vrais téléchargements HTTP 200, intégrité ZIP/SHA-256, identité/version/icône/PNG et MP3 vérifiés. Certificats extraits des vrais APK v2/AAB : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identiques à 0.7.0.

APK : 62,491,892 octets ; SHA-256 `06d8a8dc4b790f47e7d0f68d67413f6a262b5b6a0f2eaabaa8502743c803bdc2`.
AAB : 62,002,566 octets ; SHA-256 `2a8e3c8831926acb01d0c58f53de78cd9a8ce51dc17659a378a2637a120b4b45`.

Installation en mise à jour de 0.7.0 sans désinstallation. APK paysage, portrait vérifié pour le Web. Confort tactile, intensité esthétique, performance et capteur restent à valider sur Samsung SM-A576B Android 16. Aucun essai physique revendiqué. Aucun merge main ni Release définitive.

## Historique de vérification 0.7.0
CI [40250007382](https://github.com/greenpower2669/Max-YutNori/actions/runs/40250007382) réussie : 71/71 tests unitaires, 41/41 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `378f987875774d90bca29b5b5acbdf2a1588f962`, binaires/preuves `a034f9c722f402dd0bfd3f0c1d9c593f976bbc6f`. Téléchargements HTTP 200, intégrité ZIP et SHA-256 contrôlés. Certificats extraits des vrais APK v2/AAB : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identiques à 0.6.0. Les quatre PNG embarqués et la musique originale sont conservés octet pour octet.

APK : 10,102,517 octets, SHA-256 `5d92d8ffbcdf724444fb2d63c2433e48bef3e79c11bbd970066da196a058be5a`.
AAB : 9,719,109 octets, SHA-256 `0ed577f5b85b2aceaa1d1133a864b80e43f30e209f44c82c6a5c0307827c3e36`.

Revue indépendante traitée : retour invalide/pointercancel et espacement des piles. Régressions observées rouges puis vertes ; ajout du cadrage des réserves hors commandes, vérifié en 1000×600, 844×390 et 390×844. Pause et mode réduit couvrent aussi lumière et panorama.

Mise à jour de 0.6.0 sans désinstallation : identité fr.fab.maxyutnori, icône, signature de test et sauvegarde v4 conservées. APK paysage (les deux orientations), portrait vérifié pour le Web. Confort tactile, visibilité des halos, performance des effets et capteurs restent à valider sur Samsung SM-A576B Android 16. Aucun merge main ni Release définitive.

## Mémoire FabCopilot
ordres-de-mission.md, todo.md, brain.md, brainmap.md, debughistorical.md. MYN-014 livrée, à valider sur appareil. Passation actuelle : docs/passation-2026-10-26.md. Historique conservé ; FabYut reste en lecture seule.
