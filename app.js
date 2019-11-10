const express = require('express');
const bodyParser = require('body-parser');

const userRoutes =  require('./routes/user');
const jobRoutes =  require('./routes/jobs');
const seekerRoutes =  require('./routes/seeker');
const recruiterRoutes =  require('./routes/recruiter');
//const routes = require('./routes/routes');
const cors = require('cors');
 

const app = express();
const port= process.env.PORT||8080;

//const uri = process.env.base+process.env.password+process.env.final;
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://vidit:viditmathur@recruitmentapp-vutgm.mongodb.net/test?retryWrites=true&w=majority";

var database, collection

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/user',userRoutes);
app.use('/recruiter',recruiterRoutes);
app.use('/seeker',seekerRoutes);
app.use('/job',jobRoutes);
app.get('/',(req,res,next)=>{
  res.send('Welcome to your Application')
})
app.listen(port, () => {
  MongoClient.connect(uri, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        console.log(error);
        
        throw error;
    }
    database = client.db("recruit");
    collection = database.collection("recruitmentApp");
    console.log("Connected to Recruit");
});
  console.log('Server is up and running on port numner ' + port);
});

