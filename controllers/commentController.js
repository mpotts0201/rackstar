const express = require('express')
const router = express.Router({ mergeParams: true })
const Routine = require('../models/routine')
const User = require('../models/user')
const CommentModel = require('../models/comment')

// INDEX //
router.get('/', (req, res)=>{
    console.log("Index route")

    User.findById(req.params.userId).then((user) => {
        
        const comments = user.comments
        res.render('comments/index', {
            user: user,
            comments: comments
        })
    })
})

// NEW //
router.get('/new', (req, res)=>{
    res.render('comments/new', {
        userId: req.params.userId
    })
})

// CREATE // 
router.post('/', (req, res)=>{
    User.findById(req.params.userId).then((user)=>{
        const newComment = new Routine({
            text: req.body.text
        })
        user.comments.push(newComment)
        return user.save()
    }).then((updatedUser)=>{
        res.redirect(`/users/${req.params.userId}/comments`)
    })
})

// SHOW //
router.get('/:id', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        const comment = user.comments.id(req.params.id)
        res.render('comments/show', {
            userId: req.params.userId,
            comment: comment
        })
    })
})

// EDIT //
router.get('/:id/edit', (req, res)=>{

    User.findById(req.params.userId).then((user)=>{
        const comment = user.comments.id(req.params.id)
        res.render('comments/edit', {
            userId: req.params.userId,
            comment: comment
        })
        
    })
})

// UPDATE //
router.patch('/:id', (req, res)=>{
    User.findById(req.params.userId).then((user)=>{
        const comment = user.comments.id(req.params.id)
        comment.text = req.body.text

        return user.save()
    }).then((updatedUser)=>{
        res.redirect(`/users/${updatedUser._id}/comments/${req.params.id}`)
    }).catch((err)=>{
        console.log(err)
    })
})

// DELETE //

router.delete('/:id', (req, res)=>{
    User.findById(req.params.userId).then((user)=>{
        const comment = user.comments.id(req.params.id)
        comment.remove()
        return user.save()
    }).then(()=>{
        res.redirect(`/users/${req.params.userId}/comments`)
    })
})

module.exports = router

