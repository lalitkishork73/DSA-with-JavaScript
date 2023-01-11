const fs = require('fs');
const path = require('path');

const rStream = fs.createReadStream(path.join(__dirname, '/file1.txt'));

const wStream = fs.createWriteStream(path.join(__dirname, '/file2.txt'));

rStream.on("data",(chunk)=>{
    console.log(chunk);
    wStream.write(chunk);
})