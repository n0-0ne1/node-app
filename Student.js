const express = require("express")
const app = express()
const router = express.Router();
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'Jatingarg1',
    port: 5432,
  })
const cors = require('cors')

app.use(cors()) //to run client and server on same domain

// ? To get the posted data add below two lines
app.use(express.json())
app.use(express.urlencoded({extended: true}))

router.get("/", (req, res)=>{
    res.json({message: 'Welcome to Student API'})
})

router.get("/student", (req, res) => {

    pool.query('Select * from users', (error, results) => {
        if (error) {
          throw error
        }
        
        res.json(results.rows)
        console.log(results.rows);
      })

})

app.use("/", router) //address will end with "/"

const PORT = 5001

app.listen(PORT, () =>{
    console.log(`Server listening at PORT ${PORT}` )
})