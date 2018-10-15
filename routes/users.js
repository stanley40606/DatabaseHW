var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.json([{
        id: 1,
        username: "404412065 林昶昇"
    }, {
        id: 2,
        username: "404412248 張品翔"
    }, {
        id: 2,
        username: "404412180 曾麒銘"
    }]);
});

module.exports = router;