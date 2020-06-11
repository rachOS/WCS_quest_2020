/* Dans une application node, écrire une fonction qui:
prend en paramètre un objet wilder (name, firstname, campus)
renvoie un token

Ajouter une fonction qui:
prend en paramètre un token
renvoie l’objet wilder correspondant
 */


// import module
const express = require('express')
const app = express()
require('dotenv').config()

// use exppress.json and express.urlencoded as body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import config
const port = process.env.JWT_PORT

// import routes
const api = require('./routes')

// use this route as root  -> ex: http://localhost:3000/api/*
app.use('/api', api)

// port listen
app.listen(port, (err) => {
    if (err) {
        throw new Error(err)
    } else {
        console.log(`le server écoute le port ${port}`)
    }
})