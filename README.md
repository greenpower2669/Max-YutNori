# Max YutNori — version de test 0.4.1

Jeu de YutNori 3D en français, sans Unity : Three.js/WebGL2 et Rapier/WebAssembly, dans une APK Android hors ligne. Branche feature/native-webgl-v020, PR brouillon #2.

[APK 0.4.1 directement installable](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.4.1-debug.apk) · [AAB de test 0.4.1](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.4.1-debug.aab).

APK d’environ 7,9 Mo, version 0.4.1/code 5, identité `fr.fab.maxyutnori`. Mise à jour compatible depuis 0.4.0, 0.3.0 et 0.2.0. L’AAB est signé pour les tests ; la 0.1.0 historique avait une autre signature.

## Changements 0.4.1
Pions chêne clair, cèdre rouge, noir laqué et vert sapin laqué ; bois texturés, marques contrastées et halos cohérents. Faces des yut conservées. Bac soulevable au doigt dans Bol et lancer : glisser vers le haut pour lever, latéralement pour incliner, relâcher pour reposer. Le dessous du bac reste au-dessus de la table et de son socle pendant les transitions. Retour conservé si un lancer interrompt la descente ; résultats lisibles dans un bac levé acceptés.

La saisie du bac est disponible avant un lancer humain et prend temporairement la priorité sur le capteur. Le bouton et le glissement hors du bac permettent de lancer. Le bac est figé pendant le vol et la pause ; son retour reprend ensuite. L’accéléromètre reste activé par défaut, le choix OFF reste mémorisé.

De deux à quatre équipes de quatre pions, chacune avec un à six participants humains ou IA ; relances Yut/Mo, Back-do, captures, groupes et raccourcis. Halos de sélection/destinations, HUD des quatre faces réelles du dernier lancer, sons de contacts et musique originale en boucle, volumes séparés et sauvegarde locale. Règles conservées.

## Modifier
```sh
npm ci
python3 scripts/extract_music.py
npm test
npm run dev
```
Le morceau original est extrait du build historique seulement s’il manque ; le jeu utilise ensuite un AAC indépendant. Sources dans web/src/, sortie `npm run build` dans web-dist/game/. Seule cette sortie entre dans le paquet Android ; aucun runtime Unity.

## Vérification de livraison
CI [39917902942](https://github.com/greenpower2669/Max-YutNori/actions/runs/39917902942) réussie : 38/38 tests unitaires, 20/20 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Même certificat APK/AAB que 0.4.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Source `f012219b9bf356e4c1c0938729b9007ef49a2e38`, binaires/preuves `95039cf53512f6fb358233ce6f0f8e4fd589079c`. Téléchargements bruts HTTP 200, intégrité et SHA-256 comparés.

APK : 7,939,321 octets, SHA-256 `29126146aad9b1eacc08571060d2ccc74597b2417555b5ce906c3711eb747fcf`. AAB : 7,612,736 octets, SHA-256 `78ad6e188a8e53ab3b6f1e3a51cd49110e4f98f0106b5b486a814eb6e18222bb`.

Revue indépendante traitée ; tests de dégagement socle/table, levage, retour après lancement et résultat à hauteur élevée. Scénarios navigateur pour le vrai glissement, pause, passage automatique et priorité tactile/capteur. Captures inspectées. Détails : docs/revue-v041.md et temp/native-*.

Installation en mise à jour de 0.4.0 sans désinstallation : signature, identité et icône conservées. Essai physique Samsung SM-A576B Android 16 attendu pour le confort tactile, la lisibilité et le capteur. Décor environnant reporté MYN-009 ; aucune fusion main ni Release définitive.

## Mémoire FabCopilot
ordres-de-mission.md, todo.md, brain.md, brainmap.md et debughistorical.md. MYN-008 réalisé ; MYN-009 différé. Historique des versions précédentes conservé ; FabYut reste la référence en lecture seule.
