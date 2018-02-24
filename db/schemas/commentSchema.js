const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise


const CommentSchema = new Schema({
    text: String
})


module.exports = CommentSchema