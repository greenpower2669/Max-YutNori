# Max-YutNori — Historique de diagnostic

## 2026-10-19 — MYN-D001 — Identifier le bon export
- Fait : Max-YutNori ne contenait que README et LICENSE ; les cinq mémoires étaient absentes.
- Fait : FabYut contient les sources Unity et des artefacts intermédiaires sous Library/Bee, pas d'export Web complet trouvé à la racine.
- Résolution retenue : récupérer l'export public réellement joué sur Unity Play, version figée par ID ; ne pas mélanger les binaires intermédiaires de Library avec les fichiers publiés.
- Inconnue conservée : correspondance exacte entre le commit source et l'export publié.

## Contrôles
Intégrité de l'export, lancement sans accès réseau, absence de ressource manquante au démarrage, compilation/lint Android et signature APK vérifiés. Tactile et audio sur Samsung restent à valider.

## 2026-10-19 — Contrôle export
Quatre fichiers récupérés depuis l'export publié et décompressés : données 46 173 021 octets, WASM 22 196 778, framework 372 572, loader 20 672. Empreintes conservées dans upstream-web-build.json. Vérification des signatures binaires UnityWebData et WASM passée ; syntaxe launcher.js validée par node --check.

## 2026-10-19 — Infrastructure de livraison
Le clone Git public fonctionne, mais git push local n'a pas d'identifiants. Utiliser le connecteur GitHub autorisé pour le code texte, puis laisser CI récupérer les binaires publics avec empreintes et les committer. Évite de transporter 69 Mo en Base64 via l'outil texte.
L'installation Chrome locale a reçu une archive invalide ; le test de démarrage sera exécuté sur le Chrome du runner GitHub. Aucune affirmation de test navigateur local passé.

## MYN-D002 — Configuration SDK du premier build CI
Run 39257409443 échoué avant compilation : setup-android demande par défaut l'ancien package `tools`, désormais absent du catalogue SDK. Cause confirmée par « Failed to find package 'tools' ». Correctif ciblé : demander explicitement `platform-tools`, `platforms;android-36`, `build-tools;35.0.0`. Reprise de CI pour valider.

## MYN-D003 — Revue de robustesse
- Restaurateur : une requête réseau était faite même si les quatre fichiers locaux étaient valides. Reproduit en interdisant fetch (échec observé), puis corrigé en contrôlant les empreintes locales d'abord. Test `node scripts/test_offline_restore.mjs` ajouté.
- Smoke : les erreurs Unity écrites via console.error n'étaient pas bloquantes. Elles sont désormais conservées avec leur niveau et font échouer le contrôle, comme les exceptions JS. La capture reste à inspecter ; GAME_READY seul ne valide pas les règles du jeu.

## MYN-D004 — Contrôle Retour Android 16
Run 39257579699 : restauration des binaires, démarrage Unity hors réseau et assembleDebug réussis ; lintDebug bloque sur GestureBackNavigation à cause du fallback onBackPressed. Le code enregistre déjà OnBackInvokedDispatcher à partir d'API 33. Le diagnostic ignore ce chemin natif et signale l'ancien override destiné aux API 26-32. Annotation limitée à ce fallback, justification dans le code ; aucun désarmement global de lint, callback Android 16 conservé.
Capture web-startup.png inspectée : scène 3D des quatre bâtonnets, joueur 1, commandes tactiles et bouton Suivant visibles. Logs : Unity 2022.3.12f1, WebGL 2 initialisé, aucun fichier absent et aucune requête externe. Cette preuve ne remplace pas le test Samsung.

## 2026-10-19 — Livraison technique vérifiée
Run 39301357387 : restauration et empreintes OK ; régression reconstruction sans réseau OK ; smoke renforcé avec console.error bloquante OK (ready true, external/missing/errors vides) ; assembleDebug et lintDebug OK ; apksigner vérifie la signature v2. Package fr.fab.maxyutnori, version 0.1.0/code 1, min SDK 26, target SDK 36. Fichier APK brut exposé sur la branche (46 781 687 octets). Revue indépendante : aucun défaut critique runtime identifié ; corrections bootstrap et preuve de smoke intégrées. Les tests Chrome ne prouvent pas le comportement WebView Samsung.

## 2026-10-20 — MYN-D005 — La musique ne se répète pas
- Signalement de Fab : le son devait boucler ; doute sur le choix de la dernière version et demande de faisabilité sans recompilation.
- Fait vérifié directement dans le binaire embarqué, SHA-256 conforme au manifeste : un seul AudioClip, `ARIRinstr`, 239,3279877 s (~3 min 59 s), et un seul AudioSource actif ; démarrage automatique, `Loop=false`, clip lié `ARIRinstr`. Inspection UnityPy 1.25.4, aucune écriture du fichier.
- Interprétation : la configuration explique une lecture unique et un arrêt au terme du morceau si aucun script ne le relance. Le moment exact et l'état du contexte Web Audio sur Samsung restent non observés ; ne pas exclure un second problème de pause/reprise si l'arrêt survient avant la fin.
- Comparaison de versions : les sources publiques comportent des corrections de février/avril 2024 ; le dépôt secondaire privé examiné ne fournit pas d'indice de version plus récente. Aucun fichier privé recopié dans ce dépôt public. La correspondance exacte entre sources et export Unity Play reste non établie.
- Faisabilité : la couche JavaScript publiée implémente la commande de boucle. Une intervention ciblée sur la musique peut être envisagée sans reconstruire le WASM ni utiliser Unity ; à prototyper et vérifier pendant au moins deux cycles. Le paquet Android hors ligne devra néanmoins être recréé/signé puis installé pour embarquer une modification.
- Aucun correctif, build, merge ni Release effectué pendant cet audit. Documentation Unity 2022.3 : https://docs.unity3d.com/2022.3/Documentation/Manual/webgl-audio.html (AudioSource.loop pris en charge).

## MYN-D006 — Réinitialisation de l’espace temporaire
20/10/2026 : fichiers locaux non sauvegardés sur GitHub perdus entre deux tours. Branche distante intacte à f881a58. Reconstitution depuis la synthèse technique, avec checkpoints GitHub fréquents. Ne pas attribuer les anciens tests au nouveau code sans les rejouer.
