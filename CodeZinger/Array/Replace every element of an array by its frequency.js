/* 
Replace every element of an array by its frequency
Tags:	Array
Given an array of integers, replace every element by its frequency in the array.

 

Input:

    6

    1 2 5 2 2 5

    

    where

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    1 3 2 3 3 2

    

Explanation: In the array, the element 1 has occurred only once so it's frequency is 1. Element 2 has occurred thrice so its frequency is 3, and element 5 has occurred twice so its frequency is 2.

 

Assumptions:

Array element can be in the range -1000 to 1000.

*/

function solution(a, arr) {
    //Write your solution here
    let mp = new Map();
    for (let i = 0; i < a; i++) {
        if (mp.get(arr[i]) == null) {
            mp.set(arr[i], 1);
        }
        else {
            mp.set(arr[i], (mp.get(arr[i]) + 1))
        }
    }
    for (let i = 0; i < a; i++) {
        if (mp.get(arr[i]) != null) {
            arr[i] = mp.get(arr[i]);
        }
    }
    return arr;
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);
    var res = solution(a, arr);
    console.log(...res);
}

