/* 
Make Even numbers Odd
Tags:	Array traversal
Given an array of integers, write a program to convert all the even numbers present in the array to odd numbers by adding 1 to the even number.

Input:

    4

    1 2 3 4


    where:

First line represents the number of elements in the array.
Second line represents the elements of the array.
 

Output:

    1 3 3 5
*/

function solution(a, b) {
    //Write your solution here
    let c = [];

    for (let i = 0; i < a; i++) {
        if (b[i] % 2 !== 0) {
            c += b[i] + " ";
        }
        if (b[i] % 2 == 0) {
            c += b[i] + 1 + " ";

        }

    }
    return c;
}


function main() {
    var a = parseInt(readLine());
    var b = readLine().split(' ').map(Number);

    var res = solution(a, b);
    console.log(res);
}
