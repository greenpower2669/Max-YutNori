# Revue MYN-021 /0.8.7 —27 octobre2026

Revue indépendante en lecture seule de2fd7b6c àcec6559. Aucun défaut critique ou important identifié ;95/95 tests réexécutés.576 configurations géométriques indépendantes : quatre réserves×quatre pions×trois hauteurs×aspects0.4–4, normal/×2,720 angles de rebord à deux hauteurs ; maximum NDC0.92193. Captures avant/après inspectées : bord éloigné et plateau entier dégagés.

Après revue : le parcours de réserve opposée a révélé une marge de recul doublée. Régression unitaire rouge→verte et96 tests verts après réduction de la seule marge finale8%→4% ; le rebord conserve sa sécurité.

## Point mineur différé

Le HUD avec noms longs et une rotation pendant le suivi est testé par blocs séparés, pas conjointement avec la projection complète du rebord. Aucun dysfonctionnement observé. Cette combinaison reste une validation complémentaire/Samsung ; la géométrie et les marges utiles sont testées séparément.

## Choix et limites

- Priorité au plateau entier dans les cadrages automatiques stabilisés :×2 peut s’arrêter avant la demi-distance. Le cadre reste réellement physique à42°/projection1. Coût assumé : grossissement inférieur à2 quand le rebord l’exige.
- Gros plans temporaires et pincement manuel restent libres. Le cadrage stabilisé revient au plateau ; le pinch privilégie progressivement le pion pour éviter un saut de cible au neutre. Les sondes statiques du plateau sont préparées une fois ; calcul du fit avec vecteur réutilisé.
- Exécution native de la passation autorisée, une revue indépendante ; budget CI50min (la suite précédente complète54parcours durait32min), critères conservés.

## Validations non revendiquées

Revue : navigateur complet/gestes réels laissés à l’exécuteur pour éviter concurrence GPU ; Android/signature dépendants de la CI. Résultats définitifs à ajouter après vérification. Perception du cadrage et confort Samsung restent humains. Panorama/lac et physique0.8.6 inchangés ; aucun merge main ni Release.
