# MYN-031 — WebApp principale, application du Store au choix

Décision de Fab du1 novembre2026 : installer la WebApp en premier ; une popup facultative propose l’application du Store. Elle remplace l’ancienne priorité Store (trace conservée dans l’avenant IMMUTABLE de ordres-de-mission.md).

## Comportement
Le bouton Installer garde exactement le parcours PWA : invite native Chromium quand disponible, sinon guide multilingue existant. Après la fin de cette invite ou le bouton de retour du guide, une popup secondaire peut proposer une version native officielle. « Continuer avec la WebApp » est primaire ; ouvrir Google Play/App Store exige un clic explicite. Escape et le choix de continuer ferment la popup et mémorisent le refus pour cette version. Un refus est relu avant l’affichage, y compris entre deux onglets déjà ouverts ; stockage bloqué : choix conservé en mémoire. Pas de popup de démarrage en pleine partie, pas de renvoi automatique, pas de retrait de la PWA selon le SDK.

FR/EN/KO et attribut lang conservés. Vérification Web existante inchangée : canal web-pwa, versions/build/commit/hôte, contrôle manuel/périodique/retour réseau et activation volontaire du worker avec sauvegarde. Les versions natives ne sont pas utilisées comme des versions PWA.

## Dépendance actuelle d’activation
STORE_CATALOG dans web/pwa/store-offer.mjs contient Android:null et iOS:null. Aucune fiche officielle Max YutNori n’est vérifiée dans cette mission ; la lecture directe du package Play n’a pas fourni de page accessible, et les recherches ont montré d’autres jeux qui ne sont pas utilisés. Cela ne prouve pas une absence mondiale de publication. La popup reste donc inactive pour les vrais utilisateurs jusqu’à validation de la fiche exacte et de ses versions. Les liens positifs dans les tests sont explicitement des fixtures, pas des annonces de publication.

Pour activer après publication : vérifier l’identité/publisher et la fiche officielle, relever version native et version du moteur embarqué, renseigner published:true, verifiedAt ISO, version, engineVersion et URL. Android exige packageId fr.fab.maxyutnori et une URL play.google.com/store/apps/details avec un seul id exact ; iOS exige appId numérique et une route de fiche apps.apple.com/[pays/]app/[nom/]idAPPID. Refuser domaine, identité ou route ambiguës. Aucun changement des identités/signes Android autorisé par cette configuration.

Le contrôle compare le moteur natif vérifié au moteur Web (offre périmée refusée), pas le numéro de version de l’app au numéro PWA. La version native affichée est celle relevée dans le catalogue ; le navigateur ne déclare ni la version native installée, ni qu’elle est à jour. La boutique demeure responsable de sa compatibilité et de ses mises à jour. Revalider les données et augmenter le build Web lors d’un changement du catalogue ; remplacer les assertions d’absence du smoke mobile par un cas positif/rejet adapté à la vraie disponibilité, puis CI avant publication.

## Vérifications locales et revue
136 unités réussies, dont10 nouveaux scénarios Store ; cinq rouges initiaux et trois rouges lors de la revue avant corrections. Huit contrôles installation/plein écran réussis. Branding et deux builds Vite réussis ;52 sources moteur/Android, version.mjs et sw-template.js inchangés.
Revue : refus inter-onglets et URLs Play à id contradictoires / Apple hors route de fiche corrigés ; smoke catalogue vide également vérifié dans le contexte mobile, et pas seulement le bureau.

## CI et publication confirmées
Source exacte build8 `5c77d18078de2b49c86953b1d0f32921eda23081`. [CI41313598457](https://github.com/greenpower2669/Max-YutNori/actions/runs/41313598457) **réussie** :136 unités,27 parcours Chrome/SwiftShader,0 erreur JS, deux builds,52 sources protégées identiques et APK/AAB unsigned/lint. Les tests positifs de popup restent à la frontière DOM/API ; le vrai catalogue public vide est contrôlé sur bureau et mobile.

Artefact13086875158, SHA-256 ZIP `78274f7c27933ce6d1ae63dce36c60e38ef5965eb3729a572c722a43810cd1a2` vérifié ;27 fichiers pwa-dist publiés byte-identiques. Hébergement source `077ea387532202126667135ab5e72056a1d78050`, version Sites9 (distincte du build PWA8), version sauvegardée `appgprj_6ae11aa948088191a7b93cc0bbfa9652~appgver_e82e5ac959e0819189589a00299f32f5`, déploiement `appgdep_6ae7474b68ac819186bc15191a2e8a50` **succeeded** sur https://max-yutnori-web.gnrationsia.chatgpt.site. Manifeste HTTPS lu sans authentification : PWA0.1.0/build8, moteur0.8.8, commit5c77d18. Même origine et audience publique révision2.

SHA-256 du fichier archive local téléversé `455323d2830d789cb7add9bb66b30189ea20bec9a4cdd21d1fe8c1e40dfe0b3f` ; champ serveur archive_storage.content_hash `sha256:a957d009cfc6e252a90d108455f0681c688881d3c5e74508be9db82d38382075` (empreintes distinctes). Version.mjs et sw-template.js inchangés ; nouveau cache généré automatiquement pour le build8. Contrôle des versions Web et actualisation sauvegardée testés en CI.

La dépendance de fiche officielle reste ouverte : code de popup livré/testé, activation réelle différée tant que ses données n’ont pas été validées. Aucun Store n’est annoncé disponible à tort.

## Limites
Une offre avec une vraie boutique, navigation vers celle-ci, installations OS, capteurs et reprise de l’installation existante demandent les essais Samsung SM-A576B/iPhone XS. Les tests positifs de la popup sont des contrôles DOM/API ; le catalogue public est vide, donc les parcours navigateur de ce build doivent laisser la WebApp sans proposer de lien non vérifié. Aucune fusion main, aucune Release définitive, aucune nouvelle clé/signature/distribution Android.
