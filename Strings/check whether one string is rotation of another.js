const http = require("node:http");

http.get({
    hostname: "localhost",
    port: 3000,
    path: "/",
    agent: false

}, (res) => {
    console.log("chal raha he");
    res.send({ msg: "chal raha he" })
}).on("socket", (socket) => {
    socket.emit('agentRemove')
})