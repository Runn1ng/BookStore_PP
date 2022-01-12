const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
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
        required: false,
    },
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    is_admin: {
        type: Boolean,
    }
});
 
exports.UserSchema = UserSchema
exports.User = mongoose.model('User', UserSchema);