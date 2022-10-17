let n = 5,
  str = "";
for (let i = 0; i < n; i++) {
  for (let c = 0; c < n - i; c++) str += "";

  for (let c = 0; c < 2 * i - 1; c++) str += "*";

  str += "\n";
}

console.log(str);
