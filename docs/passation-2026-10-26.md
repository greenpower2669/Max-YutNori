# PASSATION ACTUELLE — MAX YUTNORI 0.8.4 — MYN-018 (26/10/2026)

**Référence courante** : branche `feature/native-webgl-v020`, source `ac1763d`, binaires `a9c79276e64d2216ab7711843ba8778066f47c56`. CI [40377936315](https://github.com/greenpower2669/Max-YutNori/actions/runs/40377936315) réussie : 45 scénarios navigateur hors ligne, tests unitaires, rendu WebGL, APK/AAB, lint Android et signature identique à 0.8.3. [APK 0.8.4](https://github.com/greenpower2669/Max-YutNori/raw/a9c79276e64d2216ab7711843ba8778066f47c56/temp/Max-YutNori-v0.8.4-debug.apk) · [AAB 0.8.4](https://github.com/greenpower2669/Max-YutNori/raw/a9c79276e64d2216ab7711843ba8778066f47c56/temp/Max-YutNori-v0.8.4-debug.aab).

Mission MYN-018 : 24 rubans de cascades roses (25663.jpg), 5 nappes de brume violette et 7 bandes de nuages turquoise (25651.jpg) via atlas RGBA statique 512×256 / 512 Kio. L'**eau ondulée de la 0.8.3 ne doit plus être modifiée** : comparaison pixels aux temps 0,1,3,7,12 égale à la référence sur le lac testé ; ancien masque/équations, mousse et embruns maintenus. FPS, visuel des 24 chutes et fluidité sur Samsung SM-A576B Android 16 restent à valider par Fab. Ne pas annoncer ce test physique comme réalisé. Les anciennes passations ci-dessous sont historiques et ne représentent plus le statut actif.

Plan `docs/plan-annotated-effects-v084.md` · todo et cinq mémoires du projet à jour. Aucun merge `main` / Release définitive.

---

# PASSATION ACTUELLE — MAX YUTNORI 0.8.3 — MYN-017

[APK 0.8.3 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/84d49c1c216002e3913b540feb1bcefaa15808c1/temp/Max-YutNori-v0.8.3-debug.apk) · [AAB de test 0.8.3](https://github.com/greenpower2669/Max-YutNori/raw/84d49c1c216002e3913b540feb1bcefaa15808c1/temp/Max-YutNori-v0.8.3-debug.aab).

Branche feature/native-webgl-v020 ; PR brouillon #2.

MYN-017 corrige la déformation des arbres signalée sur 25656.jpg : eau autorisée au pixel courant ET au prélèvement déplacé, exclusion des cimes et clapot réduit. Supprimer l’héritage de masque d’eau autour des chutes. Le ciel conserve l’advection de densité avec géométrie fixe ; les calculs de mousse/embruns et la brume sont conservés. L’ancienne égalité complète du composite 0.8.1 ne s’applique plus lorsqu’elle conserve la déformation fautive. Image originale, jeu, HUD/vues/pions, musique, sauvegarde, identité Android, icône et signature conservés.

Carte 128 Kio existante réutilisée, une passe, aucune nouvelle texture/particule ni transfert/recréation par frame. Contrôle conservateur de matière RGB linéaire et de masque ; une lecture de masque supplémentaire uniquement sur les fragments susceptibles de bouger.

CI [40329703094](https://github.com/greenpower2669/Max-YutNori/actions/runs/40329703094) réussie : 76/76 tests et 45/45 parcours navigateur hors ligne, aucune erreur JS/requête externe, APK/AAB et lint Android réussis. Pixels : huit sondes de géométrie à cinq phases, sans déformation ; eau avec réfraction positive, brume/ciel/chutes animés, mode réduit fixe. Régression de l’arbre 720/420 observée rouge puis verte. Revue indépendante effectuée. Source `9adc09709dead8bfd5695b39eca01c2b8a0b63a2`, binaires `84d49c1c216002e3913b540feb1bcefaa15808c1`. Vrais téléchargements HTTP 200, ZIP/SHA-256, versions, quatre PNG et MP3 vérifiés ; certificats extraits des APK v2/AAB identiques à 0.8.2 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,495,080 octets ; SHA-256 `6a33dad7d6e8e5fa2a1894a5b6b2412b920282afea93315320289547f1da80f3`.
AAB : 62,005,457 octets ; SHA-256 `ede3d29837de081081f7e367d8d4532d6151e76076f12e394eb0a7dd615c4ee2`.

Installation en mise à jour de 0.8.2 sans désinstallation. Les sondes automatiques ne prouvent pas une segmentation sémantique exhaustive de chaque pixel ; vérifier les autres berges/cimes et la fluidité sur Samsung SM-A576B Android 16. Aucun essai matériel/FPS revendiqué. Aucun merge main ni Release définitive.

Plan/suivi/revue : docs/plan-water-only-v083.md, docs/water-only-progress.md, docs/revue-v083.md. Contrôle reproductible : docs/verification/verify-delivery-v083.py.

## Historique — états antérieurs conservés

# PASSATION ACTUELLE — MAX YUTNORI 0.8.2 — MYN-016

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

# PASSATION ACTUELLE — MAX YUTNORI 0.8.1 — MYN-015

Branche feature/native-webgl-v020 ; PR brouillon #2. Lire ordres-de-mission puis todo/brain/brainmap/debughistorical.

[APK 0.8.1 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/fa1871f945b0c093f7580ce3c761078b836352ec/temp/Max-YutNori-v0.8.1-debug.apk) · [AAB de test 0.8.1](https://github.com/greenpower2669/Max-YutNori/raw/fa1871f945b0c093f7580ce3c761078b836352ec/temp/Max-YutNori-v0.8.1-debug.aab).

Nuages bas indépendants dans les vallées et au-dessus du lac : deux défilements doux de densité, masque statique, opacité maximale 18 %. Les calculs des cascades/embruns validés par Fab restent inchangés ; leur région géométrique complète est exclue du nouveau voile. Texture périodique 128×128 RGBA (64 Kio) préparée une fois, une seule passe de panorama, aucun objet/particule supplémentaire ni transfert/recréation de texture par frame. Pause et animations réduites respectées ; qualité légère conserve les nappes. HUD, vues, caméra, pions, musique Arisongs, règles, sauvegarde v4, identité fr.fab.maxyutnori, icône et signature de test conservés.

CI [40288471190](https://github.com/greenpower2669/Max-YutNori/actions/runs/40288471190) réussie : 73/73 tests unitaires et 45/45 parcours navigateur hors ligne, zéro erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Pixels réels : nappes visibles/mobiles en qualité normale/légère, six cœurs de cascades identiques avec/sans nouvelle couche, un dessin et 64 Kio, mode réduit fixe. Revue indépendante favorable. Source `adf0c9f75d914016cae9b2ba3aedc6662f3fd78c`, binaires `fa1871f945b0c093f7580ce3c761078b836352ec`. Vrais téléchargements HTTP 200, intégrité ZIP/SHA-256, identité/version/icône, quatre PNG et MP3 vérifiés ; certificats extraits des APK v2/AAB identiques à 0.8.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,492,800 octets ; SHA-256 `999b4a8ffe57e62161be73083a28f0d973461b6077be870fd610f177253cade6`.
AAB : 62,003,366 octets ; SHA-256 `ed482e10893272d28e2ebf8b22e6a7ade4a09bfc1e1319d06785a45b6501fd2e`.

Mise à jour de 0.8.0 sans désinstallation. Le coût GPU et le confort visuel réels sur Samsung SM-A576B Android 16 restent à valider ; aucun FPS matériel revendiqué. Au plus trois lectures de texture supplémentaires par fragment concerné. Aucun merge main ni Release définitive.

Plan/revue/suivi : docs/plan-low-mist-v081.md, docs/revue-v081.md, docs/low-mist-progress.md. Vérification reproductible : docs/verification/verify-delivery-v081.py.

## Historique — passation précédente conservée

# PASSATION ACTUELLE — MAX YUTNORI 0.8.0 — 26/10/2026

Dépôt greenpower2669/Max-YutNori ; branche feature/native-webgl-v020, PR brouillon #2. Lire ordres-de-mission puis todo/brain/brainmap/debughistorical.

[APK 0.8.0 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/79ce9005ee4556c1d9c0d8cc5b0c65073e124fb3/temp/Max-YutNori-v0.8.0-debug.apk) · [AAB de test 0.8.0](https://github.com/greenpower2669/Max-YutNori/raw/79ce9005ee4556c1d9c0d8cc5b0c65073e124fb3/temp/Max-YutNori-v0.8.0-debug.aab).

Bandeaux et fiches plus compacts/transparents, espace central accru et cadrage rapproché. Équipes 1–2 à gauche et 3–4 à droite (interprétation annoncée de la dictée ; à 2 équipes, une de chaque côté). Bouton Vue unique avant musique ; quatre commandes réexécutables, même Plateau pendant un suivi, libellé synchronisé aux changements automatiques. Pions élargis horizontalement, symboles plus lisibles et pointage 28 px ; joueur actif avec deux couleurs pulsées et mention « À TOI DE JOUER ». Panorama sans pointillés de couture, eau/chutes/brume/nuages/lumières/embruns animés. MP3 Arisongs de 36 minutes embarqué en boucle, aucune récupération depuis le téléphone. Table flottante, fresque agrandissable, règles, gestes, sauvegarde v4, identité fr.fab.maxyutnori, icône et signature de test conservés.

CI [40259390198](https://github.com/greenpower2669/Max-YutNori/actions/runs/40259390198) réussie : 71/71 tests unitaires, 45/45 parcours navigateur hors ligne, zéro erreur JS/requête externe ; cinq zones du panorama vérifiées sur leurs pixels réels et mode réduit identique. Compilation APK/AAB et lint Android réussis. Source `7ab9f8761c56bc899242a234b24a406e0e17d909`, binaires `79ce9005ee4556c1d9c0d8cc5b0c65073e124fb3`. Vrais téléchargements HTTP 200, intégrité ZIP/SHA-256, identité/version/icône/PNG et MP3 vérifiés. Certificats extraits des vrais APK v2/AAB : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identiques à 0.7.0.

APK : 62,491,892 octets ; SHA-256 `06d8a8dc4b790f47e7d0f68d67413f6a262b5b6a0f2eaabaa8502743c803bdc2`.
AAB : 62,002,566 octets ; SHA-256 `2a8e3c8831926acb01d0c58f53de78cd9a8ce51dc17659a378a2637a120b4b45`.

Installation en mise à jour de 0.7.0 sans désinstallation. APK paysage, portrait vérifié pour le Web. Confort tactile, intensité esthétique, performance et capteur restent à valider sur Samsung SM-A576B Android 16. Aucun essai physique revendiqué. Aucun merge main ni Release définitive.

Plan/revue : docs/plan-visibility-v080.md et docs/revue-v080.md. Vérification reproductible : docs/verification/verify-delivery-v080.py. Musique d’origine fournie épinglée SHA-256 ; quatre PNG inchangés.

## Historique — passation 0.7.0 conservée

# Passation — Max YutNori 0.7.0 — 26 octobre 2026

Dépôt greenpower2669/Max-YutNori, branche feature/native-webgl-v020, PR brouillon #2. FabYut en lecture seule. Lire ordres-de-mission.md puis todo.md/brain.md/brainmap.md/debughistorical.md ; garder ces cinq mémoires avec le code. Aucune fusion main ni Release définitive autorisée.

## Dernière livraison vérifiée
[APK 0.7.0 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/a034f9c722f402dd0bfd3f0c1d9c593f976bbc6f/temp/Max-YutNori-v0.7.0-debug.apk) · [AAB de test 0.7.0](https://github.com/greenpower2669/Max-YutNori/raw/a034f9c722f402dd0bfd3f0c1d9c593f976bbc6f/temp/Max-YutNori-v0.7.0-debug.aab).

CI [40250007382](https://github.com/greenpower2669/Max-YutNori/actions/runs/40250007382) réussie : 71/71 tests unitaires, 41/41 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `378f987875774d90bca29b5b5acbdf2a1588f962`, binaires/preuves `a034f9c722f402dd0bfd3f0c1d9c593f976bbc6f`. Téléchargements HTTP 200, intégrité ZIP et SHA-256 contrôlés. Certificats extraits des vrais APK v2/AAB : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identiques à 0.6.0. Les quatre PNG embarqués et la musique originale sont conservés octet pour octet.

APK : 10,102,517 octets, SHA-256 `5d92d8ffbcdf724444fb2d63c2433e48bef3e79c11bbd970066da196a058be5a`.
AAB : 9,719,109 octets, SHA-256 `0ed577f5b85b2aceaa1d1133a864b80e43f30e209f44c82c6a5c0307827c3e36`.

## Demande réalisée MYN-013
Pions posés sur la table, les cases ou les piles ; soulèvement avant traversée, dépôt et annulation sûrs. Vue de dessus avec pincement à deux doigts, même en tenant un pion. Bandeaux semi-transparents et réserves accessibles au cadrage initial. Panorama animé par zones : eau, chutes, brume, nuages et lumières. Fresque originale agrandissable dans les règles. Intensité de l’équipe active variable sur un cycle doux de 2,8 secondes, pion choisi plus lumineux ; éclairage fixe en animations réduites. La table flottante est volontaire et préservée, les règles sont inchangées.

Revue indépendante traitée : retour invalide/pointercancel et espacement des piles. Régressions observées rouges puis vertes ; ajout du cadrage des réserves hors commandes, vérifié en 1000×600, 844×390 et 390×844. Pause et mode réduit couvrent aussi lumière et panorama.

## Reprise
Mise à jour de 0.6.0 sans désinstallation : identité fr.fab.maxyutnori, icône, signature de test et sauvegarde v4 conservées. APK paysage (les deux orientations), portrait vérifié pour le Web. Confort tactile, visibilité des halos, performance des effets et capteurs restent à valider sur Samsung SM-A576B Android 16. Aucun merge main ni Release définitive.

Le prochain travail dépend des retours de Fab ; ne pas refaire MYN-013 ni interpréter les anciens états « en cours » comme des demandes oubliées. La passation du 25/10 documente la demande avant réalisation. Les sources finales et les binaires sont identifiés ci-dessus ; la CI expose aussi les captures, rapports et certificat public sous temp/.

Signature debug de test conservée depuis 0.2.0 ; aucun secret dans les notes. La 0.1.0 historique utilisait une autre signature. Les futures publications Play et une clé de publication durable restent un chantier distinct, sans autorisation de main/Release ici.

Confort choisi : cycle lumineux doux de 2.8s, zéro flash brusque ; mode réduit fixe. Le panorama animé est une image 360° avec effets localisés, pas une reconstruction géométrique du paysage. Les maps de gravure sont calculées depuis les traits fournis. Les originaux sont intacts.
