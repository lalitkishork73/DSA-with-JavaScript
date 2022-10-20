const {swapAT}=require("../swapFunc/swap.js")

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //find min number in subarray
    //and place it at ith position
    let minptr = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minptr] > arr[j]) {
        minptr = j;
      }
    }
    //swap
    swapAT(arr,i,minptr)
  }
  return arr;
}

let a = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(selectionSort(a));