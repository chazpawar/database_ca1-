const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        await mongoose.connect (`${process.env.MONGO_URI}`)
        console.log('mongoose is connected ')
        
    } catch (error) {
        console.log("mongoose connection failed ")
        
    }
}

module.export = connectDB

