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
