# Livraison vérifiée MYN-022

Le visuel jade/or fourni par Fab est intégré dans le jeu avec emblème carré de 44 px et nom texte lisible, ainsi que dans le favicon et l’icône Android. Calque adaptatif 108 dp / visuel 56 dp et cinq densités classiques ; source JPEG conservée intacte, dérivés Lanczos uniquement. Le bandeau compact garde ses commandes accessibles et sa hauteur paysage.

Source `08abcaed4940511bdbd73cb3a863c2172209e93a` ; binaires `99543419bca0b55a9b12e3faeb98fa8833aecf50` ; [CI 40543163343](https://github.com/greenpower2669/Max-YutNori/actions/runs/40543163343) **réussie**. Version **0.8.8/code17**, identité `fr.fab.maxyutnori`. **96/96 tests unitaires et 56/56 parcours navigateur hors ligne**, aucune erreur JavaScript/requête externe. WebGL lac aux cinq phases à delta nul, compilation/lint Android et signature APK v2 réussis.

[📱 APK directement installable](https://github.com/greenpower2669/Max-YutNori/raw/99543419bca0b55a9b12e3faeb98fa8833aecf50/temp/Max-YutNori-v0.8.8-debug.apk) — 62,243,800 octets ; SHA-256 `1b3ba30fccf41a07fb5b034946c79cd306ce488437436ad87cece09befb9e07e`. Vrai téléchargement HTTP200, intégrité ZIP, manifeste/version/package vérifiés. **Pixels des sept dérivés logo/icônes identiques aux sources approuvées après compilation**, ressources adaptatives/legacy et références icon/roundIcon vérifiées. Certificat extrait du vrai APK : `0df9d3279c2bb60023ca3a4beefe017c449249a42383f53f1e52ce63fd69916a`, identique à 0.8.7. Mise à jour sans désinstallation possible ; essai réel encore humain. APK uniquement, aucun nouvel AAB.

Treize fichiers caméra/physique/panorama et décor/règles conservés octet pour octet à la base ce531ea. Cadrage rapproché et redressé MYN-021, fond/rebord visible, ×2 physique et pincement préservés. Lac 0.8.4 : aucune modification d’ondulation, réfraction, vitesse/intensité, masque ou rendu. Les 24 cascades, brumes et nuages, les règles, sauvegardes et musique restent préservés. Aucun merge main/Release définitive.

**À valider par Fab sur Samsung SM-A576B Android16** : installation réelle, icône du lanceur/cache et masques OEM animés, lisibilité du logo, confort tactile et capteurs/son, rotation avec noms longs pendant un suivi, autres dimensions et grossissement système, esthétique/FPS/chauffe. Captures et tests automatiques ne prouvent pas ces validations matérielles. Le « Parfait » antérieur n’est pas une mesure exhaustive.

## Rapport de revue et décisions conservés

## Précision de format des images historiques — MYN-022

Les trois assets historiques nommés moonlit-panorama.png, rules-fresco.png et engraved-table.png sont réellement des JPEG. Ils restent byte-identiques ; seul le nouveau logo est un PNG. Le contrôle de structure PNG ajouté était trop large : prévol ZIP constitué des vrais assets observé RED (Invalid PNG signature), puis GREEN en limitant cette exigence au nouveau logo. Contrôle byte-identique des anciens assets maintenu. Aucun changement du produit ; CI relancée sur ce correctif du vérificateur.

# Revue MYN-022 / 0.8.8 — 27 octobre 2026

Revue indépendante en lecture seule de ce531ea → 02389a4, complétée par lecture de 5b63c936 ; aucun sous-agent de revue supplémentaire.

## Résultat et correctif

Aucun Critical ; un Important : PNG Web tronqué dans le commit initial, 65 853 octets au lieu de 132 938, premier IDAT incomplet. Le build local précédent possédait la copie complète, donc les seules captures ne protégeaient pas le prochain build frais. Les six PNG Android et la source JPEG étaient intacts. Aucun Minor restant.

Correctif du réalisateur : génération PNG en mémoire, vérification des chunks/CRC/IEND, écriture temporaire puis remplacement atomique et relecture ; dérivé Web restauré au SHA attendu 6b9628808ead1c53792404ba602b26af931411da25d4e4311c624c1df84fa0f1. Cause précise de la troncature entre génération et commit non établie ; ne pas l’attribuer sans preuve à Pillow, Git ou au transport.

Garde-fou scripts/verify_branding.py observé RED « Truncated PNG chunk », puis GREEN après restauration. Sept empreintes/dimensions et PNG complets contrôlés avant build CI ; vérification des chunks également dans le vérificateur APK. Suite complète 96/96 verte après correction, build reconstruit. L’ancien vecteur inactif a été supprimé explicitement. Nouveau contrôle de livraison compare les pixels décodés des sept dérivés avec le vrai APK, même après optimisation AAPT.

## Vérifications du réviseur

96/96 tests rejoués ; source JPEG identique à la base ; six PNG Android conformes pixel par pixel aux dérivés Lanczos. Trois captures 844×390,390×844,1000×600 : logo carré lisible, ×2 et commandes dégagés. Trois aperçus de masque : bâtonnets entiers. Manifeste, versions, CSS et vérificateur de livraison relus sans autre défaut constaté.

## Points laissés au réalisateur et validations humaines

- APK réel, compilation/lint, ressources compilées, signature, téléchargement HTTP/SHA/provenance : à vérifier par CI et sur le binaire téléchargé avant livraison, pas présumés acquis par la revue.
- Samsung, cache d’icône, masque OEM animé, installation réelle et mise à jour Android16 : humain. Les aperçus statiques ne les prouvent pas.
- Navigation/rotation/HUD : réviseur sans navigateur pour éviter un GPU concurrent ; preuves exécutées par le réalisateur puis suite complète CI.
- Dimensions autres que les trois scénarios et grossissement système : pas de validation exhaustive ; garder le point ouvert sur Samsung.
- FPS, capteurs, son et confort tactile réels : humain, non mesurés ici.
- Règles/sauvegarde/caméra/physique/panorama : pas de réaudit exhaustif du socle ; diff protégé et tests existants conservés. Treize fichiers de ce socle comparés octet pour octet à la base.
- Mémoires et preuves définitives : finaliser après la livraison effective.

Aucune prétention de test matériel. Aucun merge main/Release. Voir la passation et les preuves finales lorsqu’elles seront publiées.
