const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    name :{
        type:String ,
        required: true 
    },
    price:{
        type:String,
        required : true 

    }

},{timestamps:true})


model.export = mongoose.model('Item',itemSchema)