/* 
1's complement
Tags:	Binary NumberBitwise-Operator
Given an integer N as input, find 1's complement of N.
 
Input:
    5

    where:

First line represents the value of N.
 
Output:

    2


Assumption:

Value of N can be in the range 0 to 10000.

*/

function solution(a) {
    //Write your solution here
    let b = (Math.floor(Math.log(a) / Math.log(2))) + 1;
    return ((1 << b) - 1) ^ a;
}


function main() {
    var a = parseInt(readLine());

    var res = solution(a);
    console.log(res);
}
