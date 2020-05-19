const express = require('express')
const app = express()
const port = 3000

app.get('/api/movies',
    (req, resp) => {
        resp.end('Recuperation de tous les films')
    }
)

app.get('/api/movies/:id',

    (req, resp) => {

        const movies = [
            {
                id: 1, title: 'myMovie1'
            },
            {
                id: 2, title: 'myMovie2'
            },
            {
                id: 3, title: 'myMovie3'
            },
        ]

        const datas = req.params.id

        resp.end(JSON.stringify(movies[datas]))
    }
)

app.get('/api/employee',
    (req, resp) => {

        const name = req.query.name

        if (!name) {
            resp.status(404).send('Je ne connais pas ce nom deso!')
        }

        resp.end(name)

    }
)


app.listen(port, (error) => {
    if (error) { throw new Error('WTF?') }
    console.log(`server is listening on port ${port}`)
})