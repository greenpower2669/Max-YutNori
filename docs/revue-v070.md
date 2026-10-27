# Revue 0.7.0 — 25/10/2026
Revue indépendante read-only par review_v070/Astra, première implémentation locale fae4a79..8e385c0. Aucun Critical ni Minor ; deux Important :
1. Dépôt invalide/pointercancel : drag supprimé mais lifted conservé, pion restant suspendu. Le scénario cliquait Vue de dessus avant de vérifier, ce qui masquait le défaut. Retirer ce clic et distinguer tap/interruption ; effacer lifted pour glissement terminé et interruption.
2. Pile non soulevée (IA/bouton destination direct) : montée indépendante vers même hauteur, espacement réduit à .132 au lieu de .21 après deux frames. Conserver offsets d'origine dans la hauteur de passage ; tester déplacement et retour capture.
Points confirmés : identités/configuration de signature inchangées, fresque originale identique, séparation zoom vertical/chase, projection cohérente, profondeur et pause panorama.
Limites de revue : confort/capteur/GPU Samsung, binaires finaux non fournis, balayage visuel exhaustif du panorama non réalisé ; suite navigateur gérée par l'agent principal. Ces éléments restent à vérifier ou expliciter.
Après nettoyage automatique du workspace, code reconstitué et ces deux correctifs intégrés. Preuves fraîches : 71/71 unitaires ; régressions pile et interruption observées rouges avant rétablissement ; 7/7 nouveaux scénarios navigateur verts, dont retour invalide sans changement de vue, pointercancel et espacement de pile vérifié à chaque frame. Suite complète et paquets Android encore attendus.

## Clôture technique — 26/10/2026
CI [40250007382](https://github.com/greenpower2669/Max-YutNori/actions/runs/40250007382) réussie : 71/71 tests unitaires, 41/41 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `378f987875774d90bca29b5b5acbdf2a1588f962`, binaires/preuves `a034f9c722f402dd0bfd3f0c1d9c593f976bbc6f`. Téléchargements HTTP 200, intégrité ZIP et SHA-256 contrôlés. Certificats extraits des vrais APK v2/AAB : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identiques à 0.6.0. Les quatre PNG embarqués et la musique originale sont conservés octet pour octet.

Revue indépendante traitée : retour invalide/pointercancel et espacement des piles. Régressions observées rouges puis vertes ; ajout du cadrage des réserves hors commandes, vérifié en 1000×600, 844×390 et 390×844. Pause et mode réduit couvrent aussi lumière et panorama.

Mise à jour de 0.6.0 sans désinstallation : identité fr.fab.maxyutnori, icône, signature de test et sauvegarde v4 conservées. APK paysage (les deux orientations), portrait vérifié pour le Web. Confort tactile, visibilité des halos, performance des effets et capteurs restent à valider sur Samsung SM-A576B Android 16. Aucun merge main ni Release définitive.
