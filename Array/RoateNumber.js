let rotate = function (nums, k) {
  let arr1 = [];
  if (k > nums.length) {
    k = k % nums.length;
  }
  for (let i = nums.length - k; i < nums.length; i++) {
    arr1.push(nums[i]);
  }
  for (let i = 0; i < nums.length - k; i++) {
    arr1.push(nums[i]);
  }

  return arr1;
};

let arr = [
  1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 71, 2, 3, 4, 5, 6, 71, 2, 3, 4, 5, 6,
  7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1,
];
let k = 15;
let res = rotate(arr, k);
console.log(res);
