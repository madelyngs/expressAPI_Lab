const express = require('express');
const getChirps = require('/chirpstore');
let router = express.Router();

router.get('/' , (req, res) => {
    res.send('chirps');
});

module.exports = router;