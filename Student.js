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

router.get("/user", (req, res) => {

    pool.query('Select * from users', (error, results) => {
        if (error) {
          throw error
        }
        
        res.json(results.rows)
        //console.log(results.rows);
      })

})

router.get("/user/:id", (req, res) => {
    const userId = req.params.id

    pool.query(`Select * from users WHERE id=${userId}`, (error, results) => {
        if (error) {
          throw error
        }
        
        res.json(results.rows)
        //console.log(results.rows);
      })

})

router.post("/user", (req, res) => {

    let {name, email} = req.body

    pool.query(`INSERT INTO users (name, email) VALUES ('${name}', '${email}')`, (error, results) => {
        if (error) {
          throw error
        }
        res.json(results)
        console.log(results);
      })

})

router.put("/user/:id", (req, res) => {

    const userId = req.params.id
    let {name, email} = req.body

    pool.query(
        `Update users SET name='${name}', Email='${email}' WHERE id=${userId}`,
        (error, results) => {
          if (error) {
            throw error
          }
          res.json(results)
        }
      )

})

router.delete("/user/:id", (req, res) => {

    const userId = req.params.id

    pool.query(`DELETE FROM users WHERE id=${userId}`, (error, results) => {
        if (error) {
          throw error
        }
        console.log(results);
        res.json(results)
      })

})

app.use("/", router) //address will end with "/"

const PORT = 5001

app.listen(PORT, () =>{
    console.log(`Server listening at PORT ${PORT}` )
})