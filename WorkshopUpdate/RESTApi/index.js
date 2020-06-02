const express = require('express')
const app = express()
const connection = require('./conf')
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/heroes', (req, res) => {

    connection.query('SELECT * FROM heroes', (error, results) => {
        if (error) {
            res.status(500).send('IMPOSSIBLE TO ADD A NEW HEROE (status 500)')
        }

        res.json(results)

    })

})

app.post('/api/heroes', (req, res) => {

    const formData = req.body

    connection.query('INSERT INTO heroes SET ?', formData, (error, results) => {
        if (error) {
            res.status(500).send('IMPOSSIBLE TO ADD A NEW HEROE (status 500)')
        }

        res.json(results)
    })
})

app.put('/api/heroes/:id', (req, res) => {

    const formData = req.body
    const heroes = req.params

    connection.query(`UPDATE heroes SET ? WHERE id = ${heroes.id}`, formData, (error, results) => {
        if (error) {
            res.status(500).send('IMPOSSIBLE TO ADD A NEW HEROE (status 500)')
        }
        res.json(results)
    }
    )
})


app.delete('/api/heroes/:id', (req, res) => {

    const heroes = req.params

    connection.query(`DELETE FROM heroes WHERE id = ${heroes.id}`, (error, results) => {
        if (error) {
            res.status(500).send('IMPOSSIBLE TO ADD A NEW HEROE (status 500)')
        }
        res.json(results)
    })
})

app.listen(port, (error) => {
    if (error) {
        throw new Error('something is wrong')
    }
    console.log(`the server is now listening the port ${port}`)
})