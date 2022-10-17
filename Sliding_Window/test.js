// function quicksort(arr){
//     if(arr.length<=1){
//         return arr;
//     }

//     let pivot=arr[0];
//     let left=[];
//     let right=[];

//     for(let i=1;i<arr.length;i++){
//         pivot>arr[i]?left.push(arr[i]):right.push(arr[i]);
//     }

//     return quicksort(left).concat(pivot, quicksort(right));
// }


// let arr= [1, 22, 4, 51, 66, 28, 44, 14, 23, 56, 79];

// console.log(quicksort(arr));


// Given an array nums of n integers, find two integers in nums such that the sum is closest to a given number, target.
// Return the difference between the sum of the two integers and the target.
// Example
// Given array nums = [-1, 2, 1, -4], and target = 4.
// The minimum difference is 1. (4 - (2 + 1) = 1).

let nums = [-1, 2, 1, -4],target = 4;
let i=0;
let j=nums.length;
let min=0,smallestD=0;

while(i<j && i!=j){
    if(nums[i]+ nums[j]>target){
        j--;
    }
    else if(nums[i]+nums[j]<target){
        i++;
    }
    else{
        let res=nums[i]+nums[j];
        console.log(res)
    }
}
