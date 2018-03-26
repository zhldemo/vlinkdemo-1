const express = require('express');
const router = express.Router();
var Twitter = require('twitter');
const ogs = require('open-graph-scraper');



//get meta graph
router.get('/getog/', function(req,res,next) {
  const options = { url: req.query.url,'timeout': 2000 };
  ogs(options, function(error, results) {
    if (!error) {
      res.send(results);
    } else {
      res.send({errorcode:404,msg:"This URL is invalid"}); // This is returns true or false. True if there was a error. The error it self is inside the results object.
    }
  });
});

module.exports = router;
