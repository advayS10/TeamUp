const express = require("express")
const router = express.Router()
const User = require('../models/User')

const { body, validationResult } = require('express-validator');

const bcryt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = "Thisisjwtsecrettokenofteamupwebs"


router.post("/createuser", 
    body('email').isEmail().withMessage("Enter Valid email address.")
    .custom(async (email) => {
        const user = await User.findOne({email})
        if(user){
            return Promise.reject('Email already Use')
        }
    }),
    body('password').isLength({ min: 5 }).withMessage("Password minimum length should be 5."),
    body('phone').isLength({ min:10, max:10}).withMessage("Phone Number should be minimum 10 digits")
    .custom(async (phone) => {
        const user = await User.findOne({phone})
        if(user){
            return Promise.reject('Phone Number already Use')
        }
    }),    
    async (req, res) => {

        const error = validationResult(req)
        if(!error.isEmpty()){
            res.status(404).json({ error: error.array() })
        }

        const salt = await bcryt.genSalt(10)
        let secPassword = await bcryt.hash(req.body.password, salt)

        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPassword,
                phone: req.body.phone,
            })

            let email = req.body.email
            let userData = await User.findOne({email})
            
            const data = {
                user: {
                    id: userData.id
                }
            }

            const authToken = jwt.sign(data, jwtSecret)

            
            return res.json({ success: true, authToken: authToken })

        } catch (error) {
            console.log(error.message)
            res.json({ success: false })
        }
    }
)


router.post("/login", 
    body('email').isEmail().withMessage("Enter Valid email address."),
    body('password').isLength({ min: 5 }).withMessage("Password minimum length should be 5."),
    async (req, res) => {

        const error = validationResult(req)
        if(!error.isEmpty()){
            res.status(404).json({ error: error.array() })
        }

        let email = req.body.email


        try {
            
            let userData = await User.findOne({email})
            if(!userData){
                return res.status(404).json({ error: "Try login with other credentials."})
            }

            const pwdCompare = await bcryt.compare(req.body.password, userData.password)

            if(!pwdCompare){
                return res.status(404).json({ error: "Incorrect Password."})
            }

            const data = {
                user: {
                    id: userData.id
                }
            }

            const authToken = jwt.sign(data, jwtSecret)
            
            return res.json({ success: true, authToken: authToken })

        } catch (error) {
            console.log(error.message)
            return res.json({ success: false })
        }
    }
)

module.exports = router