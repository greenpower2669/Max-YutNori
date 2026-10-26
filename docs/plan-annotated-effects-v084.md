# Plan MYN-018 — Max YutNori 0.8.4/code13

## Références, exigences et limites

- 25663.jpg : 24 repères roses de chutes à traiter. Ne plus considérer six ellipses historiques comme couverture exhaustive.
- 25651.jpg : violet brumes de vallées, turquoise nuages hauts, jaune eau du lac à ne plus retoucher.
- Conserver shaders d'ondulation eau 0.8.3, masque eau, refraction source et cible, mousse/embruns et géométrie de terrain.
- Aucun ajout de particules ou transfert de texture à chaque image ; une seule passe et masques compacts.

## Réalisation

- `web/src/annotated-zones.mjs` : 24 tracés en rubans par polyligne, cinq nappes violettes, sept bandes vertes, atlas RGBA statique 512x256=512 KiB. Traitement CPU borné aux boîtes des segments à l'initialisation.
- `web/src/living-panorama.js` : deux effets indépendants ajoutés sans toucher au calcul original des six régions et de leurs embruns. Guard `dry=1.-step(.005,regions.a)` sur tous les nouveaux effets au contact du lac ; exclusion de l'ancienne géométrie des chutes. Nouveaux filaments descendants par formule légère et dérive des nuages par réemploi des deux lectures de densité déjà existantes.
- `tests/annotated-zones.test.mjs` : 24/24 trajectoires dans l'atlas, bandes atmosphériques, masques négatifs, expressions d'ondulation gelées et mode réduit.

## QA et livraison

CI Android/Web : https://github.com/greenpower2669/Max-YutNori/actions/runs/40374981189. Résultat à constater. Comparaison animée et coût GPU Samsung restant à faire, ne pas inventer de FPS. Version 0.8.4/code13 dans package, Android, UI, workflow et checks signature 0.8.3->0.8.4. Deux APK/AAB nommés correctement et disponibles uniquement si CI les produit et les pousse réellement. Ne pas fusionner sur main ni publier de Release sans Fab.

## TODO humain

- [ ] Valider les 24 cascades en 360° dans toutes les vues : écoulement réel au-delà de l'illusion d'embruns.
- [ ] Comparer brumes violettes et nuages verts sur Android, mode normal et léger.
- [ ] Confirmer pixel et sensation de l'eau ondulée identiques à la 0.8.3, berges/arbres immobiles.
- [ ] Mesurer FPS, chauffe et confort sur Samsung SM-A576B Android 16.
