# Suivi MYN-013 — plan docs/plan-comfort-v070.md
Première implémentation locale 8e385c0 : 68 tests et build Web réussis ; six nouveaux parcours navigateur exécutés, premier rendu rejeté par mot GLSL réservé patch, renommé regionMask. Suite complète précédente arrivée au moins aux tests caméra et recul, résultat final non récupéré.
Revue indépendante review_v070 (Astra) de fae4a79 à 8e385c0 : deux Important — retour invalide laisse lifted actif ; piles compressées car montée vers une hauteur commune. Aucun Critical ni Minor.
Nettoyage automatique du workspace après interruption : checkout local et journaux supprimés. GitHub 0.6.0 et passation a4efee4 intacts. Reclone max-yutnori-v070, reconstitution depuis changements de session ; toutes les vérifications à refaire, ne pas attribuer les tests perdus au nouveau code.
Corrections de revue reconstituées : annulation distinguée du tap ; glissement terminé enlève lifted, retour sans clic de vue compensatoire. Offsets verticaux d'origine conservés pendant montée/traversée des piles, y compris capture vers réserve. Tests dédiés à rejouer rouge/vert puis suite complète.
Décisions : hardware Samsung reste à Fab ; signatures des nouveaux paquets contrôlées après CI ; inspection visuelle du panorama à refaire après restauration, pas de garantie extrapolée sur tous les appareils. Prochain geste : sauvegarde GitHub intermédiaire puis smoke final, CI et vérification des binaires.

Checkpoint distant faadbc251d3ab87b769b57065c99ebd50b857890 confirmé. 71 tests unitaires et build frais passent ; deux régressions rouges vérifiées avant rétablissement. Smoke confort en cours : préparation du geste corrigée pour dézoomer avant prise en réserve, qui était cachée par le HUD après le zoom précédent.

Vérification fraîche locale : 71/71 tests unitaires, build Web et 7/7 scénarios confort passent, erreurs JS et requêtes externes vides. Annulation/retour et pile directe couverts sans réparation par changement de vue. Prochain geste : suite complète en CI et compilation Android, puis contrôle des vrais téléchargements.

Suite CI intermédiaire 40220650889 lancée sur a4545cb. Contrôle visuel supplémentaire : D029 réserves sous boutons en vue verticale, assertion rouge puis marge de projection corrigée ; nouvelle validation nécessaire.

26/10 : D029 corrigé et vérifié localement, 71 unitaires/build Web/7 scénarios confort verts, réserves accessibles aux formats 1000×600, 844×390 et 390×844. CI intermédiaire 40220650889 réussie (source a4545cb), binaires 2cc6e4dec0f0fc15e000334ce9bcd9c1d58e473f. La marge de cadrage doit encore être incluse dans la CI finale ; ne pas livrer le paquet intermédiaire.

## Clôture technique — 26/10/2026
CI [40250007382](https://github.com/greenpower2669/Max-YutNori/actions/runs/40250007382) réussie : 71/71 tests unitaires, 41/41 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `378f987875774d90bca29b5b5acbdf2a1588f962`, binaires/preuves `a034f9c722f402dd0bfd3f0c1d9c593f976bbc6f`. Téléchargements HTTP 200, intégrité ZIP et SHA-256 contrôlés. Certificats extraits des vrais APK v2/AAB : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identiques à 0.6.0. Les quatre PNG embarqués et la musique originale sont conservés octet pour octet.

Revue indépendante traitée : retour invalide/pointercancel et espacement des piles. Régressions observées rouges puis vertes ; ajout du cadrage des réserves hors commandes, vérifié en 1000×600, 844×390 et 390×844. Pause et mode réduit couvrent aussi lumière et panorama.

Mise à jour de 0.6.0 sans désinstallation : identité fr.fab.maxyutnori, icône, signature de test et sauvegarde v4 conservées. APK paysage (les deux orientations), portrait vérifié pour le Web. Confort tactile, visibilité des halos, performance des effets et capteurs restent à valider sur Samsung SM-A576B Android 16. Aucun merge main ni Release définitive.
