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
- [x] Tests RED : extrêmes plus hauts, murs à grande vitesse, repère décalé et migration de force.
- [x] Implémenter bol physique à x=1.6 (monde x=6.6), murs invisibles de 26 unités et CCD ; départ/cible/rangement cohérents.
- [x] Tests GREEN : npm test, confinement min/max, sauvegarde force migrée sans toucher au jeu v4.

### Task 2: disparition pendant le vol
Files: bowl-cycle.mjs, main.js, tests/bowl-cycle.test.mjs.
Interface: BowlCycle.launch(), phase flying -> fading -> airborne -> hidden ; déclencheur physics.trayCleared() sur chacun des quatre volumes, marge .15.
- [x] Tests RED : un seul yut encore sous le rebord empêche la disparition ; rotations, inclinaison, pause et réduit.
- [x] Retirer les collisions au franchissement sûr, fondu .18 s, conserver les corps dynamiques ; résultat enregistré puis rangement existant.
- [x] Tests GREEN : vol réel, retour au bol déplacé, restauration de faces, reset/anomalie.

### Task 3: caméra réelle, HUD et interrupteur ×2
Files: camera-framing.mjs, scene.js, comfort.mjs, main.js, style.css, index.html ; tests caméra et scripts/smoke_ergonomics.mjs.
Interface: cadrage normal par vue et aspect utile, camera.zoom indépendant 1/2 ; ×2 ne multiplie jamais le zoom mémorisé du pinch. Caméra action conserve son propre cadrage en compensant la projection, le retour rétablit ×2.
- [x] Tests RED : toggle aller-retour, vues et pinch, cadrage plus grand, HUD mobile sans chevauchement.
- [x] Informations tour/joueur/message regroupées à gauche, suppression de l'instruction dupliquée ; bandeaux compacts et cibles principales >=44px.
- [x] Cadrage normal rapproché, vol cadré selon les positions réelles ; état actif aria-pressed.
- [x] Tests GREEN : unitaires, navigateur, captures paysage/portrait, tous gestes existants.

### Task 4: non-régression, revue et APK
Files: versions package/lock/Android, workflow android.yml, preuves/docs/mémoires.
- [x] Version 0.8.5/code14 et workflow assembleDebug/lintDebug uniquement ; comparaison signature 0.8.4.
- [x] npm test, build, panorama et tous parcours navigateur ; atlas/shaders originaux identiques.
- [x] Revue indépendante de toute la mission, corriger défauts importants par régression.
- [x] CI Android, téléchargement APK réel, ZIP/identité/version/assets/signature/SHA vérifiés.
- [x] Publier les preuves et mettre à jour les cinq mémoires/passation/PR sans merge.

## Résultat

Source `89ad97d4ed659aab3e03c68289348466bcfdf252` ; binaires `b7355bf77fb9637d325a59cb5edd290e618522b0` ; [CI 40432711889](https://github.com/greenpower2669/Max-YutNori/actions/runs/40432711889) **réussie**. Version **0.8.5/code14**, `fr.fab.maxyutnori`. **89/89 tests unitaires et 50/50 parcours navigateur hors ligne** ; aucune erreur JavaScript ni requête externe. Rendu WebGL : lac inchangé aux cinq phases de référence, sondes terrestres fixes ; panorama 0.8.4 conservé. Build/lint Android et signature APK v2 validés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/b7355bf77fb9637d325a59cb5edd290e618522b0/temp/Max-YutNori-v0.8.5-debug.apk) — 62,499,852 octets ; SHA-256 `578d54da69f41cd0ee7bdcad871bb7ac4bea37a87eeef5c21ea217119b603fe6`. Certificat extrait du vrai APK téléchargé et identique à 0.8.4 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. ZIP, manifeste Android binaire, icône, quatre PNG et musique MP3 vérifiés. **APK uniquement**, aucun nouvel AAB.

**À valider par Fab sur Samsung SM-A576B Android 16** : mise à jour réelle, lisibilité du cadrage et des pions, gestes/pinch/×2/caméra action, bol à droite et retour des quatre yut, puissance et rebonds, esthétique de toutes les 24 cascades/brumes/nuages, berges immobiles et FPS/chauffe. La capture 25678.jpg n'était pas disponible dans ce checkout : la disposition décrite par Fab a guidé le travail, la correspondance visuelle exacte reste humaine. Aucun test physique Samsung ni mesure FPS revendiqué. Aucun merge `main` ni Release définitive.
