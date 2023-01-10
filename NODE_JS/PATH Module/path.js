
const path = require('path');

console.log(path.basename(__filename, '.js'), path.basename(__dirname));
console.log(path.extname(__filename))
console.log(path.join(__dirname, 'lalit', '/tamatar/jamana', 'out'))
console.log(path.join(__dirname, 'lalit', '/tamatar/jamana', '..'))
console.log(path.join(__dirname, 'lalit', '/tamatar/jamana', '..', '..'))
// console.log(path.normalize(''))
console.log(path.parse(__filename))
console.log(path.parse(__filename).name)
console.log(path.isAbsolute('Array'))
console.log(path.isAbsolute('/Array'))




