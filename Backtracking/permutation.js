const {swapAT}= require("../swapFunc/swap.js")
function permutation(str, perm, index) {
  if (str.length == 0) {
    console.log(perm);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    let currChar = str.charCodeAt(i);
    let newStr = str.slice(0, i) + str.slice(i + 1);
    permutation(newStr, +currChar+String.fromCharCode(perm), index + 1);
  }
}
// function permutation(str, l, r) {
//   if (l == r) {
//     console.log(str);
//     return;
//   }

//   for (let i = l; i <= r; i++) {
//    str = swapAT(str, l, i);
//    permutation(str,l+1,r);
//    str=swapAT(str,l,i) //backtrack
//   }
// }

let str = "abc";
permutation(str,"",0);
