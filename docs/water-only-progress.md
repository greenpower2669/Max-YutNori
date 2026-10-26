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
