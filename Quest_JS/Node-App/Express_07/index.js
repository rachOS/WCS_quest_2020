// dotenv loads parameters (port and database config) from .env
require('dotenv').config();
const express = require('express');
const { body, validationResult } = require('express-validator');
const connection = require('./db');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// respond to requests on `/api/users`
app.get('/api/users', (req, res) => {
  // send an SQL query to get all users
  connection.query('SELECT * FROM user', (err, results) => {
    if (err) {
      // If an error has occurred, then the client is informed of the error
      res.status(500).json({
        error: err.message,
        sql: err.sql,
      });
    } else {
      // If everything went well, we send the result of the SQL query as JSON
      res.json(results);
    }
  });
});

app.post('/api/users', [
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
], (req, res) =>
// send an SQL query to get all users

/* const { email, name, password } = req.body;
  if (!email || !name || !password) {
    res.status(422).send('al least one of required fielfd is missing');
  }

  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;
  if (!emailRegex.test(email)) {
    return res.status(422).json({
      error: 'Invalid email',
    });
  }

  const minLengthPassword = 8;
  if (password.length < minLengthPassword) {
    return res.status(422).json(
      { error: 'minimum length password is 8 characters' },
    );
  } */
  connection.query(
    'INSERT INTO user SET ?',
    [req.body],
    (err, results) => {
      if (err) {
        // If an error has occurred, then the client is informed of the error
        res.status(500).json({
          error: err.message,
          sql: err.sql,
        });
      } else {
        // If everything went well, we send the result of the SQL query as JSON
        res.json(results);
      }
    },
  ));

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${process.env.PORT}`);
});
