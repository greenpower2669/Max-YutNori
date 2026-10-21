# État actif — Max YutNori 0.2.0 sans Unity

Candidat de test du 20/10/2026, branche `feature/native-webgl-v020`, PR brouillon #2. [APK direct, 7 923 881 octets](https://github.com/greenpower2669/Max-YutNori/raw/refs/heads/feature/native-webgl-v020/temp/Max-YutNori-v0.2.0-debug.apk).

Le jeu est recréé avec Three.js/WebGL2 et Rapier/WebAssembly : plateau/bol/bâtonnets procéduraux, résultat physique, deux équipes de quatre pions, captures/groupes/raccourcis, Back-do, ordinateur réglable, noms alternants, sauvegarde locale, pause et musique originale en boucle. Boutons tactiles et glissement pour lancer. Capteurs non implémentés, étape ultérieure.

Preuves : CI 39496484674, source 6c75714f0e7c2f8dddaaa0b77aec560cfaab1767, binaire dd5c1e2a5e12da39650b5bf912764a99b169fa90. 11/11 tests, dont 50 parties IA complètes ; 9 scénarios navigateur hors ligne passent, dont deux franchissements de fin du morceau, reprise, sauvegarde et victoire. Build et lint Android réussis ; signature APK v2 vérifiée, Android 16 ciblé ; aucun runtime Unity dans l'APK.

Installation : la signature debug diffère de 0.1.0. Désinstaller 0.1.0 avant installation ; ses données locales sont supprimées. Nouvelle clé de test conservée explicitement en cache CI, certificat public dans temp/native-signing-certificate.pem ; aucune clé privée dans Git. Le build bloque si la clé attendue disparaît. Ce n'est pas une clé de publication Play.

Validation physique Samsung par Fab encore nécessaire. Choix détaillés et point mineur différé : docs/refonte-webgl.md. Aucune fusion main ni release définitive.

## Prochaine évolution — MYN-006
Périmètre précisé par Fab : jusqu'à quatre équipes/couleurs, plusieurs participants par équipe avec choix humain/IA individuel, sons de contact, lancer au mouvement, textures et lumière améliorées. Les déplacements sont confirmés corrects ; ajouter une aura tournante au pion/groupe sélectionné et à ses destinations. Fiche proposée : docs/evolution-equipes-capteurs-halos.md. Conception à relire, non implémentée ; l'APK livré reste 0.2.0.

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
