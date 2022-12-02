//Find a string within a string
// Given two strings S1 & S2, search for an occurrence of the second string within a first string.  

// Input: Code Zinger University 
//     Zinger
//   where, 
// First line represents string S1. 
// Second line represents string S2. 

// Output: 5 
// Here 'Zinger' word starts at 5th index within 'Code Zinger University’.

function solution(S1, S2) {
  let flag = false;
  for (let i = 0; i < S1.length - S2.length + 1; i++) {
    flag = true;
    for (let j = 0; j < S2.length; j++) {
      if (S1[i + j] != S2[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return i;
    }
  }
  return -1;
}
console.log(solution("chetan good code", "code"));