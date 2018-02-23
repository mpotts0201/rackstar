const express = require('express')
const router = express.Router()
const Routine = require('../models/routine')


// INDEX //
router.get('/', (req, res)=>{
    Routine.find().then((routines)=>{
        res.render('routines/index', {
            routines: routines
        })
    })
})

// SHOW //
router.get('/:id', (req, res)=>{
    Routine.findById(req.params.id).then((routine) => {
        
        res.render('routines/show',{
        routine: routine
        })
    })
})




module.exports = router