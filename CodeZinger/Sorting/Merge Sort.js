/* 
Merge Sort
Tags:	SortingArray
Given an array of integers. Sort the array using merge sort algorithm in ascending order. 

 

Input
    9 
    4 3 6 8 9 2 1 5 7 

 

    

    Where, 

First line represents the size of an array. 
Second line represents array elements. 
 

Output 
    1 2 3 4 5 6 7 8 9 

 

Assume that, 

N is an integer within the range [1 to 10000]. 
Array elements are integer within range [-2147483648 to 2147483647].
*/

function merge(left, right) {
    var i = 0, j = 0, k = 0, result = [];
    while (i < left.length && j < right.length) {
        left[i] < right[j] ? result.push(left[i++])
            : result.push(right[j++]);
    }
    return [...result, ...left.slice(i), ...right.slice(j)];
}

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    if (arr.length > 1) {
        const mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid, arr.length);
        return merge(mergeSort(left), mergeSort(right));
    }

}



function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);

    var res = mergeSort(arr);
    console.log(...res);
}