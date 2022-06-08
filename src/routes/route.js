const express = require('express');
const router = express.Router();
const controller= require("../controllers/controller");
const bookModel = require('../models/bookModel');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// ASSIGNMENT 3MONGO

router.post("/createBook", controller.createBook)
router.post("/createAuthor", controller.createAuthor)
router.get("/bookList", controller.bookList)
router.get("/priceUpdate", controller.priceUpdate)
router.get("/bookFind", controller.bookFind)
router.get("/authorList", controller.authorList)

router.get( "/books-by-authorid/:Author_Id", async function(req, res){
    let result1 = await bookModel.find()
    let book =[]
    for(i=0 ; i<result1.length ; i++){
        if(result1[i].author_id == req.params.Author_Id){
            book.push(result1[i].name)
        }
    }
    res.send({msg: book})
})


module.exports = router;