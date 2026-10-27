# Livraison vérifiée — 0.8.7/code16

Source `2afdf9bbd9d67846784631b4e86df746adc687ed` ; binaires `c480b902b8ded4f4ecfd0569ea724fcabd336c86` ; [CI 40517279977](https://github.com/greenpower2669/Max-YutNori/actions/runs/40517279977) **réussie**. Version **0.8.7/code16**, identité `fr.fab.maxyutnori`. **96/96 tests unitaires et 55/55 parcours navigateur hors ligne**, aucune erreur JavaScript ni requête externe ; compilation/lint Android et signature APK v2 validés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/c480b902b8ded4f4ecfd0569ea724fcabd336c86/temp/Max-YutNori-v0.8.7-debug.apk) — 62,500,444 octets ; SHA-256 `391ae8450a15392639d2bf1b67b922d06fc9bbcb7640e60194781d25c81d2867`. Vrai téléchargement HTTP 200, ZIP, manifeste Android/version, quatre PNG et MP3 vérifiés. Certificat extrait de l’APK identique à la 0.8.6 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. Installation par-dessus la 0.8.6 possible, essai réel encore humain. **APK uniquement**, aucun nouvel AAB.

**À valider sur Samsung SM-A576B Android 16 par Fab** : mise à jour réelle ; proximité/lisibilité et bord éloigné pendant les séquences ; ×2, pincement/prises et retours ; rotation avec noms longs pendant un suivi ; esthétique, FPS et chauffe. Aucun essai physique Samsung ni mesure matérielle revendiqué. Le cas combiné HUD long + rotation pendant le suivi reste un point mineur de couverture : les blocs sont testés séparément, aucun dysfonctionnement établi.

## Revue et choix conservés

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
