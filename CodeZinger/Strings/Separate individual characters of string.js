/* 
Separate individual characters of string
Tags:	String
Given a string S, separate the individual characters from the string.

 

Input:

    Hello

   

    where:

First line represents the input string S
 

Output:

    H e l l o

 

Assumptions:

Length of the string S can be 0 to 10000
*/

function solution(a) {
    //Write your solution here
    return a;
}


function main() {
    var a = readLine().split('');

    var res = solution(a);
    console.log(...res);
}