var express = require('express');
var router = express.Router();

/* GET privacy page. */
router.get('/', function(req, res, next) {
    res.render('privacy', { title: 'CHIPS! Privacy' });
});

module.exports = router;