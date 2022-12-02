/* 
Sort strings based on length
Tags:	String
Given a string, sort the words according to word's length. 

 

Input:
    Yellowish red Orange black

 

Output: 
    red black Orange Yellowish

  

Assumptions: 

The length of strings in the array is within the range [0 to 10000]. 
*/

function solution(s) {
    //Write your solution here
    for (let i = 1; i < s.length; i++) {
        let temp = s[i];

        let j = i - 1;
        while (j >= 0 && temp.length < s[j].length) {
            s[j + 1] = s[j];
            j--;
        }
        s[j + 1] = temp;
    }
}



function main() {
    var a = readLine().split(' ');

    solution(a);

    console.log(...a);
}