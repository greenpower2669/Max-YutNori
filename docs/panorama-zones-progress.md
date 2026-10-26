# Suivi MYN-016 — plan docs/plan-panorama-zones-v082.md

Base GitHub f137808556028b8d9204f1237b8c0bffb9daed7c, branche de travail feature/native-webgl-v020. Demande et carte centrale du projet lues ; états livrés 0.8.1 récupérés avant modification. Référence utilisateur 25651.jpg, SHA-256 23cde5c185ee9f79bb969772e168076e2784c81014b048b7664fea0c7edf99e4.

- Baseline 73/73 verte ; trois tests de nouveaux tracés observés rouges (vallée gauche absente, nuages du ciel absents, eau sur terre), puis verts.
- État final local : 76/76 tests, build Web et pixels réels passent ; 14 régions positives/négatives, 6 cœurs de chutes comparés à la vraie référence 0.8.1 aux temps 0 et 12 s, deltas nuls ; mode réduit identique. La texture et ses données/version sont conservées pendant 1000 frames.
- Eau : test GPU rouge sur petit îlot (delta 3.5299), cause = interpolation bilinéaire de texels voisins malgré masque central nul. Marge conservatrice de rive 3–9 pixels d’image ajoutée dans la carte statique ; même test vert, delta nul. Aucun contournement d’assertion.
- Choix agent : carte 256×128 RGBA, 128 Kio (+64 Kio), pour un tracé à six pixels de l’image ; canaux R bruit périodique, G vallées, B nuages, A eau. Aucun transfert/recréation par frame ; une passe et au plus trois lectures de carte par fragment.
- Choix agent : conserver la contribution composite antérieure dans toute la géométrie des chutes, y compris l’ancienne eau. Une sonde de nouvelle brume placée dans cette zone protégée a été déplacée sur la nappe libre voisine ; les six zones protégées sont vérifiées séparément. Fondu statique à l’extérieur de ces zones pour éviter un bord elliptique visible.
- Le diagnostic de masques reproduit violet/turquoise/jaune uniquement dans temp/native-panorama-zone-masks.png ; aucune coloration de repérage dans le jeu. Opacité maximale 18 % brume basse et 10 % ciel.

Revue indépendante, CI complète et livraison APK/AAB attendues. Aucun essai matériel Samsung ni coût GPU/FPS revendiqué, aucun merge main/Release.

## Revue traitée et passe finale
La revue indépendante a relevé un raccord brutal de l’eau historique à la limite de la troisième chute (Important), et une substitution accidentelle de la métadonnée fsevents ^10.8.1 (Minor). Métadonnée rétablie. Pour le raccord : mêmes six calculs de distance/masque, distance minimale conservée et fondu smoothstep(1,1.20) uniquement à l’extérieur. Test de pixels isolant l’eau (brume coupée dans les deux témoins uniquement dans la fixture), ROI 4×4 au bord : rouge avec la commutation binaire (8.604/10.521), puis vert (<1) avec le fondu. Les premières comparaisons de 16×16 incluaient toute la zone de transition et de la nouvelle brume ; protocole resserré et isolé avant de refaire le vrai cycle rouge→vert. Les six cœurs restent exactement égaux à 0.8.1 aux deux temps.

Dernières commandes : npm test 76/76, npm run build PASS (avertissement de bundle préexistant), verify_panorama PASS après les correctifs. CI complète à venir ; pas de smoke local complet revendiqué. Les contrôles Android/signature seront ceux des nouveaux binaires, pas extrapolés depuis 0.8.1.
