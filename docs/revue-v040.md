# Revue finale 0.4.0 — MYN-007

Revue indépendante en lecture seule de 40f7fe1..4318023, puis traitement des deux constats importants. Aucun autre défaut matériel signalé. Capteur Samsung physique et preuve Android restent distincts.

## P2 — Bâtonnets perdus au-delà du rebord
La graine LCG 10, avec pose maximale autorisée et puissance 1, reproduisait un yut au-delà de z=5,71 à y=1,66, au-dessus du rebord. Les contacts entre bâtonnets au départ augmentaient la vitesse par rapport à la visée balistique nominale ; marge trop faible avec une cible proche du bord. Correction : viser la surface libre centrale (x≈−4, z≈2,3 dans le repère physique), avec direction et dispersion bornées. Aucun déplacement forcé ni face prédéterminée après le départ.

Régression physique observée rouge puis verte. Vérification des 48 graines extrêmes et 24 graines normales : aucun yut perdu hors table. Le test permanent couvre la graine 10 et onze autres lancers extrêmes.

## P2 — Nouvelle partie pendant un lancer
Le drapeau interface rolling était remis à zéro, mais physics.active restait vrai : le moteur ne terminait plus le lancer et refusait l’inclinaison du bac. Correction : reset physique explicite depuis newGame, remis au repos avec compteurs et vitesses annulés. Régression unitaire observée rouge puis verte ; scénario UI redémarrant en vol puis inclinant le bac avant tout nouveau lancer ajouté.

## Validation
CI [39724824806](https://github.com/greenpower2669/Max-YutNori/actions/runs/39724824806) réussie : 34/34 tests unitaires, 16/16 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Même certificat APK/AAB que 0.3.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Source `0155dc784e1583b1ffe4a2ee16c354d02e36b64f`, binaires/preuves `8b1da4710fc4b4dd16b0a102e84d85bf0a5e4d26`. Téléchargements bruts HTTP 200, intégrité et SHA-256 comparés.

APK : 7,938,053 octets, SHA-256 `ff5920323e17843bbf4fce1ea49caa0dfa942f11aeeefebd152c3af2bc90158b`. AAB : 7,611,631 octets, SHA-256 `47476f2916660179382cd630ece58c0cf3a1a8b813a03a856899cd0a3b1a22c5`.

16 scénarios incluent la nouvelle partie pendant un lancer puis une inclinaison avant relancer. Une course du scénario IA a été isolée par horloge de fixture ; pas de modification du jeu. Aucune deuxième revue ni modification des règles.
