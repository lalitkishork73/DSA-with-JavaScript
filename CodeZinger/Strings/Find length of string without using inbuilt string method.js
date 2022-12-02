/* 
Find length of string without using inbuilt string method
Tags:	String
Given a string S, find the length of S without using an inbuilt string method. 


Input 
    Codezinger University 
Output 
    21 

 

Assume that, 

The length of string S is within the range [0 to 10000].
*/

function solution(a) {
    //Write your solution here
    let c = 0;
    for (let char in a) {
        c++;
    }
    return c;
    // return a.length
}


function main() {
    var a = readLine();

    var res = solution(a);
    console.log(res);
}

