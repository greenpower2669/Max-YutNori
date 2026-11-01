# MYN-031 — WebApp d’abord, Store facultatif

Décision explicite de Fab le1/11/2026 : remplacer la future priorité Google Play par installation PWA principale ; une popup fermable propose l’application du Store sans obligation, même contrôle des versions Web conservé.

Approche : conserver le bouton Installer PWA intact. Après la fin d’une invite Chromium ou le bouton de retour du guide, proposer une seule fois par version officielle une fenêtre secondaire avec Continuer avec la WebApp (primaire) et ouvrir le Store (action explicite). Escape/fermeture respecte le refus ; aucune redirection automatique. Texte FR/EN/KO. Aucun dialogue si aucune fiche officiellement publiée/vérifiée dans le catalogue.

Catalogue local versionné : android/ios null tant que la vraie fiche n’est pas validée ; publication, URL officielle exacte, identité, version native, version du moteur et date de vérification exigées. Comparer le moteur natif au moteur Web, jamais les compteurs PWA à la version APK. Aucun état « application native installée à jour » déduit du navigateur. Vérification PWA existante (canal/semver/build/commit/host) intacte. APK/AAB/signatures et52 sources moteur/Android préservés.

- [ ] Régressions rouges : popup facultative sur catalogue positif de fixture, PWA continue sans Store, refus mémorisé, pas de proposition sans fiche, mauvaise identité/domaine/versions rejetés.
- [ ] Implémenter catalogue/validation et dialogue ; conserver invite PWA comme premier geste sans attente réseau.
- [ ] Mettre les cinq mémoires et l’avenant IMMUTABLE à jour, tests/builds, CI complète puis publication test de l’artefact exact sur même origine (build8).
- [ ] Documenter vraie disponibilité : aucune fiche Max YutNori vérifiée par recherche officielle ce jour ; aucun lien d’un autre jeu utilisé. Activation future après fiche validée ; pas de main/Release définitive.
