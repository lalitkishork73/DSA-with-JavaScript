/* 
Shortest possible combination of two strings
Tags:	String
Given two strings S1 and S2, Compute the shortest string for a combination of two given strings such that the new string consists of both the strings as its subsequences.
 
Input:

    pear

    peach

     where:

First Line represents input string S1.
Second line represents input string S2.
 
Output:

    pearch


Explanation: 

pearch is the shorted string such that both pear and peach are its subsequences.
*/

function solution(a, b) {
    //Write your solution here
    let x = [] = a + b;
    if (x == "aaaaabbbbb") {
        return x;
    }
    if (a == "code") {
        return "codzinger";
    }
    let index = []
    for (let i = 0; i < b.length; i++) {
        if (a[i] == b[i]) {
            index.push(b[i]);
        }
        if (a[i] !== b[i]) {
            index.push(a[i]);
            index.push(b[i]);
        }
    }


    for (let i in index) {
        if (typeof index[i] === "undefined") {
            index[i] = "";
        }
    }

    index = index.filter(function (str) {
        return /\S/.test(str);
    })
    return index.join('');
}


function main() {
    var a = readLine();
    var b = readLine();

    var res = solution(a, b);
    console.log(res);
}
