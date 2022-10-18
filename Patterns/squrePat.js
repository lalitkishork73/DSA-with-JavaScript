// 1. Square Star Pattern
function squarePattern(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      str += "* ";
    }
    str += "\n";
  }
  console.log(str);
}
squarePattern(10);

// --------------------------------------------------------------- //

// 2. Hollow Square Pattern
function hollowSquarePattern(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1) {
        str += "*";
      } else if (j === 0 || j === n - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  console.log(str);
}
hollowSquarePattern(5);

// --------------------------------------------------------------- //

// 3. Hollow Triangle Pattern
function hollowTriangle(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (i === n) {
        str += "*";
      } else if (j == 0 || j == i - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  console.log(str);
}
hollowTriangle(5);
