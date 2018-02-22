///////////////////////////////////////////////////////
////////////////// Packages ///////////////////////////
///////////////////////////////////////////////////////

const express = require('express')
const router = express.Router()
const User = require('../models/user')

///////////////////////////////////////////////////////
////////////////// Routes /////////////////////////////
///////////////////////////////////////////////////////

// INDEX //
router.get('/', (req, res)=>{
    
    User.find().then((users)=>{
        res.render('users/index', {
            users: users
        })
    })
    
})

// NEW //
router.get('/new', (req, res) => {
    res.render('users/new', {
    })
})



// CREATE //

// SHOW //

// EDIT //

// UPDATE //

// DESTROY //







///////////////////////////////////////////////////////
////////////////// Exports ////////////////////////////
///////////////////////////////////////////////////////

module.exports = router