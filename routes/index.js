var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  // request('http://localhost:3000/aspirateur', function (error, response, body) {
  //   var agenda = JSON.parse(body);
  //   console.log(agenda); // Print the HTML for the Google homepage.
  //
  // });
  res.render('index', { title: 'Belleville Repair'});
});

module.exports = router;
