const express =require("express")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/",function(request,response){
    response.send("this is default endpoint")
    
})

app.get("/student",function(request,response){
    response.json([
        {name:"jt", city:"del"},
        {name:"garg", city:"bang"}
    ])
    
})

app.post("/student",(req,res)=>{
    const body =req.body
    res.json(body)
})

const port =4321

app.listen(port,()=>{
    console.log(`server listening at ${port}`)
})