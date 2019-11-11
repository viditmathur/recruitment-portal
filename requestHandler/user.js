var express=require('express');
var jwt=require('jsonwebtoken');
var bcrypt=require('bcrypt');
var sql = require('mysql');
var db = require('../controllers/connection')


exports.signup =  (req, res) => {    
            bcrypt.hash(req.body.password, 10, (err,hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    const user = {
                        "id":req.body.id,
                        "email":req.body.email,
                        "password": hash,
                        "role": req.body.role
                    }
                    var string = "insert into user values('"+user.email+"','"+user.role+"','"+user.password+"');";
                    db.query(string, function (err, result) {
                        if (err) throw err;
                        console.log(result);
                      });
                }
            })
};

exports.login=(req, res) => {
  var user = {
        "id":req.body.id,
        "email":req.body.email,
        "password": hash,
        "role": req.body.role
    }
    var string = "select * form user where email='"+user.email+"');";
    db.query(string, function (err, resultSet) {
        if (err) throw err;
    
        bcrypt.compare(req.body.password, resultSet.password, (err, result) => {
            if (err) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            if (result) {
                const token = jwt.sign({
                    email: resultSet.email
                },
                process.env.JWT_KEY,{
                    expiresIn: "1h"
                });
                return res.status(200).json({
                    message: "Auth successful",
                    token: token,
                    name: resultSet.name,
                    UserId: resultSet.email,
                    role: resultSet.role,
                });
            }
            res.status(401).json({
                message: "Auth failed !!!"
            });
        });
    });

}
