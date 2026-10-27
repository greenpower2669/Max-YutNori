# Diagnostics actifs et prévention

## Clôture 27/10/2026
Aucun nouveau bug produit établi. Les états intermédiaires redondants sont archivés intégralement dans sauvegarde.md. Les diagnostics récents D038–D043 ci-dessous restent actifs pour prévenir les régressions caméra/gestes/assets. Prévention antérieure : protéger strictement arbres/berges des UV du lac ; isoler nuages et embruns ; ne pas confondre timeout de rendu logiciel et échec du jeu ; retour du bol et pause annulent correctement les gestes ; clé de signature perdue = arrêter le build, jamais remplacer silencieusement l'identité.

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



Diagnostics plus anciens D001–D037 : sauvegarde.md (source debughistorical.md, instantané 8debca3). Les essais matériels restent dans todo.md.

## MYN-D044 — séparation des versions et cache atomique
Prévention MYN-024 : une release Android plus haute ne prouve aucune mise à jour Web. Tests rouges avant implémentation, puis neuf cas politique/worker verts ;105 tests socle compris. Ne jamais reconstruire une version interne uniquement depuis un manifeste distant : métadonnées intégrées au bundle. Ne jamais activer skipWaiting automatiquement en mise à jour, ni servir un206 partiel comme un MP3 complet du cache. Anciennes générations du cache conservées pour les documents encore ouverts ; localStorage jamais supprimé par le worker.

## MYN-D045 — revue PWA et limite hébergement confirmées
Push Sites refusé : fichier MP3 52,386,596octets, limite par objet32Mio. Aucun déploiement annoncé. Correctif de transport Web uniquement : fragments8Mio, assemblage Blob et vérification taille/SHA256 de chaque fragment et du morceau entier, sans compression ni réencodage. APK inchangé. Revue : filtrer les fenêtres hors scope avant activation et comparer les manifestes hôte/GitHub entre eux ; deux régressions reproduites rouges avant correctif.

## MYN-D046 — signal hors ligne et statut des versions
CI40591418527 : huit scénarios passent (WebGL/Rapier, manifest, exclusion Android99, lancer réel, reload/sauvegarde hors ligne et MP3 reconstruit/décodé + Range), puis absence du statut Vérification impossible en simulation réseau coupé. Cause de code reproduite : checkVersions consultait fetch sans prendre en compte navigator.onLine ; des réponses disponibles via cache/worker peuvent alors conclure À jour malgré le mode hors ligne. Test ciblé rouge : online=false avec réponses disponibles retourne À jour et émet des requêtes. Correctif : retour explicite Vérification impossible sans requête lorsque le navigateur signale hors ligne. Build PWA incrémenté à2 ; jeu/Android inchangés. Diagnostics bornés ajoutés au harnais en cas d'échec.

## MYN-D047 — cache de signature limité à la branche
CI40592283542 :110 tests et15/15 parcours PWA verts, zéro erreur JS, puis restauration de max-yutnori-native-debug-key-v2 refusée pour cache absent sur la nouvelle branche. Aucun problème de compilation observé car elle n'avait pas démarré. Les caches GitHub ne sont pas disponibles entre branches sœurs (documentation GitHub Actions). Ne jamais générer/remplacer la clé publiée. Le contrôle de compatibilité assemble APK/AAB non signés par init Gradle temporaire si la clé n'est pas visible, et conserve intact le DSL de signature canonique et le workflow Android historique. Ces paquets ne sont pas distribués. Résultat signé original0.8.8 déjà vérifié séparément. Réutiliser les15 parcours déjà verts uniquement si les entrées Web/scripts/tests/build sont identiques à6551730 ; sinon réexécuter la suite.
