# Revue 0.5.0 — 23/10/2026
Relecteur indépendant, lecture seule, base 5ef3afd → 0442342. 49 tests relancés et réussis.

## P2 confirmé : cadrage des destinations
OrbitControls limitait à 18 un recul calculé jusqu’à 28. Équipe 3, pion 1 en réserve, résultat 1, aspect 2,5 : O1 projeté y=-1,1388, hors écran. Portrait aspect 0,7 : O1 x=1,0487 sans plafonnement, facteur horizontal insuffisant.
Correction : angle de champ minimal vertical/horizontal, distance enveloppant les destinations, limite caméra action harmonisée ; vue libre garde sa limite. Régression rouge puis verte sur les quatre réserves, trois résultats et deux orientations. Test navigateur encore à valider.

## Points examinés
- Compteurs individuels/groupes/capture/migration : aucun défaut relevé.
- Leader terminant avant les partenaires : suivi du pion explicitement choisi conservé ; pas de changement de cible implicite.
- Anciennes sauvegardes sans historique : compteur initial 1 (0 terminés), conforme au contrat ; sources intactes.
- Signature Android : configuration conservée, preuve binaire à fournir après CI.
- CDP : caractérisation locale réelle montre touchEnd([second]) lève seulement le second ; touchMove([first]) ne le lève pas. Documentation générée trompeuse. Correction du harnais seulement.

## Glissement suivi : convergence
Le test réel à deux doigts reproduisait un pion sous le doigt mais une destination qui se déplaçait trop vite avec le recentrage. Le gain de déplacement du point de suivi dépend maintenant du rapport entre cadrage courant et caméra de référence ; il reste inférieur au déplacement de correction du doigt. Une saisie déplacée passe directement à la vue action. Régression navigateur en cours, assertion mathématique de contraction ajoutée.

## Seconde lecture ciblée
Cadrage confirmé corrigé. Nouveau P2 : le brouillard fixe 26–50 masquait les pions lors d’un recul supérieur à 50. Sa plage suit désormais la distance de la caméra, avec une marge conservée autour du plateau. Régression navigateur sur le dézoom à deux doigts et la distance au brouillard ajoutée. Aucun autre défaut relevé.

## Vérification finale
CI [40078589575](https://github.com/greenpower2669/Max-YutNori/actions/runs/40078589575) réussie : 51/51 tests unitaires, 27/27 scénarios navigateur hors ligne, aucune erreur JS/requête externe ; compilation APK/AAB et lint Android réussis. Source `4a28e1c84ef76f628a85f12dae0b7f2c467d9bfe`, binaires/preuves `c37c719642b5e8b6bb14c40fb2a5ef4e054061f9`. Téléchargements HTTP 200, ZIP et SHA-256 contrôlés ; certificat APK v2 et certificat AAB extraits des fichiers téléchargés identiques à 0.4.1 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`.

Les régressions tactiles et de cadrage sont également passées en navigateur. Le relecteur a confirmé la correction du brouillard après contrôle de la distance effective.
