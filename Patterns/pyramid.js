// 1. Print pyramid star pattern

function printPyramid(n) {
  var str = "";
  // outer loop for rows
  for (var i = 1; i <= n; i++) {
    // printing spaces
    for (var k = 1; k <= n - i; k++) {
      str += " ";
    }
    // printing stars
    for (var j = 1; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
    str = "";
  }
}
printPyramid(6);

// ------------------------------------------------------------------------------ //

// 2. Inverse Pyramid Star Pattern

function inversePyramid(n) {
  let str = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += " ";
    }
    for (let k = 1; k <= n - i; k++) {
      str += "* ";
    }
    console.log(str);
    str = "";
  }
}
inversePyramid(5);

// ------------------------------------------------------------------------------ //

// 3. Right Triangle Star Pattern

function rightTriangle(n) {
  var str = "";
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}
rightTriangle(5);

// ------------------------------------------------------------------------------ //

// 4. Left Triangle Star Pattern

function leftTriangle(n) {
  var str = "";
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n - i; j++) {
      str += " ";
    }
    for (let k = 0; k < i; k++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}
leftTriangle(10);
