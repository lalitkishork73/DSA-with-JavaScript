/* Frequency of characters in a string
Tags:	String
Given a string S, count the frequency of characters in the string S i.e. which character is present how many times in the string

 

Input:

    hello world

   

    where:

First line represents the input string
 

Output:

    d 1

    e 1

    h 1

    l 3

    o 2

    r 1

    w 1

 

Explanation: Print the count of each distinct letter present in string S.

 

Assumptions:

String contains only lower case letters
Length of string S can be 0 to 10000
 */

function solution(a) {
    //Write your solution here
    let objA = {}
    for (let i = 0; i < a.length; i++) {
        if (a[i] != " ") {
            objA[a[i]] = (objA[a[i]] || 0) + 1;
        }
    }
    let keey = Object.keys(objA).sort()
        .reduce((obj, key) => {
            obj[key] = objA[key];
            return obj;
        }, {})
    let str = ""
    let dd = Object.entries(keey)
    for (i in dd) {
        str += dd[i].join(' ') + "\n"
    }
    return str;
}


function main() {
    var a = readLine();

    var res = solution(a);
    console.log(res);
}

