const fs = require('fs');

fs.writeFile(__dirname + "/test.txt", "mesh a patato with me",
(err) => {
    console.log(err);
});