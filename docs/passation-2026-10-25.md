# Prompt de passation — Max YutNori après 0.6.0

État au 25 octobre 2026, Europe/Paris. Cette passation rassemble la référence livrée, les demandes suivantes et les précautions de reprise. La demande actuelle porte sur la passation : aucun code produit, nouvelle version ni nouveau build dans cette intervention.

## 1. Mission de reprise et précision essentielle de Fab

Reprendre Max YutNori sans Unity, en conservant le jeu et les acquis de la version 0.6.0. Les prochaines demandes sont enregistrées sous MYN-013. Lors de la reprise de réalisation, les traiter ensemble et mener les vérifications jusqu'aux APK/AAB de test téléchargeables.

**La table flottante dans le paysage est volontaire : préserver sa position. Ce sont les pions qui flottent trop haut au-dessus de leur support.** Fab précise qu'abaisser les pions au repos ne doit surtout pas les faire traverser le plateau lorsqu'on les sélectionne ou les déplace depuis la réserve.

Comportement demandé :
- Au repos, chaque pion est posé sur son véritable support : table pour la réserve et les pions terminés, plateau/case pour les pions en jeu, autre pion pour une pile.
- Dès la sélection/prise, le pion se soulève doucement. Depuis la réserve, il doit atteindre une hauteur de dégagement suffisante avant de passer au-dessus du plateau.
- Pendant le glissement, il reste sous le doigt, au-dessus des surfaces traversées ; les membres d'une pile conservent leur empilement.
- Au dépôt légal, il redescend sur sa destination. Un dépôt invalide ou une annulation le ramène sur son support d'origine sans traversée ni consommation du résultat.
- Conserver halos, ombres, lecture des destinations, zoom du deuxième doigt et caméra action. Éviter une interpolation diagonale qui coupe le bord du plateau : montée, déplacement dégagé, descente.

Les hauteurs et trajectoires précises restent à réaliser et tester. Ce besoin clarifié ne concerne pas l'altitude de toute la table dans le panorama.

## 2. Toutes les demandes nouvelles MYN-013

1. Bandeau supérieur et bandeau inférieur semi-transparents, décor réellement visible derrière, texte et boutons toujours nets et accessibles.
2. Ajouter une vraie **Vue de dessus**, avec zoom/dézoom par pincement à deux doigts, compatible avec sélection et déplacement des pions. Garder les vues Plateau, Bol et lancer, Vue libre et la caméra action déjà présentes.
3. Corriger les hauteurs des pions au repos et le soulèvement décrit ci-dessus ; table flottante préservée.
4. Rendre le panorama 360° vivant : ondulations/déformations localisées sur l'eau, brume près des chutes et de l'eau, déplacement lent des nuages, variation douce des lumières. Garder la composition et les bâtiments stables. L'image panoramique est une image, pas une scène entièrement reconstruite en 3D.
5. Intégrer la nouvelle fresque dans les règles. La rendre agrandissable et lisible, avec explication textuelle accessible des six résultats. Le Back-do doit être distingué du Do par le bâton spécialement marqué ; le dessin seul ne montre pas suffisamment cette distinction.

Confort proposé et cohérent avec le jeu : mouvements doux, aucun flash, respecter pause et « Réduire les animations », prévoir une charge adaptée au téléphone et au mode de qualité faible. Ne pas déformer tout le panorama uniformément pour simuler l'eau.

## 3. Dépôt, branche, autorisations et mémoire

- Dépôt : https://github.com/greenpower2669/Max-YutNori
- Branche de livraison : `feature/native-webgl-v020`.
- PR #2 : https://github.com/greenpower2669/Max-YutNori/pull/2 — brouillon, ouverte à la dernière livraison.
- Aucun merge `main` ni Release définitive sans instruction explicite de Fab.
- `greenpower2669/FabYut` reste la référence Unity en lecture seule. La refonte actuelle n'a pas besoin d'Unity.
- Appliquer FabCopilot. Lire d'abord `ordres-de-mission.md`, puis l'état et les sections utiles de `todo.md`, `brain.md`, `brainmap.md`, `debughistorical.md`. Les maintenir avec le code et les preuves, sans effacer les missions non produites.
- Ces mémoires contiennent des états historiques intermédiaires (« en cours », anciennes cases ouvertes) : leur présence ne rend pas les livraisons ultérieures incomplètes. L'état daté le plus récent et les preuves font référence.
- Djipie : consulter sa carte centrale à l'ouverture d'une nouvelle conversation, puis seulement les tiroirs utiles ; aucune modification de Djipie sans validation.
- Communiquer en français, avec des indications lisibles. Fab préfère les résultats de corrections dans un bloc `text` copiable. Ne pas redemander son identité.
- Appareil de référence : Samsung SM-A576B, Android 16 ; Fab teste sans PC disponible.

## 4. Dernière livraison effectivement vérifiée

Version **0.6.0**, versionCode **7**, applicationId **fr.fab.maxyutnori**, nom **Max YutNori**. Conserver identité, icône, sauvegardes et signature. La prochaine version n'est pas encore fixée ; 0.7.0/code8 serait une possibilité technique, pas une livraison existante.

- Source compilée : `a5d12ed492e0ad0656184cb68ab977280ef15c48`.
- Commit des binaires/preuves : `03b939304c60a7923f99d560c906015cd6782614`.
- Référence distante vérifiée avant cette passation documentaire : `95963a37d30a1a128f53f104bb7a52be497ad9a8`.
- CI réussie : https://github.com/greenpower2669/Max-YutNori/actions/runs/40168413538
- 62/62 tests unitaires ; 34/34 scénarios navigateur hors ligne ; aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis.
- APK : 9 533 239 octets, SHA-256 `1ac1b449e11c0b123d52ad1bb0a5ed14ebd2ca52aa5c29dbc90bef690fc1d3a9`.
- AAB : 9 150 265 octets, SHA-256 `17e93b234e466b916cb4e9d28a10350ca969e0b2401fb6d33f867c04dfe15b83`.
- Certificat APK v2/AAB identique depuis la refonte 0.2.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.
- APK direct : https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.6.0-debug.apk
- AAB direct : https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.6.0-debug.aab

Les téléchargements, ZIP, empreintes et certificats ont été vérifiés sur les vrais fichiers livrés. La 0.6.0 s'installe sur la 0.5.0 sans désinstallation. Signature de test, pas de clé de publication Google Play. Le cache CI ne remplace pas une sauvegarde durable de clé Play. Aucun secret dans le dépôt ou les notes.

Les tests navigateur et les callbacks de capteur ne prouvent pas le ressenti physique sur Samsung. Le confort tactile, la lisibilité et le sens du bol dans les deux orientations paysage restent des vérifications humaines.

## 5. Fonctionnalités acquises à préserver

### Règles, équipes et sauvegardes

- Jusqu'à quatre équipes, plusieurs participants humains ou IA par équipe, quatre pions par équipe. Nom initial « Joueur 1 ».
- Quatre finitions de pions : cèdre rouge, chêne clair, noir laqué, vert sapin laqué ; textes contrastés. Les yut gardent leurs faces cèdre/noir validées par Fab.
- Les faces sont lues sur les corps physiques Rapier après stabilisation ; pas de résultat choisi artificiellement puis imposé à la physique.
- Do 1, Gae 2, Geol 3, Yut 4 et relance, Mo 5 et relance, Back-do -1 avec bâton marqué.
- Aucun bouton pour passer/effacer un résultat à la place de jouer. Une invalidité physique donne une relance.
- Les résultats accumulés restent jouables dans l'ordre choisi : 4-3-2 ou 4-2-3, par exemple. Ne consommer que le résultat joué.
- Un pion porte `{pos, route, laps}` : compteur individuel de tours restants, initialement 1. Franchissement arrière de la ligne depuis S/O20 vers O19 ou B5 : +1 ; franchissement avant : -1 ; fin seulement à zéro. Un aller-retour arrière/avant ne termine donc pas le pion. O1 vers O20 en recul ne doit pas être confondu avec le franchissement arrière.
- Les pions groupés gardent leurs compteurs individuels. Capture : réserve, route extérieure, compteur 1.
- Sauvegarde v4 distincte, migrations v2/v3 sans supprimer les copies originales ; compteur absent initialisé à 1 (0 si déjà terminé). Réglages v3 et dernier lancer v1 conservés.
- Musique originale en boucle, sons d'action, pause/reprise et fonctionnement hors ligne.

### Gestes et caméras depuis 0.5.0

- Toucher un pion sur le plateau ou en réserve ; glisser vers une destination légale clairement indiquée. Réserves espacées.
- Le premier doigt tient le pion, le second permet le zoom. Relâcher seulement le second ne doit pas déposer le pion.
- Dépôt invalide/pause : aucun résultat consommé. Les halos distinguent sélection et destinations, et tournent doucement hors mode réduit.
- Caméra action : approche proche, léger mouvement latéral, recul pour voir l'action, puis suivi doux. Option Confort pour la désactiver ; animations réduites évitent l'introduction.
- Le cadrage doit tenir compte des champs horizontal ET vertical ; le brouillard doit suivre le recul pour ne pas cacher le plateau. Le suivi ne doit pas entraîner le pion loin du doigt.
- Lancers automatiques et IA plus hauts ; préserver leur trajectoire et les rebords.

### Bol et décor depuis 0.6.0

- Capteur activé par défaut, choix OFF mémorisé ; gauche/droite corrigés. Priorité du doigt, pause et gardes d'éligibilité conservées.
- Bol soulevable au doigt, dégagement table/socle calculé ; ne pas introduire une estimation absolue de hauteur par accéléromètre.
- Équipe active : tous ses pions/réserves brillent doucement ; sélection plus forte.
- Cycle `ready → hiding → hidden → appearing → stowing → ready` séparé des règles. Le résultat stabilisé est conservé pendant l'animation.
- Yut figés après résultat ; ceux restés dans le bol passent au-dessus du rebord puis sur la table. Bol/socle disparaissent avec leurs collisions.
- Avant le prochain tour, bonus, capture ou relance physique : bol réapparaît, yut rangés sans traverser le rebord, puis nouveaux lancers autorisés.
- Pause fige le cycle ; nouvelle partie l'annule ; reprise d'une partie en phase déplacement restitue les dernières faces. Victoire attend la fin du rangement.
- Titre transparent original, panorama 360°, table décorée par l'image de Fab et cartes de gravure en creux, normales et rugosité. La gravure est dérivée du contraste, pas d'une sculpture mesurée.

## 6. Images originales et nouvelle fresque

Trois images déjà embarquées, inchangées par rapport aux pièces fournies :
- `web/public/art/max-yutnori-title.png` : 2172×724 RGBA, titre transparent.
- `web/public/art/moonlit-panorama.png` : 1536×768, panorama 2:1.
- `web/public/art/engraved-table.png` : 1536×864, dessin de table 16:9.

Nouvelle fresque originale, conservée avec cette passation : **`docs/references/rules-fresco-25492.png`**. Elle vient de la pièce jointe `25492.png` (copie locale reçue : `/workspace/scratch/b1c85c600c3a/upload/01-25492.png`). Les octets sont préservés. Elle n'est pas encore intégrée à l'application. Ne pas la remplacer par une autre illustration ou par le dessin de table. Lors de l'intégration, utiliser un chemin d'asset du jeu et garder la provenance. Voir `docs/references/README.md` pour l'empreinte.

Si le workspace a disparu, récupérer les fichiers du dépôt et de cette branche ; les chemins locaux seuls ne sont pas durables.

## 7. Carte technique utile à la suite

- `web/src/board-layout.mjs` : positions plateau/réserves/piles, `pawnPosition`, `reservePosition`, `buildSelection` ; origine plateau BX=-5, bol WX=5.
- `web/src/scene.js` : maillages, pions/labels/halos, rendu, plan de glissement, caméras, panorama, chargement art et diagnostics en lecture seule.
- `web/src/pawn-input.js` : propriété des doigts, capture et annulation. `chase-camera.mjs` : séquence, cadrage et gain de suivi.
- `web/src/main.js` : UI, sauvegarde, changement de vue, orchestrations de tour/bol/IA/capteur et dimensionnement du stage.
- `web/src/rules.mjs`, `teams.mjs` : règles, compteurs, équipes/migrations. `halos.js` : sélection/destinations.
- `web/src/bowl-cycle.mjs`, `physics.mjs`, `tray-motion.mjs` : cycle, Rapier WASM, géométrie du bol/table, capteurs et dégagements.
- `web/src/engraving.mjs`, `materials.js` : cartes de matière. `web/public/art/` : originaux.
- `android/` : WebView locale et pont capteur ; `.github/workflows/android.yml` : tests/build/lint/signatures et dépôt des APK/AAB dans `temp/`.
- `tests/` ; `scripts/smoke_native.mjs`, `smoke_action.mjs`, `smoke_ambience.mjs` : régressions unitaires et navigateur.
- Plans/revues précédents : `docs/plan-action-v050.md`, `docs/revue-v050.md`, `docs/plan-ambience-v060.md`, `docs/revue-v060.md`.

Constats lus dans la source 0.6.0, à utiliser comme départ de diagnostic :
- Réserve et pions en jeu partagent actuellement une base y=.15 ; les piles ajoutent .21. Corps du pion : centre local .1, hauteur .19, donc dessous local .005. Une réserve est ainsi à environ .155 alors que le décor de table est vers -.312 : écart visible d'environ .47 unité.
- Les cases du plateau culminent vers .1225. Elles nécessitent une hauteur différente de la table. Le relief de table varie légèrement : éviter le z-fighting et vérifier la marge.
- Le glissement utilise actuellement un plan y=.25 ; labels de réserve y=.09, lumière locale y=.013. Ne pas corriger uniquement `reservePosition` en oubliant labels, halos, sélection, animation du groupe et retour invalide.
- `main.js` place actuellement le stage entre header et commandes via `fit()`. Un fond CSS translucide seul ne laissera pas voir une scène qui ne s'étend pas derrière. Étendre le rendu et préserver une zone de jeu visible ainsi que les zones tactiles des commandes.
- `GameScene.view()` ne connaît que board/bowl/free. Le zoom OrbitControls est réservé à free. La vue verticale doit garder son zoom entre les frames et éviter d'être remplacée par le suivi action ; les deux systèmes doivent cohabiter sans conflit.
- Panorama statique actuel dans `scene.background`, environnement PMREM distinct. Proposition technique à examiner : rendu panoramique animé par zones/masques ; gérer la couture 360°, les pôles, le coût mobile, les pauses et le mode réduit. Aucun shader d'animation n'est encore implémenté.

## 8. Régressions à ne pas réintroduire

- Un rangement en simple arc pouvait couper le rebord : dégagement radial extérieur, montée, traversée/rotation en hauteur, descente ; dégager toute la longueur du yut.
- Un résultat joué très vite laissait un retour caméra différé : `playMove` annule `returnToBoard` au début du rangement.
- Un bol en descente lors du lancer pouvait rester suspendu invisible : neutraliser `dockTray()` après disparition complète et désactivation des collisions, sans déplacer les faces figées.
- La victoire ne doit pas ouvrir sa pause avant le rangement ; nouvelle partie doit vraiment réinitialiser la physique pendant le vol.
- Les tests ne doivent pas viser un pion avant stabilisation de sa position projetée et de la caméra. Vérifier que le canvas reçoit effectivement le toucher.
- CDP tactile : lever seulement le second doigt explicitement ; un simple touchMove du premier ne simule pas son relâchement.
- Un build servi périmé peut faire tester l'ancien code : reconstruire séquentiellement, identifier le bundle courant.
- Le dernier budget local du scénario vol+retour est 60 s pour rendu logiciel ; condition physique inchangée. La CI livrée avait passé les mêmes 34 scénarios avec 40 s. Ne pas affaiblir une assertion pour masquer un défaut réel.

## 9. Environnement de reprise et Git

Workspace lors de la passation : `/workspace/scratch/b1c85c600c3a/max-yutnori-v050`, branche locale `work/ambience-v060`, HEAD local avant documentation `0a4e185`. Son nom v050 ne décrit pas la version actuelle, qui est 0.6.0.

L'historique local diffère de celui créé par le connecteur GitHub : ne pas faire de push aveugle/forcé. Relire le HEAD distant avant écriture ; préserver les commits de binaires ajoutés par CI. Des captures `temp/native-*` ont été modifiées par des tests locaux et `.runtime-browser/` est non versionné : ne pas les ajouter avec un `git add .`.

Lors du travail précédent, lecture Git fonctionnelle mais push shell sans identifiants. Solution utilisée : connecteur GitHub, arbre construit sur le dernier arbre distant, commit parent du dernier HEAD, `update_ref` protégé par `expected_sha`, jamais force/main. Cela dépend des capacités disponibles à la reprise, ce n'est pas une obligation si un push normal sûr est disponible.

Checkout sparse : pour un fichier autorisé sous `temp/`, `git add --sparse` peut être nécessaire. Un ajout refusé peut faire publier l'ancienne version du fichier si l'on lit ensuite `git show HEAD:...` sans vérifier. Cela avait été corrigé pour `native-download-verification.json`.

Dépendances verrouillées : Three 0.186.1, Rapier 0.21.0, Vite 8.3.4, Playwright 1.64.1. Node disponible à la dernière session : `/opt/codex/runtimes/codex-primary-runtime/dependencies/node/bin/node`.

Vérifications usuelles depuis la racine du dépôt :

```sh
npm test
npm run build
CHROME_PATH="$PWD/.runtime-browser/chrome/chromium" npm run smoke
```

Rechercher un navigateur disponible si le chemin n'existe plus ; ne pas attribuer les anciens tests à un code nouveau. Les journaux locaux de v060 étaient dans `.runtime-browser/*final-v060.log` et les binaires contrôlés dans `.runtime-browser/delivery-v060/`, reproductibles depuis GitHub.

## 10. Plan de reprise et critères de livraison

1. Relire le dernier HEAD, les cinq mémoires et ce prompt ; préserver les changements existants. La table flottante est désormais explicitement confirmée : aucune question n'est encore ouverte sur ce point.
2. En reprise de réalisation, compléter le plan ciblé MYN-013, garder les traces au fil de l'avancement. Aucun changement de règles demandé.
3. Vérifier poses au repos selon support, montée depuis réserve avant translation, dépôt sur plateau/pile, retour invalide, annulation, pause, sélection simple sans glissement, changement de vue et mode réduit.
4. Vérifier bandeaux translucides sur le vrai décor, lisibilité et absence de touches interceptées ; cadrage vertical et pinch avec/sans pion tenu, y compris relâchement du deuxième doigt seul.
5. Vérifier effets panoramiques localisés, continuité 360°, arrêt en pause/mode réduit, fluidité mobile ; fresque intégrale agrandissable et règles textuelles.
6. Rejouer tests/régressions utiles, build Web, scénarios navigateur hors ligne et revue selon les outils/instructions de la reprise ; ne pas annoncer un Samsung testé sans essai de Fab.
7. Compiler APK ET AAB, lint, contrôler identité/version/icône/signature et vrais téléchargements. Les livrer directement, nommés `Max-YutNori-vX.Y.Z-debug.apk` et `.aab`, sans ZIP à extraire sur téléphone.
8. Mettre à jour preuves, mémoires et PR #2. Aucun merge main/Release définitive sans instruction correspondante. Mentionner les limites humaines restantes.

**À la fin de cette passation : 0.6.0 reste le dernier jeu livré. MYN-013 et la nouvelle fresque sont conservées pour la suite, mais les nouvelles fonctionnalités ne sont pas codées.**
