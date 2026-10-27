# Action et règles — 0.5.0
23/10/2026. Autorisation Fab : « Ok, code et rajoute une chase cam action ». Base 5ef3afd (0.4.1 + audit). Branche locale work/action-v050 ; livraison feature/native-webgl-v020, PR #2. Ni main ni Release.

## Contrat
- Tours individuels : recul S/O20 → O19 ou B5 ajoute un tour ; arrivée avant sur O20 retire un tour ; zéro termine. O1 → O20 en recul ne termine pas. Supprimer le passage de résultat ; ordre des résultats libre.
- Migration v2/v3 → v4 : conserver positions, joueurs, résultats et anciens stockages. Historique absent : initialiser les tours à 1 (0 pour les pions terminés).
- Groupe : chemin commun, compteurs individuels conservés ; seuls les pions à zéro finissent. Capture remet à 1.
- Toucher les pions, réserves espacées, glisser sous le doigt vers une destination lumineuse. Dépôt invalide/annulation : aucun résultat consommé. Boutons accessibles conservés.
- Caméra : rapprochement doux, mouvement latéral, recul, suivi. Second doigt pour zoomer ; son relâchement ne dépose rien. Animations réduites sans cinématique ; Plateau réinitialise, Vue libre garde ses contrôles.
- Lancers auto/IA plus hauts avec cadrage adapté et mêmes règles physiques. Décor MYN-009 reporté.

## Étapes et preuves
1. Régressions rouges passages de ligne, groupes/migrations ; moteur v4 et suite complète.
2. Tests hauteur/caméra ; chase-camera.mjs, pawn-input.js, scène/UI.
3. Navigateur : toucher, dépôt valide/invalide, deux doigts, interruptions, ordre des coups ; maintenir les 20 scénarios existants.
4. Revue indépendante globale, corrections et vérification.
5. 0.5.0/code6, CI APK/AAB/lint, signature 0.4.1 conservée, téléchargements vérifiés, mémoires.

## Interfaces
rules.mjs/teams.mjs : état pur ; chase-camera.mjs : trajectoire/zoom ; pawn-input.js : pointeurs sans mutation moteur ; scene.js : projections/rendu ; main.js : autorisation/sauvegarde ; physics.mjs : trajectoire.
Le glissement utilise une caméra de référence stable pour le point de suivi ; le pion est reprojeté sous le doigt après déplacement caméra pour éviter une poursuite divergente. Seule une sélection explicite déclenche la séquence.
