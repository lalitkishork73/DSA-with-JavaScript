let arr = [1, 2, 3],
  k = 3;

function maxSumSubArrBrut(arr, k) {
  let maxSum = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    let sum = 0;
    for (j = i; j < k + i; j++) {
      sum += arr[j];
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}

console.log(maxSumSubArrBrut(arr, k));
