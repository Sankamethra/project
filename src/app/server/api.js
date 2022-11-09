const express=require("express")
const mongo=require("mongodb").MongoClient
const router=express.Router()
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json({limit: '50mb'}))
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
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
            res.send(JSON.stringify('invaliduser'))
           }else{
            if(usr.password!==data.password){
                res.send(JSON.stringify('invalidpassword'))
            }else{
                res.status(200).send(JSON.stringify("validuser"))
            }
           }
        }
    })
})

router.post('/file',(req,res)=>{
    let data=req.body
    d.collection("new").createIndex({"sno":1},{unique:true})   
    if(req.body){

    for(let i=0;i<data.length;i++){
        const dat={
            sno:data[i]['sno'],
            drawingnumber:data[i]['drawingnumber'],
            componentname:data[i]['componentname'],
            partname:data[i]['partname'],
            material:data[i]['material'],
            sequencename:data[i]['sequencename'],
            opn:data[i]['opn'],
            bar:data[i]['bar'],
            insertspec:data[i]['insertspec'],
            noofedge:data[i]['noofedge'],
            edgelife:data[i]['edgelife'],
            make:data[i]['make'],
            supplier:data[i]['supplier'],
            rate:data[i]['rate'],
            insertlife:data[i]['insertlife'],
            alternateinsert:data[i]['alternateinsert'],
            noofedgeforalternative:data[i]['noofedgeforalternative']
        

            
        }

        d.collection("new").aggregate([dat],{upsert:true})
    }
    res.send(JSON.stringify("Data loaded"))
}

    else{
        res.send(JSON.stringify("OOPS there is some error"))

    }

    
})

router.post('/getdata',(req,res)=>{
   let data=req.body
   let obj={drawingnumber:data.drawingnumber,partname:data.partname,sequencename:data.sequencename}
   d.collection("new").findOne(obj,(err,dat)=>{
    if (err) throw err
    res.send(JSON.stringify(dat))
   })

})

router.post('/getupdate',(req,res)=>{
    let data=req.body
    let filter={drawingnumber:data.drawingnumber,partname:data.partname,sequencename:data.sequencename}
    let newobj
     if(data.drawingnumbernew){
        newobj={$set:{drawingnumber:data.drawingnumbernew}}
     }else{
        if(data.componentnamenew){
            newobj={$set:{componentname:data.componentnamenew}}
        }
        else{
            if(data.partnamenew){
                newobj={$set:{partname:data.partnamenew}}
            }else{
                if(data.materialnew){ 
                    newobj={$set:{material:data.materialnew}}                      

                }else{
                    if(data.sequencenamenew){
                        newobj={$set:{sequencename:data.sequencenamenew}}

                    }else{
                        if(data.opnnew){
                            newobj={$set:{opn:data.opnnew}}

                        }else{
                            if(data.barnew){
                                newobj={$set:{bar:data.barnew}}

                            }else{
                                if(data.insertspecnew){
                                    newobj={$set:{insertspec:data.insertspecnew}}

                                }else{
                                    if(data.noofedgenew){
                                        newobj={$set:{noofedge:data.noofedgenew}}

                                    }else{
                                        if(data.edgelifenew){
                                            newobj={$set:{edgelife:data.edgelifenew}}

                                        }else{
                                            if(data.makenew){
                                                newobj={$set:{make:data.makenew}}

                                            }else{
                                                if(data.suppliernew){
                                                    newobj={$set:{supplier:data.suppliernew}}

                                                }else{
                                                    if(data.ratenew){
                                                        newobj={$set:{rate:data.ratenew}}

                                                    }else{
                                                        if(data.insertlifenew){
                                                            newobj={$set:{insertlife:data.insertlifenew}}

                                                        }else{
                                                            if(data.alternateinsertnew){
                                                                newobj={$set:{alternateinsert:data.alternatenew}}

                                                            }else{
                                                                if(data.noofedgeforalternativenew){
                                                                    newobj={$set:{noofedgeforalternative:data.noofedgeforalternativenew}}
                                                                }else{
                                                                    
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

     }
 
    // let newobj={$set:{insertlife:data.insertlifenew,rate:data.ratenew}}
    d.collection("new").updateOne(filter,newobj,(err,dat)=>{
        if(err){
            res.send(JSON.stringify("Update error")) 
        }
        else{
            d.collection("new").findOne(filter,(err,dat)=>{
            if (err) throw err
            res.send(JSON.stringify(dat))
           })  
        }
    })

})



router.post('/grid',(req,res)=>{
    let data=req.body


    for(let i=0;i<data.length;i++){
        let count=d.collection("new").count()
        const dat={
            sno:count+1,
            drawingnumber:data[i]['drawingnumbernew'],
            componentname:data[i]['componentnamenew'],
            partname:data[i]['partnamenew'],
            material:data[i]['materialnew'],
            sequencename:data[i]['sequencenamenew'],
            opn:data[i]['opnnew'],
            bar:data[i]['barnew'],
            insertspec:data[i]['insertspecnew'],
            noofedge:data[i]['noofedgenew'],
            edgelife:data[i]['edgelifenew'],
            make:data[i]['makenew'],
            supplier:data[i]['suppliernew'],
            rate:data[i]['ratenew'],
            insertlife:data[i]['insertlifenew'],
            alternateinsert:data[i]['alternateinsertnew'],
            noofedgeforalternative:data[i]['noofedgeforalternativenew']
        }

        d.collection("new").insert([dat],{upsert:true})
    }

    res.send(JSON.stringify("data inserted"))





        
    
    
    // res.send(JSON.stringify(drawingnumber))
    // d.collection('data').insertOne(obj,(err)=>{
    //     if(err) throw err
    //     console.log("data inserted")
    //     res.send(JSON.stringify("data inserted"))
    // })
})



module.exports=router