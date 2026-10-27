# MYN-019 — Implementation Plan — 0.8.5/code14

> For agentic workers: use superpowers:executing-plans for inline implementation; one fresh whole-change review at the end.

**Goal:** agrandir le plateau et compacter le HUD, déplacer le bol à droite, renforcer les lancers contenus et ajouter un interrupteur ×2.
**Architecture:** prolonger Three.js/OrbitControls, Rapier et BowlCycle existants. Un seul repère physique de bol déplacé, bornes de force partagées, caméra cadrée sur la zone réellement disponible. Ne toucher à aucun fichier de panorama.
**Tech Stack:** JavaScript modules, Three.js 0.186.1, Rapier 0.21.0, Vite, WebView Android.
**Spec:** passation explicite de Fab du 27/10/2026 dans cette conversation, réalisation autorisée par « Ok, code ». Synthèse contractuelle dans ordres-de-mission.md.

## Global Constraints
- Branche feature/native-webgl-v020, PR brouillon #2 ; aucune fusion main ni Release définitive.
- Base b0f5b966, source fonctionnelle 0.8.4 ac1763d ; 24 cascades, 5 brumes, 7 nuages préservés.
- Lac absolument figé : shaders, masques, intensité et vitesse ; comparaison graphique existante maintenue.
- Identité fr.fab.maxyutnori, icône et certificat debug existants conservés.
- APK uniquement dans temp/, lien direct vérifié ; aucun nouvel AAB.
- Les cinq mémoires accompagnent chaque changement ; validation physique Samsung reste humaine.

## Review Focus
- Lancer depuis un bol soulevé/incliné : les quatre volumes complets passent le rebord avant désactivation.
- Vol maximal avec collisions entre yut : confinement continu, sans téléportation ni résultat forcé.
- Pause/nouvelle partie/rechargement pendant cycle : aucun état bloqué ni collision réactivée en vol.
- Zoom ×2, pinch, changements de vue et caméra action : état non cumulatif, retour fidèle.
- Petit paysage/portrait et grands noms : zones tactiles accessibles, réserves et résultats visibles.

### Task 1: repère du bol et puissance/confinement Rapier
Files: physics.mjs, throw-power.mjs, motion.mjs, main.js, physics/table/throw-power tests.
Interfaces: TRAY.centerX/centerZ ; POWER min=.3 max=1.5 default=.9 ; migratePower(value,version) ; physics.trayCleared() et bounds diagnostics.
- [ ] Tests RED : extrêmes plus hauts, murs à grande vitesse, repère décalé et migration de force.
- [ ] Implémenter bol physique à x=1.6 (monde x=6.6), murs invisibles de 26 unités et CCD ; départ/cible/rangement cohérents.
- [ ] Tests GREEN : npm test, confinement min/max, sauvegarde force migrée sans toucher au jeu v4.

### Task 2: disparition pendant le vol
Files: bowl-cycle.mjs, main.js, tests/bowl-cycle.test.mjs.
Interface: BowlCycle.launch(), phase flying -> fading -> airborne -> hidden ; déclencheur physics.trayCleared() sur chacun des quatre volumes, marge .15.
- [ ] Tests RED : un seul yut encore sous le rebord empêche la disparition ; rotations, inclinaison, pause et réduit.
- [ ] Retirer les collisions au franchissement sûr, fondu .18 s, conserver les corps dynamiques ; résultat enregistré puis rangement existant.
- [ ] Tests GREEN : vol réel, retour au bol déplacé, restauration de faces, reset/anomalie.

### Task 3: caméra réelle, HUD et interrupteur ×2
Files: camera-framing.mjs, scene.js, comfort.mjs, main.js, style.css, index.html ; tests caméra et scripts/smoke_ergonomics.mjs.
Interface: cadrage normal par vue et aspect utile, camera.zoom indépendant 1/2 ; ×2 ne multiplie jamais le zoom mémorisé du pinch. Caméra action conserve son propre cadrage en compensant la projection, le retour rétablit ×2.
- [ ] Tests RED : toggle aller-retour, vues et pinch, cadrage plus grand, HUD mobile sans chevauchement.
- [ ] Informations tour/joueur/message regroupées à gauche, suppression de l'instruction dupliquée ; bandeaux compacts et cibles principales >=44px.
- [ ] Cadrage normal rapproché, vol cadré selon les positions réelles ; état actif aria-pressed.
- [ ] Tests GREEN : unitaires, navigateur, captures paysage/portrait, tous gestes existants.

### Task 4: non-régression, revue et APK
Files: versions package/lock/Android, workflow android.yml, preuves/docs/mémoires.
- [ ] Version 0.8.5/code14 et workflow assembleDebug/lintDebug uniquement ; comparaison signature 0.8.4.
- [ ] npm test, build, panorama et tous parcours navigateur ; atlas/shaders originaux identiques.
- [ ] Revue indépendante de toute la mission, corriger défauts importants par régression.
- [ ] CI Android, téléchargement APK réel, ZIP/identité/version/assets/signature/SHA vérifiés.
- [ ] Publier les preuves et mettre à jour les cinq mémoires/passation/PR sans merge.
