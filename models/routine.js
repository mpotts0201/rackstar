const mongoose = require('mongoose')
const RoutineSchema = require('../db/schemas/routineSchema')


const Routine = mongoose.model('Routine', RoutineSchema)






module.exports = Routine