# MYN-007 — bac mobile et lecture des yut, version 0.4.0

Autorisation : « Super, on y va ». Exécution directe dans la worktree existante work/evolution-v030, sur la branche distante feature/native-webgl-v020. Dernière version livrée 0.3.0. Aucun merge main/Release.

## Conception de réalisation
Bac cinématique partagé entre physique Rapier et rendu Three ; inclinaison relative à la tenue initiale du téléphone et léger mouvement borné sous l'accélération. Bac figé pendant le lancer et en pause. Le résumé du résultat reste immuable ; le bac peut reprendre sa préparation lorsqu’une relance humaine est autorisée. Le capteur ne lance que pendant un tour humain éligible. Table et rebords ont des collisions correspondant au rendu. Lancer plus haut et dirigé vers la zone de table entourant le bac ; résultat lu après repos réel, hors bac désormais autorisé.

Choix annoncé à Fab : noir laqué sur la face plate, cèdre rouge sur la face bombée des bâtonnets. Conserver quatre couleurs d'équipes, leurs symboles et les halos. Repère clair du bâton Back-do sur la face plate. Textures procédurales enrichies (veines, nœuds, grain/relief/roughness), reflets bornés.

HUD supérieur : quatre bâtonnets vus du dessus, faces du dernier lancer stabilisé et indication du résultat. Pas de faces inventées à partir d'un ancien score. Pendant le vol, afficher « En vol » ; un lancer invalide reste signalé. Résumé sauvegardé séparément de la partie, effacé à la nouvelle partie.

Capteur activé par défaut lors de l'entrée dans cette version, puis le choix de désactivation est mémorisé (réglages v3). Autres réglages conservés. Premier nom par défaut Joueur 1 ; migration unique du premier ancien nom exact Fab vers Joueur 1, autres noms inchangés. Version 0.4.0/code 4, identité/icône/signature conservées.

## Étapes
- [x] 1. Tests de retombée sur table, rebord, sommet plus haut, bac cinématique et calibration du capteur. Implémenter physics.mjs et tray-motion.mjs. Suite complète verte.
- [x] 2. Rendu bac synchronisé, deux faces, textures, caméra de lancer, HUD fidèle et noms/réglages migrés. Vérifier géométrie et sauvegarde du résumé.
- [x] 3. Mesures gravité + accélération Android, cycle de vie, callback d'inclinaison ; intégrer aux seules phases de préparation. Smoke : mouvements/silence pause, défaut ON, choix OFF conservé, HUD/visibilité mobile.
- [ ] 4. Revue indépendante globale, corriger importants avec régression ; build/lint APK/AAB, vérifier signature précédente et fichiers bruts ; mettre à jour mémoires et PR.

## Contrôles
Tests physiques vrais WASM, pas de résultat tiré à l'avance. Fallback capteur absent et bouton conservés. Vérifier notamment résultat hors bol valide, caméra à l'apogée, cases non masquées par HUD, valeurs non finies/horodatages/capteur sans gravité, pause/IA/relances. Essai Samsung réel demeure distinct des tests injectés. Publication APK/AAB dans temp/ via CI.
