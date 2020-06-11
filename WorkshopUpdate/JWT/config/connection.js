// modules
const mysql = require('mysql')
require("dotenv").config();

// connect to mysql
const connection = mysql.createConnection(
    {
        host: process.env.JWT_HOST,
        user: process.env.JWT_USER,
        password: process.env.JWT_PASSWORD,
        database: process.env.JWT_DATABASE,
    }
)

// export module
module.exports = connection