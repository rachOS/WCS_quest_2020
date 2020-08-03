// dotenv loads parameters (port and database config) from .env
require('dotenv').config();
const express = require('express');
const { check, validationResult } = require('express-validator');
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
const userValidationMiddlewares = [check('email').isEmail(), check('password').isLength({ min: 8 })];

app.post(
  '/api/users',
  [userValidationMiddlewares],
  (req, res) => {
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    return connection.query(
      'INSERT INTO user SET ?',
      [req.body],
      (err, results) => {
        if (err) {
          if (err === 'ER_DUP_ENTRY') {
            return res.status(409).json({
              error: ' Email already exist',
            });
          }
          // If an error has occurred, then the client is informed of the error
          return res.status(500).json({
            error: err.message,
            sql: err.sql,
          });
        }
        return connection.query(
          'SELECT * FROM user WHERE id = ?',
          results.insertId,
          (err2, records) => {
            if (err2) {
              return res.status(500).json({
                error: err2.message,
                sql: err2.sql,
              });
            }
            const insertedUser = records[0];
            const { password, ...user } = insertedUser;
            const host = req.get('host');
            const location = `http://${host}${req.url}/${user.id}`;
            return res.status(201).set('Location', location).json(user);
          },
        );
      },
    );
  },
);

app.put('/api/users/:id', [userValidationMiddlewares], (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const sqlUpdate = 'UPDATE user SET ? WHERE id = ?';

  connection.query(sqlUpdate, [body, id], (err, result) => {
    if (err) {
      if (err === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'Email already exist' });
      }
      return res.status(500).json({
        error: err.message,
        sql: err.sql,
      });
    }
    const sqlSelect = 'SELECT * FROM user WHERE id = ?';
    return connection.query(sqlSelect, [id], (err2, records) => {
      if (err2) {
        res.status(500).json({
          error: err2.message,
          sql: err2.sql,
        });
      }
      const updatedUser = records[0];
      const { password, ...userz } = updatedUser;
      const { hostname } = req;
      const location = `${hostname}/${req.url}/${userz.id}`;
      return res.status(200).set('Location', location).json(userz);
    });
  });
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${process.env.PORT}`);
});
