# Max YutNori — évolution 0.3.0

Jeu de YutNori 3D sans Unity, en français : Three.js / WebGL2 et Rapier / WebAssembly, intégré dans une APK Android hors ligne. Branche de travail feature/native-webgl-v020 ; aucune fusion main. Version de test, validation Samsung par Fab nécessaire.

## Jouer et modifier

```sh
npm ci
python3 scripts/extract_music.py
npm test
npm run dev
```

Le morceau original est extrait du build historique uniquement s'il manque ; il est ensuite un fichier AAC indépendant. Le code du jeu est dans web/src/. La sortie de npm run build est web-dist/game/. Seule cette sortie entre dans l'APK ; les anciens binaires Unity restent archivés dans le dépôt.

De deux à quatre équipes de quatre pions, avec un à six participants humains ou IA par équipe. Les participants se relaient après le tour complet ; niveau et agressivité de chaque IA sont réglables. Relances Yut/Mo, résultats stockés, Back-do, captures, groupes et raccourcis conservés. Au centre, un groupe suit la route du dernier groupe arrivé.

Le pion/groupe sélectionné et ses destinations portent des halos assortis tournants, fixes en animations réduites. Matières bois/tissu et éclairage améliorés. Musique originale en boucle, sons de collision physique et de plateau, volumes distincts, pause et sauvegarde locale. Les anciennes parties 0.2.0 sont migrées avec leurs résultats et leur participant actif.

Lancers par bouton, glissement ou mouvement du téléphone. Pour le capteur : **Réglages → Lancer au mouvement → Activer l’accéléromètre**, puis ajuster la sensibilité. Rester au repos un instant avant le geste. Le lancer automatique prend la priorité ; le capteur est désactivé pendant pause, dialogue, IA et lancer. Son réglage réel et l'orientation paysage doivent encore être essayés sur le Samsung.

## APK et AAB de test

GitHub Actions vérifie règles, physique, interface hors ligne, boucle audio et sauvegarde, puis compile et analyse l'APK et l'AAB. Le fichier brut est dans temp/ sur la branche. Le script verify_native_apk.py contrôle l'absence de Unity.

La signature 0.2.0 doit être conservée : le pipeline compare les certificats des deux APK et de l'AAB avant livraison. Si la clé attendue manque, le build bloque. La clé de test reste en cache CI ; une publication Play demanderait une clé durable et un paquet de production.

La 0.1.0 possède une autre signature et nécessite une désinstallation préalable (données locales effacées). Cette contrainte ne concerne pas la mise à jour 0.2.0 → 0.3.0 lorsque la comparaison des certificats passe.

## Mémoire FabCopilot

ordres-de-mission.md, brain.md, brainmap.md, debughistorical.md, todo.md. Contrats et choix : docs/refonte-webgl.md et docs/evolution-equipes-capteurs-halos.md. Plan, suivi et relecture 0.3.0 dans docs/. APK 0.1.0 conservé sur feature/android-webview-v001 ; FabYut reste la référence en lecture seule.

## Version de test disponible
[Télécharger directement Max-YutNori-v0.3.0-debug.apk](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.3.0-debug.apk) — environ 7,9 Mo.

[AAB de test 0.3.0](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.3.0-debug.aab) — environ 7,6 Mo, pour préparation Android ; pas une publication Play de production.

[Vérifications GitHub Actions réussies](https://github.com/greenpower2669/Max-YutNori/actions/runs/39651736580) : 25 tests, 14 scénarios navigateur, compilation/lint et signatures. Les fichiers bruts ont été téléchargés et comparés aux SHA-256 publiés. Même signature que 0.2.0 : installer la mise à jour directement, sans désinstaller cette version.

Validation du confort, du son prolongé et des capteurs sur Samsung SM-A576B Android 16 encore attendue. Branche de test et PR brouillon #2 conservées.
