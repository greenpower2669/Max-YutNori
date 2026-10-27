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

## Missions antérieures
MYN-001/003/005–022 : réalisations livrées et historique intégral dans [sauvegarde.md](sauvegarde.md), avec demandes originales, avenants, commits, CI et limites. Fab autorise leur intégration dans la version 0.8.8 ; cela ne constitue pas une mesure matérielle des essais encore listés dans todo.md.
MYN-002 : suivi FAB-Copilot permanent. MYN-004 : audit audio historique conservé ; le moteur courant boucle le MP3 Arisongs, sans réouverture du binaire Unity. Aucun ordre non produit supprimé.
