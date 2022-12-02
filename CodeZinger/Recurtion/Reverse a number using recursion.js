/* 
Reverse a number using recursion
Tags:	FunctionRecursion
Given a number N as input, write a program to reverse N using recursion.

 

Write a function that accepts an integer N. The function should return reverse of N using recursion. 

 

Input:

    10348

 

    where:

First line represents a value of N.
 

Output:
    84301
*/

function solution(arr, left, right) {
    //Write your solution here

    if (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        solution(arr, left + 1, right - 1);
    }
}


function main() {
    var a = readLine().split('');

    solution(a, 0, a.length - 1);
    let s = a.join('');
    console.log(s);
}