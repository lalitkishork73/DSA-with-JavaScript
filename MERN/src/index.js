const express = require('express');
const {default:mongoose}= require('mongoose');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const app=express();
const port=3000;

app.use(bodyParser.json());

mongoose.connect( "mongodb+srv://lalitkishork73:UzPr9bb6Wvxda9eC@cluster0.o2wavxe.mongodb.net/group27Database?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
})

app.get('/test',(req,res)=>{
  console.log('test');
  return res.status(200).send({status:true, message:"success"});
})

app.listen(process.env.PORT || port, () => console.log(`connected to Port ${port}`));
