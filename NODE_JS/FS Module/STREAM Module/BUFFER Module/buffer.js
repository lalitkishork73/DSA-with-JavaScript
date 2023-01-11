const buffer = new Buffer.from("lalit");

console.log("lalit".charCodeAt(0));
console.log("lalit".charCodeAt(1));
console.log("lalit".charCodeAt(2));
console.log("lalit".charCodeAt(3));
console.log("lalit".charCodeAt(4));

console.log(buffer);// conctains Hex code of ASCI number of the charecters
console.log(buffer.toString());
console.log(buffer.toJSON());

buffer.write("codeEvolves");
console.log(buffer)
console.log(buffer.toString());
console.log(buffer.toJSON());