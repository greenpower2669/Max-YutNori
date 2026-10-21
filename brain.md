# État actif — Max YutNori 0.3.0 en vérification

Mission MYN-006 approuvée par Fab le 21/10/2026 (« Oui »). Branche `feature/native-webgl-v020`, PR brouillon #2. Dernier APK livré : 0.2.0 ; nouveau paquet pas encore déclaré prêt.

Implémenté : 2–4 équipes de quatre pions, 1–6 participants humains/IA par équipe avec relais après le tour complet ; halos tournants assortis au pion/groupe choisi et aux destinations ; matières bois/tissu et éclairage ; sons des collisions Rapier et volume effets distinct ; lancer au mouvement Android optionnel, désactivé pendant pause/dialogue/IA/lancer. Migration v2→v3 préservant partie et ancien fichier local.

25 tests unitaires et 14 scénarios navigateur ont passé localement. CI 39597634373 : tests unitaires/build Web réussis, contrôle des halos bloqué par une attente fixe de 120 ms. Attente d'une vraie image et temps d'animation initial non négatif en correction. Revue indépendante terminée : un P2 (son de victoire interrompu) corrigé avec régression rouge avant correction. Validation finale et compilation/signature APK/AAB restent à terminer.

Contrat approuvé : docs/evolution-equipes-capteurs-halos.md ; plan : docs/plan-evolution-v030.md ; suivi : docs/evolution-progress.md et todo.md. Identité `fr.fab.maxyutnori`, version 0.3.0/code 3 ; conserver la clé de test 0.2.0, bloquer toute substitution. Aucun merge main ni Release.

Validation Samsung SM-A576B Android 16 encore nécessaire pour la sensibilité réelle, la lisibilité et le son prolongé. Les capteurs simulés ne valent pas essai matériel.

---

## Historique du wrapper et de l'audit
# Max-YutNori — Contrat

## Intention validée
Fab veut installer son jeu FabYut existant sur Android. Son PC est cassé. La première étape est une enveloppe APK, sans réécriture du jeu, avec mémoire vivante FabCopilot et dépôt séparé.

## Version de test livrée v0.1.0
- Application Android Java, WebView accélérée matériellement, paysage, contenu local HTTPS intercepté depuis les assets.
- Export Unity Play figé et embarqué : loader, framework JavaScript, WASM et données. Les règles du jeu restent compilées telles quelles.
- Export autonome au démarrage : test réseau externe bloqué réussi, aucune ressource absente. Pas de permission Internet dans l'APK hors ligne.
- L'écran de chargement affiche progression et erreur explicite. Retour Android demande confirmation avant de quitter la partie. Pause/reprise gérées par le cycle de vie WebView.
- Icône représentant le plateau et les bâtonnets ; nom affiché « Max YutNori ».
- Première identité de test réalisée : `fr.fab.maxyutnori`, code 1, version 0.1.0. Aucun ancien package Android ou publication Play trouvé dans le nouveau dépôt initial.
- Signature debug de test uniquement ; publication Play et signature de production hors de cette mission.

## Limites connues
Les sources Git sont Unity 2022.3.12f1. L'export publié peut provenir d'un autre état ; ne pas prétendre prouver leur équivalence. Modifier le C# exigera une nouvelle compilation Unity ou un portage ultérieur distinct.
La compilation et le démarrage sur navigateur ne prouvent pas le confort tactile, le rendu ou le son sur Samsung : validation Fab obligatoire.

## Preuves de livraison
`temp/build-info.txt`, `temp/apk-verification.txt`, `temp/SHA256SUMS`, `temp/web-smoke.json` et `temp/web-startup.png` accompagnent l'APK direct. CI : https://github.com/greenpower2669/Max-YutNori/actions/runs/39301357387. APK de test uniquement ; pas de publication Play ni fusion main.

## Audio — constat du 20/10/2026
Fab attend la répétition de la musique. Le binaire embarqué 0.1.0 contient un seul AudioClip (`ARIRinstr`, 239,3279877 s) et un AudioSource actif, démarrage automatique, `Loop = false`. Cette configuration est incompatible avec une répétition automatique assurée par cet AudioSource. Le comportement au moment précis de l'arrêt sur Samsung n'a pas été tracé. Audit MYN-D005, aucune correction appliquée.

## État actif — MYN-005
La refonte remplace le moteur Unity par Three.js et Rapier/WASM. La description v0.1.0 ci-dessus reste historique. Contrat : docs/refonte-webgl.md ; version prévue 0.2.0, pas encore livrée.

## Candidat natif corrigé
La première compilation complète 0.2.0 a réussi (CI 39438116160, environ 8 Mo). Corrections de relecture en cours de validation avant livraison finale. Les capteurs restent une étape ultérieure. La signature debug diffère de 0.1.0 : il faut désinstaller 0.1.0 avant installation, ce qui efface ses données locales.

## Travail 0.3.0 — 21/10/2026
Moteur v3 local : 2–4 équipes, 1–6 participants individuels, migration v2. Interface encore 0.2.0 à adapter ; dernière livraison reste 0.2.0. Plan : docs/plan-evolution-v030.md.

0.3.0 en intégration : interface 2–4 équipes/1–6 joueurs individuels, halos assortis, matières avec relief/reflets, sons des collisions Rapier et accéléromètre Android optionnel. Sauvegardes v3 stockées séparément ; ancienne v2 conservée et migrée. Capteur au repos 350 ms avant geste, non actif en pause, dialogue, lancer, IA ou lancer automatique. Tests unitaires 25/25 ; packaging et revue encore attendus.
