/* Find Majority Element
Tags:	Array
Given an array of integers A, find the Majority Element.

 

Display the Majority Element in the array. If no majority element then display 0. 

 

Input
    5 
    1 2 1 2 2

 

    Where, 

First line represents the size of an array. 
Second line represents array elements separated by single space.
 

Output
    2 

 

Here for the given array, 2 appears 3 times in the array of size 5.  */

function solution(a, arr) {
    //Write your solution here
    function candidate(a, arr) {
        let count = 0;
        let cand = null;
        for (let i = 0; i < a; i++) {
            if (count == 0) {
                cand = arr[i];
            }
            count += (arr[i] == cand) ? 1 : -1;
        }
        if (a % 2 == 0) {
            return 0;
        }
        return cand;
    }

    function isMajority(arr, cond) {
        let count = 0, l = arr.length;
        for (let i = 0; i < l; i++) {
            if (arr[i] == cond) {
                count++
            }
        }
        if (count > parseInt(l / 2)) {
            return true;
        }
        else {
            return false;
        }
    }

    let cond = candidate(a, arr);
    if (isMajority(arr, cond)) {
        return cond;
    }
    else {
        return 0;
    }

}

function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);

    var cand = solution(a, arr);
    console.log(cand);

}
