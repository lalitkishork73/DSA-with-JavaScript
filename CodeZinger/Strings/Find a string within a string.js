/* 
Find a string within a string
Tags:	String
Given two strings S1 & S2, search for an occurrence of the second string within a first string.  

Note: Do not use system library for the implementation. 

 

Input:
    Code Zinger University 
    Zinger

 

    where, 

First line represents string S1. 
Second line represents string S2. 
 

Output:
    5 

 

Here 'Zinger' word starts at 5th index within 'Code Zinger University’. 

 

Assume that, 

The length of strings S1 & S2 are within the range [1 to 10000].
Character comparisons will be case-sensitive.
*/
function solution(a, b) {
    //Write your solution here
    var m = a.length
    var n = b.length
    var count = 0;
    for (var i = 0; i < m; i++) {
        if (count == n) {
            break;
        }

        if (b[count] == a[i]) {
            count++;
        }
        else {
            if (count > 0) {
                i -= count;
            }
            count = 0
        }
    }
    return count < b.length ? -1 : i - count;
}


function main() {
    var a = readLine();
    var b = readLine();

    var res = solution(a, b);
    console.log(res);
}

