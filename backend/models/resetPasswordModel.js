const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const resetPasswordSchema = new mongoose.Schema({

    userId: {type : mongoose.Schema.Types.ObjectId , ref : 'user' } ,
    resetPasswordToken: String,
    expire: Date,
    status: Number

}, { timestamps: true })


const ResetPassword = mongoose.model('resetPassword', resetPasswordSchema)
module.exports = ResetPassword
