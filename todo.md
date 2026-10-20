# Max-YutNori — Plan technique et état

Référence initiale Max-YutNori : `868553fde8aabcb8d7d5d1128b848e4f3770bceb`.
Branche : `feature/android-webview-v001`. Missions : MYN-001 à MYN-004.

## Étapes
- [x] Lire FabCopilot et examiner les deux dépôts ; confirmer l'absence de mémoires existantes dans Max-YutNori.
- [x] Localiser l'export Unity Play et son ID immuable.
- [x] Récupérer, décompresser et vérifier les quatre fichiers publiés ; enregistrer SHA-256 et provenance.
- [x] Écrire le conteneur Android et la page locale de chargement ; préserver le jeu.
- [x] Vérifier lancement et requêtes du jeu dans un navigateur avec réseau externe bloqué ; capture 3D inspectée.
- [x] Compiler APK en CI, vérifier package et signature, copier directement dans `temp/`.
- [x] Vérifier la présence GitHub de l'APK brut et préparer la livraison à Fab.
- [ ] Validation humaine : installation Samsung, tactile, lancers, joueurs humains/ordinateur, son, pause/reprise et fermeture.

## Décisions d'exécution
Implémentation dans la session selon FabCopilot ; autorisation déjà donnée pour la direction décrite dans `brain.md`. Aucun portage Unity ni nouvelle mécanique. La version publiée est la référence binaire ; le dépôt source est une référence distincte.

## Prochain geste
Restituer le diagnostic audio MYN-D005 et confirmer le scénario d'arrêt avec Fab. La correction de boucle et un éventuel nouvel APK n'ont pas été lancés.

## État livré
Code compilé `3042fed5ca7a9a0fa551d5330ef1a5739ef5f9cb`, commit binaire CI `4b8ee92f83e65fba8ad7da437bb9b8fa3a9b0366`, run 39301357387. APK 0.1.0, 46 781 687 octets. Les incidents SDK (MYN-D002), bootstrap/smoke (MYN-D003) et lint Retour (MYN-D004) sont traités.
Le jeu n'a pas été testé sur un Samsung physique. Aucun merge main ni publication définitive. Une clé de signature de production sera nécessaire uniquement si une mission de publication Play est demandée.

## Audit audio du 20/10/2026 — MYN-004 / MYN-D005
- [x] Comparer la provenance de l'APK et l'état des dépôts accessibles.
- [x] Inspecter le binaire de l'APK sans compilation : `ARIRinstr`, ~3 min 59 s, boucle désactivée.
- [ ] Confirmer avec Fab si l'arrêt intervient après un morceau complet ou après une pause/changement d'application.
- [ ] [AGENT] Si correction demandée : intervenir sur la musique dans la couche Web sans reconstruction Unity/WASM ; valider deux cycles et pause/reprise ; construire ensuite un nouvel APK direct. Proposition non exécutée.
- Aucune nouvelle compilation ni livraison : APK disponible toujours 0.1.0.

## Mission active MYN-005
- [x] Direction validée et branche isolée.
- [x] Reconstitution du moteur de règles après perte du temporaire.
- [ ] Scène, physique, audio, UI et sauvegarde reconstruits et vérifiés.
- [ ] Tests navigateur, build Android, relecture et livraison directe.
- [ ] Validation sur le Samsung de Fab.
Le « prochain geste » précédent concernait MYN-004 et est historique.

## Reprise — candidat corrigé 0.2.0
- [x] Scène 3D, physique WASM, interface, sauvegarde et musique originale.
- [x] Premier test navigateur complet et premier APK natif (CI 39438116160).
- [x] Relecture indépendante ; corrections des routes de groupes, sélection des piles, délais physiques et crédits internes.
- [ ] Suite finale et test navigateur des corrections, compilation et vérification APK final.
- [ ] Livraison directe et validation Samsung par Fab.
- [ ] Étape ultérieure : accéléromètres, perfectionnement graphique.
- [ ] Mineur différé : rejeter davantage de sauvegardes falsifiées contradictoires.
Aucune fusion main ni release définitive.
