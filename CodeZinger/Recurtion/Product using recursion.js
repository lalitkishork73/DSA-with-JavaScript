/* 
Product using recursion
Tags:	FunctionRecursion
Given two integers N1 and N2, find the product between them using recursion. 

 

Write a function that accepts integers N1 and N2. The function should return product of N1 and N2 using recursion. 

 

Input:

    20

    15

 

    where:

First line represents number N1
Second line represents number N2
 

Output:

    300
*/

function solution(a, b) {
    //Write your solution here
    if (a < b) {
        return solution(b, a)
    }
    else if (b != 0) {
        return (a + solution(a, b - 1));
    }
    else {
        return 0;
    }
}


function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());

    var res = solution(a, b);
    console.log(res);
}
