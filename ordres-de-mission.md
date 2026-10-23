# Ordres de mission — Max-YutNori

## IMMUTABLE / À PRÉSERVER
- Dépôt Android : `greenpower2669/Max-YutNori`. FabYut est la référence en lecture seule.
- Mission MYN-001 conservée dans sa branche. Avenant MYN-005 autorise la refonte du moteur et des graphismes dans une nouvelle branche ; préserver la référence FabYut.
- Aucune fusion vers `main` ni publication définitive sans accord explicite de Fab.
- Livrer un `.apk` directement installable via GitHub, nommé projet/version, avec icône. Aucun ZIP à extraire sur le téléphone. Emplacement temporaire : `temp/` sur la branche de travail, alimenté par GitHub Actions.
- Appareil de validation humaine : Samsung SM-A576B, Android 16.
- Première identité Android réalisée : `fr.fab.maxyutnori`, nom affiché `Max YutNori` ; préserver pour les mises à jour. Signature debug de test, pas de clé de publication Play.
- Les cinq mémoires évoluent avec le travail ; secrets absents des dépôts et des journaux.

## Missions
### MYN-001 — APK du jeu existant — Livré, à valider
19/10/2026 : Fab demande d'abord de passer FabYut en APK. Direction validée : embarquer l'export Web existant dans une application Android ; vérifier tactile, son et performances. Première livraison de test, sans PC ni éditeur Unity chez Fab.
Preuve : `temp/Max-YutNori-v0.1.0-debug.apk`, 46 781 687 octets, code 1, target Android 16 ; build 39301357387, source `3042fed5ca7a9a0fa551d5330ef1a5739ef5f9cb`. Signature APK v2 vérifiée. Démarrage Web hors ligne et capture 3D validés ; installation/tactile/audio/pause Samsung attendus.

### MYN-002 — Mémoire vivante FabCopilot — Mise en place, suivi actif
19/10/2026 : conserver `ordres-de-mission.md`, `brain.md`, `brainmap.md`, `debughistorical.md`, `todo.md` au fil de l'avancement.

### MYN-003 — Dépôt séparé — Réalisé
19/10/2026 : tout le travail Android doit vivre dans Max-YutNori. Branche `feature/android-webview-v001`. Autorisation de démarrage : « Ok, gogogo » après les échanges « code pas » de préparation.

### MYN-004 — Audit de la boucle audio et de la version — Diagnostic établi, aucune correction appliquée
20/10/2026 : Fab signale que le son ne se relance pas en boucle, mentionne un dépôt privé doublant le jeu et demande de vérifier la version et les possibilités sans recompilation. Audit en lecture seule du code et des binaires, sans lancer de build. Preuve : MYN-D005. La correction éventuelle et le nouvel APK restent à décider après restitution ; aucune nouvelle version livrée.

### MYN-005 — Refonte sans Unity — Livré, à valider
20/10/2026 : autorisation « Ok, lance toi ». Recréation WebGL / WebAssembly, physique 3D, graphismes améliorés, musique en boucle, capteurs prévus plus tard. Contrat détaillé : `docs/refonte-webgl.md`. Branche `feature/native-webgl-v020`. APK test 0.2.0 livré, CI 39496484674.

MYN-005 — précision de livraison : APK natif 0.2.0, environ 8 Mo, signature debug distincte de 0.1.0. Prévenir Fab de la désinstallation nécessaire et de la suppression des anciennes données locales. Compilation finale vérifiée : CI 39496484674, source 6c75714f0e7c2f8dddaaa0b77aec560cfaab1767.

### MYN-005 — Livraison de test vérifiée
20/10/2026 : APK natif 0.2.0 de 7 923 881 octets, source 6c75714f0e7c2f8dddaaa0b77aec560cfaab1767, binaire dd5c1e2a5e12da39650b5bf912764a99b169fa90, CI 39496484674. Tests et contrôles réussis, relecture traitée. Lien brut dans todo.md. Validation humaine Samsung attendue ; capteurs reportés à une mission suivante. Aucune fusion main ni publication définitive.

### MYN-006 — Équipes, repères lumineux et sensations — Livré, à valider
20/10/2026 : Fab demande jusqu'à quatre couleurs/équipes, plusieurs participants humains ou IA par équipe, sons, accéléromètre, textures et lumière améliorées. Il confirme ensuite que les déplacements sont corrects et précise la demande visuelle : aura tournante sur le pion sélectionné et ses destinations. Périmètre confirmé ; proposition de conception dans `docs/evolution-equipes-capteurs-halos.md`, à relire avant implémentation. Aucun nouvel APK pour cette mission à ce stade.

MYN-006 — 21/10/2026 : fiche approuvée par Fab (« Oui »). Réalisation 0.3.0/code 3 commencée ; moteur v3 testé localement, interface/capteurs/packaging en cours.

MYN-006 — réalisation 21/10 : équipes, repères, sons, textures et pont capteur codés ; 25 tests unitaires passent. Validation de l’intégration et APK en cours, livraison non encore déclarée.

MYN-006 — suivi : premier run 0.3.0 arrêté au test de rotation des halos avant Android. Correction du harnais et du temps initial d’animation, puis vérification complète ; aucun paquet 0.3.0 annoncé avant ces preuves.

MYN-006 — livraison technique du 21/10/2026 : APK/AAB 0.3.0/code 3 exposés et téléchargements bruts vérifiés, 25 tests et 14 scénarios verts ; build/lint Android et signatures conformes à 0.2.0. Source 3ede60382b264521fa1f5b403ceabccaf41cee4b, binaire 1fe4c9bd8786f21de8962229d3c88eb481176712, CI 39651736580. Installation en mise à jour 0.2.0 possible. Validation physique Samsung ouverte ; aucune fusion main ni Release.

### MYN-007 — Bac mobile, lancer sur table et lisibilité — Livré, à valider sur Samsung
21/10/2026, retour de Fab sur la 0.3.0 : voir le bac suivre les mouvements du téléphone, activer l'accéléromètre par défaut, lancer les yut plus haut et les laisser retomber sur la table ; envisager des rebords. Demande de noir laqué et de rouge bois de cèdre pour mieux distinguer les éléments, de quatre yut alignés vus du dessus en haut du HUD, du nom par défaut « Joueur 1 » à la place de « Fab », et de textures plus présentes.
Point à préciser avec Fab : noir/cèdre rouge désignent-ils les deux faces des bâtonnets ou les couleurs des équipes ? Les quatre équipes restent une exigence acquise ; ne pas les supprimer par déduction. Intention de bac mobile comprise comme mouvement visible lié au téléphone, à raccorder aux collisions. Audit réalisé, pas de modification produit ni nouvel APK pour MYN-007 à ce stade.

MYN-007 — 22/10/2026 : Fab autorise « Super, on y va ». Réalisation 0.4.0 engagée ; choix technique annoncé : noir laqué/cèdre rouge sur les deux faces des yut. Quatre équipes conservées. Plan docs/plan-bac-v040.md.

MYN-007 — intégration 22/10 : changements 0.4.0 codés ; tests unitaires 32/32. Vérifications navigateur, revue et fabrication Android en cours. Dernier APK vérifié reste 0.3.0.

MYN-007 — revue traitée : retombée recentrée avec marge après contacts entre yut ; nouvelle partie en vol réinitialise la physique. 34 tests verts et build Web. Smoke final et APK/AAB en cours ; aucun paquet 0.4.0 annoncé avant preuve.

MYN-007 — livraison technique vérifiée le 22/10/2026 : APK/AAB 0.4.0/code 4, signature 0.3.0 conservée, icône et identité inchangées. 34 tests et 16 scénarios verts ; build/lint/signatures et téléchargements contrôlés. Source 0155dc784e1583b1ffe4a2ee16c354d02e36b64f, binaires 8b1da4710fc4b4dd16b0a102e84d85bf0a5e4d26, CI 39724824806. Choix noir laqué/cèdre rouge appliqué aux faces, quatre équipes conservées. Mémoires/PR mises à jour ; validation Samsung ouverte, aucun merge main/Release.

### MYN-008 — Pions contrastés et bac manipulable sans traversée — Livré, à valider sur Samsung
22/10/2026 : Fab valide l’aspect cèdre/noir des yut et demande ces matières également sur les pions : deux bois naturels (cèdre rouge, bois clair sapin ou chêne) et deux laques (noir, vert au choix, écritures blanches). Choix agent annoncé : chêne clair et vert sapin laqué. Corriger le bac qui ne peut pas être soulevé au toucher et dont le fond est traversé par le socle/table lorsqu’il s’incline (capture 25378.jpg). Autorisation : « si tu peux faire ça… on va déjà tenter comme ça ». Réalisation ciblée 0.4.1 ; aucune demande de changer les règles.

### MYN-009 — Environnement autour de la table — Plus tard, selon Fab
22/10/2026 : rendre l’environnement moins sobre ; explicitement reporté après les deux corrections MYN-008. Aucun décor supplémentaire à réaliser dans cette intervention.

MYN-008 — code 0.4.1/code 5 réalisé, 36 tests locaux et build Web passent. Matières et interaction tactile attendent contrôle visuel ; APK/AAB à fabriquer.

MYN-008 — 22/10/2026 : implémentation et revue indépendantes réalisées. Retour du bac conservé après interruption par un lancer ; plafond de validité adapté au bac soulevé. 38 tests unitaires passent. Validation UI finale et fabrication Android encore en cours ; aucune livraison 0.4.1 déclarée.

MYN-008 — Livraison technique vérifiée 0.4.1/code 5 le 23/10/2026. CI [39917902942](https://github.com/greenpower2669/Max-YutNori/actions/runs/39917902942) réussie : 38/38 tests unitaires, 20/20 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Même certificat APK/AAB que 0.4.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Source `f012219b9bf356e4c1c0938729b9007ef49a2e38`, binaires/preuves `95039cf53512f6fb358233ce6f0f8e4fd589079c`. Téléchargements bruts HTTP 200, intégrité et SHA-256 comparés. Installation en mise à jour de 0.4.0 sans désinstallation : signature, identité et icône conservées. Essai physique Samsung SM-A576B Android 16 attendu pour le confort tactile, la lisibilité et le capteur. Décor environnant reporté MYN-009 ; aucune fusion main ni Release définitive.
