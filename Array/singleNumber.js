/* Single Number
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.



Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1

*/

switch (1) {
  case 1:
    console.log("Nousikhiya Method");
    SingleNumBrutF();
    break;
  case 2:
    console.log("Gyani Method");
    SingleNumXOR();
    break;
}

function SingleNumBrutF() {
  function solution(arr) {
    let l = arr.length;
    if (nums.length == 1) {
      return nums[0];
    }
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < l; j++) {
        if (arr[i] != arr[j]) {
          return arr[i];
        }
      }
    }
  }
  let arr = [6, 6, 3, 3, 1, 1, 2];
  let res = solution(arr);
  console.log(res);
}

function SingleNumXOR() {
  function solution(arr) {
    let uniq = arr,
      l = arr.length;
    if (l == 1) {
      return nums[0];
    }
    for (let i = 0; i < l; i++) {
      uniq ^= arr[i];
    }
    return uniq;
  }
  let arr = [6, 6, 3, 3, 1, 1, 2];
  let res = solution(arr);
  console.log(res);
  // only folt in this method is that,if there is multiple singleNumber it will add that number and give result.
}
