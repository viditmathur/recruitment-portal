var express=require('express');
var router=express.Router();
var user=require('./requestHandler/user');
var recruiter=require('./requestHandler/recruiter');
var seeker=require('./requestHandler/seeker');
var job=require('./requestHandler/job');


router.use('/user',user);
router.use('/recruiter',recruiter);
router.use('/seeker',seeker);
router.use('/job',job);


module.exports=router