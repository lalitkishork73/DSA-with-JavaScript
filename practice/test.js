// Given an array nums of n integers, find two integers in nums such that the sum is closest to a given number, target.
// Return the difference between the sum of the two integers and the target.
// Example
// Given array nums = [-1, 2, 1, -4], and target = 4.
// The minimum difference is 1. (4 - (2 + 1) = 1).

let arr = [-1, 1, 1, 1, -4],
  x = 4;

function Triplets(arr, x){
  let closest= Number.MIN_VALUE;
  for(let i=0;i<arr.length-2;i++){
    for(let j=i+1; j < arr.length-1; j++){
      for(let k=j+1; k < arr.length; k++){
        if(Math.abs(x- closest)> Math.abs(x-(arr[i]+arr[j]+arr[k]))){
          closest = arr[i] + arr[j] + arr[k];
        }
      }
    }
  }
  return closest;
}

console.log(Triplets(arr, x));