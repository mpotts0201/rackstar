const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/rackstar')
const User = require('../models/user')



const murphy = new User({
    name: "Murphy",
    age: 25,
    email: "mpotts0201@gmail.com",
    username: "mpotts0201"
})


// Save the users 

User.remove().then(()=>{
    return murphy.save()
}).then(()=>{
    console.log("Users are saved")
})
