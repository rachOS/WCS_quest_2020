const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/api/movies', (request, response) => {
    connection.query('SELECT * FROM movie', (error, results) => {
        if (error) {
            response.status(500).send('oula c est pas bon')
        } else {
            response.json(results)
        }
    })
});

app.get('/api/movies/name', (request, response) => {
    connection.query('SELECT name FROM movie', (error, results) => {
        if (error) {
            response.status(500).send('oula c est pas bon')
        } else {
            response.json(results)
        }
    })
});

app.get('/api/movies/poster', (request, response) => {
    connection.query('SELECT poster FROM movie', (error, results) => {
        if (error) {
            response.status(500).send('oula c est pas bon')
        } else {
            response.json(results)
        }
    })
});


app.post('/api/movies', (req, res) => {

    const formData = req.body;

    connection.query('INSERT INTO movie SET ?', formData, (err, results) => {

      if (err) {
        console.log(err);
        res.status(500).send(error);
      } else {
        res.sendStatus(200);
      }
    });
  });

app.listen(port, (error) => {
    if (error) {
        throw new Error('ça chie dans la colle!')
    } else {
        console.log(`the server is now listening on port ${port}`)
    }
});