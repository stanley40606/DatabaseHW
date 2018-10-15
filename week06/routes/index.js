var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { id: '404412065',name: '林昶昇' });
});

module.exports = router;
