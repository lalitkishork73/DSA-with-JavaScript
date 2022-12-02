/* 
Bubble Sort
Tags:	SortingAlgorithmArray
Given an array of integers, sort the array in ascending/descending order by using bubble sort algorithm. 

Reference:
http://www.algolist.net/Algorithms/Sorting/Bubble_sort


Write a program to accept 3 parameters, an array A of integers, size of the array N and sorting order O (0 or 1).

Note: 
    0 represents ascending order.
    1 represents descending order.

Input 
    0 
    9 
    4 3 6 8 9 2 1 5 7 

Where, 

First line represents the type of ordering. 
Second line represents the size of the array. 
Third line represents array elements. 
 

Output 
    1 2 3 4 5 6 7 8 9 
*/

function solution(a, n, arr) {
    //Write your solution here
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (a === 0) {
                if (arr[j] < arr[i]) {
                    arr[i] = arr[i] + arr[j];
                    arr[j] = arr[i] - arr[j];
                    arr[i] = arr[i] - arr[j];
                }
            }
            else if (a === 1) {
                if (arr[j] > arr[i]) {
                    arr[i] = arr[i] + arr[j];
                    arr[j] = arr[i] - arr[j];
                    arr[i] = arr[i] - arr[j];
                }
            }
        }
    }

    return arr
}



function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());
    var c = readLine().split(' ').map(Number);

    var res = solution(a, b, c);
    console.log(...res);
}