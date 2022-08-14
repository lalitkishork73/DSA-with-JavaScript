let n = 5;
let string = "";

// External loop for rows
for (let i = n; i >= 1; i--) {
  // printing spaces
  for (let j = i; j <= n; j++) {
    string += "" ;
  }
  // printing star
  for (let k = 1; k <= 2 * i - 1; k++) {//9 7 5 3 1
    //2n-1  odd
    if (k === 1 || i == n || k === 2 * i - 1) {
      string += "*";
    } else {
      string += " ";
    }
  }
  string += "\n";
}
console.log(string);
