# Revue 0.6.0 — 25/10/2026

Revue indépendante gpt-6-astra, lecture seule, plage bf048e1..3634c42 ; pas de sous-revue. Aucun défaut critique, deux défauts importants.

1. Rangement : l'arc fixe traverse le rebord pour un yut proche du bol (reproduction x=-3.4, y=-.25). Correction : dégagement radial si nécessaire, montée, traversée avec marge couvrant la longueur entière, rotation en hauteur puis descente intérieure. Régression proche/loin rouge puis verte ; les corps restent cinématiques pendant l'animation et redeviennent dynamiques au terme.
2. Caméra : un dernier déplacement immédiat après la retombée conserve le retour différé au plateau. Le rangement passe alors hors champ. Reproduction navigateur réelle rouge avec graine physique 2 et coup immédiat. Correction : désarmer returnToBoard au démarrage du rangement. Vérification finale navigateur en cours.

Le premier smoke ciblé a également détecté le dialogue de victoire trop précoce : ouverture maintenant conditionnée à bowlCycle.ready. Régression vérifiée dans une première suite complète 33/33 ; suite finale avec le cas caméra ajouté en cours. Les 61 tests unitaires passent après corrections ; build Web réussi.

Limites de revue : appareil Samsung physique et performance WebView non accessibles ; signature/fichiers Android seront vérifiés après CI. Aucun autre défaut bloquant identifié : règles v4, gestes et second doigt, matériaux/UV locaux, identité Android préservés. Pas de défaut mineur différé. Aucun merge main/Release.
