# MYN-016 — Repérage du panorama — 0.8.2/code11

Fab demande d'étendre l'effet déjà validé à toutes les nappes des vallées repérées en violet, d'inclure les nuages du ciel repérés en turquoise, et de mieux délimiter les surfaces d'eau repérées en jaune. Référence : image utilisateur 25651.jpg, 1536×764 ; panorama original 1536×768. Préserver intégralement les effets approuvés des six chutes et leurs embruns, l'image originale, le jeu et les invariants Android. Réutiliser la méthode légère déjà choisie, sans particules supplémentaires.

## Approche et choix de l'agent
Affiner la cartographie statique de l'image plutôt qu'ajouter une scène/particules : une carte RGBA 256×128, 128 Kio, préparée une fois. R reste le bruit périodique ; G suit les nappes des vallées ; B les nuages du ciel ; A l'eau avec exclusions d'îlots. Deux lectures de densité partagées par les nappes basses/hautes, une seule passe de panorama. Les couleurs du repérage servent à identifier les régions. Les six régions géométriques de chutes gardent le calcul antérieur exact, y compris l'ancienne composante eau ; le masque neuf ne s'y applique pas. Pause, mode réduit et qualité légère conservés.

## Plan d'exécution
- [x] Tests rouges : plusieurs points repérés de brume/ciel/eau, exclusions lune/étoiles/îlots/rives et texture réutilisée.
- [x] Tracer les régions dans web/src/panorama-zones.mjs, remplir les canaux de low-mist.mjs ; utiliser ces masques dans living-panorama.js.
- [x] Pixels réels : isoler chaque couche, comparer les six cœurs au shader 0.8.1, preuve des rives et lune immobiles hors effets existants ; revue.
- [x] 0.8.2/code11, tests/build/CI, APK/AAB et téléchargements/signatures ; mémoires, passation et PR.

Le budget 128 Kio est un choix de l'agent pour améliorer la précision à environ six pixels de l'image par texel, contre douze horizontalement avant. Le coût matériel reste à mesurer sur Samsung ; aucun FPS revendiqué. Aucun merge main/Release définitive.

## Livraison vérifiée

CI [40320155787](https://github.com/greenpower2669/Max-YutNori/actions/runs/40320155787) réussie : 76/76 tests unitaires et 45/45 parcours navigateur hors ligne, aucune erreur JS/requête externe, build APK/AAB et lint Android réussis. Pixels réels : 14 sondes positives/négatives pour les régions, six cœurs comparés à la référence 0.8.1 à deux temps, raccord de rive vérifié et mode réduit fixe. Revue indépendante traitée : raccord d’eau corrigé et testé rouge→vert, métadonnée fsevents rétablie. Source `04c4cb053bc25f49b0a22c93cb7003fbdbb0b70d`, binaires `3756c18859faec9da5e37e92239f77310d3aba4e`. Téléchargements HTTP 200, intégrité ZIP/SHA-256, versions, quatre PNG et MP3 vérifiés ; certificats extraits des vrais APK v2/AAB identiques à 0.8.1 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,494,932 octets ; SHA-256 `91dec0a4e7123fea546daab73d6f42e2c3c14136808dea2f927185d12758e6e1`.
AAB : 62,005,342 octets ; SHA-256 `9b4a52fbdceabef1809ce96523346c39a4139ab852054a996698d8442d899f0d`.

Mise à jour de 0.8.1 sans désinstallation. Fidélité esthétique finale et fluidité/coût GPU sur Samsung SM-A576B Android 16 restent à valider ; aucun FPS matériel revendiqué. Aucun merge main ni Release définitive.
