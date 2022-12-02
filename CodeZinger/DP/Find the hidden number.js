/* 
Find the hidden number
Tags:	ArrayDynamic Programming
Given an array of integers, find another integer such that, if all the elements of the array are subtracted individually from that number, then the sum of all the differences should add to 0. If any such integer exists, print its value otherwise print '-1'.

 

Input:

    3

    1 2 3

 

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    2

 

Explanation: Substracting all the elements of arrays from 2, The sum of difference is: 1 + 0 + (-1) = 0.

 

Assumptions:

Array can be of size 1 to 1000.
Array elements can be in the range -1000 to 1000.
*/

function solution(a, n) {
    //Write your solution here
    let sum = 0;
    for (i = 0; i < n; i++) {
        sum += a[i]
    }
    let x = parseInt(sum / n);
    if (x * n == sum) {
        return x;
    }
    else {
        return "-1";
    }

}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);

    var res = solution(arr, a);
    console.log(res);
}