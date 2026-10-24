# Revue 0.4.1 — MYN-008

Revue indépendante en lecture seule de eedc7c6..4d65b31. Périmètre : palette, bac/socle/table, cycle tactile/capteur, pause/vol et packaging. Aucun Critical ; un Important identifié.

## I1 — Retour perdu après interruption par un lancer
Après relâchement puis lancement 100 ms plus tard, le bac restait à y=1,369 (repos 0,78), y compris après le résultat. freezeTray remplaçait la cible neutre ; une demande en vol était ignorée et prepare dépendait de la permission de saisir. Corrigé par une demande de retour persistante, reprise après le vol même en phase déplacement/auto. La pause continue de figer le mouvement. Régression physique couvrant relâchement avant lancement et fin de saisie pendant le vol ; scénario navigateur supplémentaire pour le mode automatique.

## Correction complémentaire du plafond de résultat
Un yut lisible au fond d’un bac levé dépassait le plafond historique y=2 et était déclaré invalide. La borne s’adapte au volume du bac incliné et aux dimensions du yut. Régression vraie physique rouge puis verte.

## Autres points relus
La formule de dégagement enveloppe le volume du bac et le disque du socle à chaque pas cinématique. Capture tactile annulée sur pause, changement de vue, perte de capture ; priorité du doigt sur le capteur. Quatre pions distinguables sur la capture : chêne, cèdre, noir, vert sapin ; marques contrastées et halos séparés de la couleur sombre du corps. Faces des yut conservées. Version Android 0.4.1/code 5 ; clé et icône conservées.

## Validation finale
CI [39917902942](https://github.com/greenpower2669/Max-YutNori/actions/runs/39917902942) réussie : 38/38 tests unitaires, 20/20 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Même certificat APK/AAB que 0.4.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Source `f012219b9bf356e4c1c0938729b9007ef49a2e38`, binaires/preuves `95039cf53512f6fb358233ce6f0f8e4fd589079c`. Téléchargements bruts HTTP 200, intégrité et SHA-256 comparés.

38 tests et 20 scénarios passent aussi localement avant les ajustements de synchronisation des scénarios ; la CI finale valide ces ajustements. Captures des pions et du bac soulevé inspectées ; un Important de revue résolu, aucun Critical relevé. Le capteur est simulé dans le navigateur. Installation en mise à jour de 0.4.0 sans désinstallation : signature, identité et icône conservées. Essai physique Samsung SM-A576B Android 16 attendu pour le confort tactile, la lisibilité et le capteur. Décor environnant reporté MYN-009 ; aucune fusion main ni Release définitive.
