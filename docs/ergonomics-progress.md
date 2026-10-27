# MYN-019 — progression

Base 0.8.4/code13 b0f5b966. 79 tests de base verts. Réalisation autorisée ; aucun APK nouveau livré.

27/10 — repère bol x=1.6, forces .3..1.5 et migration versionnée, murs Rapier invisibles hauteur26 et CCD4. Déclencheur géométrique des quatre yut, fondu .18 s sans téléportation du vol. Tests ciblés RED→GREEN (ancienne vitesse6.2, ancien cycle ready) ; 86/86 unitaires verts. Les tests historiques de repère ont été déplacés vers la nouvelle origine, leurs marges inchangées. Nouvelle dispersion en quatre patches après observation de poses sur tranche causées par empilement au même point (taux initial8/12, seuil de fiabilité conservé et repassé).

HUD/caméra/×2 implémentés ; premier scénario navigateur RED sur absence du bouton. Vérification graphique/tactile en cours, Android non lancé, dernière livraison reste0.8.4. Fichiers panorama inchangés byte pour byte par diff.

Complément force : 16/16 lancers minimaux et15/16 maximaux valides sur16 graines/directions, pics7.37 et13.55 ; le cas non lisible reste explicitement invalide et propose relance, sans inventer de face. 86 tests verts.

Revue indépendante : deux Important, aucun Critical/Minor. Correction physique RED→GREEN (graine5, vitesse80, chaque bord/coin), 100 essais supplémentaires sans sortie ; murs extérieurs épais et sous-pas adaptatifs, lancers ordinaires toujours120Hz. Régression HUD RED→GREEN sur vrai DOM/WebGL en déplacement à844×390, nom long, un puis six résultats. Boutons inutilisables de lancer remplacés par les choix actifs pendant le déplacement. Revue docs/revue-v085.md.

Non-régression panorama locale PASS : 5 phases du lac exactement identiques à la référence0.8.3, 8 sondes de terrain fixes, atmosphère mobile et réduit fixe. Rendu source0.8.4 inchangé. Caméra générale : comparaison géométrique explicite avec0.8.4 RED→GREEN, grossissement supérieur et réserves complètes dans le frustum. 89 tests unitaires attendus dans la vérification finale/CI.

Vérifications locales finales : npm test89/89, panorama GPU PASS, cinq parcours ergonomiques groupés PASS (4vues/pinch/migration, 3formats, caméra action, vols extrêmes, HUD chargé). Le dernier ajustement de marge du cadrage est couvert par son test géométrique et sera recontrôlé dans toute la CI. Aucun APK0.8.5 livré à ce stade.
