/* 
Insertion Sort
Tags:	SortingAlgorithmArray
Given an array of integers, sort the array in ascending/descending order by using Insertion sort. 

 

Reference:
http://www.algolist.net/Algorithms/Sorting/Insertion_sort

 

Input
    0 
    9 
    4 3 6 8 9 2 1 5 7 

 

Where, 

First line represents the type of ordering. 
Second line represents the size of the array. 
Third line represents the array elements. 
 

Output 
    1 2 3 4 5 6 7 8 9 
*/

function solution(a, n, arr) {
    //Write your solution here
    for (let i = 1; i < n; i++) {
        let temp = arr[i], j = i - 1;
        if (a === 0) {
            while (j >= 0 && arr[j] > temp) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = temp;
        }
        else if (a === 1) {
            while (j >= 0 && arr[j] < temp) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = temp;
        }
    }
    return arr;
}


function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());
    var c = readLine().split(' ').map(Number);

    var res = solution(a, b, c);
    console.log(...res);
}