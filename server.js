//dépendances 
const PORT = 5000
const express = require('express')
const axios = require('axios')
const path = require('path')
const cors = require('cors')


const maisons = require('./data/maisons')

const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,"public/index.html"))
})


app.get("/api/maisons", (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.json(maisons).status(200);
});

app.get("/api/maisons/category/:category", (req, res) => {
    res.setHeader("Content-Type", "application/json")
    const category = req.params.category;
    const filteredMaisons = maisons.filter(
        (maison) => maison.category === category
    );
    res.json(filteredMaisons).status(200);
});

  // filter => retourne un array avec une condition spécifique ( ici le pays )
app.get("/api/maisons/country/:country", (req, res) => {
    res.setHeader("Content-Type", "application/json")
    const country = req.params.country;
    const filteredMaisons = maisons.filter(
        (maison) => maison.country === country
    );
    res.json(filteredMaisons).status(200);
});

app.get("/api/maisons/random", (req, res) => {
    res.setHeader("Content-Type", "application/json")
    const randomMaison = maisons[Math.floor(Math.random() * maisons.length)];
    res.json(randomMaison).status(200);
});

app.get("/api/maisons/:id", (req, res) => {
    res.setHeader("Content-Type", "application/json")
    const id = parseInt(req.params.id);
    const maison = maisons.find((maison) => maison.id === id);
    if (maison) {
        res.json(maison).status(200);
    } else {
        res.status(404).send("L'ID que vous cherchez n'existe pas dans notre base");
    }
});


// SET => liste de valeurs UNIQUES 
app.get("/api/directors", (req, res) => {
    res.setHeader("Content-Type", "application/json")
    const artistic_directors = [...new Set(maisons.map((maison) => maison.artistic_director))];
    res.json(artistic_directors).status(200);
});

app.get("/api/directors/random", (req, res) => {
    res.setHeader("Content-Type", "application/json")
    const artistic_directors = [...new Set(maisons.map((maison) => maison.artistic_director))];
    const randomDA = artistic_directors[Math.floor(Math.random() * artistic_directors.length)];
    res.json(randomDA).status(200);
});


app.get("/api/directors/category/:category", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const category = req.params.category;
    const artistic_directors = [...new Set(maisons
        .filter((maison) => maison.category === category)
        .map((maison) => maison.artistic_director)
    )];
    res.json(artistic_directors).status(200);
});

app.get("/api/directors/country/:country", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const country = req.params.country;
    const artistic_directors = [...new Set(maisons
        .filter((maison) => maison.country === country)
        .map((maison) => maison.artistic_director)
    )];
    res.json(artistic_directors).status(200);
});

app.get("/api/categories", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const categories = [...new Set(maisons.map((maison) => maison.category))];
    res.json(categories).status(200);
});

app.listen(PORT , () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
