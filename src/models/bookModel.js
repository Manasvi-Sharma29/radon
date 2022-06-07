const mongoose = require('mongoose');




// ASSIGNMENT

// const bookSchema = new mongoose.Schema( {
//     bookName: {type: String,
//                 required: true},
//     bookPrice: {indianPrice: String,
//                 europeanPrice: String},
//     year: {type: Number,
//             default: 2021},
//     tags: [String],
//     authorName: String,
//     totalPages: Number,
//     stockAvailable: Boolean
// }, {timestamps: true});

// ASSIGNMENT 3MONGO

const bookSchema = new mongoose.Schema({
    name: String,
    author_id: {type:Number,
                required: true},
    price: String,
    ratings: Number,

})

module.exports = mongoose.model('MyBook', bookSchema);