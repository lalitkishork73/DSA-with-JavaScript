const fs = require('fs');
const { dirname } = require('path');

// fs.writeFileSync(__dirname+'/read.txt', "time is ")
// fs.writeFileSync(__dirname+'/read.txt', "no one knows ")
fs.writeFileSync(__dirname + '/read.txt', "what are you doing,and learning")    

fs.appendFileSync(__dirname + '/read.txt', "know as much you can");
fs.appendFileSync(__dirname + '/read.txt', "downloading the movies better than streaming online");

const data=fs.readFileSync(__dirname + '/read.txt')
console.log(data.toString())