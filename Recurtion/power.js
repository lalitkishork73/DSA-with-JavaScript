function pow(n, r) {
  if (r == 0) {
    return n;
  }
  if (r == 1) {
    return n;
  }
  return pow(n, r - 1) * n;
}

let n = 3,
  r = 3;
let val = pow(n, r);
console.log(val);
