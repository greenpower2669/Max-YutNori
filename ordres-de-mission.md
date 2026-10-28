## IMMUTABLE / À PRÉSERVER
- Dépôt Android : `greenpower2669/Max-YutNori`. FabYut est la référence en lecture seule.
- Mission MYN-001 conservée dans sa branche. Avenant MYN-005 autorise la refonte du moteur et des graphismes dans une nouvelle branche ; préserver la référence FabYut.
- Aucune fusion vers `main` ni publication définitive sans accord explicite de Fab.
- Livrer un `.apk` directement installable via GitHub, nommé projet/version, avec icône. Aucun ZIP à extraire sur le téléphone. Emplacement temporaire : `temp/` sur la branche de travail, alimenté par GitHub Actions.
- Appareil de validation humaine : Samsung SM-A576B, Android 16.
- Première identité Android réalisée : `fr.fab.maxyutnori`, nom affiché `Max YutNori` ; préserver pour les mises à jour. Signature debug de test, pas de clé de publication Play.
- Les cinq mémoires évoluent avec le travail ; secrets absents des dépôts et des journaux.

# Missions actives — Max YutNori

## MYN-023 — Clôture Android 0.8.8 et délestage — autorisée
27/10/2026, Fab : « merge release, optimises les mémoires vivantes quitte à archiver si nécessaire ».
Autorisation explicite de fusionner PR #2 et publier la version Android 0.8.8/code17. Réutiliser l'APK déjà vérifié, sans changer le jeu ni sa signature. Archiver sans perte les états anciens, garder IMMUTABLE, contrat courant, carte complète et tâches réellement ouvertes. La demande Web/PWA ci-dessous reste sur une branche séparée.
État : PRODUIT. PR #2 fusionnée cdb2ff4 ; Release Android v0.8.8 et son téléchargement vérifiés par CI40589109427, même SHA-256 APK.

## MYN-024 — Web / PWA — réalisation demandée, publication de test autorisée
27/10/2026, Fab demande de produire sa mission « Max YutNori Web / PWA » après la clôture Android.
- Reprendre le moteur Vite/Three.js/Rapier WebGL réellement fonctionnel, sans reconstruction ; base 0.8.8/code17 à revérifier.
- Créer une branche dédiée ; préserver règles, graphismes, textures, physique, animations, sons, commandes et cadrage récemment validé.
- Jeu HTTPS immédiatement jouable sur Android/ordinateur WebGL, tactile/souris, responsive, plein écran sans marges, paysage privilégié, zones de sécurité et bouton plein écran selon support.
- PWA : manifest complet, dernière icône officielle, installation Android/ordinateur et fenêtre autonome selon navigateur, cache hors ligne après premier téléchargement, sauvegardes locales et mises à jour sans perdre/interrompre la partie.
- Vérifier au lancement et périodiquement en ligne les releases GitHub Web uniquement ; comparer explicitement la version interne et le commit ; afficher « À jour », « Mise à jour disponible », « Vérification impossible ». Un numéro Android différent ne suffit jamais. Publier avec l'application un manifeste distinguant moteur, PWA et commit de déploiement ; actualisation proposée sans interruption.
- Conserver APK/AAB, chaîne Android, package, signature et sauvegardes ; base commune maximale ; emplacement du lien Android.
- Livrer Web/PWA fonctionnelles, URL HTTPS de test si possible, instructions Android/ordinateur, procédure reproductible idéalement automatique, preuves navigateur/WebGL/physique/caméra/save/installation et contrôle Android.
- Mettre les cinq mémoires à jour ; reste précis dans todo.md sur la branche de travail.
- Aucune fusion main ni release définitive de la nouvelle PWA sans validation de Fab. L'autorisation MYN-023 concerne la clôture Android préalable.
État : LIVRÉE en test privé, à valider sur appareils. PWA0.1.0/build2, source6551730, URL https://max-yutnori-web.gnrationsia.chatgpt.site ; déploiement e2cb0e6 confirmé succeeded.110 tests et15 parcours PWA/caméra verts (CI40592283542). Contrôle APK/AAB/lint de compatibilité non signé réussi : CI40593243077. Aucune release PWA définitive ni fusion de cette branche dans main. Passation : docs/passation-web-pwa-v010.md.

## MYN-025 — Accès public et erreur à la réouverture PWA — autorisée
Fab demande en vocal : « le mettre en public, que je puisse le tester après l’installation », puis fournit la capture1793140008790.jpeg avec ERR_FAILED sur l’URL officielle. L'accès est déjà public (Sites, révision2) ; ne pas refaire une publication définitive ni changer l'origine. Diagnostiquer et corriger la réouverture/install, préserver parties/cadrage/Android, vérifier le vrai cycle navigateur et publier le correctif de test.
État : CORRECTIF LIVRÉ, à valider sur l’installation de Fab. PWA0.1.0/build3, source4a481179 ; publication publique confirmée appgdep_6ae126ce9b14819182b5e5c4c9b527d9. CI40595523867 réussie :111 tests,16 parcours (HTML redirigé puis réouverture offline), zéro erreur JS, assemblage APK/AAB unsigned et lint verts. Sauvegardes et moteur intacts. La sonde HTTP brute du site reçoit403 et ne prouve pas sa redirection réelle ; page publique initiale vue dans le navigateur. Aucun merge main ni release PWA définitive.

## MYN-026 — Lancers avec l’accéléromètre Web/PWA
Fab confirme « Ça marche mais pas l’accéléromètre pour les lancers ». Corriger les capteurs de la PWA publique, conserver le geste/physique/caméra et Android ; livrer le correctif de test sans merge main ni release définitive.
État : CORRECTIF LIVRÉ, à valider sur les capteurs Samsung. PWA0.1.0/build4, sourceda25a4ae84084fa52b0c76249d7545f9c19798cb, déploiement public appgdep_6ae14d01536081918ac7d51b5b763607 succeeded. Adaptateur devicemotion exclusif au build Web vers les callbacks existants, permission au clic si requise, disponibilité après données valides, axes paysage/gravité et priorités préservés. CI40613733549 réussie :117 unités,21 parcours navigateur (dont5 capteurs), zéro erreur JS, APK/AAB unsigned et lint verts. Fab confirme « Ça marche » pour le site ; le comportement physique des capteurs et l’installation restent à mesurer sur son appareil. Aucun merge main ni release PWA définitive.

## MYN-027 — Accéléromètre activé par défaut
28/10/2026, Fab : « On ne peut pas l’activer par défaut ? ». Activation par défaut, demande de permission au premier toucher si le navigateur l’exige ; respecter OFF mémorisé et refus, conserver possibilité de réessai manuel.
État : EN COURS, build5 en préparation sur branche Web. Aucun merge main/release définitive autorisé.

## Missions antérieures
MYN-001/003/005–022 : réalisations livrées et historique intégral dans [sauvegarde.md](sauvegarde.md), avec demandes originales, avenants, commits, CI et limites. Fab autorise leur intégration dans la version 0.8.8 ; cela ne constitue pas une mesure matérielle des essais encore listés dans todo.md.
MYN-002 : suivi FAB-Copilot permanent. MYN-004 : audit audio historique conservé ; le moteur courant boucle le MP3 Arisongs, sans réouverture du binaire Unity. Aucun ordre non produit supprimé.
