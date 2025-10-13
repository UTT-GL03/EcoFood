# EcoFood

EcoFood est un service de comparateur de prix de produits alimentaires qui permet à ses utilisateurs de trouver le meilleur prix et la meilleure qualité des produits qu'ils achètent autour de chez lui.

## Choix du sujet

En tant qu'étudiants, les questions d'insécurités alimentaires nous touchent directement. En effet, 43% des étudiants sont en situation de précarité alimentaire ([source : Yakasaider](https://www.yakasaider.fr/article/wp-content/uploads/2023/12/CMV329.pdf)).

EcoFood est né de ce constat : permettre aux personnes ayant un budget restreint (étudiants, familles monoparentales, travailleurs précaires, etc.) de mieux se nourrir en trouvant des produits de qualité à des prix plus bas.

## Utilité Sociale

L’alimentation est un besoin fondamental, mais de plus en plus de ménages peinent à y accéder correctement. EcoFood vise à répondre à cette problématique en plusieurs axes d'action :

- **Amélioration de la qualité de vie** : en aidant les utilisateurs à accéder à une alimentation plus saine sans dépasser leur budget. Cela permet d'améliorer le pouvoir d'achat des utilisateurs qui pourront l'utiliser dans d'autres domaines.
- **Valorisation des commerces locaux** : EcoFood met en avant des magasins de proximité et producteurs locaux souvent invisibilisés face aux grandes surfaces. Cela permet de dynamiser l'économie local.
- **Réduction des inégalités** : en donnant à chacun les moyens de mieux comparer et choisir, l’app contribue à rendre l’alimentation saine plus équitablement accessible.

## Effets de la numérisation

Comme tout service numérique, EcoFood comporte des effets positifs mais aussi certains risques qu’il convient d’identifier et de limiter.

### Substitution aux prospectus papier

L’application cherche à se substituer aux traditionnels prospectus publicitaires distribués par les grandes enseignes.  
Chaque foyer reçoit environ **30 kg de prospectus par an**, ce qui nécessite la coupe d’environ **21 millions d’arbres** pour produire le papier correspondant ([source : Notre-planète.info](https://www.notre-planete.info/actualites/2573-prospectus-papier-publicite?utm_source=chatgpt.com)).

Le passage au numérique constitue donc une alternative plus respectueuse de l’environnement. Par exemple :

- **Prospectus digital** : ~0,72 g équivalent CO₂ par page lue
- **Prospectus papier** : ~10,22 g équivalent CO₂ par feuille

([source : Bonial](https://www.bonial.fr/info/empreinte-carbone-prospectus/?utm_source=chatgpt.com))

### Impact indirect et comportements des usagers

EcoFood peut également avoir un impact indirect sur les pratiques de consommation :

- **Effet positif** : réduire les déplacements inutiles en regroupant les courses, mettre en avant des commerces de proximité et encourager l’achat de produits locaux.
- **Risque d’effet rebond** : si l’utilisateur est incité à multiplier les trajets pour chercher la meilleure promotion, les gains écologiques du numérique peuvent être annulés.

## Scénarios d'usage et impact

Nous faisons l'hypothèse que le site n'est pas utilisé régulièrement par le même utilisateur, mais qu'il constitue plutôt un outil ponctuel pour choisir l'endroit où consommer lorsque l'utilisateur ne connaît pas les différentes options autour de lui.  
Un même utilisateur ne reviendra donc pas souvent sur le site pour réaliser la même analyse des prix.

### Scénario 1 : Comparer un article entre différents magasins

1. L’utilisateur se rend sur l’onglet **« comparer produit »**.
2. Il choisit une **ville** où regarder les informations.
3. Il utilise le **menu déroulant** pour voir tous les types de produits.
4. Il sélectionne un **type de produit**.
5. Il visualise les **différents prix** pour ce produit dans les différents établissements.

### Scénario 2 : Comparer un ensemble de produits entre différents magasins

1. L’utilisateur se rend sur l’onglet **« comparer panier »**.
2. Il choisit une **ville** où regarder les informations.
3. Il sélectionne son **profil** parmi une liste déroulante (ex. : _Famille de 4, Célibataire…_).
4. Il a ensuite accès aux **prix moyens** d’un panier correspondant à ce profil dans chaque établissement.

### Impact de l'exécution des scénarios auprès de différents services concurrents

Il existe un moyen d'estimer l'impact numérique d'un site web : [l’EcoIndex](https://www.ecoindex.fr/).  
Cet indicateur calcule un score (de **A à G**) en fonction de plusieurs facteurs, tels que :

- Le nombre d'appels au serveur (requêtes)
- La quantité d'information téléchargée
- La complexité et l'optimisation du site

Nous avons réalisé une analyse des sites concurrents, et voici les résultats :

| Service                                                     | Score (sur 100) | Classe | Détail des mesures                                                       |
| ----------------------------------------------------------- | --------------- | ------ | ------------------------------------------------------------------------ |
| [UFC Que Choisir](https://www.quechoisir.org/)              | 22              | F 🟪   | [...](./benchmark/UFC_QueChoisir/ecoindex-environmental-statement.md)    |
| [Qui-est-le-moins-cher](https://www.quiestlemoinscher.com/) | 79              | B 🟩   | [...](./benchmark/QuiEstLeMoinsCher/ecoindex-environmental-statement.md) |

Tab.1 : Mesure de l'EcoIndex moyen de divers services de comparateur de prix.

Les rapports EcoIndex mettent en évidence plusieurs points problématiques : pages très volumineuses et nombreux appels réseau, DOM très lourd, images et médias pas ou peu optimisés, présence de gros bundles JavaScript et scripts tiers non essentiels, et absence de stratégies de cache efficaces. Ces facteurs augmentent la consommation d'énergie, la consommation d'eau virtuelle et les émissions de GES lors du chargement des pages.

## Modèle économique

### Analyse des modèles existants

Dans un premier temps, nous avons étudié plusieurs services similaires afin de comprendre leurs modèles économiques et d’identifier les leviers possibles pour **EcoFood**.

| **Service**                           | **Moyen de financement**                              |
| ------------------------------------- | ----------------------------------------------------- |
| **UFC - Que choisir**                 | Dons, financements publics, abonnements aux magazines |
| **Leclerc - Qui est le moins cher ?** | Produit d’appel (outil marketing interne)             |
| **Anti-crise**                        | Publicité, abonnements aux magazines                  |

**Sources :**

- [Financement UFC - Que Choisir](https://www.consolidons.org/pourquoi/#:~:text=L'ind%C3%A9pendance%20financi%C3%A8re%20de%20l,int%C3%A9r%C3%AAt%20g%C3%A9n%C3%A9ral%20de%20l'association.)
- [Financement Anti-crise](https://media.anti-crise.fr/2018/09/Plaquette-Anti-Crise-2.pdf)

L’analyse de ces services met en évidence un **oligopole de produits homogènes**.  
En d’autres termes :

- Il existe peu de comparateurs de prix réellement actifs sur le marché.
- Les services proposés sont très similaires, souvent centrés sur les grandes enseignes.
- Ces services sont donc **hautement substituables** les uns aux autres.

Pour se distinguer, **EcoFood** mise sur la **mise en avant des producteurs locaux et des commerces de proximité**, ce qui apporte une **valeur ajoutée territoriale et écologique**.

---

### Construction d’un modèle économique viable

Afin de définir un modèle de financement durable et réaliste, nous avons étudié plusieurs hypothèses et leurs impacts financiers :

| **Source de revenus potentielle**              | **Montant unitaire estimé** | **Quantité nécessaire pour financer un salaire mensuel** |
| ---------------------------------------------- | --------------------------- | -------------------------------------------------------- |
| Mise en avant des offres de producteurs locaux | 50 €                        | 72                                                       |
| Financement public                             | 5 000 €                     | 0,72                                                     |
| Dons individuels                               | 5 € – 100 €                 | 714 – 36                                                 |
| Affichage publicitaire (régie tierce)          | 0,00046 € / vue             | 7 758 696 vues                                           |

---

### Analyse des résultats

- **Publicité en ligne** : modèle non viable car cela nécessiterait un trafic massif et irait à l’encontre de notre **démarche écoresponsable**.
- **Dons** : possible en complément, mais difficilement suffisant pour assurer la stabilité financière du service car elle dépend des donateurs.
- **Mise en avant de producteurs locaux** : concept intéressant mais limité car atteindre 72 producteurs reste peu réaliste dans un premier temps.
- **Financement public** : apparaît comme la solution la plus **cohérente et durable**, notamment via des dispositifs tels que :
  - [Financement – Numérique écoresponsable](https://ecoresponsable.numerique.gouv.fr/financement/)
  - [Projets d’Avenir Innovation – Grand Est](https://innovationavenir.grandest.fr/projets-davenir-innovation/)

---

### Positionnement final

Pour rester fidèle à notre démarche **écologique et d’intérêt général**, **EcoFood** sera majoritairement financé par des **aides publiques** et des **subventions territoriales**.  
Les **dons** et la **mise en avant de producteurs locaux** viendront en complément, dans une logique participative, sans compromettre la neutralité et la sobriété du service.

## Maquette de l'interface et échantillon de données.

Au vu des différents services comparés, des exigences environnementales exprimées plus haut et des scénarios retenus, nous avons défini pour notre prototype une maquette de l'interface et un échantillon de données réalistes.

Les ressources Web possédant une représentation sur notre application seront de deux types :
- le comparateur de prix par type de produit autour d'une ville identifiée (avec une HTTP-URI ayant pour chemin /{ville}/{idProduit})
- comparateur d'un panier moyen selon le nombre de personnes, autour d'une ville (avec une HTTP-URI ayant pour chemin /{ville}/panier_moyen?nombre_adultes={nbr_A}&nombre_enfants={nbr_e})