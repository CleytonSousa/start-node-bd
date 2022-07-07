const mysql = require("mysql2")

const pool = mysql.createPool({
    database: "", //seu database
    host: "", //seu host
    password: "", //seu password
    port: 7869, //seu port ou porta
    user: "" //seu root
})

module.exports = pool;