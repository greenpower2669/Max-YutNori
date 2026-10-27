# Livraison finale vérifiée — 0.8.1

[APK 0.8.1 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/fa1871f945b0c093f7580ce3c761078b836352ec/temp/Max-YutNori-v0.8.1-debug.apk) · [AAB de test 0.8.1](https://github.com/greenpower2669/Max-YutNori/raw/fa1871f945b0c093f7580ce3c761078b836352ec/temp/Max-YutNori-v0.8.1-debug.aab).

CI [40288471190](https://github.com/greenpower2669/Max-YutNori/actions/runs/40288471190) réussie : 73/73 tests unitaires et 45/45 parcours navigateur hors ligne, zéro erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Pixels réels : nappes visibles/mobiles en qualité normale/légère, six cœurs de cascades identiques avec/sans nouvelle couche, un dessin et 64 Kio, mode réduit fixe. Revue indépendante favorable. Source `adf0c9f75d914016cae9b2ba3aedc6662f3fd78c`, binaires `fa1871f945b0c093f7580ce3c761078b836352ec`. Vrais téléchargements HTTP 200, intégrité ZIP/SHA-256, identité/version/icône, quatre PNG et MP3 vérifiés ; certificats extraits des APK v2/AAB identiques à 0.8.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,492,800 octets ; SHA-256 `999b4a8ffe57e62161be73083a28f0d973461b6077be870fd610f177253cade6`.
AAB : 62,003,366 octets ; SHA-256 `ed482e10893272d28e2ebf8b22e6a7ade4a09bfc1e1319d06785a45b6501fd2e`.

Mise à jour de 0.8.0 sans désinstallation. Le coût GPU et le confort visuel réels sur Samsung SM-A576B Android 16 restent à valider ; aucun FPS matériel revendiqué. Au plus trois lectures de texture supplémentaires par fragment concerné. Aucun merge main ni Release définitive.

## Historique de réalisation avant livraison

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
