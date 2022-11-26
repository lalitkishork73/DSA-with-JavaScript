const mysql = require('mysql');
const connect = mysql.createConnection({
    host: "localhost",
    user: "lalit",
    password: "Lalit@33cool",
    database: "users"

})

connect.connect((err) => {
    if (err) throw err;
    else console.log("connected to mysql database")
})
