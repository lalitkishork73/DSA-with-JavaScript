/* 
Check whether a string can become empty by repeatedly deleting a given sub-string
Tags:	String
Given a string S1 and another string S2, find whether S1 can become empty by deleting S2 from S1 again and again. You are allowed to delete S2 from S1 any number of times.

 

Input:

    cocodede

    code

 

    where:

First line represents string S1.
Second line represents string S2.
 

Output:

    Yes

 

Explanation:

In the string S1= "cocodede", we can first delete the substring "code". S1 now becomes "code". We can again delete sub-string "code". Now the string S1 becomes empty.
*/

function solution(s1, s2) {
    //Write your solution here
    while (s1.length > 0) {
        let index = s1.indexOf(s2);
        if (index == -1) {
            break;
        }
        s1 = s1.replace(s2, '');
    }
    if (s1.length == 0) {
        return "Yes";
    } else {
        return "No";
    }
}


function main() {
    var a = readLine();
    var s = readLine();

    var res = solution(a, s);
    console.log(res);
}
