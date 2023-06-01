//dépendances 
const PORT = 5000
const express = require('express')
const axios = require('axios')

const app = express()


app.get("/api/maisons", (req, res) => {
    res.json(maisons);
});

app.get("/api/maisons/category/:category", (req, res) => {
    const category = req.params.category;
    const filteredMaisons = maisons.filter(
        (maison) => maison.category === category
    );
    res.json(filteredMaisons);
});

  // filter => retourne un array avec une condition spécifique ( ici le pays )
app.get("/api/maisons/country/:country", (req, res) => {
    const country = req.params.country;
    const filteredMaisons = maisons.filter(
        (maison) => maison.country === country
    );
    res.json(filteredMaisons);
});

app.get("/api/maisons/random", (req, res) => {
    const randomMaison = maisons[Math.floor(Math.random() * maisons.length)];
    res.json(randomMaison);
});

app.get("/api/maisons/:id/name", (req, res) => {
    const id = parseInt(req.params.id);
    const maison = maisons.find((maison) => maison.id === id);
    if (maison) {
        res.json(maison.name);
    } else {
        res.status(404).send("L'ID que vous cherchez n'existe pas dans notre base");
    }
});

// find => permet de trouver un élement du tableau qui respecte la condtion donnée (ici le nom de la maison) 
app.get("/api/maisons/da/:da/name", (req, res) => {
    const da = req.params.da;
    const maison = maisons.find(
        (maison) => maison.artistic_director === da
    );
    if (maison) {
        res.json(maison.name);
    } else {
        res.status(404).send("La maison que vous recherché n'existe pas dans notre base");
    }
});

// SET => liste de valeurs UNIQUES 
app.get("/api/directors", (req, res) => {
    const artistic_directors = [...new Set(maisons.map((maison) => maison.artistic_director))];
    res.json(artistic_directors);
});

app.get("/api/directors/random", (req, res) => {
    const artistic_directors = [...new Set(maisons.map((maison) => maison.artistic_director))];
    const randomDA = artistic_directors[Math.floor(Math.random() * artistic_directors.length)];
    res.json(randomDA);
});

app.get("/api/directors/:name", (req, res) => {
    const name = req.params.name;
    const maison = maisons.find(
        (maison) => maison.artistic_director.toLowerCase() === name.toLowerCase()
    );
    if (maison) {
        res.json(maison.artistic_director);
    } else {
        res.status(404).send(" Le directeur artistique que vous cherché n'existe pas dans notre base. \n Sa maison ne possède pas le label Haute Couture.");
    }
});

app.get("/api/directors/category/:category", (req, res) => {
    const category = req.params.category;
    const artistic_directors = [...new Set(maisons
        .filter((maison) => maison.category === category)
        .map((maison) => maison.artistic_director)
    )];
    res.json(artistic_directors);
});

app.get("/api/directors/country/:country", (req, res) => {
    const country = req.params.country;
    const artistic_directors = [...new Set(maisons
        .filter((maison) => maison.country === country)
        .map((maison) => maison.artistic_director)
    )];
    res.json(artistic_directors);
});

app.get("/api/categories", (req, res) => {
    const categories = [...new Set(maisons.map((maison) => maison.category))];
    res.json(categories);
});

app.listen(PORT , () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
