# Max YutNori — état de travail 0.3.0

Mission livrée MYN-006 ; retour actif MYN-007 à préciser. Branche `feature/native-webgl-v020`, PR brouillon #2. Version livrée pour test : 0.3.0/code 3.

## Réalisé
- [x] 2–4 couleurs/équipes, quatre pions par équipe, 1–6 participants humains/IA et relais au tour complet.
- [x] Migration des parties v2, conservation du joueur actif, des résultats et d'une sauvegarde v2 intacte.
- [x] Halo tournant du pion/groupe sélectionné et des destinations, fixe en animations réduites.
- [x] Sons de contact physique et volumes séparés, musique originale en boucle.
- [x] Capteur Android optionnel, sensibilité, repos avant geste ; arrêt en pause, dialogue, IA et lancer.
- [x] Matières/lumières, présentation quatre équipes et noms longs en paysage/portrait.
- [x] 25 tests unitaires et 14 scénarios navigateur locaux ; zéro erreur JS/requête extérieure.
- [x] Version 0.3.0/code 3 et pipeline APK/AAB préparés, clé 0.2.0 exigée.

## Vérifications de livraison terminées
- [x] Corriger l'attente fixe du test des halos et borner le temps initial d'animation ; relancer le smoke.
- [x] Relecture indépendante : son de victoire corrigé (MYN-D010), aucun autre défaut important.
- [x] Compiler/linter Android ; vérifier signatures APK/AAB, mise à jour 0.2.0 et contenu hors ligne.
- [x] Exposer les fichiers bruts, vérifier téléchargement/hash, actualiser PR et cinq mémoires.

## Après livraison
- [ ] [FAB] Samsung SM-A576B Android 16 : installation en mise à jour, lisibilité/halo, geste et sensibilité en paysage, sons prolongés, pause/reprise et partie complète.
- [ ] [AGENT] Traiter les retours du téléphone réel.
- [ ] [MINEUR DIFFÉRÉ] Durcir encore les sauvegardes artificiellement falsifiées au-delà des invariants déjà contrôlés.
- [ ] [PUBLICATION ÉVENTUELLE] Clé durable de publication Play si Fab la demande ; les paquets actuels sont signés pour les tests.

Aucune fusion main ni Release définitive. Historique 0.1.0/0.2.0, empreintes et incidents dans brain.md, ordres-de-mission.md et debughistorical.md. Les versions de test précédentes restent disponibles dans temp/ sur la branche.

## Livraison vérifiée
[APK 0.3.0 direct](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.3.0-debug.apk) · [AAB de test](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.3.0-debug.aab).

CI [39651736580](https://github.com/greenpower2669/Max-YutNori/actions/runs/39651736580), source `3ede60382b264521fa1f5b403ceabccaf41cee4b`, binaire `1fe4c9bd8786f21de8962229d3c88eb481176712`. 25/25 tests unitaires et 14/14 scénarios navigateur hors ligne ; aucune erreur JS ni requête extérieure. Compilation APK/AAB et lint Android réussis ; APK signé v2, mêmes certificats APK/AAB et 0.2.0. Téléchargements bruts HTTP 200 et SHA-256 comparés.

APK : 7,933,969 octets, SHA-256 `fa0d4599b52f660e6e2d293db9a8c87ff834afc22d62d97155ed1d59df618e3e`. AAB : 7,607,974 octets, SHA-256 `98cff74fd899263dd146144341f8f463a5f41f3a1eaf13ba9ffa908ea7e532c7`.

Installer par-dessus 0.2.0 ; signature conservée, sans désinstallation. Réglages du capteur disponibles dans « Lancer au mouvement ». L'AAB est de test, non destiné à une publication Play en l'état.

## MYN-007 — Retour de Fab, à réaliser après cadrage
- [x] Auditer bac, limites physiques, capteur, couleurs, textures et nom initial.
- [ ] Préciser si noir laqué/cèdre rouge concernent les faces des bâtonnets ou les équipes.
- [ ] Relier le mouvement visible du bac au téléphone et aux collisions ; activer le capteur par défaut avec commande d'arrêt et respect des pauses.
- [ ] Lancers plus hauts et retombées sur une vraie surface de table ; rebords à intégrer au cadrage et caméra gardant le lancer visible.
- [ ] Afficher en haut du HUD quatre yut alignés vus du dessus, représentant les faces réelles du lancer.
- [ ] Remplacer le nom initial « Fab » par « Joueur 1 » ; préserver les noms personnalisés.
- [ ] Renforcer les matières et textures lisibles sur téléphone, sans éblouissement ; garder quatre équipes distinguables.
- [ ] Vérifier les retombées hors du bac, les résultats, le capteur/pause et la lisibilité, puis livrer APK/AAB nommés avec icône et même signature.

Aucun code produit modifié pour ce retour, aucun nouveau paquet annoncé. Dernière version installable : 0.3.0.
