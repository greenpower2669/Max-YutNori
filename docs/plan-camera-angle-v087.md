# Fond du plateau visible —0.8.7 — Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans, tâche couplée puis revue finale indépendante.

**Goal:** Montrer le bord éloigné du plateau en conservant la proximité validée0.8.6.
**Architecture:** Inclinaison plus plongeante du suivi, cible recentrée sur l’étendue plateau+pion/destinations. Partager les limites du vrai rebord et appliquer un plancher de distance aux vues automatiques ; projection42°/zoom1 conservée.
**Tech Stack:** Three.js, Node test, Playwright, Android WebView.
**Spec:** MYN-021 et capture25695.jpg (bord du plateau coupé,×2 et pion de réserve sélectionné).

## Global Constraints
- Base2fd7b6c/0.8.6-code15 ; version cible0.8.7/code16 ; APK uniquement.
- Panorama/lac, physique/cycle/puissance, règles/save/musique/icône/signature gelés.
- PR#2 brouillon ; ni main ni Release.

## Review Focus
- Les quatre réserves et destinations opposées : fond entier visible en fin de séquence, distances proches.
-×2 avec pincement pendant prise : maintien sous le doigt, désactivation et retours sans dérive.
- Vue générale/de dessus×2 : plateau entier dans l’espace utile, vraie approche limitée par le cadre nécessaire.
- HUD long et rotations paysage/portrait : les cases éloignées restent hors bandeaux.
- Retour de vol et sélection automatique : cadre rétabli ; yut et cycle du bol inchangés.

### Task1: Orientation et cadre du plateau
**Files:** camera-framing.mjs, chase-camera.mjs, scene.js ; tests de caméra ; scripts/smoke_camera_proximity.mjs et smoke_ergonomics.mjs ; versions/CI et cinq mémoires/passation.
**Interfaces:** limites du plateau partagées ; approachFrame(frame,factor,minDistance) ; ChaseCamera conserve ses appels et le pinch ; ajout diagnostic des sondes du rebord.
- [x] Écrire une projection du rebord réel pour chaque réserve et×2 ; vérifier RED sur0.8.6.
- [x] Inclure rebord et pions dans le fit, redresser l’angle, recentrer la cible ; préserver des distances bornées et les gestes. Run: npm test ; Expected:PASS.
- [x] Régression navigateur de25695 : rebord/cases éloignés dans les marges utiles au cadrage stabilisé, Plateau/top et suivi, normal/×2 ; vérifier RED puis GREEN.
- [x] Adapter les seules attentes de demi-distance rendues obsolètes par la visibilité du plateau, conserver l’approche physique et son retour. Vérifier prises/pinch/retarget/vols.
- [x] Build Web, captures et revue indépendante ; corriger les problèmes importants par régressions.
- [x] Publier sur branche autorisée, CI complète/Android, télécharger et vérifier l’APK ; incrémenter version/code.
- [x] Livrer lien APK direct et preuves, actualiser cinq mémoires/passation ; essais Samsung explicitement ouverts.
