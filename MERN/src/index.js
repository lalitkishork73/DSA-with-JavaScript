require('dotenv').config()
const express = require('express');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const app = express();
const port = 3000;
const url = process.env.MONGOLAB_URI;

const mysql = require('mysql');
const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lalit@33cool",
    database: "lalit"

})
  
connect.connect((err) => {
    if (err) throw err;
    connect.query("select * from users",(err,result)=>{
      console.log("data : ",result)
    })
    
})

app.use(bodyParser.json());
console.log(url)
// mongoose.connect(url,
//   {
//     useNewUrlParser: true,
//   }).then(() => console.log("mongoDB connected successfully")).catch((err) => console.log(err));

app.use('/',route);

app.listen(process.env.PORT || port, () => console.log(`connected to Port ${process.env.PORT || port}`));
