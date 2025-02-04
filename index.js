const express = require("express")
const dotenv = require("dotenv")
const connectDB = require('./config/db')



const app = express()
app.use(express.json())


const port = process.env.PORT || 7000

app.get('/',(req,res)=>{
    res.send("hello")
})



app.listen(port,()=>{
    console.log(`server is connected to the ${port}`)
    connectDB();
})