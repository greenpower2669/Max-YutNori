# Caméra rapprochée0.8.6 — Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans. One coupled camera correction, then a fresh whole-branch review.

**Goal:** Garder le plateau proche pendant toutes les séquences ; ×2 déplace réellement la caméra, sans cumul.
**Architecture:** Focale42° fixe. Ajuster le suivi aux bornes du pion et des destinations, centrer leur étendue et interpoler proche→suivi. Appliquer le facteur ×2 à la distance réelle, avec un plancher de visibilité des points indispensables au suivi et du vol. Les vues libres conservent leur direction/pinch ; désactiver ×2 rend leur distance normale.
**Tech Stack:** Three.js, Node test, Playwright, Android WebView.
**Spec:** MYN-020 dans ordres-de-mission.md ; clarification de Fab du27/10.

## Global Constraints
- Base9ada70e/0.8.5/code14. Version cible0.8.6/code15, identité fr.fab.maxyutnori/signature conservées.
- Panorama/lac et physique/cycle/puissance inchangés. Aucun nouveau système de caméra concurrent.
- APK uniquement dans temp/, PR#2 brouillon. Ni main ni Release.

## Review Focus
- Destinations multiples et réserves opposées : toutes visibles en fin de révélation, sans recul radial disproportionné.
- Pinch pendant prise avec ×2 : maintien sous le doigt et désactivation sans saut vers un ancien cadrage.
- Vue libre : entrée avec ×2, orbit/pinch, changements de vue sans dérive cumulative.
- Passage vol→plateau et coups rapides : retour au vrai cadrage proche, pas à une distance de vol mémorisée.
- Portrait/petit paysage et animations réduites : cadrage utile sans écran vide ni halo inaccessible.

### Task1: Corriger le cadrage et son intégration
**Files:** camera-framing.mjs, chase-camera.mjs, scene.js, comfort.mjs si nécessaire ; tests/camera-framing.test.mjs, tests/chase-camera.test.mjs, scripts/smoke_camera_proximity.mjs et smoke existants ; versions/CI ; cinq mémoires/passation.
**Interfaces:** conserver ChaseCamera.frame(dt,focus,aspect,reduced[,approach]) et dragGain(referenceDistance,aspect) ; ajouter approche physique partagée, sans camera.zoom variable. Les destinations actualisées viennent des halos existants.
- [x] Écrire les régressions géométriques, constater le recul excessif (RED).
- [x] Cadrer pion/destinations par points et centrer le suivi ; rapprocher sans annuler ×2. Run: node --test tests/chase-camera.test.mjs tests/camera-framing.test.mjs ; Expected: PASS.
- [x] Ajouter parcours navigateur ×2 réellement plus proche/FOV constant/retour et sélections répétées, constater RED avant raccord scène.
- [x] Raccorder toutes les vues et réviser seulement les attentes devenues obsolètes du ×2 optique ; conserver gestes et vol. Run: npm test && npm run build ; Expected: PASS.
- [x] Exécuter les parcours ciblés, inspecter captures et relire le diff ; Expected: recul borné et projection1, gestes/retours/vol verts.
- [x] Mettre version0.8.6/code15, mémoires cohérentes, committer ; revue indépendante et corrections nécessaires avec régressions.
- [x] Publier sur la branche autorisée, laisser CI exécuter tous les scénarios et compiler/linter/signature APK.
- [x] Télécharger le vrai APK et vérifier intégrité/version/signature/assets, synchroniser preuves/passation ; livrer le lien direct et les seules validations humaines ouvertes.
