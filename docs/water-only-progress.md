# État après livraison 0.8.3

CI [40329703094](https://github.com/greenpower2669/Max-YutNori/actions/runs/40329703094) réussie : 76/76 tests et 45/45 parcours navigateur hors ligne, aucune erreur JS/requête externe, APK/AAB et lint Android réussis. Pixels : huit sondes de géométrie à cinq phases, sans déformation ; eau avec réfraction positive, brume/ciel/chutes animés, mode réduit fixe. Régression de l’arbre 720/420 observée rouge puis verte. Revue indépendante effectuée. Source `9adc09709dead8bfd5695b39eca01c2b8a0b63a2`, binaires `84d49c1c216002e3913b540feb1bcefaa15808c1`. Vrais téléchargements HTTP 200, ZIP/SHA-256, versions, quatre PNG et MP3 vérifiés ; certificats extraits des APK v2/AAB identiques à 0.8.2 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,495,080 octets ; SHA-256 `6a33dad7d6e8e5fa2a1894a5b6b2412b920282afea93315320289547f1da80f3`.
AAB : 62,005,457 octets ; SHA-256 `ede3d29837de081081f7e367d8d4532d6151e76076f12e394eb0a7dd615c4ee2`.

Installation en mise à jour de 0.8.2 sans désinstallation. Les sondes automatiques ne prouvent pas une segmentation sémantique exhaustive de chaque pixel ; vérifier les autres berges/cimes et la fluidité sur Samsung SM-A576B Android 16. Aucun essai matériel/FPS revendiqué. Aucun merge main ni Release définitive.

## Historique de réalisation avant livraison

# MYN-017 — suivi, base 9844fad

Régression reproduite sur le vrai shader : arbre x720/y420, témoin sans prélèvement UV déplacé au même temps. Ancienne 0.8.2 : deltas 7.479, 8.458, 9.292, 10.833, 3.854. Correction finale : huit sondes géométriques à cinq phases, toutes à zéro ; eau réelle avec réfraction positive. 76/76 tests et build Web passent ; pixels réels PASS, brume/ciel/chutes toujours animés et mode réduit fixe.

Cause confirmée : masque de lac approché sur la végétation, héritage de masque d’eau rétabli autour des chutes, déplacement du ciel, absence de contrôle de la zone prélevée. Correction : supprimer l’héritage, autoriser le lac seulement dans l’intérieur du masque et sur des couleurs d’eau conservatrices (image en linéaire), contrôler aussi le masque et la matière du prélèvement. Chutes : déplacement seulement sur des pixels clairs neutres/bleutés, mousse/embruns inchangés. Ajouter l’exclusion des cimes du premier plan et réduire le clapot. Le ciel conserve l’advection de densité, géométrie fixe. Carte 128 Kio existante réutilisée, une passe, pas de travail CPU/transfert de texture par frame ; une lecture de masque supplémentaire uniquement pour l’eau susceptible de bouger.

Rulings : le point initial x1030/y510 a été reconnu comme de l’eau sur le panorama agrandi, pas comme une cime ; le témoin de terre a été replacé sur la vraie cime x930/y500. ROI 4×4 pour éviter d’inclure de l’eau voisine autour d’une petite branche ; vrai cycle rouge→vert refait avec ce protocole final. La sonde positive x605/y401 était un reflet clair isolé que le nouveau filtre bilinéaire/conservateur laisse fixe ; la sonde de canal a été déplacée dans l’eau bleue intérieure x616/y420. Aucun seuil de succès assoupli. La comparaison historique du composite 0.8.1 est documentée mais n’est plus exigée : elle conservait la déformation terrestre que Fab demande maintenant de retirer.

Limites : une sélection conservatrice des couleurs et contours ne constitue pas une segmentation sémantique exhaustive garantie de chaque pixel. Validation esthétique/matérielle Samsung à faire. Revue, CI complète et APK/AAB/signatures attendus. Aucun merge main/Release.

Mesures actuelles de réfraction dans l’eau :
[
  {
    "t": 0,
    "meanDelta": 0.9583333333333334,
    "changedFraction": 0
  },
  {
    "t": 1,
    "meanDelta": 1.3541666666666667,
    "changedFraction": 0.25
  },
  {
    "t": 3,
    "meanDelta": 0.5625,
    "changedFraction": 0
  },
  {
    "t": 7,
    "meanDelta": 1.2708333333333333,
    "changedFraction": 0
  },
  {
    "t": 12,
    "meanDelta": 1.1666666666666667,
    "changedFraction": 0.0625
  }
]

Revue indépendante favorable, aucun défaut Critical/Important. Minor différé : libellés historiques de QA (les six régions prouvent une exclusion G, pas six filets physiques). CI complète et nouveaux paquets attendus.
