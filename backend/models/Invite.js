const mongoose = require('mongoose')

const { Schema } = mongoose

const InviteSchema = new Schema({
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    invited_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
        required: true
    },
    invited_to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
        required: true
    }
}, { timestamps : true })

module.exports = mongoose.model('Invite', InviteSchema)