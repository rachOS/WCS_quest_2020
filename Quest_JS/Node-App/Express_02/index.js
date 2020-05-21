const express = require('express')
const connection = require('./conf')
const port = 2000
const app = express()

app.get('/api/employees', (req, res) => {
    connection.query('SELECT * FROM employee', (error, results) => {
        if (error) {
            res.status(500).send('error de récup des données')
        } else {
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