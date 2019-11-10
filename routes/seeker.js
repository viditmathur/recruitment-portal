const express = require('express');
const router = express.Router(); 



const seeker= require("../requestHandler/seeker"); 

router.get("/seeker/",seeker.getSeekerDetails);
router.post("/seeker",seeker.postSeekerDetails);
module.exports = router;