const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise
const User = require('./userSchema')

const CommentSchema = new Schema({
    title: String,
    text: String
})


module.exports = CommentSchema