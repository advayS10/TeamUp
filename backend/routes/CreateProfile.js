const express = require('express')
const router = express.Router()
const Profile = require('../models/Profile')

const { body, validationResult } = require('express-validator')
const { model } = require('mongoose')

router.post('/profile', 
    body('email').isEmail().withMessage("Enter valid Email address."),
    body('phone').isLength({ min:10 , max:10}).withMessage("Enter valid Phone Number"),
    async (req, res) => {

        const error = validationResult(req)
        if(!error.isEmpty()){
            res.status(404).json({ error: error.array() })
        }

        try {
            let email = req.body.email

            const user = await Profile.findOne({email})

            if(user){
                await Profile.findOneAndUpdate({email}, { 
                    name: req.body.name,
                    location: req.body.location,
                    interest: req.body.interest,
                })

                res.json({success: true, updated: true})
            }
            else{
                await Profile.create({
                    name: req.body.name,
                    location: req.body.location,
                    interest: req.body.interest,
                    phone: req.body.phone,
                    email: req.body.email,
                })

                res.json({success: true, created: true})
            }

        } catch (error) {
            console.log(error.message)
            res.json({success: false})
        }

    }

)


router.post('/profiledata', async (req, res) => {
    try {
        let email = req.body.email
        const userProfile = await Profile.findOne({email})

        if (userProfile){
            res.send(userProfile)
        }
        else{
            res.send(false)
        }

    } catch (error) {
        res.send("Server Error")
    }
})


module.exports = router