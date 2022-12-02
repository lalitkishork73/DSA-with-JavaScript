/* 
Largest gap in an array
Given an array of N integers, find the largest gap between any two elements of the array.

In simple words, find max(|Ai-Aj|) where 0 ≤ i < N and 0 ≤ j < N.

 

Input:

    4

    3 6 7 10 

    

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    7

 

Explanation: Here, the largest gap can be found between 3 and 10 which is 10 - 3 = 7, hence the output 7.

 

Assumptions:

Array element can be in the range -1000 to 1000.
*/

function solution(a, arr) {
    //Write your solution here
    let newarr = [];
    let k = 0;
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < a; j++) {
            newarr[k++] = arr[i] - arr[j];
        }
    }
    let max = Math.max(...newarr);
    return max;
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split().join().split(' ').map(Number);
    var res = solution(a, arr);
    console.log(res);
}