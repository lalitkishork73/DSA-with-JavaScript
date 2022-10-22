//merge sorts

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2),
    leftA = arr.slice(0, mid),
    rightA = arr.slice(mid);

  return merge(mergeSort(leftA), mergeSort(rightA));
}

function merge(leftA, rightA) {
  let i = 0,
    j = 0,
    res = [];
  let l = leftA.length,
    r = rightA.length;
  while (i < l || j < r) {
    if (i === l) {
      res.push(rightA[j]);
      j++;
    } else if (j === r || leftA[i] <= rightA[j]) {
      res.push(leftA[i]);
      i++;
    } else {
      res.push(rightA[j]);
      j++;
    }
  }
  return res;
}

let arr = [1, 22, 4, 51, 66, 28, 44, 14, 23, 56, 79];
console.log(mergeSort(arr));
