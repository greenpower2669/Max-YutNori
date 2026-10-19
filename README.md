# Max-YutNori

Version Android du jeu FabYut de Fabrice. Le jeu Unity WebAssembly publié est embarqué dans un APK hors ligne ; ses règles et graphismes sont préservés.

## Développement
Lire `ordres-de-mission.md`, puis `todo.md`, `brain.md`, `brainmap.md`, `debughistorical.md`. Méthode : [FabCopilot](https://github.com/greenpower2669/FAB-Copilot-forWorkspacegpt).

Projet Android dans `android/` : Java 17, Gradle 8.13, Android SDK 36. Compilation : `gradle -p android assembleDebug lintDebug`. Vérification du jeu : `python3 scripts/verify_web_build.py`.

GitHub Actions construit l'APK puis le copie directement dans `temp/` sur la branche de travail. Aucune extraction ZIP nécessaire sur téléphone. Première version : 0.1.0, package `fr.fab.maxyutnori`, signature de test.

Les sources originales restent dans [FabYut](https://github.com/greenpower2669/FabYut). L'export publié et les sources Git ne sont pas présumés identiques : `upstream-web-build.json` fige la provenance exacte et les empreintes.

Retour Android : continuer, quitter ou copier le diagnostic local. Le jeu utilise le WebView système et ne demande pas la permission Internet.

La validation tactile/audio sur Samsung reste à faire par Fab. Aucun merge vers main ni publication Play n'est effectué sans son accord.
