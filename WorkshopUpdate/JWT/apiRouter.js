// import modules
const express = require('express')
// import files
const usersCtrl = require('./routes/users_controller')

// main Router
exports.router = () => {
    const apiRouter = express.Router()

    // Users routes
    apiRouter.route('/users/register').post(usersCtrl.register)
    apiRouter.route('/users/login').post(usersCtrl.register)

    return apiRouter()
}


