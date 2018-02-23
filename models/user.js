const mongoose = require('mongoose')
const UserSchema = require('../db/schemas/userSchema')


const User = mongoose.model('User', UserSchema)






module.exports = User