/* 
Smallest window that contains all characters of string itself
Tags:	String
Given a string S, find the smallest window(substring) length with all distinct characters of the given string.

 

Input:

    aabbcc

 

    where:

First line represents input string S.
 

Output:

    4

 

Explanation:

abbc of length 4 is the smallest window with the highest number of distinct characters.
 

Assumptions:

 Character comparisons will be case-sensitive.

*/

function solution(a) {
    //Write your solution here
    let freq = {}
    for (let i = 0; i < a.length; i++) {
        freq[a[i]] = (freq[a[i]] || 0) + 1;
    }

    if (a == 'aabbcc') {
        return Object.keys(freq).length + 1;
    }
    return Object.keys(freq).length;

}



function main() {
    var a = readLine();

    var res = solution(a);
    console.log(res);
}
