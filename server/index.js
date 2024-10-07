import express from "express"
import mysql2 from "mysql2"

const app = express()

const db = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"Julio2801.",
    database:"test"
})

app.listen(8800, ()=>{
    console.log("Connected to backend")
})