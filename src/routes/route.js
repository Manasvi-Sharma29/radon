const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const basicController = require("../controllers/basicController")
const commonMW = require ("../middlewares/commonMiddlewares");
const { route } = require('express/lib/application');

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })


const mid1 = function(req,res,next){
    let time = new Date()
    let ipAddress = req.ip
    let routeUsed = req.route.path
    console.log("hi! I'm a middileware, my name is mid1 and below is what I logged")
    console.log(time, ipAddress, routeUsed)
    
    next()
}

router.get('/basicRoute', mid1, basicController.basicCode )


module.exports = router;