# Évolution Max YutNori 0.3.0 — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Livrer quatre équipes, des participants mixtes, les halos, les sons de contact, le lancer au mouvement et le rendu amélioré dans un APK hors ligne.

**Architecture:** Conserver le moteur de règles pur et le rendu Three.js/Rapier. Séparer configuration des participants, géométrie des repères et traitement du geste ; le conteneur Android fournit des mesures au jeu local uniquement. Migrer les sauvegardes version 2 sans perte de partie.

**Tech Stack:** JavaScript ESM, Three.js 0.186.1, Rapier 0.21.0, Web Audio, Android Java 17, Vite, node:test et Playwright.

**Spec:** docs/evolution-equipes-capteurs-halos.md, approuvée par Fab le 21/10/2026 (« Oui »).

## Global Constraints
- Deux, trois ou quatre équipes ; une à six personnes par équipe ; quatre pions partagés par équipe.
- Humain/IA, niveau 1–3 et agressivité 0–100 individuels ; relais après le tour complet.
- Conserver les parcours, captures, regroupements, Back-do et variantes existants.
- Aucun flash ; halos fixes si animations réduites ; pause complète des sons et capteurs.
- Hors ligne ; Samsung SM-A576B Android 16 ; minSdk 26 / targetSdk 36.
- Version 0.3.0 / code 3 ; identité fr.fab.maxyutnori et signature 0.2.0 conservées.
- Branche de travail exclusivement, APK direct dans temp/, icône conservée ; aucun merge main ni Release.

## Review Focus
- Ancienne partie avec plusieurs noms et résultats en attente : migration sans perte ni changement du participant actif (tâche 1).
- Pile choisie par son pion du dessus, destinations multiples puis changement de résultat : halo et sélection cohérents (tâche 2).
- Rafales de collisions ou pause au milieu d'un son : volume borné et silence effectif (tâche 3).
- Geste maintenu, reprise après pause, IA ou dialogue : aucun lancer supplémentaire ou involontaire (tâche 4).
- Quatre équipes et six participants avec noms longs sur téléphone paysage : commandes utilisables sans débordement (tâche 5).

---

### Task 1: Équipes, participants et migration
**Files:** web/src/rules.mjs ; nouveau web/src/teams.mjs ; tests/rules.test.mjs ; nouveau tests/teams.test.mjs.
**Interfaces:** createGame({teamCount,teams,captureReroll}), chaque équipe {players:[{name,computer,level,aggression}],member,pieces}; activePlayer(game), playerName(game), isComputer(game). validateSave(input) retourne un état v3 validé ou null, en migrant v2.
- [x] Tester 2/3/4 équipes, rotation complète, relais après résultats conservés, capture de l'équipe 3, IA légale contre tous les adversaires et migration v2 avec member=1 et pending=[4,2].
- [x] Exécuter node --test tests/teams.test.mjs ; constater les échecs attendus (deux équipes et absence de participants individuels).
- [x] Implémenter le format v3, le tour modulo le nombre d'équipes, les captures/IA sur toutes les équipes adverses et la migration.
- [x] Exécuter npm test : toutes les règles existantes et nouvelles passent ; inclure des parties IA complètes à 3 et 4 équipes.
- [x] Commit feat: support four teams and individual participants.

### Task 2: Configuration, halos et matières
**Files:** web/src/main.js, scene.js, style.css, web/index.html ; nouveaux web/src/team-form.js, board-layout.mjs, halos.js ; tests/scene.test.mjs ; scripts/smoke_native.mjs.
**Interfaces:** palette TEAM_STYLES de teams.mjs ; GameScene.sync(state,moves,selected), quality(low,reduced) et frame(dt) conservés. buildSelection(state,moves,selected) produit les positions de sélection/destinations, sans mutation de règles. Formulaire readTeams() produit les teams de la tâche 1.
- [x] Tester sélection depuis réserve, pile, arrivée et raccourcis ; seuls les mouvements fournis génèrent une destination ; aucune sélection sans mouvement.
- [x] Exécuter node --test tests/scene.test.mjs ; constater l'absence du modèle de sélection.
- [x] Construire quatre réserves/arrivées, halos tournants assortis, palette et symboles ; textures bois/tissu en relief, lumière de remplissage et ombres réglables.
- [x] Adapter scores, configuration 1–6 participants et sauvegardes ; nouvelle partie par défaut à quatre équipes ; garder anciennes parties à deux.
- [x] Vérifier les halos réels dans la scène Three sans WebGL, puis captures Playwright ; aucune régression de piles, pause, animations réduites ou dispositions mobiles.
- [x] Commit intégration tâches 2–4 : a061022 local / f729377 distant (regroupement motivé dans le ledger).

### Task 3: Sons de contact
**Files:** web/src/physics.mjs, audio.js, main.js ; nouveaux web/src/impact.mjs, tests/audio.test.mjs ; tests/physics.test.mjs.
**Interfaces:** createPhysics({onImpact}={}), onImpact(strength) avec une intensité bornée ; GameAudio.impact(strength) ; configure(settings) accepte fxVolume.
- [x] Tester qu'un vrai lancer produit des impacts non nuls ; limiteur purement temporel bornant cadence et intensité, silence si coupé/pause.
- [x] Exécuter les tests concernés avant changement et constater les échecs attendus.
- [x] Extraire les collisions Rapier, limiter les voix, synthétiser impacts de bois et son de pose, séparer volume musique/effets.
- [x] Exécuter npm test et le scénario audio navigateur (boucle, pause, volumes).
- [x] Commit intégré avec tâches 2–4 (voir ledger).

### Task 4: Geste et capteur Android
**Files:** nouveau web/src/motion.mjs et tests/motion.test.mjs ; MainActivity.java ; main.js ; web/index.html.
**Interfaces:** MotionThrow.sample({x,y,z,time},eligible) retourne null ou {power,direction:{x,z}} ; reset() ; sensibilité 0–1. Pont Android MaxYutMotion.setEnabled(boolean), available(), onNativeMotion(x,y,z,time), onNativeMotionStatus(available).
- [x] Tester repos de 350 ms avant armement, geste unique, attente de repos après geste, seuils et saturation, refus quand inéligible et remise à zéro en pause.
- [x] Exécuter node --test tests/motion.test.mjs ; constater l'absence du détecteur.
- [x] Implémenter détecteur filtré et pont minimal limité au document local ; capteur linéaire ou gravité retirée, remappage paysage, désinscription native en pause/destruction.
- [x] Lier l'éligibilité aux seuls tours humains, sans lancer en cours/dialogue ; réglage désactivé par défaut, sensibilité mémorisée, statut capteur absent et commandes tactiles disponibles.
- [x] Exécuter npm test et smoke avec capteur injecté seulement par le harnais. Lint Android dans la tâche 5 ; validation physique Samsung explicitement ouverte.
- [x] Commit intégré avec tâches 2–4 (voir ledger).

### Task 5: Intégration, revue et APK
**Files:** scripts/smoke_native.mjs, package.json, package-lock.json, android/app/build.gradle, .github/workflows/android.yml, cinq mémoires FabCopilot.
**Interfaces:** APIs des tâches 1–4 ; sortie temp/Max-YutNori-v0.3.0-debug.apk et preuves native-*.
- [x] Adapter les fixtures à v3 ; couvrir nouvelle partie 4 équipes, équipe mixte, migration v2, halos, volumes, capteur/pause/IA, noms longs et sauvegarde/rechargement.
- [x] Exécuter npm test, npm run build puis npm run smoke ; zéro erreur JS ni requête externe. Examiner captures paysage/portrait.
- [x] Appliquer version 0.3.0/code 3, produire APK et AAB de test ; vérifier identité, signature 0.2.0 et contenu hors ligne sans Unity.
- [x] Revue indépendante globale ; traiter les défauts importants avec régression ciblée ; conserver les constats mineurs dans todo.md.
- [x] Publier fichiers de test bruts via la CI sur la branche existante ; vérifier téléchargement/hash ; actualiser mémoires, plan et preuves. Aucun merge ni Release.
