const express = require('express')
const mysql = require('mysql')

const app = express()

app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'penguin',
    password: 'password',
    database: 'test_database'
})

app.post("/path", (req, res)=>{
    const username = req.body.username
    const password = req.body.password
    db.query(
        'some string',
        [password, username],
        (err, result)=>{
            console.log(err)
        }
    )
})


app.listen(3000, ()=>{
    console.log('listen port database')
})