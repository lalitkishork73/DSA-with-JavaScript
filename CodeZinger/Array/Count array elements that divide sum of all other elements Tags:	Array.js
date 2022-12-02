/* Count array elements that divide sum of all other elements
Tags:	Array
Given an array of integers, find the number of elements in the array, which divide the sum of all other elements.

 

Input:

    5

    3 10 4 6 7

 

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    3

 

Explanation:  3 divides 27 (10 + 4 + 6 + 7)
                      10 divides 20 (3 + 4 + 6 + 7)
                        6 divides 24 (3 + 10 + 4 + 7), as there are only 3 such numbers the output is 3. */

function solution(a, arr) {
    //Write your solution here
    let c = 0;
    for (let i = 0; i < a; i++) {
        let k = 0;
        for (let j = 0; j < a; j++) {
            if (i == j) {
                continue;
            }
            else {
                k += arr[j]
            }
        }
        if (k % arr[i] == 0) {
            c++;
        }
    }
    return c;
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number)
    var res = solution(a, arr);
    console.log(res);
}
