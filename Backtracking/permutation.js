function permutation(str, perm, index) {
  if (str.length == 0) {
    console.log(perm);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    let currChar = charCodeAt(i);
    let newStr = str.slice(0, i) + str.slice(i + 1);
    permutation(newStr, currChar + perm, index + 1);
  }
}

let str = "abc";
permutation(str, "", 0);
