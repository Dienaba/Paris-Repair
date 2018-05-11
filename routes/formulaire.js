var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('formulaire', { title: 'Belleville Repair' });
});
router.post('/', function(req, res, next) {
  res.render('validation', { title: 'Belleville Repair' });
});

module.exports = router;
