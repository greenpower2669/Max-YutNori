# MYN-016 — Repérage du panorama — 0.8.2/code11

Fab demande d'étendre l'effet déjà validé à toutes les nappes des vallées repérées en violet, d'inclure les nuages du ciel repérés en turquoise, et de mieux délimiter les surfaces d'eau repérées en jaune. Référence : image utilisateur 25651.jpg, 1536×764 ; panorama original 1536×768. Préserver intégralement les effets approuvés des six chutes et leurs embruns, l'image originale, le jeu et les invariants Android. Réutiliser la méthode légère déjà choisie, sans particules supplémentaires.

## Approche et choix de l'agent
Affiner la cartographie statique de l'image plutôt qu'ajouter une scène/particules : une carte RGBA 256×128, 128 Kio, préparée une fois. R reste le bruit périodique ; G suit les nappes des vallées ; B les nuages du ciel ; A l'eau avec exclusions d'îlots. Deux lectures de densité partagées par les nappes basses/hautes, une seule passe de panorama. Les couleurs du repérage servent à identifier les régions. Les six régions géométriques de chutes gardent le calcul antérieur exact, y compris l'ancienne composante eau ; le masque neuf ne s'y applique pas. Pause, mode réduit et qualité légère conservés.

## Plan d'exécution
- [x] Tests rouges : plusieurs points repérés de brume/ciel/eau, exclusions lune/étoiles/îlots/rives et texture réutilisée.
- [x] Tracer les régions dans web/src/panorama-zones.mjs, remplir les canaux de low-mist.mjs ; utiliser ces masques dans living-panorama.js.
- [x] Pixels réels : isoler chaque couche, comparer les six cœurs au shader 0.8.1, preuve des rives et lune immobiles hors effets existants ; revue.
- [ ] 0.8.2/code11, tests/build/CI, APK/AAB et téléchargements/signatures ; mémoires, passation et PR.

Le budget 128 Kio est un choix de l'agent pour améliorer la précision à environ six pixels de l'image par texel, contre douze horizontalement avant. Le coût matériel reste à mesurer sur Samsung ; aucun FPS revendiqué. Aucun merge main/Release définitive.
