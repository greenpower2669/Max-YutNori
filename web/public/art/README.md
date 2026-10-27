# Logo MYN-022 — 27/10/2026

`max-yutnori-logo.png` : dérivé 256×256 du visuel de Fab `docs/assets/25701-logo-original.jpg` (envoi 25701.png, réellement JPEG opaque). Mise à l’échelle Lanczos uniquement, sans retouche ni génération. Le titre horizontal est remplacé dans le HUD par cet emblème carré et un nom texte accessible. Source intacte et SHA-256/dérivés dans `docs/branding-assets.json`. Régénération de développement : `python scripts/prepare_branding.py` (Pillow 12.3.0), aucune dépendance ajoutée au jeu/CI.

## Références historiques des autres assets

# Images fournies par Fab — 25/10/2026

PNG originaux inchangés : titre transparent 2172×724 (01-25506.png), panorama 1536×768 (02-25505.png), bois décoré 1536×864 (03-25512.png). Intégration autorisée dans Max YutNori.

Les cartes de hauteur, normales et rugosité sont calculées au chargement par engraving.mjs/materials.js ; le dessin source reste intact. Le relief extrait les traits sombres par contraste local, sans prétendre retrouver une sculpture 3D mesurée. UV communs, ratio 16:9 du bois préservé. Panorama interprété comme 360° d’après son format 2:1, conformément à la proposition acceptée.

0.7.0 : rules-fresco.png est la copie inchangée de docs/references/rules-fresco-25492.png fournie par Fab, pour le lecteur des règles.
