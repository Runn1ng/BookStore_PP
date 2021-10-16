const mongoose = require('mongoose');
const { Schema } = mongoose;

const PublisherSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    }
});
 
exports.PublisherSchema = PublisherSchema;
exports.Publisher = mongoose.model('Publisher', PublisherSchema);