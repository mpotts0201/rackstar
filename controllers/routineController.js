const express = require('express')
const router = express.Router()
const Routine = require('../models/routine')

router.get('/', (req, res)=>{
    Routine.find().then((routines)=>{
        res.render('routines/index', {
            routines: routines
        })
    })
    res.send("Routine index is up")
})





module.exports = router