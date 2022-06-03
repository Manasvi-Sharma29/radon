const express = require('express');
const router = express.Router();
const nodemon = require('nodemon')

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

// ASSIGNMENT

let players = [
                {
                    "name" :"manish",
                    "dob" :"1/1/1995",
                    "gender" :"male",
                    "city" : "jalandhar",
                    "sports" : ["swimming"]
                },
                {
                    "name" :"gopal",
                    "dob" :"1/09/1995",
                    "gender" :"male",
                    "city" :"delhi",
                    "sports" :["soccer"]
                },
                {
                    "name" :"lokesh",
                    "dob" :"1/1/1990",
                    "gender" :"male",
                    "city" :"mumbai",
                    "sports" :["soccer"]
                }                
                ]

router.post('/players', function(req,res){
   
    for(i=0 ; i<players.length ; i++){
        let nameNew = req.body.name
        let newPlayer = req.body
         if(nameNew !== players[i].name){
            players.push(newPlayer)
            res.send(players)      
         }
         break;
    }
    res.send('ERROR: Duplicacy exist')
 })
router.get('/sol1' , function (req,res){
    let arr = [1,2,3,5,6,7]
    let sum = 0;
    for(i=0 ; i<arr.length ; i++){
        sum += arr[i];
    }
    let lastDigit = arr.pop()
    let consecutiveSum = lastDigit * (lastDigit+1) / 2
    let missingNumber = consecutiveSum - sum
    res.send({data: missingNumber});
})

router.get('/sol2', function(req,res){
    let arr = [33, 34, 35, 37, 38]
    let len = arr.length
    let sum = 0;
    for(i=0 ; i<arr.length ; i++){
        sum += arr[i]
    }
    let firstDigit = arr[0]
    let lastDigit = arr.pop()
    let consecutiveSum = (len + 1) * (firstDigit + lastDigit)/ 2
    let missingNumber = consecutiveSum - sum
    res.send({data: missingNumber});
})


 

module.exports = router;