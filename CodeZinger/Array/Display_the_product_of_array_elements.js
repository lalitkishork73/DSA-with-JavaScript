/* Display the product of array elements
Tags:	Array
Given an array of integers, write a program to display the product of array elements.

 

Input:

    6

    1 2 3 4 5 6

    

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    720

 

Explanation: Product of elements in the array: 1*2*3*4*5*6 = 720.

 
 */

function solution(a, arr) {
    //Write your solution h

    let product = 1;
    for (let i = 0; i < a; i++) {
        product *= arr[i];

    } return product
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split("").join("").split(' ');

    var res = solution(a, arr);
    console.log(res);
}
