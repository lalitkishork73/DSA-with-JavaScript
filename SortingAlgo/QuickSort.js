function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];

  var left = [];
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
  //return [...quicksort(left), pivot, ...quicksort(right)];
}

let arr = [1, 22, 4, 51, 66, 28, 44, 14, 23, 56, 79];

console.log(quicksort(arr));
