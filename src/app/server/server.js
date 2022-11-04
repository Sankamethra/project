const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const api=require('./api')
const app=express()
app.use(cors())
app.use(bodyparser.json())
app.use('/api',api)
app.get('/',(req,res)=>{
    res.send("Hello from server")
})
app.listen(3000,err=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(" Server Connected:3000")
    }
})