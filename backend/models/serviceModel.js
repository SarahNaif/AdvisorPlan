const mongoose = require('mongoose')


const serviceSchema = new mongoose.Schema({
    title: String,
    decription : String, 
    // calender: [{type : mongoose.Schema.Types.ObjectId , ref : 'calender'}],

} , {timestamps :true})


const Service = mongoose.model('service' , serviceSchema)
module.exports = Service
