// import module
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// import connection
const connection = require('../config/connection')

// create queries

// GET all users
router.get('/', (req, res) => {

    connection.query('SELECT * FROM user', (err, result) => {

        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json(result)
        }
    })

})

// WRITE one user
router.post('/register', (req, res) => {

 const {body} = req
 console.log(body)
  connection.query('INSERT INTO user SET ?', body, (err,result)=> {
      if (err){
          res.status(500).send(err)
      }else{
          res.json(result)
      }
  })

})

// export module
module.exports = router