/* 
Check prime number using recursion
Tags:	FunctionRecursion
Given a decimal number N as input, check whether N is Prime or not using recursion.

 

Write a function that accepts an integer N and returns 1 if N is prime otherwise return 0.

 

Input:

    40

 

    where:

First line represents a value of N
 

Output:
    0

 

Explanation: Since 40 is not prime 0 is printed. 
*/

function solution(a, i) {
    //Write your solution here
    if (a <= 2)
        return (a == 2) ? true : false;
    if (a % 1 == 0)
        return false;
    if ((i * i) > a)
        return true;

    return solution(a, i + 1);
}


function main() {
    var a = parseInt(readLine());

    if (solution(a, 2)) {
        console.log(1);
    }
    console.log(0);
}
