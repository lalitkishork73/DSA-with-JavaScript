/* Sort a string in alphabetical order
Tags:	String
Given a string S, Sort the string in alphabetical order.

 

Input

    ProgRamMiNg

 

Output

    aggiMmNoPRr

 

Assume that,

String S contain alphabets within the range ['a' to 'z'], ['A' to 'Z'] and white space. */

function solution(str) {
    //Write your solution here
    str = str.replace(/\s+|\W+|\d+|[_]+/g, "");
    return str.split('').map((x, i) => {
        return [x, i];
    }).sort(([b, i], [a, j]) => {
        a = a.toUpperCase();
        b = b.toUpperCase();
        if (a == b) {
            return i - j;
        }
        else if (a < b)
            return -1;
        else
            return 1;
    }).map(([x, i]) => {
        return x;
    }).join('');
}


function main() {
    var a = readLine()

    var res = solution(a);
    console.log(res.split('').reverse().join(''));
}