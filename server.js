//dépendances 
const PORT = 5000
const express = require('express')
const axios = require('axios')

const app = express()

app.get('/', (req,res) => {
    res.json('Welcome to my API')
})

app.listen(PORT , () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
