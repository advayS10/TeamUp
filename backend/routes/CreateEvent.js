const express = require('express')
const router = express.Router()
const Event = require('../models/Event')

router.post('/event', async (req, res) => {
    try {
        await Event.create({
            sport: req.body.sport,
            location: req.body.location,
            date: req.body.date,
            time: req.body.time,
            players: req.body.players,
            name: req.body.name,
            description: req.body.description,
            useremail: req.body.useremail,
            category: req.body.category,
        })

        return res.json({success: true})
    } catch (error) {
        console.log(error.message)
        return res.json({success: false})

    }
}) 

router.post('/eventUpdate', async (req, res) => {
    try {
        await Event.findOneAndUpdate(
            { _id: req.body._id },  
            {
                $set: {
                    sport: req.body.sport,
                    location: req.body.location,
                    date: req.body.date,
                    time: req.body.time,
                    players: req.body.players,
                    name: req.body.name,
                    description: req.body.description,
                    useremail: req.body.useremail,
                    category: req.body.category,
                },
                $push: { players_joined: req.body.player }  
            },
            { new: true } 
        );

        
        return res.json({ success: true });
    } catch (error) {
        console.log(error.message);
        return res.json({ success: false });
    }
});


router.get('/eventData', async (req, res) => {
    try {
        const events = await Event.find()  // Fetch all events from the database
        return res.json({ success: true, events })
    } catch (error) {
        console.log(error.message)
        return res.json({ success: false })
    }
})


router.get(`/eventData/:id`, async (req, res) => {
    const { id } = req.params

    try {
        const event = await Event.findById(id)
        return res.json({ success: true, event})
    } catch (error) {
        console.log(error.message)
        return res.json({ success: false })
    }
})

router.post('/eventDelete', async (req, res) => {
    
    try {
        // Correctly delete the event by its ID using findByIdAndDelete
        const event = await Event.findByIdAndDelete(req.body._id);

        if (!event) {
            return res.status(404).json({ success: false, message: "Event not found" });
        }

        return res.json({ success: true });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
});



module.exports = router