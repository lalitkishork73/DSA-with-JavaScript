/* 
Read, append and print a string
Tags:	String
Read two strings from the console, append it and print the final appended string. 

Input
    Java 
    Developer 

Output
    JavaDeveloper 

 

Assume that: 

String length is within the range [1 to 10000]

*/

function solution(a, b) {
    //Write your solution here
    return a + b;
}


function main() {
    var a = readLine();
    var b = readLine();

    var res = solution(a, b);
    console.log(res);
}

