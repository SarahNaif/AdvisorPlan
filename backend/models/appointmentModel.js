const mongoose = require('mongoose')
const calenderSchema = require('./calenderSchema')



// const calenderSchema = {
//     date :Date ,
//     description: String,
//     service: {type : mongoose.Schema.Types.ObjectId , ref : 'service'},
// }

const appointmetSchema =  {
    // ...calenderSchema,
    date: Date,
    time: String,
    service: String,
    topic: String,
    details: String,
    budget: Number,
    avaliable: Boolean,
    attachment: String,
    user :{type : mongoose.Schema.Types.ObjectId , ref : 'user' }
}


const Appointment = mongoose.model('appointment' , new mongoose.Schema(appointmetSchema , {timestamps :true}))

module.exports = Appointment

// const gerericUserSchema = {}


// const managesSchema = {
//    ... gerericUserSchema,
//    employees: []
//}

// const USER = 

