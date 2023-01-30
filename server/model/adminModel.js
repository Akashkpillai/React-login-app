const mongoose = require('mongoose')
const { collection } = require('./UserModle')

const adminSchema = new mongoose.Schema({
    name:{
    type:String,
    required:true
    },
    password:{
        type:String,
        required:true
    }
},{collection : admin})

const admin = mongoose.Schema('admin',adminSchema)

module.exports = admin