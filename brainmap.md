# Carte technique — Max YutNori moteur0.8.8 / PWA0.1.0 build2

Les entrées techniques historiques ci-dessous conservent les dépendances et causes/conséquences ; les blocs explicitement datés décrivent leur version. La carte actuelle résumée fait autorité. Tous les textes originaux sont conservés sans perte dans sauvegarde.md.

## Navigation actuelle
- `web/index.html`, `style.css`, `main.js` : HUD/dialogues/entrées, état de partie et orchestration ; `window.maxYutDiagnostic()` en lecture seule, `__gameReady` après art/physique.
- `rules.mjs` : règles pures, migrations v2/v3→v4, tours, captures/piles, IA ; `teams.mjs`/`team-form.js` : participants et équipes.
- `physics.mjs`, `yut-geometry.js`, `bowl-cycle.mjs`, `throw-power.mjs`, `throw-view.mjs`, `motion.mjs`, `tray-motion.mjs`, `impact.mjs` : collisions, faces, cycle du bol et mouvements ; la physique n'est jamais simulée par un résultat prédéterminé.
- `scene.js`, `camera-framing.mjs`, `chase-camera.mjs`, `comfort.mjs` : vues, cadrage, séquences et zoom ; `pawn-input.js`, `pawn-motion.mjs`, `board-layout.mjs`, `halos.js` : picking/drag, supports/piles/halos.
- `materials.js`, `engraving.mjs`, `living-panorama.js`, `panorama-zones.mjs`, `low-mist.mjs`, `annotated-zones.mjs` : matières/gravure, effets localisés et protection lac/berges. Fixtures `scripts/fixtures/` et `verify_panorama.mjs` : pixels réels WebGL.
- `audio.js` : Audio MP3 local + sons Web Audio ; `fresco.js` : zoom/glissement des règles.
- `vite.config.js` : build commun `web` → `web-dist/game`, base relative ; Android inclut `web-dist` via Gradle.
- `android/app/src/main/java/fr/fab/maxyutnori/` : MainActivity et MotionSensors, interception HTTPS locale, Range et pont MaxYutMotion. Manifest/icônes/Gradle dans android/app ; signature/identité selon ordres-de-mission.md.
- `scripts/smoke_native.mjs` et suites importées : 56 parcours navigateur ; `tests/*.test.mjs` : 96 cas unitaires au socle ; `.github/workflows/android.yml` : builds sur branche historique ; `.github/workflows/release-android.yml` : publication du binaire validé lors de la clôture sur main.
- `docs/branding-assets.json`, `prepare_branding.py`, `verify_branding.py`, `verify_native_apk.py`, `docs/verification/verify-delivery-v088.py` : provenance et intégrité logos/APK. `temp/native-*` : preuves du build référencé par native-build-info.txt ; `release-android.json` : version/empreinte/source de la clôture.

## Références techniques détaillées conservées

- Source originale : `docs/assets/25701-logo-original.jpg` ; dérivés/hashes : `docs/branding-assets.json`.
- Générateur de développement `scripts/prepare_branding.py` (Pillow, aucune dépendance du jeu/CI), sérialisation PNG validée en mémoire puis remplacement atomique.
- `scripts/verify_branding.py` : source SHA figé, sept PNG complets/chunks/CRC/IEND, tailles et hashes, avant compilation dans la CI.
- HUD `web/index.html`/CSS final : `max-yutnori-logo.png` 256² affiché44² + nom texte ; même PNG favicon. Ancien titre retiré des actifs.
- Android : manifeste → @mipmap/ic_launcher pour icon/roundIcon ; XML mipmap-anydpi-v26 + foreground PNG432² et fond jade ; cinq PNG48/72/96/144/192. Ancien vecteur retiré.
- `smoke_branding.mjs` via ambience : chargement/ratio/commandes/hauteur/rotation à844,390,1000px. Suite complète56parcours.
- `verify_native_apk.py` : assets/PNG complets/ressources/densités. `docs/verification/verify-delivery-v088.py` : vrai APK et pixels des sept dérivés, manifeste binaire, signature, SHA et rapports CI. Preuve `temp/native-delivery-verification-v088.json`.
- Plan `docs/plan-logo-v088.md`, revue/correctif/limites `docs/revue-v088.md`, passation `docs/passation-myn022-logo.md`.

## Précision de format des images historiques — MYN-022

Les trois assets historiques nommés moonlit-panorama.png, rules-fresco.png et engraved-table.png sont réellement des JPEG. Ils restent byte-identiques ; seul le nouveau logo est un PNG. Le contrôle de structure PNG ajouté était trop large : prévol ZIP constitué des vrais assets observé RED (Invalid PNG signature), puis GREEN en limitant cette exigence au nouveau logo. Contrôle byte-identique des anciens assets maintenu. Aucun changement du produit ; CI relancée sur ce correctif du vérificateur.

## Garde-fou d’assets MYN-022

`scripts/verify_branding.py` vérifie source approuvée, structure complète/chunks/CRC/IEND, dimensions et SHA des sept PNG ; appelé avant npm test/build dans la CI. Générateur atomique via tampon PNG validé puis remplacement ; `verify_native_apk.py` contrôle aussi les chunks Web. `docs/verification/verify-delivery-v088.py` compare les pixels compilés. Voir MYN-D043 et `docs/revue-v088.md`.

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

- `camera-framing.mjs` : `boardBounds(centerX)` prépare une fois 128 points statiques du vrai rebord (rayon 3,72, hauteurs −0,26 et 0,18). `fitDistance` réutilise son vecteur relatif. `approachFrame(frame,factor,minDistance)` respecte le cadre indispensable tout en déplaçant réellement la caméra.
- `chase-camera.mjs` : inclinaison 15,6° depuis la verticale ; cible sur l’étendue plateau+pion/destinations. Marge du fit 8 %, marge normale supplémentaire 4 % pour éviter un recul cumulé excessif. Le pincement privilégie progressivement le pion sous le neutre ; phase, sélection automatique et gain de glissement conservés.
- `scene.js` : minimum géométrique Plateau/de dessus en automatique ; la limite de dessus suit le pincement manuel. Vue libre et bol conservent leur logique 0.8.6 ; le vol garde son recul de sécurité. Marges HUD calculées par `main.js` inchangées.
- Tests : régressions unitaires de rebord, distance et continuité du pinch ; `smoke_camera_angle.mjs` reproduit 25695.jpg en vrai navigateur. `smoke_camera_proximity.mjs` vérifie rebord, retours, quatre vues et état ×2 ; gestes/retarget/vols de la suite conservés.
- Documentation/preuves : `docs/plan-camera-angle-v087.md`, `docs/revue-v087.md`, `docs/verification/verify-delivery-v087.py`, `temp/native-delivery-verification-v087.json`.


Panorama/lac 0.8.4 et physique/cycle/puissances 0.8.5 inchangés. Onze fichiers protégés (dont les quatre PNG) comparés octet pour octet à la base 0.8.6 ; lac testé aux cinq phases à delta pixel nul et sondes terrestres stables. Les 24 cascades, brumes, nuages, masques et formules d’ondulation restent protégés. Règles, sauvegarde, musique, icône, identité et signature conservées. Aucun merge main ni Release définitive.

# Carte MYN-021 — fond du plateau

ChaseCamera.routeFrame ne cadre que les empreintes pion/destinations ; sa cible est décalée vers les réserves et le bord arrière du plateau sort de l’image. camera-framing.mjs partage128 points statiques du rebord cylindrique et réutilise un vecteur de calcul ; scene.js applique leur distance minimale aux vues Plateau/top (pinch top indépendant), chase-camera.mjs les inclut dans le suivi avec inclinaison15.6° depuis la verticale et cible recentrée. Les marges HUD restent celles de main.js ; physique et panorama gelés. Plan docs/plan-camera-angle-v087.md.

- `camera-framing.mjs` : `approachFrame` change la distance 3D, à focale42°/projection1 ; `ViewZoom` garde l’état et la transition1↔2, sans cumul. `boardFrame` reste le cadre normal rapproché.
- `chase-camera.mjs` : `routeFrame` ajuste des empreintes réelles ±.42 et hauteur.35 au cadre utile, cible au centre de leur étendue ; `frame` interpole proche/latéral/révélation/suivi. `followDistance`/`dragGain` prennent le facteur physique et le pincement en compte. Le cadre essentiel limite ×2 quand nécessaire.
- `scene.js` : cadre physique dans les quatre vues, aucune modification de `camera.zoom`. `sync` réassocie focus/destinations à la sélection automatique ; vue libre applique le rapport ancien/nouveau facteur et ses bornes normales/×2. `flightBounds` et le recul préventif gardent les quatre yut à l’écran, retour aux cadres normaux après vol.
- `main.js` : diagnostics distinguent facteur souhaité, projection1 et FOV42 ; commande accessible×2, règles et state/save inchangés. Texte d’aide décrit le rapprochement réel.
- Tests : `camera-framing.test.mjs`, `chase-camera.test.mjs`, `smoke_action.mjs`, `smoke_camera_proximity.mjs` raccordé à `smoke_ergonomics.mjs`. Distances physiques, prises×2/pinch/désactivation, orbit/pinch/réentrée libre, sélections répétées/retours et sélection automatique après coup.
- Livraison : `docs/verification/verify-delivery-v086.py` contrôle l’APK réel ; preuves dans `temp/native-delivery-verification-v086.json`. Revue `docs/revue-v086.md`, plan `docs/plan-camera-v086.md`.

Panorama et lac0.8.4 intégralement conservés :24 cascades, brumes et nuages ; formules de réfraction, intensité/vitesse et masques inchangés. Physique/puissances/cycle du bol0.8.5, règles, sauvegarde, musique, icône et signature préservés. Onze fichiers protégés comparés octet pour octet à la base ; tests WebGL des cinq phases du lac à delta0, sondes terrestres stables. Aucun merge main ni Release définitive.

# Carte MYN-020 — diagnostic et réalisation

camera-framing.mjs : cadrage géométrique partagé et approche physique. chase-camera.mjs : trajectoire proche/latérale/révélation/suivi, centrage des points réellement utiles. scene.js : application à toutes les vues, ×2 à projection constante, OrbitControls/pinch et retour après vol ; sync réassocie focusPawn et destinations à la sélection courante, y compris automatique. Vue libre : distance normale bornée à1.35×le cadrage proche et limites divisées par le facteur physique. Panorama et physique hors périmètre, fichiers gelés. Plan docs/plan-camera-v086.md.

# Point d'entrée actif — MYN-019 / 0.8.5 — 27 octobre 2026

- `physics.mjs` : repère de table préservé, bol physique `TRAY.centerX=1.6` (monde6.6), murs hauts extérieurs épais, CCD et sous-pas1..8 si vitesse>20 ; sinon120Hz. `trayCleared()` examine chaque sommet des quatre convexes sous leur rotation contre le plus haut point du rebord + marge.
- `bowl-cycle.mjs` : ready → flying → fading(.18s) → airborne → hidden ; aucun mouvement forcé en vol, désactivation du bol/socle au franchissement sûr, rangement cohérent avec l'origine déplacée. Chemin de repli pour lancer anormal préservé.
- `throw-power.mjs` : plage .3..1.5, défaut .9, migration `powerVersion=2`. `main.js` raccorde slider/gestes/capteur/auto/IA et sauvegarde existante.
- `camera-framing.mjs` : cadrage de points réels et interrupteur non cumulatif ; `scene.js` applique projection ×2, compensation caméra action et recul préventif lors des vols. `comfort.mjs` conserve le pinch de dessus.
- `index.html`/`style.css` : titre/×2, statut à gauche, équipes1–2 gauche/3–4 droite, colonnes de commandes adaptées à la phase ; zone de choix bornée/défilable, toutes les commandes de lancer conservées. `smoke_ergonomics.mjs` couvre4vues, vrai pinch, action, migration, formats, vols et HUD chargé.
- Panorama et atlas : fichiers 0.8.4 inchangés ; ancienne carte128Kio + carte512Kio, une passe. Référence du lac et cinq phases toujours à delta0.
- Preuves : `docs/revue-v085.md`, `docs/ergonomics-progress.md`, `docs/verification/verify-delivery-v085.py`, `temp/native-delivery-verification-v085.json`.

## MYN-019 — carte de travail 0.8.5

CI initiale40431151100 arrêtée avant Android : le test a détecté le mode automatique masqué en phase de déplacement. Commandes permanentes rétablies et contrôle de visibilité ajouté ; nouveau passage complet à lancer. Aucun nouvel APK livré.

physics.mjs porte le repère du bol, le confinement Rapier et le test des volumes au-dessus du rebord ; bowl-cycle.mjs gère fondu en vol et rangement. throw-power.mjs centralise plage et migration. camera-framing.mjs/scene.js portent cadrage réel et ×2 ; main.js synchronise réglages/DOM et cycle. index.html/style.css portent les informations à gauche et les bandeaux. Murs hauts épaissis vers l’extérieur sans rétrécir la surface ; sous-pas1..8 si vitesse>20, sinon120Hz. Cadrage général vérifié contre la caméra0.8.4 ; marges du vol distinctes de celles du plateau. Fichiers panorama et atlas0.8.4 gelés. Tests et livraison : docs/plan-ergonomics-v085.md.

## Point d'entrée actif — MYN-018 / 0.8.4 (26/10/2026)

- **État** : 0.8.4/code13 livrée sur `feature/native-webgl-v020`, PR brouillon #2 ; [CI 40377936315](https://github.com/greenpower2669/Max-YutNori/actions/runs/40377936315) réussie ; APK/AAB dans `temp/` au commit `a9c79276e64d2216ab7711843ba8778066f47c56`. Aucun merge main.
- **Tiroir animations** : `docs/plan-annotated-effects-v084.md`, `web/src/annotated-zones.mjs` (24 cascades roses, 5 bandes violettes, 7 turquoise), `web/src/living-panorama.js`. Référence images 25663.jpg et 25651.jpg.
- **Tiroir non-régression lac** : `scripts/fixtures/panorama-v083-reference.js`, `scripts/verify_panorama.mjs` ; cinq phases testées, delta pixel nul sur le lac. Ondulation 0.8.3 et anciens embruns à préserver impérativement.
- **Tiroir historique/anomalies** : `debughistorical.md`, `docs/water-only-progress.md`. Distinguer zones masquées et couverture sémantique réelle ; ancien masque d'ellipse centré sur forêt.
- **Travail restant** : `todo.md` : validation Samsung de la totalité des cascades, brumes, vue 360°, berges et FPS/chauffe. Les archives ci-dessous ne sont pas l'état courant.

### Carte archivée : 0.8.3 — MYN-017

Architecture courante : living-panorama.js utilise lakeColor/fallColor sur RGB linéaire ; lac = intérieur A>.98 et matière autorisée. Le prélèvement est contrôlé par le même masque et sa couleur, avec inversion correcte de la composante y dans sourceP. Les offsets de ciel sont retirés, la densité B reste animée. panorama-zones.mjs exclut aussi les cimes du premier plan. Fixture distortion() compare au même temps la matière réelle et un témoin modifiant uniquement sampleImage(uv+offset*strength) en sampleImage(uv), ROI 4×4. verify_panorama.mjs contrôle huit points × cinq phases et l’eau positive ; les références historiques restent documentées mais l’ancien composite n’est plus imposé.

## MYN-017 — déplacement UV et prélèvement aux berges

Correction locale : lakeColor/fallColor sur RGB linéaire ; A>.98 pour le lac au pixel courant et au pixel prélevé, cimes du premier plan exclues. offsets de ciel retirés, densité conservée ; déplacement de chute distinct de ses mousse/embruns. Fixture distortion() compare le même temps avec/sans seul prélèvement UV déplacé, ROI 4×4.

living-panorama.js calcule des offsets eau/chutes/ciel puis prélève l’image déplacée. panorama-zones.mjs fournit un masque de lac approché ; un contrôle limité au masque d’arrivée ne suffit pas à garantir que le pixel prélevé vient aussi de l’eau. La QA doit isoler le déplacement UV au même temps, indépendamment des changements de brume/lumière.

Architecture actuelle MYN-016 : panorama-zones.mjs → panoramaMasks(u,v), contours statiques de vallées/ciel/eau, marges d’îlots et fondu avant les chutes ; low-mist.mjs → createLowMistTexture(), R bruit et G/B/A masques, 256×128 préparé une fois ; living-panorama.js → fallMask conserve la distance minimale sans répéter length, eau historique conservée dans les chutes et mix progressif à l’extérieur, deux densités partagées par brume/ciel. QA : panorama-v081-reference.js et panorama-v081-noise.mjs figent 0.8.1 ; compareReference utilise 16×16 pour les cœurs et 4×4 sans brume pour isoler le raccord d’eau. verify-delivery-v082.py contrôle les vrais binaires et leurs preuves.

## Carte MYN-016 — travail en cours


MYN-016 : scripts/fixtures/panorama-v081-{reference.js,noise.mjs} figent les sources 0.8.1 seulement pour QA ; verifier compare deux temps/six cœurs. 14 sondes isolent séparément G/B/A ; le diagnostic des masques est exporté. La carte statique atténue la brume avant les régions de chutes pour éviter une découpe visible.

web/src/panorama-zones.mjs (à créer) : contours en coordonnées du panorama original ; low-mist.mjs : bruit R et masques G/B/A brume/ciel/eau préparés une fois ; living-panorama.js : utilisation des masques, six régions des chutes préservées par calcul de référence. Plan docs/plan-panorama-zones-v082.md.

## Carte MYN-015 — 0.8.1 en cours
low-mist.mjs prépare une densité/masque périodiques ; living-panorama.js les défile en une passe existante, dans les vallées hors cascades. Vérification réelle via fixture panorama et tests de texture/lifecycle ; CI et vérificateur de livraison 0.8.1 à produire.

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

## Point de vérification 0.5.0 — 23/10/2026
0.5.0 : chase-camera.mjs (séquence, cadrage, zoom, gain de suivi), pawn-input.js (propriété des pointeurs), scene.js (projection et brouillard adapté), rules.mjs/teams.mjs (laps), main.js (v4/UI/annulation). Tests ciblés scripts/smoke_action.mjs importés dans smoke_native.mjs. Revue docs/revue-v050.md.

## 23/10/2026 — Réalisation autorisée 0.5.0
Réalisation 0.5.0 : rules.mjs/teams.mjs, nouveaux chase-camera.mjs/pawn-input.js, scene.js/main.js, physics.mjs. Tests sous tests/ et scripts/smoke_native.mjs.
Plan docs/plan-action-v050.md ; suivi docs/action-progress.md.

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

0.4.1 : SUPPORT et TRAY centralisent les dimensions ; advanceTray calcule la hauteur de sécurité à chaque pas contre table et socle. GameScene capture le doigt sur le bac en vue Bol, transmet begin/move/end et libère à pointercancel, changement de vue ou pause. main.js utilise trayEligible pour préparer même sans capteur ; motionEligible exclut trayGrab. TEAM_STYLES distingue color (matière), css/glow (accents lisibles), finish et ink.

## MYN-024 — modules Web/PWA
web/pwa/version.mjs : semver, validation schéma/channel/commit, ordre build/version, sélection GitHub et contrôle hôte ; tests/pwa-version.test.mjs. web/pwa/sw-template.js : cache complet par hash du build, Range audio et activation explicite mono-fenêtre ; tests/pwa-worker.test.mjs par vrai runtime JS isolé. web/pwa/client.js et pwa.css : surcouche Pause/installation/plein écran/versions, sans modifier main.js. scripts/build-pwa-plugin.mjs : injection uniquement en mode web, manifest et liste exhaustive des assets, métadonnées internes compilées et worker. web-release.json : version PWA/build ; package.json : moteur. Images officielles web/public/pwa ; caméra/physique/panorama inchangés.

Transport musical Web : plugin mode web transforme uniquement le constructeur Audio en createWebMusic (web/pwa/music.mjs), génère audio/music-parts.json et fragments8Mio dans pwa-dist, retire seulement la copie MP3 géante du déploiement. Le module retourne immédiatement un Audio, prépare son Blob intégral et garde play/pause cohérents pendant le chargement. tests/pwa-music.test.mjs vérifie bytes et corruption ; original Android/audio.js inchangé.

MYN-D046 : checkVersions accepte l'état réseau, par défaut navigator.onLine ; sortie offline sans fetch. tests/pwa-version.test.mjs reproduit des réponses disponibles malgré online=false ; smoke_pwa capture en échec online/statuts/gameReady. web-release build2 remplace le déploiement différent build1 après vérification.

CI compatibilité : détection d'identité des entrées Web vs6551730 pour réutiliser les15 parcours réussis40592283542 lors d'un seul changement de workflow/docs. Cache de clé debug conservé ; si inaccessible sur branche sœur, init Gradle éphémère désactive seulement la signature de la construction de contrôle, jamais dans les sources. Rapport test-results/android-compatibility.json distingue explicitement signé/non signé. Aucun nouveau paquet de contrôle publié.

Preuves finales et installation : docs/passation-web-pwa-v010.md, docs/web-pwa-publication.md, docs/revue-web-pwa-v010.md et docs/verification/web-pwa-source-integrity.json. Le déploiement publié vient de6551730, sans fusion PWA vers main.

CI finale40593243077 :110 tests/deux builds/intégrité moteur et Android, réutilisation explicite des15 parcours40592283542 sur les mêmes entrées, assemblage APK/AAB unsigned et lint ; rapports dans artefacts Actions et docs/verification/web-pwa-source-integrity.json.

MYN-025 : sw-template.js/cacheableResponse copie uniquement les réponses redirigées avant cache.put ; nouvelle Response sans redirected, mêmes bytes/MIME/statut. tests/pwa-worker.test.mjs utilise un vrai serveur302→200 ; smoke_pwa.mjs impose /index.html→/ et teste la réouverture offline. Workflow ajoute une sonde HTTPS publique des URL finales (diagnostic, aucun secret). Source et déploiement build3 à compléter après preuve CI.

Preuve MYN-025 : source Web4a4811790fbeff8ca038ec05f7124df0732a8b4a ; source hébergement edd60a821422b2fc09100d365819445fc75d8a49 ; version appgprj_6ae11aa948088191a7b93cc0bbfa9652~appgver_4053619e28c48191ae2ef1679365fc65 ; déploiement public appgdep_6ae126ce9b14819182b5e5c4c9b527d9 succeeded. CI40595523867 :111/16, Android unsigned/lint. Revue docs/revue-pwa-reopen-v003.md ; preuve source dans docs/verification/web-pwa-source-integrity.json.
