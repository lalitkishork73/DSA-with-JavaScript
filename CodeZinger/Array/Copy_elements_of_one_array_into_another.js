/* Copy elements of one array into another
Tags:	Array
Given an array of integers, copy elements of one array into another array of the same size.

 

Input:

    3

    1 2 3

 

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    1 2 3

  */

function solution(a, arr) {
    //Write your solution here

    let arrB = [];
    // let b=0;
    for (let i = 0; i < a; i++) {
        arrB += arr[i] + " ";
    }
    return arrB;
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);

    var res = solution(a, arr);
    console.log(res);
}
