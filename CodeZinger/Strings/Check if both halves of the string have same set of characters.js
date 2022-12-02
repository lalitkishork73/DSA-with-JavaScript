/* 
Check if both halves of the string have same set of characters
Tags:	String
Given a string S, Check whether it is possible to split a string from the middle which will give two halves having the same characters and same frequency of each character. If the length of the given string is ODD then ignore the middle element and check for the rest.

 

Input:

    abcbac

 

    where:

First line represents input string S
 

Output:

    Yes

 

Explanation: The two halves contain the same characters with the same frequency.

 

Input:

     abcaabbc

 

Output:

    No

 

Explanation: The two halves contain the same characters but the frequency is not the same.

 

Assumptions:

Character comparisons will be case-sensitive.
If the length of the given string is ODD then ignore the middle element.
*/

function solution(str) {
    //Write your solution here
    let map = new Map();

    for (let i = 0; i < str.length; i++) {
        if (i < str.length / 2) {
            map.set(str[i], map.get(str[i]) + 1 || 1);
        }
        else {
            if (map.get(str[i]) > 0) {
                map.set(str[i], map.get(str[i]) - 1);
            }
            else {
                return "No";
            }
        }
    }
    return "Yes";
}


function main() {
    var a = readLine();

    var res = solution(a);
    console.log(res);
}
