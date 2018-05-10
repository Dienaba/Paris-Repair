var express = require('express');
var router = express.Router();

var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('DXML8nYflGjLEWQkBtDrUA');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('benevole', { title: 'Belleville Repair' });
});

router.post('/', function(req, res, next) {
  var message = {
    "html": "<p>Bonjour,<br/> Mr Bilal est intéresser pour la réparation de sa le 16 Juin<br/> Pour le contacter voici son numer </p>",
    "text": "Example text content",
    "subject": "example subject",
    "from_email": "dienaba@makesense.org",
    "from_name": "Example Name",
    "to": [{
      "email": "camara.dienaba@gmail.com",
      "name": "Belleville Repair",
      "type": "to"
    }]
    };

    var async = false;
    var ip_pool = "Main Pool";
    mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool}, function(result) {
      console.log(result);

  }, function(e) {
    // Mandrill returns the error as an object with name and message keys
    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
  });
  res.render('mail', { title: 'Belleville Repair' });
});

module.exports = router;
