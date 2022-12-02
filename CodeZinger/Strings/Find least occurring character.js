/* 
Find least occurring character
Tags:	String
Given a string S, find the least occurring character in the input string S.

e.g., if the input string is “tests” then the output should be ‘e’.

 

Note: If there are more than 1 characters with least count than display the smallest character.

 

Input:

    hello

   

    where:

First line represents the input string S.
 

Output:

    e

 

Explanation:

Characters 'h','e' and 'o' occurs only once and 'e' has the smallest ASCII value among them.

*/

function solution(a) {
    //Write your solution here
    a.sort();
    let map = {}
    for (let i = 0; i < a.length; i++) {
        map[a[i]] = (map[a[i]] || 0) + 1;
    }
    let entriess = Object.entries(map);
    let sortKey = entriess.sort((a, b) => a[1] - b[1]);
    return sortKey[0][0];
}


function main() {
    var a = readLine().split('').map(String);

    var res = solution(a);
    console.log(res);
}
