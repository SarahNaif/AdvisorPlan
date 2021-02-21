// const UserSchema = mongoose.Schema([Your Common Schema])

const mongoose = require('mongoose')

const calenderSchema = {
    date :Date ,
    // description: String,
    service: {type : mongoose.Schema.Types.ObjectId , ref : 'service'},
}

module.exports = calenderSchema
