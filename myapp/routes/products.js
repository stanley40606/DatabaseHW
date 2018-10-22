var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
    var db = req.con;
    var data = '';
    db.query('SELECT * from product', function(req, rows) {
        data = rows;
        console.log(data);
        res.render('products', { title: 'Express', data: data });
    });
});

module.exports = router;