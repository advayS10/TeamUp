const mongoose = require("mongoose")
require('dotenv').config()

const mongoURI = process.env.MONGODB_URI

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log("connected")


    } catch (error) {
        console.log(error.message)
    }
}

module.exports = mongoDB