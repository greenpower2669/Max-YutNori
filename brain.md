# Contrat courant — MYN-020 /0.8.6-code15 livrée

Rapprochement réel à focale42° et projection1 : ×2 divise la distance physique puis revient au cadrage normal proche, sans cumul. Les séquences proche/latéral/révélation/suivi cadrent le pion et ses destinations depuis leur étendue réelle, avec une cible recentrée ; suppression du recul radial excessif et de la compensation qui éloignait la caméra sous ×2. Le focus et les destinations suivent aussi la sélection automatique après un coup avec résultats restants. Pinch, prises et retours restent compatibles ; vue libre avec orbit/pinch indépendants et recul manuel limité à1.35×la distance normale de cadrage. Pendant le suivi, le cadre nécessaire au pion et aux destinations prime sur une demi-distance stricte. Le vol conserve son recul de sécurité pour garder les quatre yut visibles, puis rend le cadre normal proche.

Panorama et lac0.8.4 intégralement conservés :24 cascades, brumes et nuages ; formules de réfraction, intensité/vitesse et masques inchangés. Physique/puissances/cycle du bol0.8.5, règles, sauvegarde, musique, icône et signature préservés. Onze fichiers protégés comparés octet pour octet à la base ; tests WebGL des cinq phases du lac à delta0, sondes terrestres stables. Aucun merge main ni Release définitive.

Source `d32198f6ec148f1277c9689d2566d2e0e7205535` ; binaires `a2e1ab8e4b7e8c01b0ac535dcd53f77599c43731` ; [CI40468288904](https://github.com/greenpower2669/Max-YutNori/actions/runs/40468288904) **réussie**. Version **0.8.6/code15**, identité `fr.fab.maxyutnori`. **92/92 tests unitaires et54/54 parcours navigateur hors ligne**, aucune erreur JavaScript ni requête externe ; WebGL, build/lint Android et signature APK v2 vérifiés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/a2e1ab8e4b7e8c01b0ac535dcd53f77599c43731/temp/Max-YutNori-v0.8.6-debug.apk) —62,500,244 octets ; SHA-256 `fe1e2c3af08a6541246f8dc2076608b98cd8757c63d871aa3025443393936ba5`. Vrai téléchargement HTTP200, ZIP, manifeste binaire/version, quatre PNG et MP3 vérifiés. Certificat extrait de l’APK identique à0.8.5 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Installation par-dessus0.8.5 possible, sans désinstallation ; essai d’installation réel encore humain. **APK uniquement**, aucun nouvel AAB.

**À valider par Fab sur Samsung SM-A576B Android16** : mise à jour réelle ; taille/lisibilité du plateau et des pions pendant approche, recul et retours ; ×2/pinch/prises et vue libre ; vol/rangement des quatre yut ; esthétique des24 cascades/brumes/nuages, FPS et chauffe. Aucun test physique Samsung ni mesure de fluidité matérielle revendiqué.

## Historique — états précédents conservés

# Contrat MYN-020 — en réalisation

Le rapprochement demandé est un déplacement 3D à focale fixe ; la caméra action doit cadrer le pion et ses destinations sans recul radial excessif. Le mode ×2 ne doit plus éloigner physiquement la caméra. Le recul indispensable au vol des quatre yut reste prioritaire. Après un déplacement, le focus suit la nouvelle sélection automatique et ses destinations, tout en conservant le pincement. ×2 vise une demi-distance ; le cadrage du pion et des destinations reste prioritaire en suivi. Base0.8.5 conservée tant que le nouvel APK n’est pas vérifié.

## Historique — référence précédente conservée

# Contrat courant — MYN-019 / 0.8.5-code14 livrée

MYN-019 : cadrage 3D rapproché du plateau, bandeaux compacts et semi-transparents, tour/joueur/message regroupés à gauche. Zoom ×2 à deux états avec `aria-pressed`, transition douce et pinch indépendant ; la caméra action garde son propre cadrage par compensation de projection puis rend le grossissement choisi. Bol/socle déplacés vers la droite avec physique, départs, rangement et pointage cohérents. Forces minimale et maximale accrues, migration versionnée des anciennes valeurs, auto/IA/capteur raccordés. Les quatre volumes physiques doivent tous dépasser le rebord incliné/soulevé avec marge avant désactivation des collisions et fondu rapide du bol/socle ; le vol reste dynamique et le rangement revient au bol. Murs hauts invisibles, CCD et subdivision adaptative pour impacts extrêmes ; aucune téléportation de confinement ni face inventée.

Lancer, force et mode automatique restent disponibles dans le bandeau ; les choix de coups partagent les lignes et défilent lorsqu'ils dépassent la hauteur disponible. L'ondulation du lac, ses formules/masques et le panorama 0.8.4 (24 cascades, brumes et nuages) n'ont pas été modifiés. Règles, sauvegarde v4, identité, icône, musique et signature conservées.

Source `89ad97d4ed659aab3e03c68289348466bcfdf252` ; binaires `b7355bf77fb9637d325a59cb5edd290e618522b0` ; [CI 40432711889](https://github.com/greenpower2669/Max-YutNori/actions/runs/40432711889) **réussie**. Version **0.8.5/code14**, `fr.fab.maxyutnori`. **89/89 tests unitaires et 50/50 parcours navigateur hors ligne** ; aucune erreur JavaScript ni requête externe. Rendu WebGL : lac inchangé aux cinq phases de référence, sondes terrestres fixes ; panorama 0.8.4 conservé. Build/lint Android et signature APK v2 validés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/b7355bf77fb9637d325a59cb5edd290e618522b0/temp/Max-YutNori-v0.8.5-debug.apk) — 62,499,852 octets ; SHA-256 `578d54da69f41cd0ee7bdcad871bb7ac4bea37a87eeef5c21ea217119b603fe6`. Certificat extrait du vrai APK téléchargé et identique à 0.8.4 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. ZIP, manifeste Android binaire, icône, quatre PNG et musique MP3 vérifiés. **APK uniquement**, aucun nouvel AAB.

**À valider par Fab sur Samsung SM-A576B Android 16** : mise à jour réelle, lisibilité du cadrage et des pions, gestes/pinch/×2/caméra action, bol à droite et retour des quatre yut, puissance et rebonds, esthétique de toutes les 24 cascades/brumes/nuages, berges immobiles et FPS/chauffe. La capture 25678.jpg n'était pas disponible dans ce checkout : la disposition décrite par Fab a guidé le travail, la correspondance visuelle exacte reste humaine. Aucun test physique Samsung ni mesure FPS revendiqué. Aucun merge `main` ni Release définitive.

## Historique — états antérieurs conservés

## Contrat MYN-019 — réalisation autorisée 0.8.5/code14

CI initiale40431151100 arrêtée avant Android : le test a détecté le mode automatique masqué en phase de déplacement. Commandes permanentes rétablies et contrôle de visibilité ajouté ; nouveau passage complet à lancer. Aucun nouvel APK livré.

Plateau dominant par caméra 3D, informations compactes à gauche, bandeaux semi-transparents réduits, bol/socle déplacés physiquement à droite. Forces et limites physiques renforcées ; bol invisible dès le franchissement complet des quatre yut. Zoom ×2 réversible, non cumulatif, indépendant du pinch et compatible caméra action. Livraison APK uniquement ; identité/signature/règles/sauvegarde conservées. Le rendu du panorama 0.8.4 et particulièrement l'ondulation du lac sont figés. Le bouton ×2 reste indépendant du pinch ; la caméra action compense sa projection puis rend le cadrage choisi. Les commandes de lancer, force et mode automatique restent accessibles ; les choix de déplacement se répartissent horizontalement dans le bandeau. Plan docs/plan-ergonomics-v085.md ; livraison Android en attente.

## Contrat courant — MYN-018 / 0.8.4-code13 LIVRÉE

Panorama 360° Three.js/WebGL : `web/src/annotated-zones.mjs` trace 24 cascades roses (25663.jpg), 5 nappes violettes et 7 rubans turquoise (25651.jpg). Atlas statique RGBA 512×256 / 512 Kio ajouté à l'ancien atlas 256×128 / 128 Kio. `living-panorama.js` anime les nouvelles zones dans la passe existante ; les anciens embruns/mousse et la physique/gameplay restent inchangés.

**Invariant non négociable** : ondulations et réfraction du lac 0.8.3 figées, pas de déformation des arbres/berges. Régression automatisée par comparaison du rendu à la vraie fixture `scripts/fixtures/panorama-v083-reference.js` : deltas nuls sur cinq temps aux pixels de lac contrôlés. Tests brume/chute positifs ; mode réduit stable. La couverture exhaustive esthétique des 24 chutes n'est **pas prouvée** par ces tests et attend l'essai Samsung.

CI [40377936315](https://github.com/greenpower2669/Max-YutNori/actions/runs/40377936315) réussie : tests unitaires, 45 scénarios, WebGL, APK/AAB, lint et signature Android identique à 0.8.3. Source `ac1763d`, binaires `a9c79276e64d2216ab7711843ba8778066f47c56`, version 0.8.4/code13. Aucun merge main ni Release sans Fab ; ne pas confondre « build validé » et « essai physique effectué ». Plan : `docs/plan-annotated-effects-v084.md`.

## Historique — 0.8.3 et versions antérieures

### Contrat archivé : 0.8.3/code12 — MYN-017 livrée, à valider

MYN-017 corrige la déformation des arbres signalée sur 25656.jpg : eau autorisée au pixel courant ET au prélèvement déplacé, exclusion des cimes et clapot réduit. Supprimer l’héritage de masque d’eau autour des chutes. Le ciel conserve l’advection de densité avec géométrie fixe ; les calculs de mousse/embruns et la brume sont conservés. L’ancienne égalité complète du composite 0.8.1 ne s’applique plus lorsqu’elle conserve la déformation fautive. Image originale, jeu, HUD/vues/pions, musique, sauvegarde, identité Android, icône et signature conservés.

Carte 128 Kio existante réutilisée, une passe, aucune nouvelle texture/particule ni transfert/recréation par frame. Contrôle conservateur de matière RGB linéaire et de masque ; une lecture de masque supplémentaire uniquement sur les fragments susceptibles de bouger.

CI [40329703094](https://github.com/greenpower2669/Max-YutNori/actions/runs/40329703094) réussie : 76/76 tests et 45/45 parcours navigateur hors ligne, aucune erreur JS/requête externe, APK/AAB et lint Android réussis. Pixels : huit sondes de géométrie à cinq phases, sans déformation ; eau avec réfraction positive, brume/ciel/chutes animés, mode réduit fixe. Régression de l’arbre 720/420 observée rouge puis verte. Revue indépendante effectuée. Source `9adc09709dead8bfd5695b39eca01c2b8a0b63a2`, binaires `84d49c1c216002e3913b540feb1bcefaa15808c1`. Vrais téléchargements HTTP 200, ZIP/SHA-256, versions, quatre PNG et MP3 vérifiés ; certificats extraits des APK v2/AAB identiques à 0.8.2 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,495,080 octets ; SHA-256 `6a33dad7d6e8e5fa2a1894a5b6b2412b920282afea93315320289547f1da80f3`.
AAB : 62,005,457 octets ; SHA-256 `ede3d29837de081081f7e367d8d4532d6151e76076f12e394eb0a7dd615c4ee2`.

Installation en mise à jour de 0.8.2 sans désinstallation. Les sondes automatiques ne prouvent pas une segmentation sémantique exhaustive de chaque pixel ; vérifier les autres berges/cimes et la fluidité sur Samsung SM-A576B Android 16. Aucun essai matériel/FPS revendiqué. Aucun merge main ni Release définitive.

## Historique — états antérieurs conservés

## Contrat MYN-017 — eau seule

Réalisation locale : UV fixes hors eau autorisée, contrôle du prélèvement et exclusion des cimes ; ciel animé par densité, clapot réduit. Une passe, 128 Kio réutilisés ; aucune nouvelle texture. Non livré ; pixels et tests verts.

La déformation géométrique doit rester sur l’eau ; arbres, terres, ciel et bâtiments stables. Brume et nuages restent animés par leur densité. Préserver mousse/embruns/éclairage, le jeu et les invariants. La conservation exacte de la déformation fautive 0.8.1/0.8.2 est levée par la correction demandée. Non livré.

## Contrat courant 0.8.2/code11 — MYN-016 livrée, à valider

La brume basse suit toutes les nappes repérées en violet, les nuages du ciel suivent le repérage turquoise et l’eau le repérage jaune avec îlots/rives exclus. Les six régions des chutes gardent le rendu composite 0.8.1 ; fondu doux à l’extérieur pour éviter une découpe elliptique. Les couleurs du repérage restent dans le diagnostic, pas dans le jeu. Image originale, HUD/vues/pions, musique, règles, sauvegarde, identité, icône et signature conservés.

Une carte statique RGBA 256×128/128 Kio contient bruit et trois masques, préparée une fois. Une passe du panorama, aucun objet supplémentaire ni transfert/recréation de texture par frame, au plus trois lectures de cette carte par fragment. Pause/animations réduites/qualité légère conservées.

CI [40320155787](https://github.com/greenpower2669/Max-YutNori/actions/runs/40320155787) réussie : 76/76 tests unitaires et 45/45 parcours navigateur hors ligne, aucune erreur JS/requête externe, build APK/AAB et lint Android réussis. Pixels réels : 14 sondes positives/négatives pour les régions, six cœurs comparés à la référence 0.8.1 à deux temps, raccord de rive vérifié et mode réduit fixe. Revue indépendante traitée : raccord d’eau corrigé et testé rouge→vert, métadonnée fsevents rétablie. Source `04c4cb053bc25f49b0a22c93cb7003fbdbb0b70d`, binaires `3756c18859faec9da5e37e92239f77310d3aba4e`. Téléchargements HTTP 200, intégrité ZIP/SHA-256, versions, quatre PNG et MP3 vérifiés ; certificats extraits des vrais APK v2/AAB identiques à 0.8.1 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,494,932 octets ; SHA-256 `91dec0a4e7123fea546daab73d6f42e2c3c14136808dea2f927185d12758e6e1`.
AAB : 62,005,342 octets ; SHA-256 `9b4a52fbdceabef1809ce96523346c39a4139ab852054a996698d8442d899f0d`.

Mise à jour de 0.8.1 sans désinstallation. Fidélité esthétique finale et fluidité/coût GPU sur Samsung SM-A576B Android 16 restent à valider ; aucun FPS matériel revendiqué. Aucun merge main ni Release définitive.

## Historique — états antérieurs conservés

## Contrat MYN-016 — repérage du panorama


Réalisation locale MYN-016 : masque RGBA 128 Kio partagé par vallées/ciel/eau, rive conservatrice et îlots exclus ; contribution 0.8.1 entière préservée dans les chutes. Non livré ; 76 tests et pixels verts.

Étendre la brume à toutes les nappes violettes, animer les nuages turquoise et suivre les surfaces d’eau jaunes avec exclusions des îlots/rives. Garder les chutes/embruns validés et le jeu. Réutiliser une carte statique et la passe existante ; 128 Kio proposés pour le tracé. Non livré ; référence 0.8.1.

## Contrat courant 0.8.1/code10 — MYN-015 livrée, à valider

Nuages bas indépendants dans les vallées et au-dessus du lac : deux défilements doux de densité, masque statique, opacité maximale 18 %. Les calculs des cascades/embruns validés par Fab restent inchangés ; leur région géométrique complète est exclue du nouveau voile. Texture périodique 128×128 RGBA (64 Kio) préparée une fois, une seule passe de panorama, aucun objet/particule supplémentaire ni transfert/recréation de texture par frame. Pause et animations réduites respectées ; qualité légère conserve les nappes. HUD, vues, caméra, pions, musique Arisongs, règles, sauvegarde v4, identité fr.fab.maxyutnori, icône et signature de test conservés.

CI [40288471190](https://github.com/greenpower2669/Max-YutNori/actions/runs/40288471190) réussie : 73/73 tests unitaires et 45/45 parcours navigateur hors ligne, zéro erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Pixels réels : nappes visibles/mobiles en qualité normale/légère, six cœurs de cascades identiques avec/sans nouvelle couche, un dessin et 64 Kio, mode réduit fixe. Revue indépendante favorable. Source `adf0c9f75d914016cae9b2ba3aedc6662f3fd78c`, binaires `fa1871f945b0c093f7580ce3c761078b836352ec`. Vrais téléchargements HTTP 200, intégrité ZIP/SHA-256, identité/version/icône, quatre PNG et MP3 vérifiés ; certificats extraits des APK v2/AAB identiques à 0.8.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,492,800 octets ; SHA-256 `999b4a8ffe57e62161be73083a28f0d973461b6077be870fd610f177253cade6`.
AAB : 62,003,366 octets ; SHA-256 `ed482e10893272d28e2ebf8b22e6a7ade4a09bfc1e1319d06785a45b6501fd2e`.

Mise à jour de 0.8.0 sans désinstallation. Le coût GPU et le confort visuel réels sur Samsung SM-A576B Android 16 restent à valider ; aucun FPS matériel revendiqué. Au plus trois lectures de texture supplémentaires par fragment concerné. Aucun merge main ni Release définitive.

## Historique — états antérieurs conservés

## Contrat MYN-015 — Nuages bas, réalisation 0.8.1
Animer séparément les nuages bas des vallées et du lac. Fab valide les chutes/embruns actuels : les préserver. Texture préparée une fois et advection douce dans le panorama, faible travail CPU ; pause et animations réduites respectées. Aucun autre changement de comportement.

## Contrat courant 0.8.0/code9 — livré, à valider sur Samsung

Bandeaux et fiches plus compacts/transparents, espace central accru et cadrage rapproché. Équipes 1–2 à gauche et 3–4 à droite (interprétation annoncée de la dictée ; à 2 équipes, une de chaque côté). Bouton Vue unique avant musique ; quatre commandes réexécutables, même Plateau pendant un suivi, libellé synchronisé aux changements automatiques. Pions élargis horizontalement, symboles plus lisibles et pointage 28 px ; joueur actif avec deux couleurs pulsées et mention « À TOI DE JOUER ». Panorama sans pointillés de couture, eau/chutes/brume/nuages/lumières/embruns animés. MP3 Arisongs de 36 minutes embarqué en boucle, aucune récupération depuis le téléphone. Table flottante, fresque agrandissable, règles, gestes, sauvegarde v4, identité fr.fab.maxyutnori, icône et signature de test conservés.

CI [40259390198](https://github.com/greenpower2669/Max-YutNori/actions/runs/40259390198) réussie : 71/71 tests unitaires, 45/45 parcours navigateur hors ligne, zéro erreur JS/requête externe ; cinq zones du panorama vérifiées sur leurs pixels réels et mode réduit identique. Compilation APK/AAB et lint Android réussis. Source `7ab9f8761c56bc899242a234b24a406e0e17d909`, binaires `79ce9005ee4556c1d9c0d8cc5b0c65073e124fb3`. Vrais téléchargements HTTP 200, intégrité ZIP/SHA-256, identité/version/icône/PNG et MP3 vérifiés. Certificats extraits des vrais APK v2/AAB : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identiques à 0.7.0.

APK : 62,491,892 octets ; SHA-256 `06d8a8dc4b790f47e7d0f68d67413f6a262b5b6a0f2eaabaa8502743c803bdc2`.
AAB : 62,002,566 octets ; SHA-256 `2a8e3c8831926acb01d0c58f53de78cd9a8ce51dc17659a378a2637a120b4b45`.

Installation en mise à jour de 0.7.0 sans désinstallation. APK paysage, portrait vérifié pour le Web. Confort tactile, intensité esthétique, performance et capteur restent à valider sur Samsung SM-A576B Android 16. Aucun essai physique revendiqué. Aucun merge main ni Release définitive.

## Historique — états antérieurs conservés

## Vérification CI MYN-014
Run40258850450 arrêté sur budget mural de la smoke physique : seulement7.4666s simulées au timeout40s, contre limite physique12s. Budget de test120s pour résultat/retour, mêmes assertions. Aucun changement de règles/durée moteur ; CI relancée avant livraison.

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
