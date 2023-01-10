const fs = require('fs');

fs.writeFile(__dirname + "/test.txt", "mesh a patato with me",
    (err) => {
        if (err) throw err;
    });

fs.readFile(__dirname + "/test.txt", 'utf8', (err, data) => {
    if (err) throw err;
    else console.log(data);
})
fs.readFile(__dirname + "/test.txt", (err, data) => {
    if (err) throw err;
    else console.log(data.toString());
})
console.log("Time and space both are related on curve")

// fs.mkdir(__dirname + "/test", (err) => {
//     if (err) throw err;
//     console.log("chal gaya :)")
// });

fs.writeFile(__dirname + "/test" + "/test.txt", "when you see me run away", (err) => {
    if (err) throw err;
    else console.log("created");
})
fs.appendFile(__dirname + "/test" + "/test.txt", " turring with life of the day", (err) => {
    if (err) throw err;
    else console.log("created");
})
fs.readFile(__dirname + "/test" + "/test.txt", "utf8", (err, data) => {
    if (err) throw err;
    else console.log(`successfully read your data is :=> ${data}`);
    // console.log(data)
})

fs.rename(__dirname + "/test" + "/test.txt", __dirname + "/test" + "/best.txt", (err) => {
    if (err) throw err;
    else console.log(`successfully converted name of your file`);
    // console.log(data)
})

