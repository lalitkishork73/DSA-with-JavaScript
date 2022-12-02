/* 
Convert String to number
Tags:	String
Given a string S, write a program to convert the given string into an integer and print the integer.

 

Input:

    123

   

    where:

First line represents the input string
 

Output:

    123

 

Assumptions:

    Length of the string S can be 0 to 10
*/

function solution(a) {
    //Write your solution here
    return parseInt(a);
}


function main() {
    var a = readLine();

    var res = solution(a);
    console.log(res);
}