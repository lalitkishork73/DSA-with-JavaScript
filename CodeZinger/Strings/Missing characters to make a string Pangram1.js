
/* 
Missing characters to make a string Pangram
Tags:	String
Given a string S, find all characters that are missing from the string S, i.e., the characters that can make the string a Pangram. Display output in alphabetic order.

 

Input:

     The quick brown fox jumps

 

    where:

First line represents string S.
 

Output:

    adglvyz


*/

function missingChars(str, strLength) {
    //Write your solution here
    let MAX_CHARS = 26;
    let present = new Array(MAX_CHARS);
    present.fill(false);
    let charsList = [];

    for (let i = 0; i < strLength; i++) {
        if ('A'.charCodeAt() <= str[i].charCodeAt() && str[i].charCodeAt() <= 'Z'.charCodeAt())
            present[str[i].charCodeAt() - 'A'.charCodeAt()] = true;
        else if ('a'.charCodeAt() <= str[i].charCodeAt() && str[i].charCodeAt() <= 'z'.charCodeAt())
            present[str[i].charCodeAt() - 'a'.charCodeAt()] = true;
    }

    for (let i = 0; i < 26; i++) {
        if (present[i] == false) {
            charsList.push(String.fromCharCode(i + 'a'.charCodeAt()));
        }
    }
    return charsList;
}


function main() {
    var str = readLine();
    let missing = missingChars(str, str.length);

    let res = '';
    if (missing.length >= 1) {
        for (let i = 0; i < missing.length; i++) {
            res += missing[i];
        }
    }
    console.log(res);
}
