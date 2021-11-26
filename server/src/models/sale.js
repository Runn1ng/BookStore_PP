const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Book, BookSchema } = require('./book');
const { User, UserSchema } = require('./user');

const SaleSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserSchema'
    }, 
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BookSchema'
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    sale_date: {
        type: Date,
        required: true,
    },
    count : {
        type: Number,
        required: true,
        min: 0
    }
});
 
exports.Sale = mongoose.model('Sale', SaleSchema);