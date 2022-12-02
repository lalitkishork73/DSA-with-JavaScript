/* 
Reverse a sentence using recursion
Tags:	String
Given a string S, write a program to reverse the input string without using any built-in function

 

Input:

    hello world

   

    where:

First line represents the input string
 

Output:

     dlrow olleh

 

Assumptions:

Length of string can be 0 to 10000
*/

function solution(arr, left, right) {
    //Write your solution here

    if (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        solution(arr, left + 1, right - 1);

    }


}


function main() {
    var a = readLine().split('');

    solution(a, 0, a.length - 1);
    let t = a.join('');
    console.log(t);
}
