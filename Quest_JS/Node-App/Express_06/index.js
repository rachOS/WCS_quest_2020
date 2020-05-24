const express = require('express')
const connection = require('./conf')
const port = 3000
const app = express()

app.get('/api/movies', (req, res) => {

    let sql = 'SELECT * FROM movie';
    let sqlValues = [];

    /*  if(req.query.rating){
         sql += " WHERE rating = ?";
         sqlValues.push(req.query.rating)
     }

     if(req.query.genre){
         sql += " WHERE genre = ?";
         sqlValues.push(req.query.genre)
     } */


    if (req.query.genre && req.query.rating) {
        sql += " WHERE genre = ? AND rating = ?";
        sqlValues.push(req.query.genre,req.query.rating)
    }

    connection.query(sql, sqlValues, (error, results) => {
        if (error) {
            res.status(500).send('error de récup des données')
        } else if (results.length === 0) {
            res.status(400).send('movie not found')
        } else {
            // res.sendStatus(200)
            res.json(results)
        }
    })
})

app.listen(port, (error) => {

    if (error) {
        throw new Error('pas bon')
    } else {
        console.log(`now listen on port ${port}`);

    }
})