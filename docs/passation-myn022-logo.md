# PASSATION ACTIVE — MYN-022 / 0.8.8-code17 LIVRÉE — 27 octobre 2026

Branche feature/native-webgl-v020, PR#2 ouverte et brouillon. Lire les cinq mémoires avec FabCopilot. Nouvelle réalisation après nouvel ordre de Fab.

Le visuel jade/or fourni par Fab est intégré dans le jeu avec emblème carré de 44 px et nom texte lisible, ainsi que dans le favicon et l’icône Android. Calque adaptatif 108 dp / visuel 56 dp et cinq densités classiques ; source JPEG conservée intacte, dérivés Lanczos uniquement. Le bandeau compact garde ses commandes accessibles et sa hauteur paysage.

Source `08abcaed4940511bdbd73cb3a863c2172209e93a` ; binaires `99543419bca0b55a9b12e3faeb98fa8833aecf50` ; [CI 40543163343](https://github.com/greenpower2669/Max-YutNori/actions/runs/40543163343) **réussie**. Version **0.8.8/code17**, identité `fr.fab.maxyutnori`. **96/96 tests unitaires et 56/56 parcours navigateur hors ligne**, aucune erreur JavaScript/requête externe. WebGL lac aux cinq phases à delta nul, compilation/lint Android et signature APK v2 réussis.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/99543419bca0b55a9b12e3faeb98fa8833aecf50/temp/Max-YutNori-v0.8.8-debug.apk) — 62,243,800 octets ; SHA-256 `1b3ba30fccf41a07fb5b034946c79cd306ce488437436ad87cece09befb9e07e`. Vrai téléchargement HTTP200, intégrité ZIP, manifeste/version/package vérifiés. **Pixels des sept dérivés logo/icônes identiques aux sources approuvées après compilation**, ressources adaptatives/legacy et références icon/roundIcon vérifiées. Certificat extrait du vrai APK : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identique à 0.8.7. Mise à jour sans désinstallation possible ; essai réel encore humain. APK uniquement, aucun nouvel AAB.

Treize fichiers caméra/physique/panorama et décor/règles conservés octet pour octet à la base ce531ea. Cadrage rapproché et redressé MYN-021, fond/rebord visible, ×2 physique et pincement préservés. Lac 0.8.4 : aucune modification d’ondulation, réfraction, vitesse/intensité, masque ou rendu. Les 24 cascades, brumes et nuages, les règles, sauvegardes et musique restent préservés. Aucun merge main/Release définitive.

**À valider par Fab sur Samsung SM-A576B Android16** : installation réelle, icône du lanceur/cache et masques OEM animés, lisibilité du logo, confort tactile et capteurs/son, rotation avec noms longs pendant un suivi, autres dimensions et grossissement système, esthétique/FPS/chauffe. Captures et tests automatiques ne prouvent pas ces validations matérielles. Le « Parfait » antérieur n’est pas une mesure exhaustive.

Plan et limites de revue : docs/plan-logo-v088.md, docs/revue-v088.md. Vérification reproductible : docs/verification/verify-delivery-v088.py BINARY_COMMIT SOURCE_COMMIT RUN_ID, depuis cette version du dépôt.

## Historique — spécification et états précédents conservés

# État actif MYN-022 — 0.8.8/code17 en vérification

Fab autorise « On, code ». Logo/nom et icônes intégrés ; vérification, revue et livraison APK à terminer. Dernier APK livré 0.8.7/code16. Plan `docs/plan-logo-v088.md` ; cinq mémoires à jour. Aucun merge main/Release.

## Spécification et état précédent conservés

# PASSATION MAX-YUTNORI — MYN-022 — Nouveau logo et icône Android

Date : 27 octobre 2026.

## Demande de Fab et état réel

Fab fournit `25701.png` et demande : « Parfait on met ce nouveau logo dans le jeux et en icon prompt passation et met à jour les mémoires ».

Le visuel fourni devient la référence pour le logo du jeu et l’icône de l’application. Cette intervention prépare la passation, conserve la source et met à jour les cinq mémoires. **L’intégration dans le produit reste à réaliser ; aucun nouvel APK n’est livré ici.** Ce constat ne retire pas la demande de Fab et n’invente pas une interdiction de coder.

## Dépôt et reprise

- Dépôt : https://github.com/greenpower2669/Max-YutNori
- Branche : `feature/native-webgl-v020` ; PR #2 ouverte, en brouillon.
- Utiliser FabCopilot. Lire d’abord `ordres-de-mission.md`, puis `todo.md`, `brain.md`, `brainmap.md`, `debughistorical.md`, et cette passation.
- Dernière version livrée : **0.8.7 / versionCode 16**. Source `2afdf9bbd9d67846784631b4e86df746adc687ed`, binaires `c480b902b8ded4f4ecfd0569ea724fcabd336c86`, mémoires avant MYN-022 `7ea56398df6d0c62de886fdb40de0c3a0e9ed5c6`.
- CI précédente réussie : https://github.com/greenpower2669/Max-YutNori/actions/runs/40517279977 — 96 tests unitaires et 55 parcours navigateur. Ces résultats concernent la 0.8.7, **pas une future intégration du logo**.
- Version suivante proposée par l’agent, non encore produite : **0.8.8 / versionCode 17**, à confirmer selon l’état réel de la branche à la reprise.

## Source exacte, déjà conservée

[Original fourni par Fab](assets/25701-logo-original.jpg) : `docs/assets/25701-logo-original.jpg`.

Malgré son nom d’envoi `25701.png`, le fichier est réellement un **JPEG RGB opaque de 1536 × 1536**, 597 891 octets. L’original est conservé **octet pour octet**, sous une extension conforme à son format, sans réencodage. SHA-256 : `afb8df0a1d8540ddac46ba8bbda8ae5208f4d4051a86c5029d508af15b3d7096`. Git blob : `aba2f08082fce7a5861398372f2af03222b034ed`.

C’est un carré jade et or, avec plateau ornementé et bâtonnets noir/cèdre. Employer ce visuel fourni ; préserver sa composition, ses couleurs et ses proportions. Aucune régénération créative n’est demandée. Il n’a pas de canal de transparence : ne pas prétendre qu’il est détouré. Garder cette source intacte et produire les déclinaisons techniques séparément.

## Résultat demandé

1. **Dans le jeu** : remplacer le logo actuel par ce nouvel emblème. Adapter proprement le format carré au bandeau compact ; conserver le nom Max YutNori lisible et accessible si un libellé d’accompagnement est nécessaire. Éviter tout étirement en bandeau, découpage des bâtonnets, chevauchement du ×2 ou des commandes, et augmentation de la hauteur qui réduirait la visibilité du plateau. Vérifier petit écran et les deux paysages ; conserver le fonctionnement Web hors ligne.
2. **Icône Android** : utiliser le même visuel pour l’icône de lancement. Préparer les tailles/ressources nécessaires et des marges protégeant la composition dans les masques ronds et carrés arrondis, notamment Samsung. Vérifier les ressources effectivement référencées et embarquées. Garder le nom affiché `Max YutNori`.
3. L’ancienne consigne « icône/logo conservés » est levée **pour ce seul remplacement visuel demandé par Fab le 27/10/2026**. Elle n’autorise aucun changement de package, certificat, règles ou contenu de jeu.

## Points d’entrée vérifiés dans la 0.8.7

- `web/index.html` : `.brand` contient le bouton `#zoom2` et l’image `./art/max-yutnori-title.png` ; dimensions déclarées **2172 × 724**, ancien logo horizontal.
- `web/src/style.css` : règles `.brand img` successives et responsive, puis bandeaux MYN-019. Une substitution du fichier seule ne suffit pas à garantir le cadrage du carré.
- `web/public/art/max-yutnori-title.png` et `web/public/art/README.md` : ancienne source active et documentation des assets. Les futurs dérivés actifs sont à créer dans `web/public/art/`, pas à charger depuis `docs/`.
- `android/app/src/main/AndroidManifest.xml` : `android:icon="@drawable/ic_launcher"`.
- `android/app/src/main/res/drawable/ic_launcher.xml` : icône vectorielle actuelle. Adapter ces références si des ressources bitmap/adaptatives sont introduites ; ne pas laisser l’ancien dessin actif.
- `scripts/smoke_ambience.mjs` : assertion du logo `naturalWidth === 2172` à adapter au nouvel asset en gardant un vrai contrôle de chargement.
- `scripts/verify_native_apk.py` : compare les PNG de `web/public/art/` avec l’APK. Vérifier aussi explicitement les nouveaux dérivés et l’icône Android.
- `.github/workflows/android.yml`, `package.json`, `package-lock.json`, `android/app/build.gradle` : version et nom du futur APK à synchroniser lors de la réalisation.

## Socle à préserver

Conserver le cadrage rapproché et redressé de MYN-021, le fond/rebord du plateau visible en cadrage automatique stabilisé, le ×2 physique réversible et le pincement manuel libre. Préserver les quatre vues, sélections, gestes, prises et retours.

**Protection absolue du lac 0.8.4** : ne modifier ni ondulation, formules de réfraction, vitesse/intensité, masques ou rendu. Préserver les 24 trajectoires de cascades, 5 bandes de brume et 7 bandes de nuages ; arbres, îles, rochers et berges stables. Ne pas toucher au panorama, à la fresque ou au bois pour ce changement de logo.

Préserver physique, puissances, murs invisibles, cycle du bol, règles, sauvegarde, musique Arisongs embarquée et performances. Identité obligatoire : `fr.fab.maxyutnori`. Certificat debug identique : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Le remplacement de l’icône ne doit pas imposer une désinstallation.

## Vérifications et livraison lors de la réalisation

Contrôler visuellement le logo à sa taille réelle, les petits écrans, les commandes et la surface centrale disponible. Vérifier l’icône sous différents masques, son association au manifeste et son contenu dans l’APK. Exécuter les vérifications adaptées du jeu, du rendu et du packaging ; conserver les régressions caméra/gestes et panorama/lac existantes. Adapter les références graphiques uniquement pour le changement autorisé du logo/icône.

Compiler Android et vérifier le vrai fichier téléchargé : existence HTTP, intégrité SHA-256, version/versionCode, package et certificat. Publier **uniquement un APK debug directement téléchargeable dans `temp/`**, nommé projet/version ; aucun nouvel AAB ni ZIP à extraire sur le téléphone. Mettre à jour les cinq mémoires et la passation avec les preuves réelles.

**Aucun merge vers `main` ni Release définitive sans accord explicite de Fab.**

## Validations humaines ouvertes

Fab apprécie le résultat courant (« Parfait ») ; cela ne constitue pas une mesure FPS ni une validation exhaustive sur Samsung. Pour la future version : vérifier sur Samsung SM-A576B / Android 16 le logo dans le jeu, l’icône réellement affichée après mise à jour, les masques/cache du lanceur, la rotation et les noms longs pendant un suivi, le confort et la fluidité. Aucun de ces essais futurs n’est déclaré effectué.

## Bilan de cette passation

Source originale contrôlée (format, dimensions, taille, SHA-256 et blob Git), cinq mémoires et passation préparées ensemble. Aucune modification des fichiers exécutables, actifs graphiques du jeu, ressources Android, numéros de version ou binaires. Dernier APK livré : **0.8.7/code16**, avec l’ancienne identité visuelle.
