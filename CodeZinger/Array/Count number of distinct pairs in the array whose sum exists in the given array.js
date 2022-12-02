/* Count number of distinct pairs in the array whose sum exists in the given array
Tags:	Array
Given an array A of N positive integers, find the number of distinct pairs (A[i], A[j]) whose sum exists in the given array for all 0 ≤ i < j < N.

Note: While repeating pairs will not be counted again. And we can’t make a pair using the same elements again. Eg : (2, 1) and (1, 2) will be considered as only one pair.

 

Input:

    7

    1 5 6 4 -1 5 10

    

    where:

First line represents the number of elements in the array
Second line represents the elements in the array.
 

Output:

    6

 

Explanation: Here there are 6 pairs: (1 + 5) = 6, (1 + 4) = 5, (5 + -1) = 4, (5 + 5)=10,(6 + 4)=10, (6 + -1) = 5.

                      Here (1 + 5) comes twice will be considered as only one pair.

                      Also (-1 + 5) is not distinct as (5 + -1) has occurred, hence considered one pair.

  */

function solution(a, arr) {
    //Write your solution here
    arr.sort((a, b) => a - b)
    let temp;
    let c = 0;
    for (let i = 0; i < a; i++) {
        for (let j = i + 1; j < a; j++) {
            if (arr[i] != arr[i - 1] && arr[j] != arr[j + 1]) {
                temp = arr[i] + arr[j]
                if (arr.includes(temp)) {
                    c++;
                }
            }
        }
    }
    return c;
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);

    var res = solution(a, arr);
    console.log(res);
}
