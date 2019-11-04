var express=require('express');
var router=express.Router();
var user=require('../../models/user');
var jwt=require('jsonwebtoken');


router.post('/signup', (req, res, next) => {
    user.findOne({_id: req.body.email })
        .exec()
        .then(user => {
        if (user.length >= 1) {
            return res.status(409).json({
                message: "Mail exists"
            });
        } 
        else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    const user = new userSchema({
                        _id: req.body.id,
                        email:req.body.email,
                        password: hash,
                        role: req.body.role
                    });
                    user.save()
                        .then(result => {
                        console.log(result);
                        res.status(201).json({
                            message: "User created"
                        });
                    })
                        .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });
                }
            });
        }
    });
});


router.post('/login',(req, res, next) => {
    user.find({ email: req.body.email })
        .exec()
        .then(user => {
        if (user.length < 1) {
            return res.status(401).json({
                message: "Auth failed"
            });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            if (result) {
                const token = jwt.sign({
                    email: user[0].email
                },
                process.env.JWT_KEY,{
                    expiresIn: "1h"
                });
                return res.status(200).json({
                    message: "Auth successful",
                    token: token,
                    name: user[0].name,
                    UserId: user[0]._id,
                    role: user[0].role,
                });
            }
            res.status(401).json({
                message: "Auth failed !!!"
            });
        });
    })
        .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});


module.exports=router;