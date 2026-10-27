# MYN-015 — Nuages bas légers — 0.8.1/code10

Spécification approuvée : animer les nappes de nuages bas entre les montagnes et les îlots, au-dessus du lac ; dérive lente, étirement/fonte douce. L'effet actuel des chutes/embruns est validé et doit rester intact. Autorisation : « Ok code là-dessus ». Aucun changement de règles, caméra, HUD, musique, sauvegarde, identité/icône/signature ; aucun merge main ni Release définitive.

## Choix de réalisation
Une texture de densité périodique 128×128 RGBA (64 Kio), préparée une seule fois. Deux défilements horizontaux dans le shader du panorama existant, avec masque statique des vallées et exclusion des cascades. Un seul dessin du panorama, aucun objet/particule supplémentaire ni transfert de texture par frame ; seule l'horloge existante évolue. Pause et animations réduites respectées.

## Étapes
- [x] Régression rouge : densité préparée une fois, budget mémoire, masque ciel/avant-plan ; pixels des nouveaux nuages bas, indépendance des cascades et mode réduit.
- [x] Ajouter low-mist.mjs et le bloc GLSL distinct dans living-panorama.js. Garder les calculs existants des chutes inchangés.
- [x] Vérifier les pixels, comparer le rendu avec/sans cette couche, compter les dessins et contrôler la pause/qualité légère ; tests unitaires et build.
- [x] Revue, CI complète, APK/AAB 0.8.1/code10 ; signatures et téléchargements réels, cinq mémoires et PR.

## Limites de mesure
Les compteurs/temps du renderer logiciel ne représentent pas la performance réelle du Samsung. Conserver les chiffres comme preuve de protocole, pas comme promesse de FPS sur téléphone.

Opacité maximale choisie par agent : 18 %, après inspection du rendu, pour garder les reliefs lisibles. Les calculs existants de cascades/embruns restent inchangés, nouveau voile exclu de leur région.

## Livraison vérifiée

CI [40288471190](https://github.com/greenpower2669/Max-YutNori/actions/runs/40288471190) réussie : 73/73 tests unitaires et 45/45 parcours navigateur hors ligne, zéro erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Pixels réels : nappes visibles/mobiles en qualité normale/légère, six cœurs de cascades identiques avec/sans nouvelle couche, un dessin et 64 Kio, mode réduit fixe. Revue indépendante favorable. Source `adf0c9f75d914016cae9b2ba3aedc6662f3fd78c`, binaires `fa1871f945b0c093f7580ce3c761078b836352ec`. Vrais téléchargements HTTP 200, intégrité ZIP/SHA-256, identité/version/icône, quatre PNG et MP3 vérifiés ; certificats extraits des APK v2/AAB identiques à 0.8.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

APK : 62,492,800 octets ; SHA-256 `999b4a8ffe57e62161be73083a28f0d973461b6077be870fd610f177253cade6`.
AAB : 62,003,366 octets ; SHA-256 `ed482e10893272d28e2ebf8b22e6a7ade4a09bfc1e1319d06785a45b6501fd2e`.

Mise à jour de 0.8.0 sans désinstallation. Le coût GPU et le confort visuel réels sur Samsung SM-A576B Android 16 restent à valider ; aucun FPS matériel revendiqué. Au plus trois lectures de texture supplémentaires par fragment concerné. Aucun merge main ni Release définitive.
