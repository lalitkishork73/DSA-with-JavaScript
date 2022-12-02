/* 
Even numbers using recursion
type: Function Recursion

Given two integers N1 and N2, find the even numbers between N1 and N2 using recursion. 

 

Write a function that accepts integers N1 and N2. The function should display even numbers from N1 to N2 using recursion. 

 

Input:

    16

    25

 

    where:

First line represents a value of N1
Second line represents a value of N2
 

Output:

    16 18 20 22 24
*/


function solution(a, b) {
    //Write your solution here
    let res = [];
    if (a > b) return;
    if (a % 2 == 0) res.push(a);
    return res.concat(solution(a + 1, b));

}


function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());
    let res = solution(a, b);
    res.pop();
    console.log(...res)
}
