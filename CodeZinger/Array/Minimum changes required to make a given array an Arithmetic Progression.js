/* 
Minimum changes required to make a given array an Arithmetic Progression
Tags:	Array
Given an array A of N integers and a number D, find the minimum number of change(s) required to make the given array an Arithmetic Progression with the common difference D. You can change any element of the array to any integer.

 

Input:

    4

    1 2 4 6

    2

 

    where:

First line represents the number of elements in the array.
Second line represents elements in the array.
Third line represents the value of common difference 'D'.
 

Output:

    1

 

Explanation: Change A[0]=0. So, the new sequence is 0, 2, 4, 6 which is an Arithmetic Progression with common difference 2. Since there is only one change required, hence the output 1.

 


*/

function solution(a, b, c) {
    //Write your solution here
    let cont = -1;
    let freq = new Map();
    for (let i = 0; i < a; i++) {
        let a0 = b[i] - (i) * c;
        if ((freq.has(a0))) {
            freq.set(a0, freq.get(a0) + 1);
        }
        else {
            freq.set(a0, 1);
        }
        if (freq.get(a0) > cont) {
            cont = freq.get(a0);
        }
    }
    return (a - cont);
}


function main() {
    var a = parseInt(readLine());
    var b = readLine().split(' ');
    var c = parseInt(readLine());

    var res = solution(a, b, c);
    console.log(res);
}
