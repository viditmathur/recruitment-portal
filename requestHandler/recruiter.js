var express=require('express');
var recruiter=require('../models/recruiter');
var checkauth = require('./../middleware/checkAuth');



exports.getRecruiterDetails=('/:id',checkauth,(req,res,next)=>{
    recruiter.findOne({_id:req.params.id}).exec(function(err,detials){
        if (err){
            console.log(err);
            res.send("error occured. check console for details");              
        }
        else{
            console.log("Entry found");
            res.json(detials);
        }
    });
});

exports.postRecruiterDetails=('/',checkauth,(req,res,next)=>{
    const recruiter = new recruiterSchema({
        _id: req.body.id,
        email:req.body.email,
        name: req.body.name,
        organisation: req.body.organisation,
        contactNumber: req.body.contactNumber,
        
    });
    recruiter.save()
        .then(result => {
        console.log(result);
        res.status(201).json({
            message: "Recruiter created"
        });
    })
        .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});
