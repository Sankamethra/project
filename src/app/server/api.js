const express=require("express")
const mongo=require("mongodb").MongoClient
const router=express.Router()
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
const url="mongodb://127.0.0.1:27017/"
var d
mongo.connect(url,(err,db)=>{
    if(err) throw err;
    console.log("Database created")
    var dbs=db.db("mydb")
    d=dbs

    // dbs.createCollection("data",(err)=>{
    //     if(err) throw err
    //     console.log("Collection created")
    //     db.close()
    // })


    
})


router.post('/register',(req,res)=>{
    let data=req.body
    var obj={email:data.email,password:data.password}
    d.collection('data').insertOne(obj,(err)=>{
        if(err) throw err
        console.log("data inserted")
        res.send(JSON.stringify("data inserted"))
    })
})

router.post('/login',(req,res)=>{
    let data=req.body
    d.collection("data").findOne({email:data.email},(error,usr)=>{
        if(error){
            console.log(error)
        }
        else{
           if(!usr){
            res.status(401).send('invalid user')
           }else{
            if(usr.password!==data.password){
                res.status(401).send('Invalid password')
            }else{
                res.status(200).send(usr)
            }
           }
        }
    })
})

router.post('/file',(req,res)=>{
    let data=req.body   
    if(req.body){

    for(let i=0;i<data.length;i++){
        const dat={
            sno:data[i]['sno'],
            drawingnumber:data[i]['drawingnumber'],
            componentname:data[i]['componentname']
        }

        d.collection("data").insert([dat],{upsert:true})
    }
    res.send(JSON.stringify("Data loaded"))
}

    else{
        res.send(JSON.stringify("OOPS there is some error"))

    }

    
})



module.exports=router