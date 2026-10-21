# Max YutNori — équipes, halos, sons et lancer au mouvement

Date : 20 octobre 2026. Branche : `feature/native-webgl-v020`.
Statut : conception approuvée par Fab le 21/10/2026 (« Oui ») ; réalisation en cours.
Référence installable : 0.2.0. Le périmètre exprimé par Fab est confirmé ; les choix de réalisation ci-dessous sont approuvés.

## Intention et périmètre

Faire évoluer le jeu hors ligne sans Unity vers quatre équipes possibles, avec plusieurs personnes par équipe, des repères lumineux lisibles, des impacts sonores et un lancer physique commandé par le mouvement du téléphone. Améliorer le rendu du plateau et des objets sans perdre le confort sur Samsung SM-A576B Android 16.

Fab précise que les déplacements fonctionnent correctement. Le point soulevé sur les « coups relatifs » concerne la visibilité de la sélection : le pion choisi doit briller comme sa destination, avec une aura tournante. Cette demande ne justifie aucun changement des parcours, raccourcis, regroupements ou conditions de sortie existants.

## Équipes et participants

- Choix de deux, trois ou quatre équipes actives ; proposition de présentation initiale à quatre équipes.
- Une couleur distincte par équipe, complétée par un nom et un symbole. Palette proposée : jade, ambre, bleu et violet, avec contours lisibles sur le plateau.
- Conserver quatre pions par équipe, comme dans la version actuelle. Fab a demandé le nombre de couleurs/équipes, pas un changement du nombre de pions.
- De un à six participants par équipe, chacun avec un nom et un choix humain/IA. Cette limite reprend la capacité de noms existante.
- Pour chaque participant IA, conserver les réglages actuels de niveau et d'agressivité, désormais individuels.
- Les membres d'une équipe partagent ses pions et se relaient à la fin du tour complet de l'équipe. Les relances et résultats en attente restent au même participant jusqu'à la fin du tour.
- Les équipes jouent dans l'ordre affiché. Une équipe gagne quand ses quatre pions sont arrivés ; la partie s'arrête à cette victoire.
- Une capture peut viser toute équipe adverse, avec les mêmes règles que la partie actuelle à deux équipes. L'IA évalue toutes les équipes adverses.
- L'écran indique sans ambiguïté l'équipe et le participant actifs, leur couleur/symbole, et si le participant est humain ou IA.

## Halo de sélection et destinations

- Un halo tourne doucement autour de la base du pion sélectionné, ou de la pile si plusieurs pions sont regroupés.
- Une lueur de même couleur accompagne ce halo ; son intensité reste stable, sans flash ni pulsation rapide.
- Chaque destination légale pour le résultat choisi reçoit une aura assortie. Les destinations s'actualisent immédiatement lors du changement de pion ou de résultat.
- Les cases proposées restent touchables. Un halo de sélection ne doit pas déclencher à lui seul un déplacement.
- À la validation du déplacement, les repères de l'ancien choix sont retirés. Ils disparaissent aussi au changement de tour ou à la fin de partie.
- Les pauses arrêtent l'animation. Une option d'animations réduites conserve les repères fixes.
- Les pions en réserve, les piles et les pions arrivés gardent une représentation distincte ; seuls les coups légaux sont proposés.

## Sons et musique

- Conserver la musique originale en boucle et ses règles actuelles de pause/reprise.
- Ajouter des sons de bois pour les impacts et rebonds des bâtonnets, ainsi qu'un son de pose sur le plateau.
- L'intensité des impacts dépend de la force des collisions. Limiter leur fréquence et le nombre de voix simultanées pour éviter une saturation.
- Distinguer déplacement, capture et victoire. Prévoir des volumes séparés musique/effets et mémoriser les réglages.
- Produire des effets locaux, sans requête réseau. Réutiliser le moteur Web Audio actuel pour les impacts ; aucun ajout de ressource de provenance inconnue.
- Aucun son pendant une pause ; reprise uniquement selon les réglages et les contraintes d'activation audio du navigateur.

## Lancer au mouvement du téléphone

- Option activable dans les réglages, avec sensibilité réglable. Le bouton et le glissement restent disponibles.
- Utiliser le capteur d'accélération Android, en retirant la gravité si nécessaire ; vérifier sa présence au démarrage.
- Transformer le geste en impulsion bornée pour la physique Rapier existante. Les faces restent déterminées après la chute ; le capteur ne choisit pas le résultat.
- Un seul lancer par geste. Après déclenchement, attendre le retour au repos avant de pouvoir réarmer.
- Accepter un geste uniquement pendant la phase de lancer d'un participant humain, sans dialogue ouvert et avec l'application au premier plan.
- Désactiver l'écoute en arrière-plan et pendant les pauses. Un capteur absent ou une erreur laisse les commandes tactiles utilisables.
- Relier le conteneur Android à la page locale par une interface limitée aux réglages du capteur et aux événements de lancer. Conserver le blocage des pages et ressources externes.
- La validation sur le téléphone réel reste nécessaire pour la sensibilité et l'orientation paysage.
- Référence : https://developer.android.com/develop/sensors-and-location/sensors/sensors_motion

## Matières et lumière

- Conserver le plateau, le bol et les bâtonnets en 3D. Renforcer les fibres du bois, le tissu et les variations de rugosité avec des textures locales/procédurales.
- Améliorer les ombres de contact, la lumière principale et le remplissage pour mieux lire les volumes.
- Prévoir une qualité équilibrée par défaut et une qualité réduite pour les appareils plus lents. Borner la résolution de rendu et le coût des ombres.
- Les reflets, halos et lumières doivent préserver les couleurs d'équipe, les numéros et les destinations lisibles. Éviter tout éblouissement ou scintillement.

## Structure et compatibilité

- `rules.mjs` : équipes de taille variable, participants individuels, tours, captures et IA.
- `main.js` et interface : configuration, joueur actif, sélection, réglages et sauvegarde.
- `scene.js` : palette, halos, matériaux et lumières ; isoler les effets si le fichier devient difficile à maintenir.
- `physics.mjs` et `audio.js` : événements de collision et sons, en préservant le déterminisme des règles.
- `android/app` : capteurs, cycle de vie et passage des impulsions à la page locale.
- Faire évoluer le format de sauvegarde. Migrer les parties 0.2.0 à deux équipes : chaque ancien nom devient un participant avec le réglage humain/IA et le niveau de son ancienne équipe. Conserver positions, résultats en attente, tour et participant actif.
- Préserver l'identité Android et la clé de test existante. Le contrôle qui bloque un changement involontaire de signature reste actif.

## Vérification et livraison

Vérifier les tours et captures avec deux, trois et quatre équipes, les équipes mixtes, les relances d'un même participant et la migration des sauvegardes. Conserver les tests physiques et les vérifications de boucle musicale. Tester la sélection des piles, les halos de toutes les destinations, la pause et les dimensions du téléphone.

Pour les capteurs, vérifier déclenchement unique, réarmement, seuils, absence de capteur, pause et tours IA ; compléter par un essai réel sur Samsung. Contrôler que l'application reste hors ligne.

La livraison suivante comprend un APK de test nommé/versionné avec l'icône du jeu, disponible directement dans `temp/`, et les preuves de compilation. Le numéro suivant sera appliqué au début de l'implémentation. Aucun merge vers `main` ni Release définitive sans accord de Fab. Actualiser les cinq mémoires FabCopilot à chaque étape utile.
