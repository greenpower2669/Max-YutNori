# Max YutNori — état de travail 0.3.0

Mission active MYN-006, conception approuvée le 21/10/2026. Branche `feature/native-webgl-v020`, PR brouillon #2. Dernier APK livré : 0.2.0 ; 0.3.0/code 3 en vérification.

## Réalisé
- [x] 2–4 couleurs/équipes, quatre pions par équipe, 1–6 participants humains/IA et relais au tour complet.
- [x] Migration des parties v2, conservation du joueur actif, des résultats et d'une sauvegarde v2 intacte.
- [x] Halo tournant du pion/groupe sélectionné et des destinations, fixe en animations réduites.
- [x] Sons de contact physique et volumes séparés, musique originale en boucle.
- [x] Capteur Android optionnel, sensibilité, repos avant geste ; arrêt en pause, dialogue, IA et lancer.
- [x] Matières/lumières, présentation quatre équipes et noms longs en paysage/portrait.
- [x] 25 tests unitaires et 14 scénarios navigateur locaux ; zéro erreur JS/requête extérieure.
- [x] Version 0.3.0/code 3 et pipeline APK/AAB préparés, clé 0.2.0 exigée.

## En cours
- [ ] Corriger l'attente fixe du test des halos et borner le temps initial d'animation ; relancer le smoke.
- [x] Relecture indépendante : son de victoire corrigé (MYN-D010), aucun autre défaut important.
- [ ] Compiler/linter Android ; vérifier signatures APK/AAB, mise à jour 0.2.0 et contenu hors ligne.
- [ ] Exposer les fichiers bruts, vérifier téléchargement/hash, actualiser PR et cinq mémoires.

## Après livraison
- [ ] [FAB] Samsung SM-A576B Android 16 : installation en mise à jour, lisibilité/halo, geste et sensibilité en paysage, sons prolongés, pause/reprise et partie complète.
- [ ] [AGENT] Traiter les retours du téléphone réel.
- [ ] [MINEUR DIFFÉRÉ] Durcir encore les sauvegardes artificiellement falsifiées au-delà des invariants déjà contrôlés.
- [ ] [PUBLICATION ÉVENTUELLE] Clé durable de publication Play si Fab la demande ; les paquets actuels sont signés pour les tests.

Aucune fusion main ni Release définitive. Historique 0.1.0/0.2.0, empreintes et incidents dans brain.md, ordres-de-mission.md et debughistorical.md. L'APK 0.2.0 reste disponible dans temp/ sur la branche.
