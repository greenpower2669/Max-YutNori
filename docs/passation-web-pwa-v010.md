# Passation — Max YutNori Web/PWA

Mission MYN-024, Fab, 27 octobre 2026. Lire ordres-de-mission.md puis todo.md, brain.md, brainmap.md et debughistorical.md. Historique ancien dans sauvegarde.md : ne pas le charger par défaut.

## Base conservée
Android0.8.8/code17, moteur Vite/Three.js/Rapier. PR#2 fusionnée cdb2ff4 et Release v0.8.8 publiée, APK62243800octets SHA2561b3ba30fccf41a07fb5b034946c79cd306ce488437436ad87cece09befb9e07e. CI de publication40589109427 réussie. Le cadrage MYN-021, lac0.8.4, sons/règles/physique/sauvegardes et identité fr.fab.maxyutnori sont conservés.

## Réalisation Web/PWA
Branche feature/web-pwa-v010, PR brouillon#3. Moteur0.8.8, PWA0.1.0/build3. Code source Web déployé : 4a4811790fbeff8ca038ec05f7124df0732a8b4a. Modules dans web/pwa, plugin scripts/build-pwa-plugin.mjs ; build Android par défaut, mode web distinct. Les sources web/src, web/index.html et Android n'ont pas été modifiées. Dernière icône jade/or réutilisée avec déclinaisons installables.

Installation/plein écran/versions dans Pause, indication dans Réglages. Manifest standalone/paysage, cache complet offline, sauvegardes locales. GitHub Web uniquement : tags web-v*, manifeste version et build monotone ; Android/Arisongs ignorés. Actualisation explicite en pause, hors vol/transition, une seule fenêtre du jeu ; sauvegarde confirmée avant rechargement. Les anciens caches restent protégés pour les documents ouverts.

Musique originale52,386,596octets : transport Web en fragments8Mio pour respecter l'hébergement32Mio/fichier, assemblage Blob sans transcodage, SHA256 de chaque fragment et du tout. Reconstitution byte-identique vérifiée, SHA25696c5a95a442f50ac8c0b7c1e9ea80b468434adb57f671a3c45d77c3111fd8c10. APK garde son MP3 et son transport d'origine.

## Déploiement de test
URL : https://max-yutnori-web.gnrationsia.chatgpt.site
Projet Sites : appgprj_6ae11aa948088191a7b93cc0bbfa9652. Source de déploiement edd60a821422b2fc09100d365819445fc75d8a49 ; version appgprj_6ae11aa948088191a7b93cc0bbfa9652~appgver_4053619e28c48191ae2ef1679365fc65 ; déploiement appgdep_6ae126ce9b14819182b5e5c4c9b527d9 confirmé succeeded. Accès public demandé explicitement par Fab et confirmé par Sites, révision2. Préserver cette audience publique. Réutiliser ce projet et son dépôt de source.

L'aperçu cloud échoue à créer un contexte WebGL. Le site publié affiche sa connexion ChatGPT ; le contrôle automatique a refusé de poursuivre vers auth.openai.com faute d'autorisation explicite d'authentification. Aucun contournement. Les tests de moteur/physique/caméra/offline sont exécutés séparément dans la CI Chrome/SwiftShader. Ce n'est pas une preuve d'authentification ou de fluidité du site sur Samsung.

## Vérifications
110 tests unitaires, deux builds et contrôle des52 sources protégées réussis localement et en CI. Deux points importants de revue reproduits puis corrigés (scope des fenêtres et cohérence hôte/publication). CI40592283542 :15/15 contrôles PWA/caméra réussis, zéro erreur JS ; statut hors ligne corrigé après test rouge, actualisation sauvegardée et blocage multi-fenêtre vérifiés. CI40593243077 : réussite globale,110 tests, deux builds, identité des entrées des15 parcours confirmée avant réutilisation, APK/AAB unsigned et lint réussis. Le cache de signature étant hors scope de cette branche, aucun paquet de contrôle signé n’est annoncé et aucune clé n’est remplacée. Installation réelle Android/ordinateur, fullscreen/orientation OS, confort et chauffe restent humains.

## Publication suivante
Instructions : docs/web-pwa-publication.md ; conception et journal : docs/plan-web-pwa-v010.md ; revue : docs/revue-web-pwa-v010.md. CI .github/workflows/web-pwa.yml produit les fichiers publiables et rapports, contrôle aussi APK/AAB/lint. Pour un nouveau déploiement différent, incrémenter build ; nouvelle version PWA selon les changements. Aucun merge main ni Release PWA définitive sans validation de Fab.

## MYN-025 — ERR_FAILED et public
La capture de Fab après installation montre ERR_FAILED. Accès public déjà actif, page initiale ouverte sans connexion. Corriger le cache des réponses HTML redirigées : copie des bytes dans une nouvelle Response sans redirected ni métadonnées de transport obsolètes. Reproduction HTTP réelle rouge→verte,111 tests verts et revue ciblée sans point bloquant. Build3 déployé publiquement avec succès. CI40595523867 réussie :111 tests,16 parcours réexécutés (dont shell redirigé puis réouverture offline), zéro erreur JS et Android unsigned/lint verts. La sonde du serveur public reçoit403 et ne confirme pas sa canonicalisation réelle ; la page initiale publique a été vue dans le navigateur. Aucun changement moteur/caméra/Android/sauvegardes.
