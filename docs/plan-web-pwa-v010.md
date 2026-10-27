# Max YutNori Web/PWA — conception et plan

Mission MYN-024 fournie par Fab, 27/10/2026. Référence intégrée : Android 0.8.8/code17, PR #2, merge cdb2ff4. Réalisation directe demandée ; branche feature/web-pwa-v010, sans nouvelle fusion/release définitive.

Architecture : garder tous les fichiers du moteur et d'Android inchangés. Vite conserve le build Android par défaut ; mode web séparé injectant uniquement une entrée PWA et produisant pwa-dist. Surcouche dans le dialogue Pause : installation, état hors ligne, versions/vérification, actualisation explicite. Bouton plein écran dans les réglages de la version Web et commande rapide depuis Pause, sans augmenter les bandeaux. Manifest autonome/paysage et icônes dérivées du visuel officiel. Publication Sites privée de test, export statique reproductible. Base relative pour hébergement racine/sous-dossier.

## Contraintes et vérifications sensibles
- Même caméra/physique/panorama/règles/audio, empreintes comparées à la référence ; origin/package/signature/save Android identiques.
- Un cache par contenu complet du build, installation atomique y compris musique ; ancien cache conservé pendant les parties ouvertes, pas de skipWaiting automatique lors d'une mise à jour.
- Actualisation seulement explicite, partie sauvegardée, aucun lancer en vol ; informer si plusieurs fenêtres empêchent une activation immédiate.
- Version Web indépendante : channel web-pwa, pwaVersion semver et numéro build entier monotone, engineVersion et commit Git. GitHub : tags web-v*, non-draft, assets web-version.json ; ne jamais prendre Android comme mise à jour.
- Vérification du manifeste de l'hôte courant en plus des releases GitHub : signaler « Vérification impossible » si réseau/format incohérent. Déploiement non publié en release reste identifiable comme version de test.
- Vérifier Chrome mobile/desktop via navigateur disponible ; installation réelle Samsung/OS reste une validation humaine distincte.

## Tâches
1. [ ] Métadonnées et politique de version testées avant implémentation : semver, build monotone, Android ignoré, réponses invalides/absence de release/offline.
2. [ ] Build web/manifest/icônes/worker : pré-cache atomique, audio Range, navigation offline, pas de cache des API externes, mise à jour volontaire et cache précédent sûr.
3. [ ] Interface PWA intégrée au dialogue Pause et réglages ; installation native/explications, plein écran, statut offline et stockage, update sans partie perdue.
4. [ ] Tests unitaires, builds Android/Web, contrôle d'intégrité des fichiers protégés, tests navigateur WebGL/physique/caméra/sauvegarde/manifest/worker/hors-ligne et scénario update.
5. [ ] Source GitHub et PR brouillon ; CI reproductible et documentation ; déploiement Sites de test, résultats et mémoires synchronisées.

Sources techniques : MDN Using Service Workers et skipWaiting ; GitHub REST releases. La mise à jour en attente respecte le cycle natif du worker et ne remplace pas une page de jeu ouverte.

## Journal d'exécution
- Référence unitaires96/96 ; version + worker neuf tests rouges puis verts ; suite105/105 ; deux builds verts.
- Aucun changement de web/src, web/index.html ou Android : comparaison Git avec cdb2ff4. Modules Web injectés par mode Vite séparé.
- Aperçu cloud HTTP : WebGL indisponible (« Error creating WebGL context »), donc le rendu 3D ne peut pas être évalué dans cette surface. La CI exécute le vrai Chrome avec SwiftShader et les56 parcours existants ainsi que le nouveau scénario PWA.
- Choix : tests navigateur reproductibles sur runner GitHub ; aucun changement du moteur pour contourner l'indisponibilité WebGL de l'aperçu.
