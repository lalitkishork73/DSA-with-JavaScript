let nums = [1, 0, -1, 0, -2, 2],
  target = 1;

function fourSomeBrut(arr, t) {
  let subarr = [];
  for (let i = 0; i < arr.length - 3; i++) {
    for (let j = i + 1; j < arr.length - 2; j++) {
      for (let k = j + 1; k < arr.length - 1; k++) {
        for (let l = k + 1; l < arr.length; l++) {
          if (arr[i] + arr[j] + arr[k] + arr[l] == t) {
            subarr.push([arr[i], arr[j], arr[k], arr[l]]);
          }
        }
      }
    }
  }
  return subarr;
}
// console.log(fourSomeBrut(nums, target));

function fourSome(arr, t) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  let res = [];
  for (let i = 0; i < arr.length - 3; i++) {
    if (arr[i] == arr[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < arr.length - 2; j++) {
      if (arr[j] == arr[j - 1]) {
        continue;
      }
      let tSum = t - (arr[i] - arr[j]);

      let ptr1 = j + 1,
        ptr2 = arr.length - 1;
      while (ptr1 < ptr2) {
        if (arr[ptr1] + arr[ptr2] == tSum) {
          res.push([arr[i], arr[j], arr[ptr1++], arr[ptr2--]]);
        }
        if (arr[ptr1] + arr[ptr2] < tSum) {
          ptr1++;
        } else {
          ptr2--;
        }
      }
    }
  }
  return res;
}
console.log(fourSome(nums, target));
