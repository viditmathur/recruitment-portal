const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port= process.env.PORT;
   

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

