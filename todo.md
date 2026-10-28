# Max YutNori — état actuel 28 octobre 2026

## Livré et vérifié
- [x] Android0.8.8/code17 : PR#2 fusionnée cdb2ff4 ; Release v0.8.8, APK62243800octets et SHA2561b3ba30f… identiques au binaire validé. CI40589109427 ; mémoires de main réalignées4a96847.
- [x] Archives intégrales des cinq mémoires avant clôture et avant consolidation PWA, avec source/empreintes dans sauvegarde.md. Aucune mission perdue.
- [x] PWA0.1.0/build4 sur feature/web-pwa-v010, PR#3 brouillon. Source Web déployéeda25a4ae84084fa52b0c76249d7545f9c19798cb.
- [x] HTTPS public (demande explicite de Fab, Sites révision2) : https://max-yutnori-web.gnrationsia.chatgpt.site ; déploiement source04e0cc4 confirmé succeeded.
- [x] Manifest/icônes officiels, installation/plein écran dans Pause, responsive et safe areas, cache complet et MP3 fragmenté/reconstitué byte-identique, sauvegardes locales et mises à jour différées.
- [x] Versions Web distinctes d'Android, build/semver/commit cohérents, signal hors ligne et gestion d'erreurs explicites.
- [x]110 tests unitaires et15 parcours Chrome/SwiftShader PWA/caméra (CI40592283542), zéro erreur JS.52 fichiers moteur/Android intacts ; référence Android0.8.8 et ses56 parcours déjà verts conservés.
- [x] CI40593243077 réussie : APK/AAB de compatibilité non signés assemblés et lint passé. La clé et la configuration de signature publiées ne sont pas remplacées ; aucun paquet de contrôle distribué. Les15 parcours sont réutilisés de40592283542 après preuve d'identité des entrées.
- [x] Installation/publication reproductibles, passation et revue : docs/web-pwa-publication.md, docs/passation-web-pwa-v010.md, docs/revue-web-pwa-v010.md ; preuves docs/verification/web-pwa-source-integrity.json.

## Validation humaine encore ouverte
- [ ] Installer la PWA depuis Chrome/Edge Android et ordinateur, vérifier lancement autonome, plein écran/paysage et zones de sécurité ; naviguer hors ligne après « Jeu hors ligne prêt » ; vérifier reprise après fermeture et actualisation réelle.
- [x] Accès public confirmé par Sites et ouverture sans authentification dans le navigateur.
- [x] MYN-025 : réponse de cache redirigée normalisée et build3 public déployé ;111 tests/16 parcours et Android/lint verts dans40595523867.
- [x] Fab indique « Ça marche » pour le site après build3 ; détail des essais d’installation non attesté.
- [ ] [FAB] Récupérer build4 depuis Pause ; Réglages → Activer les capteurs si proposé, autoriser, garder le lancer au mouvement coché ; Auto désactivé, repos environ1s puis geste. Confirmer sens du bac et lancer dans les deux paysages, pause/reprise et conservation de la partie.
- [ ] Samsung SM-A576B Android16 : mise à jour APK, cache/masques OEM de l'icône, logo/contrôles avec grossissement système.
- [ ] Gestes : réserve/piles, glisser/déposer/annulation, pinch avec/sans pion, ×2/retours caméra, rotation avec noms longs pendant suivi.
- [ ] Bol/capteurs : sens dans les deux paysages, levage/inclinaison/descente/lancer, rangement, pause/reprise et priorité auto/doigt/capteur.
- [ ] Panorama :24 chutes, brumes violettes/turquoise, nuages/raccords360°, lac et arbres/berges en normal/léger/réduit ; partie complète, musique prolongée, FPS/chauffe/confort.
- [ ] Mineur Web historique : surveiller le repli des cartes/vues et noms longs en portrait étroit.
- [ ] Traiter les retours ciblés ; ne pas déclarer ces essais matériels réalisés par les seuls tests automatiques.

## Décisions et prochaines publications
- [ ] Validation de Fab avant merge main/release PWA définitive. PR#3 reste en brouillon ; augmenter build pour tout nouveau déploiement différent.
- [ ] Seulement si Fab demande Google Play : clé d'upload durable et AAB de publication. Aucun nouvel AAB0.8.8 de distribution ; clé/certificat officiels inchangés.
- [ ] Avant une future distribution Android depuis une autre branche : restaurer légitimement la clé existante (cache historique ou sauvegarde/Secret), sans en générer une autre. Le contrôle unsigned ne prouve pas une nouvelle signature.

## Reprise technique
Lire ordres-de-mission.md, puis ce fichier, brain.md, brainmap.md et debughistorical.md. Les étapes intermédiaires et faux statuts « en cours » archivés ne sont pas des tâches ouvertes. Aucune release PWA définitive ni merge PWA main effectué.

## MYN-025 — avancement
Nouvelle conversation vocale autorise le public ; état actuel public confirmé, aucun changement d'audience à refaire. Le navigateur charge la page publique ; la réouverture arrive sur un protocole d'erreur interne non observable par l'outil. Service worker : un HTML obtenu après redirection était conservé avec redirected=true, incompatible avec une navigation redirect=manual. Reproduction HTTP réelle en test unitaire rouge, puis normalisation des bytes/headers verte. Fixture navigateur modifiée pour rediriger /index.html vers /, comme un hébergement à URL canonique. Build3 à vérifier et déployer.

## Clôture technique MYN-025
CI40595523867 réussie :111 tests,16 parcours réexécutés sur le build3 avec redirection302 réelle de la fixture, zéro erreur JS, compilation APK/AAB unsigned et lint. Déploiement public appgdep_6ae126ce9b14819182b5e5c4c9b527d9 succeeded, source edd60a821422b2fc09100d365819445fc75d8a49. Revue ciblée sans point bloquant : docs/revue-pwa-reopen-v003.md. La sonde HTTPS brute reçoit403 ; elle ne confirme donc pas la canonicalisation effective du fournisseur. La cause de code est reproduite et corrigée ; résultat sur l’ancienne installation à confirmer par Fab.

## MYN-026 — capteurs Web, livré en test
- [x] Cause corrigée : adaptateur devicemotion navigateur vers le pont attendu par le moteur, uniquement dans le build Web ; aucune modification des52 sources core/Android.
- [x] Permissions au clic selon API, réception de mesures valides avant disponibilité, axes identiques Android, gravité filtrée, calibration et priorités existantes. Préférence OFF conservée. Bouton/état lisibles dans Réglages.
- [x]117 unités et21 parcours navigateur (5 nouveaux capteurs) verts, zéro erreur JS ; deux builds et APK/AAB unsigned/lint réussis : CI40613733549. Revue indépendante sans point bloquant. Les événements de capteur de CI sont simulés, le moteur/physique est réel.
- [x] Build4 sourceda25a4ae84084fa52b0c76249d7545f9c19798cb, hébergement04e0cc4409e3d028d8fe6392d6101196bf7acca6, versionappgprj_6ae11aa948088191a7b93cc0bbfa9652~appgver_d9292ca69d7481918dd7f59b29b0c678, déploiementappgdep_6ae14d01536081918ac7d51b5b763607 succeeded. Public préservé ; PR#3 reste brouillon, pas de merge main/release définitive.
- [ ] Validation du geste et des permissions réelles sur Samsung de Fab, ainsi que dialogue natif Safari si cet appareil est visé. Les tests de CI ne valent pas essai matériel. Procédure et diagnostic : docs/revue-pwa-motion-v004.md.
