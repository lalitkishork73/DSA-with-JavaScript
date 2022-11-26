require('dotenv').config()
const express = require('express');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const app = express();
const port = 3000;
const url = process.env.MONGOLAB_URI;

app.use(bodyParser.json());
console.log(url)
mongoose.connect(url,
  {
    useNewUrlParser: true,
  }).then(() => console.log("mongoDB connected successfully")).catch((err) => console.log(err));

app.get('/test', (req, res) => {
  console.log('test');
  return res.status(200).send({ status: true, message: "success" });
})

app.listen(process.env.PORT || port, () => console.log(`connected to Port ${process.env.PORT || port}`));
