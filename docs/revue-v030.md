# Revue indépendante — évolution 0.3.0

21/10/2026, périmètre : conception approuvée et plan 0.3.0, du socle 537ab18d3de5da0b7de0012a4273b097ce06106b à l'intégration locale a061022740cc72fc1c6dfc442238b0ce3e2d82e0 (contenu distant f729377a1a38ac9c16e9f99b915d6001f52a92c1).

Relecture des règles, migration/sauvegardes, configuration, halos et sélection, physique/sons, capteur Android et cycle de vie, compilation/signature ; captures existantes examinées. Suite unitaire rejouée par le relecteur : 25/25. Aucun essai sur téléphone physique.

Un défaut P2 relevé : le dialogue de victoire déclenchait immédiatement la pause et annulait toutes les notes de victoire. Corrigé dans 3ede60382b264521fa1f5b403ceabccaf41cee4b : état gagné immédiat, dialogue après 650 ms, pauses explicites prioritaires et annulation de l'ouverture différée à la nouvelle partie. Régression navigateur observée rouge avant correction. Aucun autre défaut concret relevé.

Le même commit corrige le problème d'horloge/attente des halos révélé par CI 39597634373 : dt borné à [0 ; 0,1], attente d'une vraie rotation et contrôle du mode réduit sur des images rendues. Régression reproduite avec un premier timestamp ancien injecté uniquement dans le test. Détails : MYN-D009/MYN-D010 dans debughistorical.md.

La revue ne constitue pas une validation matérielle Samsung ; les preuves finales de compilation, contenu et signature sont dans temp/native-*, rattachées au run indiqué par native-build-info.txt.

Vérification après corrections : https://github.com/greenpower2669/Max-YutNori/actions/runs/39651736580 — 25 tests et 14 scénarios passent, compilation/lint APK/AAB et signature 0.2.0 validés. Liens bruts téléchargés et empreintes conformes.
