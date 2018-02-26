require('dotenv').config()
const mongoose = require('mongoose')
const User = require('../models/user')
const Routine = require('../models/routine')
const CommentModel = require('../models/comment')

// db, mongoose, and listeners
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('open', () => {
  console.log('Successfully connected to mongoDB')
})
db.on('error', (err) => {
  console.log(err)
})


// Comments
const firstComment = new CommentModel({
    title: "Bench press grips",
    text: "When gripping, be sure to keep hands spaced to about shoulder width."
})

const comment2 = new CommentModel({
    title: "Squat level",
    text: "When squatting, be sure to bottom out where your thighs become parallel with the ground."
})

const comment3 = new CommentModel({
    title: "Shoulder warmup",
    text: "Always warm up shoulders to avoid injuring your rotator cuff."
})

// Array for first user
const comments1 = [firstComment, comment2, comment3]

const comment4 = new CommentModel({
    title: "Pull Up",
    text: "When doing pull-ups, make sure to move your legs as little as possible."
})

const comment5 = new CommentModel({
    title: "Curling",
    text: "When curlling, be sure to squeeze at the top of the compression."
})

const comment6 = new CommentModel({
    title: "Tricep Pull Downs",
    text: "Be sure to use a weight that keeps you from using your shoulders to cheat in the motion."
})

// Array for second user
const comments2 = [comment4, comment5, comment6]


// Routines
const chestPress = new Routine({
    name: "Chest Press",
    muscleGroup: "pectorals",
    instructions: "Using a bench, with a barbell or dumbells, align the weight with your mid chest, and push with your shoulders back.",
    reps: "8-12",
    sets: "3"
})

const squat = new Routine({
    name: "Squats",
    muscleGroup: "quads",
    instructions: "Using the squat rack, align the bar on your shoulders.  Keeping your back straight, squat straight down into a deep squat.",
    reps: "10-12",
    sets: "4"
})

const shoulderPress = new Routine({
    name: "Shoulder Press",
    muscleGroup: "Mid deltoids",
    instructions: "On an upright bench, with dumbells, press stright up until the dumbells meet above your head.",
    reps: "8-10",
    sets: "3"
})

const widePullUp = new Routine({
    name: "Wide Grip Pull-up",
    muscleGroup: "Lattismus Dorsi",
    instructions: "On a wide grip pull up bar, with hands spread wider than shoulders, pull up, squeezing your upper back.",
    reps: "8-10",
    sets: "5"
})

const inclineCurl = new Routine({
    name: "Incline Bench Curl",
    muscleGroup: "bicep",
    instructions: "Seated on an inclined bench, with your arms hanging at the sides holding dumbells, curl outward one arm at a time.",
    reps: "8-12",
    sets: "4"
})

const triPullDown = new Routine({
    name: "Tricep Pull Down",
    muscleGroup: "triceps",
    instructions: "Using a pulley, attach the close grip v-bar.  With arms locked at your sides, use your triceps to curl down the pulley.",
    reps: "8-10",
    sets: "4"
})

// Array for first user 
const routines1 = [chestPress, squat, shoulderPress]


// Users
const murphy = new User({
    name: "Murphy",
    age: 25,
    email: "mpotts0201@gmail.com",
    username: "mpotts0201",
    routines: [chestPress, squat, shoulderPress],
    comments: [firstComment, comment2, comment3]
})

const cameron = new User({
    name: "Cameron",
    age: 24,
    email: "cam1515@gmail.com",
    username: "cam1515",
    routines: [widePullUp, inclineCurl, triPullDown],
    comments: [comment4, comment5, comment6]
})


// Save the users 

User.remove().then(()=>{
    return murphy.save()
}).then(()=>{
    console.log("Users are saved")
}).catch((err)=>{
    console.log(err)
})

Routine.remove().then(()=>{
    return CommentModel.remove()
}).then(()=>{
    return User.remove()
}).then(()=>{
    return User.insertMany([murphy, cameron])
}).then(()=>{
    console.log("Saved successfully")
    db.close()
}).catch((err)=>{
    console.log(err)
})
