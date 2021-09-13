const mongoose = require('mongoose');
const { Schema } = mongoose;

const Book = new Schema({
    name: String,
    email: String,
    address: String,
    gender: String,
});
 
exports.BookModel = mongoose.model('Book', Book);