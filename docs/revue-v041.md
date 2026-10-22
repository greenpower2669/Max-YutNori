# Revue 0.4.1 — MYN-008

Revue indépendante en lecture seule de eedc7c6..4d65b31. Périmètre : palette, bac/socle/table, cycle tactile/capteur, pause/vol et packaging. Aucun Critical ; un Important identifié.

## I1 — Retour perdu après interruption par un lancer
Après relâchement puis lancement 100 ms plus tard, le bac restait à y=1,369 (repos 0,78), y compris après le résultat. freezeTray remplaçait la cible neutre ; une demande en vol était ignorée et prepare dépendait de la permission de saisir. Corrigé par une demande de retour persistante, reprise après le vol même en phase déplacement/auto. La pause continue de figer le mouvement. Régression physique couvrant relâchement avant lancement et fin de saisie pendant le vol ; scénario navigateur supplémentaire pour le mode automatique.

## Correction complémentaire du plafond de résultat
Un yut lisible au fond d’un bac levé dépassait le plafond historique y=2 et était déclaré invalide. La borne s’adapte au volume du bac incliné et aux dimensions du yut. Régression vraie physique rouge puis verte.

## Autres points relus
La formule de dégagement enveloppe le volume du bac et le disque du socle à chaque pas cinématique. Capture tactile annulée sur pause, changement de vue, perte de capture ; priorité du doigt sur le capteur. Quatre pions distinguables sur la capture : chêne, cèdre, noir, vert sapin ; marques contrastées et halos séparés de la couleur sombre du corps. Faces des yut conservées. Version Android 0.4.1/code 5 ; clé et icône conservées.

## État de validation
38 tests unitaires passent et build Web réussi. Smoke final et fabrication Android en cours. Les premiers 19 scénarios navigateur passaient avant les deux corrections finales ; ce résultat intermédiaire ne vaut pas preuve du paquet final. Aucune validation physique Samsung revendiquée.
