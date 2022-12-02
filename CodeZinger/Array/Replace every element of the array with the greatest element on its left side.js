/* 
Replace every element of the array with the greatest element on its left side
Tags:	Array
Given an array of integers, replace every element with the greatest element on its left side.
Note: Replace the first element with -1 as it has no element in its left.

 

Input:

    6

    4 5 2 1 7 6

    

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    -1 4 5 5 5 7

 

Explanation: Since 4 has no element in its left, so replace it by -1. For 5, 4 is the greatest element in its left. For 2, 5 is the greatest element in its left. For 1, 5 is the greatest element in its left. For 7, 5 is the greatest element in its left. For 6, 7 is the greatest element in its left.
*/

function solution(a, arr) {
    //Write your solution here
    let maxE = arr[0];
    for (let i = 0; i < a; i++) {
        if (maxE > arr[i]) {
            arr[i] = maxE;
        }
        else if (maxE <= arr[i]) {
            let temp = arr[i];
            arr[i] = maxE;
            maxE = temp;
        }
    }
    arr[0] = -1;
    return arr;
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);

    var res = solution(a, arr);
    console.log(...res);
}