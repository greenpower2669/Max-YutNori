## Livraison vérifiée
CI [40168413538](https://github.com/greenpower2669/Max-YutNori/actions/runs/40168413538) réussie : 62/62 tests unitaires, 34/34 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `a5d12ed492e0ad0656184cb68ab977280ef15c48`, binaires/preuves `03b939304c60a7923f99d560c906015cd6782614`. Téléchargements HTTP 200, intégrité ZIP et SHA-256 contrôlés ; certificat APK v2 et certificat AAB extraits des vrais fichiers téléchargés identiques à 0.5.0 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Les trois PNG embarqués sont identiques aux originaux fournis par Fab.

Tous les défauts importants sont corrigés et leurs régressions passent. Signature vérifiée ; validation matérielle Samsung reste ouverte.

# Revue 0.6.0 — 25/10/2026

Revue indépendante gpt-6-astra, lecture seule, plage bf048e1..3634c42 ; pas de sous-revue. Aucun défaut critique, deux défauts importants.

1. Rangement : l'arc fixe traverse le rebord pour un yut proche du bol (reproduction x=-3.4, y=-.25). Correction : dégagement radial si nécessaire, montée, traversée avec marge couvrant la longueur entière, rotation en hauteur puis descente intérieure. Régression proche/loin rouge puis verte ; les corps restent cinématiques pendant l'animation et redeviennent dynamiques au terme.
2. Caméra : un dernier déplacement immédiat après la retombée conserve le retour différé au plateau. Le rangement passe alors hors champ. Reproduction navigateur réelle rouge avec graine physique 2 et coup immédiat. Correction : désarmer returnToBoard au démarrage du rangement. Régression verte dans la suite finale.

Le premier smoke ciblé a également détecté le dialogue de victoire trop précoce : ouverture maintenant conditionnée à bowlCycle.ready. Régression vérifiée dans une première suite complète 33/33 ; suite finale enrichie à 34/34. Les 62 tests unitaires passent après corrections ; build Web réussi.

Limites de revue : appareil Samsung physique et performance WebView non accessibles ; signature/fichiers Android vérifiés après CI ; appareil physique non testé. Aucun autre défaut bloquant identifié : règles v4, gestes et second doigt, matériaux/UV locaux, identité Android préservés. Pas de défaut mineur différé. Aucun merge main/Release.
