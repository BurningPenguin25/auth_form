const express = require('express')
const mysql = require('mysql')

const app = express()

app.use(express.json())


//     cd /usr/local/mysql/bin/
//     ./mysql -u root -p
//
const db = mysql.createConnection({
    host: 'localhost', //
    user: 'root', // user в настройках сервера mysql /etc/my.cnf  user = penguin
    password: '', // asdfghjkl2012b - пароль локального сервера mysql
    database: 'auth_database' //название базы данных в mysql
})

app.post("/main", (req, res)=>{
    const username = req.body.username
    const password = req.body.password
    db.query(
        'some string',
        [password, username],
        (err, result)=>{
        if(err){
            console.log(err)
        }else{
            if (result) {
                res.send(result);
            }else{
                res.send('wrong password')
            }
        }
        }
    )
})


app.listen(3000, ()=>{ // порт в настройках сервера mysql /etc/my.cnf  port = 5325 ???
    console.log('listen port database')
})


// CREATE TABLE auth_data (user_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL, login VARCHAR(100) NOT NULL, password VARCHAR(100) )
// desc auth_data

//mysql> desc auth_data
//     -> ;
// +----------+--------------+------+-----+---------+----------------+
// | Field    | Type         | Null | Key | Default | Extra          |
// +----------+--------------+------+-----+---------+----------------+
// | user_id  | int unsigned | NO   | PRI | NULL    | auto_increment |
// | login    | varchar(100) | NO   |     | NULL    |                |
// | password | varchar(100) | YES  |     | NULL    |                |
// +----------+--------------+------+-----+---------+----------------+
// 3 rows in set (0.00 sec)