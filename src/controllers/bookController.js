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
const updateBookCover = async function (req, res) {
  let data = await publisherModel
    .find({
      name: { $in: ["Penguin", "HarperCollins"] },
    })
    .select({ _id: 1 });
  let publisherId = data.map((x) => x._id);
  let book = await bookModel.updateMany(
    { publisher: { $in: publisherId } },
    { $set: { isHardCover: true } }
  );

  let allBooks = await bookModel
    .find({ isHardCover: true })
    .populate(["author", "publisher"]);
  res.send({ allBooks });
};

const updatePrice = async function (req, res) {
  let authorRating = await authorModel
    .find({ rating: { $gt: 3.5 } })
    .select({ _id: 1 });

  let authorID = authorRating.map((x) => x._id);
  let book = await bookModel.updateMany(
    { author: { $in: authorID } },
    { $inc: { price: 10 } }
  );

  let allBooks = await bookModel.find({ author: { $in: authorID } });
  res.send({ allBooks });
};


module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.updateBookCover = updateBookCover
module.exports.updatePrice = updatePrice
