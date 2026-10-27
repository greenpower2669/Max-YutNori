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
