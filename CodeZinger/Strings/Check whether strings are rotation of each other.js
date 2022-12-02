/* 
Check whether strings are rotation of each other
Tags:	String
Given two strings S1 & S2, write a program to say whether S2 is a rotation of S1.

e.g. string S2=CDAB is a rotation of string S1=ABCD, whereas string S2=ACBD is not a rotation of string S1=ABCD

Input:
    ABCD
    CDAB

    where, 

First line represents string S1. 
Second line represents string S2. 


Output:
    Yes 

Input:
    ABCD
    CBDA

Output:
    No

Assumptions: 

Strings S1 and S2 contain only upper case characters.
*/


function solution(a, s2) {
    //Write your solution here
    let b = []
    for (let i = 2; i < a.length; i++) {
        b += a[i];
    }
    for (let i = 0; i < 2; i++) {
        b += a[i];
    }

    if (b == s2) {
        return "Yes"
    }
    return "No"
}


function main() {
    var a = readLine().split('').map(String);
    var s2 = readLine();

    var res = solution(a, s2);
    console.log(res);
}
