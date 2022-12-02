/* 
Reverse string according to number of words
Tags:	String
Given a string S containing a number of words. If the count of words in the string S is even then reverse its even position’s words else reverse its odd position, push reversed words at the starting of a new string and append the remaining words as it is in order.

Input:

    Ashish Yadav Abhishek Rajput Sunil Pundir

    where:

First line represents the input string S

Output:

    ridnuP tupjaR vadaY Ashish Abhishek Sunil

Input:

    Ashish Yadav Abhishek Rajput Sunil Pundir Prem

Output:

    merP linuS kehsihbA hsihsA Yadav Rajput Pundir


*/

function solution(a) {
    //Write your solution here
    arr = []
    k = 0;
    let n = a.length
    for (let i = n - 1; i >= 0; i--) {
        if (i % 2 != 0) {
            let b = a[i].split('')
            let c = b.reverse();
            let l = c.join('')
            arr[k++] = l
        }
    }

    for (let i = 0; i < n - 1; i++) {

        if (i % 2 == 0) {
            arr[k++] = a[i];
        }
    }

    return arr

}


function main() {
    var a = readLine().split(' ').map(String);


    var res = solution(a);
    console.log(...res);
}
