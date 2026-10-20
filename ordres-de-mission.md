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

### MYN-005 — Refonte sans Unity — En cours
20/10/2026 : autorisation « Ok, lance toi ». Recréation WebGL / WebAssembly, physique 3D, graphismes améliorés, musique en boucle, capteurs prévus plus tard. Contrat détaillé : `docs/refonte-webgl.md`. Branche `feature/native-webgl-v020`. APK test 0.2.0 livré, CI 39496484674.

MYN-005 — précision de livraison : APK natif 0.2.0, environ 8 Mo, signature debug distincte de 0.1.0. Prévenir Fab de la désinstallation nécessaire et de la suppression des anciennes données locales. Compilation finale vérifiée : CI 39496484674, source 6c75714f0e7c2f8dddaaa0b77aec560cfaab1767.

### MYN-005 — Livraison de test vérifiée
20/10/2026 : APK natif 0.2.0 de 7 923 881 octets, source 6c75714f0e7c2f8dddaaa0b77aec560cfaab1767, binaire dd5c1e2a5e12da39650b5bf912764a99b169fa90, CI 39496484674. Tests et contrôles réussis, relecture traitée. Lien brut dans todo.md. Validation humaine Samsung attendue ; capteurs reportés à une mission suivante. Aucune fusion main ni publication définitive.

### MYN-006 — Équipes, repères lumineux et sensations — Cadrage
20/10/2026 : Fab demande jusqu'à quatre couleurs/équipes, plusieurs participants humains ou IA par équipe, sons, accéléromètre, textures et lumière améliorées. Il confirme ensuite que les déplacements sont corrects et précise la demande visuelle : aura tournante sur le pion sélectionné et ses destinations. Périmètre confirmé ; proposition de conception dans `docs/evolution-equipes-capteurs-halos.md`, à relire avant implémentation. Aucun nouvel APK pour cette mission à ce stade.
