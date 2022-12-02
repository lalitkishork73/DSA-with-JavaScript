/* Delete an array element at index 'K'
Tags:	Array
Given an array of integers, write a program to delete the element at index K.

 

Input:

    5

    10 20 30 40 50

    1

    

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
Third line represents the value of index K.
 

Output:

    10 30 40 50

 

Explanation: Output displays the elements of the array after deleting the element at index K=1. */


function solution(a, arr, k) {
    //Write your solution here
    for (let i = 0; i < a; i++) {
        if (i == k) {
            arr[i] = 0;
        }
    }

    return arr.filter(x => x != 0)
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);
    var k = parseInt(readLine());

    var res = solution(a, arr, k);
    console.log(...res);
}

