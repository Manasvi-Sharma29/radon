const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const controller= require("../controllers/controller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// ASSIGNMENT

// router.post("/createBook", BookController.createBook)

// router.get("/bookList", BookController.bookList)

// router.post("/getBooksInYear", BookController.getBooksInYear)

// router.get("/getParticularBooks", BookController.particularBooks)

// router.get("/getXINRBooks", BookController.getXINRBooks)

// router.get("/getRandomBooks",BookController.randomBooks )


// ASSIGNMENT 3

router.post("/createBook", controller.createBook)
router.post("/createAuthor", controller.createAuthor)
router.get("/bookList", controller.bookList)
router.get("/priceUpdate", controller.priceUpdate)
router.get("/bookFind", controller.bookFind)


module.exports = router;