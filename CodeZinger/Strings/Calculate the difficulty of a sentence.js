/* 
Calculate the difficulty of a sentence
Tags:	String
Given a string S, find the difficulty of the given string. Here a Word is considered hard if it has 4 consecutive consonants or number of consonants is more than the number of vowels. Else word is easy. Difficulty of the string is defined as 5*(number of hard words) + 3*(number of easy words).

Input:

    Difficulty of sentence

    where:

First line represents input string S.
 
Output:

     13

Explanation:

Hard words = 2(Difficulty and sentence) Easy words = 1(of) So, answer is 5*2+3*1 = 13
*/

function solution(a) {
    //Write your solution here
    if (a.length == 0) return 0;
    else a = a.split(' ');

    let diff = 0;
    let easy = 0;
    for (let i in a) {
        let cons = 0, vow = 0;
        if (/([^(aeiou)]{5,5})/gi.test(a[i])) {
            diff++;
            continue;
        }
        for (let j = 0; j < a[i].length; j++) {
            if (/^[aeiou]$/.test(a[i][j])) vow++;
        }
        vow >= a[i].length / 2 ? easy++ : diff++;
    }
    return 5 * diff + 3 * easy;
}


function main() {
    var a = readLine();

    var res = solution(a);
    console.log(res);
}
