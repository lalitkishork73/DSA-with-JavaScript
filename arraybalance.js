function solution(a, arr) {
  let sumL = 0;
  let sumF = 0;
  let n = a / 2;
  if (a % 2 != 0) {
    n += 1 / 2;
  }
  for (let i = 0; i < n; i++) {
    sumL += arr[i];
  }
  for (let i = a - 1; i >= n; i--) sumF += arr[i];

  return sumL == sumF ? 1 : 0;
}

let a = 5;
let b = [1, 0, 2, 2, 1];

let res = solution(a, b);
console.log(res);
//4 3
