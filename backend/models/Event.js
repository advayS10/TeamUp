const mongoose = require('mongoose')

const { Schema } = mongoose

const EventSchema = new Schema({
    sport: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
    time:{
        type: String,
        required: true, 
    },
    players:{
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    players_joined: {
        type: Array,
    },
    useremail:{
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Event', EventSchema)