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
