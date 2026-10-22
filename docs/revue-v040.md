# Revue finale 0.4.0 — MYN-007

Revue indépendante en lecture seule de 40f7fe1..4318023, puis traitement des deux constats importants. Aucun autre défaut matériel signalé. Capteur Samsung physique et preuve Android restent distincts.

## P2 — Bâtonnets perdus au-delà du rebord
La graine LCG 10, avec pose maximale autorisée et puissance 1, reproduisait un yut au-delà de z=5,71 à y=1,66, au-dessus du rebord. Les contacts entre bâtonnets au départ augmentaient la vitesse par rapport à la visée balistique nominale ; marge trop faible avec une cible proche du bord. Correction : viser la surface libre centrale (x≈−4, z≈2,3 dans le repère physique), avec direction et dispersion bornées. Aucun déplacement forcé ni face prédéterminée après le départ.

Régression physique observée rouge puis verte. Vérification des 48 graines extrêmes et 24 graines normales : aucun yut perdu hors table. Le test permanent couvre la graine 10 et onze autres lancers extrêmes.

## P2 — Nouvelle partie pendant un lancer
Le drapeau interface rolling était remis à zéro, mais physics.active restait vrai : le moteur ne terminait plus le lancer et refusait l’inclinaison du bac. Correction : reset physique explicite depuis newGame, remis au repos avec compteurs et vitesses annulés. Régression unitaire observée rouge puis verte ; scénario UI redémarrant en vol puis inclinant le bac avant tout nouveau lancer ajouté.

## Validation
34/34 tests unitaires et build Web réussis après corrections. Smoke final, compilation/lint et certificats APK/AAB en attente au moment de cette note. Aucune deuxième revue ni modification de règles de jeu.
