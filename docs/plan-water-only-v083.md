# MYN-017 — eau seule — correction 0.8.3/code12

Demande : 25656.jpg, eau qui déforme les arbres ; ne déformer que l’eau. Même moteur, aucune nouvelle particule/texture, invariants inchangés, pas de main/Release.

- [x] QA : témoin au même temps ne supprimant que le prélèvement UV déplacé ; sondes de végétation/rochers/berges/anciens masques, plusieurs phases et eau positive.
- [x] Corriger à la source : aucun héritage d’eau hors masque, autorisation conservatrice par matière et masque, contrôle du prélèvement déplacé ; le ciel garde l’advection de densité et une géométrie fixe. Réduire l’amplitude du clapot.
- [x] Vérifier les pixels et garder mousse/embruns/brume/nuages animés, pause/mode léger/réduit ; revue, tests/build puis CI complète et paquets 0.8.3.

Le test compare des images au même temps : l’éclairage animé et la brume ne doivent pas produire de faux positif sur la géométrie. Les anciennes égalités de composite de chute ne sont plus une exigence valide lorsqu’elles conservent une déformation terrestre ; garder l’indépendance de la nouvelle brume et le mouvement des effets de chutes.

État local : pixels, 76 tests, build et revue favorables ; CI/paquets à faire. Minor de libellés QA différé, détaillé dans docs/revue-v083.md.

## Livraison vérifiée

CI [40329703094](https://github.com/greenpower2669/Max-YutNori/actions/runs/40329703094) réussie : 76/76 tests et 45/45 parcours navigateur hors ligne, aucune erreur JS/requête externe, APK/AAB et lint Android réussis. Pixels : huit sondes de géométrie à cinq phases, sans déformation ; eau avec réfraction positive, brume/ciel/chutes animés, mode réduit fixe. Régression de l’arbre 720/420 observée rouge puis verte. Revue indépendante effectuée. Source `9adc09709dead8bfd5695b39eca01c2b8a0b63a2`, binaires `84d49c1c216002e3913b540feb1bcefaa15808c1`. Vrais téléchargements HTTP 200, ZIP/SHA-256, versions, quatre PNG et MP3 vérifiés ; certificats extraits des APK v2/AAB identiques à 0.8.2 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,495,080 octets ; SHA-256 `6a33dad7d6e8e5fa2a1894a5b6b2412b920282afea93315320289547f1da80f3`.
AAB : 62,005,457 octets ; SHA-256 `ede3d29837de081081f7e367d8d4532d6151e76076f12e394eb0a7dd615c4ee2`.

Installation en mise à jour de 0.8.2 sans désinstallation. Les sondes automatiques ne prouvent pas une segmentation sémantique exhaustive de chaque pixel ; vérifier les autres berges/cimes et la fluidité sur Samsung SM-A576B Android 16. Aucun essai matériel/FPS revendiqué. Aucun merge main ni Release définitive.
