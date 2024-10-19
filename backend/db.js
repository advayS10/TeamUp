const mongoose = require("mongoose")
require('dotenv').config()

// const mongoURI = "mongodb+srv://advaysalvi8:vhP4ujfF2CA51QBA@cluster0.t7hqg.mongodb.net/teamup?retryWrites=true&w=majority&appName=cluster0"

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