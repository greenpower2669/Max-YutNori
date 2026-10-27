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
