# État après traitement de la revue et livraison

CI [40320155787](https://github.com/greenpower2669/Max-YutNori/actions/runs/40320155787) réussie : 76/76 tests unitaires et 45/45 parcours navigateur hors ligne, aucune erreur JS/requête externe, build APK/AAB et lint Android réussis. Pixels réels : 14 sondes positives/négatives pour les régions, six cœurs comparés à la référence 0.8.1 à deux temps, raccord de rive vérifié et mode réduit fixe. Revue indépendante traitée : raccord d’eau corrigé et testé rouge→vert, métadonnée fsevents rétablie. Source `04c4cb053bc25f49b0a22c93cb7003fbdbb0b70d`, binaires `3756c18859faec9da5e37e92239f77310d3aba4e`. Téléchargements HTTP 200, intégrité ZIP/SHA-256, versions, quatre PNG et MP3 vérifiés ; certificats extraits des vrais APK v2/AAB identiques à 0.8.1 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,494,932 octets ; SHA-256 `91dec0a4e7123fea546daab73d6f42e2c3c14136808dea2f927185d12758e6e1`.
AAB : 62,005,342 octets ; SHA-256 `9b4a52fbdceabef1809ce96523346c39a4139ab852054a996698d8442d899f0d`.

Mise à jour de 0.8.1 sans désinstallation. Fidélité esthétique finale et fluidité/coût GPU sur Samsung SM-A576B Android 16 restent à valider ; aucun FPS matériel revendiqué. Aucun merge main ni Release définitive.

## Revue originale, avant CI et paquets

# Revue 0.8.2 — MYN-016

Revue indépendante en lecture seule sur le diff depuis f137808. Aucun défaut Critical. Important : commutation abrupte entre eau historique et nouveau masque au bord d’une chute ; corrigée dans une seule passe par fondu extérieur, régression de pixels isolée rouge→vert. Minor : métadonnée Node de fsevents substituée par erreur, restaurée. Pas de défaut résiduel identifié après les vérifications de cette passe ; pas de seconde revue revendiquée.

Constats du reviewer : référence 0.8.1 fidèle, bruit figé ; exclusions lune/étoiles et marges d’îlots cohérentes, continuité horizontale, texture statique réutilisée et une passe ; pause/réduction/versions/signature prévues cohérentes, PNG sources inchangés.

Non mesurés : GPU/température du Samsung ; confort et fidélité esthétique exhaustive du repérage à valider par Fab. Nouveaux paquets/signatures et smoke complet attendus en CI. La revue n’a pas certifié l’annotation utilisateur elle-même (hors checkout) ; l’agent l’a inspectée avec le diagnostic des masques.
