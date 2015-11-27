var express = require('express');
var router = express.Router();


// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Homepage page' });
});

module.exports = router;
