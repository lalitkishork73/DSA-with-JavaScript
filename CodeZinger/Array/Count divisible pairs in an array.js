/* 
Count divisible pairs in an array
Tags:	Array
Given an array A of N integers, find the pairs (A[i], A[j]) in the array such that one element of pair divides other for all 0 ≤ i < j < N.

Input:

    3

    1 2 3

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
 
Output:

    2

Explanation: The two pairs are (1, 2) and (1, 3),

                       In (1, 2), 1 divides 2, and

                       In (1, 3), 1 divides 3


*/

function solution(a, arr) {
    //Write your solution here
    let count = 0, i = 0, j = 1;
    while (j < a + 1) {
        if (j == a) {
            i++;
            j = i + 1
        }
        if (arr[j] % arr[i] == 0) {
            count++;
            j++
        }
        else {
            j++;
        }
    }
    return count;
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ');

    var res = solution(a, arr);
    console.log(res);
}
