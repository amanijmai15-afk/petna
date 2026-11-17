PET LOVERS TUNISIE — VERSION ORGANISÉE

COMMENCER ICI : ouvrez accueil.html. Cette page contient les liens vers toutes les rubriques.

Chaque rubrique dispose de son propre fichier HTML, CSS et JS :
- index = Accueil du site
- adopter = Adoption
- boutique = Boutique
- simulateur = Simulateur
- services = Services
- calendrier = Calendrier et rappels
- carte = Carte des services
- tutoriels = Tutoriels
- panier = Panier / commande
- partenaire = Espace partenaire
- compte = Compte
- admin = Administration
- accueil = Page répertoire avec les liens vers toutes les pages

Les styles partagés sont dans css/common.css et le moteur de l'application est dans js/app.js. Chaque page a aussi son fichier CSS et son fichier JS séparé. Les dépendances Leaflet et Supabase sont chargées par les pages qui utilisent l'application.

IMPORTANT : le code source initial est une application monopage (SPA). Les fichiers HTML séparés sont des points d'entrée vers les rubriques ; le moteur partagé js/app.js conserve le rendu et certaines navigations par hash. Ce n'est pas une réécriture complète en 12 applications indépendantes.

Pour tester les fonctionnalités : extraire le ZIP, ouvrir le dossier dans VS Code, puis lancer accueil.html avec Live Server. Certaines fonctions nécessitent Internet et une configuration Supabase valide.

NOTE : js/app.js ne contient que le menu de navigation. Le moteur d'origine (rendu des pages, panier, comptes...) n'était pas dans les fichiers envoyés ; remettez votre app.js d'origine dans js/ pour retrouver toutes les fonctions.
