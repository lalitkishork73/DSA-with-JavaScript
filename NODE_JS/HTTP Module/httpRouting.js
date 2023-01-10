const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { "Content-type": "text/html" });
        res.end("<h1>Hello World</h1>");
    }
    if (req.url == '/home') {
        res.writeHead(200, { "Content-type": "text/html" });
        res.end("<h1 style={{color:blue}}>The Home data</h1>");
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1 style={color:red;}>invalid URL</h1>");
    }
})

server.listen(3000, "127.0.0.1", () => {
    console.log("Server listening on port 3000");
})