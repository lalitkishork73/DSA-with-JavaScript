const fs = require('fs');

const data = {
    name: "namor",
    age: 27,
    address: {
        city: "southDhaba",
        country: "US",
        details: {
            phone: 955555,
            pincode: 12335,
            constant: "jira",
            list: ["Red", "pino", "jipo"]
        }
    }
}

const data1 = JSON.stringify(data);
console.log(data1)

const data2 = JSON.parse(data1);

console.log(data2.name, data2.age)

fs.writeFile(__dirname + "/JSON" + "data.json", data1, (err) => {
    if (err) throw err;
    else console.log("done")
})

fs.readFile(__dirname + "/JSON" + "data.json", (err, data) => {
    if (err) throw err
    else {
        let dat = JSON.parse(data)
        console.log(dat);
        console.log(dat.name);
        console.log(dat.age);
        console.log(dat.address.city);
        console.log(dat.address.details.list[1]);
    }

})
