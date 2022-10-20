/* function swap(arr, i, j) {
  arr[i] = arr[i] + arr[j];
  arr[j] = arr[i] - arr[j];
  arr[i] = arr[i] - arr[j];
} */

let { swapA ,swap,swapT, swapAT} = require("../swapFunc/swap.js");
function BubbleSort(arr, o) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (o == 0) {
        if (arr[i] > arr[j]) {
          swapAT(arr, i, j);
        }
      } else {
        if (arr[i] < arr[j]) {
          swapAT(arr, i, j);
        }
      }
    }
  }
  return arr;
}

function BubbleSortOptimiz(arr, o) {
   
    return arr
}

let arr = [1, 22, 4, 51, 66, 28, 44, 14, 23, 56, 79];
let str=["a","n","q","a","b"]
let order = 0;
let val = BubbleSort(str, order);
// let res = BubbleSortOptimiz(arr, order);
console.log(val);
let a="a",b="b";
console.log(swapT(a,b))
// console.log(res);
