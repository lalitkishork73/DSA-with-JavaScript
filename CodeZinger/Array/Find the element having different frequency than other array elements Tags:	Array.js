/* Find the element having different frequency than other array elements
Tags:	Array
Given an array of N integers where each element in the array occurs the same number of times except one element, find that element.

 

Input:

    5

    1 1 2 2 3

 

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    3

 

Explanation: Elements 1, and 2 occur two times each but 3 occurs only once, hence the output 3. */

function solution(a) {
    //Write your solution here
    let arr = readLine().split(" ").map(Number)
    let arr1 = []
    let arr2 = []
    for (let i = 0; i < a; i++) {
        if (arr1.indexOf(arr[i]) == -1) { arr1.push(arr[i]) }
        else { arr2.push(arr[i]) }
    }
    let c = 0;
    return arr2.reduce((a, b) => a + b, c)
}


function main() {
    var a = parseInt(readLine());

    var res = solution(a);
    console.log(res);
}
