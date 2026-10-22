# Travail actif — 0.4.1 / MYN-008
Pions : chêne clair, cèdre rouge, noir laqué, vert sapin laqué ; marques sombres sur bois clair et blanches sur les trois autres, symboles conservés. Yut 0.4.0 appréciés par Fab et conservés. Bac : hauteur de sécurité liée à l’inclinaison, au volume et au socle ; saisie tactile dans la vue Bol (haut = soulever, côté = incliner, relâcher = reposer). Conserver bouton de lancer, glissement hors bac, capteur et pauses. Autorisation de réalisation explicite ; changements bornés dans les composants existants. Décor reporté MYN-009. Implémentation locale terminée, 38 tests et build Web passent ; revue indépendante traitée, contrôles UI finaux/Android en cours. Le retour du bac est mis en attente pendant le vol puis repris même en phase déplacement ou mode automatique ; le résultat déjà mémorisé ne se recalcule pas. Dernier APK vérifié : 0.4.0 ci-dessous.

# État actif — Max YutNori 0.4.0 livré pour test

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
