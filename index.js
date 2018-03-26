const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');



// set up express app
const app = express();


//set up static files
app.use(express.static('public'));

// use body-parser middleware
app.use(bodyParser.json());
app.use(cors());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});

});

app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(404).send({error: "no good"});

});

// listen for requests
app.listen(process.env.port || 8000, function(){
    console.log('now listening for requests');
});
