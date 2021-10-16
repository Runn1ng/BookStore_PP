const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Publisher, PublisherSchema } = require('./publisher');

const BookSchema = new Schema({
    name: {
        type: String,
        required: true,
    }, 
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PublisherSchema'
    }
});
 
exports.Book = mongoose.model('Book', BookSchema);