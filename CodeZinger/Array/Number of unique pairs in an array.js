/* Number of unique pairs in an array
Tags: Array
Given an array of N elements, find all the unique pairs that can be formed using the elements of a given array.

    Input:

3
1 1 2

where:

First line represents the number of elements in the array.
Second line represents the elements in the array.


    Output:

4

Explanation: (1, 1)(1, 2)(2, 1) and(2, 2) are all the unique pairs, their count is 4, hence the output 4. */


function solution(a, s) {
    //Write your solution here
    let set = new Set();
    for (let i = 0; i < a; i++) {
        set.add(s[i]);
    }
    let c = Math.pow(set.size, 2)
    return c;
}


function main() {
    var a = parseInt(readLine());
    var s = readLine().split(' ').map(Number);

    var res = solution(a, s);
    console.log(res);
}
