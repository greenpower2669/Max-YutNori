# MYN-015 — Nuages bas légers — 0.8.1/code10

Spécification approuvée : animer les nappes de nuages bas entre les montagnes et les îlots, au-dessus du lac ; dérive lente, étirement/fonte douce. L'effet actuel des chutes/embruns est validé et doit rester intact. Autorisation : « Ok code là-dessus ». Aucun changement de règles, caméra, HUD, musique, sauvegarde, identité/icône/signature ; aucun merge main ni Release définitive.

## Choix de réalisation
Une texture de densité périodique 128×128 RGBA (64 Kio), préparée une seule fois. Deux défilements horizontaux dans le shader du panorama existant, avec masque statique des vallées et exclusion des cascades. Un seul dessin du panorama, aucun objet/particule supplémentaire ni transfert de texture par frame ; seule l'horloge existante évolue. Pause et animations réduites respectées.

## Étapes
- [x] Régression rouge : densité préparée une fois, budget mémoire, masque ciel/avant-plan ; pixels des nouveaux nuages bas, indépendance des cascades et mode réduit.
- [x] Ajouter low-mist.mjs et le bloc GLSL distinct dans living-panorama.js. Garder les calculs existants des chutes inchangés.
- [x] Vérifier les pixels, comparer le rendu avec/sans cette couche, compter les dessins et contrôler la pause/qualité légère ; tests unitaires et build.
- [ ] Revue, CI complète, APK/AAB 0.8.1/code10 ; signatures et téléchargements réels, cinq mémoires et PR.

## Limites de mesure
Les compteurs/temps du renderer logiciel ne représentent pas la performance réelle du Samsung. Conserver les chiffres comme preuve de protocole, pas comme promesse de FPS sur téléphone.

Opacité maximale choisie par agent : 18 %, après inspection du rendu, pour garder les reliefs lisibles. Les calculs existants de cascades/embruns restent inchangés, nouveau voile exclu de leur région.
