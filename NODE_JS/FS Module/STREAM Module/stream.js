const stream = require('stream');
const fs = require('fs');
const path = require('path');
const http = require('http');
const PORT = 3000;
const server = http.createServer();

/* server.on('request', (req, res) => {
    fs.readFile(__dirname + "/input.txt", (err, data) => {
        if (err) console.log(err);
        else {
            console.log(data);
            res.end(data.toString());
        }
    })
});

//old way to create server and fetch file from file system
 */

server.on('request', (req, res) => {

    const rStream = fs.createReadStream(__dirname + "/input.txt")

    rStream.on('data', (chunk) => {
        res.write(chunk);
    })

    rStream.on('end', () => {
        res.end();
    });

    rStream.on('error', (err) => {
        console.log(err);
        res.end(err.message);
    });

});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
