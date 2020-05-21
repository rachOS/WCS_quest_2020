const connection = require('./conf');
const express = require('express');
const app = express()
const port = 3000

app.get('/api/movies', (req, res) => {
    // res.send("movies")
    connection.query('SELECT * FROM movie', (error, results) => {
        if (error) {
            res.status(500).send('something is wrong')
        } else {
            res.json(results)
        }
    })
});

app.get('/api/movies/names', (req, res) => {
    // res.send('movies/names')
    connection.query('SELECT name FROM movie', (error, results) => {
        if (error) {
            res.sendStatus(500)
        } else {
            res.json(results)
        }
    })
});

app.listen(port, (error) => {
    if (error) {
        throw new Error('something is wrong')
    } else {
        console.log(`he server is now listening on port ${port}`)
    }
});