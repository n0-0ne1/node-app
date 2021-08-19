const { response } = require("express")
const express =require("express")
const app =express()
const cors=require("cors")
const router =express.Router()

const sql =require('mssql')

const dbConfig={
    user:"",
    password:"",
    database:"",
    server:"",
    options:{
        trustServerCertificate: true
    }
}

app.use(cors()) // to acces client  and server on same domain

router.get("/",(req,res)=>{
    res.json({message:"Welcome to Student API"})

})
router.get("/student",(req,res)=>{
    sql.connect(dbConfig,(err)=>{
        if(err){
            console.log(err);
        }

        const request =new sql.Request()
        request.query("Select * from Student", (error,data)=>{
            if(error){
                console.log(error);
            }
            response.json(data)
        })
    })

})


app.use("/api",router) //http://localhost:4321/api
const PORT=4321

app.listen(PORT,()=>{
    console.log(`Server listening at PORT ${PORT}`);
})