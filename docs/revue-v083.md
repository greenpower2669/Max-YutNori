# État après livraison 0.8.3

CI [40329703094](https://github.com/greenpower2669/Max-YutNori/actions/runs/40329703094) réussie : 76/76 tests et 45/45 parcours navigateur hors ligne, aucune erreur JS/requête externe, APK/AAB et lint Android réussis. Pixels : huit sondes de géométrie à cinq phases, sans déformation ; eau avec réfraction positive, brume/ciel/chutes animés, mode réduit fixe. Régression de l’arbre 720/420 observée rouge puis verte. Revue indépendante effectuée. Source `9adc09709dead8bfd5695b39eca01c2b8a0b63a2`, binaires `84d49c1c216002e3913b540feb1bcefaa15808c1`. Vrais téléchargements HTTP 200, ZIP/SHA-256, versions, quatre PNG et MP3 vérifiés ; certificats extraits des APK v2/AAB identiques à 0.8.2 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,495,080 octets ; SHA-256 `6a33dad7d6e8e5fa2a1894a5b6b2412b920282afea93315320289547f1da80f3`.
AAB : 62,005,457 octets ; SHA-256 `ede3d29837de081081f7e367d8d4532d6151e76076f12e394eb0a7dd615c4ee2`.

Installation en mise à jour de 0.8.2 sans désinstallation. Les sondes automatiques ne prouvent pas une segmentation sémantique exhaustive de chaque pixel ; vérifier les autres berges/cimes et la fluidité sur Samsung SM-A576B Android 16. Aucun essai matériel/FPS revendiqué. Aucun merge main ni Release définitive.

## Historique de réalisation avant livraison

# Revue 0.8.3 — MYN-017

Revue indépendante favorable, aucun défaut Critical/Important. Vérifications : contrôle cohérent du pixel courant et du prélèvement, signe Y de sourceP correct, ciel géométriquement fixe ; aucun résidu concret de déformation arbre/rocher trouvé lors de l’inspection de l’image/masques. Pixels : huit sondes fixes × cinq phases, eau déformée positivement (deltas moyens 0.56–1.35). 76 tests et build passent ; versions 0.8.3/code12, comparaison de signature 0.8.2 cohérentes. Même passe et carte 128 Kio ; une lecture conditionnelle de masque de plus sur l’eau.

Minor différé : le nom historique preservedWaterfalls et le commentaire de raccord 0.8.1 restent dans les diagnostics. Les six cas contrôlent maintenant l’exclusion de nouvelle brume dans les régions de chutes, pas l’animation de six filets d’eau physiques. L’égalité ancienne a été levée à juste titre pour corriger la déformation terrestre ; ne pas surinterpréter ces diagnostics.

Limites : une ellipse historique (.600,.746) est centrée sur la forêt plutôt que sur le filet d’eau visible plus loin ; les masques ne constituent pas un relevé exhaustif de chutes. Le nouveau filtre y interdit la déformation des pixels non aquatiques identifiés. Coût GPU/température, esthétique et validation exhaustive Samsung non mesurés. Aucun fichier/Git modifié par le reviewer. CI et paquets encore attendus au moment de la revue.
