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
Fab autorise le 27/10 la fusion/release Android 0.8.8 et le délestage. MYN-024 demande un build Web/PWA fidèle, installable/hors ligne, mises à jour Web distinctes d'Android et URL HTTPS de test. Aucun merge/release définitive de la PWA sans validation distincte. Essais matériels ouverts dans todo.md. Preuves Android : CI40543163343, docs/revue-v088.md et temp/native-delivery-verification-v088.json. Historique complet des anciens contrats dans sauvegarde.md.

## Web/PWA 0.1.0 build1 — en réalisation
Build mode web vers pwa-dist ; build Android par défaut inchangé. Surcouche install/plein écran/version dans Pause, manifest standalone/paysage et icônes officielles dérivées. Version interne intégrée au bundle : channel web-pwa, PWA0.1.0, build entier monotone1, moteur0.8.8 et commit source. Releases GitHub tag web-v* avec manifeste signé par sa cohérence tag/build, données dans la release et asset web-version.json ; Android et Arisongs ignorés. État hôte et publications comparés, API toutes les6h/en ligne et à la demande. Sans réseau/format cohérent, Vérification impossible. Cache intégral atomique incluant musique ; audio Range hors ligne ; worker n'active jamais automatiquement un remplacement pendant une partie. Actualisation explicite depuis Pause, yut rangés, sauvegarde confirmée et une seule fenêtre du jeu. Identité/sauvegardes Android conservées ; stockage Web distinct par origine.
