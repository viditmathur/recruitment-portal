const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');


const app = express();
const port= process.env.PORT||8080;
   

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/api',routes);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

