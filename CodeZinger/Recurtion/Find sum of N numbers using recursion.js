/* 
Find sum of N numbers using recursion
Tags:	Recursion
Given an integer N, calculate the sum of 1 to N integers using recursion.

 

Write a function:
    def solution(N):

 

that accepts an integer N, the function should return the sum of 1 to N integers.

 

Input
    5

 

Output
    15

here N=5 then sum= 1+2+3+4+5=15.
    

Assume that, 

N is an integer within the range [1 to 10000].

*/

function solution(a) {
    //Write your solution here

    if (a == 1) {
        return 1;
    }
    return a + solution(a - 1);
}


function main() {
    var a = parseInt(readLine());

    var res = solution(a);
    console.log(res);
}
