//Missing characters to make a string Pangram ?

// Given a string S, find all characters that are missing from the string S, i.e., the characters that can make the string a Pangram. Display output in alphabetic order.

// Input: The quick brown fox jumps
// Output:adglvyz

function solution(str) {
  str = str.toLowerCase().split("");
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      arr.push(str[i].charCodeAt(0) - "a".charCodeAt(0));
    }
  }
  // Sorting and removing the duplicate
  let map = {};
  for (let el of arr) {
    map[el] = (map[el] || 0) + 1;
  }
  let arr1 = [];
  for (let i = 0; i < 26; i++) {
    if (!map[i]) {
      arr1.push(i);
    }
  }
  let res = "";
  for (let num of arr1) {
    res += String.fromCharCode(num + "a".charCodeAt(0));
  }
  return res;
}
console.log(solution("The quick brown fox jumps"));
