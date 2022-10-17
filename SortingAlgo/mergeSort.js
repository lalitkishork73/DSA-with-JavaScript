const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const middleI = Math.floor(arr.length / 2);
  const leftA = arr.slice(0, middleI);
  const rightA = arr.slice(middleI);

  return merge(mergeSort(leftA), mergeSort(rightA));
};

function merge(left_part, right_part) {
  var i = 0;
  var j = 0;
  var results = [];

  while (i < left_part.length || j < right_part.length) {
    if (i === left_part.length) {
      // j is the only index left_part
      results.push(right_part[j]);
      j++;
    } else if (j === right_part.length || left_part[i] <= right_part[j]) {
      results.push(left_part[i]);
      i++;
    } else {
      results.push(right_part[j]);
      j++;
    }
  }
  return results;
}

let arr = [1, 22, 4, 51, 66, 28, 44, 14, 23, 56, 79];
console.log(mergeSort(arr));

// console.log(merge([3, 6], [2, 4]));
// console.log(merge_sort([1, 3, 4], [3, 7, 9]));
