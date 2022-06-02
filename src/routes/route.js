const express = require('express');
const importModule1 = require('../logger/logger')
const importModule2 = require('../util/helper')
const importModule3 = require('../validator/formatter')
const lodash = require('lodash')
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

router.get('/hello', function (req, res){
    let arr = lodash.chunk(['January' , 'February' , 'March' , 'April' , 'May' , 'June' ,'July' , 'August' , 'September' , 'October' , 'November' , 'December'],3)
    console.log(arr)
    let arr2 = lodash.tail([1,3,5,7,9,11,13,15,17,19])
    console.log(arr2)
    let arr3 = lodash.union([2,5,7,4,] , [3,4,2,6] , [16,3,11,7] , [4,12,5,35] , [2,35,5,7])
    console.log(arr3)
    let obj = lodash.fromPairs([['Horror' , 'The Shining'] , ['Drama' , 'Titanic'] , ['Thriller' , 'Shutter Island'] , ['Fantasy' , 'Pans Labyrinth']])
    console.log(obj) 
    res.send('My first ever api!')
});



module.exports = router;
// adding this comment for no reason