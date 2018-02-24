const mongoose = require('mongoose')
const CommentSchema = require('../db/schemas/commentSchema')


const CommentModel = mongoose.model('CommentModel', CommentSchema)


module.exports = CommentModel