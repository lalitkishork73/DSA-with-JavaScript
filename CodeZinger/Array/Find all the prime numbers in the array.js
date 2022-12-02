/* 
Find all the prime numbers in the array
Tags:	Array
Given an array of integers, find all the prime numbers in the array.

 

Input:

    5

    2 3 5 7 9

    

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    2 3 5 7
*/

function solution(a, arr) {
    //Write your solution here
    let setarr = [];
    let k = 0;

    for (let i = 0; i < a; i++) {
        let set = 1;
        if (arr[i] < 2) {
            set = 0;
        }
        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j == 0) {
                set = 0
            }
        }
        if (set === 1) {
            setarr[k++] = arr[i]
        }
    }
    return setarr
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);

    var res = solution(a, arr);
    console.log(...res);
}

