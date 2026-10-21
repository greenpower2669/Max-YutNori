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

## MYN-D007 — Relecture de la refonte
20/10/2026 : trois tests de régression observés rouges : route dépendant du numéro au centre ; sélection du pion supérieur d'une pile ; acceptation d'un lancer non stabilisé après 12 s. Corrections inscrites dans la branche et vérification complète relancée. Contrôles UI ajoutés : crédits sans navigation et zone 3D sans chevauchement mobile.
L'amortissement angulaire plus fort réduit les oscillations ; le résultat reste lu sur les faces physiques, sans tirage de valeur préalable.

## MYN-D008 — Chemin du cache de signature debug
Les deux builds natifs réussis ont des certificats différents. Le log 39495883163 indique « Path Validation Error » : le chemin de clé présumé n'existe pas et aucun cache n'est enregistré. Correction : chemin de clé explicite dans Gradle, création contrôlée, restauration/sauvegarde explicites du cache et comparaison de l'APK avec le certificat public. Si un certificat a déjà été livré et que la clé manque, le build s'arrête plutôt que changer silencieusement de signature. La clé privée n'entre pas dans Git. Ce cache reste une conservation de test, pas une sauvegarde durable de clé Play.

## MYN-D007 / MYN-D008 — Vérification finale
CI 39496484674, source 6c75714f0e7c2f8dddaaa0b77aec560cfaab1767, binaire dd5c1e2a5e12da39650b5bf912764a99b169fa90 : 11/11 tests, 9/9 scénarios navigateur, compilation et lint Android réussis. Tests de regroupement, de sélection de pile et de délai physique rouges avant correction, verts dans la suite finale. Crédits internes et bandeau mobile vérifiés dans le navigateur.
Le log confirme « Cache saved with key: max-yutnori-native-debug-key-v2 ». Le certificat de l'APK correspond à la clé explicitement configurée, SHA-256 certificat 0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a.
APK 7 923 881 octets ; SHA-256 1952ed047c72664f038a4c98d7dea6b6fd82727edb068197453fe2e55ab9a038. Aucune ancienne ressource Build Unity embarquée. Test sur Samsung physique restant à faire.

## MYN-D006 — Extension des équipes
21/10/2026 : constat confirmé de limites à deux équipes et IA globale. Tests nouveaux échouent sur version 0.2.0 ; extension moteur et migration passent 17/17 tests. Validation interface et téléphone encore ouverte.

## MYN-D007 — Noms longs et intégration 0.3.0
21/10/2026 : portrait 412 px, nom « Fab avec un nom très long » impose une largeur minimale intrinsèque de grille : scrollWidth=453. min-width:0 sur tour/commandes corrige à 412 ; régression dans smoke. Le test capteur attendait false alors que son fournisseur factice était initialement undefined : initialisation du harnais corrigée, fournisseur réel déjà désactivé. CDN navigateur retourne une archive tronquée ; navigateur local obtenu par paquet npm puis extraction sans chown. Aucun contournement appliqué au produit.

## MYN-D009 — Horloge et attente des halos en CI
21/10/2026, run 39597634373 : 25 tests et build Web passent ; smoke échoue sur angle identique après une attente fixe de 120 ms. Le renderer logiciel peut ne pas produire d'image dans ce délai. Le test doit attendre une rotation observée, et vérifier l'immobilité en mode réduit sur de vraies images. L'angle négatif observé (-2,702119) révèle aussi un premier timestamp requestAnimationFrame antérieur à performance.now() après l'initialisation lourde : borner dt à zéro évite le saut d'animation inverse. Régression ajoutée avant correction ; nouveau résultat à inscrire.

MYN-D009 — régression observée rouge localement avec un timestamp initial retardé de 5 s ; dt désormais borné à [0 ; 0,1] s. L'attente de rotation remplace les 120 ms fixes, et le mode réduit est contrôlé sur deux images.

## MYN-D010 — Son de victoire interrompu
La revue indépendante trouve un défaut P2 : playMove lançait les notes puis ouvrait immédiatement le dialogue de victoire, dont la pause les arrêtait dans la même tâche. Régression navigateur observée rouge (« victory notes must play before the dialog pauses audio »). Correction : état gagné immédiat, présentation du dialogue après 650 ms via l'horloge de jeu ; une pause explicite garde priorité et une nouvelle partie annule l'ouverture en attente. Le test observe les voix actives pendant l'événement de victoire puis attend le dialogue. Aucun autre défaut concret relevé dans la revue.
