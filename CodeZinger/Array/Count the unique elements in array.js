/* 
Count the unique elements in array
Tags:	Array
Given an array of integers A, count the number of unique values in the array. Do not use system function to find the unique number. 

Input
    10 
    1 2 3 1 4 2 5 6 7 8 

 

    where, 

First line represents the size of an array. 
Second line represents array elements. 
 

Output
    6 

 

Here in the given array, unique values are [3 4 5 6 7 8] hence the result is 6. 
*/

function solution(a, arr) {
    //Write your solution here
    let map = new Map();
    for (let i = 0; i < a; i++) {
        map.set(arr[i], map.get(arr[i]) + 1 || 1);
    }

    let count = 0;
    for (let [key, value] of map) {
        if (value == 1) {
            count++;
        }
    }
    return count;
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number)

    var res = solution(a, arr);
    console.log(res);
}
