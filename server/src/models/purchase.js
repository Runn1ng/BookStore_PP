const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Book, BookSchema } = require('./book');

const PurchaseSchema = new Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'BookSchema'
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    purchase_date: {
        type: Date,
        required: true,
    },
    count : {
        type: Number,
        required: true,
        min: 0
    }
});
 
exports.Purchase = mongoose.model('Purchase', PurchaseSchema);