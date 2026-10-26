# Progression MYN-014 / 0.8.0

- Référence : 975b7f0, branche isolée par clone local ; mémoire/plan lus, aucune modification main.
- 71/71 tests unitaires baseline et actuels. Build Web réussi.
- Nouvelle suite visibilité observée rouge (absence du contrôle Vue unique), puis verte : 3 parcours, 3 formats, deux et quatre équipes, réserves accessibles, boucle MP3 deux fois et pause/reprise/instance unique.
- Pointillés isolés : panorama seul + effets coupés reproduit ; minification linéaire sans mipmaps les retire. PNG source intact.
- Pixels réels à t=0/3s : delta moyen eau8.201, chute1.965, brume12.885, nuages0.432, lampes1.058 ; mode réduit strictement identique. Fixture de test séparée, pas de mutation/test hook produit.
- Première suite native complète44/44 verte. Revue indépendante : un P2 (rappel de la vue courante) corrigé avec régression native rouge→verte. Suite ciblée enrichie en cours ; Android non encore fabriqué.
- Pas de merge main/Release définitive.

CI40258850450 : arrêt au délai mural40s d'un lancer, simulation seulement7.4666s (limite physique12s). Budget du harnais120s ; même assertion, aucun changement moteur. Run final encore attendu.
