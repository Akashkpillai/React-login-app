const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {collection: 'Userdata'})

const User = mongoose.model('Userdata', UserSchema)

module.exports = User
