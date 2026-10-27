# Contrat courant — Max YutNori 0.8.8 / code17

## Produit et identité
Jeu local multijoueur de yutnori en 3D, moteur WebGL/Three.js et physique Rapier WASM, embarqué dans Android. De deux à quatre équipes ; quatre pions par équipe ; un à six participants humains/IA par équipe. Nom « Max YutNori », package `fr.fab.maxyutnori`, signature de test existante préservée. FabYut reste la référence historique en lecture seule.

## Règles
Do/Gae/Geol : 1/2/3 cases ; Yut/Mo : 4/5 avec relance et résultat conservé. Seul le bâton marqué plat donne Back-do. Résultats accumulés jouables dans l'ordre libre ; aucun bouton pour passer un résultat. Compteur de tours individuel : franchissement arrière ajoute un tour, avant le retire, arrivée uniquement à zéro ; Back-do au départ autorise l'entrée arrière. Raccourcis depuis les coins 5/10 et sorties au centre. Piles alliées déplacées ensemble, capture adverse renvoyée en réserve avec parcours réinitialisé. Capture sans relance par défaut, variante configurable avant nouvelle partie.

## Interaction et caméra validée MYN-021
Sélection par boutons ou toucher direct, réserves espacées ; glisser sur une destination à halo visible. Pions posés sur leur support ; soulèvement dès sélection pour dégager le plateau, piles/retour/annulation cohérents. Table flottante volontaire.
Cadrage physique rapproché/redressé : focale 42°, projection 1, inclinaison de suivi 15,6° depuis la verticale. Les vues automatiques stables gardent le plateau/rebord entier, pion et destinations visibles. ×2 rapproche physiquement, s'arrête à la limite de visibilité puis retrouve le cadre normal sans cumul. Pincement indépendant, ciblage progressif du pion ; quatre vues Plateau/de dessus/Bol et lancer/libre ; rappel Plateau même pendant suivi. Gros plans temporaires et sécurité du cadrage des quatre yut en vol préservés.

## Bol et physique
Bol/socle à droite ; manipulation au doigt en vue Bol, hauteur de sécurité contre table/socle à chaque pas. Doigt prioritaire sur capteur ; auto prioritaire pour le lancer. Force 0,30–1,50, défaut 0,90, migration des anciennes puissances. Lancers auto/IA plus hauts, limites invisibles en hauteur pour contenir les yut sur la table. Disparition dès franchissement complet du rebord par les quatre yut, retour pour rangement avant relance/tour suivant. Face indéterminée = relancer ; nouvelle partie annule le vol. Pause et mouvements réduits respectés.

## Visuel, son et accessibilité
Logo officiel jade/or de Fab : source docs/assets/25701-logo-original.jpg intacte ; emblème carré 44px + nom texte lisible, favicon, icône Android adaptative et cinq densités. HUD compact semi-transparent, cartes équipes latérales et statut à gauche, commandes de force/auto toujours accessibles ; équipe active bicolore/pulsée avec texte et symboles, fixe en mode réduit. Bois cèdre/chêne, laques noire/verte, gravure dérivée de l'image et cartes de matière.
Panorama 360° conservé depuis 0.8.4 : 24 cascades, 5 nappes violettes, 7 rubans turquoise, nuages bas et lumières. Ondulations/réfraction du lac et masques arbres/berges figés ; régression pixels sur cinq phases. Fresque des six résultats agrandissable avec pince/drag et texte alternatif. Graphismes légers et animations réduites disponibles.
MP3 Arisongs original 36min embarqué, boucle locale ; Web Audio/sons de collisions bornés, déblocage sur geste, pause et volumes indépendants. Aucun téléchargement de musique depuis le téléphone.

## Sauvegarde et Android
localStorage : max-yutnori-native-v4, migration v3/v2 sans suppression ; max-yutnori-settings-v3 (fallback v2), max-yutnori-last-throw-v1. Sauvegarde après changements, reprise du résultat et des tours ; remplacement de partie après confirmation. Stockage par origine : une PWA/site et l'APK ont des espaces distincts.
Android Java17/Gradle8.13/AGP8.13, min26/target36. WebView locale HTTPS appassets.androidplatform.net/game ; assets inclus au build, réseau externe refusé, audio MIME/Range, cycle de vie et retour natifs. Signature debug native v2 conservée par cache CI avec certificat public comparé ; aucune clé Play créée. APK 0.8.8 seul livré, AAB constructible si nécessaire.

## Clôture et suite
Clôture autorisée par Fab le 27/10 réalisée : PR #2 fusionnée cdb2ff4, Release Android v0.8.8 publiée et téléchargement identique vérifié par CI40589109427 ; délestage sans perte terminé. MYN-024 demande un build Web/PWA fidèle, installable/hors ligne, mises à jour Web distinctes d'Android et URL HTTPS de test. Aucun merge/release définitive de la PWA sans validation distincte. Essais matériels ouverts dans todo.md. Preuves Android : CI40543163343, docs/revue-v088.md et temp/native-delivery-verification-v088.json. Historique complet des anciens contrats dans sauvegarde.md.

## Contrat Web/PWA0.1.0 build2 — livré en test privé
Même moteur0.8.8 et mêmes52 fichiers source du jeu/Android. Mode Vite web séparé vers pwa-dist, Android par défaut vers web-dist/game. Surcouche dans Pause : installer, plein écran, état offline, versions et actualisation. Réglages indique cet emplacement ; les bandeaux et le cadrage validé restent identiques hors adaptation des zones de sécurité. Manifest standalone/fullscreen selon support et paysage préféré ; icônes officielles192/512 et maskable512.

Source Web6551730 ; déploiement e2cb0e6 confirmé succeeded à https://max-yutnori-web.gnrationsia.chatgpt.site. Accès privé propriétaire ChatGPT ; installation/login/plein écran matériels à valider. Aucun merge main/release PWA définitive sans Fab.

Cache atomique de l'ensemble des ressources, musique comprise. La limite32Mio/fichier de l'hébergement impose un transport MP3 par fragments8Mio, assemblés en Blob sans transcodage. Taille52386596 et SHA25696c5a95a442f50ac8c0b7c1e9ea80b468434adb57f671a3c45d77c3111fd8c10, chaque fragment et le tout vérifiés. Jeu jouable pendant préparation. Le build Android conserve son MP3 et son Audio d'origine. Sauvegardes par origine ; aucun transfert automatique APK/PWA/autre navigateur.

Versions : schema1/product max-yutnori/channel web-pwa, pwaVersion semver, build entier positif monotone, engineVersion et commit Git40 caractères intégrés au bundle et dans web-version.json. GitHub : seulement releases stables web-v*, marqueur JSON dans les notes et asset web-version.json ; cohérence tag/version/build/commit et hôte/publication. Android et Arisongs ignorés. Contrôle lancement/toutes6h/page visible/retour réseau (15min de temporisation)/manuel. Hors ligne : Vérification impossible sans requête. Une release plus récente n'actualise pas silencieusement un site pas encore déployé.

Worker en attente pendant une partie ; activation explicite depuis Pause, état sauvegardé et yut immobiles (bol ready/hidden), une seule fenêtre du jeu dans le scope. Les autres pages de l'origine n'empêchent pas l'actualisation. La partie exacte survit au rechargement. Anciennes générations de cache conservées pour les documents ouverts ; localStorage jamais effacé par le worker. Les limitations d'éviction du navigateur restent applicables.

Preuves :110 tests,15 parcours PWA/caméra Chrome/SwiftShader verts, zéro erreur JS ; référence moteur0.8.8 et56 parcours historiques inchangés. Contrôle APK/AAB/lint séparé ; si la clé debug n'est pas visible dans le cache de cette branche, assemblage de contrôle unsigned, jamais distribué, sans toucher la configuration de signature canonique. L'APK officiel0.8.8 reste celui de sa Release vérifiée.

Validation finale : CI40593243077 réussie,110 tests et deux builds relancés,52 sources protégées identiques,15 parcours PWA/caméra réutilisés de40592283542 après identité des entrées confirmée, APK/AAB unsigned et lint réussis. Aucun nouvel APK/AAB de distribution ni clé.
