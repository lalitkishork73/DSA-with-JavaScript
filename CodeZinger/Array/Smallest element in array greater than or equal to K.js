/* 
Smallest element in array greater than or equal to K
Tags:	Array
Given an array of integers and a number K, find the smallest element in array greater than or equal to K. If such element exists in the array, display it otherwise display "-1".

 

Input:

    8

    1 3 4 7 8 9 9 10

    5

    

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
Third line represents the value of K.
 

Output:

    7

 

Explanation: Smallest integer in the array greater than or equal to K=5 is 7.
*/

function solution(a, arr, k) {
    //Write your solution here
    for (let i = 0; i < a; i++) {
        if (k <= arr[i])
            return arr[i];
    }

}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);
    var k = parseInt(readLine());

    var res = solution(a, arr, k);
    console.log(res);
}

