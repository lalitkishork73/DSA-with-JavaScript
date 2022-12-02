/* Find the frequency of digits in a number
Tags:	Do While LoopFor LoopLoopWhile Loop
Given a number N, find the frequency of digits in N using loop.

 

Input:
    12553451

 

    where:

First line represents value of N.
 

Output:
    1 2

    2 1 

    3 1

    4 1

    5 3 */


function solution(a) {
    //Write your solution here
    let objA = {}
    for (i in a) {
        if (a[i] != " ") {
            objA[a[i]] = (objA[a[i]] || 0) + 1;
        }
    }
    let str = '';
    let dd = Object.entries(objA);
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

