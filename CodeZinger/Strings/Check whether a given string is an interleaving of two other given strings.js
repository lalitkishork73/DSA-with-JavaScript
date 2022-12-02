/*
Check whether a given string is an interleaving of two other given strings
Tags:	String
Given three strings S1, S2 and S3. Write a program that checks whether S3 is an interleaving of S1 and S2. 
S3 is said to be an interleaving of S1 and S2 if it contains all characters of S1 and S2 and order of all characters in individual strings is preserved.

 

Input:

    AB

    CD

    ACBD

 

    where:

First line represents input string S1
Second line represents input string S2
Third line represents input string S3
 

Output:

    Yes

 */
function solution(a, b, c) {
    //Write your solution here
    let i = 0, j = 0, k = 0;
    while (k != c.length) {
        if (i < a.length && a[i] == c[k]) {
            i++;
        }
        else if (j < b.length && b[j] == c[k]) {
            j++;
        }
        else {
            return false;
        }
        k++;
    }
    if (i < a.length || j < b.length) {
        return false;
    }
    return true;
}


function main() {
    var a = readLine().split('');
    var b = readLine().split('');
    var c = readLine().split('');
    if (solution(a, b, c) === true) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }

}
