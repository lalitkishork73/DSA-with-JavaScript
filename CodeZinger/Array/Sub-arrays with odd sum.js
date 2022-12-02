/* 
Sub-arrays with odd sum
Tags:	Array
Given an array of integers, find the number of subarrays whose sum is odd.

 

Input:

    6

    5 4 4 5 1 3

 

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    12

    

Explanation:  The subarrays with odd sum are:

                        1) {5} Sum = 5 (At index 0)

                        2) {5, 4} Sum = 9

                        3) {5, 4, 4} Sum = 13

                        4) {5, 4, 4, 5, 1} Sum = 19

                        5) {4, 4, 5} Sum = 13

                        6) {4, 4, 5, 1, 3} Sum = 17

                        7) {4, 5} Sum = 9

                        8) {4, 5, 1, 3} Sum = 13

                        9) {5} Sum = 5 (At index 3)

                        10) {5, 1, 3} Sum = 9

                        11) {1} Sum = 1

                        12) {3} Sum = 3, hence there are 12 of these, hence the output 12.
*/

function solution(a, b) {
    //Write your solution here
    let result = 0;
    for (let i = 0; i < a; i++) {
        let val = 0;
        for (let j = i; j < a; j++) {
            val = val + b[j];
            if (val % 2 !== 0) {
                result++;
            }
        }
    }
    return result;
}


function main() {
    var a = parseInt(readLine());
    var b = readLine().split(' ').map(Number);

    var res = solution(a, b);
    console.log(res);
}

