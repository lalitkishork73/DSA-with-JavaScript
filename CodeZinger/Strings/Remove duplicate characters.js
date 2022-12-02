/* 
Remove duplicate characters
Tags:	String
Given a string S, remove the repeated characters in the string

 

Input:

    Hello World

   

    where:

First line represents the input string
 

Output:

    Helo Wrd

 

Assumptions:

Length of the string S can be 0 to 10000
Character comparisons will be case-sensitive.

*/

function solution(a) {
    //Write your solution here
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] == a[j] && i != j) {
                a[j] = '';
            }
        }
    }
    let b = [...a]
    return b.join('')
}


function main() {
    let a = readLine().split("").map(String);

    var res = solution(a);
    console.log(res);
}
