const fs = require('fs');
const path = require('path');
const zlib = require("node:zlib");
const gzip = zlib.createGzip();

const rStream = fs.createReadStream(path.join(__dirname, '/file1.txt'));

const wStream = fs.createWriteStream(path.join(__dirname, '/file2.txt'));

/* rStream.on("data", (chunk) => {
    console.log(chunk);
    wStream.write(chunk);
}) */
rStream.pipe(gzip).pipe(fs.WriteStream(__dirname + '/file2.txt.gz'))
rStream.pipe(wStream);