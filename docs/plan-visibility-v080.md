# Max YutNori 0.8.0 — visibilité et ambiance

Spécification approuvée : passation du 26/10/2026, autorisation « Ok, code tout sur mon git ».
Branche feature/native-webgl-v020, référence 975b7f0 ; aucun merge main/Release définitive.

## Contrat
HUD plus compact et transparent ; équipes 1–2 à gauche/3–4 à droite (interprétation annoncée de la dictée, acceptée avec la passation). Bouton unique de choix Vue à gauche de musique, avec les quatre modes existants. Joueur actif bicolore, pulsation progressive lisible au minimum et fixe en mode réduit. Plus de place et cadrage rapproché, pions lisibles au toucher. Corriger les pointillés après reproduction ; animer nettement eau/chutes/brume/nuages/lumières, avec particules localisées. Musique MP3 Arisongs fournie, embarquée et bouclée. Table flottante, fresque, règles, gestes, sauvegarde v4, identité/icône/signature inchangés.

## Réalisation
- [x] 1. Reproduire les pointillés et mesurer les cadrages ; adapter UI, choix de vue et projection commune rendu/raycast. Vérifier les réserves accessibles et les gestes à 1000×600, 844×390, 390×844.
- [x] 2. Repère actif bicolore synchronisé HUD/pions, effets panorama visibles et sans artefact ; contrôler pause/mode réduit par rendu réel et pixels, pas uniquement horloge.
- [x] 3. MP3 épinglé SHA-256 96c5a95a442f50ac8c0b7c1e9ea80b468434adb57f671a3c45d77c3111fd8c10 ; récupération contrôlée en CI puis conservation Git ; prise en charge MIME/Range Android, boucle/pause/reprise hors ligne.
- [x] 4. Régressions ciblées, suite complète, revue, version 0.8.0/code9, CI Android, intégrité/signatures et téléchargements APK/AAB. Actualiser les cinq mémoires et PR brouillon #2.

## Points de revue
Noms longs, quatre équipes et seulement deux équipes ; place des réserves sous fiches/bandeaux ; Vue synchronisée après lancer/retour automatique ; pause et mode réduit ; boucle MP3 et renouvellement sans superposition.

## Preuves initiales
71/71 tests unitaires ; build Web réussi. Navigateur local obtenu via paquet Chromium après archive CDN tronquée. Musique téléchargée intacte, 52 386 596 octets, durée 2182,74 s.

## Progression
Disposition et choix de vue vérifiés aux trois formats ; nouvelle musique (36 min) deux boucles réelles, pause/reprise et instance unique vérifiées, zéro requête externe/erreur JS. Suite complète en cours, revue et Android encore attendus. Pointillés reproduits avec panorama seul, effets coupés ; filtrage corrigé, original PNG préservé.

## Livraison finale
CI [40259390198](https://github.com/greenpower2669/Max-YutNori/actions/runs/40259390198) réussie : 71/71 tests unitaires, 45/45 parcours navigateur hors ligne, zéro erreur JS/requête externe ; cinq zones du panorama vérifiées sur leurs pixels réels et mode réduit identique. Compilation APK/AAB et lint Android réussis. Source `7ab9f8761c56bc899242a234b24a406e0e17d909`, binaires `79ce9005ee4556c1d9c0d8cc5b0c65073e124fb3`. Vrais téléchargements HTTP 200, intégrité ZIP/SHA-256, identité/version/icône/PNG et MP3 vérifiés. Certificats extraits des vrais APK v2/AAB : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identiques à 0.7.0.

APK : 62,491,892 octets ; SHA-256 `06d8a8dc4b790f47e7d0f68d67413f6a262b5b6a0f2eaabaa8502743c803bdc2`.
AAB : 62,002,566 octets ; SHA-256 `2a8e3c8831926acb01d0c58f53de78cd9a8ce51dc17659a378a2637a120b4b45`.

Installation en mise à jour de 0.7.0 sans désinstallation. APK paysage, portrait vérifié pour le Web. Confort tactile, intensité esthétique, performance et capteur restent à valider sur Samsung SM-A576B Android 16. Aucun essai physique revendiqué. Aucun merge main ni Release définitive.
