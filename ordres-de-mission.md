## IMMUTABLE / À PRÉSERVER
- Dépôt Android : `greenpower2669/Max-YutNori`. FabYut est la référence en lecture seule.
- Mission MYN-001 conservée dans sa branche. Avenant MYN-005 autorise la refonte du moteur et des graphismes dans une nouvelle branche ; préserver la référence FabYut.
- Aucune fusion vers `main` ni publication définitive sans accord explicite de Fab.
- Livrer un `.apk` directement installable via GitHub, nommé projet/version, avec icône. Aucun ZIP à extraire sur le téléphone. Emplacement temporaire : `temp/` sur la branche de travail, alimenté par GitHub Actions.
- Appareil de validation humaine : Samsung SM-A576B, Android 16.
- Première identité Android réalisée : `fr.fab.maxyutnori`, nom affiché `Max YutNori` ; préserver pour les mises à jour. Signature debug de test, pas de clé de publication Play.
- Les cinq mémoires évoluent avec le travail ; secrets absents des dépôts et des journaux.


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
