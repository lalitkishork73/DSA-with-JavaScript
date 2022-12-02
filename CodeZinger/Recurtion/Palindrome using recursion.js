/* 
Palindrome using recursion
Tags:	FunctionRecursion
Given a decimal number N as input, find whether N is Palindrome or not, using recursion.

 

Write a function that accepts an integer N. The function should return 1 if N is palindrome else return 0 using recursion. 

 

Input:

    404

 

    where:

First line represents number N
 

Output:
    1 


*/

function solution(a) {
    //Write your solution here
    if (a.length == 1 || a.length == 0) {
        return 1;
    }
    if (a[0] == a[a.length - 1]) {
        return solution(a.slice(-1, 1));
    }
    return 0;
}


function main() {
    var a = readLine();

    var res = solution(a);
    console.log(res);
}