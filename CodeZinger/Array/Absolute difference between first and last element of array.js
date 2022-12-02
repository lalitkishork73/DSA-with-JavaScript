/* 
Absolute difference between first and last element of array
Tags:	Array
Given an array of integers, find the absolute difference between the first and last element of the array.

 

Input:

    4

    1 2 3 4

    

    where:

First line represents the number of elements in the array.
Second line represents the elements of the array.
 

Output:

    3
     */


function solution(a, arr) {
    //Write your solution here
    let arr1
    for (let i = 0; i < a; i++) {
        arr1 = arr[0] - arr[a - 1]
    }
    return Math.abs(arr1);
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);

    var res = solution(a, arr);
    console.log(res);
}

