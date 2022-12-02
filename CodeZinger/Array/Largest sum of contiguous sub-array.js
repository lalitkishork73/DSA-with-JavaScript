/* 
Largest sum of contiguous sub-array
Tags:	Array
Given an array of integers A, find the largest sum of contiguous elements in sub-array of an array.

 

Input 
    5 
    -20 -12 42 -10 25

 

    Where, 

The first line represents the size of an array. 
The second line represents array elements.
 

Output 
    57 

 

Here largest sub-array sum = 42 + (-10) + 25 = 57.


*/

function solution(a, arr) {
    //Write your solution here
    if (arr.length == 0) return 0;
    let result = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        result = Math.max(sum, result);
        sum = sum < 0 ? 0 : sum;
    }
    return result;
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);

    var res = solution(a, arr);
    console.log(res);
}
