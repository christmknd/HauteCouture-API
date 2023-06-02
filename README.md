# HauteCouture-API

Une API qui vous donne différentes informations sur les maisons qui possède le label haute couture. Le langage par défaut de cette API est le français.

Cette api est publié sur RapidAPI à l'adresse suivante : [https://rapidapi.com/christmknd/api/hautecouture-api1](https://rapidapi.com/christmknd/api/hautecouture-api1)

## Présentation

La source principale des informations de cette API vienne de la [Fédération de la Haute Couture et de la Mode](https://www.fhcm.paris/fr). En cas d'erreurs ou d'oubli de ma part , qu'elle n'hésite pas à me contacter (mon adresse mail est disponible sur mon profil Github)

Les maisons sont classés en trois catégories :

- les membres permanents
- les membres correspondants
- les membres invités

Pour rappel , les maisons qui possèdent l'appellation haute couture (appellation juridiquement controlé), sont des maisons de luxe qui correspondent aux critères suivants :

- Vêtements réalisés sur mesure
- Travail à la main
- Avoir un atelier de maison de couture, avec un atelier flou et un atelier tailleur
- Les ateliers doivent compter une dizaine de personnes
- Défiler deux fois par an , avec minimu 25 modèles par collection
- Pour être accepté dans la liste des membres permanents, elle doit être déja inscrit en tant qu'invité depuis 4 ans et être parainée par une autre maison de couture.

Le statut haute couture n'existe qu'à Paris, valable qu'un an , et est accordé chaque par le ministère en charge de l'Industrie , sur proposition d'une liste de la Chambre Syndicale de la Haute Couture.

## Usages

Pour lancer le projet , tapez la commande suivante,

```bash
npm start
```

Aller sur votre navigateur

Voici la liste exhaustif des requêtes que vous pouvez effectuez avec cette API :

- Récupérer la liste toutes les maisons

```bash
get /api/maisons
```

- Récupérer tous les maison dans une catégorie spécifique

```bash
get /api/maisons/category/:{category}
```

- Récuperer la liste des maisons par pays

```bash
get /api/maisons/country/:{country}
```

- Récupérer une maison aléatoirement

```bash
get /api/maisons/random
```

- Récupérer le nom d'une maison par son ID

```bash
get /api/maisons/:{id}
```

- Récupérer la liste tous les directeurs artistiques (DA)

```bash
get /api/directors
```

- Récupérer le nom d'un directeur artistique (DA) aléatoirement

```bash
get /api/directors/random
```

- Récuperer la liste des directeurs artistiques d'une catégorie précise

```bash
get /api/directors/category/:{category}
```

- Recupérer la liste des directeurs artistiques par pays

```bash
get /api/directors/country/:{country}
```

- Récupérer toutes les catégories

```bash
get /api/categories
```

## Contributing

### Français

Si vous souhaitez contribuez , vous pouvez ouvrir une issue. Il vous faudra plus de 5 maisons à rajouter pour ouvrir une PR.

Avant de rajouter des maisons, vérifiez bien qu'elles ne sont pas déja dans la base.
Les maisons doivent avoir les champs suivants : name, category, artistic_director, country

### English

If you want to contribuite , you can open an PR. 5 maison is the minimum to add if you want to open a PR.

Check the data to see if the maisons you want to add are not already there.
Each maison must have theses fields :
name, category, artistic_director, country

## License

[MIT](https://choosealicense.com/licenses/mit/)
