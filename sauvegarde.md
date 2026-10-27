# ARCHIVE / EXPIRÉ — NE PAS LIRE PAR DÉFAUT

Instantané intégral avant clôture autorisée par Fab le 27 octobre 2026. Source : 8debca30d792a84f3daab0251f12ce28f47a543a, version 0.8.8/code17. Motif : états intermédiaires et preuves dupliqués ; conserver les décisions, demandes et diagnostics sans perte. Ouvrir seulement pour une recherche historique ou une régression. Les validations humaines ouvertes restent dans todo.md.

## Archive 2026-10-27 / ordres-de-mission.md

SHA-256 UTF-8 : `49bf4caca6c25e8498dae92765e522aee3333ae51c664a72f25f0a0aad46f655`

<!-- BEGIN ORIGINAL ordres-de-mission.md -->
## IMMUTABLE / À PRÉSERVER
- Dépôt Android : `greenpower2669/Max-YutNori`. FabYut est la référence en lecture seule.
- Mission MYN-001 conservée dans sa branche. Avenant MYN-005 autorise la refonte du moteur et des graphismes dans une nouvelle branche ; préserver la référence FabYut.
- Aucune fusion vers `main` ni publication définitive sans accord explicite de Fab.
- Livrer un `.apk` directement installable via GitHub, nommé projet/version, avec icône. Aucun ZIP à extraire sur le téléphone. Emplacement temporaire : `temp/` sur la branche de travail, alimenté par GitHub Actions.
- Appareil de validation humaine : Samsung SM-A576B, Android 16.
- Première identité Android réalisée : `fr.fab.maxyutnori`, nom affiché `Max YutNori` ; préserver pour les mises à jour. Signature debug de test, pas de clé de publication Play.
- Les cinq mémoires évoluent avec le travail ; secrets absents des dépôts et des journaux.


## Précision de format des images historiques — MYN-022

Les trois assets historiques nommés moonlit-panorama.png, rules-fresco.png et engraved-table.png sont réellement des JPEG. Ils restent byte-identiques ; seul le nouveau logo est un PNG. Le contrôle de structure PNG ajouté était trop large : prévol ZIP constitué des vrais assets observé RED (Invalid PNG signature), puis GREEN en limitant cette exigence au nouveau logo. Contrôle byte-identique des anciens assets maintenu. Aucun changement du produit ; CI relancée sur ce correctif du vérificateur.

# MYN-022 — 0.8.8/code17 LIVRÉE, à valider sur Samsung — 27 octobre 2026

Fab demande son nouveau visuel dans le jeu et comme icône ; autorisation explicite « On, code ». La mission conserve l’avenant visuel : seul logo/icône remplacés, identité/signature/sauvegarde invariantes.

Le visuel jade/or fourni par Fab est intégré dans le jeu avec emblème carré de 44 px et nom texte lisible, ainsi que dans le favicon et l’icône Android. Calque adaptatif 108 dp / visuel 56 dp et cinq densités classiques ; source JPEG conservée intacte, dérivés Lanczos uniquement. Le bandeau compact garde ses commandes accessibles et sa hauteur paysage.

Source `08abcaed4940511bdbd73cb3a863c2172209e93a` ; binaires `99543419bca0b55a9b12e3faeb98fa8833aecf50` ; [CI 40543163343](https://github.com/greenpower2669/Max-YutNori/actions/runs/40543163343) **réussie**. Version **0.8.8/code17**, identité `fr.fab.maxyutnori`. **96/96 tests unitaires et 56/56 parcours navigateur hors ligne**, aucune erreur JavaScript/requête externe. WebGL lac aux cinq phases à delta nul, compilation/lint Android et signature APK v2 réussis.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/99543419bca0b55a9b12e3faeb98fa8833aecf50/temp/Max-YutNori-v0.8.8-debug.apk) — 62,243,800 octets ; SHA-256 `1b3ba30fccf41a07fb5b034946c79cd306ce488437436ad87cece09befb9e07e`. Vrai téléchargement HTTP200, intégrité ZIP, manifeste/version/package vérifiés. **Pixels des sept dérivés logo/icônes identiques aux sources approuvées après compilation**, ressources adaptatives/legacy et références icon/roundIcon vérifiées. Certificat extrait du vrai APK : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identique à 0.8.7. Mise à jour sans désinstallation possible ; essai réel encore humain. APK uniquement, aucun nouvel AAB.

Treize fichiers caméra/physique/panorama et décor/règles conservés octet pour octet à la base ce531ea. Cadrage rapproché et redressé MYN-021, fond/rebord visible, ×2 physique et pincement préservés. Lac 0.8.4 : aucune modification d’ondulation, réfraction, vitesse/intensité, masque ou rendu. Les 24 cascades, brumes et nuages, les règles, sauvegardes et musique restent préservés. Aucun merge main/Release définitive.

**À valider par Fab sur Samsung SM-A576B Android16** : installation réelle, icône du lanceur/cache et masques OEM animés, lisibilité du logo, confort tactile et capteurs/son, rotation avec noms longs pendant un suivi, autres dimensions et grossissement système, esthétique/FPS/chauffe. Captures et tests automatiques ne prouvent pas ces validations matérielles. Le « Parfait » antérieur n’est pas une mesure exhaustive.

## Historique — états précédents conservés

# MYN-022 — Réalisation 0.8.8/code17 autorisée le 27 octobre 2026

Fab autorise « On, code » après la passation du logo. Nouveau visuel de Fab intégré comme emblème carré accompagné du nom dans le bandeau compact, favicon et icône Android adaptative + cinq densités classiques. Source JPEG inchangée ; mise à l’échelle technique uniquement. Version 0.8.8/code17 en vérification, dernier APK livré 0.8.7. Aucun merge main/Release.

## Préparation et historique conservés

# MYN-022 — Nouveau logo dans le jeu et icône Android — passation préparée le 27 octobre 2026

Demande exacte de Fab : « Parfait on met ce nouveau logo dans le jeux et en icon prompt passation et met à jour les mémoires ». Référence jointe : `25701.png`. Employer ce visuel jade/or avec bâtonnets noir/cèdre pour le logo du jeu ET l’icône Android. Préserver sa composition et ses proportions ; garder le bandeau compact, le nom lisible et les commandes accessibles.

**État : demande enregistrée, source et passation conservées ; intégration produit à réaliser.** Ce tour prépare la passation et les mémoires ; aucun nouvel APK, aucun changement du code ou des ressources actives. La demande n’est pas supprimée et aucune interdiction de coder n’est ajoutée au propos de Fab.

**Avenant visuel daté** : la conservation de l’ancienne icône et de l’ancien logo cesse de s’appliquer à ce seul remplacement demandé. Package `fr.fab.maxyutnori`, nom `Max YutNori`, certificat de signature et sauvegarde restent invariants. Les mentions de conservation de l’icône dans les livraisons antérieures restent leur historique, pas un refus de MYN-022.

Source originale : `docs/assets/25701-logo-original.jpg`, JPEG RGB opaque 1536 × 1536 malgré le nom d’envoi PNG ; 597 891 octets, SHA-256 `afb8df0a1d8540ddac46ba8bbda8ae5208f4d4051a86c5029d508af15b3d7096`. Copie byte-identique, sans réencodage. [Passation complète](docs/passation-myn022-logo.md).

Dernier APK : **0.8.7/code16**, source `2afdf9bbd9d67846784631b4e86df746adc687ed`, binaires `c480b902b8ded4f4ecfd0569ea724fcabd336c86`. Préserver cadrage MYN-021, physique/cycle/puissances, gestes, règles, musique, et absolument lac/panorama 0.8.4. Future livraison APK debug seul dans `temp/`, vérifié ; aucun merge main/Release définitive sans accord. Version 0.8.8/code17 proposée par l’agent à la reprise, non produite.

## Référence livrée et historique conservés

# MYN-021 — 0.8.7/code16 LIVRÉE, à valider sur Samsung — 27 octobre 2026

Avenant à MYN-020. Fab a d’abord demandé une passation, puis autorisé la réalisation par « C non tu peux coder ».

Fab a validé la proximité de la 0.8.6 mais signalé le fond du plateau coupé sur 25695.jpg. La 0.8.7 recentre la visée et redresse le suivi : inclinaison de 15,6° depuis la verticale, avec le rebord entier inclus dans le cadrage stabilisé. Les vues automatiques Plateau/de dessus et le suivi montrent la surface jouable complète, avec le pion et ses destinations. Le ×2 reste physique à focale 42°/projection 1 ; sa course s’arrête à la distance nécessaire pour garder le plateau entier visible. Sa désactivation retrouve le cadrage normal proche. Le pincement manuel et la vue libre conservent leur liberté, les gros plans temporaires leur rôle. Le ciblage du pincement passe progressivement vers le pion sans saut au neutre. Sélection automatique, prises, retours et cadrage des quatre yut en vol conservés.

Panorama/lac 0.8.4 et physique/cycle/puissances 0.8.5 inchangés. Onze fichiers protégés (dont les quatre PNG) comparés octet pour octet à la base 0.8.6 ; lac testé aux cinq phases à delta pixel nul et sondes terrestres stables. Les 24 cascades, brumes, nuages, masques et formules d’ondulation restent protégés. Règles, sauvegarde, musique, icône, identité et signature conservées. Aucun merge main ni Release définitive.

Source `2afdf9bbd9d67846784631b4e86df746adc687ed` ; binaires `c480b902b8ded4f4ecfd0569ea724fcabd336c86` ; [CI 40517279977](https://github.com/greenpower2669/Max-YutNori/actions/runs/40517279977) **réussie**. Version **0.8.7/code16**, identité `fr.fab.maxyutnori`. **96/96 tests unitaires et 55/55 parcours navigateur hors ligne**, aucune erreur JavaScript ni requête externe ; compilation/lint Android et signature APK v2 validés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/c480b902b8ded4f4ecfd0569ea724fcabd336c86/temp/Max-YutNori-v0.8.7-debug.apk) — 62,500,444 octets ; SHA-256 `391ae8450a15392639d2bf1b67b922d06fc9bbcb7640e60194781d25c81d2867`. Vrai téléchargement HTTP 200, ZIP, manifeste Android/version, quatre PNG et MP3 vérifiés. Certificat extrait de l’APK identique à la 0.8.6 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Installation par-dessus la 0.8.6 possible, essai réel encore humain. **APK uniquement**, aucun nouvel AAB.

**À valider sur Samsung SM-A576B Android 16 par Fab** : mise à jour réelle ; proximité/lisibilité et bord éloigné pendant les séquences ; ×2, pincement/prises et retours ; rotation avec noms longs pendant un suivi ; esthétique, FPS et chauffe. Aucun essai physique Samsung ni mesure matérielle revendiqué. Le cas combiné HUD long + rotation pendant le suivi reste un point mineur de couverture : les blocs sont testés séparément, aucun dysfonctionnement établi.

## Historique — états précédents conservés

# MYN-021 — Fond du plateau visible — autorisée le27/10/2026

Avenant à MYN-020. Fab valide le rapprochement de0.8.6 et fournit25695.jpg : en vue Plateau×2, un pion de réserve sélectionné, le bord éloigné et des cases sont coupés sous le bandeau. Il propose de redresser la caméra et demande d’abord une passation ; « C non tu peux coder » autorise ensuite la réalisation. Conserver la proximité validée, redresser l’orientation et recentrer la visée pour dégager le fond, avec retours stables. Base0.8.6/code15/2fd7b6c ; cible0.8.7/code16, APK uniquement. PR#2 brouillon, aucun merge main/Release.

Préserver lac/panorama0.8.4, physique/cycle/puissances0.8.5, corrections de sélection/gestes0.8.6, règles/save/musique/identité/signature. Vérifier Plateau normal/×2, séquences, gestes, retours et vues connexes ; les gros plans temporaires restent suivis d’un cadrage stabilisé lisible.

## Historique — références précédentes conservées

# MYN-020 —0.8.6/code15 LIVRÉE, à valider sur Samsung —27 octobre2026

Fab a clarifié que « zoom » signifiait rapprochement réel, conservé pendant toutes les séquences et avec ×2 ; réalisation autorisée par « Ok, code sa ».

Rapprochement réel à focale42° et projection1 : ×2 divise la distance physique puis revient au cadrage normal proche, sans cumul. Les séquences proche/latéral/révélation/suivi cadrent le pion et ses destinations depuis leur étendue réelle, avec une cible recentrée ; suppression du recul radial excessif et de la compensation qui éloignait la caméra sous ×2. Le focus et les destinations suivent aussi la sélection automatique après un coup avec résultats restants. Pinch, prises et retours restent compatibles ; vue libre avec orbit/pinch indépendants et recul manuel limité à1.35×la distance normale de cadrage. Pendant le suivi, le cadre nécessaire au pion et aux destinations prime sur une demi-distance stricte. Le vol conserve son recul de sécurité pour garder les quatre yut visibles, puis rend le cadre normal proche.

Panorama et lac0.8.4 intégralement conservés :24 cascades, brumes et nuages ; formules de réfraction, intensité/vitesse et masques inchangés. Physique/puissances/cycle du bol0.8.5, règles, sauvegarde, musique, icône et signature préservés. Onze fichiers protégés comparés octet pour octet à la base ; tests WebGL des cinq phases du lac à delta0, sondes terrestres stables. Aucun merge main ni Release définitive.

Source `d32198f6ec148f1277c9689d2566d2e0e7205535` ; binaires `a2e1ab8e4b7e8c01b0ac535dcd53f77599c43731` ; [CI40468288904](https://github.com/greenpower2669/Max-YutNori/actions/runs/40468288904) **réussie**. Version **0.8.6/code15**, identité `fr.fab.maxyutnori`. **92/92 tests unitaires et54/54 parcours navigateur hors ligne**, aucune erreur JavaScript ni requête externe ; WebGL, build/lint Android et signature APK v2 vérifiés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/a2e1ab8e4b7e8c01b0ac535dcd53f77599c43731/temp/Max-YutNori-v0.8.6-debug.apk) —62,500,244 octets ; SHA-256 `fe1e2c3af08a6541246f8dc2076608b98cd8757c63d871aa3025443393936ba5`. Vrai téléchargement HTTP200, ZIP, manifeste binaire/version, quatre PNG et MP3 vérifiés. Certificat extrait de l’APK identique à0.8.5 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Installation par-dessus0.8.5 possible, sans désinstallation ; essai d’installation réel encore humain. **APK uniquement**, aucun nouvel AAB.

**À valider par Fab sur Samsung SM-A576B Android16** : mise à jour réelle ; taille/lisibilité du plateau et des pions pendant approche, recul et retours ; ×2/pinch/prises et vue libre ; vol/rangement des quatre yut ; esthétique des24 cascades/brumes/nuages, FPS et chauffe. Aucun test physique Samsung ni mesure de fluidité matérielle revendiqué.

## Historique — états précédents conservés

# MYN-020 — Rapprochement réel de la caméra — autorisée le 27/10/2026

Fab précise que « zoom » signifiait rapprocher réellement la caméra du plateau. Toutes les séquences (approche, latéral, recul maximal, suivi, fin et retour), dans toutes les vues et avec ×2, doivent conserver un plateau lisible sans recul excessif. ×2 reste un interrupteur réversible, calculé depuis le cadrage normal rapproché et compatible avec le pincement. Nouvelle autorisation : « Ok, code sa ». Base livrée 0.8.5/code14, commit9ada70e005ad7358e08a04da581b45e42a246cfe. Réalisation0.8.6/code15 en vérification (92 tests et régressions caméra/retarget vertes), APK uniquement, PR#2 brouillon, aucun merge main ni Release.

Préserver intégralement le panorama/lac0.8.4, physique/cycle du bol et puissances0.8.5, règles, sauvegarde, musique, identité et signature. Les quatre yut en vol doivent rester visibles même si leur cadrage exige temporairement du recul.

## Historique — référence précédente conservée

# MYN-019 — LIVRÉE, à valider sur Samsung — 27 octobre 2026

MYN-019 : cadrage 3D rapproché du plateau, bandeaux compacts et semi-transparents, tour/joueur/message regroupés à gauche. Zoom ×2 à deux états avec `aria-pressed`, transition douce et pinch indépendant ; la caméra action garde son propre cadrage par compensation de projection puis rend le grossissement choisi. Bol/socle déplacés vers la droite avec physique, départs, rangement et pointage cohérents. Forces minimale et maximale accrues, migration versionnée des anciennes valeurs, auto/IA/capteur raccordés. Les quatre volumes physiques doivent tous dépasser le rebord incliné/soulevé avec marge avant désactivation des collisions et fondu rapide du bol/socle ; le vol reste dynamique et le rangement revient au bol. Murs hauts invisibles, CCD et subdivision adaptative pour impacts extrêmes ; aucune téléportation de confinement ni face inventée.

Lancer, force et mode automatique restent disponibles dans le bandeau ; les choix de coups partagent les lignes et défilent lorsqu'ils dépassent la hauteur disponible. L'ondulation du lac, ses formules/masques et le panorama 0.8.4 (24 cascades, brumes et nuages) n'ont pas été modifiés. Règles, sauvegarde v4, identité, icône, musique et signature conservées.

Source `89ad97d4ed659aab3e03c68289348466bcfdf252` ; binaires `b7355bf77fb9637d325a59cb5edd290e618522b0` ; [CI 40432711889](https://github.com/greenpower2669/Max-YutNori/actions/runs/40432711889) **réussie**. Version **0.8.5/code14**, `fr.fab.maxyutnori`. **89/89 tests unitaires et 50/50 parcours navigateur hors ligne** ; aucune erreur JavaScript ni requête externe. Rendu WebGL : lac inchangé aux cinq phases de référence, sondes terrestres fixes ; panorama 0.8.4 conservé. Build/lint Android et signature APK v2 validés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/b7355bf77fb9637d325a59cb5edd290e618522b0/temp/Max-YutNori-v0.8.5-debug.apk) — 62,499,852 octets ; SHA-256 `578d54da69f41cd0ee7bdcad871bb7ac4bea37a87eeef5c21ea217119b603fe6`. Certificat extrait du vrai APK téléchargé et identique à 0.8.4 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. ZIP, manifeste Android binaire, icône, quatre PNG et musique MP3 vérifiés. **APK uniquement**, aucun nouvel AAB.

**À valider par Fab sur Samsung SM-A576B Android 16** : mise à jour réelle, lisibilité du cadrage et des pions, gestes/pinch/×2/caméra action, bol à droite et retour des quatre yut, puissance et rebonds, esthétique de toutes les 24 cascades/brumes/nuages, berges immobiles et FPS/chauffe. La capture 25678.jpg n'était pas disponible dans ce checkout : la disposition décrite par Fab a guidé le travail, la correspondance visuelle exacte reste humaine. Aucun test physique Samsung ni mesure FPS revendiqué. Aucun merge `main` ni Release définitive.

## Historique — états antérieurs conservés

## MYN-019 — Autorisée, réalisation 0.8.5/code14 (27/10/2026)

CI initiale40431151100 arrêtée avant Android : le test a détecté le mode automatique masqué en phase de déplacement. Commandes permanentes rétablies et contrôle de visibilité ajouté ; nouveau passage complet à lancer. Aucun nouvel APK livré.

Fab autorise « Ok, code » après sa passation : rapprocher réellement la caméra du plateau dans les quatre vues ; informations tour/joueur/état/messages à gauche, bandeaux plus compacts sans sacrifier la lisibilité et les gestes. Bol et socle à droite avec colliders/départs/rangement cohérents ; murs Rapier invisibles et CCD pour lancers plus hauts, forces mini ET maxi accrues (humain/capteur/auto/IA), migration des valeurs sauvegardées. Disparition rapide bol/socle dès que les quatre volumes physiques ont franchi le rebord avec marge ; collisions désactivées au moment sûr, vol et retour naturels. Interrupteur ×2 en haut à gauche, transition, aria-pressed, non cumulatif et compatible vues/pinch/caméra action.

**Protection absolue :** aucun changement au lac ni à ses shaders/formules/masques, aux 24 cascades et brumes/nuages de 0.8.4. Règles/sauvegarde/identité fr.fab.maxyutnori/icône/signature conservées. APK debug **uniquement**, direct dans temp/, vérifié ; pas de nouvel AAB, merge main ou Release. Référence stable 0.8.4/code13 ; plan docs/plan-ergonomics-v085.md. Capture 25678.jpg citée par Fab, non présente dans le dépôt courant ; le texte fourni guide l'implémentation. Implémentation et revue traitées ; 89 tests unitaires, cas physiques extrêmes et HUD chargé vérifiés. Compilation/livraison APK encore à faire ; dernière livraison reste0.8.4.

# Ordres de mission — Max-YutNori

## MYN-018 — 0.8.4/code13 LIVRÉE sur la branche de travail (26/10/2026)

Fab a autorisé le codage des animations du panorama. Repérages d'origine : `25663.jpg` = 24 cascades roses ; `25651.jpg` = brumes violettes, nuages turquoise et lac jaune à protéger. Implémentation par atlas séparé RGBA 512×256 (512 Kio) : 24 trajets roses, 5 bandes violettes et 7 bandes turquoise. L'atlas est préparé une fois. Les calculs et masques du lac 0.8.3 (ondulation et réfraction), ainsi que mousse/embruns existants, restent inchangés. Ne pas revenir dessus sans demande expresse de Fab.

**Livraison vérifiée** : 0.8.4, versionCode 13, source `ac1763dcc19a26518fd7ce97613810aee7359771`, CI [40377936315](https://github.com/greenpower2669/Max-YutNori/actions/runs/40377936315) réussie, binaires déposés au commit `a9c79276e64d2216ab7711843ba8778066f47c56` : [APK installable](https://github.com/greenpower2669/Max-YutNori/raw/a9c79276e64d2216ab7711843ba8778066f47c56/temp/Max-YutNori-v0.8.4-debug.apk) / [AAB](https://github.com/greenpower2669/Max-YutNori/raw/a9c79276e64d2216ab7711843ba8778066f47c56/temp/Max-YutNori-v0.8.4-debug.aab). Tests unitaires, 45 scénarios navigateur hors ligne, rendu panorama, construction APK/AAB et lint Android réussis. Comparaison de cinq phases du lac avec la référence 0.8.3 : différences des pixels sondés = 0 ; mode « animations réduites » stable. Même certificat de signature que 0.8.3, identité Android `fr.fab.maxyutnori`.

**Limite** : les tests prouvent le fonctionnement de zones et de points contrôlés, pas la qualité visuelle de chacune des 24 cascades dans chaque vue. Validation sur Samsung SM-A576B Android 16 (esthétique, rives, modes graphiques, FPS/chauffe) **encore requise**. Ne jamais annoncer un test matériel effectué sans retour de Fab. Aucun merge vers `main` ni Release définitive autorisé.




## MYN-017 — Livrée, à valider sur Samsung — 26/10/2026

MYN-017 corrige la déformation des arbres signalée sur 25656.jpg : eau autorisée au pixel courant ET au prélèvement déplacé, exclusion des cimes et clapot réduit. Supprimer l’héritage de masque d’eau autour des chutes. Le ciel conserve l’advection de densité avec géométrie fixe ; les calculs de mousse/embruns et la brume sont conservés. L’ancienne égalité complète du composite 0.8.1 ne s’applique plus lorsqu’elle conserve la déformation fautive. Image originale, jeu, HUD/vues/pions, musique, sauvegarde, identité Android, icône et signature conservés.

Carte 128 Kio existante réutilisée, une passe, aucune nouvelle texture/particule ni transfert/recréation par frame. Contrôle conservateur de matière RGB linéaire et de masque ; une lecture de masque supplémentaire uniquement sur les fragments susceptibles de bouger.

CI [40329703094](https://github.com/greenpower2669/Max-YutNori/actions/runs/40329703094) réussie : 76/76 tests et 45/45 parcours navigateur hors ligne, aucune erreur JS/requête externe, APK/AAB et lint Android réussis. Pixels : huit sondes de géométrie à cinq phases, sans déformation ; eau avec réfraction positive, brume/ciel/chutes animés, mode réduit fixe. Régression de l’arbre 720/420 observée rouge puis verte. Revue indépendante effectuée. Source `9adc09709dead8bfd5695b39eca01c2b8a0b63a2`, binaires `84d49c1c216002e3913b540feb1bcefaa15808c1`. Vrais téléchargements HTTP 200, ZIP/SHA-256, versions, quatre PNG et MP3 vérifiés ; certificats extraits des APK v2/AAB identiques à 0.8.2 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,495,080 octets ; SHA-256 `6a33dad7d6e8e5fa2a1894a5b6b2412b920282afea93315320289547f1da80f3`.
AAB : 62,005,457 octets ; SHA-256 `ede3d29837de081081f7e367d8d4532d6151e76076f12e394eb0a7dd615c4ee2`.

Installation en mise à jour de 0.8.2 sans désinstallation. Les sondes automatiques ne prouvent pas une segmentation sémantique exhaustive de chaque pixel ; vérifier les autres berges/cimes et la fluidité sur Samsung SM-A576B Android 16. Aucun essai matériel/FPS revendiqué. Aucun merge main ni Release définitive.

### Demande originale et diagnostic conservés

Fab signale sur 25656.jpg que l’eau déforme les arbres dans la 0.8.2 et demande « ne déformer que l’eau ». Corriger le débordement de la déformation, conserver les animations de brume/ciel et les effets de chutes/embruns appréciés. Cette correction prévaut sur l’ancienne exigence de composite pixel-identique qui conservait la déformation fautive. Version visée 0.8.3/code12, dernière livraison vérifiée 0.8.2. Plan docs/plan-water-only-v083.md.

## MYN-016 — Livrée, à valider sur Samsung — 26/10/2026

La brume basse suit toutes les nappes repérées en violet, les nuages du ciel suivent le repérage turquoise et l’eau le repérage jaune avec îlots/rives exclus. Les six régions des chutes gardent le rendu composite 0.8.1 ; fondu doux à l’extérieur pour éviter une découpe elliptique. Les couleurs du repérage restent dans le diagnostic, pas dans le jeu. Image originale, HUD/vues/pions, musique, règles, sauvegarde, identité, icône et signature conservés.

Une carte statique RGBA 256×128/128 Kio contient bruit et trois masques, préparée une fois. Une passe du panorama, aucun objet supplémentaire ni transfert/recréation de texture par frame, au plus trois lectures de cette carte par fragment. Pause/animations réduites/qualité légère conservées.

CI [40320155787](https://github.com/greenpower2669/Max-YutNori/actions/runs/40320155787) réussie : 76/76 tests unitaires et 45/45 parcours navigateur hors ligne, aucune erreur JS/requête externe, build APK/AAB et lint Android réussis. Pixels réels : 14 sondes positives/négatives pour les régions, six cœurs comparés à la référence 0.8.1 à deux temps, raccord de rive vérifié et mode réduit fixe. Revue indépendante traitée : raccord d’eau corrigé et testé rouge→vert, métadonnée fsevents rétablie. Source `04c4cb053bc25f49b0a22c93cb7003fbdbb0b70d`, binaires `3756c18859faec9da5e37e92239f77310d3aba4e`. Téléchargements HTTP 200, intégrité ZIP/SHA-256, versions, quatre PNG et MP3 vérifiés ; certificats extraits des vrais APK v2/AAB identiques à 0.8.1 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,494,932 octets ; SHA-256 `91dec0a4e7123fea546daab73d6f42e2c3c14136808dea2f927185d12758e6e1`.
AAB : 62,005,342 octets ; SHA-256 `9b4a52fbdceabef1809ce96523346c39a4139ab852054a996698d8442d899f0d`.

Mise à jour de 0.8.1 sans désinstallation. Fidélité esthétique finale et fluidité/coût GPU sur Samsung SM-A576B Android 16 restent à valider ; aucun FPS matériel revendiqué. Aucun merge main ni Release définitive.

### Demande originale et réalisation conservées

Fab valide la livraison précédente et demande avec son image annotée 25651.jpg : étendre la méthode à la totalité des nappes repérées en violet, inclure les nuages turquoise, mieux délimiter l’eau jaune. Préserver les effets approuvés des chutes/embruns. Méthode légère existante retenue ; plan docs/plan-panorama-zones-v082.md, cible 0.8.2/code11, dernière livraison vérifiée 0.8.1.

## MYN-015 — Livrée, à valider sur Samsung — 26/10/2026

Nuages bas indépendants dans les vallées et au-dessus du lac : deux défilements doux de densité, masque statique, opacité maximale 18 %. Les calculs des cascades/embruns validés par Fab restent inchangés ; leur région géométrique complète est exclue du nouveau voile. Texture périodique 128×128 RGBA (64 Kio) préparée une fois, une seule passe de panorama, aucun objet/particule supplémentaire ni transfert/recréation de texture par frame. Pause et animations réduites respectées ; qualité légère conserve les nappes. HUD, vues, caméra, pions, musique Arisongs, règles, sauvegarde v4, identité fr.fab.maxyutnori, icône et signature de test conservés.

CI [40288471190](https://github.com/greenpower2669/Max-YutNori/actions/runs/40288471190) réussie : 73/73 tests unitaires et 45/45 parcours navigateur hors ligne, zéro erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Pixels réels : nappes visibles/mobiles en qualité normale/légère, six cœurs de cascades identiques avec/sans nouvelle couche, un dessin et 64 Kio, mode réduit fixe. Revue indépendante favorable. Source `adf0c9f75d914016cae9b2ba3aedc6662f3fd78c`, binaires `fa1871f945b0c093f7580ce3c761078b836352ec`. Vrais téléchargements HTTP 200, intégrité ZIP/SHA-256, identité/version/icône, quatre PNG et MP3 vérifiés ; certificats extraits des APK v2/AAB identiques à 0.8.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,492,800 octets ; SHA-256 `999b4a8ffe57e62161be73083a28f0d973461b6077be870fd610f177253cade6`.
AAB : 62,003,366 octets ; SHA-256 `ed482e10893272d28e2ebf8b22e6a7ade4a09bfc1e1319d06785a45b6501fd2e`.

Mise à jour de 0.8.0 sans désinstallation. Le coût GPU et le confort visuel réels sur Samsung SM-A576B Android 16 restent à valider ; aucun FPS matériel revendiqué. Au plus trois lectures de texture supplémentaires par fragment concerné. Aucun merge main ni Release définitive.

### Demande originale et réalisation conservées
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
<!-- END ORIGINAL ordres-de-mission.md -->

## Archive 2026-10-27 / todo.md

SHA-256 UTF-8 : `ad11d8f4120c5789d32097ee9e597af40c59cf5117f05c3fcd99030fa6f1bf0e`

<!-- BEGIN ORIGINAL todo.md -->
# État courant — MYN-022 / 0.8.8-code17 livrée

- [x] Nouveau logo, nom accessible, favicon et icônes Android adaptatives/cinq densités.
- [x] Source intacte, sept dérivés complets, garde-fou PNG et correction de revue MYN-D043.
- [x] 96 tests et 56 parcours, WebGL, build/lint/signature Android.
- [x] APK réel téléchargé, pixels logo/icônes, version/package/certificat vérifiés ; cinq mémoires et passation actualisées.
- [ ] Essais Samsung et grossissement système détaillés ci-dessous.

Le visuel jade/or fourni par Fab est intégré dans le jeu avec emblème carré de 44 px et nom texte lisible, ainsi que dans le favicon et l’icône Android. Calque adaptatif 108 dp / visuel 56 dp et cinq densités classiques ; source JPEG conservée intacte, dérivés Lanczos uniquement. Le bandeau compact garde ses commandes accessibles et sa hauteur paysage.

Source `08abcaed4940511bdbd73cb3a863c2172209e93a` ; binaires `99543419bca0b55a9b12e3faeb98fa8833aecf50` ; [CI 40543163343](https://github.com/greenpower2669/Max-YutNori/actions/runs/40543163343) **réussie**. Version **0.8.8/code17**, identité `fr.fab.maxyutnori`. **96/96 tests unitaires et 56/56 parcours navigateur hors ligne**, aucune erreur JavaScript/requête externe. WebGL lac aux cinq phases à delta nul, compilation/lint Android et signature APK v2 réussis.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/99543419bca0b55a9b12e3faeb98fa8833aecf50/temp/Max-YutNori-v0.8.8-debug.apk) — 62,243,800 octets ; SHA-256 `1b3ba30fccf41a07fb5b034946c79cd306ce488437436ad87cece09befb9e07e`. Vrai téléchargement HTTP200, intégrité ZIP, manifeste/version/package vérifiés. **Pixels des sept dérivés logo/icônes identiques aux sources approuvées après compilation**, ressources adaptatives/legacy et références icon/roundIcon vérifiées. Certificat extrait du vrai APK : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identique à 0.8.7. Mise à jour sans désinstallation possible ; essai réel encore humain. APK uniquement, aucun nouvel AAB.

Treize fichiers caméra/physique/panorama et décor/règles conservés octet pour octet à la base ce531ea. Cadrage rapproché et redressé MYN-021, fond/rebord visible, ×2 physique et pincement préservés. Lac 0.8.4 : aucune modification d’ondulation, réfraction, vitesse/intensité, masque ou rendu. Les 24 cascades, brumes et nuages, les règles, sauvegardes et musique restent préservés. Aucun merge main/Release définitive.

**À valider par Fab sur Samsung SM-A576B Android16** : installation réelle, icône du lanceur/cache et masques OEM animés, lisibilité du logo, confort tactile et capteurs/son, rotation avec noms longs pendant un suivi, autres dimensions et grossissement système, esthétique/FPS/chauffe. Captures et tests automatiques ne prouvent pas ces validations matérielles. Le « Parfait » antérieur n’est pas une mesure exhaustive.

## Historique — états précédents conservés

## Précision de format des images historiques — MYN-022

Les trois assets historiques nommés moonlit-panorama.png, rules-fresco.png et engraved-table.png sont réellement des JPEG. Ils restent byte-identiques ; seul le nouveau logo est un PNG. Le contrôle de structure PNG ajouté était trop large : prévol ZIP constitué des vrais assets observé RED (Invalid PNG signature), puis GREEN en limitant cette exigence au nouveau logo. Contrôle byte-identique des anciens assets maintenu. Aucun changement du produit ; CI relancée sur ce correctif du vérificateur.

## Revue MYN-022 traitée

- [x] Important MYN-D043 : PNG source incomplet réparé, garde-fou d’intégrité RED→GREEN et suite96/96 après correction.
- [x] Icônes/masques et trois captures inspectés ; contrôle WebGL et HUD locaux verts.
- [ ] CI complète puis vrai APK, signature et pixels des sept dérivés vérifiés.

## Vérifications locales MYN-022

96/96 tests unitaires, scénario logo réel rouge→vert aux trois dimensions, contrôle WebGL (lac delta nul aux cinq phases) et HUD avec noms longs/1,6,12 résultats réussis. Icônes rondes/arrondies/carrées inspectées. Revue et CI Android encore en cours ; aucun APK 0.8.8 déclaré livré. Vérification indépendante du futur APK : `docs/verification/verify-delivery-v088.py`, pixels des sept dérivés comparés après compilation, références icon/roundIcon, version et certificat extraits du binaire.

# MYN-022 — 0.8.8/code17 en vérification

- [x] Autorisation de Fab, cinq mémoires et passation relues ; base ce531ea, 96 tests de référence verts.
- [x] Nouveau logo carré, nom accessible, favicon, icône Android adaptative et cinq densités ; source exacte conservée.
- [x] Version/CI 0.8.8/code17 ; régression de chargement du nouveau logo observée rouge avant intégration.
- [ ] Vérifications navigateur du logo/HUD, tests, WebGL, revue finale.
- [ ] Publier source puis CI complète, APK seul téléchargé/version/package/icône/signature vérifiés.
- [ ] Actualiser preuves, cinq mémoires et passation ; essais Samsung encore humains.

Dernier APK livré : 0.8.7/code16. Caméra/physique/panorama et trois images de décor/règles identiques à la référence (13 fichiers contrôlés).

## Préparation et historique conservés

# Prochaine intervention — MYN-022 : logo et icône — 27 octobre 2026

- [x] Enregistrer la demande exacte de Fab dans le registre, sans effacer les missions antérieures.
- [x] Conserver et contrôler l’original `docs/assets/25701-logo-original.jpg` ; JPEG RGB 1536 × 1536, 597 891 octets, copie sans réencodage.
- [x] Préparer `docs/passation-myn022-logo.md` et synchroniser les cinq mémoires ; aucune intégration produit dans ce tour.
- [ ] Intégrer le nouvel emblème dans le jeu, sans étirer le carré ni augmenter le bandeau au détriment du plateau.
- [ ] Remplacer l’icône Android réellement référencée ; déclinaisons adaptées et marges pour les masques Samsung.
- [ ] Adapter l’assertion de logo 2172 px de `scripts/smoke_ambience.mjs`, contrôler les dérivés dans l’APK et les non-régressions.
- [ ] Version suivante proposée : 0.8.8/code17, à confirmer à la reprise ; compilation/lint, APK seul dans `temp/`, vrai téléchargement/version/package/signature vérifiés.
- [ ] Mettre à jour les preuves et les mémoires après réalisation ; essais Samsung du logo, icône, installation, rotation/noms longs et fluidité.
- [ ] Validations Samsung antérieures encore ouvertes : ne pas les considérer réalisées à partir du seul « Parfait ».

**Dernière livraison inchangée : 0.8.7/code16.** Les 96 tests et 55 parcours ci-dessous concernent cette livraison, pas MYN-022. Source `2afdf9bbd9d67846784631b4e86df746adc687ed`, binaires `c480b902b8ded4f4ecfd0569ea724fcabd336c86`. Aucun nouvel APK, merge main ou Release dans cette préparation.

## Référence livrée et historique conservés

# État courant — 0.8.7/code16 — MYN-021 livrée pour test

- [x] Reproduire 25695.jpg ; tests unitaires et vrai navigateur rouges→verts.
- [x] Redresser/recentrer le suivi et préserver le plateau dans les vues automatiques normal/×2.
- [x] Limiter le recul ajouté, préserver pincement, sélection automatique, prises et retours.
- [x]96 tests unitaires, 55 parcours navigateur, WebGL et Android/lint/signature.
- [x] APK seul téléchargé et vérifié ; cinq mémoires et passation actualisées.
- [ ] Validation Samsung et couverture combinée HUD long/rotation pendant suivi, détaillées ci-dessous.

Fab a validé la proximité de la 0.8.6 mais signalé le fond du plateau coupé sur 25695.jpg. La 0.8.7 recentre la visée et redresse le suivi : inclinaison de 15,6° depuis la verticale, avec le rebord entier inclus dans le cadrage stabilisé. Les vues automatiques Plateau/de dessus et le suivi montrent la surface jouable complète, avec le pion et ses destinations. Le ×2 reste physique à focale 42°/projection 1 ; sa course s’arrête à la distance nécessaire pour garder le plateau entier visible. Sa désactivation retrouve le cadrage normal proche. Le pincement manuel et la vue libre conservent leur liberté, les gros plans temporaires leur rôle. Le ciblage du pincement passe progressivement vers le pion sans saut au neutre. Sélection automatique, prises, retours et cadrage des quatre yut en vol conservés.

Panorama/lac 0.8.4 et physique/cycle/puissances 0.8.5 inchangés. Onze fichiers protégés (dont les quatre PNG) comparés octet pour octet à la base 0.8.6 ; lac testé aux cinq phases à delta pixel nul et sondes terrestres stables. Les 24 cascades, brumes, nuages, masques et formules d’ondulation restent protégés. Règles, sauvegarde, musique, icône, identité et signature conservées. Aucun merge main ni Release définitive.

Source `2afdf9bbd9d67846784631b4e86df746adc687ed` ; binaires `c480b902b8ded4f4ecfd0569ea724fcabd336c86` ; [CI 40517279977](https://github.com/greenpower2669/Max-YutNori/actions/runs/40517279977) **réussie**. Version **0.8.7/code16**, identité `fr.fab.maxyutnori`. **96/96 tests unitaires et 55/55 parcours navigateur hors ligne**, aucune erreur JavaScript ni requête externe ; compilation/lint Android et signature APK v2 validés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/c480b902b8ded4f4ecfd0569ea724fcabd336c86/temp/Max-YutNori-v0.8.7-debug.apk) — 62,500,444 octets ; SHA-256 `391ae8450a15392639d2bf1b67b922d06fc9bbcb7640e60194781d25c81d2867`. Vrai téléchargement HTTP 200, ZIP, manifeste Android/version, quatre PNG et MP3 vérifiés. Certificat extrait de l’APK identique à la 0.8.6 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Installation par-dessus la 0.8.6 possible, essai réel encore humain. **APK uniquement**, aucun nouvel AAB.

**À valider sur Samsung SM-A576B Android 16 par Fab** : mise à jour réelle ; proximité/lisibilité et bord éloigné pendant les séquences ; ×2, pincement/prises et retours ; rotation avec noms longs pendant un suivi ; esthétique, FPS et chauffe. Aucun essai physique Samsung ni mesure matérielle revendiqué. Le cas combiné HUD long + rotation pendant le suivi reste un point mineur de couverture : les blocs sont testés séparément, aucun dysfonctionnement établi.

## Historique — états précédents conservés

# MYN-021 —0.8.7/code16 en cours

- [x] Lire les cinq mémoires et reprendre la base0.8.6.
- [x] Reproduire le bord éloigné coupé (capture25695), tests unitaires et vrai navigateur rouges→verts ;96 tests verts.
- [ ] Redresser/recentrer les poses et préserver le plateau dans la zone utile ; garder les gestes et retours.
- [ ] Tests unitaires/navigateur, revue indépendante et CI Android complète.
- [ ] APK seul téléchargé/version/signature vérifiés ; cinq mémoires/passation à jour.
- [ ] Validation humaine Samsung du cadrage, gestes, esthétique et fluidité.

Dernier APK vérifié0.8.6.

## Historique — références précédentes conservées

# État courant —0.8.6/code15 — MYN-020 livrée pour test

- [x] Rapprochement physique dans les quatre vues et×2 réversible à focale fixe.
- [x] Recul de suivi cadré sur le pion et ses destinations ; retours répétés stables.
- [x] MYN-D041 de revue : focus de la sélection automatique, régression réelle rouge→verte.
- [x] Gestes combinés×2/prise/pinch/désactivation et orbit/pinch/réentrée libre.
- [x]92 tests unitaires,54 parcours navigateur, non-régression panorama/lac et vols, compilation/lint/signature Android.
- [x] APK seul publié, téléchargé et vérifié ; cinq mémoires/passation actualisées.
- [ ] Essais matériels Samsung détaillés ci-dessous, par Fab.

Source `d32198f6ec148f1277c9689d2566d2e0e7205535` ; binaires `a2e1ab8e4b7e8c01b0ac535dcd53f77599c43731` ; [CI40468288904](https://github.com/greenpower2669/Max-YutNori/actions/runs/40468288904) **réussie**. Version **0.8.6/code15**, identité `fr.fab.maxyutnori`. **92/92 tests unitaires et54/54 parcours navigateur hors ligne**, aucune erreur JavaScript ni requête externe ; WebGL, build/lint Android et signature APK v2 vérifiés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/a2e1ab8e4b7e8c01b0ac535dcd53f77599c43731/temp/Max-YutNori-v0.8.6-debug.apk) —62,500,244 octets ; SHA-256 `fe1e2c3af08a6541246f8dc2076608b98cd8757c63d871aa3025443393936ba5`. Vrai téléchargement HTTP200, ZIP, manifeste binaire/version, quatre PNG et MP3 vérifiés. Certificat extrait de l’APK identique à0.8.5 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Installation par-dessus0.8.5 possible, sans désinstallation ; essai d’installation réel encore humain. **APK uniquement**, aucun nouvel AAB.

**À valider par Fab sur Samsung SM-A576B Android16** : mise à jour réelle ; taille/lisibilité du plateau et des pions pendant approche, recul et retours ; ×2/pinch/prises et vue libre ; vol/rangement des quatre yut ; esthétique des24 cascades/brumes/nuages, FPS et chauffe. Aucun test physique Samsung ni mesure de fluidité matérielle revendiqué.

Panorama et lac0.8.4 intégralement conservés :24 cascades, brumes et nuages ; formules de réfraction, intensité/vitesse et masques inchangés. Physique/puissances/cycle du bol0.8.5, règles, sauvegarde, musique, icône et signature préservés. Onze fichiers protégés comparés octet pour octet à la base ; tests WebGL des cinq phases du lac à delta0, sondes terrestres stables. Aucun merge main ni Release définitive.

## Historique — états précédents conservés

# MYN-020 — 0.8.6/code15 en cours

- [x] Lire les cinq mémoires et diagnostiquer le recul0.8.5 ;89 tests de base verts.
- [x] Régression rouge puis verte : recul ajusté au trajet réel, ×2 physique à projection fixe, retours répétés ;92 tests verts et deux groupes navigateur passés.
- [x] MYN-D041 de revue : retarget automatique après déplacement avec résultats restants, régression navigateur rouge→verte ;92 tests unitaires verts après correction.
- [ ] Vérifier gestes, vues, sélections successives, pause, réduction des animations et vol des quatre yut.
- [ ] Revue indépendante puis CI complète/Android, APK seul, vrai téléchargement/version/signature.
- [ ] Synchroniser les cinq mémoires/passation et fournir le lien direct.
- [ ] Essais Samsung par Fab : esthétique, lisibilité, fluidité, installation/gestes.

Dernière livraison vérifiée0.8.5 ; aucun merge main ni Release.

## Historique — référence précédente conservée

# État courant — 0.8.5/code14 — MYN-019 livrée pour test

Source `89ad97d4ed659aab3e03c68289348466bcfdf252` ; binaires `b7355bf77fb9637d325a59cb5edd290e618522b0` ; [CI 40432711889](https://github.com/greenpower2669/Max-YutNori/actions/runs/40432711889) **réussie**. Version **0.8.5/code14**, `fr.fab.maxyutnori`. **89/89 tests unitaires et 50/50 parcours navigateur hors ligne** ; aucune erreur JavaScript ni requête externe. Rendu WebGL : lac inchangé aux cinq phases de référence, sondes terrestres fixes ; panorama 0.8.4 conservé. Build/lint Android et signature APK v2 validés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/b7355bf77fb9637d325a59cb5edd290e618522b0/temp/Max-YutNori-v0.8.5-debug.apk) — 62,499,852 octets ; SHA-256 `578d54da69f41cd0ee7bdcad871bb7ac4bea37a87eeef5c21ea217119b603fe6`. Certificat extrait du vrai APK téléchargé et identique à 0.8.4 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. ZIP, manifeste Android binaire, icône, quatre PNG et musique MP3 vérifiés. **APK uniquement**, aucun nouvel AAB.

- [x] Cadrages/HUD/zoom ×2 et commandes permanentes ; un, six et douze résultats avec nom long vérifiés.
- [x] Bol à droite, disparition géométrique pendant le vol, retour/rangement, forces et migration.
- [x] Confinement min/max et bol soulevé/incliné ; régression vitesse80 RED→GREEN, 100 essais de stress sans sortie.
- [x] Revue et corrections, tests unitaires/graphisme/navigateur, build/lint et vrai APK/signature vérifiés.
- [ ] [FAB] Installer en mise à jour de 0.8.4 et valider gestes, lisibilité, cadrages/×2 et lancers sur Samsung.
- [ ] [FAB] Vérifier les 24 cascades, brumes/nuages, berges, fluidité/chauffe ; relever les FPS si possible.
- [ ] [AGENT] Traiter les éventuels retours matériels par corrections ciblées.
- [ ] [FAB] Décider séparément d'un merge main / Release ; aucune autorisation de fusion reçue.

**À valider par Fab sur Samsung SM-A576B Android 16** : mise à jour réelle, lisibilité du cadrage et des pions, gestes/pinch/×2/caméra action, bol à droite et retour des quatre yut, puissance et rebonds, esthétique de toutes les 24 cascades/brumes/nuages, berges immobiles et FPS/chauffe. La capture 25678.jpg n'était pas disponible dans ce checkout : la disposition décrite par Fab a guidé le travail, la correspondance visuelle exacte reste humaine. Aucun test physique Samsung ni mesure FPS revendiqué. Aucun merge `main` ni Release définitive.

## Historique — états antérieurs conservés

# MYN-019 — 0.8.5/code14 en cours — 27/10/2026

CI initiale40431151100 arrêtée avant Android : le test a détecté le mode automatique masqué en phase de déplacement. Commandes permanentes rétablies et contrôle de visibilité ajouté ; nouveau passage complet à lancer. Aucun nouvel APK livré.

Dernière livraison vérifiée : 0.8.4/code13. Autorisation reçue. Plan docs/plan-ergonomics-v085.md ; suivi docs/ergonomics-progress.md.
- [x] Force/migration, repère bol à droite et confinement Rapier min/max.
- [x] Disparition au franchissement réel des quatre yut, pause/retour/rangement.
- [x] HUD à gauche et compact, cadrages 3D, bouton ×2 et gestes.
- [ ] Tests, revue, non-régression panorama/lac, CI Android et APK seul vérifié.
- [ ] Samsung : cadrage, gestes, esthétique/24 chutes, fluidité/chauffe et lancers réels.

# État courant — Max-YutNori 0.8.4/code13 — MYN-018 LIVRÉE (26/10/2026)

[📱 APK 0.8.4 direct](https://github.com/greenpower2669/Max-YutNori/raw/a9c79276e64d2216ab7711843ba8778066f47c56/temp/Max-YutNori-v0.8.4-debug.apk) · [📦 AAB 0.8.4](https://github.com/greenpower2669/Max-YutNori/raw/a9c79276e64d2216ab7711843ba8778066f47c56/temp/Max-YutNori-v0.8.4-debug.aab) · [CI réussie](https://github.com/greenpower2669/Max-YutNori/actions/runs/40377936315)

- [x] Codage 24 tracés roses de cascades + 5 zones violettes + 7 zones turquoise ; atlas séparé 512 Kio, aucune retouche au code de l'ondulation du lac.
- [x] Tests unitaires, rendu WebGL et 45 parcours navigateur hors ligne (PASS, 0 erreur, 0 requête externe).
- [x] Comparaison pixels 0.8.3 ↔ 0.8.4 : zéro différence sur le lac aux cinq phases testées ; eau toujours réfractée ; brumes/chutes animées aux points sondés ; mode réduit fixe.
- [x] Build, lint et signatures APK/AAB ; certificat de test identique à 0.8.3. Binaires publiés sur branche : `a9c79276e64d2216ab7711843ba8778066f47c56` (source `ac1763d`).
- [ ] **[FAB]** Tester sur Samsung SM-A576B Android 16 les **24 chutes** individuellement, grandes et lointaines, écoulement et embruns.
- [ ] **[FAB]** Comparer toutes les brumes violettes et turquoise, normale/légère, vue 360°, raccords et mouvement perceptible.
- [ ] **[FAB]** Confirmer subjectivement la parfaite conservation de l'ondulation de l'eau, sans déformation des arbres/berges, en vue réelle.
- [ ] **[FAB/AGENT]** Mesurer ou relever FPS, chauffe et confort ; traiter les éventuels retours par correctifs ciblés.
- [ ] **[FAB]** Décider séparément d'une éventuelle fusion vers `main` / Release définitive (aucune autorisation à ce stade).

SHA-256 APK : `47ba5e113dd1c4ab6ba780fe1d839f4813de9d32fa4922bb7c19be9dbc117d6f`. SHA-256 AAB : `70270433a51d79d33ac3b78e7d425d2d7a6173ec4fb639e41989c09c55440c1e`.
**Ne pas rouvrir les anciennes cases « en cours » archivées ci-dessous comme si elles étaient encore l'état actif.**

## Historique — états antérieurs (0.8.3 et avant)

### État archivé : 0.8.3/code12 — MYN-017 livrée pour test

[APK 0.8.3 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/84d49c1c216002e3913b540feb1bcefaa15808c1/temp/Max-YutNori-v0.8.3-debug.apk) · [AAB de test 0.8.3](https://github.com/greenpower2669/Max-YutNori/raw/84d49c1c216002e3913b540feb1bcefaa15808c1/temp/Max-YutNori-v0.8.3-debug.aab).

- [x] Déformation sur la végétation reproduite puis corrigée ; contrôle au départ/arrivée et clapot réduit.
- [x] Tests/pixels/revue/CI Android et paquets téléchargés/signatures vérifiés.
- [ ] [FAB] Installer sur Samsung, revoir les arbres/berges dans toutes les vues, eau/chutes/brume/nuages et fluidité.
- [ ] [AGENT] Traiter les retours matériels et conserver les autres validations humaines ouvertes.

CI [40329703094](https://github.com/greenpower2669/Max-YutNori/actions/runs/40329703094) réussie : 76/76 tests et 45/45 parcours navigateur hors ligne, aucune erreur JS/requête externe, APK/AAB et lint Android réussis. Pixels : huit sondes de géométrie à cinq phases, sans déformation ; eau avec réfraction positive, brume/ciel/chutes animés, mode réduit fixe. Régression de l’arbre 720/420 observée rouge puis verte. Revue indépendante effectuée. Source `9adc09709dead8bfd5695b39eca01c2b8a0b63a2`, binaires `84d49c1c216002e3913b540feb1bcefaa15808c1`. Vrais téléchargements HTTP 200, ZIP/SHA-256, versions, quatre PNG et MP3 vérifiés ; certificats extraits des APK v2/AAB identiques à 0.8.2 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,495,080 octets ; SHA-256 `6a33dad7d6e8e5fa2a1894a5b6b2412b920282afea93315320289547f1da80f3`.
AAB : 62,005,457 octets ; SHA-256 `ede3d29837de081081f7e367d8d4532d6151e76076f12e394eb0a7dd615c4ee2`.

Installation en mise à jour de 0.8.2 sans désinstallation. Les sondes automatiques ne prouvent pas une segmentation sémantique exhaustive de chaque pixel ; vérifier les autres berges/cimes et la fluidité sur Samsung SM-A576B Android 16. Aucun essai matériel/FPS revendiqué. Aucun merge main ni Release définitive.

## Historique — états antérieurs conservés

# MYN-017 — correction 0.8.3 en cours

76 tests, build et pixels verts : huit sondes fixes × cinq phases, eau positive ; revue/CI/livraison attendues. Suivi docs/water-only-progress.md.

- [ ] Reproduire la déformation des arbres, isoler le déplacement UV et corriger les limites départ/arrivée.
- [ ] Pixels, tests, build, revue, CI et APK/AAB/signatures.
Dernière livraison vérifiée 0.8.2 ; docs/plan-water-only-v083.md.

# État courant 0.8.2/code11 — MYN-016 livrée pour test

[APK 0.8.2 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/3756c18859faec9da5e37e92239f77310d3aba4e/temp/Max-YutNori-v0.8.2-debug.apk) · [AAB de test 0.8.2](https://github.com/greenpower2669/Max-YutNori/raw/3756c18859faec9da5e37e92239f77310d3aba4e/temp/Max-YutNori-v0.8.2-debug.aab).

- [x] Régions violet/turquoise/jaune affinées ; chutes/embruns préservés et raccords doux.
- [x] Tests, pixels, revue traitée, CI Android et vrais téléchargements/signatures vérifiés.
- [ ] [FAB] Samsung : comparer toutes les nappes et nuages, les rives/îlots, la fluidité, la pause et les chutes conservées.
- [ ] [AGENT] Traiter les retours matériels ; poursuivre les validations humaines encore ouvertes.

CI [40320155787](https://github.com/greenpower2669/Max-YutNori/actions/runs/40320155787) réussie : 76/76 tests unitaires et 45/45 parcours navigateur hors ligne, aucune erreur JS/requête externe, build APK/AAB et lint Android réussis. Pixels réels : 14 sondes positives/négatives pour les régions, six cœurs comparés à la référence 0.8.1 à deux temps, raccord de rive vérifié et mode réduit fixe. Revue indépendante traitée : raccord d’eau corrigé et testé rouge→vert, métadonnée fsevents rétablie. Source `04c4cb053bc25f49b0a22c93cb7003fbdbb0b70d`, binaires `3756c18859faec9da5e37e92239f77310d3aba4e`. Téléchargements HTTP 200, intégrité ZIP/SHA-256, versions, quatre PNG et MP3 vérifiés ; certificats extraits des vrais APK v2/AAB identiques à 0.8.1 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,494,932 octets ; SHA-256 `91dec0a4e7123fea546daab73d6f42e2c3c14136808dea2f927185d12758e6e1`.
AAB : 62,005,342 octets ; SHA-256 `9b4a52fbdceabef1809ce96523346c39a4139ab852054a996698d8442d899f0d`.

Mise à jour de 0.8.1 sans désinstallation. Fidélité esthétique finale et fluidité/coût GPU sur Samsung SM-A576B Android 16 restent à valider ; aucun FPS matériel revendiqué. Aucun merge main ni Release définitive.

## Historique — états antérieurs conservés

# MYN-016 — 0.8.2 en cours

MYN-D035 : raccord d’eau relevé par la revue, fondu extérieur corrigé ; même sonde GPU isolée rouge→vert et suite finale verte. Revue traitée ; CI complète/paquets à vérifier.


État local MYN-016 : 76 tests et pixels réels verts, référence 0.8.1 des six chutes identique ; revue/CI/livraison à faire. Suivi docs/panorama-zones-progress.md.

- [ ] Cartographie précise violet/turquoise/jaune ; tests, pixels, revue, CI et livraison.
Dernière livraison vérifiée : 0.8.1. Plan : docs/plan-panorama-zones-v082.md.

# État courant 0.8.1/code10 — MYN-015 livrée pour test

[APK 0.8.1 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/fa1871f945b0c093f7580ce3c761078b836352ec/temp/Max-YutNori-v0.8.1-debug.apk) · [AAB de test 0.8.1](https://github.com/greenpower2669/Max-YutNori/raw/fa1871f945b0c093f7580ce3c761078b836352ec/temp/Max-YutNori-v0.8.1-debug.aab).

- [x] Nuages bas séparés, légers, mobiles ; cascades/embruns préservés.
- [x] Tests, pixels/coût borné, revue, CI Android et vrais téléchargements/signatures vérifiés.
- [ ] [FAB] Samsung : vérifier dérive des nuages bas, aspect/coût ressenti, chutes conservées et pause ; poursuivre les essais matériels MYN-014.
- [ ] [AGENT] Traiter les retours matériels.

CI [40288471190](https://github.com/greenpower2669/Max-YutNori/actions/runs/40288471190) réussie : 73/73 tests unitaires et 45/45 parcours navigateur hors ligne, zéro erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Pixels réels : nappes visibles/mobiles en qualité normale/légère, six cœurs de cascades identiques avec/sans nouvelle couche, un dessin et 64 Kio, mode réduit fixe. Revue indépendante favorable. Source `adf0c9f75d914016cae9b2ba3aedc6662f3fd78c`, binaires `fa1871f945b0c093f7580ce3c761078b836352ec`. Vrais téléchargements HTTP 200, intégrité ZIP/SHA-256, identité/version/icône, quatre PNG et MP3 vérifiés ; certificats extraits des APK v2/AAB identiques à 0.8.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,492,800 octets ; SHA-256 `999b4a8ffe57e62161be73083a28f0d973461b6077be870fd610f177253cade6`.
AAB : 62,003,366 octets ; SHA-256 `ed482e10893272d28e2ebf8b22e6a7ade4a09bfc1e1319d06785a45b6501fd2e`.

Mise à jour de 0.8.0 sans désinstallation. Le coût GPU et le confort visuel réels sur Samsung SM-A576B Android 16 restent à valider ; aucun FPS matériel revendiqué. Au plus trois lectures de texture supplémentaires par fragment concerné. Aucun merge main ni Release définitive.

## Historique — états antérieurs conservés

# MYN-015 — Nuages bas 0.8.1 en cours
- [x] Clarification, autorisation et référence 4e282d6 lues ; chutes actuelles validées à préserver.
- [x] Texture fixe64Kio, nappes basses séparées et dérive ; une passe, six cœurs de cascades pixel-identiques, mode réduit fixe.
- [x] 73 tests,7parcours confort, build, pixels et revue indépendante favorables.
- [ ] CI complète, APK/AAB et téléchargements/signatures.
Dernière livraison vérifiée : 0.8.0. Plan docs/plan-low-mist-v081.md.

# État courant 0.8.0/code9 — MYN-014 livrée pour test

[APK 0.8.0 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/79ce9005ee4556c1d9c0d8cc5b0c65073e124fb3/temp/Max-YutNori-v0.8.0-debug.apk) · [AAB de test 0.8.0](https://github.com/greenpower2669/Max-YutNori/raw/79ce9005ee4556c1d9c0d8cc5b0c65073e124fb3/temp/Max-YutNori-v0.8.0-debug.aab).

- [x] Toutes les demandes de la passation réalisées ; revue et régression native du menu corrigées.
- [x] CI, téléchargements, paquets/signatures et originaux vérifiés.
- [ ] [FAB] Samsung : installer en mise à jour, vérifier taille/pions/glisser/pinch, bouton Vue, joueur actif bicolore, décor vivant, son prolongé et sens du bol dans les deux paysages.
- [ ] [AGENT] Traiter les retours matériels.

CI [40259390198](https://github.com/greenpower2669/Max-YutNori/actions/runs/40259390198) réussie : 71/71 tests unitaires, 45/45 parcours navigateur hors ligne, zéro erreur JS/requête externe ; cinq zones du panorama vérifiées sur leurs pixels réels et mode réduit identique. Compilation APK/AAB et lint Android réussis. Source `7ab9f8761c56bc899242a234b24a406e0e17d909`, binaires `79ce9005ee4556c1d9c0d8cc5b0c65073e124fb3`. Vrais téléchargements HTTP 200, intégrité ZIP/SHA-256, identité/version/icône/PNG et MP3 vérifiés. Certificats extraits des vrais APK v2/AAB : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identiques à 0.7.0.

APK : 62,491,892 octets ; SHA-256 `06d8a8dc4b790f47e7d0f68d67413f6a262b5b6a0f2eaabaa8502743c803bdc2`.
AAB : 62,002,566 octets ; SHA-256 `2a8e3c8831926acb01d0c58f53de78cd9a8ce51dc17659a378a2637a120b4b45`.

Installation en mise à jour de 0.7.0 sans désinstallation. APK paysage, portrait vérifié pour le Web. Confort tactile, intensité esthétique, performance et capteur restent à valider sur Samsung SM-A576B Android 16. Aucun essai physique revendiqué. Aucun merge main ni Release définitive.

## Historique — états antérieurs conservés

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
<!-- END ORIGINAL todo.md -->

## Archive 2026-10-27 / brain.md

SHA-256 UTF-8 : `3752ed0e06889582f89936724e4247a94328884fa7e31b265a665af4742c80e7`

<!-- BEGIN ORIGINAL brain.md -->
# Contrat courant — MYN-022 / 0.8.8-code17 livrée

Le visuel jade/or fourni par Fab est intégré dans le jeu avec emblème carré de 44 px et nom texte lisible, ainsi que dans le favicon et l’icône Android. Calque adaptatif 108 dp / visuel 56 dp et cinq densités classiques ; source JPEG conservée intacte, dérivés Lanczos uniquement. Le bandeau compact garde ses commandes accessibles et sa hauteur paysage.

Source `08abcaed4940511bdbd73cb3a863c2172209e93a` ; binaires `99543419bca0b55a9b12e3faeb98fa8833aecf50` ; [CI 40543163343](https://github.com/greenpower2669/Max-YutNori/actions/runs/40543163343) **réussie**. Version **0.8.8/code17**, identité `fr.fab.maxyutnori`. **96/96 tests unitaires et 56/56 parcours navigateur hors ligne**, aucune erreur JavaScript/requête externe. WebGL lac aux cinq phases à delta nul, compilation/lint Android et signature APK v2 réussis.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/99543419bca0b55a9b12e3faeb98fa8833aecf50/temp/Max-YutNori-v0.8.8-debug.apk) — 62,243,800 octets ; SHA-256 `1b3ba30fccf41a07fb5b034946c79cd306ce488437436ad87cece09befb9e07e`. Vrai téléchargement HTTP200, intégrité ZIP, manifeste/version/package vérifiés. **Pixels des sept dérivés logo/icônes identiques aux sources approuvées après compilation**, ressources adaptatives/legacy et références icon/roundIcon vérifiées. Certificat extrait du vrai APK : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identique à 0.8.7. Mise à jour sans désinstallation possible ; essai réel encore humain. APK uniquement, aucun nouvel AAB.

Treize fichiers caméra/physique/panorama et décor/règles conservés octet pour octet à la base ce531ea. Cadrage rapproché et redressé MYN-021, fond/rebord visible, ×2 physique et pincement préservés. Lac 0.8.4 : aucune modification d’ondulation, réfraction, vitesse/intensité, masque ou rendu. Les 24 cascades, brumes et nuages, les règles, sauvegardes et musique restent préservés. Aucun merge main/Release définitive.

**À valider par Fab sur Samsung SM-A576B Android16** : installation réelle, icône du lanceur/cache et masques OEM animés, lisibilité du logo, confort tactile et capteurs/son, rotation avec noms longs pendant un suivi, autres dimensions et grossissement système, esthétique/FPS/chauffe. Captures et tests automatiques ne prouvent pas ces validations matérielles. Le « Parfait » antérieur n’est pas une mesure exhaustive.

## Historique — états précédents conservés

## Précision de format des images historiques — MYN-022

Les trois assets historiques nommés moonlit-panorama.png, rules-fresco.png et engraved-table.png sont réellement des JPEG. Ils restent byte-identiques ; seul le nouveau logo est un PNG. Le contrôle de structure PNG ajouté était trop large : prévol ZIP constitué des vrais assets observé RED (Invalid PNG signature), puis GREEN en limitant cette exigence au nouveau logo. Contrôle byte-identique des anciens assets maintenu. Aucun changement du produit ; CI relancée sur ce correctif du vérificateur.

# Contrat courant — MYN-022 / réalisation 0.8.8

Le visuel fourni par Fab devient le logo du jeu (carré 44 px et nom texte lisible), le favicon et l’icône de lancement Android. Dérivés Lanczos de la source JPEG originale intacte ; aucune régénération de dessin. Le bandeau conserve sa hauteur compacte et les zones tactiles de 44 px. L’icône adaptative utilise une couche 108 dp, visuel 56 dp centré, fond jade ; cinq tailles classiques 48/72/96/144/192 px. Les masques sont inspectés visuellement ; leur comportement Samsung réel reste humain.

Package fr.fab.maxyutnori, nom Max YutNori, certificat et sauvegardes invariants. Caméra, physique, lac/panorama et musique inchangés. 0.8.8/code17 en vérification, aucune livraison déclarée avant preuves ; dernier APK 0.8.7.

## Préparation et historique conservés

# Contrat demandé — MYN-022 : nouveau logo et icône — 27 octobre 2026

Fab désigne le visuel joint `25701.png` comme nouveau logo du jeu et nouvelle icône Android, et demande passation + mise à jour des mémoires. Conserver la composition jade/or et les bâtonnets noir/cèdre, sans étirement ni réinterprétation créative. Adapter le carré au bandeau compact avec nom accessible et commandes intactes ; préparer une icône lisible et protégée des découpes du lanceur. L’ancien logo horizontal et l’ancienne icône peuvent être remplacés au titre de cet avenant visuel, sans changer identité Android, nom, signature ou sauvegarde.

**État réel : passation et source conservées, intégration à réaliser.** Le produit et l’APK restent en 0.8.7/code16 avec leurs anciens visuels. Original `docs/assets/25701-logo-original.jpg` : JPEG RGB opaque 1536 × 1536, 597 891 octets, SHA-256 `afb8df0a1d8540ddac46ba8bbda8ae5208f4d4051a86c5029d508af15b3d7096`, copie exacte sans réencodage. Dérivés techniques séparés ; aucune transparence supposée.

Préserver intégralement MYN-021 (caméra proche/redressée, fond/rebord visible, ×2 physique et pincement indépendant), le jeu et le lac/panorama 0.8.4. Seul le logo/l’icône est concerné par la nouvelle demande. APK debug seul directement installable ; `fr.fab.maxyutnori` et certificat existant conservés. Aucun merge main/Release définitive sans accord. Voir `docs/passation-myn022-logo.md`.

## Contrat de la dernière livraison et historique conservés

# Contrat courant — MYN-021 / 0.8.7-code16 livrée

Fab a validé la proximité de la 0.8.6 mais signalé le fond du plateau coupé sur 25695.jpg. La 0.8.7 recentre la visée et redresse le suivi : inclinaison de 15,6° depuis la verticale, avec le rebord entier inclus dans le cadrage stabilisé. Les vues automatiques Plateau/de dessus et le suivi montrent la surface jouable complète, avec le pion et ses destinations. Le ×2 reste physique à focale 42°/projection 1 ; sa course s’arrête à la distance nécessaire pour garder le plateau entier visible. Sa désactivation retrouve le cadrage normal proche. Le pincement manuel et la vue libre conservent leur liberté, les gros plans temporaires leur rôle. Le ciblage du pincement passe progressivement vers le pion sans saut au neutre. Sélection automatique, prises, retours et cadrage des quatre yut en vol conservés.

Panorama/lac 0.8.4 et physique/cycle/puissances 0.8.5 inchangés. Onze fichiers protégés (dont les quatre PNG) comparés octet pour octet à la base 0.8.6 ; lac testé aux cinq phases à delta pixel nul et sondes terrestres stables. Les 24 cascades, brumes, nuages, masques et formules d’ondulation restent protégés. Règles, sauvegarde, musique, icône, identité et signature conservées. Aucun merge main ni Release définitive.

Source `2afdf9bbd9d67846784631b4e86df746adc687ed` ; binaires `c480b902b8ded4f4ecfd0569ea724fcabd336c86` ; [CI 40517279977](https://github.com/greenpower2669/Max-YutNori/actions/runs/40517279977) **réussie**. Version **0.8.7/code16**, identité `fr.fab.maxyutnori`. **96/96 tests unitaires et 55/55 parcours navigateur hors ligne**, aucune erreur JavaScript ni requête externe ; compilation/lint Android et signature APK v2 validés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/c480b902b8ded4f4ecfd0569ea724fcabd336c86/temp/Max-YutNori-v0.8.7-debug.apk) — 62,500,444 octets ; SHA-256 `391ae8450a15392639d2bf1b67b922d06fc9bbcb7640e60194781d25c81d2867`. Vrai téléchargement HTTP 200, ZIP, manifeste Android/version, quatre PNG et MP3 vérifiés. Certificat extrait de l’APK identique à la 0.8.6 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Installation par-dessus la 0.8.6 possible, essai réel encore humain. **APK uniquement**, aucun nouvel AAB.

**À valider sur Samsung SM-A576B Android 16 par Fab** : mise à jour réelle ; proximité/lisibilité et bord éloigné pendant les séquences ; ×2, pincement/prises et retours ; rotation avec noms longs pendant un suivi ; esthétique, FPS et chauffe. Aucun essai physique Samsung ni mesure matérielle revendiqué. Le cas combiné HUD long + rotation pendant le suivi reste un point mineur de couverture : les blocs sont testés séparément, aucun dysfonctionnement établi.

## Historique — états précédents conservés

# Contrat MYN-021 — réalisation0.8.7

Le rapprochement0.8.6 est validé par Fab. Le cadrage stabilisé doit maintenant montrer le fond du plateau, son rebord et ses cases ; redresser l’angle et recentrer la visée. La visibilité du plateau devient prioritaire dans les vues automatiques Plateau/de dessus, y compris×2 ; l’approche physique peut être limitée au cadre indispensable. Pinch manuel, gros plans temporaires, gestes et vols conservés.

## Historique — références précédentes conservées

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
<!-- END ORIGINAL brain.md -->

## Archive 2026-10-27 / brainmap.md

SHA-256 UTF-8 : `1f36031b032de4eba830cdcd0630eb033aff4994107e5c61e5b1e96babf351a3`

<!-- BEGIN ORIGINAL brainmap.md -->
# Carte active — MYN-022 / 0.8.8 livrée — 27 octobre 2026

- Source originale : `docs/assets/25701-logo-original.jpg` ; dérivés/hashes : `docs/branding-assets.json`.
- Générateur de développement `scripts/prepare_branding.py` (Pillow, aucune dépendance du jeu/CI), sérialisation PNG validée en mémoire puis remplacement atomique.
- `scripts/verify_branding.py` : source SHA figé, sept PNG complets/chunks/CRC/IEND, tailles et hashes, avant compilation dans la CI.
- HUD `web/index.html`/CSS final : `max-yutnori-logo.png` 256² affiché44² + nom texte ; même PNG favicon. Ancien titre retiré des actifs.
- Android : manifeste → @mipmap/ic_launcher pour icon/roundIcon ; XML mipmap-anydpi-v26 + foreground PNG432² et fond jade ; cinq PNG48/72/96/144/192. Ancien vecteur retiré.
- `smoke_branding.mjs` via ambience : chargement/ratio/commandes/hauteur/rotation à844,390,1000px. Suite complète56parcours.
- `verify_native_apk.py` : assets/PNG complets/ressources/densités. `docs/verification/verify-delivery-v088.py` : vrai APK et pixels des sept dérivés, manifeste binaire, signature, SHA et rapports CI. Preuve `temp/native-delivery-verification-v088.json`.
- Plan `docs/plan-logo-v088.md`, revue/correctif/limites `docs/revue-v088.md`, passation `docs/passation-myn022-logo.md`.

Le visuel jade/or fourni par Fab est intégré dans le jeu avec emblème carré de 44 px et nom texte lisible, ainsi que dans le favicon et l’icône Android. Calque adaptatif 108 dp / visuel 56 dp et cinq densités classiques ; source JPEG conservée intacte, dérivés Lanczos uniquement. Le bandeau compact garde ses commandes accessibles et sa hauteur paysage.

Source `08abcaed4940511bdbd73cb3a863c2172209e93a` ; binaires `99543419bca0b55a9b12e3faeb98fa8833aecf50` ; [CI 40543163343](https://github.com/greenpower2669/Max-YutNori/actions/runs/40543163343) **réussie**. Version **0.8.8/code17**, identité `fr.fab.maxyutnori`. **96/96 tests unitaires et 56/56 parcours navigateur hors ligne**, aucune erreur JavaScript/requête externe. WebGL lac aux cinq phases à delta nul, compilation/lint Android et signature APK v2 réussis.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/99543419bca0b55a9b12e3faeb98fa8833aecf50/temp/Max-YutNori-v0.8.8-debug.apk) — 62,243,800 octets ; SHA-256 `1b3ba30fccf41a07fb5b034946c79cd306ce488437436ad87cece09befb9e07e`. Vrai téléchargement HTTP200, intégrité ZIP, manifeste/version/package vérifiés. **Pixels des sept dérivés logo/icônes identiques aux sources approuvées après compilation**, ressources adaptatives/legacy et références icon/roundIcon vérifiées. Certificat extrait du vrai APK : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identique à 0.8.7. Mise à jour sans désinstallation possible ; essai réel encore humain. APK uniquement, aucun nouvel AAB.

Treize fichiers caméra/physique/panorama et décor/règles conservés octet pour octet à la base ce531ea. Cadrage rapproché et redressé MYN-021, fond/rebord visible, ×2 physique et pincement préservés. Lac 0.8.4 : aucune modification d’ondulation, réfraction, vitesse/intensité, masque ou rendu. Les 24 cascades, brumes et nuages, les règles, sauvegardes et musique restent préservés. Aucun merge main/Release définitive.

**À valider par Fab sur Samsung SM-A576B Android16** : installation réelle, icône du lanceur/cache et masques OEM animés, lisibilité du logo, confort tactile et capteurs/son, rotation avec noms longs pendant un suivi, autres dimensions et grossissement système, esthétique/FPS/chauffe. Captures et tests automatiques ne prouvent pas ces validations matérielles. Le « Parfait » antérieur n’est pas une mesure exhaustive.

## Historique — états précédents conservés

## Précision de format des images historiques — MYN-022

Les trois assets historiques nommés moonlit-panorama.png, rules-fresco.png et engraved-table.png sont réellement des JPEG. Ils restent byte-identiques ; seul le nouveau logo est un PNG. Le contrôle de structure PNG ajouté était trop large : prévol ZIP constitué des vrais assets observé RED (Invalid PNG signature), puis GREEN en limitant cette exigence au nouveau logo. Contrôle byte-identique des anciens assets maintenu. Aucun changement du produit ; CI relancée sur ce correctif du vérificateur.

## Garde-fou d’assets MYN-022

`scripts/verify_branding.py` vérifie source approuvée, structure complète/chunks/CRC/IEND, dimensions et SHA des sept PNG ; appelé avant npm test/build dans la CI. Générateur atomique via tampon PNG validé puis remplacement ; `verify_native_apk.py` contrôle aussi les chunks Web. `docs/verification/verify-delivery-v088.py` compare les pixels compilés. Voir MYN-D043 et `docs/revue-v088.md`.

# Carte active — MYN-022 / 0.8.8

- `scripts/prepare_branding.py` : déclinaisons déterministes de développement depuis `docs/assets/25701-logo-original.jpg`, Pillow 12.3.0 ; pas exécuté par le build CI. `docs/branding-assets.json` garde tailles et SHA-256.
- `web/public/art/max-yutnori-logo.png` (256×256) → `web/index.html` image décorative avec nom texte adjacent, favicon ; CSS final `.brand` garde une image 44×44 et le nom responsive. Ancien PNG de titre retiré des assets actifs ; reste récupérable dans Git.
- Manifeste Android → `@mipmap/ic_launcher` pour icon et roundIcon ; XML adaptatif `mipmap-anydpi-v26`, foreground PNG RGBA 432×432 (art 224 px centré), fond jade dans `values/branding.xml`. Cinq PNG `mipmap-{mdpi,hdpi,xhdpi,xxhdpi,xxxhdpi}`. Ancien vecteur retiré.
- `scripts/smoke_branding.mjs` étend les parcours réels : chargement local, ratio, logo/commandes visibles, cibles tactiles, hauteur du HUD, rotation 844/390/1000 px. Inclus dans `smoke_ambience.mjs` ; raccourci local AMBIENCE_ONLY=1 BRANDING_ONLY=1.
- `scripts/verify_native_apk.py` : assets Web exacts, ressources adaptatives et cinq densités/dimensions dans l’APK. Versions et noms 0.8.8/code17 synchronisés, signature précédente 0.8.7.
- 13 fichiers caméra/physique/panorama/décor/règles byte-identiques à ce531ea ; aucune modification de logique de jeu pour le logo.

## Préparation et historique conservés

# Carte de reprise — MYN-022 : identité visuelle — 27 octobre 2026

**Aucune modification active du produit dans cette passation.** Dernière livraison 0.8.7/code16 ; chemins ci-dessous examinés à la référence `7ea56398df6d0c62de886fdb40de0c3a0e9ed5c6`.

- Source de référence nouvelle, documentaire et inactive : `docs/assets/25701-logo-original.jpg` (JPEG RGB opaque 1536 × 1536 ; SHA-256 `afb8df0a1d8540ddac46ba8bbda8ae5208f4d4051a86c5029d508af15b3d7096`). `docs/passation-myn022-logo.md` décrit la reprise et la livraison.
- Logo actif actuel : `web/index.html`, `.brand > img`, `./art/max-yutnori-title.png`, dimensions 2172 × 724. `web/src/style.css` contient des règles `.brand img` successives et responsive ; la source nouvelle est carrée, adapter taille/ratio sans agrandir le bandeau. `#zoom2` partage `.brand`.
- Assets du jeu : `web/public/art/` et son README ; futurs dérivés à placer ici. Ne pas charger l’original documentaire depuis `docs/`. Préserver `moonlit-panorama.png`, `engraved-table.png` et `rules-fresco.png`.
- Icône Android actuelle : manifeste `android/app/src/main/AndroidManifest.xml` → `@drawable/ic_launcher` → `android/app/src/main/res/drawable/ic_launcher.xml` (vecteur). Créer/remplacer les ressources requises et maintenir les références cohérentes ; contrôler masques/marges.
- `scripts/smoke_ambience.mjs` exige encore `naturalWidth === 2172` pour le logo. Adapter cette attente au nouveau visuel avec un contrôle réel du chargement ; `scripts/verify_native_apk.py` compare les PNG publics avec ceux de l’APK. Étendre la vérification aux dérivés choisis et à l’icône de lancement.
- Version/package : `package.json`, `package-lock.json`, `android/app/build.gradle`, crédits/diagnostic et `.github/workflows/android.yml`. Ne modifier la version que lors de la réalisation, pas dans ce tour documentaire. Préserver signature et identité.
- Caméra/physique/panorama : carte 0.8.7 ci-dessous toujours applicable ; aucun changement nécessaire pour MYN-022.

## Architecture de la dernière livraison et historique conservés

# Carte active — MYN-021 / 0.8.7 — 27 octobre 2026

- `camera-framing.mjs` : `boardBounds(centerX)` prépare une fois 128 points statiques du vrai rebord (rayon 3,72, hauteurs −0,26 et 0,18). `fitDistance` réutilise son vecteur relatif. `approachFrame(frame,factor,minDistance)` respecte le cadre indispensable tout en déplaçant réellement la caméra.
- `chase-camera.mjs` : inclinaison 15,6° depuis la verticale ; cible sur l’étendue plateau+pion/destinations. Marge du fit 8 %, marge normale supplémentaire 4 % pour éviter un recul cumulé excessif. Le pincement privilégie progressivement le pion sous le neutre ; phase, sélection automatique et gain de glissement conservés.
- `scene.js` : minimum géométrique Plateau/de dessus en automatique ; la limite de dessus suit le pincement manuel. Vue libre et bol conservent leur logique 0.8.6 ; le vol garde son recul de sécurité. Marges HUD calculées par `main.js` inchangées.
- Tests : régressions unitaires de rebord, distance et continuité du pinch ; `smoke_camera_angle.mjs` reproduit 25695.jpg en vrai navigateur. `smoke_camera_proximity.mjs` vérifie rebord, retours, quatre vues et état ×2 ; gestes/retarget/vols de la suite conservés.
- Documentation/preuves : `docs/plan-camera-angle-v087.md`, `docs/revue-v087.md`, `docs/verification/verify-delivery-v087.py`, `temp/native-delivery-verification-v087.json`.


Panorama/lac 0.8.4 et physique/cycle/puissances 0.8.5 inchangés. Onze fichiers protégés (dont les quatre PNG) comparés octet pour octet à la base 0.8.6 ; lac testé aux cinq phases à delta pixel nul et sondes terrestres stables. Les 24 cascades, brumes, nuages, masques et formules d’ondulation restent protégés. Règles, sauvegarde, musique, icône, identité et signature conservées. Aucun merge main ni Release définitive.

Source `2afdf9bbd9d67846784631b4e86df746adc687ed` ; binaires `c480b902b8ded4f4ecfd0569ea724fcabd336c86` ; [CI 40517279977](https://github.com/greenpower2669/Max-YutNori/actions/runs/40517279977) **réussie**. Version **0.8.7/code16**, identité `fr.fab.maxyutnori`. **96/96 tests unitaires et 55/55 parcours navigateur hors ligne**, aucune erreur JavaScript ni requête externe ; compilation/lint Android et signature APK v2 validés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/c480b902b8ded4f4ecfd0569ea724fcabd336c86/temp/Max-YutNori-v0.8.7-debug.apk) — 62,500,444 octets ; SHA-256 `391ae8450a15392639d2bf1b67b922d06fc9bbcb7640e60194781d25c81d2867`. Vrai téléchargement HTTP 200, ZIP, manifeste Android/version, quatre PNG et MP3 vérifiés. Certificat extrait de l’APK identique à la 0.8.6 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Installation par-dessus la 0.8.6 possible, essai réel encore humain. **APK uniquement**, aucun nouvel AAB.

**À valider sur Samsung SM-A576B Android 16 par Fab** : mise à jour réelle ; proximité/lisibilité et bord éloigné pendant les séquences ; ×2, pincement/prises et retours ; rotation avec noms longs pendant un suivi ; esthétique, FPS et chauffe. Aucun essai physique Samsung ni mesure matérielle revendiqué. Le cas combiné HUD long + rotation pendant le suivi reste un point mineur de couverture : les blocs sont testés séparément, aucun dysfonctionnement établi.

## Historique — états précédents conservés

# Carte MYN-021 — fond du plateau

ChaseCamera.routeFrame ne cadre que les empreintes pion/destinations ; sa cible est décalée vers les réserves et le bord arrière du plateau sort de l’image. camera-framing.mjs partage128 points statiques du rebord cylindrique et réutilise un vecteur de calcul ; scene.js applique leur distance minimale aux vues Plateau/top (pinch top indépendant), chase-camera.mjs les inclut dans le suivi avec inclinaison15.6° depuis la verticale et cible recentrée. Les marges HUD restent celles de main.js ; physique et panorama gelés. Plan docs/plan-camera-angle-v087.md.

## Historique — références précédentes conservées

# Carte active — MYN-020 /0.8.6 —27 octobre2026

- `camera-framing.mjs` : `approachFrame` change la distance 3D, à focale42°/projection1 ; `ViewZoom` garde l’état et la transition1↔2, sans cumul. `boardFrame` reste le cadre normal rapproché.
- `chase-camera.mjs` : `routeFrame` ajuste des empreintes réelles ±.42 et hauteur.35 au cadre utile, cible au centre de leur étendue ; `frame` interpole proche/latéral/révélation/suivi. `followDistance`/`dragGain` prennent le facteur physique et le pincement en compte. Le cadre essentiel limite ×2 quand nécessaire.
- `scene.js` : cadre physique dans les quatre vues, aucune modification de `camera.zoom`. `sync` réassocie focus/destinations à la sélection automatique ; vue libre applique le rapport ancien/nouveau facteur et ses bornes normales/×2. `flightBounds` et le recul préventif gardent les quatre yut à l’écran, retour aux cadres normaux après vol.
- `main.js` : diagnostics distinguent facteur souhaité, projection1 et FOV42 ; commande accessible×2, règles et state/save inchangés. Texte d’aide décrit le rapprochement réel.
- Tests : `camera-framing.test.mjs`, `chase-camera.test.mjs`, `smoke_action.mjs`, `smoke_camera_proximity.mjs` raccordé à `smoke_ergonomics.mjs`. Distances physiques, prises×2/pinch/désactivation, orbit/pinch/réentrée libre, sélections répétées/retours et sélection automatique après coup.
- Livraison : `docs/verification/verify-delivery-v086.py` contrôle l’APK réel ; preuves dans `temp/native-delivery-verification-v086.json`. Revue `docs/revue-v086.md`, plan `docs/plan-camera-v086.md`.

Panorama et lac0.8.4 intégralement conservés :24 cascades, brumes et nuages ; formules de réfraction, intensité/vitesse et masques inchangés. Physique/puissances/cycle du bol0.8.5, règles, sauvegarde, musique, icône et signature préservés. Onze fichiers protégés comparés octet pour octet à la base ; tests WebGL des cinq phases du lac à delta0, sondes terrestres stables. Aucun merge main ni Release définitive.

Source `d32198f6ec148f1277c9689d2566d2e0e7205535` ; binaires `a2e1ab8e4b7e8c01b0ac535dcd53f77599c43731` ; [CI40468288904](https://github.com/greenpower2669/Max-YutNori/actions/runs/40468288904) **réussie**. Version **0.8.6/code15**, identité `fr.fab.maxyutnori`. **92/92 tests unitaires et54/54 parcours navigateur hors ligne**, aucune erreur JavaScript ni requête externe ; WebGL, build/lint Android et signature APK v2 vérifiés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/a2e1ab8e4b7e8c01b0ac535dcd53f77599c43731/temp/Max-YutNori-v0.8.6-debug.apk) —62,500,244 octets ; SHA-256 `fe1e2c3af08a6541246f8dc2076608b98cd8757c63d871aa3025443393936ba5`. Vrai téléchargement HTTP200, ZIP, manifeste binaire/version, quatre PNG et MP3 vérifiés. Certificat extrait de l’APK identique à0.8.5 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Installation par-dessus0.8.5 possible, sans désinstallation ; essai d’installation réel encore humain. **APK uniquement**, aucun nouvel AAB.

**À valider par Fab sur Samsung SM-A576B Android16** : mise à jour réelle ; taille/lisibilité du plateau et des pions pendant approche, recul et retours ; ×2/pinch/prises et vue libre ; vol/rangement des quatre yut ; esthétique des24 cascades/brumes/nuages, FPS et chauffe. Aucun test physique Samsung ni mesure de fluidité matérielle revendiqué.

## Historique — états précédents conservés

# Carte MYN-020 — diagnostic et réalisation

camera-framing.mjs : cadrage géométrique partagé et approche physique. chase-camera.mjs : trajectoire proche/latérale/révélation/suivi, centrage des points réellement utiles. scene.js : application à toutes les vues, ×2 à projection constante, OrbitControls/pinch et retour après vol ; sync réassocie focusPawn et destinations à la sélection courante, y compris automatique. Vue libre : distance normale bornée à1.35×le cadrage proche et limites divisées par le facteur physique. Panorama et physique hors périmètre, fichiers gelés. Plan docs/plan-camera-v086.md.

## Historique — référence précédente conservée

# Point d'entrée actif — MYN-019 / 0.8.5 — 27 octobre 2026

- `physics.mjs` : repère de table préservé, bol physique `TRAY.centerX=1.6` (monde6.6), murs hauts extérieurs épais, CCD et sous-pas1..8 si vitesse>20 ; sinon120Hz. `trayCleared()` examine chaque sommet des quatre convexes sous leur rotation contre le plus haut point du rebord + marge.
- `bowl-cycle.mjs` : ready → flying → fading(.18s) → airborne → hidden ; aucun mouvement forcé en vol, désactivation du bol/socle au franchissement sûr, rangement cohérent avec l'origine déplacée. Chemin de repli pour lancer anormal préservé.
- `throw-power.mjs` : plage .3..1.5, défaut .9, migration `powerVersion=2`. `main.js` raccorde slider/gestes/capteur/auto/IA et sauvegarde existante.
- `camera-framing.mjs` : cadrage de points réels et interrupteur non cumulatif ; `scene.js` applique projection ×2, compensation caméra action et recul préventif lors des vols. `comfort.mjs` conserve le pinch de dessus.
- `index.html`/`style.css` : titre/×2, statut à gauche, équipes1–2 gauche/3–4 droite, colonnes de commandes adaptées à la phase ; zone de choix bornée/défilable, toutes les commandes de lancer conservées. `smoke_ergonomics.mjs` couvre4vues, vrai pinch, action, migration, formats, vols et HUD chargé.
- Panorama et atlas : fichiers 0.8.4 inchangés ; ancienne carte128Kio + carte512Kio, une passe. Référence du lac et cinq phases toujours à delta0.
- Preuves : `docs/revue-v085.md`, `docs/ergonomics-progress.md`, `docs/verification/verify-delivery-v085.py`, `temp/native-delivery-verification-v085.json`.

Source `89ad97d4ed659aab3e03c68289348466bcfdf252` ; binaires `b7355bf77fb9637d325a59cb5edd290e618522b0` ; [CI 40432711889](https://github.com/greenpower2669/Max-YutNori/actions/runs/40432711889) **réussie**. Version **0.8.5/code14**, `fr.fab.maxyutnori`. **89/89 tests unitaires et 50/50 parcours navigateur hors ligne** ; aucune erreur JavaScript ni requête externe. Rendu WebGL : lac inchangé aux cinq phases de référence, sondes terrestres fixes ; panorama 0.8.4 conservé. Build/lint Android et signature APK v2 validés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/b7355bf77fb9637d325a59cb5edd290e618522b0/temp/Max-YutNori-v0.8.5-debug.apk) — 62,499,852 octets ; SHA-256 `578d54da69f41cd0ee7bdcad871bb7ac4bea37a87eeef5c21ea217119b603fe6`. Certificat extrait du vrai APK téléchargé et identique à 0.8.4 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. ZIP, manifeste Android binaire, icône, quatre PNG et musique MP3 vérifiés. **APK uniquement**, aucun nouvel AAB.

**À valider par Fab sur Samsung SM-A576B Android 16** : mise à jour réelle, lisibilité du cadrage et des pions, gestes/pinch/×2/caméra action, bol à droite et retour des quatre yut, puissance et rebonds, esthétique de toutes les 24 cascades/brumes/nuages, berges immobiles et FPS/chauffe. La capture 25678.jpg n'était pas disponible dans ce checkout : la disposition décrite par Fab a guidé le travail, la correspondance visuelle exacte reste humaine. Aucun test physique Samsung ni mesure FPS revendiqué. Aucun merge `main` ni Release définitive.

## Historique — états antérieurs conservés

## MYN-019 — carte de travail 0.8.5

CI initiale40431151100 arrêtée avant Android : le test a détecté le mode automatique masqué en phase de déplacement. Commandes permanentes rétablies et contrôle de visibilité ajouté ; nouveau passage complet à lancer. Aucun nouvel APK livré.

physics.mjs porte le repère du bol, le confinement Rapier et le test des volumes au-dessus du rebord ; bowl-cycle.mjs gère fondu en vol et rangement. throw-power.mjs centralise plage et migration. camera-framing.mjs/scene.js portent cadrage réel et ×2 ; main.js synchronise réglages/DOM et cycle. index.html/style.css portent les informations à gauche et les bandeaux. Murs hauts épaissis vers l’extérieur sans rétrécir la surface ; sous-pas1..8 si vitesse>20, sinon120Hz. Cadrage général vérifié contre la caméra0.8.4 ; marges du vol distinctes de celles du plateau. Fichiers panorama et atlas0.8.4 gelés. Tests et livraison : docs/plan-ergonomics-v085.md.

## Point d'entrée actif — MYN-018 / 0.8.4 (26/10/2026)

- **État** : 0.8.4/code13 livrée sur `feature/native-webgl-v020`, PR brouillon #2 ; [CI 40377936315](https://github.com/greenpower2669/Max-YutNori/actions/runs/40377936315) réussie ; APK/AAB dans `temp/` au commit `a9c79276e64d2216ab7711843ba8778066f47c56`. Aucun merge main.
- **Tiroir animations** : `docs/plan-annotated-effects-v084.md`, `web/src/annotated-zones.mjs` (24 cascades roses, 5 bandes violettes, 7 turquoise), `web/src/living-panorama.js`. Référence images 25663.jpg et 25651.jpg.
- **Tiroir non-régression lac** : `scripts/fixtures/panorama-v083-reference.js`, `scripts/verify_panorama.mjs` ; cinq phases testées, delta pixel nul sur le lac. Ondulation 0.8.3 et anciens embruns à préserver impérativement.
- **Tiroir historique/anomalies** : `debughistorical.md`, `docs/water-only-progress.md`. Distinguer zones masquées et couverture sémantique réelle ; ancien masque d'ellipse centré sur forêt.
- **Travail restant** : `todo.md` : validation Samsung de la totalité des cascades, brumes, vue 360°, berges et FPS/chauffe. Les archives ci-dessous ne sont pas l'état courant.

## Historique — point d'entrée 0.8.3

### Carte archivée : 0.8.3 — MYN-017

Architecture courante : living-panorama.js utilise lakeColor/fallColor sur RGB linéaire ; lac = intérieur A>.98 et matière autorisée. Le prélèvement est contrôlé par le même masque et sa couleur, avec inversion correcte de la composante y dans sourceP. Les offsets de ciel sont retirés, la densité B reste animée. panorama-zones.mjs exclut aussi les cimes du premier plan. Fixture distortion() compare au même temps la matière réelle et un témoin modifiant uniquement sampleImage(uv+offset*strength) en sampleImage(uv), ROI 4×4. verify_panorama.mjs contrôle huit points × cinq phases et l’eau positive ; les références historiques restent documentées mais l’ancien composite n’est plus imposé.

CI [40329703094](https://github.com/greenpower2669/Max-YutNori/actions/runs/40329703094) réussie : 76/76 tests et 45/45 parcours navigateur hors ligne, aucune erreur JS/requête externe, APK/AAB et lint Android réussis. Pixels : huit sondes de géométrie à cinq phases, sans déformation ; eau avec réfraction positive, brume/ciel/chutes animés, mode réduit fixe. Régression de l’arbre 720/420 observée rouge puis verte. Revue indépendante effectuée. Source `9adc09709dead8bfd5695b39eca01c2b8a0b63a2`, binaires `84d49c1c216002e3913b540feb1bcefaa15808c1`. Vrais téléchargements HTTP 200, ZIP/SHA-256, versions, quatre PNG et MP3 vérifiés ; certificats extraits des APK v2/AAB identiques à 0.8.2 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,495,080 octets ; SHA-256 `6a33dad7d6e8e5fa2a1894a5b6b2412b920282afea93315320289547f1da80f3`.
AAB : 62,005,457 octets ; SHA-256 `ede3d29837de081081f7e367d8d4532d6151e76076f12e394eb0a7dd615c4ee2`.

Installation en mise à jour de 0.8.2 sans désinstallation. Les sondes automatiques ne prouvent pas une segmentation sémantique exhaustive de chaque pixel ; vérifier les autres berges/cimes et la fluidité sur Samsung SM-A576B Android 16. Aucun essai matériel/FPS revendiqué. Aucun merge main ni Release définitive.

## Historique — états antérieurs conservés

## MYN-017 — déplacement UV et prélèvement aux berges

Correction locale : lakeColor/fallColor sur RGB linéaire ; A>.98 pour le lac au pixel courant et au pixel prélevé, cimes du premier plan exclues. offsets de ciel retirés, densité conservée ; déplacement de chute distinct de ses mousse/embruns. Fixture distortion() compare le même temps avec/sans seul prélèvement UV déplacé, ROI 4×4.

living-panorama.js calcule des offsets eau/chutes/ciel puis prélève l’image déplacée. panorama-zones.mjs fournit un masque de lac approché ; un contrôle limité au masque d’arrivée ne suffit pas à garantir que le pixel prélevé vient aussi de l’eau. La QA doit isoler le déplacement UV au même temps, indépendamment des changements de brume/lumière.

## Livraison vérifiée 0.8.2 — MYN-016

Architecture actuelle MYN-016 : panorama-zones.mjs → panoramaMasks(u,v), contours statiques de vallées/ciel/eau, marges d’îlots et fondu avant les chutes ; low-mist.mjs → createLowMistTexture(), R bruit et G/B/A masques, 256×128 préparé une fois ; living-panorama.js → fallMask conserve la distance minimale sans répéter length, eau historique conservée dans les chutes et mix progressif à l’extérieur, deux densités partagées par brume/ciel. QA : panorama-v081-reference.js et panorama-v081-noise.mjs figent 0.8.1 ; compareReference utilise 16×16 pour les cœurs et 4×4 sans brume pour isoler le raccord d’eau. verify-delivery-v082.py contrôle les vrais binaires et leurs preuves.

CI [40320155787](https://github.com/greenpower2669/Max-YutNori/actions/runs/40320155787) réussie : 76/76 tests unitaires et 45/45 parcours navigateur hors ligne, aucune erreur JS/requête externe, build APK/AAB et lint Android réussis. Pixels réels : 14 sondes positives/négatives pour les régions, six cœurs comparés à la référence 0.8.1 à deux temps, raccord de rive vérifié et mode réduit fixe. Revue indépendante traitée : raccord d’eau corrigé et testé rouge→vert, métadonnée fsevents rétablie. Source `04c4cb053bc25f49b0a22c93cb7003fbdbb0b70d`, binaires `3756c18859faec9da5e37e92239f77310d3aba4e`. Téléchargements HTTP 200, intégrité ZIP/SHA-256, versions, quatre PNG et MP3 vérifiés ; certificats extraits des vrais APK v2/AAB identiques à 0.8.1 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,494,932 octets ; SHA-256 `91dec0a4e7123fea546daab73d6f42e2c3c14136808dea2f927185d12758e6e1`.
AAB : 62,005,342 octets ; SHA-256 `9b4a52fbdceabef1809ce96523346c39a4139ab852054a996698d8442d899f0d`.

Mise à jour de 0.8.1 sans désinstallation. Fidélité esthétique finale et fluidité/coût GPU sur Samsung SM-A576B Android 16 restent à valider ; aucun FPS matériel revendiqué. Aucun merge main ni Release définitive.

## Historique — états antérieurs conservés

## Carte MYN-016 — travail en cours


MYN-016 : scripts/fixtures/panorama-v081-{reference.js,noise.mjs} figent les sources 0.8.1 seulement pour QA ; verifier compare deux temps/six cœurs. 14 sondes isolent séparément G/B/A ; le diagnostic des masques est exporté. La carte statique atténue la brume avant les régions de chutes pour éviter une découpe visible.

web/src/panorama-zones.mjs (à créer) : contours en coordonnées du panorama original ; low-mist.mjs : bruit R et masques G/B/A brume/ciel/eau préparés une fois ; living-panorama.js : utilisation des masques, six régions des chutes préservées par calcul de référence. Plan docs/plan-panorama-zones-v082.md.

## Livraison vérifiée 0.8.1 — MYN-015

CI [40288471190](https://github.com/greenpower2669/Max-YutNori/actions/runs/40288471190) réussie : 73/73 tests unitaires et 45/45 parcours navigateur hors ligne, zéro erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Pixels réels : nappes visibles/mobiles en qualité normale/légère, six cœurs de cascades identiques avec/sans nouvelle couche, un dessin et 64 Kio, mode réduit fixe. Revue indépendante favorable. Source `adf0c9f75d914016cae9b2ba3aedc6662f3fd78c`, binaires `fa1871f945b0c093f7580ce3c761078b836352ec`. Vrais téléchargements HTTP 200, intégrité ZIP/SHA-256, identité/version/icône, quatre PNG et MP3 vérifiés ; certificats extraits des APK v2/AAB identiques à 0.8.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,492,800 octets ; SHA-256 `999b4a8ffe57e62161be73083a28f0d973461b6077be870fd610f177253cade6`.
AAB : 62,003,366 octets ; SHA-256 `ed482e10893272d28e2ebf8b22e6a7ade4a09bfc1e1319d06785a45b6501fd2e`.

Mise à jour de 0.8.0 sans désinstallation. Le coût GPU et le confort visuel réels sur Samsung SM-A576B Android 16 restent à valider ; aucun FPS matériel revendiqué. Au plus trois lectures de texture supplémentaires par fragment concerné. Aucun merge main ni Release définitive.

## Historique — états antérieurs conservés

## Carte MYN-015 — 0.8.1 en cours
low-mist.mjs prépare une densité/masque périodiques ; living-panorama.js les défile en une passe existante, dans les vallées hors cascades. Vérification réelle via fixture panorama et tests de texture/lifecycle ; CI et vérificateur de livraison 0.8.1 à produire.

## Livraison vérifiée 0.8.0 — MYN-014

CI [40259390198](https://github.com/greenpower2669/Max-YutNori/actions/runs/40259390198) réussie : 71/71 tests unitaires, 45/45 parcours navigateur hors ligne, zéro erreur JS/requête externe ; cinq zones du panorama vérifiées sur leurs pixels réels et mode réduit identique. Compilation APK/AAB et lint Android réussis. Source `7ab9f8761c56bc899242a234b24a406e0e17d909`, binaires `79ce9005ee4556c1d9c0d8cc5b0c65073e124fb3`. Vrais téléchargements HTTP 200, intégrité ZIP/SHA-256, identité/version/icône/PNG et MP3 vérifiés. Certificats extraits des vrais APK v2/AAB : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identiques à 0.7.0.

APK : 62,491,892 octets ; SHA-256 `06d8a8dc4b790f47e7d0f68d67413f6a262b5b6a0f2eaabaa8502743c803bdc2`.
AAB : 62,002,566 octets ; SHA-256 `2a8e3c8831926acb01d0c58f53de78cd9a8ce51dc17659a378a2637a120b4b45`.

Installation en mise à jour de 0.7.0 sans désinstallation. APK paysage, portrait vérifié pour le Web. Confort tactile, intensité esthétique, performance et capteur restent à valider sur Samsung SM-A576B Android 16. Aucun essai physique revendiqué. Aucun merge main ni Release définitive.

## Harnais CI MYN-D032
smoke_native/ambience/visibility : les attentes dépendant de la fin de lancer admettent120s murales pour atteindre les12s simulées sous rendu logiciel lent. Contraintes physique, faces et état inchangées.

## Carte réalisée MYN-014 — 0.8.0/code9, CI attendue
- index.html : select Vue unique en header avant musique ; option courante masquée distincte des quatre commandes. main.setView synchronise le libellé après commandes et transitions automatiques ; Plateau reste réexécutable pendant un suivi.
- main.fit : mesure header/controls/notice/fiches avec ResizeObserver ; insets latéraux pour les fiches en paysage, marge supérieure incluant les fiches en portrait. scene.resize utilise la même projection décalée pour rendu/project/raycast.
- style.css : transparence renforcée, header56px en paysage court, contrôles compacts, grilles équipes1–2 gauche/3–4 droite (2 équipes réparties des deux côtés), mention active et lueur bicolore synchronisée à teamPulse.
- scene.pieces : corps élargi horizontalement, symbole plus lisible, deux anneaux actifs team/accent ; pointage écran28px, hauteur/piles/gestes inchangés. teams.mjs ajoute accent contrasté.
- living-panorama.js : filtrage linéaire sans mipmaps sur fond, wrap horizontal ; masques recalés, rides/écoulement/brume/nuages/lampes/embruns localisés. Le PNG et le PMREM d'éclairage sont préservés.
- fetch_music.py : MP3 Arisongs épinglé taille/SHA, écriture atomique ; CI le conserve dans Git et l'embarque. GameAudio réutilise son unique Audio en boucle ; MainActivity sert MP3 avec MIME et Range.
- verify_panorama.mjs + fixture isolée : rend le shader réel à0/3s et compare les pixels de cinq zones ; mode réduit strictement fixe. smoke_visibility : interface, caméra automatique, réserves3formats, musique2boucles,2équipes et rappel natif Home/Enter.
- Workflow Android0.8.0/code9 ; identité/icône/clé de test conservées, comparaison certificat0.7.0. verify-delivery-v080.py contrôlera les vrais téléchargements et certificats.

## Intervention MYN-014 — 0.8.0 en cours
UI/cadrage : index.html, style.css, main.js, scene.js. Pulsation/zoom : comfort.mjs ; panorama : living-panorama.js. Audio : audio.js, récupération épinglée en CI, MainActivity MIME/Range ; tests et vérificateurs de paquet à adapter. Plan docs/plan-visibility-v080.md.

## Carte courante 0.7.0 — 26/10/2026

- board-layout.mjs : PAWN_TABLE_Y=-.31, PAWN_BOARD_Y=.126, PAWN_STACK=.21 ; reservePosition/pawnPosition/buildSelection alignent supports et destinations.
- pawn-motion.mjs : advancePawn monte avant translation puis descend ; stackOffsets mémorise les espacements d’origine. scene.sync garde travelOffset, frame applique dégagement et lévitation de sélection ; les piles restent espacées à chaque frame.
- pawn-input.js : propriété des deux doigts, zoom sans lâcher, geste de fond autorisé en vue verticale ; finish distingue tap et interruption. scene.end annule lifted après glissement/pointercancel, retour sans consommation de résultat.
- comfort.mjs : TopView distance/zoom bornés indépendants ; teamPulse cycle doux 2.8s, fixe en mode réduit. scene.frame utilise la même phase pour halos et émissions ; main la partage au HUD.
- main.fit : ResizeObserver header/controls ; CSS de scène plein écran, safeInsets inclut le bas réel des vues +8px. scene.resize étend une projection commune au dessin et aux raycasts, sans laisser les réserves sous les boutons au cadrage initial.
- living-panorama.js : sphère à l’infini, shader avec masques UV d’eau/chutes/brume/nuages/lampes ; horloge par dt, force réduite en qualité faible, effets figés en pause/réduit. Image et éclairage PMREM originaux conservés.
- fresco.js : FrescoViewer, zoom 1–4, panoramique, deux doigts et boutons ; dialogue imbriqué conserve la pause des règles. web/public/art/rules-fresco.png est l’original docs/references/rules-fresco-25492.png.
- scripts/smoke_comfort.mjs : sept scénarios ajoutés aux 34 historiques ; vrai tactile CDP, annulation autonome, pile directe échantillonnée à chaque frame, trois formats. Tests unitaires de support/mouvement/input/zoom/pulsation.
- Android 0.7.0/code8 ; CI .github/workflows/android.yml vérifie aussi certificat précédent 0.6.0. Preuve téléchargements : temp/native-delivery-verification-v070.json. Revue docs/revue-v070.md, passation docs/passation-2026-10-26.md.

CI [40250007382](https://github.com/greenpower2669/Max-YutNori/actions/runs/40250007382) réussie : 71/71 tests unitaires, 41/41 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `378f987875774d90bca29b5b5acbdf2a1588f962`, binaires/preuves `a034f9c722f402dd0bfd3f0c1d9c593f976bbc6f`. Téléchargements HTTP 200, intégrité ZIP et SHA-256 contrôlés. Certificats extraits des vrais APK v2/AAB : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identiques à 0.6.0. Les quatre PNG embarqués et la musique originale sont conservés octet pour octet.

## Historique — états antérieurs conservés

## Marge des commandes 0.7.0
main.fit inclut aussi le bas réel de #views + 8px dans safeInsets.top ; réserve projetée hors boutons en vue verticale. Tests navigateur sur trois formats, même matrice pour dessin et pointage.

## Carte 0.7.0 en cours
pawn-motion.mjs advancePawn/stackOffsets : hauteur de passage et offsets de groupe ; comfort.mjs : TopView/teamPulse ; living-panorama.js : sphère shader et horloge ; fresco.js : zoom/pan. Scene partage projection étendue rendu/raycast ; PawnInput possède aussi les gestes du fond en vue verticale. Main renseigne les marges par ResizeObserver et la pulsation HUD.

## Carte de reprise MYN-013 — 25/10/2026, sans modification produit
Prompt complet : docs/passation-2026-10-25.md. Fresque originale/provenance : docs/references/rules-fresco-25492.png et README.md voisin.
- Hauteurs : board-layout.mjs reservePosition/pawnPosition/buildSelection → scene.js maillages/labels/activeGlow/onPlane/frame → halos.js ; pawn-input.js et chase-camera.mjs à préserver. Y réserve=.15 identique plateau malgré support plus bas ; ne pas corriger sans trajectoire de levage/sélection/retour.
- HUD : main.js fit() exclut actuellement header/controls de la surface du stage ; la semi-transparence exige une scène derrière et le maintien du cadrage/tactile.
- Vue verticale : scene.js view/focus/frame/OrbitControls ; ajouter mode/zoom persistants sans écrasement par chase. Deux doigts avec et sans pion tenu.
- Panorama : scene.background equirectangulaire et environnement PMREM, actuellement statiques ; prochains effets localisés à concevoir avec masques/coût/pause/qualité réduite.
- Règles : intégrer plus tard la fresque et l'agrandissement, garder explication Do/Back-do avec bâton marqué.
Clarification résolue : la table flottante est voulue. Aucun code de MYN-013 écrit.

## Référence active 0.6.0
Plan docs/plan-ambience-v060.md ; revue docs/revue-v060.md. BowlCycle orchestre présentation et restitution des corps ; Physics garde les vrais résultats et collisions ; Main gère les transitions et annule le retour caméra périmé. Scene rend l’équipe active et charge les PNG locaux ; engravingMaps et engravedMaterial dérivent les cartes de matière. Smoke_ambience ajoute 7 scénarios aux 27 historiques.

CI [40168413538](https://github.com/greenpower2669/Max-YutNori/actions/runs/40168413538) réussie : 62/62 tests unitaires, 34/34 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `a5d12ed492e0ad0656184cb68ab977280ef15c48`, binaires/preuves `03b939304c60a7923f99d560c906015cd6782614`. Téléchargements HTTP 200, intégrité ZIP et SHA-256 contrôlés ; certificat APK v2 et certificat AAB extraits des vrais fichiers téléchargés identiques à 0.5.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Les trois PNG embarqués sont identiques aux originaux fournis par Fab.

## Historique — états antérieurs

## Retour invisible 0.6.0
BowlCycle termine hiding par setTrayEnabled(false) puis dockTray : neutralise un retour interrompu, même sans relance. Test unitaire dédié + ancien scénario UI auto depuis un bol saisi.

## Revue 0.6.0 et régressions
BowlCycle.startStow calcule outside et clearance ; update stowing effectue dégagement/montée/traversée/descente. Main.playMove annule returnToBoard quand il demande le rangement. Tests/bowl-cycle.test.mjs vérifie proche/loin et sortie ; smoke_ambience.mjs joue un résultat physique déterministe immédiatement pour couvrir le minuteur caméra. docs/revue-v060.md garde les preuves et limites de revue.

## Interfaces réalisées 0.6.0
BowlCycle(physics) : settle/requestStow/update/reset/restoreResult, ready/phase/opacity. Physics : holdSticks/placeSticks/releaseSticks/setTrayEnabled/dockTray, garde de lancer tant que tenus/invisibles. main.js orchestre résultat→cycle et attend ready pour lancer/victoire ; pause ne fait aucun update. Scene charge art via loadArtwork, anneaux activeGlow, opacité et recompilation shader quand transparence change. engravingMaps -> buffers RGBA height/normal/roughness ; engravedMaterial crée textures Canvas et displacement ; couleur PNG d’origine. Smoke_ambience : assets/équipe/transitions/pause/reset/capteur/victoire.

## Travail 0.6.0 — 25/10/2026
Plan docs/plan-ambience-v060.md. tray-motion.mjs : signe latéral ; nouveau bowl-cycle.mjs : cycle résultat/disparition/rangement séparé des règles. physics.mjs : immobilisation et restitution des corps, collisions du bol/socle cohérentes avec visibilité. main.js : orchestration et verrouillage, scene.js : opacité/lumière/chargement art ; engraving.mjs et materials.js : cartes de matériau depuis dessin original. web/public/art : trois PNG fournis par Fab, sans changement. Tests ciblés puis smoke complet et workflow Android.

## Référence active 0.5.0
Plan docs/plan-action-v050.md ; suivi docs/action-progress.md ; revue docs/revue-v050.md. rules.mjs/teams.mjs : compteurs laps et migration v4. chase-camera.mjs : séquence/cadrage/zoom/gain. pawn-input.js : propriété des doigts. scene.js : projections et brouillard adapté. main.js : sauvegarde et actions validées. scripts/smoke_action.mjs : sept nouveaux scénarios intégrés au smoke complet.

CI [40078589575](https://github.com/greenpower2669/Max-YutNori/actions/runs/40078589575) réussie : 51/51 tests unitaires, 27/27 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `4a28e1c84ef76f628a85f12dae0b7f2c467d9bfe`, binaires/preuves `c37c719642b5e8b6bb14c40fb2a5ef4e054061f9`. Téléchargements HTTP 200, ZIP et SHA-256 contrôlés ; certificat APK v2 et certificat AAB extraits des fichiers téléchargés identiques à 0.4.1 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

## Historique des étapes précédentes

## Point de vérification 0.5.0 — 23/10/2026
0.5.0 : chase-camera.mjs (séquence, cadrage, zoom, gain de suivi), pawn-input.js (propriété des pointeurs), scene.js (projection et brouillard adapté), rules.mjs/teams.mjs (laps), main.js (v4/UI/annulation). Tests ciblés scripts/smoke_action.mjs importés dans smoke_native.mjs. Revue docs/revue-v050.md.

## 23/10/2026 — Réalisation autorisée 0.5.0
Réalisation 0.5.0 : rules.mjs/teams.mjs, nouveaux chase-camera.mjs/pawn-input.js, scene.js/main.js, physics.mjs. Tests sous tests/ et scripts/smoke_native.mjs.
Plan docs/plan-action-v050.md ; suivi docs/action-progress.md.

# Carte active — 0.4.1 / MYN-008 livré pour test
- Audit MYN-010 / MYN-D018 : rules.mjs destinations/pass/move et teams.mjs ne portent aucun compteur de tours ; référence FabYut, commit 81ba459b39306b4f0c36ca69d8483d7bc3d552a8, yutFab/Assets/fabchoc.cs releaseGrab/Turnleft et Globals.cs SaveTurns/istrigable. Pending et sélection d’un résultat : main.js render/selectedResult. Toucher des pions : scene.js pointerup + main.js onPick ; déplacement >10 px ignoré pour les pions. Espacement réserve : board-layout.mjs reservePosition. Hauteur auto : main.js launch(settings.power), physics.mjs throwSticks. Audit sans modification produit.
- ordres-de-mission.md : demandes de Fab ; MYN-009 (décor) reste différé.
- todo.md et brain.md : état, livraison et validation Samsung attendue.
- web/src/teams.mjs : matières/accents ; scene.js : pions, bac et capture tactile.
- web/src/physics.mjs : géométrie partagée, dégagement à chaque pas, levage, retour en attente pendant le vol et validité du résultat élevé.
- web/src/main.js : priorité doigt/capteur et retour hors phase de saisie ; pause/vol conservés.
- web/src/rules.mjs, team-form.js : règles, participants et migration ; halos.js : sélection/destinations.
- web/src/audio.js, motion.mjs, tray-motion.mjs : boucle/effets et capteurs ; MotionSensors.java/MainActivity.java : pont Android.
- tests/ : 38 tests ; scripts/smoke_native.mjs : 20 scénarios navigateur hors ligne.
- docs/revue-v041.md et debughistorical.md MYN-D013/14/15/16/17 : diagnostics et corrections vérifiées.
- .github/workflows/android.yml : compilation/lint, APK/AAB, signature comparée à 0.4.0 ; temp/native-* : preuves du build indiqué dans native-build-info.txt.
- temp/Max-YutNori-v0.4.1-debug.apk et .aab ; native-download-verification.json : contrôles des vrais téléchargements.
- Branche feature/native-webgl-v020, PR brouillon #2 ; aucun merge main ni Release.

## Historique
---

## Carte historique
# Max-YutNori — Carte technique

## Références
- `FabYut` : projet Unity original, commit inspecté `81ba459b39306b4f0c36ca69d8483d7bc3d552a8`, aucune écriture.
- `yutFab/Assets/Globals.cs` contient la logique Unity ; scènes, ressources et autres scripts dans Assets.
- Unity Play : jeu `f7ab238a-cec3-44ad-a517-7a3c1e00faa3`, export publié `4d547ac9-eecc-45b5-802e-a5b9c81ca3e5`.

## Architecture implémentée
- `android/` : projet Gradle, un module `app`, Java 17.
- `MainActivity.java` : WebView, cycle de vie, confirmation de sortie, interception HTTPS locale stricte, journal de diagnostic borné.
- `android/app/src/main/assets/game/index.html` : démarrage Unity, progression, erreurs lisibles, reprise audio sur interaction.
- `android/app/src/main/assets/game/Build/` : fichiers publiés figés, Brotli décodé sans altération du contenu.
- `upstream-web-build.json` : provenance, tailles et SHA-256 des quatre fichiers de l'export.
- `.github/workflows/android.yml` : vérifications, compilation APK, copie vers `temp/` dans la même branche ; aucun merge et aucune Release définitive.
- `scripts/verify_web_build.py` : intégrité et complétude de l'export embarqué.
- `scripts/fetch_web_build.mjs` : restauration de l'export figé via sa page publique ; URLs signées temporaires jamais enregistrées ; contrôle SHA-256 obligatoire avant toute écriture.
- `scripts/smoke_web.mjs` : vrai démarrage Unity sous Chrome avec tactile émulé et toutes les requêtes externes bloquées ; contrôle des fichiers absents et erreurs JS, capture PNG.
- `scripts/test_offline_restore.mjs` : régression du restaurateur, quatre fichiers locaux présents et réseau amont interdit.

## Contrôles techniques
Java 17 / Gradle 8.13 / AGP 8.13.0 / compile et target SDK 36 / minimum SDK 26. Aucune dépendance AndroidX ni bibliothèque native embarquée. Le runtime natif est le WebView système.
Le bouton Retour utilise OnBackInvokedDispatcher sur Android 13+ ; dialogue avec copie des 100 dernières lignes de diagnostic, sans envoi automatique. Insets système/caméra respectés, barres escamotables.
Signature de test conservée dans le cache CI `max-yutnori-debug-key-v1`. Une perte du cache peut nécessiter une réinstallation ; aucune clé privée n'est committée. La signature de production reste hors périmètre.
Le premier commit distant contient le code et le manifeste d'empreintes. CI restaure les quatre binaires, les teste et les commite avec l'APK ; les builds suivants retrouvent ainsi les fichiers figés directement dans Git.

## Livraison 0.1.0
- Source compilée : `3042fed5ca7a9a0fa551d5330ef1a5739ef5f9cb`.
- Commit CI exposant fichiers originaux, APK et preuves : `4b8ee92f83e65fba8ad7da437bb9b8fa3a9b0366`.
- APK : `temp/Max-YutNori-v0.1.0-debug.apk` ; SHA-256 `ebcde4dce56996c8771ebe5b07313cd6754464bc984257a5b64be46c1c598b5d`.
- Le code natif gère Android 13+ avec OnBackInvokedDispatcher ; seule la méthode de secours API 26-32 porte une suppression lint ciblée et justifiée.

## Flux et limites
Lancement Android → page locale → loader Unity → framework/WASM/data locaux → scène du jeu. Le contenu local est servi sous `https://appassets.androidplatform.net/game/` avec MIME explicites. Les chemins hors périmètre et les requêtes réseau externes sont refusés. Aucune interface JavaScript vers Java.

## Carte audio inspectée — MYN-D005
- Conteneur `Build/game.data` au SHA-256 d'origine inchangé : `b406d6d1ab60b395a69ecc20d6b4e4f0d550b598e31c6aeb9f0eb738dc2da75f`.
- `data.unity3d` : `sharedassets0.assets`, AudioClip path ID 161, `ARIRinstr`, stéréo 44 100 Hz, durée 239,3279877 s ; `level0`, AudioSource path ID 1942 sur `Audio Source`, `Loop=false`, `m_PlayOnAwake=true`, activé, volume 1.
- Lecture effectuée avec UnityPy 1.25.4, sans sauvegarde/réécriture du binaire.
- `Build/framework.js` : `_JS_Sound_SetLoop` délègue au canal Web Audio ; la capacité de boucler est présente. `_JS_Sound_Init` reprend le contexte audio sur touchstart/mousedown.
- `launcher.js` ne contient pas de correction de boucle ; l'application charge des assets locaux et n'a pas de mécanisme de mise à jour du jeu installé.

## Refonte v0.2.0 en cours
web/src/rules.mjs : règles pures ; tests/rules.test.mjs : cas limites et parties IA ; docs/refonte-webgl.md : contrat et suivi. Branche feature/native-webgl-v020.

- web/src/physics.mjs : Rapier WASM et lecture des faces.
- web/src/scene.js : rendu procédural Three.js.
- web/src/main.js : UI, sauvegarde, pause et IA.
- web/src/audio.js : musique originale en boucle et sons synthétisés.
- scripts/extract_music.py : extraction vérifiée du morceau original, indépendant de Unity.
- scripts/smoke_native.mjs : démarrage hors ligne, lancer, sauvegarde, victoire, boucle et formats téléphone.
- android/app : WebView locale, nouvelle source assets web-dist et prise en charge des requêtes audio Range.

Les preuves de la refonte sont dans `temp/native-*`. Elles se rapportent au commit indiqué par `temp/native-build-info.txt`. Le premier APK 0.2.0 est remplacé après les corrections de la relecture.

## Évolution 0.3.0
web/src/teams.mjs : palette, participants, activePlayer et construction équipes. rules.mjs : rotation modulo nombre équipes, captures et IA multi-adversaires, validation/migration v2→v3. tests/teams.test.mjs : preuves moteur et migration.

0.3.0 : team-form.js construit les participants ; board-layout.mjs centralise positions et sélection ; halos.js anime les anneaux ; impact.mjs borne les collisions sonores ; motion.mjs filtre le geste et impose repos/réarmement. MotionSensors.java écoute les capteurs sur le thread UI, retire la gravité si nécessaire et remappe le paysage. MainActivity expose MaxYutMotion au seul document local ; main.js pilote écoute selon tour/pause. settings-v2 conservé avec ajouts fxVolume/motion/sensitivity ; parties v3 avec fallback migration v2. Smoke couvre configurations, halos, migrations, faux capteur de test, volumes, formats.

MYN-007 livré pour test : docs/plan-bac-v040.md et docs/bac-progress.md ; revue dans docs/revue-v040.md.

0.4.0 : physics.mjs expose TABLE, tray, setTrayPose, prepare et les lancers ; tray-motion.mjs calibre la gravité selon la tenue et borne l'inclinaison ; MotionSensors.java émet onNativeTilt et onNativeMotion, avec accélération linéaire préférée et fallback filtré. main.js conserve les contrôles d'éligibilité/pause. materials.js génère trois cartes bois locales ; yut-geometry.js affecte la face plate au matériau laqué ; throw-view.mjs valide les faces/résultats du résumé. Stockages : réglages settings-v3 (ancien v2 conservé), dernier lancer last-throw-v1 ; partie native-v3 inchangée. HUD en header, hauteur mesurée pour réserver la zone 3D ; diagnostic readonly expose pose du bac et positions projetées des yut.

0.4.0 : `physics.reset()` annule le vol lors de `newGame`. Preuves et deux corrections de revue dans `docs/revue-v040.md`, régressions dans `tests/table.test.mjs` et `scripts/smoke_native.mjs`.

Livraison 0.4.0 : temp/Max-YutNori-v0.4.0-debug.apk et .aab ; preuves CI temp/native-build-info.txt, native-SHA256SUMS, native-package.json, native-smoke.json, native-apk-verification.txt, native-aab-verification.txt et téléchargement comparé native-download-verification.json. CI 39724824806.

0.4.1 : SUPPORT et TRAY centralisent les dimensions ; advanceTray calcule la hauteur de sécurité à chaque pas contre table et socle. GameScene capture le doigt sur le bac en vue Bol, transmet begin/move/end et libère à pointercancel, changement de vue ou pause. main.js utilise trayEligible pour préparer même sans capteur ; motionEligible exclut trayGrab. TEAM_STYLES distingue color (matière), css/glow (accents lisibles), finish et ink.
<!-- END ORIGINAL brainmap.md -->

## Archive 2026-10-27 / debughistorical.md

SHA-256 UTF-8 : `cdd9f93a0b92090827f09505582d7f64110ded7ed2f7edd2f887373f79b30703`

<!-- BEGIN ORIGINAL debughistorical.md -->
# MYN-D043 — correctif confirmé et 0.8.8 livrée — 27 octobre 2026

Un PNG incomplet détecté dans le commit local initial a été restauré avant publication ; le build précédent utilisait une copie complète, révélant une lacune des seules captures. Garde-fou CRC/IEND/SHA observé RED puis GREEN ; générateur atomique et nouveau blob Git intègre. Cause précise de la troncature initiale non attribuée sans preuve. Suite96/96 après correctif, CI complète puis pixels du vrai APK conformes. Aucun APK défectueux livré. Revue : aucun autre Important/Critical, aucun Minor restant.

Le visuel jade/or fourni par Fab est intégré dans le jeu avec emblème carré de 44 px et nom texte lisible, ainsi que dans le favicon et l’icône Android. Calque adaptatif 108 dp / visuel 56 dp et cinq densités classiques ; source JPEG conservée intacte, dérivés Lanczos uniquement. Le bandeau compact garde ses commandes accessibles et sa hauteur paysage.

Source `08abcaed4940511bdbd73cb3a863c2172209e93a` ; binaires `99543419bca0b55a9b12e3faeb98fa8833aecf50` ; [CI 40543163343](https://github.com/greenpower2669/Max-YutNori/actions/runs/40543163343) **réussie**. Version **0.8.8/code17**, identité `fr.fab.maxyutnori`. **96/96 tests unitaires et 56/56 parcours navigateur hors ligne**, aucune erreur JavaScript/requête externe. WebGL lac aux cinq phases à delta nul, compilation/lint Android et signature APK v2 réussis.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/99543419bca0b55a9b12e3faeb98fa8833aecf50/temp/Max-YutNori-v0.8.8-debug.apk) — 62,243,800 octets ; SHA-256 `1b3ba30fccf41a07fb5b034946c79cd306ce488437436ad87cece09befb9e07e`. Vrai téléchargement HTTP200, intégrité ZIP, manifeste/version/package vérifiés. **Pixels des sept dérivés logo/icônes identiques aux sources approuvées après compilation**, ressources adaptatives/legacy et références icon/roundIcon vérifiées. Certificat extrait du vrai APK : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identique à 0.8.7. Mise à jour sans désinstallation possible ; essai réel encore humain. APK uniquement, aucun nouvel AAB.

Treize fichiers caméra/physique/panorama et décor/règles conservés octet pour octet à la base ce531ea. Cadrage rapproché et redressé MYN-021, fond/rebord visible, ×2 physique et pincement préservés. Lac 0.8.4 : aucune modification d’ondulation, réfraction, vitesse/intensité, masque ou rendu. Les 24 cascades, brumes et nuages, les règles, sauvegardes et musique restent préservés. Aucun merge main/Release définitive.

**À valider par Fab sur Samsung SM-A576B Android16** : installation réelle, icône du lanceur/cache et masques OEM animés, lisibilité du logo, confort tactile et capteurs/son, rotation avec noms longs pendant un suivi, autres dimensions et grossissement système, esthétique/FPS/chauffe. Captures et tests automatiques ne prouvent pas ces validations matérielles. Le « Parfait » antérieur n’est pas une mesure exhaustive.

## Historique — états précédents conservés

## Précision de format des images historiques — MYN-022

Les trois assets historiques nommés moonlit-panorama.png, rules-fresco.png et engraved-table.png sont réellement des JPEG. Ils restent byte-identiques ; seul le nouveau logo est un PNG. Le contrôle de structure PNG ajouté était trop large : prévol ZIP constitué des vrais assets observé RED (Invalid PNG signature), puis GREEN en limitant cette exigence au nouveau logo. Contrôle byte-identique des anciens assets maintenu. Aucun changement du produit ; CI relancée sur ce correctif du vérificateur.

# MYN-D043 — PNG incomplet détecté avant livraison, correctif vérifié

Revue : PNG Web tronqué dans le commit initial (65 853 au lieu de 132 938 octets), build précédent complet. Cause temporelle exacte non établie. Générateur passé à sérialisation validée + remplacement atomique ; source/dérivé complet restaurés. `verify_branding.py` a reproduit RED puis GREEN, sept hashes/dimensions/PNG complets verts, suite96/96 après correction. La CI contrôle l’intégrité avant compilation et l’APK contrôlera les pixels. Revue et limites : `docs/revue-v088.md`. Aucun APK défectueux livré.

## Vérifications locales MYN-022

96/96 tests unitaires, scénario logo réel rouge→vert aux trois dimensions, contrôle WebGL (lac delta nul aux cinq phases) et HUD avec noms longs/1,6,12 résultats réussis. Icônes rondes/arrondies/carrées inspectées. Revue et CI Android encore en cours ; aucun APK 0.8.8 déclaré livré. Vérification indépendante du futur APK : `docs/verification/verify-delivery-v088.py`, pixels des sept dérivés comparés après compilation, références icon/roundIcon, version et certificat extraits du binaire.

# MYN-022 — Intégration du logo en vérification — 27/10/2026

Autorisation de Fab : « On, code ». Contrôle réel du nouveau logo observé rouge sur la 0.8.7 (ancien titre encore chargé), avant le remplacement. Source JPEG originale et proportions conservées ; dérivés techniques séparés, plus de supposition de transparence. Icône adaptative et PNG classiques remplacent le vecteur actif. 13 fichiers protégés identiques à la base.

Les contrôles et la CI 0.8.8 restent à terminer ; les 96/55 de la livraison précédente ne constituent pas une validation de cette intégration. Dernier APK livré : 0.8.7/code16.

## Préparation et historique conservés

# MYN-022 — Préparation du changement de logo, sans bug produit déclaré — 27 octobre 2026

Fab fournit `25701.png` et demande son utilisation dans le jeu et comme icône, avec passation et mémoires à jour. Aucun nouveau dysfonctionnement n’est signalé. Son « Parfait » apprécie le résultat courant ; il ne prouve ni une validation matérielle exhaustive ni des mesures de fluidité.

**Constats vérifiés** : fichier réellement JPEG RGB opaque 1536 × 1536 (597 891 octets), malgré l’extension PNG de l’envoi. Source conservée sans réencodage sous `docs/assets/25701-logo-original.jpg` ; SHA-256 `afb8df0a1d8540ddac46ba8bbda8ae5208f4d4051a86c5029d508af15b3d7096`, blob Git `aba2f08082fce7a5861398372f2af03222b034ed`. Prévenir les confusions de format/transparence ; garder cet original et créer les dérivés séparément.

Autres dépendances observées, pas des bugs prouvés : logo actif horizontal 2172 × 724, styles responsive successifs, test `smoke_ambience.mjs` figé à 2172 px ; icône Android vectorielle via `@drawable/ic_launcher`. Une simple copie renommée ne constitue pas une intégration testée. Adapter ces points lors de la réalisation et vérifier taille réelle, masques et fichier APK.

**Ce tour est documentaire** : aucun correctif produit, test de jeu rejoué, build Android ou nouvel APK annoncé. Les preuves 96/55 appartiennent à la 0.8.7. Mise à jour des cinq mémoires et `docs/passation-myn022-logo.md`, source ajoutée hors assets actifs ; missions précédentes intégralement conservées.

## Historique des diagnostics et validations conservé

# MYN-D042 — fond du plateau dégagé en 0.8.7 — 27 octobre 2026

Cause vérifiée : la caméra 0.8.6 ajustait seulement pion/destinations et visait leur étendue vers la réserve ; le bord éloigné du plateau ne participait pas au calcul. Régression réelle navigateur RED : rebord projeté à x741,7 hors limite703,8. GREEN après redressement, cible recentrée et cadrage minimal du plateau. Le suivi stabilisé inclut toute la surface ; le pinch manuel reste libre et passe sans saut au neutre (régression rouge→verte).

La suite de réserve opposée a aussi révélé un cumul de marge fit8% + recul8%, dépassant le rapprochement validé de plus de15%. Test dédié rouge→vert : seule marge finale ramenée à4%, sécurité du rebord conservée.96 tests unitaires après ce correctif. Revue indépendante : aucun critique/important,95 tests rejoués au moment de revue,576 configurations géométriques indépendantes et captures avant/après inspectées.

La demi-distance stricte ne s’applique plus lorsque le plateau entier impose son cadre minimal. C’est le choix fonctionnel demandé, pas un retour au recul radial 0.8.5. Gros plans temporaires et pincement volontaire restent libres. Budget CI50min, critères conservés ; la suite précédente complète prenait32min.


Panorama/lac 0.8.4 et physique/cycle/puissances 0.8.5 inchangés. Onze fichiers protégés (dont les quatre PNG) comparés octet pour octet à la base 0.8.6 ; lac testé aux cinq phases à delta pixel nul et sondes terrestres stables. Les 24 cascades, brumes, nuages, masques et formules d’ondulation restent protégés. Règles, sauvegarde, musique, icône, identité et signature conservées. Aucun merge main ni Release définitive.

Source `2afdf9bbd9d67846784631b4e86df746adc687ed` ; binaires `c480b902b8ded4f4ecfd0569ea724fcabd336c86` ; [CI 40517279977](https://github.com/greenpower2669/Max-YutNori/actions/runs/40517279977) **réussie**. Version **0.8.7/code16**, identité `fr.fab.maxyutnori`. **96/96 tests unitaires et 55/55 parcours navigateur hors ligne**, aucune erreur JavaScript ni requête externe ; compilation/lint Android et signature APK v2 validés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/c480b902b8ded4f4ecfd0569ea724fcabd336c86/temp/Max-YutNori-v0.8.7-debug.apk) — 62,500,444 octets ; SHA-256 `391ae8450a15392639d2bf1b67b922d06fc9bbcb7640e60194781d25c81d2867`. Vrai téléchargement HTTP 200, ZIP, manifeste Android/version, quatre PNG et MP3 vérifiés. Certificat extrait de l’APK identique à la 0.8.6 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Installation par-dessus la 0.8.6 possible, essai réel encore humain. **APK uniquement**, aucun nouvel AAB.

**À valider sur Samsung SM-A576B Android 16 par Fab** : mise à jour réelle ; proximité/lisibilité et bord éloigné pendant les séquences ; ×2, pincement/prises et retours ; rotation avec noms longs pendant un suivi ; esthétique, FPS et chauffe. Aucun essai physique Samsung ni mesure matérielle revendiqué. Le cas combiné HUD long + rotation pendant le suivi reste un point mineur de couverture : les blocs sont testés séparément, aucun dysfonctionnement établi.

## Historique — états précédents conservés

# MYN-D042 — Fond du plateau coupé (27/10/2026)

Retour Fab sur0.8.6/capture25695.jpg : rapprochement validé, fond du plateau hors champ. Source : routeFrame ajuste uniquement pion/destinations et cible leur étendue proche des réserves ; le reste du plateau ne participe pas au fit. Le×2 de la vue générale peut aussi descendre sous la distance permettant de voir le plateau entier. Régression réelle RED : rebord projeté741.7 hors limite703.8 ; GREEN après orientation plus plongeante et fit plateau+pion/destinations. Les96 tests passent. Régression de continuité du pinch au neutre rouge→verte ; interpolation douce de cible lorsque le pincement privilégie le pion. Aucune modification du lac/physique. Suite navigateur : une réserve opposée révélait un double excès de marge (fit8% puis recul8%), dépassant le plafond rapproché. Régression dédiée rouge→verte : marge finale ramenée à4%, sécurité du rebord conservée. Dernière livraison0.8.6.

## Historique — références précédentes conservées

# MYN-D040/D041 — correctifs vérifiés0.8.6 —27 octobre2026

D040 : ancien calcul utilisait toute la distance pion→destination comme rayon, cible maintenue sur le pion ;26.53/36.63 unités aux aspects2/.7 sur la route diagonale de référence. La compensation de projection×2 doublait encore le recul physique. Nouvelle étendue centrée :13.41/14.49, ×2 physiquement rapproché à projection fixe. Régressions unitaires et vrai navigateur RED→GREEN.

D041 de revue : après pion3→O5 avec[5,1], la sélection automatique passait au pion1 mais le focus restait sur le pion3 ; la prochaine destinationO1 sortait de l’écran. Régression navigateur RED→GREEN : sync réassocie focus et destinations, phase/pinch conservés. Revue indépendante : un problème important corrigé, aucun critique/mineur restant.

Harnais : attendre l’arrêt angulaire d’OrbitControls en rendu logiciel dépassait30s (amortissement5%/image). Le test d’indépendance de distance en vue libre attend une stabilité radiale ; les assertions de demi-distance, projection, orbit effectif et pinch réel restent strictes. Première CI remplacée par la source finale ; aucun APK intermédiaire annoncé.

Panorama et lac0.8.4 intégralement conservés :24 cascades, brumes et nuages ; formules de réfraction, intensité/vitesse et masques inchangés. Physique/puissances/cycle du bol0.8.5, règles, sauvegarde, musique, icône et signature préservés. Onze fichiers protégés comparés octet pour octet à la base ; tests WebGL des cinq phases du lac à delta0, sondes terrestres stables. Aucun merge main ni Release définitive.

Source `d32198f6ec148f1277c9689d2566d2e0e7205535` ; binaires `a2e1ab8e4b7e8c01b0ac535dcd53f77599c43731` ; [CI40468288904](https://github.com/greenpower2669/Max-YutNori/actions/runs/40468288904) **réussie**. Version **0.8.6/code15**, identité `fr.fab.maxyutnori`. **92/92 tests unitaires et54/54 parcours navigateur hors ligne**, aucune erreur JavaScript ni requête externe ; WebGL, build/lint Android et signature APK v2 vérifiés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/a2e1ab8e4b7e8c01b0ac535dcd53f77599c43731/temp/Max-YutNori-v0.8.6-debug.apk) —62,500,244 octets ; SHA-256 `fe1e2c3af08a6541246f8dc2076608b98cd8757c63d871aa3025443393936ba5`. Vrai téléchargement HTTP200, ZIP, manifeste binaire/version, quatre PNG et MP3 vérifiés. Certificat extrait de l’APK identique à0.8.5 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Installation par-dessus0.8.5 possible, sans désinstallation ; essai d’installation réel encore humain. **APK uniquement**, aucun nouvel AAB.

**À valider par Fab sur Samsung SM-A576B Android16** : mise à jour réelle ; taille/lisibilité du plateau et des pions pendant approche, recul et retours ; ×2/pinch/prises et vue libre ; vol/rangement des quatre yut ; esthétique des24 cascades/brumes/nuages, FPS et chauffe. Aucun test physique Samsung ni mesure de fluidité matérielle revendiqué.

## Historique — états précédents conservés

# MYN-D040 — recul excessif après approche (27/10/2026)

Cause confirmée sur0.8.5 : ChaseCamera conserve la cible sur le pion et calcule le recul depuis la distance entière à la destination, comme un rayon ; exemple route diagonale8.49 :26.53unités à aspect2,36.63 à aspect.7, contre cadrage général11.94/15.46. scene.js multiplie ensuite cette distance par camera.zoom en action, donc ×2 double le recul physique. Correction en cours : centrage de la zone utile, ajustement aux points projetés et approche physique à focale fixe. Base89 tests verts. Aucun nouvel APK encore.

Revue MYN-D041 : après un déplacement du pion3 avec [5,1], le rendu sélectionne automatiquement le pion1 mais conserve l’ancien focus ; le cadrage précis serre alors la mauvaise zone. Régression réelle navigateur RED : haloO1 hors cadrage ; puis GREEN : sync réassocie focus et destinations à la sélection automatique, en conservant le pincement et la phase du suivi. Les quatre yut gardent leur cadre de sécurité.

Harnais vue libre : attendre une orientation immobile bloquait sur l’amortissement OrbitControls à5%par image en rendu logiciel. Les assertions concernent la distance ×2/pinch ; le témoin de stabilité de cette vue attend désormais une distance radiale stable, sans imposer la fin d’un orbit indépendant. Aucun assouplissement des assertions de distance/projection. Les phases animées et leur stabilisation disposent de120s murales en rendu logiciel (dt simulé plafonné à.1s/image) ; un essai local avait expiré à30s pendant reveal, après réussite du vrai ×2/pinch/désactivation. Le critère reste la phase physique/caméra atteinte, sans pause fixe.

## Historique — référence précédente conservée

# MYN-D038 / D039 — validation finale MYN-019 — 27 octobre 2026

Revue : deux problèmes importants reproduits et corrigés. À vitesse80, un yut graine5 traversait le mur mince malgré CCD ; murs épaissis vers l'extérieur et sous-pas adaptatifs bornés, sans changer les limites intérieures ni téléporter les corps. Régression sur les quatre bords/coin et 100 essais de stress sans sortie. Les trajectoires ordinaires gardent120Hz.

Le HUD de déplacement recouvrait l'équipe2 avec trois lignes de boutons. Première correction trop large : masquage du panneau de lancer, détecté en CI40431151100 par `auto.uncheck` devenu invisible ; Android n'avait pas été construit. Correction finale : toutes les commandes conservées, colonnes plus étroites et choix horizontaux/défilables. Vrai navigateur avec nom long et1/6/12 résultats : aucun débordement/chevauchement, commandes accessibles.

Le cadrage général a aussi été comparé géométriquement à la caméra0.8.4 : grossissement réel supérieur et réserves initiales préservées. La marge de sécurité du vol reste plus large que celle du plateau.

Source `89ad97d4ed659aab3e03c68289348466bcfdf252` ; binaires `b7355bf77fb9637d325a59cb5edd290e618522b0` ; [CI 40432711889](https://github.com/greenpower2669/Max-YutNori/actions/runs/40432711889) **réussie**. Version **0.8.5/code14**, `fr.fab.maxyutnori`. **89/89 tests unitaires et 50/50 parcours navigateur hors ligne** ; aucune erreur JavaScript ni requête externe. Rendu WebGL : lac inchangé aux cinq phases de référence, sondes terrestres fixes ; panorama 0.8.4 conservé. Build/lint Android et signature APK v2 validés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/b7355bf77fb9637d325a59cb5edd290e618522b0/temp/Max-YutNori-v0.8.5-debug.apk) — 62,499,852 octets ; SHA-256 `578d54da69f41cd0ee7bdcad871bb7ac4bea37a87eeef5c21ea217119b603fe6`. Certificat extrait du vrai APK téléchargé et identique à 0.8.4 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. ZIP, manifeste Android binaire, icône, quatre PNG et musique MP3 vérifiés. **APK uniquement**, aucun nouvel AAB.

**À valider par Fab sur Samsung SM-A576B Android 16** : mise à jour réelle, lisibilité du cadrage et des pions, gestes/pinch/×2/caméra action, bol à droite et retour des quatre yut, puissance et rebonds, esthétique de toutes les 24 cascades/brumes/nuages, berges immobiles et FPS/chauffe. La capture 25678.jpg n'était pas disponible dans ce checkout : la disposition décrite par Fab a guidé le travail, la correspondance visuelle exacte reste humaine. Aucun test physique Samsung ni mesure FPS revendiqué. Aucun merge `main` ni Release définitive.

## Historique — états antérieurs conservés

## MYN-D038 — ergonomie, confinement et déclencheur du bol (27/10/2026)

CI initiale40431151100 arrêtée avant Android : le test a détecté le mode automatique masqué en phase de déplacement. Commandes permanentes rétablies et contrôle de visibilité ajouté ; nouveau passage complet à lancer. Aucun nouvel APK livré.

Constat de conception : origine de bol fixe partagée implicitement par scène/physique/rangement ; rebords bas n'assurent pas un confinement en altitude. Le bol attend actuellement le résultat avant de disparaître ; MYN-019 remplace ce déclencheur par le franchissement réel de chacun des quatre volumes. Cadrages et HUD vont être vérifiés aux formats téléphone. Deux régressions de revue reproduites RED→GREEN : murs minces traversés à80unités/s (graine5), corrigés par épaisseur extérieure et sous-pas adaptatifs ; bandeau de coups trop haut, corrigé par choix horizontaux, colonnes resserrées et hauteur défilable bornée. 100 stress physiques sans sortie et HUD ordinaire/six résultats avec nom long vérifiés. Le cadrage initial avait une marge trop généreuse : grossissement réel désormais comparé à0.8.4 et réserves complètes conservées. Aucun bug de lac à corriger : son code est protégé. Base 0.8.4/code13, 79 tests de base verts ; livraison future non encore fabriquée.

## MYN-D037 — audit et correctifs des cascades/brumes (26/10/2026)

**Signalement** : la scène semblait ne pas animer toutes les chutes roses ni les brumes violettes et turquoise. Analyse : six ellipses historiques, dont une mal centrée sur la forêt, ne représentaient pas toutes les cascades réelles. Fab a fourni 25663.jpg et 25651.jpg et autorisé le codage.

**Correction** : `annotated-zones.mjs` ajoute 24 rubans roses, 5 violets et 7 turquoise ; atlas statique séparé 512 Kio. `living-panorama.js` contient des effets atmosphériques distincts et un masque `dry` excluant le lac ; calcul de l'ondulation 0.8.3 et anciens embruns préservés. Deux correctifs techniques : chemin `../../web/src/low-mist.mjs` dans la fixture 0.8.3 ; condition du shader étendue aux nouveaux masques de brume/ciel.

**Historique CI** : premier passage `40374825564` échoué sur délai d'un test de démarrage ; passage `40376910942` échoué sur import incorrect de fixture ; autres anciens jobs annulés au profit du dernier commit. Passage final [40377936315](https://github.com/greenpower2669/Max-YutNori/actions/runs/40377936315) **SUCCESS** : tests unitaires, 45 scénarios navigateur, WebGL, lint, APK/AAB et signature réussis. Résultat `native-panorama-animation.json` : lac comparé à la référence 0.8.3 aux temps 0/1/3/7/12, delta 0 ; points chute/brume/ciel animés, mode réduit fixe. Source `ac1763d` ; binaires `a9c79276e64d2216ab7711843ba8778066f47c56`.

**Dette de validation** : pas d'inspection visuelle exhaustive des 24 filets dans la vraie APK, pas de FPS/chauffe Samsung mesurés. Les masques testés ne prouvent pas l'absence de faux positif visuel sur chaque rocher. Ne pas inventer une validation matérielle ; traiter les retours de Fab dans `todo.md`.

## Historique — anomalies précédentes



CI [40329703094](https://github.com/greenpower2669/Max-YutNori/actions/runs/40329703094) réussie : 76/76 tests et 45/45 parcours navigateur hors ligne, aucune erreur JS/requête externe, APK/AAB et lint Android réussis. Pixels : huit sondes de géométrie à cinq phases, sans déformation ; eau avec réfraction positive, brume/ciel/chutes animés, mode réduit fixe. Régression de l’arbre 720/420 observée rouge puis verte. Revue indépendante effectuée. Source `9adc09709dead8bfd5695b39eca01c2b8a0b63a2`, binaires `84d49c1c216002e3913b540feb1bcefaa15808c1`. Vrais téléchargements HTTP 200, ZIP/SHA-256, versions, quatre PNG et MP3 vérifiés ; certificats extraits des APK v2/AAB identiques à 0.8.2 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,495,080 octets ; SHA-256 `6a33dad7d6e8e5fa2a1894a5b6b2412b920282afea93315320289547f1da80f3`.
AAB : 62,005,457 octets ; SHA-256 `ede3d29837de081081f7e367d8d4532d6151e76076f12e394eb0a7dd615c4ee2`.

Installation en mise à jour de 0.8.2 sans désinstallation. Les sondes automatiques ne prouvent pas une segmentation sémantique exhaustive de chaque pixel ; vérifier les autres berges/cimes et la fluidité sur Samsung SM-A576B Android 16. Aucun essai matériel/FPS revendiqué. Aucun merge main ni Release définitive.

## Historique — états antérieurs conservés

## MYN-D036 — eau déformant les arbres, signalement Samsung

Revue MYN-D036 favorable ; certains anciens centres d’ellipse, notamment .600/.746, visent de la forêt et ne prouvent pas un filet d’eau. Le contrôle matière y interdit le déplacement des pixels non aquatiques reconnus. Ne plus annoncer six cascades physiques pixel-vérifiées sur cette seule base. La QA nouvelle isole réellement le déplacement ; classement conservateur de matière non exhaustif, validation humaine maintenue.

MYN-D036 confirmé : arbre720/420 déformé dans la référence 0.8.2, zéro dans les cinq phases après correctif. Huit sondes négatives et eau positive passent. Attention : les anciens tests de luminosité n’isolaient pas la géométrie et plusieurs sondes de chute visaient leur région entière, pas un filet d’eau exact. Ajouter cette frontière à la carte pour les prochaines modifications.

25656.jpg montre des silhouettes étirées. Code 0.8.2 : masque A approché sans contrôle de matière ; héritage eau dans les ellipses de chutes ; déplacement du ciel ; prélèvement déplacé sans vérification de rive. Hypothèse à reproduire : UV appliqués sur des pixels terrestres ou prélevés de l’autre côté d’une berge. Ne pas déduire une stabilité géométrique des seuls tests de luminosité/nuages.

## Validation finale 0.8.2 — MYN-D034/D035

CI [40320155787](https://github.com/greenpower2669/Max-YutNori/actions/runs/40320155787) réussie : 76/76 tests unitaires et 45/45 parcours navigateur hors ligne, aucune erreur JS/requête externe, build APK/AAB et lint Android réussis. Pixels réels : 14 sondes positives/négatives pour les régions, six cœurs comparés à la référence 0.8.1 à deux temps, raccord de rive vérifié et mode réduit fixe. Revue indépendante traitée : raccord d’eau corrigé et testé rouge→vert, métadonnée fsevents rétablie. Source `04c4cb053bc25f49b0a22c93cb7003fbdbb0b70d`, binaires `3756c18859faec9da5e37e92239f77310d3aba4e`. Téléchargements HTTP 200, intégrité ZIP/SHA-256, versions, quatre PNG et MP3 vérifiés ; certificats extraits des vrais APK v2/AAB identiques à 0.8.1 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,494,932 octets ; SHA-256 `91dec0a4e7123fea546daab73d6f42e2c3c14136808dea2f927185d12758e6e1`.
AAB : 62,005,342 octets ; SHA-256 `9b4a52fbdceabef1809ce96523346c39a4139ab852054a996698d8442d899f0d`.

Mise à jour de 0.8.1 sans désinstallation. Fidélité esthétique finale et fluidité/coût GPU sur Samsung SM-A576B Android 16 restent à valider ; aucun FPS matériel revendiqué. Aucun merge main ni Release définitive.

## Historique — états antérieurs conservés

## MYN-D034 — repérage utilisateur des régions

MYN-D035 : raccord d’eau relevé par la revue, fondu extérieur corrigé ; même sonde GPU isolée rouge→vert et suite finale verte. Revue traitée ; CI complète/paquets à vérifier.


MYN-D034 : régression GPU identifiée sur l’îlot x1005/y490 : masque texel nul mais interpolation de voisins aquatiques. Exclusion des îlots avec marge de rive 3–9 px avant téléversement ; test réel rouge→vert, contribution nulle. 76 tests et 14 régions réelles verts, six cœurs égaux à 0.8.1.

Fab valide 0.8.1 et fournit 25651.jpg : extension aux nappes violettes et nuages turquoise, eau jaune mieux délimitée. Cause des limites actuelles observée dans le code : trois ellipses pour la brume/eau et bande de ciel large. Remplacer par une cartographie statique suivant l’image ; préserver la contribution antérieure dans les six régions des chutes. Vérifications à faire, aucun résultat nouveau revendiqué.

## Validation finale 0.8.1 — MYN-D033

CI [40288471190](https://github.com/greenpower2669/Max-YutNori/actions/runs/40288471190) réussie : 73/73 tests unitaires et 45/45 parcours navigateur hors ligne, zéro erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Pixels réels : nappes visibles/mobiles en qualité normale/légère, six cœurs de cascades identiques avec/sans nouvelle couche, un dessin et 64 Kio, mode réduit fixe. Revue indépendante favorable. Source `adf0c9f75d914016cae9b2ba3aedc6662f3fd78c`, binaires `fa1871f945b0c093f7580ce3c761078b836352ec`. Vrais téléchargements HTTP 200, intégrité ZIP/SHA-256, identité/version/icône, quatre PNG et MP3 vérifiés ; certificats extraits des APK v2/AAB identiques à 0.8.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,492,800 octets ; SHA-256 `999b4a8ffe57e62161be73083a28f0d973461b6077be870fd610f177253cade6`.
AAB : 62,003,366 octets ; SHA-256 `ed482e10893272d28e2ebf8b22e6a7ade4a09bfc1e1319d06785a45b6501fd2e`.

Mise à jour de 0.8.0 sans désinstallation. Le coût GPU et le confort visuel réels sur Samsung SM-A576B Android 16 restent à valider ; aucun FPS matériel revendiqué. Au plus trois lectures de texture supplémentaires par fragment concerné. Aucun merge main ni Release définitive.

## Historique — états antérieurs conservés

## MYN-D033 — Vérification de séparation
Deux régressions unitaires rouges puis vertes : densité fixe, mémoire64Kio, ciel/avant-plan exclus, aucun transfert/recréation par frame. Rendu réel : nappes nouvelles visibles et mobiles, y compris qualité légère ; cœurs des six cascades exactement identiques avec/sans nouvelle couche, mode réduit immobile. Une erreur de la fixture a été corrigée : Texture.clone partage Source ; la copie de masque témoin utilise maintenant sa propre DataTexture, sans muter la source réelle. Aucun changement produit pour contourner ce défaut de test.

## MYN-D033 — Nuages bas et embruns à distinguer
Fab confirme que les effets actuels des chutes lui conviennent. Sa demande de brume vise les nappes horizontales basses entre reliefs/îlots et au-dessus du lac, pas un remplacement des embruns. Aucun défaut des chutes à corriger. Régression visuelle à exiger : leur cœur reste identique avec/sans le nouveau voile, alors que les nappes basses se déplacent.

## Validation finale 0.8.0 — D030/D031/D032

Pointillés isolés/corrigés par filtrage, vrai menu natif rappelant Plateau rouge→vert. Budget mural du renderer logiciel adapté à la limite physique inchangée de 12 s simulées ; la CI finale confirme toutes les assertions.

CI [40259390198](https://github.com/greenpower2669/Max-YutNori/actions/runs/40259390198) réussie : 71/71 tests unitaires, 45/45 parcours navigateur hors ligne, zéro erreur JS/requête externe ; cinq zones du panorama vérifiées sur leurs pixels réels et mode réduit identique. Compilation APK/AAB et lint Android réussis. Source `7ab9f8761c56bc899242a234b24a406e0e17d909`, binaires `79ce9005ee4556c1d9c0d8cc5b0c65073e124fb3`. Vrais téléchargements HTTP 200, intégrité ZIP/SHA-256, identité/version/icône/PNG et MP3 vérifiés. Certificats extraits des vrais APK v2/AAB : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identiques à 0.7.0.

APK : 62,491,892 octets ; SHA-256 `06d8a8dc4b790f47e7d0f68d67413f6a262b5b6a0f2eaabaa8502743c803bdc2`.
AAB : 62,002,566 octets ; SHA-256 `2a8e3c8831926acb01d0c58f53de78cd9a8ce51dc17659a378a2637a120b4b45`.

Installation en mise à jour de 0.7.0 sans désinstallation. APK paysage, portrait vérifié pour le Web. Confort tactile, intensité esthétique, performance et capteur restent à valider sur Samsung SM-A576B Android 16. Aucun essai physique revendiqué. Aucun merge main ni Release définitive.

## MYN-D032 — CI : budget mural trop court pour le rendu logiciel
Run40258850450 : 71 tests, build et pixels réels passent ; attente de résultat échoue à40s dans smoke_native:39. Diagnostic : rolling=true, paused=false, horloge d'animation seulement7.4666s depuis démarrage. Le moteur borne dt à0.1/frame et ne conclut au plus tard qu'à12s simulées ; ce délai physique n'avait donc pas été atteint sur le renderer logiciel lent. Les positions sont bornées, aucune erreur JS. Budget mural de l'attente du résultat porté à120s, assertion d'arrêt/lecture des faces inchangée ; aucun changement de durée physique ni contournement de résultat. CI complète à relancer.

## MYN-D031 — Rappeler la vue courante depuis le menu natif
Revue indépendante : après sélection d'un pion, la caméra suit ce pion mais le select vaut déjà board. Home/Enter sur Plateau ne produit aucun change et ne revient pas au cadrage général. Reproduction navigateur rouge confirmée (follow au lieu de idle). Correction : option courante masquée d'affichage, distincte des quatre commandes ; chaque commande est réexécutable et met à jour le libellé courant, y compris les transitions automatiques. Régression native ajoutée, validation verte confirmée par le même vrai menu natif.

## MYN-D030 — Cause des pointillés confirmée
Reproduction navigateur isolée : pointillés présents avec panorama seul et effets coupés, absents lorsque le panorama est masqué. Une seule variable changée (minification sans mipmaps, filtrage linéaire) enlève la diagonale, sans modifier le PNG. Cause : dérivées implicites au saut atan de la couture équirectangulaire sélectionnant un mip de moyenne dorée. Échantillonnage linéaire horizontal répété, éclairage PMREM séparé. Masques des chutes recalés sur les cascades de l'image ; validation finale encore en cours.

## MYN-D030 — Retour utilisateur 0.7.0 — 26/10/2026
Captures : pointillés clairs/jaunes au-dessus et près de la table, effets panorama non perceptibles, table/pions trop petits et joueur actif trop discret. Causes des pointillés à reproduire. Encombrement confirmé par lecture : bandeau bas min-height 148/122px, header min-height 78px et quatre boutons Vue superposés. Aucune correction encore déclarée vérifiée.

## Validation finale 0.7.0 — D025 à D029 — 26/10/2026

Revue indépendante traitée : retour invalide/pointercancel et espacement des piles. Régressions observées rouges puis vertes ; ajout du cadrage des réserves hors commandes, vérifié en 1000×600, 844×390 et 390×844. Pause et mode réduit couvrent aussi lumière et panorama.

D025 supports et levage ; D026 mot GLSL réservé renommé regionMask ; D027 fin de geste invalide/annulé enlève lifted ; D028 offsets de pile conservés ; D029 marge supérieure inclut les commandes. La simulation et la CI ne remplacent pas le contrôle matériel Samsung.

CI [40250007382](https://github.com/greenpower2669/Max-YutNori/actions/runs/40250007382) réussie : 71/71 tests unitaires, 41/41 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `378f987875774d90bca29b5b5acbdf2a1588f962`, binaires/preuves `a034f9c722f402dd0bfd3f0c1d9c593f976bbc6f`. Téléchargements HTTP 200, intégrité ZIP et SHA-256 contrôlés. Certificats extraits des vrais APK v2/AAB : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identiques à 0.6.0. Les quatre PNG embarqués et la musique originale sont conservés octet pour octet.

APK : 10,102,517 octets, SHA-256 `5d92d8ffbcdf724444fb2d63c2433e48bef3e79c11bbd970066da196a058be5a`.
AAB : 9,719,109 octets, SHA-256 `0ed577f5b85b2aceaa1d1133a864b80e43f30e209f44c82c6a5c0307827c3e36`.

## Historique — états antérieurs conservés

## MYN-D029 — Réserves derrière les vues
Capture vue verticale par défaut : deux réserves hautes sont derrière les boutons. Assertion elementFromPoint sur les 16 réserves reproduite rouge en 1000×600. Cause : marge supérieure desktop limitée au bandeau, sans la rangée de vues. fit mesure maintenant le bas réel de cette rangée plus 8px, projection/raycast communs conservés ; régression étendue à 844×390 et 390×844. Vérification locale fraîche : 71 tests unitaires, build Web et 7 parcours confort verts, dont les trois formats et tous les retours/piles. CI finale à produire.

## Vérification fraîche 0.7.0 — gestes
71 tests unitaires verts, build Web réussi. Le nouveau scénario tactile échouait après un zoom volontaire : la réserve projetée à y=464 passait derrière le bandeau inférieur (y=446). Cause du harnais confirmée par coordonnées et capture ; dézoomer avant de reprendre un autre pion, puis exiger une prise réellement sur canvas. Aucun clic compensatoire après dépôt invalide, aucun changement produit.

## MYN-D025 à MYN-D028 — 0.7.0 en cours
D025 supports : base réserve .15 au-dessus de table −.312 ; correction −.31 et montée avant traversée. D026 : mot GLSL réservé patch provoquait fond noir ; renommé regionMask. D027 revue : lifted conservé après dépôt invalide/pointercancel, retour suspendu ; distinguer interruption et supprimer levage en fin de glissement. D028 revue : pile montant vers cible commune compressée ; conserver offsets d’origine. Régressions fraîches à vérifier après reconstitution du checkout nettoyé automatiquement ; ancienne livraison GitHub intacte.

## MYN-D025 — Pions trop hauts ; précision de sélection — 25/10/2026, ouvert
Fab confirme que le flottement signalé concerne les pions ; la table flottante est volontaire. Il demande de les poser plus bas au repos mais de les faire se soulever dès sélection depuis la réserve pour qu'ils ne traversent pas le plateau.
Lecture source 0.6.0 : reservePosition et pawnPosition utilisent y=.15 ; dessous du corps local=.005, décor de table vers y=-.312, soit environ .47 unité d'écart sous une réserve. Cases du plateau autour de .1225 ; plan de glissement actuel y=.25, labels de réserve .09. Le décalage de hauteur est constaté dans les sources. La traversée après abaissement est un **risque anticipé par Fab**, pas un nouveau bug déjà reproduit après correction.
Prévention à réaliser : hauteurs selon support ; montée avant translation, descente contrôlée ; traiter sélection simple, glissement, piles, annulation/retour, halos/ombres/labels et mode réduit. Aucun correctif ni test exécuté dans cette passation ; lié à MYN-013, détails docs/passation-2026-10-25.md.

## Validation finale 0.6.0 — MYN-D021 à MYN-D024
CI [40168413538](https://github.com/greenpower2669/Max-YutNori/actions/runs/40168413538) réussie : 62/62 tests unitaires, 34/34 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `a5d12ed492e0ad0656184cb68ab977280ef15c48`, binaires/preuves `03b939304c60a7923f99d560c906015cd6782614`. Téléchargements HTTP 200, intégrité ZIP et SHA-256 contrôlés ; certificat APK v2 et certificat AAB extraits des vrais fichiers téléchargés identiques à 0.5.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Les trois PNG embarqués sont identiques aux originaux fournis par Fab.

Revue traitée : retour des yut sans traversée du rebord, retour caméra annulé après coup rapide. Autres régressions couvertes : victoire après rangement, pause/reset, bol neutralisé après disparition même si sa descente avait été interrompue. Gauche/droite vérifiés du callback natif aux corps physiques ; hardware Samsung non testé.

APK : 9,533,239 octets, SHA-256 `1ac1b449e11c0b123d52ad1bb0a5ed14ebd2ca52aa5c29dbc90bef690fc1d3a9`.
AAB : 9,150,265 octets, SHA-256 `17e93b234e466b916cb4e9d28a10350ca969e0b2401fb6d33f867c04dfe15b83`.

Mise à jour de 0.5.0 sans désinstallation : identité fr.fab.maxyutnori, icône, signature et sauvegarde v4 conservées. Les gestes, le confort graphique et le sens réel dans les deux paysages restent à valider sur Samsung SM-A576B Android 16. Le relief est dérivé des traits de l’image, pas d’une sculpture 3D mesurée. Aucun merge main ni Release définitive.

Harnais local : le budget du contrôle combiné vol puis retour a été porté de 40 à 60 secondes pour le rendu logiciel ; même condition physique, aucun changement produit. La CI de livraison a validé les 34 scénarios avec le budget initial plus strict.

## Historique — états antérieurs

## MYN-D024 — Retour caché après lancer en descente
Suite complète : ancienne régression du lancer automatique pendant une descente échoue lorsque le résultat impose un déplacement (donc aucun rangement immédiat). holdSticks bloque prepare et laisse le bac invisible suspendu avec returning=true. Test unitaire reproduit rouge ; correction : dockTray seulement une fois opacité zéro/collision désactivée. Aucun saut visible, corps/résultat préservés. Vérifications reprises.

## MYN-D023 — Revue 0.6.0 : rebord et caméra
Reproduction physique : arc fixe de rangement traverse le rebord pour départ proche x=-3.4. Test rouge puis vert avec dégagement extérieur, montée/traversée/descente et rotation en hauteur ; 61 tests unitaires verts. Reproduction navigateur rouge : graine 2, résultat Do joué immédiatement ; returnToBoard non annulé recadrait le plateau pendant le rangement. Annulation dans playMove appliquée, suite navigateur finale en cours. Test victoire déjà vert dans la première suite complète 33/33.

## MYN-D021 confirmé / MYN-D022 transitions — 25/10/2026
Test réel TrayMotion→Rapier gauche/droite rouge puis vert : le signe latéral moins inversait le bord abaissé. Capteur Android reste remappé ; validation matérielle Samsung attendue. BowlCycle : test de passage au-dessus du rebord rouge sur interpolation directe, corrigé par montée/traversée/descente. Smoke ciblé révèle dialogue victoire avant fin du rangement ; attente ready ajoutée, vérification navigateur en cours. 60 tests unitaires passent.

## MYN-D021 — Sens latéral du bol, retour Samsung — 25/10/2026
Fab observe une inclinaison opposée à gauche. Code 0.5.0 : Android remappe les axes selon rotation écran, puis TrayMotion applique un signe moins à l'angle latéral avant la rotation Z du bol. Hypothèse cohérente avec le retour, à reproduire sur rotation physique gauche/droite ; test matériel Samsung restera attendu. Aucun changement durant la discussion « ne code pas » ; réalisation maintenant autorisée. Base 51/51 tests verte.

## Validation finale MYN-010/MYN-011 — 24/10/2026
CI [40078589575](https://github.com/greenpower2669/Max-YutNori/actions/runs/40078589575) réussie : 51/51 tests unitaires, 27/27 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `4a28e1c84ef76f628a85f12dae0b7f2c467d9bfe`, binaires/preuves `c37c719642b5e8b6bb14c40fb2a5ef4e054061f9`. Téléchargements HTTP 200, ZIP et SHA-256 contrôlés ; certificat APK v2 et certificat AAB extraits des fichiers téléchargés identiques à 0.4.1 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 7,942,389 octets, SHA-256 `4507098b866055aeee207bfafbd17b0dd43145ee9a7d39df6f95a368113548e2`.
AAB : 7,615,363 octets, SHA-256 `18f9380af968b8efb8793bfb8bad0bfe40aadfde4a6bdc38b94f9475736d8885`.

P2 cadrage et brouillard de revue corrigés ; dézoom portrait réel vérifié. Glissement sous le doigt, levée du second doigt seule, dépôt invalide, pause, ordre choisi et franchissement inverse/avant passent. Migration v3 conserve sa copie d’origine. 36 lancers auto supplémentaires : aucun hors limites, 32 lisibles et 4 relances physiques. Une sortie Web locale antérieure a été détectée lors de la reprise ; reconstruction séquentielle et contrôle du bundle servi ont permis de vérifier la sortie courante, puis CI sur copie propre.

Installation en mise à jour de 0.4.1 sans désinstallation : identité fr.fab.maxyutnori, icône et signature conservées. Sauvegarde v4 séparée, anciens v2/v3 conservés ; les compteurs absents des anciennes parties sont initialisés à 1 (0 pour les pions terminés), sans inventer leur historique. Confort caméra/tactile et capteur encore à valider sur Samsung SM-A576B Android 16. Décor MYN-009 reporté ; aucune fusion main ni Release définitive.

## Historique des étapes précédentes

## Point de vérification 0.5.0 — 23/10/2026
MYN-D019 : revue caméra trouvait une limite OrbitControls18 incompatible avec recul28 et un cadrage portrait trop étroit ; calcul par champ minimal, limite action60, régression de projection rouge puis verte. MYN-D020 : brouillard26–50 rendait les pions invisibles après fort dézoom ; plage ajustée après controls.update, confirmation du relecteur. Glissement : gain borné selon rapport de distances pour empêcher la cible de se dérober ; scénario tactile réel désormais vert. Caractérisation CDP : touchEnd([second]) lève uniquement ce doigt, contrairement au commentaire généré du protocole. 36 lancers auto contrôlés : tous dans les limites, 32 lisibles, 4 relances légitimes.

## 23/10/2026 — Réalisation autorisée 0.5.0
MYN-D018 : Back-do depuis S sans déplacement déclenchait pass ; portage sans Turnleft/SaveTurns. Correction maintenant autorisée, régressions avant implémentation. Dossier temporaire nettoyé par environnement, reprise du commit distant 5ef3afd sans perte de code produit.
Plan docs/plan-action-v050.md ; suivi docs/action-progress.md.

# Max-YutNori — Historique de diagnostic

## MYN-D018 — Divergence du recul et du compteur de tours ; audit sans coder
23/10/2026 : Fab voit une option ressentie comme « passer ce tour », ne peut choisir de pion/yut, décrit sa règle de tours restants et demande seulement une explication. Version examinée 0.4.1, source f012219b9bf356e4c1c0938729b9007ef49a2e38.
- Faits Web : destinations refuse pos=S avec valeur négative ; pass supprime le résultat sélectionné s’il n’a aucun déplacement, puis finit le tour joueur si la liste est vide. Il ne valide aucun pion arrivé. main affiche « Passer ce résultat » lorsque le résultat sélectionné n’a aucun coup, et la liste des pions jouables est alors vide. tests/rules.test.mjs encode explicitement cette règle. Sans état Samsung, le lancer exact reste inconnu ; le cas −1 avec tous les pions en réserve explique ces symptômes, sans prouver que c’était le cas joué.
- Faits original public FabYut, commit 81ba459b39306b4f0c36ca69d8483d7bc3d552a8 : Globals.istrigable autorise −1 depuis dx=0/20 vers 19 ou vers la branche 4/15. fabchoc.releaseGrab lignes 148–162 ajoute Turnleft += 1 dans ces passages arrière ; lignes 163–194 retire un tour au franchissement avant et termine le pion uniquement à zéro ; SaveTurns reçoit Turnleft (ligne 123). Le compteur existe donc bien dans l’original. La réécriture ne garde que pos/route ; le tour global du joueur ne remplace pas les tours restants d’un pion.
- Résultats accumulés : pending conserve les valeurs, selectedResult permet un ordre libre en phase move ; move n’efface que l’entrée choisie. Avant la fin des relances 4/5, les boutons de résultats sont désactivés.
- Manipulation : clic/raycast sur pion propre et réserve déjà présent en phase move, hors vue libre ; le mouvement de pointeur >10 px est ignoré au relâchement. Aucun glisser-déposer de pion. Réserve : entraxe .58 pour diamètre .46, donc seulement .12 unité de séparation géométrique avant projection.
- Hauteur : auto et bouton appellent le même launch(settings.power), défaut .6 ; vitesse verticale 5+4*power. L’auto ne possède pas de renforcement propre. La perception exacte sur Samsung n’a pas été mesurée.
Aucun correctif, aucune exécution de test ni nouveau paquet. Demandes et limites enregistrées dans MYN-010 ; reprendre après autorisation de réalisation.

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

## MYN-D016 — Lecture du rendu trop tôt après Nouvelle partie
CI 39849699784 : 38 tests et build passent, smoke bloqué sur projectedSticks.every(height<1) juste après le clic Nouvelle partie. reset est synchrone côté physique mais projectedSticks lit les meshes Three.js, actualisés à la prochaine frame. Le scénario vérifiait avant ce rendu selon l’ordonnancement du navigateur. Attendre le même état visuel avec waitForFunction (même borne, timeout conservé), tout en gardant les assertions immédiates rolling=false et lastThrow=null. Aucune temporisation ni logique du jeu modifiée. Reprise CI pour validation.

## MYN-D017 — Ciblage tactile avant fin du mouvement de caméra
CI 39917097162 : échec intermittent du premier glissement (attente de levage), alors que le même code passait les 20 scénarios localement. Le test attendait 650 ms après le changement de vue, sans vérifier que le point projeté était à l’écran et stable ; le rendu logiciel peut avancer plus lentement. La fixture attend désormais trois frames de stabilité et vérifie elementFromPoint===canvas avant de viser ; assertion de prise immédiate et diagnostic complet en cas d’échec ajoutés. Aucun changement de geste produit. Reprise CI exigée pour conclure.

## 23/10/2026 — Validation finale MYN-008
CI [39917902942](https://github.com/greenpower2669/Max-YutNori/actions/runs/39917902942) réussie : 38/38 tests unitaires, 20/20 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Même certificat APK/AAB que 0.4.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Source `f012219b9bf356e4c1c0938729b9007ef49a2e38`, binaires/preuves `95039cf53512f6fb358233ce6f0f8e4fd589079c`. Téléchargements bruts HTTP 200, intégrité et SHA-256 comparés.

Dégagement visuel du socle/table et quatre finitions inspectés. Geste tactile sans capteur, pause/reprise, passage auto et priorité du doigt passent en navigateur. APK/AAB téléchargés, empreintes et contenu vérifiés. MYN-D016 : même état visuel attendu après la frame au lieu d’une lecture prématurée, CI finale passée. Installation en mise à jour de 0.4.0 sans désinstallation : signature, identité et icône conservées. Essai physique Samsung SM-A576B Android 16 attendu pour le confort tactile, la lisibilité et le capteur. Décor environnant reporté MYN-009 ; aucune fusion main ni Release définitive.
<!-- END ORIGINAL debughistorical.md -->

