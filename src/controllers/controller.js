const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const { join } = require("path")


// ASSIGNMENT 3MONGO

const createBook = async function(req, res){
    let allBook = req.body
    let savedBook = await BookModel.create(allBook)
    res.send({msg:savedBook})
}

const createAuthor = async function(req, res){
    let allAuthor = req.body
    let savedAuthor = await AuthorModel.create(allAuthor)
    res.send({msg:savedAuthor})
}

const bookList = async function(req, res){
    let result1 = await AuthorModel.find({ author_name:"Chetan Bhagat"})
    let id = result1[0].author_id
    let result2 = await bookModel.find({author_id: id})
    res.send({msg: result2})
}

const priceUpdate = async function(req, res){
    let data = await bookModel.findOneAndUpdate({name:"Two states"}, {$set:{price:100}}, {new:true} )
    let result1 = await AuthorModel.find({author_id: data.author_id })
    let price = data.price
    res.send({author_name: result1[0].author_name, price})
}

const bookFind = async function(req, res){
    let bookRange = await bookModel.find({price:{$lte:50, $gte:100}})
    let arr = []
    for (let i=0; i<bookRange.length ; i++){
        let authorName = await AuthorModel.find({author_id: bookRange[i].author_id}).select({author_name:1, author_id:1, _id:0})
        arr.push(authorName)
    }
    res.send({msg:arr})
    
}

const authorList = async function(req, res){
    let author = await AuthorModel.find({age:{$gt:50}}).select({age:1, author_name:1, author_id:1})
    let book = await BookModel.find({ratings:{$gt:4}}).select({ratings:1, author_id:1})
    let arr = []
    for(i=0; i<5; i++){
        for(j=0; j<2; j++){
            if(book[i].author_id == author[j].author_id && book[i].ratings){
                arr.push(author[j].author_name , author[j].age)
            }
        }
    }
    res.send({msg: arr})
}

module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.bookList = bookList
module.exports.priceUpdate = priceUpdate
module.exports.bookFind = bookFind
module.exports.authorList = authorList