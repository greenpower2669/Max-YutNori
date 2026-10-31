# MYN-030 — guide d’installation multilingue

> Exécution native dans cette session, autorisée par Fab « Ok, go » après proposition FR/KO/EN et choix manuel mémorisé. Réutiliser FAB-Copilot et la branche existante.

Objectif : langue des surfaces d’installation selon navigator.languages puis navigator.language, premier FR/KO/EN pris en charge, anglais de secours ; choix Auto/Français/English/한국어 mémorisé dans max-yutnori-web-language-v1. Le choix manuel prévaut et revenir à Auto relit les préférences. Aucune déduction à partir du clavier.

Architecture : dictionnaire/résolveur web/pwa/install-language.mjs et intégration client.js ; choix dans le dialogue existant. LocalStorage inaccessible reste un repli en mémoire. Titres, guide, boutons et états d’installation traduits ; le moteur et son interface Android restent intacts. Ordre de préférence navigateur, variantes régionales, changement de langue et choix mémorisé à vérifier.

Approche retenue : dictionnaire local sans réseau (hors ligne) ; pas de traduction distante ni de détection clavier. Cette portée correspond à la proposition approuvée, sans nouveau dialogue de conception.

- [ ] Tests RED sur client réel à frontière DOM/API : guide FR sans coréen, KO choisi depuis languages, EN de secours, choix manuel/rechargement/Auto, stockage refusé, langue navigateur modifiée.
- [ ] Implémenter dictionnaire et choix ; garder installation Chromium, standalone, plein écran, SW et sauvegardes.
- [ ] Tests GREEN complets, smoke navigateur enrichi avec scope et préférences, PWA build7 et cinq mémoires dans le même commit ; pousser la branche et attendre CI.
- [ ] Après CI verte, publier l’artefact exact sur le site existant ; documenter CI/déploiement/limites, maintenir PR#3 brouillon. Aucun merge/main/Release définitive ni nouvelle distribution Android.

Révision : vérifier notamment lecteurs d’écran/lang, stockage privé refusé, locale régionale, préférences non prises en charge, conservation des parties. Les dialogues OS et appareils physiques restent à valider.
