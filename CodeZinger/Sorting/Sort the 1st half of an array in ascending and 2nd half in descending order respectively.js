/* Sort the 1st half of an array in ascending and 2nd half in descending order respectively
Tags:	ArraySorting
Given an array of N integers, sort the first half of the array in ascending order and second half in descending order.

Note: If N is odd. then the first half will have one element less than the second half.

 

Input:

    9

    5 2 4 7 9 3 1 6 8

 

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    1 2 3 4 9 8 7 6 5

 

Explanation: As we can see the array is sorted in ascending order till halfway, here till index 3 (till element 4). After that from index 4(from element 9), the array is in descending order. */

function solution(n, arr) {
    //Write your solution here
    arr.sort((a, b) => a - b);
    let k = parseInt(Math.floor(n / 2));
    let t = '';
    for (let i = 0; i < k; i++) {
        t += arr[i] + " ";
    }
    for (let j = n - 1; j >= k; j--) {
        t += arr[j] + ' ';
    }

    return t;

}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(" ").map(Number);

    var res = solution(a, arr);
    console.log(res);
}