/* 
Solve the Sum array puzzle and print the Sum array
Tags:	Array
Given an array A of N integers, construct a Sum Array S (of same size) such that S[i] is equal to the sum of all the elements of A except A[i].

Input:

    5

    3 6 4 8 9

    where:

First line represents the number of elements in the array
Second line represents elements in the array.
 
Output:

    27 24 26 22 21
 

Explanation: Output displays the resultant array S in which for each element in the original array A we have displayed it with the sum of all the elements except itself.

                       Example: for element 3 we write 6+4+8+9 = 27 and so on.


*/

function solution(a, s) {
    //Write your solution here
    let arr = '';
    let sum = 0;
    for (let i = 0; i < a; i++) {
        sum += s[i];
    }
    for (let i = 0; i < a; i++) {
        arr += sum - s[i] + " ";
    }
    return arr;
}


function main() {
    var a = parseInt(readLine());
    var s = readLine().split(' ').map(Number)

    var res = solution(a, s);
    console.log(res);
}
