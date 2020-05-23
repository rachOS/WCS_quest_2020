const express = require('express');
const app = express()
const port = 3000
const connection = require('./conf')

/* app.use(express.json)
app.use(express.urlencoded({ extended: true })); */

app.delete('/api/movies/:id', (request, results) => {

    const idMovie = request.params.id

    connection.query('DELETE FROM movie WHERE id = ?', [idMovie], (error) => {
        if (error) {
            results.sendStatus(500)
        } else {
            results.sendStatus(200)
        }
    })
})

app.listen(port, (error) => {
    if (error) {
        throw new Error(error)
    } else {
        console.log(`le server écoute le port ${port}`)
    }
})