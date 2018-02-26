///////////////////////////////////////////////////////
////////////////// Packages ///////////////////////////
///////////////////////////////////////////////////////

require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const hbs = require('hbs')
const mongoose = require('mongoose')
const userController = require('./controllers/userController')
const homeController = require('./controllers/homeController')
const routineController = require('./controllers/routineController')
const commentController = require('./controllers/commentController')
const path = require('path')

///////////////////////////////////////////////////////
////////////////// App Settings ///////////////////////
///////////////////////////////////////////////////////
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
app.set('view engine', 'hbs')
app.use(methodOverride('_method'))

///////////////////////////////////////////////////////
////////////////// Controllers ////////////////////////
///////////////////////////////////////////////////////

app.use('/users', userController)
app.use('/', homeController)
app.use('/users/:userId/routines', routineController)
app.use('/users/:userId/comments', commentController)
app.use(express.static(path.join(__dirname, 'public')))


///////////////////////////////////////////////////////
////////////////// Listeners /////////////////////////
///////////////////////////////////////////////////////

db.on('open', ()=>{
    console.log("Database is connected!")
})

db.on('error', (err)=>{
    console.log(err)
})

app.listen(3000, ()=>{
    console.log("Listening on PORT 3000")
})