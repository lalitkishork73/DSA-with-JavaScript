/* 
Split string by space into words
Tags:	String
Given a string S, Write a program to split the string into words.

 

Input:

    How are you

   

    where:

First line represents the input string
 

Output:

    How

    are

    you

 

Assumptions:

Length of the string S can be 0 to 10000
*/

function solution(a) {
    //Write your solution here
    for (let i in a) {
        console.log(a[i]);
    }
}


function main() {
    var a = readLine().split(' ');;

    solution(a);

}