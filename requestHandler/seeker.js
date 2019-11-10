var express=require('express');
var seeker=require('../models/seeker');
var checkauth = require('./../middleware/checkAuth');




exports.getSeekerDetails= ('/:id',checkauth,(req,res,next) =>{
    seeker.findOne({_id:req.params.id}).exec(function(err,detials){
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


exports.postSeekerDetails=('/',checkauth,(req,res,next)=>{
    const seeker = new seekerSchema({
        _id: req.body.id,
        email:req.body.email,
        name: req.body.name,
        currentOrganisation: req.body.currentOrganisation,
        contactNumber: req.body.contactNumber,
        skills: req.body.skills,
        totalExperience: req.body.totalExperience
        
        
    });
    seeker.save()
        .then(result => {
        console.log(result);
        res.status(201).json({
            message: "Job Seeker created"
        });
    })
        .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});
