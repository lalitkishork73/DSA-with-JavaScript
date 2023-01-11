const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // res.writeHead(200, {'Content-Type': 'application/json'});
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // const html=fs.readFileSync(__dirname + '/index.html');
    // res.end(html);

    // fs.createReadStream(__dirname + '/index.html').pipe(res)
    let name = "lalit";
    let html = fs.readFileSync(__dirname + '/index.html', 'utf8')
    html = html.replace("{{name}}", name);
    res.end(html);

})

server.listen(3000, () => {
    console.log("you are connected succfully!");
})