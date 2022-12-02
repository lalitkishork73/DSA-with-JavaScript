/* 
Array Balance
Tags:	ArrayAlgorithm
Given an unsorted array A, check whether the array is balanced. 

 

Display 1 if the array is balanced otherwise 0. 

 

Input
    5 
    1  1  1  2  1 

 

    Where, 

First line represents the size of an array. 
Second line represents array elements. 
 
Output
    1 

 

Here for the given array, the sum of first three elements 1 + 1 + 1 is 3 and last two elements 2 + 1 is 3. Hence the array is balanced. 

*/

function solution(a, arr) {
    //Write your solution here

    let sumL = 0;
    let sumF = 0;
    let n = a / 2;
    if (a % 2 != 0) {
        n += 1 / 2;
    }
    for (let i = 0; i < n; i++) {
        sumL += arr[i];
    }
    for (let i = a - 1; i >= n; i--) {
        sumF += arr[i]
    }

    return sumL == sumF ? 1 : 0;
}


function main() {
    var a = parseInt(readLine());
    var b = readLine().split(' ').map(Number);

    var res = solution(a, b);
    console.log(res);
}
