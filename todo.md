# Max YutNori — état courant MYN-030 · 31 octobre 2026

## MYN-030 — build7 public, réalisé et vérifié
- [x] Détection navigator.languages / navigator.language, FR/KO/EN, repli anglais ; choix Auto/Français/English/한국어 dans le guide, mémorisé séparément des parties.
- [x] Six régressions rouges puis vertes ;126 unités et8 contrôles installation/plein écran passent localement. Stockage bloqué : choix en mémoire, jeu préservé.
- [x] Deux parcours navigateur multilingues ajoutés ; assertion scope/start_url du manifest ajoutée au smoke existant.
- [x] CI41239685779 réussie :126 unités/25 parcours,0 erreur JS, deux builds et APK/AAB unsigned/lint. Artefact13057506352 vérifié par SHA-256,27 fichiers byte-identiques publiés ; déploiement appgdep_6ae6539ef91c819182148f4c1175d078 succeeded, manifeste HTTPS build7/commit6f01fe0 observé.
- [ ] Essais réels Samsung et iPhone XS et langues des menus système à confirmer ; aucun essai matériel simulé déclaré réel.

## Historique vérifié MYN-029 — build6
- [x] PWA **0.1.0/build6**, moteur **0.8.8/code17**, branche `feature/web-pwa-v010` ; bouton Installer hors Pause et dans Pause, guides Android/iOS avec repères coréens. Routage Google Play différé conservé.
- [x] CI [41233773003](https://github.com/greenpower2669/Max-YutNori/actions/runs/41233773003), source `19cb558fc293de1e0833c5578be077e044b266f0` : **119 unités, 23 parcours Chrome/SwiftShader, zéro erreur JS**, deux builds, APK/AAB de contrôle **non signés** et lint réussis. Les parcours ont été exécutés, pas seulement hérités d'un ancien run.
- [x] Comparaison HEAD de reprise/CI : seuls les quatre fichiers mémoire avaient changé depuis la source testée ; MYN-029 ajoute uniquement vérifications/documentation hors entrées de build. Comparaison au socle `cdb2ff4` et empreintes : **52 fichiers moteur/Android intacts** ; Gradle minSdk26, targetSdk36, version0.8.8/code17.
- [x] MYN-029 local : 119 unités relancées, branding et deux builds réussis ; 8 contrôles DOM/API complémentaires (Android, iPhone coréen, iPad, lancement autonome, bureau, invite native acceptée/reportée et commandes plein écran/paysage avec refus) réussis. Script et limites dans docs/verification/myn029-install-check.mjs.
- [x] Artefact exact de la CI téléchargé, SHA-256 vérifié et ses 27 fichiers publiables copiés byte-identiques ; cache SW différent du build5, activation volontaire et sauvegarde exacte vérifiées en CI.
- [x] Publication publique de test réussie, **même origine HTTPS** : https://max-yutnori-web.gnrationsia.chatgpt.site ; source hébergement `8e77dcbd19f9ac9d4edbbaa0d86a782ae9ab8faf`, déploiement `appgdep_6ae6469acff481918f0b7e22ab22470a`. Manifeste HTTPS observé dans le navigateur : build6/commit19cb558. Audience publique révision2 préservée.
- [x] Android officiel 0.8.8 et APK validé inchangés ; aucune nouvelle clé ni distribution Android. Clôture historique PR#2/Release v0.8.8 conservée.
- [x] Cinq mémoires actualisées ; historique complet de l'ancien todo conservé dans sauvegarde.md. Rapport : docs/verification/myn029-build6.md ; empreintes/CI/déploiement : docs/verification/web-pwa-source-integrity.json.

## Réalisé, à tester sur appareil
- [ ] Samsung **SM-A576B** : Chrome → bouton 📲 Installer/invite ou menu ; ouverture par icône, plein écran, paysage/portrait et zones de sécurité. Capteurs ON par défaut, éventuelle permission au premier toucher, OFF/refus persistants, réessai manuel.
- [ ] iPhone XS de June en coréen : Safari → Partager **공유** → Sur l'écran d'accueil **홈 화면에 추가** → Ajouter **추가** ; ouverture autonome et retour au jeu.
- [ ] Mise à jour réelle depuis build5/6 vers build7 : Pause → Vérifier les mises à jour → Actualiser le jeu ; attendre le cache complet et vérifier partie exacte après fermeture/réouverture hors ligne. Conserver les données du site et la même origine. Fermer les autres fenêtres de ce jeu si demandé.
- [ ] Commandes : réserves/piles, glisser/déposer/annulation, pinch avec/sans pion, ×2/retours caméra, noms longs pendant suivi et rotation ; vérifier recouvrement du nouveau bouton avec grossissement système.
- [ ] Bol/capteurs : deux paysages, levage/inclinaison/descente/lancer, rangement et pause/reprise ; priorités Auto/IA/doigt/capteur, repos environ1s avant geste.
- [ ] Panorama :24 chutes/brumes/nuages/raccord360°, lac et arbres/berges, modes normal/léger/réduit ; partie complète, musique prolongée, GPU/FPS/chauffe et confort.
- [ ] Android APK : mise à jour, icône/cache OEM et accessibilité Samsung restent des essais matériels distincts.

## En attente
- [ ] Traiter les retours des deux appareils. Mineur historique : repli cartes/vues et noms longs en portrait étroit. [AGENT] Mineur soldé MYN-030 : assertions scope/start_url passent en CI.
- [ ] **Validation explicite de Fab avant fusion main ou Release PWA définitive. PR#3 reste ouverte en brouillon.** Aucun merge/release définitive dans MYN-029.
- [ ] **Après publication effective Google Play seulement** : vérifier fiche officielle exacte, identité et minSdk réel ; activer priorité Store Android compatible, PWA si incompatible/sans Store, PWA guidée iOS. Le seul user-agent ne certifie pas la compatibilité.
- [ ] Si publication Android demandée : restaurer la clé légitime existante depuis cache/sauvegarde/Secrets, puis AAB signé avec sauvegarde durable. Le contrôle unsigned n'est pas une preuve de signature ; aucun remplacement automatique.

## Bloqué / limites précises
- Navigateur cloud : création du contexte WebGL impossible, donc rendu interactif local non validé dans cet environnement. Le vrai moteur/WebGL/Rapier a passé les 23 parcours CI avec SwiftShader.
- Navigation directe vers le SW public bloquée par le navigateur cloud (`ERR_BLOCKED_BY_CLIENT`), sonde HTTP brute 403. Manifeste public build7 observé, archive du SW vérifiée et publication réussie ; activation de l'installation existante à confirmer sur appareil.
- Pas de Samsung/iPhone physique relié ; dialogues OS, ouverture autonome réelle, capteurs/GPU et éviction du stockage restent non mesurés.
- Cache de clé Android absent du runner PWA : APK/AAB de compatibilité construits unsigned sans modifier les sources de signature. L'APK officiel reste celui de sa Release vérifiée.

## Reprise
Lire ordres-de-mission.md puis ce fichier, brain.md, brainmap.md et debughistorical.md. Source Web build7 `6f01fe0d7f9a8753f89e58b326968086b031c638` ; les commits mémoire ultérieurs ne changent pas le bundle. Une version Sites n°8 correspond ici au **build PWA7** : compteurs distincts.

MYN-030 CI41238705765 échouée :126 unités/deux builds/intégrité verts, scénario manuel/rechargement/save vert, puis timeout90s sur nouveau contexte locale ko-KR avec identité iPhone. Aucun résultat Android de ce run (étapes sautées). Cause encore inconnue ; diagnostics page/console/requêtes/screenshot ajoutés au contexte concerné sans modifier le produit ni augmenter le timeout. Build7 non publié.

Isolement MYN-030 : deuxième passage de diagnostic encore bloqué au test multi-contextes après plus de6min. Exécuter les scènes de locales séquentiellement (fermer le document principal, conserver son contexte/cache/save, réouvrir après chaque contexte locale fermé) ; mêmes locales et même moteur. Diagnostic console émis avant screenshot borné5s. Hypothèse ressource/contexte non confirmée, aucune modification produit ; CI suivante doit départager.

Clôture MYN-030 : CI41239685779 réussie, y compris les deux parcours langues et tous les anciens tests. Les lignes de diagnostic antérieures sont un historique d’essais, plus un blocage courant. Rapport docs/verification/myn030-language.md et preuves JSON actualisés. Essais matériels, prononciation lecteur d’écran et glyphes coréens restent à valider.
