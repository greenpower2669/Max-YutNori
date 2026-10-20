# Max YutNori — état de travail

Branche : `feature/native-webgl-v020`. PR brouillon : #2. Mission active MYN-005. Version test : **0.2.0 / code 2**.

## Réalisé
- [x] Auditer la référence FabYut en lecture seule et formaliser les règles de refonte.
- [x] Construire le jeu Three.js / WebGL2 et Rapier / WASM, sans runtime Unity.
- [x] Règles, groupes, captures, raccourcis, Back-do, victoire et ordinateur réglable.
- [x] Interface tactile, musique originale en boucle, sauvegarde, pause et reprise.
- [x] Relecture indépendante et corrections importantes : routes de groupes, sélection des piles, lancers non stabilisés, crédits internes, chevauchement mobile.
- [x] 11 tests passent, dont 50 parties IA complètes.
- [x] 9 scénarios navigateur passent, aucune requête extérieure ni erreur JS.
- [x] Compiler et analyser l'APK ; contrôler son contenu, sa signature et le téléchargement brut.
- [x] Corriger la conservation de la clé debug et ajouter un refus de remplacement silencieux.
- [x] Mettre à jour les cinq mémoires FabCopilot.

## Livraison
[Max-YutNori-v0.2.0-debug.apk](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.2.0-debug.apk) — 7 923 881 octets.
CI : https://github.com/greenpower2669/Max-YutNori/actions/runs/39496484674
Source : 6c75714f0e7c2f8dddaaa0b77aec560cfaab1767. Binaire : dd5c1e2a5e12da39650b5bf912764a99b169fa90.
SHA-256 : 1952ed047c72664f038a4c98d7dea6b6fd82727edb068197453fe2e55ab9a038

La signature diffère de 0.1.0 : désinstallation préalable nécessaire, avec suppression des données locales de cette ancienne version.

## Prochain geste
- [ ] [FAB] Tester sur Samsung SM-A576B Android 16 : lisibilité, toucher, lancer, partie complète, son prolongé, changement d'application, fermeture/réouverture.
- [ ] [AGENT] Traiter les retours du test physique.
- [ ] [MISSION SUIVANTE] Accéléromètres et nouvelles améliorations graphiques/FX.
- [ ] [MINEUR DIFFÉRÉ] Rejeter davantage de sauvegardes falsifiées contradictoires ; les sauvegardes produites par le jeu restent cohérentes.
- [ ] [PUBLICATION ÉVENTUELLE] Prévoir une vraie clé durable si Fab demande une publication Play.

Aucune fusion main ni release définitive. L'ancienne 0.1.0 reste dans sa branche ; historique des missions et incidents dans les autres mémoires.

## Demande de Fab — prochaine évolution, 20/10/2026
Audit de la 0.2.0 effectué ; fonctionnalités ci-dessous demandées, non implémentées à ce stade. Il s'agit d'une évolution de l'architecture des équipes et des commandes.

- [ ] Ajouter des sons de choc/roulement des bâtonnets et des sons du plateau ; conserver la musique en boucle et des volumes distincts.
- [ ] Proposer le lancer par mouvement du téléphone (accéléromètre), avec sensibilité réglable et commande tactile conservée. Relier le geste à l'impulsion physique ; vérifier sur le Samsung.
- [ ] Permettre de choisir 2, 3 ou 4 couleurs/équipes simultanées sur le plateau. Adapter les tours, captures, IA, interface et sauvegardes, actuellement limités à deux équipes.
- [ ] Permettre plusieurs participants par couleur/équipe, chacun humain ou IA ; Fab confirme quatre couleurs = quatre équipes. Le réglage actuel concerne toute l'équipe.
- [ ] Améliorer textures, matériaux, ombres et lumière, en préservant la lisibilité et les performances mobiles.
- [x] Fab confirme que les déplacements sont corrects ; aucune correction de règle demandée sur ce point.
- [ ] Ajouter une aura lumineuse tournante autour du pion/groupe sélectionné et de ses destinations légales, cohérente entre départ et arrivée, sans clignotement.

État confirmé : musique et sons synthétiques de déplacement/capture/victoire existent ; sons de contact physiques et capteurs absents. Le nombre de pions reste de quatre par équipe dans la version actuelle ; la demande sur le nombre de couleurs ne vaut pas décision de modifier ce nombre.

## Cadrage précisé par Fab
Quatre couleurs correspondent à quatre équipes ; plusieurs participants possibles dans chaque équipe. Les règles de déplacement sont confirmées correctes. Demande précise : le pavé/pion sélectionné doit briller, comme sa destination, avec une aura tournante. Les autres demandes (sons, capteurs, textures et lumière) restent dans le périmètre.
Fiche de conception proposée : `docs/evolution-equipes-capteurs-halos.md`. Périmètre confirmé dans la conversation ; cette fiche reste à relire avant implémentation. Aucun nouvel APK produit pour cette évolution.
