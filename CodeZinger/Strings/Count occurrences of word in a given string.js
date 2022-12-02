/* 
Count occurrences of word in a given string
Given a string S and a word W, count the number of times the given word appears in the string.

Input:

    Hello World Hello
    Hello    

    where:
First line represents the input string S
Second line represents the word to be searched W

Output:
    2
Assumptions:

Length of the string S can be 0 to 10000
Length of the word can be 0 to 10000
Character comparisons will be case-sensitive.

*/

function solution(a, b) {
    //Write your solution here
    let c = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == b) {
            c++
        }
    }
    return c;
}


function main() {
    var a = readLine().split(' ').map(String);
    var b = readLine()


    var res = solution(a, b);
    console.log(res);
}