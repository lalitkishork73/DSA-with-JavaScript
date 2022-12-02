/* 
Distance between two closest minimum
Tags:	Array
Given an array of integers, find the minimum distance between any two occurrences of the minimum integer in the array.

 

Input:

    8

    5 1 2 3 4 1 2 1

 

    where:

First line represents the number of elements in the array.
Second line represents the elements of the array.
 

Output:

    2

 

Explanation: The minimum element 1 occurs at indexes: 1, 5 and 7. So the minimum distance is 7-5 = 2.

 

Assumptions:

Array can be of size from 1 to 1000.
Array element can be in the range -1000 to 1000.
If the minimum value has occurred only once then the output will be '-1'.
 
*/

function solution(a, arr) {
    //Write your solution here
    let min = Math.min(...arr);
    let ar = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == min) {
            ar.push(i);
        }
    }
    let at = [], i = 0;
    for (let j = i + 1; j < ar.length; j++) {
        at.push(ar[j] - ar[i++]);
    }
    if (at.length == 0) {
        return -1;
    }
    return Math.min(...at)
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);
    var res = solution(a, arr);
    console.log(res);
}
