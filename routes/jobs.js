const express = require('express');
const router = express.Router(); 

const job = require("../requestHandler/job"); 

router.get("/",job.getAllJobsDetails);
router.get("/applicantlist",job.getApplicantList);
router.get("/joblist",job.getJobList);
router.post("/",job.postJob);
module.exports = router;