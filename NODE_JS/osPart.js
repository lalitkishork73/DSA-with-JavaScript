const os = require('os');

let uptime = os.uptime(); 
console.log(os.uptime);
/* setInterval(() => {
    let uptime = os.uptime() / (60 * 60);
    let data = uptime.toString();
    console.log(data.slice(0,5) + " Hours");
}, 1000)
 */

/* console.log(os.arch());
console.log(os.homedir());
console.log(os.freemem());
console.log(os.version());
console.log(os.cpus()[3].speed);
console.log(os.hostname()); */
// console.log(os.networkInterfaces());