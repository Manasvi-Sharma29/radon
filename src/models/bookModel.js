const mongoose = require('mongoose');


// ASSIGNMENT 3MONGO

const bookSchema = new mongoose.Schema({
    name: String,
    author_id: {type:Number,
                required: true},
    price: String,
    ratings: Number,

})

module.exports = mongoose.model('MyBook', bookSchema);