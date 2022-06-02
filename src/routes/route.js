const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha', 'Akash', 'Pritesh'])
    console.log('The first element received from underscope function is ' + firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {

    res.send('Hello there!')
});

router.get('/candidates', function (req, res) {
    console.log('Query paramters for this request are ' + JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is ' + state)
    console.log('Gender is ' + gender)
    console.log('District is ' + district)
    let candidates = ['Akash', 'Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function (req, res) {
    console.log('The request objects is ' + JSON.stringify(req.params))
    console.log('Candidates name is ' + req.params.canidatesName)
    res.send('Done')
})

router.get('/movies', function (req, res) {
    let arr = ['Raanjhana', 'The Shining', 'Lord of the rings', 'Batman begins']
    res.send(arr)
})

router.get('/movies/:IndexNumber', function (req, res) {
    let arr = ['Raanjhana', 'The Shining', 'Lord of the rings', 'Batman begins']
    if (req.params.IndexNumber > arr.length) {
        res.send('ERROR: This Index Number is invalid')
        }else{ 
            console.log('Index Number is:' + JSON.stringify(req.params))
            res.send('Movie is:' + arr[req.params.IndexNumber])    
        }
})

router.get('/films', function (req, res) {
    let arrObj = [{
        "id": 1,
        "name": "The Shining"
    },
    {
        "id": 2,
        "name": "Dr. Strange"
    },
    {
        "id": 3,
        "name": "Finding Nemo"
    },
    {
        "id": 4,
        "name": "Mysterious Island"
    }]
    res.send(arrObj)
})

router.get('/films/:filmId', function (req, res) {
    let arrObj = [{
        "id": 1,
        "name": "The Shining"
    },
    {
        "id": 2,
        "name": "Dr. Strange"
    },
    {
        "id": 3,
        "name": "Finding Nemo"
    },
    {
        "id": 4,
        "name": "Mysterious Island"
    }];

    for (let i = 0; i < arrObj.length; i++) {
        let arrNew = arrObj[i]
        if (req.params.filmId == arrNew.id) {
            console.log('Film Id is: ' +JSON.stringify(req.params))
            res.send(arrNew);
            return;
        }
    }
    res.send('ERROR: No movie exist with the given Id')

})




module.exports = router;
// adding this comment for no reason