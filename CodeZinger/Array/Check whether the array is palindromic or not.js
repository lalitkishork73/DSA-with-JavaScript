/* Check whether the array is palindromic or not
Tags:	Array
Given an array of integers, find whether it is Palindromic or not. Display "Yes" if the array is palindromic otherwise display "No".

An array is Palindromic only when read in reverse order gives the same result as in normal order.

 

Input:

    5

    3 6 0 6 3

 

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    Yes

 

Explanation: Normal order reading of elements: 3 6 0 6 3

                      Reverse order reading of elements: 3 6 0 6 3, as both the orders are same, the array is Palindromic, hence the output "Yes".

 

 */

function solution(a, arr) {
    //Write your solution here
    let t;
    for (let i = 0; i < (arr.length) / 2; i++) {
        if (arr[i] != arr[arr.length - i - 1]) {
            return t = "No";
        }
    }
    return t = "Yes";
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);

    var res = solution(a, arr);
    console.log(res);
}



