const express = require('express');
const router = express.Router();
const controller= require("../controllers/controller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// ASSIGNMENT 3MONGO

router.post("/createBook", controller.createBook)
router.post("/createAuthor", controller.createAuthor)
router.get("/bookList", controller.bookList)
router.get("/priceUpdate", controller.priceUpdate)
router.get("/bookFind", controller.bookFind)


module.exports = router;