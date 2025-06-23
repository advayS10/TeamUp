const express = require('express')
const router = express.Router()
const Invite = require('../models/Invite')

router.post('/invite', async (req, res) => {
    try {
        const { event, invited_by, invited_to } = req.body 

        const existingInvite = await Invite.findOne({ event, invited_by, invited_to})

        if(existingInvite){
            return res.json({success:false, message:"Invited already"})
        }

        await Invite.create({
            event,
            invited_by,
            invited_to
        })

        return res.json({success: true, message: 'Invite created successfully'})
    } catch (error) {
        console.log(error.message)
        return res.json({success: false})
    }
})

router.get('/invitations/:id', async(req, res) => {
    try {
        const {id} = req.params
        const invitations = await Invite.find({ invited_to: id })
            .populate("event", "sport") // Populating event name
            .populate("invited_by", "name") // Populating inviter name


        return res.json({success:true, invitations});
    } catch (error) {
        console.error(error);
        return res.status(500).json
    }
})

router.post('/deleteInvite', async(req, res) => {
    try {
        const event = await Invite.findByIdAndDelete(req.body._id)

        if(!event){
            return res.status(404).json({success:false, message:"Event not found!"})
        }

        return res.json({success:true})
    } catch (error) {
        console.log(error)
        return res.status(500).json
    }
})

module.exports = router