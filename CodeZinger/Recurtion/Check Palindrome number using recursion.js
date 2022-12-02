/* 
Check Palindrome number using recursion
Tags:	FunctionRecursion
Given an integer N, find whether N is a Palindrome using recursion. 

 

Write a function that accepts an integer N. The function should return 1 if N is a palindrome else 0. 

 

Input:
    121 

 

Output:
    1

 

The reverse of 121 is also 121.

 

Assume that, 

N is an integer within the range [0 to 1000000000]. 
*/

function solution(a) {
    //Write your solution here
    const s = a.toString();
    if (s.length === 1) {
        return 1;
    }
    let start = s[0], end = s[s.length - 1];
    if (start != end) {
        return 0;
    }
    if (s.length === 2) {
        return 1;
    }
    let subStr = s.substring(1, s.length - 1);
    return solution(subStr);
}


function main() {
    var a = parseInt(readLine());

    var res = solution(a);
    console.log(res);
}