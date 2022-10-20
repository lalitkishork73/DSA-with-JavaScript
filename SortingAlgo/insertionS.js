let insertionSort = (inputArr) => {
  for (let i = 1; i < inputArr.length; i++) {
    let key = inputArr[i];
    let j = i - 1;
    while (j >= 0 && inputArr[j] > key) {
      inputArr[j + 1] = inputArr[j];
      j = j - 1;
    }
    inputArr[j + 1] = key;
  }
  return inputArr;
};

let arr = [22, 5, 11, 4, 9, 57, 1, 32];

console.log(insertionSort(arr));
