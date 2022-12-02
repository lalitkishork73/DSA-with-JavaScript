/* Swap value of two numbers
Tags:	Function
Given two integers N1 and N2, interchange values of the variable and print it. 


Input 
    4

    10

 

Output 
    10 4  */

function solution(a, b) {
    //Write your solution here
    a = a + b;
    b = a - b;
    a = a - b;

    console.log(a, b)
}


function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());

    solution(a, b);
}    