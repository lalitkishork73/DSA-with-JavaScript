/* 
Longest palindromic substring
Tags:	String
Given a string S, find the longest substring which is Palindrome.

 

Input:

    AllcodeaedocAll

 

    where:

First line represents the input string
 

Output:

    codeaedoc

 

Assumptions:

Length of the string S can be 0 to 10000
*/


function solution(s) {
    //Write your solution here
    if (s.length < 2) return s;
    let max = '';
    for (let i = 0; i < s.length; i++) {
        let left = helper(i, i, s);
        let right = helper(i, i + 1, s);
        let currMax = left.length >= right.length ? left : right;
        max = currMax.length > max.length ? currMax : max;
    }
    return max;
}

function helper(left, right, s) {
    let curr = '';
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        curr = s.substring(left, right + 1);
        left -= 1;
        right += 1;
    }
    return curr;
}


function main() {
    var a = readLine();

    var res = solution(a);
    console.log(res);
}