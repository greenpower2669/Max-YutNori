# Diagnostics actifs et prévention — Max YutNori

Historique intégral, témoignages et étapes intermédiaires : sauvegarde.md (instantanés8debca3 puis42fb257). Ne pas le charger par défaut. Les validations humaines ouvertes sont dans todo.md.

| ID | Cause/observation vérifiée et prévention actuelle |
| --- | --- |
| MYN-D043 | Nouveau PNG incomplet détecté avant0.8.8 : structure/chunks/CRC/IEND et pixels compilés contrôlés. Les trois anciens assets nommés .png sont réellement JPEG ; préserver leurs bytes et ne pas imposer la signature PNG à ces fichiers historiques. Source logo originale intacte. |
| MYN-D042 | Fond du plateau coupé corrigé en0.8.7 : visée recentrée, suivi15,6° depuis la verticale, plateau/rebord entier dans la zone utile. Focale42°/projection1 et ×2 physique borné ; régression caméra réutilisée sur le vrai build PWA et réussie. |
| MYN-D040/041 | Recul cumulatif et oubli du focus après sélection automatique : retours normaux stables, cadrage du pion/destinations, pinch indépendant et transition progressive vers la sélection. Ne pas réintroduire une compensation de projection qui éloigne sous×2. |
| MYN-D038/039 | Commandes auto/force accessibles pendant déplacement ; bol retiré seulement après franchissement complet des quatre yut ; confinement en hauteur et rangement respectés. Référence physique0.8.5 inchangée. |
| MYN-D037 et précédents | Protéger strictement les arbres/berges des UV du lac, séparer nuages et embruns, garder les24 cascades/rubans/brumes et le rendu lac0.8.4. Comparaison pixels sur cinq phases et sources/fixtures préservées. Ne pas confondre lenteur SwiftShader et FPS matériel. |
| MYN-D044 | Une release Android plus haute ne prouve jamais une mise à jour Web. Schéma/canal/semver/build/commit internes et manifeste d'hôte/GitHub cohérents ; asset et marqueur de release Web exigés. Cache atomique, audio Range correct et aucun skipWaiting automatique pendant une partie. |
| MYN-D045 | Limite réelle Sites32Mio/objet contre MP3 de52386596octets : fragments8Mio et reconstruction byte-identique sans transcodage, SHA256 par fragment et global. Revue : filtrer les fenêtres hors scope et comparer aussi hôte/publication entre eux ; tests rouges→verts. |
| MYN-D046 | Le signal navigateur offline était ignoré ; un fetch disponible via cache/worker pouvait donner À jour. Reproduction rouge puis retour Vérification impossible sans requête si online=false. PWA build2. La CI confirme ensuite15 parcours verts, y compris offline et actualisation sauvegardée. |
| MYN-D047 | Clé debug mise en cache sur la branche Android inaccessible à la branche sœur PWA. Ne pas la remplacer/générer/copier en clair. Compatibilité APK/AAB unsigned par init Gradle temporaire si absent ; configuration source et APK officiel inchangés. Vérification de signature originale distincte. |

## Résultats et limites
110 tests unitaires ;15 parcours Chrome/SwiftShader verts dans CI40592283542, zéro erreur JS, dont WebGL/Rapier, lancer réel, cache/musique offline, sauvegarde, versions Android ignorées, worker en attente, contrôle multi-fenêtre, actualisation sans perte et caméra MYN-021.52 fichiers source moteur/Android intacts contre cdb2ff4 ;56 parcours de cette référence déjà verts. CI finale40593243077 réussie : APK/AAB unsigned assemblés et lint passé, sans changement de clé. Les15 parcours précédents ne sont pas prétendus réexécutés : leur identité d'entrées est prouvée avant réutilisation.

Le cloud preview n'offre pas de contexte WebGL. Le site HTTPS privé est publié mais son authentification de vérification vers auth.openai.com a été refusée par le contrôle automatique, faute d'autorisation explicite ; aucun contournement. Ces limites ne sont pas présentées comme des essais Samsung/installation réalisés.

## MYN-D048 — ERR_FAILED après installation / navigation du cache
Capture Fab1793140008790.jpeg après demande d'accès public. Sites confirme public révision2 ; ouverture du document public sans connexion constatée, pas une absence de publication. La réouverture du navigateur de contrôle rencontre un protocole d'erreur interne interdit à l'observation ; ne pas contourner cette limite.
Cause de code reproduite : cache.put gardait le drapeau redirected d'une réponse HTML obtenue après302 /index.html→/. Une navigation redirect=manual ne peut pas accepter cette réponse du worker. Test HTTP réel rouge : cached.redirected=true ; copie de la réponse et préservation des bytes/MIME donnent false et le test passe. Sonde du déploiement réel en CI pour confirmer sa canonicalisation. Scénario navigateur désormais avec redirection réelle ; tests/build3 et déploiement à confirmer. Aucun effacement localStorage ni takeover d'une partie en cours.

MYN-D048 — vérification finale : CI40595523867 verte,111 unitaires et16 parcours dont vraie redirection de shell suivie de réouverture offline ; aucune erreur JS ; Android/lint préservés. Sonde publique GET depuis runner :403 sur /, /index.html, manifest et sw ; cette sonde ne permet pas d'attribuer formellement la redirection au fournisseur en production. L'accès est public révision2 et le premier document a été observé sans connexion dans le navigateur de contrôle. Correctif de code publié build3, validation sur le téléphone de Fab encore attendue.

## MYN-D049 — Accéléromètre absent de la PWA
Fab : « Ça marche mais pas l’accéléromètre pour les lancers ». Réouverture MYN-D048 confirmée fonctionnelle par Fab. Inspection : aucun devicemotion dans la PWA, motionAvailable dépend uniquement du pont Java MaxYutMotion. Cause de code certaine ; permissions/présence des capteurs sur le téléphone non encore mesurées. Adaptateur Web isolé à implémenter, même détecteur MotionThrow et mêmes priorités.

Régression reproduite rouge (pas de données/aucun lancer), verte après adaptateur :6 tests Node avec le vrai MotionThrow.117 unitaires verts ; tous les fichiers core et Android inchangés. La seule injection capteurs passe avant le corps de main.js via le plugin Web. Suite navigateur et revue en cours.

CI40613205453 :117 unités/deux builds/intégrité verts, premier lancer navigateur non déclenché sans erreur JS. La fixture attend40ms entre événements sous SwiftShader ; hypothèse à isoler : ralentissement GPU créant des écarts>200ms, donc désarmement normal. Ajouter relevé des écarts et diagnostic réel, puis horodatages déterministes à la frontière DeviceMotionEvent ; ne pas affaiblir le détecteur.

Isolement CI40613461307 : hypothèse timing infirmée (écart max126,9ms). Diagnostic bridge.state=permission, received=0 : Chrome du runner expose désormais requestPermission ; la fixture prétendait tester un navigateur sans cette méthode mais conservait son implémentation réelle. Corriger seulement cette frontière matérielle : méthode explicitement absente pour ce parcours, refusée/accordée pour les deux autres. Ne pas contourner les permissions du produit ni changer MotionThrow.
