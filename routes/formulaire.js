var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('formulaire', { title: 'Paris Repair' });
});

module.exports = router;
