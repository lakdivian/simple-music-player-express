var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', {
        content: 'Welcome to NAKM ENT, Here you will get the full list of entertainments like full list of\
                 Musics, full list of videos and full list of Movies'
    });
});

module.exports = router;