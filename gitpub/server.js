const express = require('express')
const app = require("liquid-express-views")(express())
const drinks = require('./models/drinks.js')
app.get('/drinks', (req, res)=> {
    res.render('index', {allDrinks:drinks})
})

app.get('/', (req, res)=>{
    res.send('Welcome to the Gitpub App!')
})
app.get('/drinks/:id', (req, res)=>{
    res.render('show', {drink: drinks[req.params.id]})
})

app.listen(3000, () => {
    console.log('Welcome to Gitpub App!')
})