/* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

Follow-up: Could you solve the problem in linear time and in O(1) space?  it will give you complex tasks*/

switch (2) {
  case 1:
    MajoElem();
    break;
  case 2:
    MajoElemMoorAlgo();
    break;
}

//Brute Forece Method time Complexity O(n^2);

function MajoElem() {
  console.log("Nousikhiya method");
  function solution(arr) {
    let l = arr.length,
      n = parseInt(l / 2),
      maxCount = 0,
      index = -1;

    for (let i = 0; i < l; i++) {
      let count = 0;
      for (let j = 0; j < l; j++) {
        if (arr[i] == arr[j]) {
          count++;
        }
        if (count > maxCount) {
          maxCount = count;
          index = i;
        }
      }
    }

    if (maxCount > n) {
      return arr[index];
    } else {
      return "bhagg sale nahi mila";
    }
  }

  let arr = [6, 5, 5, 6, 6];
  res = solution(arr);
  console.log(res);
}

// Moore's Voting Algorithem Method
function MajoElemMoorAlgo() {
  console.log("MoorsAlgo Method");
  function MoorsAlgo(arr) {
    let ansIndex = 0, //1
      count = 1,
      l = arr.length;
    for (let i = 0; i < l; i++) {
      if (arr[i] == arr[ansIndex]) {
        count++; //1
      } else {
        count--; //0
      }

      if (count == 0) {
        ansIndex = i;
        count = 1;
      }
    }
    return arr[ansIndex];
  }

  function isMijority(arr, candidate) {
    let count = 0,
      l = arr.length;
    for (i = 0; i < l; i++) {
      if (arr[i] == candidate) {
        count++;
      }
    }
    if (count > parseInt(l / 2)) {
      return true;
    } else {
      return false;
    }
  }
  let arr = [6,6,6,6, 5, 5,5];
  let res = MoorsAlgo(arr);

  if (isMijority(arr, res)) console.log(res);
  else console.log("Bik gayi hai gormint");
}

