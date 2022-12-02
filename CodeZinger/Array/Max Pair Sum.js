/* 
Max Pair Sum
Tags:	Array
Given an array of distinct integers A, find the largest sum of any pair of elements. 

 

Input 
    6 
    1 2 3 89 4 10 

 

    Where, 

First line contains the size of array N. 
Second line contains array elements.      
 

Output 
    99 

 

Here for the given array, sum of various pairs are 
    1 + 89 = 90 
    2 + 89 = 91 
    3 + 89 = 92 

    4 + 89 = 93
    10 + 89 = 99 


and so on. The largest sum out of these pairs is 99. 


*/


function solution(a, ar) {
    //Write your solution here
    let s = [], l = ar.length - 1;
    let Max = Math.max(...ar)
    for (let i = 0; i < l + 1; i++) {
        if (ar[i] != Max) {
            s.push(ar[i] + Max);
        }
    }

    return Math.max(...s);
}


function main() {
    var a = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);
    var res = solution(a, arr);
    console.log(res);
}

