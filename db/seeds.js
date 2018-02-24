const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/rackstar')
const User = require('../models/user')
const Routine = require('../models/routine')
const CommentModel = require('../models/comment')


const firstComment = new CommentModel({
    text: "What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo."
})


const chestPress = new Routine({
    name: "Chest Press",
    muscleGroup: "pectorals",
    instructions: "Using a bench, with a barbell or dumbells, align the weight with your mid chest, and push with your shoulders back.",
    reps: "8-12",
    sets: "3"
})



const murphy = new User({
    name: "Murphy",
    age: 25,
    email: "mpotts0201@gmail.com",
    username: "mpotts0201",
    routines: [ chestPress ],
    comments: [ firstComment ]
})

// Save the comments

CommentModel.remove().then(()=>{
    return firstComment.save()
}).then(()=>{
    console.log("Comments are saved")
}).catch((err)=>{
    console.log(err)
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


