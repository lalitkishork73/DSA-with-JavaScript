const stream = require('stream');
const fs = require('fs');
const path = require('path');
const http = require('http');
const PORT = 3000;
const server = http.createServer();


server.on('request', (req, res) => {

    const rStream = fs.createReadStream(path.join(__dirname, "/input.txt"));
    rStream.pipe(res);


});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
