/* 
Quick Sort
Tags:	SortingArray
Given an array of integers. Sort the array using quick sort algorithm in ascending order. 

 

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
Array elements are integer within the range [-2147483648 to 2147483647]. 

*/
function quickSort(arr) {
    //Write your solution here
    if (arr.length <= 1) {
        return arr
    }
    else {
        var left = [], right = [], newArr = [], pivot = arr.pop(), length = arr.length;
        for (var i = 0; i < length; i++) {
            if (arr[i] <= pivot) {
                left.push(arr[i]);
            }
            else {
                right.push(arr[i]);
            }
        }
        return newArr.concat(quickSort(left), pivot, quickSort(right));
    }
}


function main() {
    var a = parseInt(readLine());
    var b = readLine().split(' ').map(Number);

    var res = quickSort(b);
    console.log(...res);
}
