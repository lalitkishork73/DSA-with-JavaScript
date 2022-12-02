/* 
Rotate an array to right side
Tags:	Array
Given an array of integers, write a program to rotate the array to the right side K times.

 

Input:

    10

    10 20 30 40 50 60 70 80 90 100

    3

    

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
Third line represents the value of K( Number of times to rotate the array to right side )
 

Output:

    80 90 100 10 20 30 40 50 60 70

 

Explanation: Output displays the array after rotating K=3 times to the right side.
*/

function solution(a, arr, k) {
    //Write your solution here
    let ar = [];
    // let c=0;
    if (k > a) {
        k = k % a;
    }
    for (let i = a - k; i < a; i++) {
        ar += arr[i] + " ";
    }
    for (let i = 0; i < a - k; i++) {
        ar += arr[i] + " ";
    }

    let arrr = ar.toString()
    // return arrr.replaceAll(',',' ');
    return arrr
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);
    var k = parseInt(readLine());
    var res = solution(a, arr, k);
    console.log(res);
}

