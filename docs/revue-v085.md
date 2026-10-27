# Revue indépendante — MYN-019 / 0.8.5

Revue en lecture seule du changement b0f5b966..b21ca91, puis corrections vérifiées par tests. Aucun problème critique, deux problèmes importants, aucun mineur.

1. Murs invisibles trop minces : la graine5 et une vitesse sortante80 à y18 franchissaient le bord au deuxième pas120Hz malgré le CCD. Régression déterministe RED. Épaississement vers l'extérieur préservant les limites intérieures ; subdivision adaptative bornée1..8 seulement au-dessus de20 unités/s, pas120Hz conservé pour les lancers ordinaires. Les cinq bords/coin sont maintenant GREEN sans téléporter les corps.
2. Trois lignes de choix de coups repoussaient le panneau d'état sur l'équipe2 à844×390. Régression DOM réelle RED avec nom long. Choix organisés horizontalement, panneau de tour sur une ligne, commandes de lancer disponibles à la phase de lancer et retirées pendant les déplacements où elles étaient inutilisables. Tests GREEN avec un résultat puis six résultats, quatre pions et destination ; les commandes reviennent avant toute relance.

La revue a aussi simulé16 vols min/max avec bol soulevé/incliné et loft IA : tous confinés, franchissement et rangement réussis, pic18.95. Les anomalies forcées12s (bol visible ou déjà disparu) ont récupéré. Sources règles/identité/panorama inchangées.

Non jugé par la revue : correspondance exacte à25678.jpg absente ; gestes/esthétique/FPS sur le Samsung réel ; signature et intégrité du nouvel APK, à contrôler sur le paquet après CI. Ces limites ne sont pas présentées comme validées. Les décisions de cadrage et la couverture des sondes restent explicites dans le plan et la passation.
