// import module
const express = require('express')
const router = express.Router();

// import routes
const users = require('./user')

// routing
router.use('/users', users)

// export
module.exports = router