/* Remove all occurrences of word
Tags:	String
Given a string S and a word W, remove all the occurrences of the word W in the input string S.

 

Input:

    hello world hello

    hello

   

    where:

First line represents the input string S
Second line represents the word to be removed W.
 

Output:

     world

 

Explanation:

String after removing all occurrences of hello becomes " world ". */

function solution(a, b) {
    //Write your solution here
    let c = "";
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b) {
            c += a[i] + "  ";
        }


    }
    return c;
}


function main() {
    var a = readLine().split(' ');
    var b = readLine();

    var res = solution(a, b);
    console.log(res);
}
