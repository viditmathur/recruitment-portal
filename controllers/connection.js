var sql =require('mysql');


var connection = sql.createConnection({
    host: process.env.SERVER,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
});


module.exports = connection;