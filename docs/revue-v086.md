# Revue MYN-020 —0.8.6/code15 —27/10/2026

Revue indépendante en lecture seule de9ada70e à5e3ab37, portée étendue au correctif de revue4f2f97e. Aucun problème critique ni mineur signalé ; un problème important corrigé.

## MYN-D040 : rapprochement physique

Ancien recul radial26.53/36.63 unités pour le trajet diagonal de référence ; nouveau cadrage13.41/14.49 aux aspects2/.7, par les empreintes réellement utiles. Cible recentrée et marge de visibilité, focale42°/projection1. ×2 réduit réellement la distance, garde son état à travers les vues et revient sans cumul au cadrage normal proche.

## MYN-D041 : sélection automatique

Le pion3 arrive enO5 avec résultats[5,1] ; render sélectionne ensuite le pion1, mais l'ancien focus continuait de suivre le pion3. La revue a projeté la prochaine destinationO1 hors écran. Régression réelle navigateur ajoutée et constatée RED, puis GREEN après raccord focusPawn/destinations à la sélection automatique. Phase/pinch conservés.92 tests unitaires après correctif :PASS.

## Choix explicites

- Le cadre du pion et de ses destinations, puis des quatre yut en vol, prime sur une demi-distance stricte : ×2 peut être limité par leur visibilité. Risque assumé : grossissement inférieur à2 pendant ces séquences.
- La vue libre garde orbit et pinch indépendants ; limite de recul manuel1.35×la vue proche, divisée par le facteur ×2. Le test de distance attend une stabilité radiale, l’amortissement angulaire OrbitControls restant libre. Risque : ce test ne mesure pas le confort de cet amortissement.
- Exécution native de la passation déjà autorisée, avec une revue finale indépendante ; pas de nouvelle boucle d’approbation.

## Vérifications en cours et limites

Groupes réels demi-distance4vues, retours répétés paysages/portrait, retarget après déplacement : verts. Gestes combinés/free et CI intégrale/Android en cours ; ne pas annoncer encore de nouvelle livraison.

Vue Samsung, lisibilité perçue, FPS/chauffe et confort tactile restent humains. Les fichiers panorama/atlas/lac et physique/puissance/cycle ainsi que quatre PNG sont identiques à la base0.8.5 (11 fichiers vérifiés). Aucun essai matériel revendiqué, aucun merge main/Release.
