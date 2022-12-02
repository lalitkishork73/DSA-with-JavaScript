/* 
Find pair in an array with given sum
Tags:	Array
Given an array of integers A and an integer S, determines whether there exist two elements in the array whose sum is exactly equal to S or not. 

 

Display 1 a pair is found in an array with matching sum S else 0. 

 

Input 
    6
    5 
    1 -2 3 8 7

 

    Where, 

First line represents integer S. 
Second line represents the size of an array. 
Third line represents array elements separated by single space. 
 

Output 
    1 

 

For the given array, A[1] + A[3] = -2 + 8 = 6 which is equal to the given number S=6.


*/

function solution(s, n, arr) {
    //Write your solution here
    if (n <= 1) return 0;
    let map = new Map();
    for (let el of arr) {
        map.set(el, map.get(el) + 1 || 1);
    }

    for (let pair of map) {
        if (map.has(s - pair[0])) {
            return 1;
        }
    }
    return 0;

}


function main() {
    var s = parseInt(readLine());
    var a = parseInt(readLine());
    var arr = readLine().split(" ").map(Number);
    var res = solution(s, a, arr);
    console.log(res);
}

