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
    let ptr1 = i + 1,
      ptr2 = arr.length - 2,
      ptr3 = arr.length - 1;
    if (arr[i] == arr[i - 1] || arr[ptr3] == arr[ptr3 + 1]) {
      continue;
    }
    while (ptr1 < ptr3) {
      sum = arr[i] + arr[ptr1] + arr[ptr2] + arr[ptr3];
      if (sum == t) {
        res.push([arr[i], arr[ptr1++], arr[ptr2--], arr[ptr3--]]);
      }
      if (sum > t) {
        ptr2--;
      } else {
        ptr1++;
      }
    }
    ptr3--;
  }
  return res;
}
console.log(fourSome(nums, target));
