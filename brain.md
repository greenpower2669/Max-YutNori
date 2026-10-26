## Contrat demandé MYN-014 — 0.8.0 en cours
Plus de place centrale et pions tactiles, bandeaux/fiches compacts et plus transparents ; équipes 1–2 gauche/3–4 droite (interprétation annoncée). Vue unique à gauche de musique ; actif bicolore pulsé. Panorama réellement visible sans pointillés ; nouvelle musique Arisongs MP3 locale en boucle. Table flottante/fresque/règles/gestes/v4/identité/signature conservés. Voir docs/plan-visibility-v080.md ; non livré.

## Contrat courant 0.7.0/code8 — 26/10/2026

Pions posés sur la table, les cases ou les piles ; soulèvement avant traversée, dépôt et annulation sûrs. Vue de dessus avec pincement à deux doigts, même en tenant un pion. Bandeaux semi-transparents et réserves accessibles au cadrage initial. Panorama animé par zones : eau, chutes, brume, nuages et lumières. Fresque originale agrandissable dans les règles. Intensité de l’équipe active variable sur un cycle doux de 2,8 secondes, pion choisi plus lumineux ; éclairage fixe en animations réduites. La table flottante est volontaire et préservée, les règles sont inchangées.

La pulsation reste visible au minimum, sans coupure franche ; pause fige tous les effets, animations réduites les rendent fixes. Le pion sélectionné monte même si la caméra action est désactivée. Zoom de dessus indépendant du suivi caméra. Le Back-do exige le bâton marqué : explication textuelle conservée auprès de la fresque.

CI [40250007382](https://github.com/greenpower2669/Max-YutNori/actions/runs/40250007382) réussie : 71/71 tests unitaires, 41/41 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `378f987875774d90bca29b5b5acbdf2a1588f962`, binaires/preuves `a034f9c722f402dd0bfd3f0c1d9c593f976bbc6f`. Téléchargements HTTP 200, intégrité ZIP et SHA-256 contrôlés. Certificats extraits des vrais APK v2/AAB : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identiques à 0.6.0. Les quatre PNG embarqués et la musique originale sont conservés octet pour octet.

Mise à jour de 0.6.0 sans désinstallation : identité fr.fab.maxyutnori, icône, signature de test et sauvegarde v4 conservées. APK paysage (les deux orientations), portrait vérifié pour le Web. Confort tactile, visibilité des halos, performance des effets et capteurs restent à valider sur Samsung SM-A576B Android 16. Aucun merge main ni Release définitive.

## Historique — états antérieurs conservés

## Réalisation MYN-013 — 0.7.0, non livrée
Réserve −.31, plateau .126, pile .21 ; montée/déplacement/descente et offsets de pile préservés, annulation repose le pion. Vue verticale et pinch indépendants, HUD translucide sur décor, fresque originale agrandissable, panorama animé par zones. Pulsation équipe 2.8s douce et sélection plus forte ; fixe en mode réduit. Table flottante et règles inchangées.

## Contrat suivant MYN-013 — précision Fab du 25/10/2026, non implémenté
La table flotte volontairement dans le décor. Corriger uniquement les pions : au repos sur table/plateau/pile selon leur position ; dès sélection, soulèvement visible, dégagement du plateau avant translation depuis la réserve ; déplacement sous le doigt et descente sur destination. Un retour invalide/annulation conserve le résultat et évite toute traversée. Halos, ombres, labels et caméra doivent rester cohérents.
Autres demandes : bandeaux haut/bas semi-transparents, vraie vue de dessus avec pinch in/out, effets localisés doux du panorama (eau, brume, nuages, lumières) et fresque agrandissable dans les règles. Aucun changement de règles demandé. Original de la fresque conservé sous docs/references/rules-fresco-25492.png ; pas encore embarqué. Prompt de reprise : docs/passation-2026-10-25.md. Passation documentaire uniquement ; 0.6.0 demeure la référence livrée.

## Livraison vérifiée 0.6.0/code7 — 25/10/2026
Sens latéral du bol corrigé ; tous les pions et réserves de l’équipe active portent une lumière douce, sélection plus marquée. Bol soulevable au doigt, effacé après un résultat stabilisé, réapparu pour ranger les quatre yut avant le tour suivant ou une relance. Faces/résultats conservés, pause et nouvelle partie respectées. Titre transparent original, panorama 360° et décor bois avec cartes de gravure en creux, normales et rugosité.

CI [40168413538](https://github.com/greenpower2669/Max-YutNori/actions/runs/40168413538) réussie : 62/62 tests unitaires, 34/34 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `a5d12ed492e0ad0656184cb68ab977280ef15c48`, binaires/preuves `03b939304c60a7923f99d560c906015cd6782614`. Téléchargements HTTP 200, intégrité ZIP et SHA-256 contrôlés ; certificat APK v2 et certificat AAB extraits des vrais fichiers téléchargés identiques à 0.5.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Les trois PNG embarqués sont identiques aux originaux fournis par Fab.

APK : 9,533,239 octets, SHA-256 `1ac1b449e11c0b123d52ad1bb0a5ed14ebd2ca52aa5c29dbc90bef690fc1d3a9`.
AAB : 9,150,265 octets, SHA-256 `17e93b234e466b916cb4e9d28a10350ca969e0b2401fb6d33f867c04dfe15b83`.

Mise à jour de 0.5.0 sans désinstallation : identité fr.fab.maxyutnori, icône, signature et sauvegarde v4 conservées. Les gestes, le confort graphique et le sens réel dans les deux paysages restent à valider sur Samsung SM-A576B Android 16. Le relief est dérivé des traits de l’image, pas d’une sculpture 3D mesurée. Aucun merge main ni Release définitive.

## Historique — états antérieurs

## Bol invisible au repos
Après disparition complète, le bol et son socle sont désactivés physiquement et le bol retrouve sa pose neutre. Cela termine aussi un retour interrompu par un lancer, sans déplacer les yut déjà figés.

## Précisions 0.6.0 après revue
Le rangement se dégage du bord avant montée/traversée/descente, avec marge pour toute la longueur des yut. Rotation pendant la traversée en hauteur. Un coup rapide annule le retour différé au plateau dès qu’il demande le rangement ; le bol reste cadré. La victoire attend le rangement terminé avant d’ouvrir le dialogue.

## Réalisation locale 0.6.0
BowlCycle sépare les phases ready/hiding/hidden/appearing/stowing des règles. Les yut dans le bol montent au-dessus du rebord puis rejoignent la table ; résultat sauvegardé inchangé. Corps cinématiques pendant présentation, collisions bol/socle désactivées lorsqu’ils disparaissent. Rangement avant tout nouveau lancer, y compris victoire avant dialogue. PNG originaux embarqués, surface bois au ratio 16:9 ; gravure dérivée du contraste local, pas une géométrie sculptée mesurée.

## Contrat 0.6.0 autorisé, en cours — 25/10/2026
MYN-012 : bol suit le sens latéral du téléphone ; levage tactile conservé. Après résultat stable, disparition et maintien du résultat ; réapparition/rangement avant chaque nouveau lancer (fin de tour, bonus, capture optionnelle, invalidité). Bloquer lancer/capteur pendant transition ; pause/reset sûrs. Équipe active : lueur permanente douce sur ses pions/réserves et HUD, sélection distincte. MYN-009 : intégrer images Fab titre/panorama/bois, matériau gravé en creux (hauteur/normale/rugosité). Moteur v4/caméra action/signature inchangés. 0.6.0/code7 prévue, non livrée.

## Livraison vérifiée 0.5.0/code6
Caméra action douce (proche, latérale, recul, suivi), zoom avec le second doigt, pions sélectionnables directement et glissables sur un halo légal, réserves espacées. Tours restants individuels rétablis, Back-do jouable au départ, aucun passage de résultat ; résultats accumulés jouables dans l’ordre voulu. Lancers auto/IA plus hauts. Les invalidités physiques proposent toujours une relance.

CI [40078589575](https://github.com/greenpower2669/Max-YutNori/actions/runs/40078589575) réussie : 51/51 tests unitaires, 27/27 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `4a28e1c84ef76f628a85f12dae0b7f2c467d9bfe`, binaires/preuves `c37c719642b5e8b6bb14c40fb2a5ef4e054061f9`. Téléchargements HTTP 200, ZIP et SHA-256 contrôlés ; certificat APK v2 et certificat AAB extraits des fichiers téléchargés identiques à 0.4.1 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 7,942,389 octets, SHA-256 `4507098b866055aeee207bfafbd17b0dd43145ee9a7d39df6f95a368113548e2`.
AAB : 7,615,363 octets, SHA-256 `18f9380af968b8efb8793bfb8bad0bfe40aadfde4a6bdc38b94f9475736d8885`.

Installation en mise à jour de 0.4.1 sans désinstallation : identité fr.fab.maxyutnori, icône et signature conservées. Sauvegarde v4 séparée, anciens v2/v3 conservés ; les compteurs absents des anciennes parties sont initialisés à 1 (0 pour les pions terminés), sans inventer leur historique. Confort caméra/tactile et capteur encore à valider sur Samsung SM-A576B Android 16. Décor MYN-009 reporté ; aucune fusion main ni Release définitive.

## Historique des étapes précédentes

## Point de vérification 0.5.0 — 23/10/2026
0.5.0 intégrée : caméra action ON par défaut, option Confort pour la couper ; animations réduites sautent la cinématique. Glisser n’engage le moteur que sur un halo légal ; le deuxième doigt zoome et son relâchement conserve la prise. Le recul caméra cadre les destinations selon les deux dimensions et éloigne le brouillard. Sauvegarde v4 distincte, anciens v2/v3 conservés.

## 23/10/2026 — Réalisation autorisée 0.5.0
Contrat 0.5.0 : compteur individuel conservé dans les groupes, fin à zéro, capture remet à 1. Migration v4 sans effacer v2/v3. Toucher/glisser et caméra action douce ; animations réduites respectées.
Plan docs/plan-action-v050.md ; suivi docs/action-progress.md.

# État actif — Max YutNori 0.4.1 livré pour test / MYN-008

## Retour Fab du 23/10/2026 — MYN-010, sans coder
Le contrat demandé exige un compteur de tours restants par pion : franchissement arrière de la ligne = +1, franchissement avant = −1, arrivée seulement à zéro. Le code original fabchoc.cs conserve Turnleft et l’écrit dans Globals.SaveTurns. La réécriture ne garde que position/route, interdit Back-do depuis la réserve et propose alors « Passer ce résultat ». Ce choix de réécriture est contraire à la demande actuelle de fidélité ; il n’est pas une règle attribuable à Fab. Le scénario Samsung exact n’est pas connu. Aucun correctif appliqué pendant cet audit.
L’ordre libre des résultats accumulés existe déjà une fois les relances terminées. La sélection tactile directe existe en phase déplacement et hors vue libre, mais le glisser-déposer des pions manque. Demandes conservées : réserver un peu plus d’espace aux pions en attente, saisir/déplacer sous le doigt vers des destinations autorisées lisibles, lancer automatique plus haut. L’auto utilise actuellement la même force réglée que le bouton (60 % par défaut), sans impulsion verticale propre. Voir todo.md et MYN-D018. Décor MYN-009 toujours différé.

[APK 0.4.1 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.4.1-debug.apk) · [AAB de test 0.4.1](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.4.1-debug.aab).

Pions chêne clair, cèdre rouge, noir laqué et vert sapin laqué ; bois texturés, marques contrastées et halos cohérents. Faces des yut conservées. Bac soulevable au doigt dans Bol et lancer : glisser vers le haut pour lever, latéralement pour incliner, relâcher pour reposer. Le dessous du bac reste au-dessus de la table et de son socle pendant les transitions. Retour conservé si un lancer interrompt la descente ; résultats lisibles dans un bac levé acceptés.

Le retour demandé se conserve pendant le vol et reprend même en phase déplacement/auto ; le résultat déjà mémorisé ne se recalcule pas. La saisie exige un tour humain, avant le lancer et hors pause/auto.

CI [39917902942](https://github.com/greenpower2669/Max-YutNori/actions/runs/39917902942) réussie : 38/38 tests unitaires, 20/20 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Même certificat APK/AAB que 0.4.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Source `f012219b9bf356e4c1c0938729b9007ef49a2e38`, binaires/preuves `95039cf53512f6fb358233ce6f0f8e4fd589079c`. Téléchargements bruts HTTP 200, intégrité et SHA-256 comparés.

APK : 7,939,321 octets, SHA-256 `29126146aad9b1eacc08571060d2ccc74597b2417555b5ce906c3711eb747fcf`. AAB : 7,612,736 octets, SHA-256 `78ad6e188a8e53ab3b6f1e3a51cd49110e4f98f0106b5b486a814eb6e18222bb`.

Installation en mise à jour de 0.4.0 sans désinstallation : signature, identité et icône conservées. Essai physique Samsung SM-A576B Android 16 attendu pour le confort tactile, la lisibilité et le capteur. Décor environnant reporté MYN-009 ; aucune fusion main ni Release définitive.

Revue : docs/revue-v041.md. Diagnostics MYN-D013 à MYN-D017, suivi todo.md. Branche feature/native-webgl-v020, PR brouillon #2.

## Livraison précédente — Max YutNori 0.4.0

MYN-007 autorisé et réalisé le 22/10/2026. Branche feature/native-webgl-v020, PR brouillon #2. [APK 0.4.0 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.4.0-debug.apk) · [AAB de test 0.4.0](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.4.0-debug.aab).

Bac mobile lié aux capteurs ON par défaut, lancers hauts vers la table avec rebords, faces noire laquée/cèdre rouge, HUD fidèle des quatre yut, Joueur 1 et textures renforcées. Quatre équipes conservées. Réglage capteur OFF mémorisé, pause/IA/vol protègent le jeu. Résumé indépendant des faces sauvegardé ; nouvelle partie annule le vol physique.

CI [39724824806](https://github.com/greenpower2669/Max-YutNori/actions/runs/39724824806) réussie : 34/34 tests unitaires, 16/16 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Même certificat APK/AAB que 0.3.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Source `0155dc784e1583b1ffe4a2ee16c354d02e36b64f`, binaires/preuves `8b1da4710fc4b4dd16b0a102e84d85bf0a5e4d26`. Téléchargements bruts HTTP 200, intégrité et SHA-256 comparés.

APK : 7,938,053 octets, SHA-256 `ff5920323e17843bbf4fce1ea49caa0dfa942f11aeeefebd152c3af2bc90158b`. AAB : 7,611,631 octets, SHA-256 `47476f2916660179382cd630ece58c0cf3a1a8b813a03a856899cd0a3b1a22c5`.

Deux P2 de revue corrigés et régressions ajoutées ; détails docs/revue-v040.md. Une course du scénario IA a été supprimée par horloge figée uniquement dans sa fixture de test ; aucun changement de temporisation IA produit. Installer en mise à jour de 0.3.0, sans désinstallation. Identité/icône conservées. Validation physique Samsung attendue. Aucune fusion main ni Release définitive.

## Livraison précédente — 0.3.0

Mission MYN-006 approuvée et réalisée. Branche `feature/native-webgl-v020`, PR brouillon #2. [APK direct 0.3.0](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.3.0-debug.apk) (~7,9 Mo) ; [AAB de test](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.3.0-debug.aab).

2–4 équipes de quatre pions, 1–6 participants humains/IA par équipe avec relais au tour complet ; halos tournants assortis à la sélection et aux destinations ; matières bois/tissu et lumière ; sons de collisions et volume effets distinct ; accéléromètre Android optionnel avec sensibilité. Les déplacements restent ceux de la 0.2.0. Sauvegardes v2 migrées en v3 sans perdre le participant ni les résultats ; ancienne sauvegarde conservée.

CI [39651736580](https://github.com/greenpower2669/Max-YutNori/actions/runs/39651736580), source `3ede60382b264521fa1f5b403ceabccaf41cee4b`, binaire `1fe4c9bd8786f21de8962229d3c88eb481176712`. 25/25 tests unitaires et 14/14 scénarios navigateur hors ligne ; aucune erreur JS ni requête extérieure. Compilation APK/AAB et lint Android réussis ; APK signé v2, mêmes certificats APK/AAB et 0.2.0. Téléchargements bruts HTTP 200 et SHA-256 comparés.

APK : 7,933,969 octets, SHA-256 `fa0d4599b52f660e6e2d293db9a8c87ff834afc22d62d97155ed1d59df618e3e`. AAB : 7,607,974 octets, SHA-256 `98cff74fd899263dd146144341f8f463a5f41f3a1eaf13ba9ffa908ea7e532c7`.

Identité `fr.fab.maxyutnori`, version 0.3.0/code 3, icône conservée. Mise à jour par-dessus 0.2.0 sans désinstallation grâce à la même signature vérifiée. Les paquets sont signés pour les tests, pas pour une publication Play. La clé reste en cache CI, sans clé privée dans Git ; sa perte bloque le build.

Contrat : docs/evolution-equipes-capteurs-halos.md ; plan et suivi : docs/plan-evolution-v030.md, docs/evolution-progress.md ; revue : docs/revue-v030.md. Défauts horloge/halos et son de victoire corrigés avec régressions rouges puis vertes (MYN-D009/MYN-D010).

À valider par Fab sur Samsung SM-A576B Android 16 : installation, lisibilité, fluidité, sensibilité et orientation du geste, son prolongé, pause/reprise. Réglages → Lancer au mouvement → Activer l’accéléromètre ; repos bref avant geste. Aucun merge main ni Release définitive.

## Historique du cadrage — MYN-007
Suite demandée : bac mobile au capteur activé par défaut, yut plus hauts retombant sur la table avec rebords envisagés, aperçu supérieur des quatre yut, « Joueur 1 », textures plus marquées. Destination des matières noir laqué/cèdre rouge à confirmer (faces des bâtonnets ou équipes). Audit : bac et collisions fixes, aucune surface physique de table hors du bol, capteur limité au déclenchement et bois presque identique sur toutes les faces. Dernier APK reste 0.3.0 ; cadrage enregistré dans todo.md et ordres-de-mission.md.

---

## Historique du wrapper et de l'audit
# Max-YutNori — Contrat

## Intention validée
Fab veut installer son jeu FabYut existant sur Android. Son PC est cassé. La première étape est une enveloppe APK, sans réécriture du jeu, avec mémoire vivante FabCopilot et dépôt séparé.

## Version de test livrée v0.1.0
- Application Android Java, WebView accélérée matériellement, paysage, contenu local HTTPS intercepté depuis les assets.
- Export Unity Play figé et embarqué : loader, framework JavaScript, WASM et données. Les règles du jeu restent compilées telles quelles.
- Export autonome au démarrage : test réseau externe bloqué réussi, aucune ressource absente. Pas de permission Internet dans l'APK hors ligne.
- L'écran de chargement affiche progression et erreur explicite. Retour Android demande confirmation avant de quitter la partie. Pause/reprise gérées par le cycle de vie WebView.
- Icône représentant le plateau et les bâtonnets ; nom affiché « Max YutNori ».
- Première identité de test réalisée : `fr.fab.maxyutnori`, code 1, version 0.1.0. Aucun ancien package Android ou publication Play trouvé dans le nouveau dépôt initial.
- Signature debug de test uniquement ; publication Play et signature de production hors de cette mission.

## Limites connues
Les sources Git sont Unity 2022.3.12f1. L'export publié peut provenir d'un autre état ; ne pas prétendre prouver leur équivalence. Modifier le C# exigera une nouvelle compilation Unity ou un portage ultérieur distinct.
La compilation et le démarrage sur navigateur ne prouvent pas le confort tactile, le rendu ou le son sur Samsung : validation Fab obligatoire.

## Preuves de livraison
`temp/build-info.txt`, `temp/apk-verification.txt`, `temp/SHA256SUMS`, `temp/web-smoke.json` et `temp/web-startup.png` accompagnent l'APK direct. CI : https://github.com/greenpower2669/Max-YutNori/actions/runs/39301357387. APK de test uniquement ; pas de publication Play ni fusion main.

## Audio — constat du 20/10/2026
Fab attend la répétition de la musique. Le binaire embarqué 0.1.0 contient un seul AudioClip (`ARIRinstr`, 239,3279877 s) et un AudioSource actif, démarrage automatique, `Loop = false`. Cette configuration est incompatible avec une répétition automatique assurée par cet AudioSource. Le comportement au moment précis de l'arrêt sur Samsung n'a pas été tracé. Audit MYN-D005, aucune correction appliquée.

## État actif — MYN-005
La refonte remplace le moteur Unity par Three.js et Rapier/WASM. La description v0.1.0 ci-dessus reste historique. Contrat : docs/refonte-webgl.md ; version prévue 0.2.0, pas encore livrée.

## Candidat natif corrigé
La première compilation complète 0.2.0 a réussi (CI 39438116160, environ 8 Mo). Corrections de relecture en cours de validation avant livraison finale. Les capteurs restent une étape ultérieure. La signature debug diffère de 0.1.0 : il faut désinstaller 0.1.0 avant installation, ce qui efface ses données locales.

## Travail 0.3.0 — 21/10/2026
Moteur v3 local : 2–4 équipes, 1–6 participants individuels, migration v2. Interface encore 0.2.0 à adapter ; dernière livraison reste 0.2.0. Plan : docs/plan-evolution-v030.md.

0.3.0 en intégration : interface 2–4 équipes/1–6 joueurs individuels, halos assortis, matières avec relief/reflets, sons des collisions Rapier et accéléromètre Android optionnel. Sauvegardes v3 stockées séparément ; ancienne v2 conservée et migrée. Capteur au repos 350 ms avant geste, non actif en pause, dialogue, lancer, IA ou lancer automatique. Tests unitaires 25/25 ; packaging et revue encore attendus.

## Réalisation active 0.4.0
MYN-007 autorisée. Bac cinématique, table à rebords physique, lancer plus haut, deux faces noir/cèdre rouge, HUD du dernier lancer, capteur ON par défaut migré puis choix mémorisé, premier nom Joueur 1. Plan docs/plan-bac-v040.md ; dernière livraison reste 0.3.0 tant que packaging non vérifié.

0.4.0 implémentée en vérification : bac cinématique Rapier, plan de table/rebords/plateau solides ; pose partagée avec Three ; trajectoire plus haute vers la table. Corps du bac figé pendant le vol, valeurs du résultat prises au repos. Faces noire plate/cèdre bombée, étoile Back-do, résumé fidèle et sauvegardé dans un stockage distinct. Capteur activé à la migration des réglages v2→v3 puis choix OFF conservé ; premier nom exact Fab migré une fois en Joueur 1. Suite 32/32, rendu navigateur et build Android à vérifier.
