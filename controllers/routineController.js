const express = require('express')
const router = express.Router({ mergeParams: true })
const Routine = require('../models/routine')
const User = require('../models/user')
const CommentModel = require('../models/comment')

// INDEX //
router.get('/', (req, res) => {

    User.findById(req.params.userId).then((user) => {
        
        const routines = user.routines
        res.render('routines/index', {
            user: user,
            routines: routines
        })
    })
})
// NEW //
router.get('/new', (req, res)=>{
    res.render('routines/new', {
        userId: req.params.userId
    })
})


// CREATE // 
router.post('/', (req, res)=>{
    User.findById(req.params.userId).then((user)=>{
        const newRoutine = new Routine({
            name: req.body.name,
            instructions: req.body.instructions,
            muscleGroup: req.body.muscleGroup,
            reps: req.body.reps,
            sets: req.body.sets
        })
        user.routines.push(newRoutine)
        return user.save()
    }).then((updatedUser)=>{
        res.redirect(`/users/${req.params.userId}/routines`)
    })
})

// SHOW //
router.get('/:id', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        const routine = user.routines.id(req.params.id)
        res.render('routines/show', {
            userId: req.params.userId,
            routine: routine
        })
    })
})


// EDIT //
router.get('/:id/edit', (req, res)=>{

    User.findById(req.params.userId).then((user)=>{
        const routine = user.routines.id(req.params.id)
        res.render('routines/edit', {
            userId: req.params.userId,
            routine: routine
        })
        
    })
})

// UPDATE //
router.patch('/:id', (req, res)=>{
    User.findById(req.params.userId).then((user)=>{
        const routine = user.routines.id(req.params.id)
        routine.name = req.body.name
        routine.instructions = req.body.instructions
        routine.muscleGroup = req.body.muscleGroup
        routine.reps = req.body.reps
        routine.sets = req.body.sets

        return user.save()
    }).then((updatedUser)=>{
        res.redirect(`/users/${updatedUser._id}/routines/${req.params.id}`)
    }).catch((err)=>{
        console.log(err)
    })
})

// DELETE //

router.delete('/:id', (req, res)=>{
    User.findById(req.params.userId).then((user)=>{
        const routine = user.routines.id(req.params.id)
        routine.remove()
        return user.save()
    }).then(()=>{
        res.redirect(`/users/${req.params.userId}/routines`)
    })
})



module.exports = router