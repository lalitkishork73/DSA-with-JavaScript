/* 
Check if max occurring character of one string appears same number of times in other
Tags:	String
Given two strings S1 and S2, write a program to find the character which has the maximum occurrence in the first string S1 and check whether that particular character is present in the second string S2 the same number of times as it is present in the first string S1.

 

Input:

    hello world

    albcllsyaaaaaaaa

 

    where:

First line represents S1
Second line represents S2
 

Output:

    Yes

 

Explanation:

'l' has highest frequency of 3 in S1 and it appears 3 times in S2. 
*/

function solution(a, b) {
    //Write your solution here

    let map1 = new Map(), map2 = new Map(), maxC, maxO;
    for (i of a) {
        map1.set(i, map1.get(i) + 1 || 1);
        if (maxO < map1.get(i)) {
            maxO = map1.get(i);
            maxC = i;
        }
    }

    for (i of b) {
        map2.set(i, map2.get(i) + 1 || 1);

    }
    if (map1.get(maxC) == map2.get(maxC)) {
        return "Yes";
    }
    else {
        return "No";
    }


}


function main() {
    var a = readLine().split('');
    var b = readLine().split('');

    var res = solution(a, b);
    console.log(res);
}