const mongoose = require('mongoose')
const { Schema } = mongoose

const ProfileSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    interest:{
        type: Array,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    }
})


module.exports = mongoose.model('Profile', ProfileSchema)