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

## QA et livraison — résultat confirmé

CI [40377936315](https://github.com/greenpower2669/Max-YutNori/actions/runs/40377936315) **réussie** sur la source `ac1763dcc19a26518fd7ce97613810aee7359771` ; 45 parcours navigateur hors ligne, rendu WebGL, tests unitaires, APK/AAB 0.8.4/code13, lint et signatures validés. Paquets versionnés disponibles : [APK](https://github.com/greenpower2669/Max-YutNori/raw/a9c79276e64d2216ab7711843ba8778066f47c56/temp/Max-YutNori-v0.8.4-debug.apk), [AAB](https://github.com/greenpower2669/Max-YutNori/raw/a9c79276e64d2216ab7711843ba8778066f47c56/temp/Max-YutNori-v0.8.4-debug.aab) ; commit binaires `a9c79276e64d2216ab7711843ba8778066f47c56`.

SHA-256 : APK `47ba5e113dd1c4ab6ba780fe1d839f4813de9d32fa4922bb7c19be9dbc117d6f` ; AAB `70270433a51d79d33ac3b78e7d425d2d7a6173ec4fb639e41989c09c55440c1e`.

Comparaison de pixels du lac avec shader réel 0.8.3 : **aucune différence** aux cinq phases contrôlées. Une passe de panorama, anciens embruns préservés ; masques et mouvements supplémentaires contrôlés par sondes. La correction de la fixture (import relatif) et la condition d'activation des nouveaux masques ont été intégrées avant livraison. **La démonstration visuelle exhaustive des 24 cascades et la mesure FPS sur Samsung restent à faire**. Aucun merge main / Release définitive.

## TODO humain

- [ ] Valider les 24 cascades en 360° dans toutes les vues : écoulement réel au-delà de l'illusion d'embruns.
- [ ] Comparer brumes violettes et nuages verts sur Android, mode normal et léger.
- [ ] Confirmer pixel et sensation de l'eau ondulée identiques à la 0.8.3, berges/arbres immobiles.
- [ ] Mesurer FPS, chauffe et confort sur Samsung SM-A576B Android 16.
