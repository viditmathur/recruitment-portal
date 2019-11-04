var express=require('express');
var router=express.Router();
var jobDetails=require('../../models/jobDetails');
var recruiterJob=require('../../models/recruiterJobMapping');
var seekerJob=require('../../models/jobSeekerMapping');
var seeker=require('../../models/seeker');
var checkauth = require('./../../middleware/checkAuth');




router.get('/',checkauth,(req,res,next)=>{
    jobDetails.find({}).exec(function(err,detials){
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

router.get('/:id',checkauth,(req,res,next)=>{
    jobDetails.findOne({_id:req.params.id}).exec(function(err,detials){
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


router.post('/',checkauth,(req,res,next)=>{
    const jobDetails = new jobSchema({
        _id: req.body.id,
        role:req.body.role,
        experience: req.body.experience,
        organisation: req.body.organisation,
        skills: req.body.skills,
        
    });
    jobDetails.save()
        .then(result => {
        console.log(result);
        res.status(201).json({
            message: "Job created"
        });
    })
        .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});


router.get('/jobList/:id',checkauth,(req,res,next)=>{
    recruiterJob.find({recruiterId:req.params.id}).exec(function(err,detials){
        if (err){
            console.log(err);
            res.send("error occured. check console for details");              
        }
        else{
            console.log("Entries found");
            details.forEach(entry => {
                jobDetails.findOne({_id:entry.jobId}).exec((err,jobDetails)=>{
                    if(err){
                        console.log(err);
                        res.send("error occured. check console for details");
                    }
                    else{
                        console.log("Entry found");
                        details["jobList"].push(jobDetails);
                    }
                })
            });
            res.json(detials);
        }
    });
});


router.get('/applicantList/:id',checkauth,(req,res,next)=>{
    seekerJob.find({jobId:req.params.id}).exec(function(err,detials){
        if (err){
            console.log(err);
            res.send("error occured. check console for details");              
        }
        else{
            console.log("Entries found");
            details.forEach(entry => {
                seeker.findOne({_id:entry.seekerId}).exec((err,seekerDetails)=>{
                    if(err){
                        console.log(err);
                        res.send("error occured. check console for details");
                    }
                    else{
                        console.log("Entry found");
                        details["applicantList"].push(seekerDetails);
                    }
                })
            });
            res.json(detials);
        }
    });
});

module.exports=router;