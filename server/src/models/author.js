const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthorSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    patronymic: {
        type: String,
        required: true,
    },
});
 
AuthorSchema.methods.toString = function () {
    return `${this.firstname} ${this.lastname}  ${this.patronymic}`;
}

exports.AuthorSchema = AuthorSchema
exports.Author = mongoose.model('Author', AuthorSchema);