let arr = [1, 2, 3, 9, 1, 4, 5, 8, 3, 5, 1],
  k = 3;

let i = 0,
  sum = 0,
  maxSum = 0,
  j = arr.length;

while (i < k) {
  sum += arr[i];
  i++;
}
i = k;

while (i < j) {
  sum += arr[i] - arr[i - k];
  if (sum > maxSum) {
    maxSum = sum;
  }
  i++;
}

console.log(maxSum);
