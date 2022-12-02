/* 
Array manipulations and sum
Tags:	Array
Given an array of N integers and an integer M.

Find an element K in the array such that if all the elements from the array that are greater than K are made equal to K then the sum of all the elements of the resultant array becomes equal to M.

If it is not possible to find such an element then display -1.

 

Input:

    5

    12 3 6 7 8

    15

    

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
Third line represents the value of M.
 

Output:

    3

 

Explanation: Resultant array = {3, 3, 3, 3, 3}, Sum of the array elements = 15 = M, hence the output 3.

*/


function solution(a, arr, m) {
    //Write your solution here
    for (let i = 0; i < a; i++) {
        let k = 0
        for (let j = 0; j < a; j++) {
            if (arr[j] <= arr[i]) {
                k += arr[j];
            }
            else {
                k += arr[i];
            }
        }
        if (k == m) {
            return arr[i];
        }
    }
    return -1;
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);
    var m = parseInt(readLine());
    var res = solution(a, arr, m);
    console.log(res);
}
