let arr = [1,3,-1,-3,5,3,6,7], k = 3;

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

function maxSumSubArr(arr, k) {
  let i = 0,l=arr.length;
  
  while (i < k) {
    
    i++;

  }
}

console.log(maxSumSubArr(arr, k));
