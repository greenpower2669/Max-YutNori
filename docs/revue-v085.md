# Revue indépendante — MYN-019 / 0.8.5

Revue en lecture seule du changement b0f5b966..b21ca91, puis corrections vérifiées par tests. Aucun problème critique, deux problèmes importants, aucun mineur.

1. Murs invisibles trop minces : la graine5 et une vitesse sortante80 à y18 franchissaient le bord au deuxième pas120Hz malgré le CCD. Régression déterministe RED. Épaississement vers l'extérieur préservant les limites intérieures ; subdivision adaptative bornée1..8 seulement au-dessus de20 unités/s, pas120Hz conservé pour les lancers ordinaires. Les cinq bords/coin sont maintenant GREEN sans téléporter les corps.
2. Trois lignes de choix de coups repoussaient le panneau d'état sur l'équipe2 à844×390. Régression DOM réelle RED avec nom long. Choix organisés horizontalement, panneau de tour sur une ligne, commandes de lancer/force/automatique conservées, choix répartis horizontalement dans le bandeau. Tests GREEN avec un résultat puis six résultats, quatre pions et destination ; le mode automatique reste modifiable même pendant un déplacement.

La revue a aussi simulé16 vols min/max avec bol soulevé/incliné et loft IA : tous confinés, franchissement et rangement réussis, pic18.95. Les anomalies forcées12s (bol visible ou déjà disparu) ont récupéré. Sources règles/identité/panorama inchangées.

Non jugé par la revue : correspondance exacte à25678.jpg absente ; gestes/esthétique/FPS sur le Samsung réel ; signature et intégrité du nouvel APK, à contrôler sur le paquet après CI. Ces limites ne sont pas présentées comme validées. Les décisions de cadrage et la couverture des sondes restent explicites dans le plan et la passation.

Complément après première CI : masquer tout le panneau retirait aussi auto, ce que le parcours historique a détecté. Le panneau est intégralement conservé ; les colonnes seules sont resserrées et la zone de choix défile après sa hauteur maximale. Vérification navigateur avec1/6/12 résultats, trois commandes toujours visibles, aucune barre horizontale ni collision avec les cartes.

## Contrôle du paquet après revue

Source `89ad97d4ed659aab3e03c68289348466bcfdf252` ; binaires `b7355bf77fb9637d325a59cb5edd290e618522b0` ; [CI 40432711889](https://github.com/greenpower2669/Max-YutNori/actions/runs/40432711889) **réussie**. Version **0.8.5/code14**, `fr.fab.maxyutnori`. **89/89 tests unitaires et 50/50 parcours navigateur hors ligne** ; aucune erreur JavaScript ni requête externe. Rendu WebGL : lac inchangé aux cinq phases de référence, sondes terrestres fixes ; panorama 0.8.4 conservé. Build/lint Android et signature APK v2 validés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/b7355bf77fb9637d325a59cb5edd290e618522b0/temp/Max-YutNori-v0.8.5-debug.apk) — 62,499,852 octets ; SHA-256 `578d54da69f41cd0ee7bdcad871bb7ac4bea37a87eeef5c21ea217119b603fe6`. Certificat extrait du vrai APK téléchargé et identique à 0.8.4 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. ZIP, manifeste Android binaire, icône, quatre PNG et musique MP3 vérifiés. **APK uniquement**, aucun nouvel AAB.

Le contrôle de signature/paquet laissé ouvert par la revue est maintenant effectué par l’exécuteur sur le vrai téléchargement. Les validations matérielles restent ouvertes.
