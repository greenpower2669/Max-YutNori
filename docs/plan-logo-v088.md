# MYN-022 — Plan d’intégration du logo 0.8.8

> Exécution native avec `superpowers:executing-plans` ; une revue indépendante finale.

**But :** intégrer le visuel exact de Fab dans le HUD et comme icône Android.
**Architecture :** dérivés raster déterministes de la source JPEG conservée, logo carré accompagné du nom, ressources Android adaptatives et classiques. Aucun changement caméra/physique/panorama.
**Stack :** HTML/CSS, Android resources, Playwright ; Pillow seulement pour préparer les tailles, pas de dépendance ajoutée à l’application ou au build CI.
**Spécification :** `docs/passation-myn022-logo.md`, autorisée par Fab (« On, code ») le 27/10/2026.

## Contraintes

- Branche `feature/native-webgl-v020`, PR #2 brouillon ; aucun merge main/Release.
- Version 0.8.8/code17, APK debug seul dans `temp/`, identité/signature existantes.
- Source originale inchangée ; mise à l’échelle technique sans génération ni retouche créative.
- Préserver tout le socle 0.8.7 ; lac/panorama 0.8.4 entièrement protégés.

## Points de revue

- Carré étiré par les anciennes règles de titre horizontal : contrôle navigateur du ratio affiché.
- Logo ou ×2 coupé sur petit paysage : boîtes réelles, zones tactiles et hauteur du bandeau.
- Mauvaise ressource Android encore référencée : manifeste et ressources effectives de l’APK.
- Masque rond coupant les bâtonnets : aperçu de masque et marge sur calque adaptatif 108 dp.
- Changement graphique autorisé masquant une régression : fichiers caméra/physique/panorama byte-identiques et suite existante.

## Tâche 1 — Logo, icône et packaging cohérents

- [x] Lire les cinq mémoires et la passation ; base `ce531ea`, 96 tests unitaires verts.
- [ ] Adapter les contrôles existants de chargement/logo et de HUD ; constater l’ancien format dans le navigateur.
- [ ] Préparer les dérivés, le HUD compact, les ressources Android et la version 0.8.8/code17. Mettre les cinq mémoires à jour avec le code.
- [ ] Exécuter `npm test`, `npm run build`, les parcours HUD/logo et les contrôles WebGL ; inspection visuelle du HUD et des masques.
- [ ] Commit explicite et revue indépendante finale ; traiter les erreurs importantes avec régression ciblée.
- [ ] Publier sur la branche autorisée ; CI complète, compilation/lint/signature Android.
- [ ] Télécharger l’APK réel et vérifier version, package, ressources, SHA-256 et certificat. Mettre à jour mémoires/passation/preuves, fournir le lien APK direct.

Référence Android : https://developer.android.com/develop/ui/compose/system/icon_design_adaptive — couches 108 dp, zone centrale protégée 66 dp, masques variables. Les essais Samsung restent humains.
