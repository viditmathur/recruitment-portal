var express=require('express');
var checkauth = require('./../middleware/checkAuth');



exports.getRecruiterDetails=('/:id',checkauth,(req,res,next)=>{
    var string = "select * form recruiter where id='"+req.body.id+"');";
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

exports.postRecruiterDetails=('/',checkauth,(req,res,next)=>{
    const recruiter = {
        "id": req.body.id,
        "email":req.body.email,
        "name": req.body.name,
        "organisation": req.body.organisation,
        "contactNumber": req.body.contactNumber,
        
    }
    var string = "insert into recruiter values('"+recruiter.id+"','"+recruiter.email+"','"+recruiter.name+"','"+recruiter.organisation+"','"+recruiter.contactNumber+"');";
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
