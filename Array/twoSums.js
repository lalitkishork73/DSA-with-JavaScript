/*  Two Sum
{Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.


Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
}
 */

switch (1) {
  case 1:
    console.log("Nousikhiya Method");
    TwoSumsBrutF();
    break;
}

function TwoSumsBrutF() {
  // function solution(nums, target) {
  //   let arr = [],
  //     l = nums.length;
  //   for (let i = 0; i < l; i++) {
  //     for (j = i + 1; j < l; j++) {
  //       if (nums[i] + nums[j] == target) {
  //         arr.push(i);
  //         arr.push(j);
  //       }
  //     }
  //   }
  //   return arr;
  // }

  // let arr = [1, 5, 6, 7, 98, 1, 26, 4];
  // let target = 12;
  // let res = solution(arr, target);
  // console.log(res);

  // function fib(n) {
  //   if (n == 0 || n == 101) {
  //     return n;
  //   }
  //   console.log(n);
  //   return fib(n + 1);
  // }

  // fib(10);

  //   var plusOne = function (digits) {
  //   let str = "";
  //   for (let i = 0; i < digits.length; i++) {
  //     str += digits[i];
  //   }
  //   let t = parseInt(str) + 1;

  //   return t.toString().split("").map(Number);
  // };

  // let arr = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
  // let res = plusOne(arr);
  // console.log(res);

  var plusOne = function (digits) {
    let hasCarryOver = true,
      indx = digits.length - 1;

    for (let index = indx; index >= 0; index--) {
      if (!hasCarryOver) return digits;

      const incrementedNumber = digits[index] + 1;

      digits[index] = incrementedNumber % 10;
      hasCarryOver = incrementedNumber > 9;
    }

    return hasCarryOver ? [1, ...digits] : digits;
  };

  let arr = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
  let res = plusOne(arr);
  console.log(res);

  // function plusOne(arr) {
  //   let index = arr.length - 1;
  //   return arr[index] + 1;
  // }

  //   let arr = [1, 2, 3];
  //   let res = plusOne(arr);
  //   console.log(res);
}
