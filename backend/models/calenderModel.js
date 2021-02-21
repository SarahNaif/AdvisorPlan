const mongoose = require('mongoose')
const calenderSchema = require('./calenderSchema')

// const calenderSchema = {
//     date :Date ,
//     description: String,
//     service: {type : mongoose.Schema.Types.ObjectId , ref : 'service'},
// }

// const appointmetSchema =  {
//     ...baseSchema,
//     field :Date ,
// }

const Calender = mongoose.model('calender' , new mongoose.Schema(calenderSchema , {timestamps :true}))
// const Appointment = mongoose.model('appointment' , new mongoose.Schema(appointmetSchema , {timestamps :true}))


module.exports = Calender


// const gerericUserSchema = {}


// const managesSchema = {
//    ... gerericUserSchema,
//    employees: []
//}

// const USER = 