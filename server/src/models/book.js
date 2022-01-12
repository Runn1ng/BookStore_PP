const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Publisher, PublisherSchema } = require('./publisher');
const { Author, AuthorSchema } = require('./author');

const BookSchema = new Schema({
    name: {
        type: String,
        required: true,
    }, 
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publisher'
    }, 
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    img: {
        type: String,
        default: 'default_book.png'
    },
    article: {
        type: String,
        default: 'Хорошая книга'
    },
    cover: {
        type: Boolean,
        default: false
    },
    count: {
        type: Number,
        default: 0
    },
    count: {
        type: String,
        default: "Прекрасная книга",
    }
});
 
exports.Book = mongoose.model('Book', BookSchema);