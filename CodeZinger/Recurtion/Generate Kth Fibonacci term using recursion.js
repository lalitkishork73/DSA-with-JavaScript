/* 
Generate Kth Fibonacci term using recursion
Tags:	FunctionRecursion
Given an integer K, find the Kth Fibonacci number using recursion. 

 

Write a function that accepts an integer K. The function should return Kth Fibonacci number using recursion. 

 

Input:

    10

 

    where:

First line represents a value of K
 

Output:
    55
*/

function solution(a) {
    //Write your solution here
    if (a == 0) {
        return 0;
    }
    if (a == 1) {
        return 1;
    }
    return solution(a - 2) + solution(a - 1);
}


function main() {
    var a = parseInt(readLine());

    var res = solution(a);
    console.log(res);
}
