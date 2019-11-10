const express = require('express');
const router = express.Router(); 



const recruiter= require("../requestHandler/recruiter"); 

router.get("/recruiter/",recruiter.getRecruiterDetails);
router.post("/recruiter",recruiter.postRecruiterDetails);
module.exports = router;