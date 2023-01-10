const fs = require('fs');
const { dirname } = require('path');

// fs.writeFileSync(__dirname+'/read.txt', "time is ")
// fs.writeFileSync(__dirname+'/read.txt', "no one knows ")
/* fs.writeFileSync(__dirname + '/read.txt', "what are you doing,and learning")    

fs.appendFileSync(__dirname + '/read.txt', "know as much you can");
fs.appendFileSync(__dirname + '/read.txt', "downloading the movies better than streaming online");

const data=fs.readFileSync(__dirname + '/read.txt')
console.log(data.toString()) */


fs.writeFileSync(__dirname + '/real.txt', "chimapnji")
fs.appendFileSync(__dirname + '/real.txt', " once in while doing")
const read=fs.readFileSync(__dirname + '/real.txt','utf8')
console.log(read.toString());
fs.renameSync(__dirname + '/real.txt', __dirname + '/motor.txt')

// fs.rmSync(__dirname + '/motor.txt') 

// fs.mkdirSync(__dirname + '/Lama');
// fs.dirname(__dirname+"/Lama");
// fs.writeFileSync('/real.txt', "chimapnji")
// fs.appendFileSync('/real.txt', " once in while doing")
// const read = fs.readFileSync('/real.txt', 'utf8')
// console.log(read);
// fs.unlinkSync(__dirname+'/motor.txt');
fs.rmdirSync(__dirname+"/Lama")