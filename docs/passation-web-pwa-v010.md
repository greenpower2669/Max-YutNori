# Passation — Max YutNori Web/PWA

Mission MYN-024, Fab, 27 octobre 2026. Lire ordres-de-mission.md puis todo.md, brain.md, brainmap.md et debughistorical.md. Historique ancien dans sauvegarde.md : ne pas le charger par défaut.

## Base conservée
Android0.8.8/code17, moteur Vite/Three.js/Rapier. PR#2 fusionnée cdb2ff4 et Release v0.8.8 publiée, APK62243800octets SHA2561b3ba30fccf41a07fb5b034946c79cd306ce488437436ad87cece09befb9e07e. CI de publication40589109427 réussie. Le cadrage MYN-021, lac0.8.4, sons/règles/physique/sauvegardes et identité fr.fab.maxyutnori sont conservés.

## Réalisation Web/PWA
Branche feature/web-pwa-v010, PR brouillon#3. Moteur0.8.8, PWA0.1.0/build1. Code source Web déployé : a330eca8fdfb1ee94d2c5590a6af38fb8e4ca35d. Modules dans web/pwa, plugin scripts/build-pwa-plugin.mjs ; build Android par défaut, mode web distinct. Les sources web/src, web/index.html et Android n'ont pas été modifiées. Dernière icône jade/or réutilisée avec déclinaisons installables.

Installation/plein écran/versions dans Pause, indication dans Réglages. Manifest standalone/paysage, cache complet offline, sauvegardes locales. GitHub Web uniquement : tags web-v*, manifeste version et build monotone ; Android/Arisongs ignorés. Actualisation explicite en pause, hors vol/transition, une seule fenêtre du jeu ; sauvegarde confirmée avant rechargement. Les anciens caches restent protégés pour les documents ouverts.

Musique originale52,386,596octets : transport Web en fragments8Mio pour respecter l'hébergement32Mio/fichier, assemblage Blob sans transcodage, SHA256 de chaque fragment et du tout. Reconstitution byte-identique vérifiée, SHA25696c5a95a442f50ac8c0b7c1e9ea80b468434adb57f671a3c45d77c3111fd8c10. APK garde son MP3 et son transport d'origine.

## Déploiement de test
URL : https://max-yutnori-web.gnrationsia.chatgpt.site
Projet Sites : appgprj_6ae11aa948088191a7b93cc0bbfa9652. Source de déploiement011af10f93ac6b1a8ce415c6f54b3228da5b1992 ; version appgprj_6ae11aa948088191a7b93cc0bbfa9652~appgver_4043b61d49ec8191b825c2d9472f7d7b ; déploiement appgdep_6ae11de6c20c819199c57c41e6c7e655 confirmé succeeded. Accès privé propriétaire ; ne pas changer l'audience automatiquement. Réutiliser ce projet et son dépôt de source.

L'aperçu cloud échoue à créer un contexte WebGL. Le site publié affiche sa connexion ChatGPT ; le contrôle automatique a refusé de poursuivre vers auth.openai.com faute d'autorisation explicite d'authentification. Aucun contournement. Les tests de moteur/physique/caméra/offline sont exécutés séparément dans la CI Chrome/SwiftShader. Ce n'est pas une preuve d'authentification ou de fluidité du site sur Samsung.

## Vérifications
109 tests unitaires, deux builds et contrôle des assets réussis localement. Deux points importants de revue reproduits puis corrigés (scope des fenêtres et cohérence hôte/publication). Rapports et preuves CI en cours de consolidation dans todo.md ; ne pas déclarer la CI finie avant résultat final. Installation réelle Android/ordinateur, fullscreen/orientation OS, confort et chauffe restent humains.

## Publication suivante
Instructions : docs/web-pwa-publication.md ; conception et journal : docs/plan-web-pwa-v010.md ; revue : docs/revue-web-pwa-v010.md. CI .github/workflows/web-pwa.yml produit les fichiers publiables et rapports, contrôle aussi APK/AAB/lint. Pour un nouveau déploiement différent, incrémenter build ; nouvelle version PWA selon les changements. Aucun merge main ni Release PWA définitive sans validation de Fab.
