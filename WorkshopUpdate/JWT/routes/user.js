// import module
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// import connection
const connection = require('../config/connection')

// QUERIES

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

// VERIFY token
const verifyToken = (req, res, next) => {

    const bearerHeader = req.headers.authorization
    console.log(req)

    if (typeof bearerHeader != "undefined") {
        // split [header.payload.signature]
        const bearer = bearerHeader.split(" ")
        // get token from array : bearer[1] == payload
        const bearerToken = bearer[1]
        // set the token
        req.token = bearerToken
        // next middleware
        next()
    } else {
        // error
        res.status(500).send('error')
    }
}

// PROTECT this route

router.post('/profile', verifyToken, (req, res) => {

    jwt.verify(req.token, process.env.JWT_SECRETKEY, (err, authData) => {

        if (err) {
            res.status(403).send(err)
        } else {
            res.json({
                message: "profil authenticated",
                authData
            })
        }
    })

/* 403 Forbidden
The request contained valid data and was understood by the server,
but the server is refusing action. This may be due to the user not having the
necessary permissions for a resource or needing an account of some sort,
or attempting a prohibited action (e.g. creating a duplicate record where only one
is allowed).
This code is also typically used if the request provided authentication via the
WWW-Authenticate header field, but the server did not accept that authentication.
The request should not be repeated.
*/
    res.status(403).send('Connection error')
})

// WRITE one user
router.post('/register', async (req, res) => {

    const { body } = req
    const hash = await bcrypt.hash(body.password, 10)
    const formData = {
        email: body.email,
        password: hash,
        name: body.name
    }

    connection.query('INSERT INTO user SET ?', [formData], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.json(result)
        }
    })
})

// CREATE Token
router.post('/login', (req, res) => {

    const { body } = req
    const formData = {
        email: body.email,
        password: body.password,
    }

    connection.query('SELECT * FROM user WHERE email = ?', [formData.email], (err, user) => {
        if (err) {
            res.status(500).send(err)
        } else {
            const isSame = bcrypt.compare(formData.password, user[0].password)
            if (!isSame) {
                res.status(500).send("Le password ne correspond pas")
            } else {
                jwt.sign({ user }, process.env.JWT_SECRETKEY, (err, token) => {
                    res.json({ token })
                })
            }
        }
    })


})

// export module
module.exports = router