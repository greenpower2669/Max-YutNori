# Suivi action 0.5.0
- Base distante 5ef3afd29279372aee2c3e2c12ec5144afefd56e. Copie locale précédente nettoyée automatiquement, récupérée par clone sparse le 23/10.
- Plan écrit ; dernière livraison 0.4.1. Actif : régressions moteur.
- À suivre : caméra/gestes, navigateur, revue, Android et livraison.

- Moteur v4, migrations, caméra, gestes et lancers intégrés. 49 tests unitaires et build Web verts ; 20 scénarios existants verts. Test ciblé caméra/tactile en cours.
- Test CDP : touchEnd termine tous les doigts ; caractérisation réelle : touchEnd([second]) lève ce doigt seulement, touchMove([first]) ne le lève pas (documentation générée inexacte). Aucun changement du geste produit pour cette correction de harnais.
- Plan sauvegardé distant e4f38c1ee4fc223c6852ac6ad33e5415f840ee07.

- Revue indépendante : un P2 cadrage corrigé, régression rouge puis verte. Revue docs/revue-v050.md.

- 51 tests unitaires verts. Quatre nouveaux scénarios réels passés : sélection/cinématique, pinch/dépôt, annulation/ordre, recul/ligne. Tests complémentaires et CI finale à confirmer.
- Brouillard corrigé et confirmé par le relecteur.
