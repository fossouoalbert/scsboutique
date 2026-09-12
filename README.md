# SC SARL

> Une vitrine e-commerce moderne pour découvrir, partager et commander des objets de seconde main à prix doux.

[![Statut](https://img.shields.io/badge/statut-en%20développement-d4a657)](https://github.com/fossouoalbert/scs-boutique)
[![Interface](https://img.shields.io/badge/interface-responsive-3fa66f)](index-1.html)
[![Licence](https://img.shields.io/badge/licence-à%20définir-lightgrey)](#licence)

## À propos

**SC SARL** est une boutique en ligne pensée pour rendre la seconde main plus simple, plus humaine et plus accessible.

Le site met en avant un catalogue de produits sélectionnés avec soin : meubles, électronique, décoration, cuisine, vêtements et objets du quotidien. Les clients peuvent consulter les produits, filtrer le catalogue, ouvrir une fiche détaillée, partager un article, préparer une commande WhatsApp et localiser la boutique.

La boutique est située à **Entrée Carrière Ndogpassi, derrière la station Petrolex**.

## Pourquoi ce projet

### Pour les clients

- Une navigation rapide et claire, adaptée au mobile comme à l'ordinateur.
- Un catalogue immédiatement visible avec recherche et filtres par catégorie.
- Des fiches produits détaillées avec image, prix, état et description.
- Une commande simple via WhatsApp, sans parcours de paiement complexe.
- Un panier multi-produits pour préparer une liste de commande.
- Une localisation directe de la boutique via Google Maps.
- Des promotions visibles et des avis clients affichés avec moyenne et total.
- Un partage rapide des produits sur WhatsApp, Facebook, X, Telegram ou par e-mail.

### Pour les recruteurs

Ce projet démontre la capacité à construire une expérience commerciale complète à partir de technologies web natives :

- conception d'une interface responsive et accessible ;
- manipulation dynamique du DOM en JavaScript vanilla ;
- gestion d'état côté navigateur pour le panier, la langue, le thème et les avis ;
- persistance des données avec `localStorage` ;
- intégration de liens WhatsApp et Google Maps ;
- partage natif sur mobile et liens directs sur ordinateur ;
- métadonnées SEO et Open Graph pour améliorer les aperçus dans les moteurs de recherche et les réseaux sociaux ;
- organisation de données produits et rendu réutilisable des composants ;
- attention portée aux états mobiles, aux animations et à la réduction des mouvements.

## Fonctionnalités

### Catalogue

- Affichage de tous les produits au démarrage.
- Recherche instantanée par nom.
- Filtres : meubles, électronique, déco, cuisine, école, vêtements et divers.
- Cartes produits avec image, catégorie, prix, badge de stock et bouton de partage.
- Modale produit avec description, quantité, panier et commande directe.

### Commande et partage

- Panier multi-produits avec total automatique.
- Génération de messages WhatsApp prêts à envoyer.
- Partage mobile via l'API Web Share lorsqu'elle est disponible.
- Liens directs de partage sur PC : WhatsApp, Facebook, X, Telegram, e-mail et copie du lien.
- Bouton de localisation vers Google Maps.

### Avis et promotions

- Promotions affichées dans un espace dédié.
- Avis préremplis visibles dès l'ouverture du site.
- Ajout de nouveaux avis depuis le formulaire.
- Conservation des avis dans `localStorage`.
- Calcul automatique du nombre d'avis et de la note moyenne.
- Commentaire facultatif dans le formulaire d'avis.

### Expérience utilisateur

- Mode clair par défaut avec bascule vers le mode sombre.
- Interface bilingue français/anglais.
- Mise en page responsive mobile, tablette et ordinateur.
- Animations discrètes pour les actions importantes.
- Support de `prefers-reduced-motion` pour limiter les animations si nécessaire.
- Prévisualisation sociale avec image, titre et description.

## Aperçu

![Aperçu de la boutique](Screenshot_20260906_223508_Gallery.jpg)

## Technologies utilisées

- **HTML5** : structure sémantique, formulaires et métadonnées SEO.
- **CSS3** : variables de thème, responsive design, animations et mise en page adaptative.
- **JavaScript vanilla** : catalogue, filtres, panier, avis, partage, thème et internationalisation.
- **Web APIs** : `localStorage`, Web Share API, Clipboard API et Google Maps URL.
- **Google Fonts** : Fraunces et Work Sans.
- **Django** : squelette de projet présent dans `scs-boutique/` pour une future évolution backend.

## Structure du projet

```text
.
├── index-1.html       # Page principale de la boutique
├── style.css          # Design, thèmes, responsive et animations
├── script.js          # Catalogue et interactions applicatives
├── README.md          # Documentation du projet
├── *.jpg              # Images des produits et visuel de partage
└── 
    └── scs-boutique/
```

## Installation et lancement

Aucune dépendance npm n'est nécessaire pour la version actuelle.

### Option 1 : ouvrir directement la page

Ouvrir [index-1.html](index-1.html) dans un navigateur moderne.

### Option 2 : lancer un serveur local recommandé

Depuis le dossier du projet :

```bash
python -m http.server 8000
```

Puis ouvrir : <http://localhost:8000/index-1.html>

Le serveur local permet notamment de tester plus fiablement le chargement des images, la navigation et certaines API du navigateur.

## Configuration

Les paramètres principaux se trouvent au début de [script.js](script.js) :

```js
const CONFIG = {
  whatsappNumber: "VOTRE_NUMERO",
  whatsappGroupUrl: "VOTRE_LIEN_WHATSAPP",
  locationUrl: "VOTRE_LIEN_GOOGLE_MAPS",
  currency: "FCFA"
};
```

Pour ajouter un produit, compléter le tableau `PRODUCTS` avec :

- un identifiant unique ;
- une catégorie ;
- un nom français et anglais ;
- un prix ;
- une image ;
- une description ;
- un statut de stock.

## Évolutions prévues

- Connecter le catalogue à une base de données Django.
- Ajouter un espace d'administration pour les produits, promotions et avis.
- Remplacer `localStorage` par une API sécurisée pour les avis et le panier.
- Ajouter une authentification administrateur.
- Ajouter un vrai système de commande et de suivi.
- Optimiser et générer automatiquement les images de partage au format 1200 × 630.
- Ajouter des tests automatisés JavaScript et end-to-end.

## Démonstration rapide

1. Ouvrir la boutique.
2. Rechercher un produit ou choisir une catégorie.
3. Ouvrir une fiche produit.
4. Ajouter plusieurs articles au panier.
5. Envoyer la liste via WhatsApp.
6. Tester le bouton de localisation.
7. Ajouter un avis et recharger la page pour vérifier sa persistance.

## Licence

La licence du projet reste à définir par le propriétaire du dépôt. Le contenu, les photos et l'identité visuelle de **SC SARL** sont réservés tant qu'aucune licence publique n'est indiquée.

## Contact

- **Boutique :** SC SARL
- **Adresse :** Entrée Carrière Ndogpassi, derrière la station Petrolex
- **Commande et communauté :** via les boutons WhatsApp présents sur le site
- **Dépôt :** [fossouoalbert/scs-boutique](https://github.com/fossouoalbert/scs-boutique)
