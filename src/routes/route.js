const express = require('express');
const importModule1 = require('../logger/logger')
const importModule2 = require('../util/helper')
const importModule3 = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
   importModule1.welcome()
   importModule2.printDate()
   importModule2.printMonth()
   importModule2.getBatchInfo()
   importModule3.trim()
   importModule3.changetoLowerCase()
   importModule3.changetoUpperCase()
    res.send('My first ever api!')
});



module.exports = router;
// adding this comment for no reason