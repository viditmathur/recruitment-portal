const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors');
 

const app = express();
const port= process.env.PORT||8080;

//const uri = process.env.base+process.env.password+process.env.final;
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://vidit:viditmathur@recruitmentapp-vutgm.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/api',routes);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

