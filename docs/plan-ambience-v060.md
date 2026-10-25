# Max YutNori 0.6.0 — bol, équipe active et bois gravé

> Exécution : superpowers:executing-plans, avec tests de comportement et revue indépendante finale.

**Objectif :** appliquer la demande Fab autorisée « Ok, code ça » le 25/10/2026.
**Architecture :** conserver le moteur v4 ; isoler le cycle visuel/physique du bol dans bowl-cycle.mjs. Les images fournies restent originales ; les cartes de matériau sont calculées dans le rendu à partir du dessin du bois.
**Technologies :** Three.js 0.186.1, Rapier 0.21.0, Vite 8.3.4, Android WebView.
**Spécification :** ordres-de-mission.md MYN-009 et MYN-012 ; contrat ci-dessous.

## Contrat approuvé
- Corriger le sens gauche/droite du bol, capteur remappé dans les deux paysages Android. Levage au doigt conservé ; pas de mesure de hauteur absolue du téléphone promise.
- Tous les pions et réserves de l'équipe active brillent doucement ; sélection plus forte, aucune pulsation brusque. Encart HUD assorti.
- Après validation physique, conserver les faces/résultats, effacer doucement le bol. Les yut éventuellement dedans rejoignent une zone libre de la table sans changer les faces mémorisées. Pas de collision avec un bol invisible.
- Fin de tour et avant relance (Yut/Mo, capture optionnelle ou lancer invalide) : réapparition, quatre yut rangés par animation, puis lancer autorisé. Pause fige tout ; nouvelle partie annule tout ; pas de changement de règles.
- Titre transparent fourni en HUD ; panorama 2:1 comme décor 360° (interprétation annoncée du « 260° »). Image rectangulaire de bois sur le grand support : aire gauche plateau, droite bol. Cartes de hauteur en creux, normales et rugosité, pas seulement image plate.
- Identité fr.fab.maxyutnori, icône, signature test conservées. 0.6.0/code7, APK et AAB directs. Aucun merge main/Release.

## Risques à vérifier
1. Changement d'équipe, relance et clic précoce ne permettent jamais de lancer pendant le rangement.
2. Pause/reprise et nouvelle partie pendant disparition/rangement ne laissent aucun corps bloqué.
3. Un résultat posé dans le bol ne reste pas flottant une fois le bol effacé.
4. Deux paysages, deuxième doigt et caméra action gardent leur comportement.
5. Décor et gravure : aucune requête externe, chargement vérifié, lisibilité mobile, cartes réellement appliquées et texture non étirée inutilement.

### Task 1: Inclinaison et cycle du bol
Fichiers : tray-motion.mjs, physics.mjs, bowl-cycle.mjs, main.js, scene.js ; tests/table.test.mjs, tests/bowl-cycle.test.mjs.
Interface : BowlCycle(physics), settle(), requestStow(), update(dt,reduced), reset(), ready/phase/opacity. Physics : holdSticks(), placeSticks(poses), releaseSticks(), setTrayEnabled(on), dockTray().
- [x] Test gauche/droite sur rotation réelle et cas cycle (faces préservées, relance, pause via dt0, reset).
- [x] Tests rouges, correction minimale, suite complète verte.
- [x] Intégration : boutons/capteur/auto/IA bloqués pendant rangement ; retour au bol lors du rangement de fin de tour.
- [ ] Commit avec mémoires.

### Task 2: Équipe active, images et matériau gravé
Fichiers : scene.js, materials.js, engraving.mjs, index.html, style.css, web/public/art/* ; tests/engraving.test.mjs, scripts/smoke_ambience.mjs.
Interface : engravingMaps(pixels,width,height) -> height/normal/roughness RGBA ; GameScene.loadArtwork() attend les images locales.
- [x] Tester creux, normale et matière d'un trait sombre sur bois, surface uniforme sans relief fictif.
- [x] Ajouter les assets originaux inchangés ; calculer les maps, respecter le ratio et le sens des UV ; panorama lisible dans la vue libre.
- [x] Équipe active : anneaux doux permanents et faible émission, sélection distincte ; HUD et réserve.
- [ ] Contrôles visuels captures mobile/portrait, suite navigateur complète ; commit avec mémoires.

### Task 3: Revue et livraison Android
Fichiers : versions package/lock/Gradle/index/diagnostic/workflow, docs/revue-v060.md, cinq mémoires, README.
- [x] Revue indépendante des modifications et risques ci-dessus, corriger les défauts importants avec régressions.
- [ ] Tests/build/smoke verts ; API GitHub vers feature/native-webgl-v020 avec lease, CI APK/AAB/lint/signature.
- [ ] Télécharger APK/AAB directs, vérifier SHA/certificat/contenu ; mettre à jour PR brouillon #2 et preuves/mémoires.

## Suivi
Baseline 51/51 tests le 25/10/2026. Branche locale work/ambience-v060 ; branche de livraison inchangée, HEAD distant 8009540.
Pre-flight : Task1 -> Task2 : opacity et phase du bol rendus dans scene.js ; loadArtwork est attendu avant ready, sans bloquer règles/sauvegardes. Task2 -> Task3 : assets binaires téléversés comme blobs SHA, CI inclut les fichiers locaux sans CDN.

Task1 et Task2 réalisés dans 3634c42 ; 61 tests après corrections de revue. Déviations : aucune réduction de périmètre. Levage au doigt conforme à la proposition acceptée ; matériel Samsung restant à valider.
