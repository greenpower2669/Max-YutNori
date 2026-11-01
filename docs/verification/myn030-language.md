# MYN-030 — installation multilingue · PWA0.1.0/build7

## Contrat réalisé
Le guide et les commandes d’installation PWA suivent les préférences navigator.languages puis navigator.language : première langue FR/EN/KO prise en charge, anglais de secours. Un choix Auto/Français/English/한국어 dans le guide est mémorisé sous max-yutnori-web-language-v1. Le choix manuel prévaut ; Auto suit languagechange. Le refus du stockage garde le choix en mémoire pour la session. Aucune détection de disposition de clavier, aucune traduction distante. Les variantes fr-CA/ko-KR/en-GB sont prises en charge.

Titres, étapes Android/iPhone/iPad/ordinateur, commandes Installer/Voir les étapes/Retour au jeu, aide et messages d’installation sont traduits. Le dialogue et les messages disposent de l’attribut lang correspondant ; les messages des autres actions gardent leur langue française. Le reste de l’interface du moteur demeure celui de la version de référence.

## Preuves locales
Sept tests du client réel à frontière DOM/API : les six premiers observés rouges avant le changement, puis un statut de langue périmé reproduit rouge lors de la revue. Tous verts ensuite. 126 tests unitaires au total, zéro échec ; les8 contrôles précédents installation/plein écran passent également. Deux builds Vite et branding vérifiés. Les52 fichiers moteur/Android restent byte-identiques à cdb2ff4 ; minSdk26/targetSdk36, version Android0.8.8/code17 préservés.

Revue indépendante : deux points importants corrigés, statut et lang synchronisés, parcours guides via Pause → Voir les étapes pour laisser l’invite native Chromium conserver son rôle. Listener languagechange limité à Auto. Assertion scope/start_url ajoutée au smoke, soldant le mineur MYN-029.

## CI et publication confirmées
Source exacte Web build7 : `6f01fe0d7f9a8753f89e58b326968086b031c638` ; [CI41239685779](https://github.com/greenpower2669/Max-YutNori/actions/runs/41239685779) **réussie** :126 unités,25 parcours navigateur,0 erreur JS, deux builds, intégrité52 sources et APK/AAB unsigned/lint. Les contextes de langues se succèdent, puis tous les parcours historiques s’exécutent sur la page initiale réouverte avec ses sauvegardes. Scope/start_url sont désormais explicitement assertés.

Artefact13057506352, archive ZIP SHA-256 `dac6e0025b54511f6c748eb58da29d1f32d8678ca9e03d29ca6b2a8967c6fb7a` vérifiée ; ses27 fichiers Web sont publiés byte-identiques. Source hébergement `156d59f55b5c30b7d730b7e2869354c9f5329c2a`, version Sites8 (distincte du build PWA7), version sauvegardée `appgprj_6ae11aa948088191a7b93cc0bbfa9652~appgver_e1f0d7bfcde88191a0103ba4b54a5137`, déploiement `appgdep_6ae6539ef91c819182148f4c1175d078` **succeeded**. Même origine publique révision2 : https://max-yutnori-web.gnrationsia.chatgpt.site. Manifeste HTTPS observé sans authentification : PWA0.1.0/build7, moteur0.8.8, commit6f01fe0.

SHA-256 du fichier archive local : `3771bc5474ab2223203e5c01f233eae376eba6c3e25cf6c1d746f7afdaff6dfb` ; champ serveur archive_storage.content_hash : `sha256:40a7ec9735b39d23f680982f1bfe4f99789702d55b210f8c77f0eab058afe6dc` (empreinte distincte, sans les confondre).

### Incidents de la fixture et portée des preuves
CI41238705765 : scénario manuel/rechargement/save vert, puis timeout90s de démarrage du contexte ko-KR. CI41239177218 : diagnostic ajouté, run annulé par le push suivant avant résultat concluant. La mention provisoire « bloqué » était une hypothèse de suivi, pas une cause démontrée. CI41239685779 verte après exécution séquentielle des scènes : la cause précise du premier timeout n’est pas prouvée ; aucun correctif produit n’a été inventé pour le masquer.

Captures CI anglaise et coréenne inspectées : dialogue/sélecteur/bouton tiennent dans390×844 ; les glyphes Hangul manquent dans la police du runner Linux. Les chaînes coréennes sont bien présentes et vérifiées dans le DOM ; la lisibilité native sur iPhone reste à confirmer. Aucun téléchargement de police ni dépendance réseau ajouté.

## Essais matériels encore ouverts
Samsung SM-A576B et iPhone XS de June : langue déclarée par le navigateur, textes des menus OS, ajout à l’écran d’accueil, ouverture autonome, capteurs, plein écran et reprise hors ligne. Les locales iPhone du smoke utilisent Chrome avec une identité iPhone pour tester le branchement du guide ; elles ne constituent pas un test Safari matériel. Le navigateur de contrôle cloud reste sans contexte WebGL.

Choix manuel : ouvrir 📲 Installer ou Pause → Voir les étapes → Langue. Revenir à Auto pour suivre les préférences du navigateur. Le choix et les parties ne sont pas transférés automatiquement entre navigateurs ou origines.

Référence API : https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages ; aucune dépendance réseau à cette documentation pour jouer ou changer la langue.
