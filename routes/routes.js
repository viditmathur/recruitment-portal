var express=require('express');
var router=express.Router();
var user=require('./user');
var recruiter=require('./recruiter');
var seeker=require('./seeker');
var job=require('./jobs');


router.use('/user',user);
router.use('/recruiter',recruiter);
router.use('/seeker',seeker);
router.use('/job',job);


module.exports=router