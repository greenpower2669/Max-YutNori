# Max-YutNori — Plan technique et état

Référence initiale Max-YutNori : `868553fde8aabcb8d7d5d1128b848e4f3770bceb`.
Branche : `feature/android-webview-v001`. Missions : MYN-001 à MYN-003.

## Étapes
- [x] Lire FabCopilot et examiner les deux dépôts ; confirmer l'absence de mémoires existantes dans Max-YutNori.
- [x] Localiser l'export Unity Play et son ID immuable.
- [x] Récupérer, décompresser et vérifier les quatre fichiers publiés ; enregistrer SHA-256 et provenance.
- [x] Écrire le conteneur Android et la page locale de chargement ; préserver le jeu.
- [ ] Vérifier lancement et requêtes du jeu dans un navigateur avec réseau externe bloqué.
- [ ] Compiler APK en CI, vérifier package et signature, copier directement dans `temp/`.
- [ ] Vérifier le lien GitHub de l'APK et fournir la version à Fab.
- [ ] Validation humaine : installation Samsung, tactile, lancers, joueurs humains/ordinateur, son, pause/reprise et fermeture.

## Décisions d'exécution
Implémentation dans la session selon FabCopilot ; autorisation déjà donnée pour la direction décrite dans `brain.md`. Aucun portage Unity ni nouvelle mécanique. La version publiée est la référence binaire ; le dépôt source est une référence distincte.

## Prochain geste
Tester le démarrage hors ligne et lancer la compilation CI. Aucun APK produit à ce stade.
Premier commit distant vérifié : `4f4a735ad243e2f6cc839a488d457cab6e04cee3`. Premier run CI bloqué au SDK (MYN-D002), correction ciblée en cours de validation.
