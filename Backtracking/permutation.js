const {swapAT}= require("../swapFunc/swap.js")

function permutation(str, l, r) {
  if (l == r) {
    console.log(str);
    return;
  }

  for (let i = l; i <= r; i++) {
   str = swapAT(str, l, i);
   permutation(str,l+1,r);
   str=swapAT(str,l,i) //backtrack
  }
}

let str = "abc";
n=str.length;
permutation(str,0,n-1);
