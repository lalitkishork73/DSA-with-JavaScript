// 1. Hourglass Star Pattern

function hourGlass(n) {
  let timeGlass = "";
  // Reversed pyramid pattern
  for (let i = 0; i < n; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
      timeGlass += " ";
    }
    // printing star
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
      timeGlass += "*";
    }
    timeGlass += "\n";
  }
  // pyramid pattern
  for (let i = 2; i <= n; i++) {
    // printing spaces
    for (let j = n; j > i; j--) {
      timeGlass += " ";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
      timeGlass += "*";
    }
    timeGlass += "\n";
  }
  console.log(timeGlass);
}
hourGlass(5);

// 2. Diamond Pattern
function diamondPattern(n) {
  let pattern = "";
  // upside pyramid
  for (let i = 0; i <= n; i++) {
    // printing spaces
    for (let j = n; j > i; j--) {
      pattern += " ";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  // downside pyramid
  for (let i = 1; i <= n - 1; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
      pattern += " ";
    }
    // printing stars
    for (let k = 2 * (n - i) - 1; k > 0; k--) {
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
diamondPattern(5);

// --------------------------------------------------------------- //

// 3. Hollow Diamond Pattern
function hollowDiamond(n) {
  let pattern = "";
  // upper half diamond
  for (let i = 0; i <= n; i++) {
    // printing spaces
    for (let j = n; j > i; j--) {
      pattern += " ";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
      if (k === 0 || k === 2 * i - 2) {
        pattern += "*";
      } else {
        pattern += " ";
      }
    }
    pattern += "\n";
  }
  // downside diamond
  for (let i = 1; i <= n - 1; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
      pattern += " ";
    }
    // printing star
    for (let k = 2 * (n - i) - 1; k >= 1; k--) {
      if (k === 1 || k === 2 * (n - i) - 1) {
        pattern += "*";
      } else {
        pattern += " ";
      }
    }
    pattern += "\n";
  }
  console.log(pattern);
}
hollowDiamond(5);
