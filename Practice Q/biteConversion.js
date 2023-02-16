let n = "1100011";
console.log(n.toString(10))
let binary = n.toString(2).padStart(32, '0');
console.log(binary);


// replace each 0 with 1 and each 1 with 0
let flipped = '';
for (let i = 0; i < binary.length; i++) {
    flipped += binary[i] === '0' ? '1' : '0';
}

// convert the binary string to an unsigned integer
console.log(parseInt(flipped,2)>>>0);
