const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    fs.readdir(path.join(__dirname, '../public/musics'), (err, files) => {
        if (err) {
            console.log(err);
        } else {
            res.render('musicList', {
                musics: files
            })
        }

    })
})

router.get('/play', (req, res) => {
    const name = req.query.name;
    fs.readdir(path.join(__dirname, '../public/musics'), (err, files) => {
        if (err) {
            console.log(err);
        } else {
            files = files.filter(file => file !== name);
            res.render('play', {
                name: name,
                musics: files
            })
        }

    })
})

module.exports = router;