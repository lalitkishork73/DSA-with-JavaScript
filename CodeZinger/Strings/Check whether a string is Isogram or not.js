/* 
Check whether a string is Isogram or not
Tags:	String
Given a string S, find whether it is Isogram or not.

 
Input:

     Machine

    where:

First line represents string S.
 
Output:

    Yes

Explanation:

"Machine" does not have any character repeating, it is an Isogram

*/

function solution(a) {
    //Write your solution here
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] == a[j]) {
                return "No";
            }
        }
    }

    return "Yes";

}


function main() {
    var a = readLine().split('').map(String);

    var res = solution(a);
    console.log(res);
}


