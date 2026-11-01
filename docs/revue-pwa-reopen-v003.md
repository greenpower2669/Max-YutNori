# Revue ciblée MYN-025 — réouverture PWA, build3

Base bf37000, source correctif4a4811790fbeff8ca038ec05f7124df0732a8b4a.

Revue indépendante des trois fichiers worker/test/fixture : aucun point Important ou Critical. La copie d’une réponse redirigée préserve bytes décodés, type MIME et statut ; retrait des en-têtes Content-Encoding/Length devenus obsolètes. Aucune activation automatique forcée ni écriture/suppression de sauvegarde ajoutée.

Test Node avec vraie réponse HTTP302→200 : échec avant correctif car cache.redirected=true ; succès après copie. La fixture Chrome redirige maintenant /index.html vers / avant installation et réouverture offline.111 tests unitaires verts ;16 parcours navigateur verts en CI40595523867. Résultat global CI40595523867 : réussite, y compris compilation APK/AAB unsigned et lint. La sonde HTTPS brute du site public renvoie403 sur ses quatre URL ; elle ne confirme pas la redirection réelle du fournisseur. La première page publique a bien été observée dans le navigateur.

Déploiement public confirmé : projet appgprj_6ae11aa948088191a7b93cc0bbfa9652, version appgprj_6ae11aa948088191a7b93cc0bbfa9652~appgver_4053619e28c48191ae2ef1679365fc65, source hébergement edd60a821422b2fc09100d365819445fc75d8a49, déploiement appgdep_6ae126ce9b14819182b5e5c4c9b527d9 succeeded. L’origine et les données restent identiques.

Le navigateur de contrôle a chargé la page publique puis refusé l’observation de son protocole d’erreur interne à la réouverture ; le diagnostic se poursuit par tests de logiciel, sans contournement de ce refus. Les essais réels sur l’installation de Fab restent humains. Fermer les fenêtres du jeu permet à l’ancien worker de libérer la place après téléchargement du correctif.
