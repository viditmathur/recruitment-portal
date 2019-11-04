const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const mongoose = require('mongoose');


const app = express();
const port= process.env.PORT||8080;

const url = process.env.base+process.env.password+process.env.final;

mongoose.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database connected!");
  });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/api',routes);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

