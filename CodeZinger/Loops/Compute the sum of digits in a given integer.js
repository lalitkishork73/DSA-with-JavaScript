/* 
Compute the sum of digits in a given integer
Tags:	Do While LoopFor LoopLoopWhile Loop
Given an integer N, Compute the sum of digits in N using a loop.

 

Input:
    12345

 

    where:

First line represents value of N.
 

Output:
    15

 

Assumptions:

N can be in the range 1 to 100000.
*/

function solution(a) {
    //Write your solution here
    let sum = 0;
    for (let i in a) {
        sum += a[i];
    }
    return sum;
}


function main() {
    var a = readLine().split('').map(Number);

    var res = solution(a);
    console.log(res);
}
