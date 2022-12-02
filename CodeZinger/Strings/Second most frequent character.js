/* 
Second most frequent character
Tags:	String
Given a string S, Find the second most frequent character in S.

 

Input:

    aaabbcccc

 

    where:

First line represents input string S
 

Output:

    a
*/

let NO_OF_CHARS = 256;
function solution(str) {
    //Write your solution here
    let count = new Array(NO_OF_CHARS);
    count.fill(0);
    for (let i = 0; i < str.length; i++) {
        (count[str[i].charCodeAt()])++;
    }
    let first = 0, second = 0;
    for (let i = 0; i < NO_OF_CHARS; i++) {
        if (count[i] > count[first]) {
            second = first;
            first = i;
        }

        else if (count[i] > count[second] && count[i] != count[first])
            second = i;

    }
    return String.fromCharCode(second)
}


function main() {
    var a = readLine();

    var res = solution(a);
    console.log(res);
}