var express=require('express');
var checkauth = require('./../middleware/checkAuth');




exports.getAllJobsDetails=('/',checkauth,(req,res,next)=>{
    var string = "select * form jobDetails );";
    db.query(string, function (err, resultSet) {
    
        if (err){
            console.log(err);
            res.send("error occured. check console for details");              
        }
        else{
            console.log("Entries found");
            res.json(resultSet);
        }
    });
   
});

exports.getJobDetails=('/:id',checkauth,(req,res,next)=>{
    var string = "select * form jobDetails where id='"+req.body.id+"');";
    db.query(string, function (err, resultSet) {
    
        if (err){
            console.log(err);
            res.send("error occured. check console for details");              
        }
        else{
            console.log("Entry found");
            res.json(resultSet);
        }
    });
   
});


exports.postJob=('/',checkauth,(req,res,next)=>{
    const jobDetails = new jobSchema({
        "id": req.body.id,
        "role":req.body.role,
        "experience": req.body.experience,
        "organisation": req.body.organisation,
        "skills": req.body.skills,
        
    });
    var string = "insert into jobDetails values('"+jobDetails.id+"','"+jobDetails.role+"','"+jobDetails.experience+"','"+jobDetails.organisation+"','"+jobDetails.skills+"');";
    db.query(string, function (err, resultSet) {
        if (err){
            console.log(err);
            res.send("error occured. check console for details");              
        }
        else{
            console.log("Entry inserted");
            res.json(resultSet);
        }
    });
    
});


exports.getJobList=('/:id',checkauth,(req,res,next)=>{
    var string = "select j.id, j.name from recruiterJobMapping rJ, jobDetails j join on rJ.jobId=j.jobId having rJ.recruiterId="+req.params.id+"";
    
    db.query(string, function (err, resultSet) {
        if (err){
            console.log(err);
            res.send("error occured. check console for details");              
        }
        else{
            console.log("Entries Found");
            res.json(resultSet);
        }
    });
});


exports.getApplicantList=('/:id',checkauth,(req,res,next)=>{
    var string = "select s.id, s.name, s.email from jobSeekerMapping jS, seeker s join on jS.seekerId=s.id having jS.jobId="+req.params.id+"";
    
    db.query(string, function (err, resultSet) {
        if (err){
            console.log(err);
            res.send("error occured. check console for details");              
        }
        else{
            console.log("Entries Found");
            res.json(resultSet);
        }
    });
    
});
