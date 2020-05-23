const express = require('express');
const app = express()
const port = 3000
const connection = require('./conf')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.put('/api/movies/:id', (request, results) => {
    const idMovie = request.params.id
    const formData = request.body

    connection.query('UPDATE movie SET ? WHERE id = ?', [formData, idMovie], (error) => {
        if (error) {
            console.log(error);

            results.sendStatus(500);
        } else {
            results.sendStatus(200)
        }
    })
})


app.put('/api/movies', (request, results) => {
    const idMovie = request.body.id
    const formData = request.body
    connection.query('UPDATE movie SET ? WHERE id = ?', [formData, idMovie], (error) => {
        if (error) {
            console.log(error);

            results.sendStatus(500);
        } else {
            results.sendStatus(200)
        }
    })
})

app.listen(port, (error) => {
    if (error) {
        throw new Error(error)
    } else {
        console.log(`server is now listening on port ${port}`)
    }
})