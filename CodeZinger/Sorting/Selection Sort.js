/* 
Selection Sort
Tags:	SortingArray
Given an array of integers. Sort the array using selection sort algorithm. 

 

Input 
    0 
    9 
    4 3 6 8 9 2 1 5 7 

 

    Where, 

First line represents the type of order. 
Second represents the size of an array. 
Third line represents array elements. 
 

Output 
    1 2 3 4 5 6 7 8 9 

 

Output display the sorted array.

 

Assume that, 

N is an integer within the range [1 to 10000]. 
Array elements are integers within the range [-2147483648 to 2147483647]. 
Order type can be either 0 or 1 only.
*/


function solution(o, n, arr) {
    //Write your solution here
    let min = 0;
    for (let i = 0; i < n; i++) {
        min = i;
        for (let j = i + 1; j < n; j++) {
            if (o === 0) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            else {
                if (arr[j] > arr[min]) {
                    min = j;
                }
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}


function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);

    let res = solution(a, b, arr);
    console.log(...res);
}