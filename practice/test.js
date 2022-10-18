// Given an array nums of n integers, find two integers in nums such that the sum is closest to a given number, target.
// Return the difference between the sum of the two integers and the target.
// Example
// Given array nums = [-1, 2, 1, -4], and target = 4.
// The minimum difference is 1. (4 - (2 + 1) = 1).

let arr = [-1, 1, 1, 1, -4],
  x = 4;

function Triplets(arr, x) {
  let closestSum = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        // Update the closestSum
        if (Math.abs(x - closestSum) > Math.abs(x - (arr[i] + arr[j] + arr[k])))
          closestSum = arr[i] + arr[j] + arr[k];
      }
    }
  }
  return closestSum;
}

// Return the closest sum found

console.log(Triplets(arr, x));

// this is brut force solution the time complexity will be O(N^3) and space will O(1);
// so for this we are going to use Two Pinter it reduce N^3 => N^2

function twoPont(arr, x) {

    arr.sort((a, b) => a - b);
    let closestSum = 1000000000;

    // Fix the smallest number among
    // the three integers
    for (let i = 0; i < arr.length - 2; i++) {
      // Two pointers initially pointing at
      // the last and the element
      // next to the fixed element
      let ptr1 = i + 1,
        ptr2 = arr.length - 1;

      // While there could be more pairs to check
      while (ptr1 < ptr2) {
        // Calculate the sum of the current triplet
        let sum = arr[i] + arr[ptr1] + arr[ptr2];

        // If the sum is more closer than
        // the current closest sum
        if (Math.abs(1 * x - sum) < Math.abs(1 * x - closestSum)) {
          closestSum = sum;
        }

        // If sum is greater than x then decrement
        // the second pointer to get a smaller sum
        if (sum > x) {
          ptr2--;
        }

        // Else increment the first pointer
        // to get a larger sum
        else {
          ptr1++;
        }
      }
    }
    return closestSum;
}
console.log(twoPont(arr, x));
