const express = require('express')
const mysql = require('mysql')

const client = require('./conn_redis')



const app = express()
app.use(express.json())


//     cd /usr/local/mysql/bin/
//     ./mysql -u root -p
//
const db = mysql.createConnection({
    host: 'localhost', //
    user: 'root', // user в настройках сервера mysql /etc/my.cnf  user = penguin
    password: '', // asdfghjkl2012b - пароль локального сервера mysql
    database: 'auth_data' //название базы данных в mysql куда идет информация
})




app.post("/main", (req, res)=>{
    const login = req.body.username
    const password = req.body.password

    db.query(
        'some string',
        [password, login],
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




app.listen(3000, ()=>{ // порт в настройках сервера mysql /etc/my.cnf  port = 5325 ??? //Приложение запускает сервер и слушает соединения на порте 3000
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