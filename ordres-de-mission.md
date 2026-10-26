# Ordres de mission — Max-YutNori

## IMMUTABLE / À PRÉSERVER
- Dépôt Android : `greenpower2669/Max-YutNori`. FabYut est la référence en lecture seule.
- Mission MYN-001 conservée dans sa branche. Avenant MYN-005 autorise la refonte du moteur et des graphismes dans une nouvelle branche ; préserver la référence FabYut.
- Aucune fusion vers `main` ni publication définitive sans accord explicite de Fab.
- Livrer un `.apk` directement installable via GitHub, nommé projet/version, avec icône. Aucun ZIP à extraire sur le téléphone. Emplacement temporaire : `temp/` sur la branche de travail, alimenté par GitHub Actions.
- Appareil de validation humaine : Samsung SM-A576B, Android 16.
- Première identité Android réalisée : `fr.fab.maxyutnori`, nom affiché `Max YutNori` ; préserver pour les mises à jour. Signature debug de test, pas de clé de publication Play.
- Les cinq mémoires évoluent avec le travail ; secrets absents des dépôts et des journaux.

## MYN-015 — Nuages bas distincts des chutes — Autorisée, en cours — 26/10/2026
Fab demande des animations à faible coût pour les nuages bas. Clarification explicite : ne pas les confondre avec l'effet de fumée/particules des chutes d'eau, que Fab juge parfait et veut conserver. Phase « ne code pas » respectée ; après localisation des nappes dans les vallées/îlots au-dessus du lac, Fab autorise « Ok code là-dessus ». Dérive lente, nappes qui s'étirent et se fondent ; préserver les chutes existantes, le reste du jeu et les invariants. Plan docs/plan-low-mist-v081.md ; version visée 0.8.1/code10, dernière livraison vérifiée 0.8.0.

## MYN-014 — Livrée, à valider sur Samsung — 26/10/2026

Bandeaux et fiches plus compacts/transparents, espace central accru et cadrage rapproché. Équipes 1–2 à gauche et 3–4 à droite (interprétation annoncée de la dictée ; à 2 équipes, une de chaque côté). Bouton Vue unique avant musique ; quatre commandes réexécutables, même Plateau pendant un suivi, libellé synchronisé aux changements automatiques. Pions élargis horizontalement, symboles plus lisibles et pointage 28 px ; joueur actif avec deux couleurs pulsées et mention « À TOI DE JOUER ». Panorama sans pointillés de couture, eau/chutes/brume/nuages/lumières/embruns animés. MP3 Arisongs de 36 minutes embarqué en boucle, aucune récupération depuis le téléphone. Table flottante, fresque agrandissable, règles, gestes, sauvegarde v4, identité fr.fab.maxyutnori, icône et signature de test conservés.

CI [40259390198](https://github.com/greenpower2669/Max-YutNori/actions/runs/40259390198) réussie : 71/71 tests unitaires, 45/45 parcours navigateur hors ligne, zéro erreur JS/requête externe ; cinq zones du panorama vérifiées sur leurs pixels réels et mode réduit identique. Compilation APK/AAB et lint Android réussis. Source `7ab9f8761c56bc899242a234b24a406e0e17d909`, binaires `79ce9005ee4556c1d9c0d8cc5b0c65073e124fb3`. Vrais téléchargements HTTP 200, intégrité ZIP/SHA-256, identité/version/icône/PNG et MP3 vérifiés. Certificats extraits des vrais APK v2/AAB : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identiques à 0.7.0.

APK : 62,491,892 octets ; SHA-256 `06d8a8dc4b790f47e7d0f68d67413f6a262b5b6a0f2eaabaa8502743c803bdc2`.
AAB : 62,002,566 octets ; SHA-256 `2a8e3c8831926acb01d0c58f53de78cd9a8ce51dc17659a378a2637a120b4b45`.

Installation en mise à jour de 0.7.0 sans désinstallation. APK paysage, portrait vérifié pour le Web. Confort tactile, intensité esthétique, performance et capteur restent à valider sur Samsung SM-A576B Android 16. Aucun essai physique revendiqué. Aucun merge main ni Release définitive.

### Demande originale et suivi de réalisation conservés
Fab autorise « Ok, code tout sur mon git » après la passation. Réduire bandeaux et fiches, augmenter transparence et place centrale/cadrage/pions tactiles. Deux équipes de chaque côté : 1–2 gauche/3–4 droite, interprétation annoncée de la dictée contenant deux fois 4. Bouton Vue unique à plusieurs valeurs à gauche de 🎵 ; joueur actif lumineux bicolore à intensité variable. Supprimer les pointillés signalés et rendre visibles eau/chutes/brume/nuages/lumières et particules du panorama. Embarquer ariranlike25102026.mp3 de la release Arisongs en boucle. Table flottante et fresque agrandissable validées à préserver, règles/gestes/sauvegarde/identité/signature inchangés. Plan docs/plan-visibility-v080.md. Version visée 0.8.0/code9 ; 0.7.0 reste la livraison vérifiée. Aucun merge main ni Release définitive autorisé.

## MYN-013 — Livrée, à valider sur Samsung — 26/10/2026

Pions posés sur la table, les cases ou les piles ; soulèvement avant traversée, dépôt et annulation sûrs. Vue de dessus avec pincement à deux doigts, même en tenant un pion. Bandeaux semi-transparents et réserves accessibles au cadrage initial. Panorama animé par zones : eau, chutes, brume, nuages et lumières. Fresque originale agrandissable dans les règles. Intensité de l’équipe active variable sur un cycle doux de 2,8 secondes, pion choisi plus lumineux ; éclairage fixe en animations réduites. La table flottante est volontaire et préservée, les règles sont inchangées.

CI [40250007382](https://github.com/greenpower2669/Max-YutNori/actions/runs/40250007382) réussie : 71/71 tests unitaires, 41/41 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `378f987875774d90bca29b5b5acbdf2a1588f962`, binaires/preuves `a034f9c722f402dd0bfd3f0c1d9c593f976bbc6f`. Téléchargements HTTP 200, intégrité ZIP et SHA-256 contrôlés. Certificats extraits des vrais APK v2/AAB : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identiques à 0.6.0. Les quatre PNG embarqués et la musique originale sont conservés octet pour octet.

Mise à jour de 0.6.0 sans désinstallation : identité fr.fab.maxyutnori, icône, signature de test et sauvegarde v4 conservées. APK paysage (les deux orientations), portrait vérifié pour le Web. Confort tactile, visibilité des halos, performance des effets et capteurs restent à valider sur Samsung SM-A576B Android 16. Aucun merge main ni Release définitive.

## Historique de réalisation et demandes conservées

## MYN-013 — Réalisation autorisée 0.7.0
25/10 : Fab autorise de coder toute la passation sur son Git, avec intensité variable quasi clignotante de l’équipe active. Pulsation douce annoncée ; mode réduit fixe. Plan docs/plan-comfort-v070.md. Reconstitution locale après nettoyage automatique, tests et livraison en cours ; dernière livraison 0.6.0.

## MYN-013 — HUD, vue de dessus, pions posés et panorama vivant — À réaliser
25/10/2026 : Fab demande des bandeaux haut/bas semi-transparents, une vue de dessus avec pinch in/out, des pions posés sur leur support, des effets localisés dans le panorama (eau, brume des chutes, nuages, lumières) et la nouvelle fresque dans les règles. Précision explicite : **la table flottante est voulue et doit rester à sa place** ; les pions doivent se soulever dès la sélection, notamment depuis la réserve, pour passer au-dessus du plateau sans le traverser. Préserver le glissement sous le doigt, les piles, les destinations et le retour sûr en cas d'annulation.
Fab demande ensuite une passation complète « on ne sait jamais ». Cette intervention sauvegarde la demande, les mémoires et la fresque ; aucun code produit ni nouveau build. Référence livrée : 0.6.0/code7. Prompt complet : docs/passation-2026-10-25.md. Fresque originale : docs/references/rules-fresco-25492.png. Ce point courant prévaut sur les statuts intermédiaires historiques ci-dessous.

## MYN-009 / MYN-012 — Livrées, à valider sur Samsung — 25/10/2026
Sens latéral du bol corrigé ; tous les pions et réserves de l’équipe active portent une lumière douce, sélection plus marquée. Bol soulevable au doigt, effacé après un résultat stabilisé, réapparu pour ranger les quatre yut avant le tour suivant ou une relance. Faces/résultats conservés, pause et nouvelle partie respectées. Titre transparent original, panorama 360° et décor bois avec cartes de gravure en creux, normales et rugosité.

CI [40168413538](https://github.com/greenpower2669/Max-YutNori/actions/runs/40168413538) réussie : 62/62 tests unitaires, 34/34 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `a5d12ed492e0ad0656184cb68ab977280ef15c48`, binaires/preuves `03b939304c60a7923f99d560c906015cd6782614`. Téléchargements HTTP 200, intégrité ZIP et SHA-256 contrôlés ; certificat APK v2 et certificat AAB extraits des vrais fichiers téléchargés identiques à 0.5.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Les trois PNG embarqués sont identiques aux originaux fournis par Fab.

Mise à jour de 0.5.0 sans désinstallation : identité fr.fab.maxyutnori, icône, signature et sauvegarde v4 conservées. Les gestes, le confort graphique et le sens réel dans les deux paysages restent à valider sur Samsung SM-A576B Android 16. Le relief est dérivé des traits de l’image, pas d’une sculpture 3D mesurée. Aucun merge main ni Release définitive.

## Historique — étapes précédentes

## Point 0.6.0 — revue traitée, vérification en cours
Les deux cas limites (rangement au travers du rebord et retour caméra différé après coup rapide) sont corrigés localement avec régressions. 61 tests unitaires passent ; build Web réussi. Première suite navigateur complète 33/33 verte avant le dernier correctif caméra ; suite finale en cours. Dernier APK livré reste 0.5.0.


MYN-012 / MYN-009 : implémentation 0.6.0 locale, inclinaison/cycle/équipe/images. Non livrée ; revue et compilation Android à venir.

## 25/10/2026 — MYN-012 / MYN-009 autorisées, 0.6.0 en cours
Fab signale le bol inversé en inclinant à gauche ; demande le sens naturel, l'équipe active lumineuse, le rangement en fin de tour, le bol soulevable puis invisible après lancer et réapparu au rangement. Fournit le titre transparent, le panorama (dit « 260 degrés », compris 360° et annoncé), le bois vu du dessus et exige des cartes de matière pour la gravure. Discussion sans coder respectée ; « Ok, code ça » autorise maintenant la réalisation. Levage au doigt retenu comme comportement existant, aucune demande confirmée de mesure absolue de hauteur par téléphone. MYN-009 réactivée par cette nouvelle demande d'intégration du décor. Plan docs/plan-ambience-v060.md. Dernière livraison vérifiée : 0.5.0 ; 0.6.0 non livrée.

### MYN-010/MYN-011 — Livrées, à valider sur Samsung
Caméra action douce (proche, latérale, recul, suivi), zoom avec le second doigt, pions sélectionnables directement et glissables sur un halo légal, réserves espacées. Tours restants individuels rétablis, Back-do jouable au départ, aucun passage de résultat ; résultats accumulés jouables dans l’ordre voulu. Lancers auto/IA plus hauts. Les invalidités physiques proposent toujours une relance.

CI [40078589575](https://github.com/greenpower2669/Max-YutNori/actions/runs/40078589575) réussie : 51/51 tests unitaires, 27/27 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `4a28e1c84ef76f628a85f12dae0b7f2c467d9bfe`, binaires/preuves `c37c719642b5e8b6bb14c40fb2a5ef4e054061f9`. Téléchargements HTTP 200, ZIP et SHA-256 contrôlés ; certificat APK v2 et certificat AAB extraits des fichiers téléchargés identiques à 0.4.1 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

Installation en mise à jour de 0.4.1 sans désinstallation : identité fr.fab.maxyutnori, icône et signature conservées. Sauvegarde v4 séparée, anciens v2/v3 conservés ; les compteurs absents des anciennes parties sont initialisés à 1 (0 pour les pions terminés), sans inventer leur historique. Confort caméra/tactile et capteur encore à valider sur Samsung SM-A576B Android 16. Décor MYN-009 reporté ; aucune fusion main ni Release définitive.

## Historique des étapes précédentes

## Point de vérification 0.5.0 — 23/10/2026
MYN-010/MYN-011 implémentées en 0.5.0/code6 : règles à tours individuels, gestes et caméra action. Tests et revue traités ; fabrication Android et livraison à vérifier. Aucune fusion main/Release.

## 23/10/2026 — Réalisation autorisée 0.5.0
MYN-010 : correction autorisée par « Ok, code » (tours, ordre libre, glisser, réserves, lancers auto). MYN-011 : caméra action proche/latérale/recul/suivi et zoom deuxième doigt. Version visée 0.5.0, non livrée.
Plan docs/plan-action-v050.md ; suivi docs/action-progress.md.

# Ordres de mission — Max-YutNori


## Missions
### MYN-010 — Règles de recul, choix des coups et manipulation des pions — Audit sans coder
23/10/2026, retour Fab sur 0.4.1 : demande explicitement « sans coder explique-moi ». Bouton ressenti comme « passer ce tour » et impossibilité de sélectionner un yut/pion ; il refuse ce remplacement de sa règle. Un franchissement arrière de la ligne ajoute un tour restant au pion, le franchissement avant le retire ; ne pas déclarer le pion arrivé après un simple aller-retour. Vérifier le libre ordre des résultats accumulés (exemples 4,3,2 et 4,2,3). Souhaite des jets automatiques plus hauts ; sélection en touchant les pions du plateau et de réserve, réserves d’abord un peu plus espacées (disposition en dé seulement envisagée), puis glisser un pion sous le doigt vers une destination autorisée clairement signalée. Pas de zoom du pion vers le joueur demandé. Cette intervention explique et consigne ; aucun code produit, test ou nouvel APK. Le décor MYN-009 reste différé.

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
