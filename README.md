# Max YutNori — version de test 0.8.2

[APK 0.8.2 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/3756c18859faec9da5e37e92239f77310d3aba4e/temp/Max-YutNori-v0.8.2-debug.apk) · [AAB de test 0.8.2](https://github.com/greenpower2669/Max-YutNori/raw/3756c18859faec9da5e37e92239f77310d3aba4e/temp/Max-YutNori-v0.8.2-debug.aab).

Branche feature/native-webgl-v020 ; PR brouillon #2.

La brume basse suit toutes les nappes repérées en violet, les nuages du ciel suivent le repérage turquoise et l’eau le repérage jaune avec îlots/rives exclus. Les six régions des chutes gardent le rendu composite 0.8.1 ; fondu doux à l’extérieur pour éviter une découpe elliptique. Les couleurs du repérage restent dans le diagnostic, pas dans le jeu. Image originale, HUD/vues/pions, musique, règles, sauvegarde, identité, icône et signature conservés.

Une carte statique RGBA 256×128/128 Kio contient bruit et trois masques, préparée une fois. Une passe du panorama, aucun objet supplémentaire ni transfert/recréation de texture par frame, au plus trois lectures de cette carte par fragment. Pause/animations réduites/qualité légère conservées.

CI [40320155787](https://github.com/greenpower2669/Max-YutNori/actions/runs/40320155787) réussie : 76/76 tests unitaires et 45/45 parcours navigateur hors ligne, aucune erreur JS/requête externe, build APK/AAB et lint Android réussis. Pixels réels : 14 sondes positives/négatives pour les régions, six cœurs comparés à la référence 0.8.1 à deux temps, raccord de rive vérifié et mode réduit fixe. Revue indépendante traitée : raccord d’eau corrigé et testé rouge→vert, métadonnée fsevents rétablie. Source `04c4cb053bc25f49b0a22c93cb7003fbdbb0b70d`, binaires `3756c18859faec9da5e37e92239f77310d3aba4e`. Téléchargements HTTP 200, intégrité ZIP/SHA-256, versions, quatre PNG et MP3 vérifiés ; certificats extraits des vrais APK v2/AAB identiques à 0.8.1 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,494,932 octets ; SHA-256 `91dec0a4e7123fea546daab73d6f42e2c3c14136808dea2f927185d12758e6e1`.
AAB : 62,005,342 octets ; SHA-256 `9b4a52fbdceabef1809ce96523346c39a4139ab852054a996698d8442d899f0d`.

Mise à jour de 0.8.1 sans désinstallation. Fidélité esthétique finale et fluidité/coût GPU sur Samsung SM-A576B Android 16 restent à valider ; aucun FPS matériel revendiqué. Aucun merge main ni Release définitive.

Plan/suivi/revue : docs/plan-panorama-zones-v082.md, docs/panorama-zones-progress.md, docs/revue-v082.md. Vérification reproductible : docs/verification/verify-delivery-v082.py.

## Historique — états antérieurs conservés

# 0.8.2 en préparation — régions du panorama affinées

MYN-016 : nappes de brume et nuages du ciel selon le repérage de Fab ; eau tracée autour des îlots/rives. 76 tests et comparaisons de pixels locaux passent ; revue/CI/livraison à venir. Dernière livraison vérifiée : 0.8.1 ci-dessous.

# Max YutNori — version de test 0.8.1

[APK 0.8.1 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/fa1871f945b0c093f7580ce3c761078b836352ec/temp/Max-YutNori-v0.8.1-debug.apk) · [AAB de test 0.8.1](https://github.com/greenpower2669/Max-YutNori/raw/fa1871f945b0c093f7580ce3c761078b836352ec/temp/Max-YutNori-v0.8.1-debug.aab).

Nuages bas indépendants dans les vallées et au-dessus du lac : deux défilements doux de densité, masque statique, opacité maximale 18 %. Les calculs des cascades/embruns validés par Fab restent inchangés ; leur région géométrique complète est exclue du nouveau voile. Texture périodique 128×128 RGBA (64 Kio) préparée une fois, une seule passe de panorama, aucun objet/particule supplémentaire ni transfert/recréation de texture par frame. Pause et animations réduites respectées ; qualité légère conserve les nappes. HUD, vues, caméra, pions, musique Arisongs, règles, sauvegarde v4, identité fr.fab.maxyutnori, icône et signature de test conservés.

CI [40288471190](https://github.com/greenpower2669/Max-YutNori/actions/runs/40288471190) réussie : 73/73 tests unitaires et 45/45 parcours navigateur hors ligne, zéro erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Pixels réels : nappes visibles/mobiles en qualité normale/légère, six cœurs de cascades identiques avec/sans nouvelle couche, un dessin et 64 Kio, mode réduit fixe. Revue indépendante favorable. Source `adf0c9f75d914016cae9b2ba3aedc6662f3fd78c`, binaires `fa1871f945b0c093f7580ce3c761078b836352ec`. Vrais téléchargements HTTP 200, intégrité ZIP/SHA-256, identité/version/icône, quatre PNG et MP3 vérifiés ; certificats extraits des APK v2/AAB identiques à 0.8.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,492,800 octets ; SHA-256 `999b4a8ffe57e62161be73083a28f0d973461b6077be870fd610f177253cade6`.
AAB : 62,003,366 octets ; SHA-256 `ed482e10893272d28e2ebf8b22e6a7ade4a09bfc1e1319d06785a45b6501fd2e`.

Mise à jour de 0.8.0 sans désinstallation. Le coût GPU et le confort visuel réels sur Samsung SM-A576B Android 16 restent à valider ; aucun FPS matériel revendiqué. Au plus trois lectures de texture supplémentaires par fragment concerné. Aucun merge main ni Release définitive.

## Historique des livraisons et de la réalisation

# Max YutNori — 0.8.1 en vérification

Nuages bas animés dans les vallées et au-dessus du lac, séparés des cascades/embruns validés par Fab. Texture fixe64Kio et une passe de panorama ; données et calculs de densité préparés une fois. Dernière livraison vérifiée :0.8.0 ; CI0.8.1 en préparation.

## Dernière livraison0.8.0 conservée

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
