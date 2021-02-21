const mongoose = require('mongoose')


const packageSchema = new mongoose.Schema({
    title : {
        type :String , 
        required :true
    }, 
    NumOfMeeting : {
        type :Number , 
        required :true
    },
    price : Number ,
    decription : String ,
    services: [{type : mongoose.Schema.Types.ObjectId , ref : 'service'}],
} , {timestamps :true})


const Package = mongoose.model('package' , packageSchema)
module.exports = Package
