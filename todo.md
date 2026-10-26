# MYN-014 — 0.8.0 en cours
- [x] Autorisation, missions et mémoires lues ; référence 975b7f0, baseline 71/71 et build Web.
- [x] Interface compacte, vues regroupées, cadrage et gestes aux trois formats.
- [x] Bicolore actif ; pointillés isolés/corrigés ; cinq régions du panorama vérifiées par pixels.
- [x] Nouvelle musique MP3 et boucle hors ligne vérifiées ; MIME/Range Android codés, CI attendue.
- [x] Revue indépendante et rappel natif de Plateau rouge→vert ; 44 parcours complets puis 4 ciblés/pixels verts.
- [ ] CI complète relancée après budget mural du test de lancer (D032), puis APK/AAB et téléchargements/signatures.
Plan docs/plan-visibility-v080.md. Dernière livraison vérifiée 0.7.0.

# État courant — 0.7.0 livrée le 26/10/2026

[APK 0.7.0 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/a034f9c722f402dd0bfd3f0c1d9c593f976bbc6f/temp/Max-YutNori-v0.7.0-debug.apk) · [AAB de test 0.7.0](https://github.com/greenpower2669/Max-YutNori/raw/a034f9c722f402dd0bfd3f0c1d9c593f976bbc6f/temp/Max-YutNori-v0.7.0-debug.aab).

- [x] MYN-013 : HUD, vue verticale/pinch, hauteurs/soulèvement/piles/retours, panorama vivant, fresque et pulsation de l’équipe.
- [x] Revue et régressions D025–D029, 71 tests unitaires et 41 parcours navigateur, build/lint et vrais téléchargements/signatures vérifiés.
- [ ] [FAB] Tester la mise à jour Samsung : réserve→plateau, annulation, piles, pinch avec/sans pion, luminosité, panorama et confort global. Vérifier aussi le sens du bol dans les deux paysages.
- [ ] [AGENT] Traiter les retours matériels ; main/Release seulement sur demande explicite.

CI [40250007382](https://github.com/greenpower2669/Max-YutNori/actions/runs/40250007382) réussie : 71/71 tests unitaires, 41/41 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `378f987875774d90bca29b5b5acbdf2a1588f962`, binaires/preuves `a034f9c722f402dd0bfd3f0c1d9c593f976bbc6f`. Téléchargements HTTP 200, intégrité ZIP et SHA-256 contrôlés. Certificats extraits des vrais APK v2/AAB : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identiques à 0.6.0. Les quatre PNG embarqués et la musique originale sont conservés octet pour octet.

APK : 10,102,517 octets, SHA-256 `5d92d8ffbcdf724444fb2d63c2433e48bef3e79c11bbd970066da196a058be5a`.
AAB : 9,719,109 octets, SHA-256 `0ed577f5b85b2aceaa1d1133a864b80e43f30e209f44c82c6a5c0307827c3e36`.

Mise à jour de 0.6.0 sans désinstallation : identité fr.fab.maxyutnori, icône, signature de test et sauvegarde v4 conservées. APK paysage (les deux orientations), portrait vérifié pour le Web. Confort tactile, visibilité des halos, performance des effets et capteurs restent à valider sur Samsung SM-A576B Android 16. Aucun merge main ni Release définitive.

Les anciennes cases et mentions « en cours » ci-dessous décrivent leur date, pas des fonctionnalités encore à produire.

## Historique — états antérieurs conservés

## Dernier contrôle de cadrage
MYN-D029 reproduit rouge : réserves hautes derrière les commandes de vue. Marge corrigée ; 7/7 parcours confort aux trois formats passent. La CI intermédiaire 40220650889 a réussi ; lancer la CI finale incluant cette marge avant livraison.

# MYN-013 en cours — 0.7.0/code8
Toutes les demandes sont implémentées localement et deux défauts de revue traités ; code reconstitué après nettoyage du workspace. 71/71 tests unitaires, build Web et 7/7 nouveaux scénarios navigateur vérifiés. Lancer la suite complète en CI et contrôler les APK/AAB téléchargés. Suivi docs/comfort-progress.md. Dernière version livrée 0.6.0.

# Prochaine reprise — MYN-013 / passation du 25/10/2026
- [x] Clarification Fab : les pions flottent ; la table flottante est volontaire, ne pas l'abaisser.
- [x] Passation complète et fresque originale conservées : docs/passation-2026-10-25.md et docs/references/rules-fresco-25492.png.
- [ ] Pions posés selon leur support ; soulèvement doux dès sélection, dégagement avant traversée réserve→plateau, descente et retour invalide sûrs ; piles/halos/labels cohérents.
- [ ] Bandeaux haut/bas semi-transparents avec scène derrière, texte et touches lisibles.
- [ ] Vue de dessus avec pinch in/out, sélection/glissement conservés et caméra action compatible.
- [ ] Panorama animé par zones (eau/brume/nuages/lumières), pauses et animations réduites respectées.
- [ ] Fresque dans les règles, agrandissement et explication textuelle dont distinction Do/Back-do.
- [ ] À la reprise de réalisation : régressions, revue, build Web/Android et vrais APK/AAB vérifiés ; mêmes identité/icône/signature, sans merge main/Release.
Aucune implémentation de MYN-013 dans cette intervention de passation. Version effectivement livrée : 0.6.0. Les cases anciennes sous Historique décrivent leurs dates, pas le travail encore ouvert aujourd'hui.

# État de livraison 0.6.0 — 25/10/2026

[APK 0.6.0 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.6.0-debug.apk) · [AAB de test 0.6.0](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.6.0-debug.aab).

- [x] MYN-012 : sens du bol, équipe lumineuse, disparition/rangement et gardes de lancer.
- [x] MYN-009 : titre/panorama/bois et maps de gravure intégrés.
- [x] Revue traitée, 62 tests, 34 scénarios, APK/AAB/lint et téléchargements/signatures contrôlés.
- [ ] [FAB] Tester la mise à jour Samsung : gauche/droite dans les deux paysages, levage au doigt, rangement et confort du décor.
- [ ] [AGENT] Traiter les retours matériels.

CI [40168413538](https://github.com/greenpower2669/Max-YutNori/actions/runs/40168413538) réussie : 62/62 tests unitaires, 34/34 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `a5d12ed492e0ad0656184cb68ab977280ef15c48`, binaires/preuves `03b939304c60a7923f99d560c906015cd6782614`. Téléchargements HTTP 200, intégrité ZIP et SHA-256 contrôlés ; certificat APK v2 et certificat AAB extraits des vrais fichiers téléchargés identiques à 0.5.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Les trois PNG embarqués sont identiques aux originaux fournis par Fab.

APK : 9,533,239 octets, SHA-256 `1ac1b449e11c0b123d52ad1bb0a5ed14ebd2ca52aa5c29dbc90bef690fc1d3a9`.
AAB : 9,150,265 octets, SHA-256 `17e93b234e466b916cb4e9d28a10350ca969e0b2401fb6d33f867c04dfe15b83`.

Mise à jour de 0.5.0 sans désinstallation : identité fr.fab.maxyutnori, icône, signature et sauvegarde v4 conservées. Les gestes, le confort graphique et le sens réel dans les deux paysages restent à valider sur Samsung SM-A576B Android 16. Le relief est dérivé des traits de l’image, pas d’une sculpture 3D mesurée. Aucun merge main ni Release définitive.

## Historique — états antérieurs

## Régression finale en cours
Une nouvelle exécution complète a reproduit le retour du bol interrompu après un résultat sans relance. Régression unitaire ajoutée, neutralisation après disparition appliquée. Suite finale relancée ; aucune livraison 0.6.0 encore annoncée.

## Vérification 0.6.0
- [x] Revue indépendante : deux défauts importants identifiés et corrigés (docs/revue-v060.md).
- [x] 61/61 tests unitaires, build Web ; première suite 33/33, suite finale enrichie en cours.
- [ ] Suite finale puis CI APK/AAB/lint/signatures et vérification des téléchargements.

## Point de travail 0.6.0
- [x] Inclinaison, cycle bol et verrouillage, équipe lumineuse, art original et maps de gravure.
- [x] 60 tests unitaires passent ; premier smoke ciblé a détecté la pause victoire trop tôt. Correction et suite navigateur en cours.
- [ ] Revue, captures finales, CI et APK/AAB vérifiés.

# Intervention 0.6.0 — 25/10/2026
- [x] Lire missions/mémoires et confirmer HEAD distant 8009540, baseline 51/51.
- [ ] Corriger l'inclinaison ; gérer disparition/rangement avant relance et fin de tour.
- [ ] Équipe lumineuse ; images locales et gravure avec maps.
- [ ] Régressions, captures, revue, CI Android et APK/AAB vérifiés.
Plan docs/plan-ambience-v060.md. Dernière version livrée 0.5.0. Décor MYN-009 désormais autorisé ; les mentions historiques « reporté » ci-dessous décrivent les anciennes versions.

# État de livraison 0.5.0 — 24/10/2026

[APK 0.5.0 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.5.0-debug.apk) · [AAB de test 0.5.0](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.5.0-debug.aab).

- [x] Règles v4, migrations, ordre libre et disparition du passage de résultat.
- [x] Toucher/glisser, zoom second doigt, caméra action et confort.
- [x] Revue, 51 tests, 27 scénarios, APK/AAB/lint et vérification des téléchargements/signatures.
- [ ] [FAB] Tester la mise à jour Samsung, caméra, précision du dépôt, zoom et lancer auto.
- [ ] [AGENT] Traiter les retours du téléphone réel.
- [ ] MYN-009 : environnement autour de la table, reporté par Fab.

CI [40078589575](https://github.com/greenpower2669/Max-YutNori/actions/runs/40078589575) réussie : 51/51 tests unitaires, 27/27 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `4a28e1c84ef76f628a85f12dae0b7f2c467d9bfe`, binaires/preuves `c37c719642b5e8b6bb14c40fb2a5ef4e054061f9`. Téléchargements HTTP 200, ZIP et SHA-256 contrôlés ; certificat APK v2 et certificat AAB extraits des fichiers téléchargés identiques à 0.4.1 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 7,942,389 octets, SHA-256 `4507098b866055aeee207bfafbd17b0dd43145ee9a7d39df6f95a368113548e2`.
AAB : 7,615,363 octets, SHA-256 `18f9380af968b8efb8793bfb8bad0bfe40aadfde4a6bdc38b94f9475736d8885`.

Installation en mise à jour de 0.4.1 sans désinstallation : identité fr.fab.maxyutnori, icône et signature conservées. Sauvegarde v4 séparée, anciens v2/v3 conservés ; les compteurs absents des anciennes parties sont initialisés à 1 (0 pour les pions terminés), sans inventer leur historique. Confort caméra/tactile et capteur encore à valider sur Samsung SM-A576B Android 16. Décor MYN-009 reporté ; aucune fusion main ni Release définitive.

## Historique des étapes précédentes

## Point de vérification 0.5.0 — 23/10/2026
- [x] MYN-010 : tours v4, migration, ordre libre, réserves et lancers auto plus hauts.
- [x] MYN-011 : toucher/glisser, caméra proche/latérale/recul/suivi et zoom second doigt.
- [x] 51 tests unitaires, 20 scénarios historiques et 4 nouveaux scénarios tactiles vérifiés localement.
- [x] Revue : cadrage et brouillard corrigés.
- [ ] Scénarios complémentaires cadrage/migration/auto dans la suite finale.
- [ ] CI, APK/AAB et téléchargements vérifiés. Dernier APK livré : 0.4.1.

## 23/10/2026 — Réalisation autorisée 0.5.0
- [ ] MYN-010 : tours v4, migration, gestes et lancers.
- [ ] MYN-011 : caméra action et zoom second doigt.
- [ ] Tests, revue, APK/AAB. Dernier APK vérifié : 0.4.1.
Plan docs/plan-action-v050.md ; suivi docs/action-progress.md.

# Max YutNori — 0.4.1 livrée pour test / MYN-008
## Retour actif MYN-010 — explication uniquement, code inchangé
- [x] Comparer le passage et le recul avec FabYut : compteur Turnleft confirmé dans fabchoc.cs, absent des pions Web ; voir MYN-D018.
- [x] Vérifier l’ordre libre des résultats stockés, la sélection directe et la hauteur auto dans les sources.
- [ ] Après accord de réalisation : rétablir les tours restants par pion et l’entrée arrière ; traiter sauvegardes, captures et groupes sans arrivée prématurée ni suppression du résultat de recul.
- [ ] Après accord de réalisation : rendre la sélection des pions/réserves plus lisible, espacer d’abord la réserve, ajouter le glisser-déposer avec destination claire.
- [ ] Après accord de réalisation : augmenter la hauteur des jets automatiques ; vérifier la caméra et les retombées.
Le scénario exact joué sur Samsung n’a pas été fourni. Aucun correctif ni nouveau build dans cet audit ; 0.4.1 reste le dernier paquet livré. Les tests existants valident la règle codée, pas la fidélité au compteur original maintenant identifié.

## Livraison 0.4.1
- [x] Quatre pions contrastés : chêne clair, cèdre rouge, noir et sapin laqués.
- [x] Levage tactile et dégagement du bac au-dessus du socle/table à chaque transition.
- [x] Retour conservé après interruption par lancer/auto ; pause et priorité doigt/capteur.
- [x] Revue indépendante et régressions physiques/UI ; 38 tests et 20 scénarios passent.
- [x] APK/AAB, signature et icône conservées ; téléchargements bruts vérifiés ; mémoires mises à jour.
- [ ] [FAB] Essayer la mise à jour Samsung : couleurs, levage, inclinaison, pause/reprise et lancer pendant la descente.
- [ ] [AGENT] Traiter les retours du téléphone réel.
- [ ] MYN-009 : environnement autour de la table, explicitement reporté.

[APK 0.4.1 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.4.1-debug.apk) · [AAB de test 0.4.1](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.4.1-debug.aab).

CI [39917902942](https://github.com/greenpower2669/Max-YutNori/actions/runs/39917902942) réussie : 38/38 tests unitaires, 20/20 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Même certificat APK/AAB que 0.4.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Source `f012219b9bf356e4c1c0938729b9007ef49a2e38`, binaires/preuves `95039cf53512f6fb358233ce6f0f8e4fd589079c`. Téléchargements bruts HTTP 200, intégrité et SHA-256 comparés.

APK : 7,939,321 octets, SHA-256 `29126146aad9b1eacc08571060d2ccc74597b2417555b5ce906c3711eb747fcf`. AAB : 7,612,736 octets, SHA-256 `78ad6e188a8e53ab3b6f1e3a51cd49110e4f98f0106b5b486a814eb6e18222bb`.

Installation en mise à jour de 0.4.0 sans désinstallation : signature, identité et icône conservées. Essai physique Samsung SM-A576B Android 16 attendu pour le confort tactile, la lisibilité et le capteur. Décor environnant reporté MYN-009 ; aucune fusion main ni Release définitive.

## Historique
## Référence de livraison précédente
# Max YutNori — état de travail 0.4.0

Mission active MYN-007 autorisée par « Super, on y va ». Branche feature/native-webgl-v020, PR brouillon #2. Version livrée et vérifiée : 0.4.0/code 4 ; historique et empreintes dans brain.md. Aucune fusion main ni Release définitive.

## Réalisé 0.4.0
- [x] Bac cinématique visible, inclinaison relative à la tenue et léger déplacement avec le téléphone ; capteur ON par défaut, choix OFF mémorisé.
- [x] Lancers plus hauts vers la table, collisions de table/rebords et validité hors bac ; résultats physiques conservés.
- [x] Faces noire laquée et cèdre rouge, textures bois/relief renforcées ; quatre couleurs d’équipes conservées.
- [x] Quatre yut alignés en haut, résumé fidèle sauvegardé ; nom initial Joueur 1 et migration du nom Fab par défaut.
- [x] Revue indépendante, corrections des deux P2 avec régressions : fuite hors table et nouvelle partie en vol.
- [x] 34 tests unitaires, 72 lancers déterministes de contrôle et build Web réussis.

## Livraison vérifiée
- [x] Smoke final mobile/hors ligne, HUD, pause/capteur et nouvelle partie pendant un lancer.
- [x] Compilation/lint APK/AAB ; même signature 0.3.0, icône et identité conservées.
- [x] Vérification des téléchargements bruts et SHA-256, mise à jour mémoires et PR.

## Après livraison
- [ ] [FAB] Samsung SM-A576B Android 16 : installation en mise à jour, confort/lisibilité, inclinaison et lancer en paysage, musique prolongée, pause/reprise et partie complète.
- [ ] [AGENT] Traiter les retours du téléphone réel.
- [ ] [PUBLICATION ÉVENTUELLE] Clé durable Play uniquement si Fab demande une publication ; paquets actuels signés pour les tests.

Plan : docs/plan-bac-v040.md ; suivi : docs/bac-progress.md ; revue : docs/revue-v040.md.

[APK 0.4.0 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.4.0-debug.apk) · [AAB de test 0.4.0](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.4.0-debug.aab).

CI [39724824806](https://github.com/greenpower2669/Max-YutNori/actions/runs/39724824806) réussie : 34/34 tests unitaires, 16/16 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Même certificat APK/AAB que 0.3.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Source `0155dc784e1583b1ffe4a2ee16c354d02e36b64f`, binaires/preuves `8b1da4710fc4b4dd16b0a102e84d85bf0a5e4d26`. Téléchargements bruts HTTP 200, intégrité et SHA-256 comparés.

APK : 7,938,053 octets, SHA-256 `ff5920323e17843bbf4fce1ea49caa0dfa942f11aeeefebd152c3af2bc90158b`. AAB : 7,611,631 octets, SHA-256 `47476f2916660179382cd630ece58c0cf3a1a8b813a03a856899cd0a3b1a22c5`.

- [ ] [MINEUR WEB] En portrait étroit, espacer davantage les vues et les cartes d’équipes si le libellé Violette se replie ; l’APK impose le paysage.
