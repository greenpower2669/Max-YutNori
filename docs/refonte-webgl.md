# Refonte native WebGL — contrat v0.2.0

Autorisation de Fab : « Ok, lance toi », après demande d'une recréation sans Unity, WebGL/WebAssembly, 3D, effets et capteurs ultérieurs. Dépôt Max-YutNori uniquement. Branche feature/native-webgl-v020. L'ancienne version reste disponible dans sa branche. Pas de fusion main ni de publication définitive.

## Périmètre
- Three.js / WebGL2 pour le plateau, les pions, le bol et les bâtonnets procéduraux.
- Rapier / WebAssembly pour les lancers ; résultat lu sur les faces réellement immobilisées, relance explicite si coincés.
- Deux équipes de quatre pions, jusqu'à six noms tournants par équipe, humain ou ordinateur, difficulté et agressivité.
- Do/Gae/Geol/Yut/Mo, Back-do marqué, résultats stockés et relances Yut/Mo, choix des raccourcis, captures et groupes.
- Référence : audit des Globals.cs, fabchoc.cs et fabcamSw.cs de FabYut public. Ne pas promettre la reproduction de tous les comportements accidentels de l'ancien code.
- Arrivée à O20 ou au-delà ; Back-do ne fait pas entrer depuis la réserve. Capture sans relance par défaut, option distincte pour l'activer. Changements de route seulement au départ d'un coin ou du centre.
- Sauvegarde locale après chaque action, pause réelle, musique originale en boucle, réglages audio et effets, mode graphique léger.
- Interface tactile française, boutons accessibles et alternatives aux gestes. Bois / tissu vert / accents bronze.
- Capteurs reportés à l'étape suivante. L'interface de lancer accepte déjà force et direction ; aucun bouton capteur factice.
- APK hors ligne : assets générés seulement, aucun runtime Unity embarqué, même identifiant Android, code 2 / version 0.2.0.

## Plan et preuves attendues
1. Moteur de règles isolé et tests des captures, groupes, raccourcis, Back-do, arrivée, sauvegardes invalides et 50 parties IA complètes.
2. Physique réelle, scène 3D, interface, son et sauvegarde. Tests des lancers, rendu navigateur, actions UI, reprise et passage de la fin du morceau.
3. Pipeline reproductible npm + Gradle ; signature et contenu de l'APK contrôlés, captures et compte rendu dans temp/.
4. Relecture complète, corrections importantes, mémoires mises à jour et lien APK brut. Validation physique Samsung ensuite par Fab.

## Journal d'exécution
20/10 : la session précédente a perdu ses fichiers temporaires avant leur commit. Les premiers résultats de tests de cette session sont historiques, pas une preuve du code reconstruit. Reconstitution depuis l'audit conservé ; nouveaux tests requis. Checkpoints fréquents sur GitHub.

20/10 : règles 7/7 et physique 1/1 passent après reconstitution ; 50 parties IA complètes. Build Vite réussi. Checkpoints GitHub 29ab9a2 (règles) et 870ffc2 (scène, physique, interface). Boucle audio et intégration Android en vérification.

## Relecture finale et décisions
Relecture indépendante (review_native_v020) : aucun problème critique, trois importants et trois mineurs.
- Ruling: les pions réunis au centre héritent de la route du dernier groupe arrivé ; leur numéro ne détermine plus le Back-do. Coût si une autre variante est souhaitée : règle explicite à changer.
- Ruling: le clic sur un pion supérieur d'une pile est reclassé important : sélectionner un autre groupe peut entraîner un coup involontaire. Résolution vers le représentant de la même pile.
- Lancer toujours mobile au délai de 12 s : invalide, même si une face est lisible. Amortissement angulaire porté à 1 pour réduire les oscillations longues sans prédéterminer les faces.
- Licences : boîte de dialogue interne ; ne pas naviguer hors du jeu.
- Chevauchement mobile observé : adapter la zone 3D à la hauteur réelle des contrôles.
- Minor deferred: validation de sauvegardes falsifiées contradictoires (adversaires partageant une case, gagnant différent du joueur actif). Les sauvegardes produites par le jeu restent cohérentes ; aucune saisie de sauvegarde externe proposée.
- La clé debug de cette branche diffère de 0.1.0 : désinstallation de 0.1.0 nécessaire ; l'annoncer avant installation.

Première CI complète réussie : 39438116160, source 3ec21fb. APK 7 923 569 octets, signature v2 vérifiée, Android 16 ciblé, aucun runtime Unity. Candidat intermédiaire remplacé par les corrections finales avant livraison.
Les tests ajoutés sur regroupement, sélection de pile et délai physique ont été observés rouges avant les corrections. Suite corrigée à vérifier en CI ; ne pas confondre le premier APK et le candidat final.

## État livré
Les quatre étapes sont réalisées jusqu'au candidat de test. CI 39496484674 : 11/11 tests et 9/9 scénarios navigateur passent ; build/lint Android et signature réussis. Source 6c75714f0e7c2f8dddaaa0b77aec560cfaab1767, binaire dd5c1e2a5e12da39650b5bf912764a99b169fa90. APK brut 7 923 881 octets. Les tests des trois régressions observées rouges passent désormais. Le chemin de signature debug est explicite et la clé a été mise en cache ; disparition de la clé attendue = build bloqué.
La règle de route du dernier groupe arrivé, la sélection de pile et le refus des lancers non stabilisés sont fixés. Le seul mineur différé concerne les sauvegardes falsifiées contradictoires. Validation Samsung et capteurs ultérieurs restent hors de la validation automatisée.
