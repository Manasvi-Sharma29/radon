const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")

// ASSIGNMENT

// const createBook = async function(req,res){
//     let data = req.body
//     let savedData = await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const bookList = async function(req, res){
//     let savedData = await BookModel.find().select({"bookName":1, "authorName":1, "_id":0})
//     res.send({msg: savedData})
// }

// const getBooksInYear = async function(req, res){
//     let savedData = await BookModel.find({year: 2021})
//     res.send({msg: savedData})
// }

// const particularBooks = async function(req, res){
//     let data = req.body
//     let savedData = await BookModel.find(data)
//     res.send({msg: savedData})
// }

// const getXINRBooks = async function(req, res){
//     let savedData = await BookModel.find({"bookPrice.indianPrice":{$in:[100,200,500]}})
//     res.send({msg: savedData})
// }

// const randomBooks = async function(req, res){
//     let savedData = await BookModel.find({$or:[{"stockAvailable": true}, {"totalPages":{$gt : 500}}]})
//     res.send({msg:savedData})
// }

// module.exports.createBook = createBook
// module.exports.bookList = bookList
// module.exports.getBooksInYear = getBooksInYear
// module.exports.particularBooks = particularBooks
// module.exports.getXINRBooks = getXINRBooks
// module.exports.randomBooks = randomBooks 


// ASSIGNMENT

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


module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.bookList = bookList
module.exports.priceUpdate = priceUpdate
module.exports.bookFind = bookFind