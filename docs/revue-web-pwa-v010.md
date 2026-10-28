# Revue Web/PWA — 27 octobre 2026

Revue indépendante du code4a50d2b contre cdb2ff4. Aucune critique. Deux points importants reproduits par tests puis corrigés :

- Fenêtres hors scope : l’activation comptait des onglets étrangers au jeu sur la même origine ; filtrage par URL dans le scope, test avec deux onglets dont un hors jeu et test deux fenêtres du jeu.
- Hôte/release incohérents : deux manifestes portant le même build mais des commits différents étaient comparés séparément à la version courante ; comparaison croisée ajoutée et test rouge→vert.

Point mineur : plein écran regroupé dans Pause, indication dans Réglages. Plan réaligné sur ce choix pour garder les bandeaux/cadrage existants. Les paramètres existants restent accessibles.

Contrôle complémentaire : la phase cachée du bol est un résultat stable et sauvegardé ; autorisée pour actualiser, contrairement aux transitions et au vol. Test du verrou d’actualisation rouge→vert.

Limite d’hébergement réellement rencontrée : objet MP3 de52Mo refusé par la limite32Mio de transfert. Distribution Web en fragments8Mio et reconstruction sans transcodage, tailles/SHA256 individuels et globaux ; le vrai MP3 reconstitué est identique octet pour octet. Test de corruption. Source audio/Android intacte, adaptation injectée seulement par le plugin du build Web.

Vérifié localement :109/109 tests, deux builds, logos officiels et code caméra/physique/panorama/règles/Android inchangés. Reste de la preuve navigateur et Android : voir rapport final de CI dans la passation. L’aperçu cloud ne dispose pas de contexte WebGL ; aucune conclusion visuelle ou FPS Samsung n’en est tirée.

Caches précédents conservés pour la sûreté des documents ouverts. Le nettoyage futur devra tenir compte des clients et ne jamais effacer les sauvegardes. Installation native OS, plein écran/orientation matériel et confort Samsung restent des essais humains explicitement ouverts.

Ruling : réutiliser les56 parcours verts de la référence0.8.8, prouver l'identité des52 fichiers du moteur/Android et exécuter les nouvelles régressions PWA/cadrage sur le build Web. Le doublon complet30min n'apporte pas de preuve sur les nouveaux chemins d'installation/cache. Coût si ce choix est insuffisant : un comportement non couvert du contenant Web pourrait encore dépendre du navigateur ; les validations matérielles restent ouvertes.

## Bilan final
110 tests et15 parcours PWA/caméra verts (40592283542), aucune erreur JS. MYN-D046 ajouté après échec offline reproduit puis corrigé. CI40593243077 réussie : identités de sources/entrées confirmées, deux builds, APK/AAB unsigned et lint. Clé officielle conservée ; aucun paquet unsigned distribué. Déploiement privé build2 confirmé. Installation matérielle et accès connecté non prouvés par ces tests ; validations ouvertes dans todo.md.
