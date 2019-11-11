var express=require('express');
var checkauth = require('./../middleware/checkAuth');




exports.getSeekerDetails= ('/:id',checkauth,(req,res,next) =>{
    var string = "select * form seeker where id='"+req.body.id+"');";
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


exports.postSeekerDetails=('/',checkauth,(req,res,next)=>{
    const seeker ={
        "id": req.body.id,
        "email":req.body.email,
        "name": req.body.name,
        "currentOrganisation": req.body.currentOrganisation,
        "contactNumber": req.body.contactNumber,
        "skills": req.body.skills,
        "totalExperience": req.body.totalExperience   
    }
    var string = "insert into seeker values('"+seeker.id+"','"+seeker.email+"','"+seeker.name+"','"+seeker.currentOrganisation+"','"+seeker.contactNumber+"','"+seeker.skills+"','"+seeker.totalExperience+"');";
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
