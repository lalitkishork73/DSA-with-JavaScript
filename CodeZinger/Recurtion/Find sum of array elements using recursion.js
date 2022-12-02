/* 

Tags:	RecursionArrayMathematics
Given an array, find the sum of array elements using recursion. 

 

Write a function that accepts an array A and size of an array N. The function should return the sum of the array elements. 

 

Input 
    5 
    1 2 3 4 5 

 

    Where, 

First line of input represents the size of an array. 
Second line repsents an array elements. 
 

Output 

    15 

 

Sum of array elements = 1+2+3+4+5 = 15. 

 

Assume that, 

N is an integer within the range [1 to 10000]. 
Array elements are integers within the range [-2147483648 to 2147483647]. 

*/

function solution(a) {
    //Write your solution here
    let k = 1, nums, totelSum = 0;
    while (k > 0) {
        nums = readLine()
        if (nums == undefined) {
            break;
        }
        nums = nums.split(/[ \t]/).map(Number);
        let t = nums.length;
        totelSum += sum(nums, t - 1);
    }
    return totelSum;
}

function sum(nums, n) {
    if (n == 0) return nums[0];
    return nums[n] + sum(nums, n - 1)
}

function main() {
    var a = parseInt(readLine());
    var res = solution(a);
    console.log(res);
}