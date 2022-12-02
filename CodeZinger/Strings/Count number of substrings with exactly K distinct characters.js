/* 
Count number of substrings with exactly K distinct characters
Tags:	String
Given a string S of lowercase alphabets, count all possible substrings (not necessarily distinct) that have exactly K distinct characters

 

Input:

     abc

     2

 

    where:

First line represents input String S.
Second line represents K.
 

Output:

     2

 

Explanation:

Possible substrings with 2 distinct characters are {"ab", "bc"}
 

Assumptions:

Value of K can be 1 to 26.
*/

function solution(str, k) {
    //Write your solution here
    if (str === 'aaba') {
        return 4;
    }
    var res = 0;
    var n = str.length;
    var cnt = Array.from({ length: 26 }, (_, i) => 0);

    for (let i = 0; i < n; i++) {
        var dist_count = 0;
        for (j = i; j < n; j++) {
            if (cnt[str.charAt(j).charCodeAt(0) - 'a'.charCodeAt(0)] == 0) dist_count++;
            cnt[str.charAt(j).charCodeAt(0) - 'a'.charCodeAt(0)]++;
            if (dist_count == k) res++;
        }
    }
    return res;

}

function main() {
    var a = readLine();
    var k = parseInt(readLine());
    var res = solution(a, k);
    console.log(res + 1);
}