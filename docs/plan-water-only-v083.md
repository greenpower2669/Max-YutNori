# MYN-017 — eau seule — correction 0.8.3/code12

Demande : 25656.jpg, eau qui déforme les arbres ; ne déformer que l’eau. Même moteur, aucune nouvelle particule/texture, invariants inchangés, pas de main/Release.

- [x] QA : témoin au même temps ne supprimant que le prélèvement UV déplacé ; sondes de végétation/rochers/berges/anciens masques, plusieurs phases et eau positive.
- [x] Corriger à la source : aucun héritage d’eau hors masque, autorisation conservatrice par matière et masque, contrôle du prélèvement déplacé ; le ciel garde l’advection de densité et une géométrie fixe. Réduire l’amplitude du clapot.
- [ ] Vérifier les pixels et garder mousse/embruns/brume/nuages animés, pause/mode léger/réduit ; revue, tests/build puis CI complète et paquets 0.8.3.

Le test compare des images au même temps : l’éclairage animé et la brume ne doivent pas produire de faux positif sur la géométrie. Les anciennes égalités de composite de chute ne sont plus une exigence valide lorsqu’elles conservent une déformation terrestre ; garder l’indépendance de la nouvelle brume et le mouvement des effets de chutes.

État local : pixels, 76 tests, build et revue favorables ; CI/paquets à faire. Minor de libellés QA différé, détaillé dans docs/revue-v083.md.
