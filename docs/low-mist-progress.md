# MYN-015 / 0.8.1 — suivi

Référence4e282d6, branche feature/native-webgl-v020. 73/73 tests unitaires, build Web et7/7 parcours confort passent ; aucune erreur JS/requête externe. Régressions nouvelles observées rouges puis vertes. Rendu de la couche isolée : nouvelle nappe visible/mobile, cœurs des6cascades pixel-identiques,1dessin64Kio et mode réduit fixe. Exclusion géométrique ensuite resserrée à<=0. et pixels revérifiés. Revue indépendante favorable ; coût matériel Samsung non revendiqué.

Mesures de pixels (pas des FPS matériels) :
{
  "lowClouds": {
    "contribution": 39.793730158730156,
    "advection": 4.901927083333334,
    "drawCalls": 1,
    "textureBytes": 65536
  },
  "lowCloudsLight": {
    "contribution": 30.31969494047619,
    "advection": 3.765401785714286,
    "drawCalls": 1,
    "textureBytes": 65536
  },
  "reducedStill": true
}

CI complète et APK/AAB attendus ; dernière livraison vérifiée0.8.0.
