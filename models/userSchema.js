const mongoose =require("mongoose")

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true 
    },
    city :{
        type: String ,
        required : true 

    },
    item :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Item'
    }]

},{timestamps:true})

model.export = mongoose.model('User',userSchema)

