const express = require('express')
const app = express()
const cors = require('cors')
const  mongoose = require('mongoose')
const userRouter = require('./Routes/user')

app.use(cors())
app.use(express.json())
app.use(
    express.urlencoded({ extended: true })
);

app.use(userRouter)


app.get('/',(req,res)=>{
    res.send('Hello world')
})


mongoose.connect('mongodb://127.0.0.1:27017/redux').then(()=>{
    console.log("database connected")
}).catch((err)=>{
    console.log(err)
})



app.listen(4000,()=>{
    console.log("server is started");
})