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

## MYN-D009 / MYN-D010 — Livraison vérifiée
CI [39651736580](https://github.com/greenpower2669/Max-YutNori/actions/runs/39651736580), source `3ede60382b264521fa1f5b403ceabccaf41cee4b`, binaire `1fe4c9bd8786f21de8962229d3c88eb481176712`. 25/25 tests unitaires et 14/14 scénarios navigateur hors ligne ; aucune erreur JS ni requête extérieure. Compilation APK/AAB et lint Android réussis ; APK signé v2, mêmes certificats APK/AAB et 0.2.0. Téléchargements bruts HTTP 200 et SHA-256 comparés.

APK : 7,933,969 octets, SHA-256 `fa0d4599b52f660e6e2d293db9a8c87ff834afc22d62d97155ed1d59df618e3e`. AAB : 7,607,974 octets, SHA-256 `98cff74fd899263dd146144341f8f463a5f41f3a1eaf13ba9ffa908ea7e532c7`.

Les deux nouvelles régressions sont vertes dans le smoke final. Certificat commun : 0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a. Cache existant restauré, aucune rotation de clé. Aucune permission Internet et aucun runtime Unity dans le paquet. L'AAB conserve les avertissements habituels du certificat de test autosigné ; il n'est pas un paquet Play de production. Le capteur est testé par injection côté navigateur ; pas d'essai physique Samsung revendiqué.

## MYN-D011 — Audit du retour bac/textures après 0.3.0
21/10/2026, lecture du code : physics.mjs crée un fond circulaire et 40 parois fixes ; la table visible de scene.js n'a pas de collision. Un bâton hors du bol est classé invalide. Le pont fournit l'accélération linéaire et main.js l'utilise uniquement pour déclencher le lancer ; aucun déplacement du bac n'en résulte. Pour une inclinaison stable, il faudra également une mesure d'orientation/gravité (documentation Android : https://developer.android.com/develop/sensors-and-location/sensors/sensors_motion).
Les bâtonnets utilisent un seul matériau bois sur toute leur géométrie, avec des marques rapportées et des teintes proches. Les textures procédurales bois/tissu existent mais leur contraste et relief sont faibles ; le retour de Fab porte sur leur lisibilité effective. Aucun correctif produit appliqué pendant cet audit. Noir laqué/cèdre rouge à attribuer après clarification.

MYN-D011 — réalisation autorisée le 22/10 : remplacer la limite de validité circulaire par les limites physiques de la table, avec collisions de rebords ; le bac visible doit partager la transformation du corps cinématique. Ne pas faire dériver le résultat après stabilisation.

MYN-D011 — tests rouges : résultat hors bac invalide/chute hors plan, rebord absent, sommet trop bas, corps cinématique/calibration absents. Première correction à impulsion fixe : un yut survole le rebord à y=1,94 m ; visée balistique bornée vers l'intérieur, sans changer la détermination physique des faces. Tests table, rebord, hauteur, bac, calibration et ancien scénario de 12 lancers passent (suite 32/32). Vérification visuelle et Android encore à faire.

## MYN-D012 — Revue 0.4.0 : échappement et nouvelle partie en vol
22/10/2026 : deux P2 reproduits. Départ avec contacts entre bâtonnets dépassant la visée proche du bord ; cible recentrée sur la table, 72 lancers déterministes sans perte après correction. Nouvelle partie pendant le vol : rolling=false mais physics.active=true bloquait prepare ; reset physique explicite ajouté. Deux régressions unitaires rouges puis vertes, scénario UI ajouté. Suite finale 34/34 et build Web passent. Détails docs/revue-v040.md ; Android encore à vérifier.

## MYN-D012 — Livraison 0.4.0 vérifiée
CI [39724824806](https://github.com/greenpower2669/Max-YutNori/actions/runs/39724824806) réussie : 34/34 tests unitaires, 16/16 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Même certificat APK/AAB que 0.3.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Source `0155dc784e1583b1ffe4a2ee16c354d02e36b64f`, binaires/preuves `8b1da4710fc4b4dd16b0a102e84d85bf0a5e4d26`. Téléchargements bruts HTTP 200, intégrité et SHA-256 comparés.

APK : 7,938,053 octets, SHA-256 `ff5920323e17843bbf4fce1ea49caa0dfa942f11aeeefebd152c3af2bc90158b`. AAB : 7,611,631 octets, SHA-256 `47476f2916660179382cd630ece58c0cf3a1a8b813a03a856899cd0a3b1a22c5`.

Le test final IA pouvait observer son lancer automatique après 1,6 seconde ; horloge figée uniquement dans la fixture de ce scénario pour tester le refus du capteur au repos, sans modifier le jeu. CI finale verte. AAB autosigné de test, avertissements jarsigner attendus ; aucun runtime Unity, icône et musique originale présents. Test physique Samsung encore attendu.

## MYN-D013 — Socle traversant le bac et pions délavés
22/10/2026, capture Fab 25378.jpg. Source 0.4.0 : bac cinématique à y=0,65+lift, inclinaison indépendante, sans contrainte de non-pénétration. Le socle fixe culmine à 0,47 ; le fond local descend à −0,24 et son bord descend avec la rotation. Test physique rouge : fond à 0,388 au-dessus du socle (pénétration), levage maximum 0,2 au lieu d’un soulèvement visible. Le tactile en vue Bol déclenche uniquement un lancer : aucun déplacement du bac prévu. Pions : matériau uniforme sans cartes bois, couleurs pastel et écriture sombre pour toutes les équipes. Corrections MYN-008 en cours ; deux matières bois et deux laques demandées, yut actuels validés.

MYN-D013 — correction locale : hauteur de sécurité calculée sur chaque pose intermédiaire ; marge sous le bac devant table et socle, levage borné à 1,6. Deux régressions rouges puis vertes. La hauteur minimale au repos relevée changeait le point de départ des yut : l’ancien contrôle avait 9/12 lancers lisibles. Hauteur de lâcher au repos conservée à 2,35, augmentée seulement si le bac est levé ; aucune face forcée. Suite complète 36/36 verte, build Web réussi. Smoke et revue en cours.

## MYN-D014 — Retour du bac interrompu par le lancer (revue 0.4.1)
Reproduit par revue indépendante sur 4d65b31 : relâcher puis lancer 100 ms après laisse le bac à y=1,369 au lieu de 0,78. freezeTray écrasait la cible, setTrayPose ignorait le retour demandé pendant active et la boucle ne préparait pas le bac en mode auto/phase déplacement. Correction : returnTray met une cible neutre en attente, freezeTray ne la détruit plus ; prepare est autorisé pour le retour en dehors des conditions de saisie, mais toujours bloqué en vol/pause. Régression rouge (returnTray absent), puis verte ; cas avant et pendant le vol.

## MYN-D015 — Résultat valide rejeté dans le bac soulevé
Le plafond historique p.y>2 rejetait des yut stables et lisibles au fond du bac soulevé à y=2,38. Régression rouge puis verte avec les vrais corps Rapier. La borne haute dépend maintenant du volume incliné du bac et de l’étendue du yut. Seuils de stabilité, lecture des faces et limites latérales inchangés. Suite complète : 38/38 ; aucun résultat recalculé lors du retour ultérieur du bac.
