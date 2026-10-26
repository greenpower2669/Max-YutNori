# Revue indépendante 0.8.0

Revue en lecture seule des sources/configuration/tests par agent séparé. Un P2 confirmé : choisir à nouveau Plateau après suivi d'un pion ne déclenche pas change sur le select natif. selectOption Playwright masquait le défaut. Régression au vrai menu Home/Enter observée rouge (follow au lieu de idle). Correction : option courante d'affichage masquée distincte des quatre commandes réexécutables, libellé synchronisé ; contrôle vert effectué : le vrai menu Home/Enter annule le suivi et rétablit Plateau. Aucun autre défaut important confirmé ; noms de 30 caractères et trois tailles contrôlés après stabilisation des vraies frames. Projection et raycast partagent la caméra décalée.

Hors jugement direct de la revue : Android physique et performances sur Samsung ; signatures des futurs paquets à vérifier après CI ; intensité esthétique à valider par Fab. Ces limites ne sont pas déclarées comme tests réussis.
