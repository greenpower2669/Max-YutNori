# Progression MYN-014 / 0.8.0

- Référence : 975b7f0, branche isolée par clone local ; mémoire/plan lus, aucune modification main.
- 71/71 tests unitaires baseline et actuels. Build Web réussi.
- Nouvelle suite visibilité observée rouge (absence du contrôle Vue unique), puis verte : 3 parcours, 3 formats, deux et quatre équipes, réserves accessibles, boucle MP3 deux fois et pause/reprise/instance unique.
- Pointillés isolés : panorama seul + effets coupés reproduit ; minification linéaire sans mipmaps les retire. PNG source intact.
- Pixels réels à t=0/3s : delta moyen eau8.201, chute1.965, brume12.885, nuages0.432, lampes1.058 ; mode réduit strictement identique. Fixture de test séparée, pas de mutation/test hook produit.
- Première suite native complète44/44 verte. Revue indépendante : un P2 (rappel de la vue courante) corrigé avec régression native rouge→verte. Suite ciblée enrichie en cours ; Android non encore fabriqué.
- Pas de merge main/Release définitive.

CI40258850450 : arrêt au délai mural40s d'un lancer, simulation seulement7.4666s (limite physique12s). Budget du harnais120s ; même assertion, aucun changement moteur. Run final encore attendu.

## Livraison finale vérifiée
CI [40259390198](https://github.com/greenpower2669/Max-YutNori/actions/runs/40259390198) réussie : 71/71 tests unitaires, 45/45 parcours navigateur hors ligne, zéro erreur JS/requête externe ; cinq zones du panorama vérifiées sur leurs pixels réels et mode réduit identique. Compilation APK/AAB et lint Android réussis. Source `7ab9f8761c56bc899242a234b24a406e0e17d909`, binaires `79ce9005ee4556c1d9c0d8cc5b0c65073e124fb3`. Vrais téléchargements HTTP 200, intégrité ZIP/SHA-256, identité/version/icône/PNG et MP3 vérifiés. Certificats extraits des vrais APK v2/AAB : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identiques à 0.7.0.

APK : 62,491,892 octets ; SHA-256 `06d8a8dc4b790f47e7d0f68d67413f6a262b5b6a0f2eaabaa8502743c803bdc2`.
AAB : 62,002,566 octets ; SHA-256 `2a8e3c8831926acb01d0c58f53de78cd9a8ce51dc17659a378a2637a120b4b45`.

Installation en mise à jour de 0.7.0 sans désinstallation. APK paysage, portrait vérifié pour le Web. Confort tactile, intensité esthétique, performance et capteur restent à valider sur Samsung SM-A576B Android 16. Aucun essai physique revendiqué. Aucun merge main ni Release définitive.
