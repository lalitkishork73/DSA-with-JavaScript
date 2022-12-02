/* 
Set difference of two sorted arrays
Tags:	Array
Given two sorted arrays of distinct elements, find those elements from both arrays that are not common. The output should be displayed in sorted order.

 

Input:

    3

    10 20 30

    5

    20 25 30 40 50

    

    where:

First line represents the number of elements in the first array.
Second line represents the elements of the first array.
Third line represents the number of elements in the second array.
Fourth line represents the elements of the second array.
 

Output:

    10 25 40 50

   

Explanation: The output displays the uncommon elements in both the arrays. Also, the elements of the output array are in sorted order.

 

Assumptions:

Array can be of a size from 1 to 1000.
Array element can be in the range -1000 to 1000.
*/


function solution(a, b, c, d) {
    //Write your solution here
    let index = [];
    for (let i in b) {
        index.push(b[i]);
    }
    for (let i in d) {
        index.push(d[i]);
    }
    index.sort((a, b) => a - b);

    for (let i = 0; i < index.length; i++) {
        for (let j = i + 1; j < index.length; j++) {
            if (index[i] == index[j]) {
                index[i] = " ";
                index[j] = " ";
            }
        }
    }

    index = index.filter(function (num) {
        return /\S/.test(num);
    })

    return index;
}


function main() {
    var a = parseInt(readLine());
    var b = readLine().split(' ').map(Number);
    var c = parseInt(readLine());
    var d = readLine().split(' ').map(Number);

    var res = solution(a, b, c, d);
    console.log(...res);
}
