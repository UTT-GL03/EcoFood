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
3. Il sélectionne son **profil** parmi une liste déroulante (ex. : *Famille de 4, Célibataire…*).  
4. Il a ensuite accès aux **prix moyens** d’un panier correspondant à ce profil dans chaque établissement.

### Impact de l'exécution des scénarios auprès de différents services concurrents
Il existe un moyen d'estimer l'impact numérique d'un site web : [l’EcoIndex](https://www.ecoindex.fr/).  
Cet indicateur calcule un score (de **A à G**) en fonction de plusieurs facteurs, tels que :  

- Le nombre d'appels au serveur (requêtes)  
- La quantité d'information téléchargée  
- La complexité et l'optimisation du site  

Nous avons réalisé une analyse des sites concurrents, et voici les résultats :  

| Service              | Score (sur 100) | Classe | Détail des mesures |
|----------------------|-----------------|--------|---------------------|
| [UFC Que Choisir](https://www.quechoisir.org/)      | 22               | F 🟪   | [...](./benchmark/UFC_QueChoisir/ecoindex-environmental-statement.md)                 |
| [Qui-est-le-moins-cher](https://www.quiestlemoinscher.com/)| 79              | B 🟩   | [...](./benchmark/QuiEstLeMoinsCher/ecoindex-environmental-statement.md)                 |

Tab.1 : Mesure de l'EcoIndex moyen de divers services de comparateur de prix.

Les rapports EcoIndex mettent en évidence plusieurs points problématiques : pages très volumineuses et nombreux appels réseau, DOM très lourd, images et médias pas ou peu optimisés, présence de gros bundles JavaScript et scripts tiers non essentiels, et absence de stratégies de cache efficaces. Ces facteurs augmentent la consommation d'énergie, la consommation d'eau virtuelle et les émissions de GES lors du chargement des pages.