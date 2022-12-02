/* 
Odd numbers using recursion
Tags:	FunctionRecursion
Given two integers N1 and N2, find the odd numbers between N1 to N2 using recursion. 

 

Write a function that accepts integers N1 and N2. The function should display odd numbers from N1 to N2 using recursion. 

 

Input:

    16

    25

 

    where:

First line represents a value of N1
Second line represents number N2
 

Output:

    17 19 21 23 25


*/

function solution(a, b) {
    //Write your solution here
    let arr = ''
    if (b < a) {
        return;
    }
    if (b % 2 == 1) {
        solution(a, b - 2);
    }
    else {
        solution(a, b - 1);
    }
    if (b % 2 == 1) {
        process.stdout.write(`${b} `)
    }
}


function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());


    var res = solution(a, b);

}

