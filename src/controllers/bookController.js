const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

const createBook = async function(req, res){
    let book = req.body
    let authorId = book.author_id
    let publisherId = book.publisher_id

    if(authorId){
        let auth = await authorModel.find({_id:authorId})
        if(auth.length == 0){
            res.send({msg: "this author is not present"})
            }
            if(publisherId){
                let publish = await publisherModel.find({_id:publisherId})
                if(publish.length ==0){
                    res.send({msg:"this publisher is not present"})
                }else{
                     const bookData = await bookModel.create(book)
                     res.send({data: bookData})
                 }
            }else{
                 res.send({msg: "PublisherId is a required field"})
            }
    }else{
        res.send({msg: "AuthorId field is required"})
    }
}

const getBooksData = async function(req,res){
    let allBookData = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: allBookData})
}



module.exports.createBook = createBook
module.exports.getBooksData = getBooksData