//Array Balance
// Given an unsorted array A, check whether the array is balanced.

// Display 1 if the array is balanced otherwise 0.

//Input: 1  1  1  2  1

//Output:1

function solution(a, arr) {
  let sumLeft = 0;
  let sumRight = 0;
  let n = a / 2;
  //   console.log(n)
  if (a % 2 != 0) {
    n += 1 / 2;
    // console.log(n)
  }
  for (let i = 0; i < n; i++) {
    sumLeft += arr[i];
  }
  for (let i = a - 1; i >= n; i--) {
    sumRight += arr[i];
  }
  return sumLeft === sumRight ? 1 : 0;
}
console.log(solution(5, [1, 1, 1, 2, 1]));
