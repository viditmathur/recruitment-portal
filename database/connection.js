var sql =require('mysql');

exports.connection=()=>{
    var config = {
        server: process.env.SERVER,
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD
      };
      sql.createConnection(config,function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
}