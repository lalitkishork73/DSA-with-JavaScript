/* 
Number of substrings divisible by 6
Tags:	String
Given a string S consisting of integers 0 to 9, find the number of substrings which are divisible by 6. Substring does not contain leading zeroes

 

Input:

    606

 

    where:

First line represents input string S.
 

Output:

     5

 

Explanation:

Substrings "6", "0", "6", "60", "606" are divisible by 6.
 

Input:

    4806 

 

Output:

     5

 

Explanation:

Substrings "0", "6", "48", "480", "4806" are divisible by 6.
*/

function solution(a) {
    //Write your solution here
    let c = 0;
    let x = 0;
    for (let i = 0; i < a.length; i++) {
        let rem = 0
        for (let j = i; j < a.length; j++) {
            x = a[j]
            if (i == j && x == 0) {
                c++;
                break;
            }
            if (x % 2 == 0 && (rem + x) % 6 == 0) {
                c++;
            }
            rem = (rem + x) % 6;
        }
    }
    return c;
}


function main() {
    var a = readLine().split('');

    var res = solution(a);
    console.log(res);
}

