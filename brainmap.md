# Max-YutNori — Carte technique

## Références
- `FabYut` : projet Unity original, commit inspecté `81ba459b39306b4f0c36ca69d8483d7bc3d552a8`, aucune écriture.
- `yutFab/Assets/Globals.cs` contient la logique Unity ; scènes, ressources et autres scripts dans Assets.
- Unity Play : jeu `f7ab238a-cec3-44ad-a517-7a3c1e00faa3`, export publié `4d547ac9-eecc-45b5-802e-a5b9c81ca3e5`.

## Architecture implémentée
- `android/` : projet Gradle, un module `app`, Java 17.
- `MainActivity.java` : WebView, cycle de vie, confirmation de sortie, interception HTTPS locale stricte, journal de diagnostic borné.
- `android/app/src/main/assets/game/index.html` : démarrage Unity, progression, erreurs lisibles, reprise audio sur interaction.
- `android/app/src/main/assets/game/Build/` : fichiers publiés figés, Brotli décodé sans altération du contenu.
- `upstream-web-build.json` : provenance, tailles et SHA-256 des quatre fichiers de l'export.
- `.github/workflows/android.yml` : vérifications, compilation APK, copie vers `temp/` dans la même branche ; aucun merge et aucune Release définitive.
- `scripts/verify_web_build.py` : intégrité et complétude de l'export embarqué.
- `scripts/fetch_web_build.mjs` : restauration de l'export figé via sa page publique ; URLs signées temporaires jamais enregistrées ; contrôle SHA-256 obligatoire avant toute écriture.
- `scripts/smoke_web.mjs` : vrai démarrage Unity sous Chrome avec tactile émulé et toutes les requêtes externes bloquées ; contrôle des fichiers absents et erreurs JS, capture PNG.
- `scripts/test_offline_restore.mjs` : régression du restaurateur, quatre fichiers locaux présents et réseau amont interdit.

## Contrôles techniques
Java 17 / Gradle 8.13 / AGP 8.13.0 / compile et target SDK 36 / minimum SDK 26. Aucune dépendance AndroidX ni bibliothèque native embarquée. Le runtime natif est le WebView système.
Le bouton Retour utilise OnBackInvokedDispatcher sur Android 13+ ; dialogue avec copie des 100 dernières lignes de diagnostic, sans envoi automatique. Insets système/caméra respectés, barres escamotables.
Signature de test conservée dans le cache CI `max-yutnori-debug-key-v1`. Une perte du cache peut nécessiter une réinstallation ; aucune clé privée n'est committée. La signature de production reste hors périmètre.
Le premier commit distant contient le code et le manifeste d'empreintes. CI restaure les quatre binaires, les teste et les commite avec l'APK ; les builds suivants retrouvent ainsi les fichiers figés directement dans Git.

## Livraison 0.1.0
- Source compilée : `3042fed5ca7a9a0fa551d5330ef1a5739ef5f9cb`.
- Commit CI exposant fichiers originaux, APK et preuves : `4b8ee92f83e65fba8ad7da437bb9b8fa3a9b0366`.
- APK : `temp/Max-YutNori-v0.1.0-debug.apk` ; SHA-256 `ebcde4dce56996c8771ebe5b07313cd6754464bc984257a5b64be46c1c598b5d`.
- Le code natif gère Android 13+ avec OnBackInvokedDispatcher ; seule la méthode de secours API 26-32 porte une suppression lint ciblée et justifiée.

## Flux et limites
Lancement Android → page locale → loader Unity → framework/WASM/data locaux → scène du jeu. Le contenu local est servi sous `https://appassets.androidplatform.net/game/` avec MIME explicites. Les chemins hors périmètre et les requêtes réseau externes sont refusés. Aucune interface JavaScript vers Java.
