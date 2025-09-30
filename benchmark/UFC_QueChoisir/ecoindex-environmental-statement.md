# Déclaration environnementale de ce site web

Mesure effectuée le Tue Sep 30 2025.

## Niveau d’écoconception du site web
![Note F](https://raw.githubusercontent.com/cnumr/lighthouse-plugin-ecoindex/main/assets/Note-F.webp)
* Note Ecoindex : **22/100**
* Consommation d'eau moyenne rapportée à 1 000 utilisateurs (en litres) : **38.40 litres, (soit 4 packs d'eau minérale).***
* Émission de Gaz à Effet de Serre (GES) moyenne rapportée à 1 000 utilisateurs (kilos CO2e) : **2.56 kilos CO2e (soit un trajet de 12 kms en voiture à énergie thermique).***
## Méthode d'évaluation
Comme toute production numérique, ce site web a un impact environnemental que nous vous présentons sur cette page à l’aide d’indicateurs standardisés.

Nous utilisons le référentiel [EcoIndex](https://www.ecoindex.fr/) proposé par le [collectif GreenIT.fr](https://www.greenit.fr/), pour évaluer la performance environnementale de ce site web. Celui-ci est quantifié grâce à deux types d'indicateurs :
1. **Niveau d’écoconception du site web**. Cet indicateur évalue la mise en place de bonnes pratiques permettant de réduire l'impact d'une page web. Le niveau atteint est représenté par une évaluation relative de A à G (A est la meilleure note) associée à un score absolu de 0 à 100 (100 est la meilleure note).
2. **Consommation d'eau et émission de GES liées au chargement de la page**. Cet indicateur quantifie la consommation d'eau douce (cls) et l'émission de GES (gCO2e) liées au chargement d'une page web.

À des fins de synthèse, quatre types de données sont représentées :
1. Niveau d'écoconception pour les 5 pages les plus visitées du site web
2. Niveau d'écoconception pour 5 parcours utilisateurs type du site web
3. Consommation d'eau (exprimée en litres) et émission de GES (kilos CO2e) liée au chargement d'une page web pour 1 utilisateur, et rapportée à 1 000 utilisateurs.
4. Consommation d'eau (exprimée en litres) et émission de GES (kilos CO2e) liée à l'exécution d'un parcours pour 1 utilisateur, et rapportée à 1 000 utilisateurs.

L'analyse indiquée a été effectuée le Tue Sep 30 2025, elle est susceptible d'évoluer : la quantification des impacts environnementaux présentée ci-dessous est une photographie réalisée à un instant T.

## Evaluation de l'impact des 5 pages les plus visitées du site
### Page 1 : https://www.quechoisir.org/carte-interactive-drives-n21243/

|Grade|Ecoindex|Eau (cl)|GES (gCO2e)|Nb de requêtes|Taille de la page (Ko)|Taille du DOM|
|---|---|---|---|---|---|---|
|F|22/100|38.40|2.56|116|1792.337|1826|


* Consommation d'eau rapportée à 1 000 utilisateurs (en litres) : 38.40 (soit 4 packs d'eau minérale).
* Émission de GES rapportée à 1 000 utilisateurs (kilos CO2e) : 2.56 (soit un trajet de 12 kms en voiture à énergie thermique).

## Evaluation de l'impact pour 5 parcours utilisateurs sur le site
### Parcours 1 : Scénario 2 : Que Choisir
* **Objectif du parcours** : TBD
* **Parcours cible** : TBD

|Page|Grade|Ecoindex|Eau (cl)|GES (gCO2e)|Nb de requêtes|Taille de la course (Ko)|Taille du DOM|
|---|---|---|---|---|---|---|---|
|https://www.quechoisir.org/carte-interactive-drives-n21243/|F|23/100|38.20|2.55|116|1604.293|1823|
|https://www.quechoisir.org/carte-interactive-drives-n21243/drive-magasin-dm19625/|D|46/100|31.10|2.08|26|547.014|1784|

* Consommation d'eau rapportée à 1 000 utilisateurs (en litres) : 34.65 (soit 4 packs d'eau minérale).
* Émission de GES rapportée à 1 000 utilisateurs (kilos CO2e) : 2.31 (soit un trajet de 11 kms en voiture à énergie thermique).

## L'écoconception

L’écoconception s’appuie sur une méthodologie et un ensemble de bonnes pratiques pour réduire l’impact de ce site web sur son environnement. Concrètement, il va s’agir de limiter les ressources techniques nécessaires à l’affichage d’une page ou à l’exécution d’une fonctionnalité, tout en étant au plus proche du besoin de l’utilisateur.

Vous êtes un professionnel du numérique et vous souhaitez réduire l’impact environnemental de vos sites ? Voici quelques bonnes pratiques à mettre en oeuvre :

### Quelques bonnes pratiques en matière d'ergonomie et de design
* Limiter le nombre de fonctionnalités dès la conception
* Supprimer les fonctionnalités non utilisées
* Limiter le nombre de carrousels
* Choisir des typographies au poids réduit
* Favoriser les designs simples et épurés
* Adopter quand cela est possible une approche "mobile-first"
* Préférer la pagination au défilement infini
* Éviter la lecture et le chargement automatique des vidéos et des sons
* Optimiser les parcours utilisateurs
* ...

### Quelques bonnes pratiques en matière de gestion des contenus
* Préférer les images aux vidéos
* Limiter le nombre d'images sur chaque page
* Optimiser la taille des images au format cible
* Compresser les images via un outil de type [TinyPNG](https://tinypng.com/)
* Compresser les pdfs via un outil de type [iLovePDF](https://www.ilovepdf.com/fr/compresser_pdf)
* Limiter l'utilisation des GIFs animés
* Préférer les glyphs aux images
* ...

### Quelques bonnes pratiques en matière de développement
* Proposer un traitement asynchrone lorsque c'est possible
* N'utilisez que les portions indispensables des bibliothèques JS et CSS
* Mettre en cache les données calculées souvent utilisées
* Limiter le nombre d'appels aux API HTTP
* Réduire le volume de données stockées au strict nécessaire
* Utiliser la version la plus récente du langage
* Fournir une alternative textuelle aux contenus multimédias
* Découper les CSS
* Ne pas faire de modification du DOM lorsqu’on le traverse
* Utiliser le chargement paresseux (lazyload)
* Valider les pages auprès du W3C
* Ajouter des entêtes Expires ou Cache-Control
* Compresser les fichiers texte : CSS, JS, HTML et SVG
* Mettre en place un sitemap efficient
* ...

### Quelques bonnes pratiques en matière d'hébergement
* Choisir un hébergeur écoresponsable
* Installer le minimum requis sur le serveur
* S’appuyer sur les services managés
* Optimiser l'efficacité énergétique des serveurs
* Réduire au nécessaire les logs des serveurs
* Apache Vhost : désactiver le AllowOverride
* Utiliser des serveurs virtualisés
* Utiliser un serveur asynchrone
* Stocker les données dans le cloud
* ...

### Pour mettre en place votre déclaration environnementale :

* [Accéder à la documentation](https://declaration.greenit.fr/)

### Pour consulter la liste complète de bonnes pratiques de l'écoconception web :

* [Accéder au site web GreenIT](https://www.greenit.fr/)
* [Accéder au dépôt GreenIt (GitHub)](https://github.com/cnumr/best-practices)

### Pour en savoir plus sur EcoIndex :

* [En savoir plus sur le référentiel EcoIndex](https://www.ecoindex.fr/comment-ca-marche/)
* [Accéder au site web EcoIndex](https://www.ecoindex.fr/)

_*Moyenne de l’impact environnemental des 5 pages les plus visitées ce site web._
