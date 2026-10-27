# Travail actif — 0.8.8 Android / MYN-023 puis MYN-024

## Clôture autorisée
- [x] Vérifier PR #2 : tête 8debca3, 0.8.8/code17 et CI 40543163343 réussie sur source 08abcaed.
- [x] Archiver intégralement les cinq anciens fichiers avec provenance/empreintes ; réaligner les fichiers actifs.
- [ ] Fusionner PR #2 à tête attendue et publier/vérifier Release Android v0.8.8 avec l'APK exact déjà livré.

## Web/PWA — prochaine réalisation
- [ ] Branche dédiée depuis la version intégrée ; design/plan de réalisation.
- [ ] Build Web commun sans altérer le build Android ni caméra/physique/effets.
- [ ] Manifest/icônes/install/plein écran, service worker hors ligne avec musique et mises à jour différées.
- [ ] Versions moteur/PWA/commit ; recherche GitHub limitée aux releases Web ; gestion réseau/erreurs.
- [ ] Tests automatisés et navigateur (jeu, physique, cadrage, localStorage, hors ligne, worker, installation), contrôle Android.
- [ ] Publication HTTPS de test, procédure et instructions d'installation, PR brouillon, aucune release PWA définitive ni merge main.

## Vérifications humaines conservées
Ces tâches ne sont pas prétendues réalisées par l'autorisation de clôture.
- [ ] Samsung SM-A576B Android 16 : installation en mise à jour, cache et masques OEM de l'icône, lisibilité logo/contrôles avec grossissement système.
- [ ] Gestes : sélection/réserve/piles, glisser/déposer/annulation, pincement avec/sans pion, ×2, retours caméra, rotation avec noms longs pendant suivi.
- [ ] Capteur et bol : gauche/droite dans les deux paysages, levage/inclinaison/descente/lancer, rangement, pause/reprise et priorité auto/doigt/capteur.
- [ ] Panorama : toutes les 24 chutes, brumes violettes/turquoise, nuages, raccords 360°, lac et protection des arbres/berges en modes normal/léger/réduit.
- [ ] Partie complète, musique prolongée, FPS/chauffe/confort ; traiter les retours ciblés.
- [ ] Mineur Web historique : surveiller en portrait étroit le repli des cartes/vues et les noms longs.
- [ ] Seulement si Fab demande Google Play : clé d'upload durable et AAB de publication. Les paquets actuels portent la signature debug de test ; aucun nouvel AAB 0.8.8 demandé.

## Référence et preuves
APK livré : 0.8.8/code17 ; source 08abcaed, binaires 99543419, CI 40543163343 (96 tests, 56 parcours, WebGL, build/lint/signature Android). Preuve : temp/native-delivery-verification-v088.json ; passation : docs/passation-myn022-logo.md ; revue : docs/revue-v088.md. Les anciennes cases « en cours » sont des états datés remplacés par ces preuves, archivés sans perte dans sauvegarde.md.
