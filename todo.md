# Max YutNori — état de travail 0.4.0

Mission active MYN-007 autorisée par « Super, on y va ». Branche feature/native-webgl-v020, PR brouillon #2. Dernière version livrée et vérifiée : 0.3.0 ; historique et empreintes dans brain.md. Aucune fusion main ni Release définitive.

## Réalisé 0.4.0
- [x] Bac cinématique visible, inclinaison relative à la tenue et léger déplacement avec le téléphone ; capteur ON par défaut, choix OFF mémorisé.
- [x] Lancers plus hauts vers la table, collisions de table/rebords et validité hors bac ; résultats physiques conservés.
- [x] Faces noire laquée et cèdre rouge, textures bois/relief renforcées ; quatre couleurs d’équipes conservées.
- [x] Quatre yut alignés en haut, résumé fidèle sauvegardé ; nom initial Joueur 1 et migration du nom Fab par défaut.
- [x] Revue indépendante, corrections des deux P2 avec régressions : fuite hors table et nouvelle partie en vol.
- [x] 34 tests unitaires, 72 lancers déterministes de contrôle et build Web réussis.

## Livraison en cours
- [ ] Smoke final mobile/hors ligne, HUD, pause/capteur et nouvelle partie pendant un lancer.
- [ ] Compilation/lint APK/AAB ; même signature 0.3.0, icône et identité conservées.
- [ ] Vérification des téléchargements bruts et SHA-256, mise à jour mémoires et PR.

## Après livraison
- [ ] [FAB] Samsung SM-A576B Android 16 : installation en mise à jour, confort/lisibilité, inclinaison et lancer en paysage, musique prolongée, pause/reprise et partie complète.
- [ ] [AGENT] Traiter les retours du téléphone réel.
- [ ] [PUBLICATION ÉVENTUELLE] Clé durable Play uniquement si Fab demande une publication ; paquets actuels signés pour les tests.

Plan : docs/plan-bac-v040.md ; suivi : docs/bac-progress.md ; revue : docs/revue-v040.md.
