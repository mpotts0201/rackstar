///////////////////////////////////////////////////////
////////////////// Packages ///////////////////////////
///////////////////////////////////////////////////////

const express = require('express')
const router = express.Router({ mergeParams: true })
const User = require('../models/user')
const Routine = require('../models/routine')
const CommentModel = require('../models/comment')

///////////////////////////////////////////////////////
////////////////// Routes /////////////////////////////
///////////////////////////////////////////////////////

// INDEX //
router.get('/', (req, res)=>{
    

    User.find().then((users)=>{

        
        res.render('users/index', {
            users: users,
        })
    })

    
})

// NEW //
router.get('/new', (req, res) => {
    res.render('users/new')
})

// CREATE //
router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        username: req.body.username
    })

    newUser.save().then((savedUser)=>{
        res.redirect(`/users/${savedUser._id}`)
    })
})

// All Routines route //
router.get('/allRoutines', (req, res)=>{
    User.find().then((users)=>{
        User.findById(req.params.userId).then((user)=>{

        res.render('users/allRoutines', {
            users: users,
            userId: req.params.userId
        })
    })
    })
})

// All Comments route//
router.get('/allComments', (req, res)=>{
    User.find().then((users)=>{

        const userId = users._id
        res.render('users/allComments', {
            users: users,
            userId: userId
        })
    })
})

// SHOW //
router.get('/:id', (req, res)=>{
    User.findById(req.params.id).then((user)=>{
        res.render('users/show',{
            id: req.params.id,
            user: user
        })
    })
})


// EDIT //
router.get('/:id/edit', (req, res)=>{
    
    User.findById(req.params.id).then((user)=>{
        res.render('users/edit', {
            id: req.params.id,
            user: user
        })
    })
    

})


// UPDATE //
router.patch('/:id', (req, res)=>{
    
    User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        username: req.body.username
        
    }, {new:true}).then((updatedUser)=>{
        res.redirect(`/users/${updatedUser._id}`)
    })

})

// DESTROY //

router.delete('/:id', (req, res)=>{
    User.findByIdAndRemove(req.params.id).then(()=>{
        res.redirect('/users')
    })
})





///////////////////////////////////////////////////////
////////////////// Exports ////////////////////////////
///////////////////////////////////////////////////////

module.exports = router
