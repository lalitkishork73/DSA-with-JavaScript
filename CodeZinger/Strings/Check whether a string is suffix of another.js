/* 
Check whether a string is suffix of another
Tags:	String
Given two strings S1 and S2, check whether S1 is a suffix of S2 i.e. check whether string S2 ends with string S1.

Input:

    code

    coderscode

    where:

First line represents string S1.
Second line represents string S2.
 

Output:    

    Yes
*/

function solution(s1, s2) {
    //Write your solution here
    s2 = s2.replace(/ /g, '');
    s2 = s2.split('');
    let arr = [];
    let a = (s2.length - s1.length)

    for (let i = a; i < s2.length; i++) {
        arr += s2[i];
    }

    if (arr != s1) {
        return "No";
    }

    return "Yes";

}


function main() {
    var s1 = readLine();
    var s2 = readLine();


    var res = solution(s1, s2);
    console.log(res);
}
