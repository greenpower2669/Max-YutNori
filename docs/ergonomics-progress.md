# MYN-019 — progression

Base 0.8.4/code13 b0f5b966. 79 tests de base verts. Réalisation autorisée ; aucun APK nouveau livré.

27/10 — repère bol x=1.6, forces .3..1.5 et migration versionnée, murs Rapier invisibles hauteur26 et CCD4. Déclencheur géométrique des quatre yut, fondu .18 s sans téléportation du vol. Tests ciblés RED→GREEN (ancienne vitesse6.2, ancien cycle ready) ; 86/86 unitaires verts. Les tests historiques de repère ont été déplacés vers la nouvelle origine, leurs marges inchangées. Nouvelle dispersion en quatre patches après observation de poses sur tranche causées par empilement au même point (taux initial8/12, seuil de fiabilité conservé et repassé).

HUD/caméra/×2 implémentés ; premier scénario navigateur RED sur absence du bouton. Vérification graphique/tactile en cours, Android non lancé, dernière livraison reste0.8.4. Fichiers panorama inchangés byte pour byte par diff.

Complément force : 16/16 lancers minimaux et15/16 maximaux valides sur16 graines/directions, pics7.37 et13.55 ; le cas non lisible reste explicitement invalide et propose relance, sans inventer de face. 86 tests verts.

Revue indépendante : deux Important, aucun Critical/Minor. Correction physique RED→GREEN (graine5, vitesse80, chaque bord/coin), 100 essais supplémentaires sans sortie ; murs extérieurs épais et sous-pas adaptatifs, lancers ordinaires toujours120Hz. Régression HUD RED→GREEN sur vrai DOM/WebGL en déplacement à844×390, nom long, un puis six résultats. Choix actifs répartis horizontalement ; commandes de lancer/force/automatique toujours accessibles. Revue docs/revue-v085.md.

Non-régression panorama locale PASS : 5 phases du lac exactement identiques à la référence0.8.3, 8 sondes de terrain fixes, atmosphère mobile et réduit fixe. Rendu source0.8.4 inchangé. Caméra générale : comparaison géométrique explicite avec0.8.4 RED→GREEN, grossissement supérieur et réserves complètes dans le frustum. 89 tests unitaires attendus dans la vérification finale/CI.

Vérifications locales finales : npm test89/89, panorama GPU PASS, cinq parcours ergonomiques groupés PASS (4vues/pinch/migration, 3formats, caméra action, vols extrêmes, HUD chargé). Le dernier ajustement de marge du cadrage est couvert par son test géométrique et sera recontrôlé dans toute la CI. Aucun APK0.8.5 livré à ce stade.

CI40431151100 a échoué avant Android sur auto.uncheck invisible après lancer, conséquence du masquage trop large des commandes. Correctif : garder toutes les commandes, conserver la seule répartition horizontale des choix. Régression de visibilité dans le HUD réel. Nouvelle CI à lancer.

Correctif de CI vérifié : HUD réel PASS avec1,6 et12 résultats, nom long, aucun débordement ni chevauchement. Lancer/force/automatique tous visibles et utilisables selon leur état ; colonnes plus étroites en déplacement, choix bornés en hauteur et défilables pour les accumulations longues. Registre des cinq mémoires synchronisé. Nouvelle source à pousser pour relancer la CI complète.

## Livraison confirmée

Source `89ad97d4ed659aab3e03c68289348466bcfdf252` ; binaires `b7355bf77fb9637d325a59cb5edd290e618522b0` ; [CI 40432711889](https://github.com/greenpower2669/Max-YutNori/actions/runs/40432711889) **réussie**. Version **0.8.5/code14**, `fr.fab.maxyutnori`. **89/89 tests unitaires et 50/50 parcours navigateur hors ligne** ; aucune erreur JavaScript ni requête externe. Rendu WebGL : lac inchangé aux cinq phases de référence, sondes terrestres fixes ; panorama 0.8.4 conservé. Build/lint Android et signature APK v2 validés.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/b7355bf77fb9637d325a59cb5edd290e618522b0/temp/Max-YutNori-v0.8.5-debug.apk) — 62,499,852 octets ; SHA-256 `578d54da69f41cd0ee7bdcad871bb7ac4bea37a87eeef5c21ea217119b603fe6`. Certificat extrait du vrai APK téléchargé et identique à 0.8.4 : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`. ZIP, manifeste Android binaire, icône, quatre PNG et musique MP3 vérifiés. **APK uniquement**, aucun nouvel AAB.

**À valider par Fab sur Samsung SM-A576B Android 16** : mise à jour réelle, lisibilité du cadrage et des pions, gestes/pinch/×2/caméra action, bol à droite et retour des quatre yut, puissance et rebonds, esthétique de toutes les 24 cascades/brumes/nuages, berges immobiles et FPS/chauffe. La capture 25678.jpg n'était pas disponible dans ce checkout : la disposition décrite par Fab a guidé le travail, la correspondance visuelle exacte reste humaine. Aucun test physique Samsung ni mesure FPS revendiqué. Aucun merge `main` ni Release définitive.
