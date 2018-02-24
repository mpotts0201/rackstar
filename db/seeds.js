const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/rackstar')
const User = require('../models/user')
const Routine = require('../models/routine')

const chestPress = new Routine({
    name: "Chest Press",
    muscleGroup: "pectorals",
    instructions: "Using a bench, with a barbell or dumbells, align the weight with your mid chest, and push with your shoulders back.",
    reps: "8-12",
    sets: "3",
    comments: []
})

// const routineArr = [ chestPress ]


const murphy = new User({
    name: "Murphy",
    age: 25,
    email: "mpotts0201@gmail.com",
    username: "mpotts0201",
    routines: [ chestPress ]
})

// Save the routines

Routine.remove().then(()=>{
    return chestPress.save()
}).then(()=>{
    console.log("Routines are saved")
}).catch((err)=>{
    console.log(err)
})

// Save the users 

User.remove().then(()=>{
    return murphy.save()
}).then(()=>{
    console.log("Users are saved")
}).catch((err)=>{
    console.log(err)
})
