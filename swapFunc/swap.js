// Swapp by addition and swap

const swapA = (arr, i, j) => {
  arr[i] = arr[i] + arr[j];
  arr[j] = arr[i] - arr[j];
  arr[i] = arr[i] - arr[j];
};

const swapAT = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
const swapT = (i, j) => {
  let temp = i;
  i = j;
  j = temp;
  console.log(i, j);
};

const swap = (i, j) => {
  i = i + j;
  j = i - j;
  i = i - j;
  console.log(i, j);
};

module.exports = { swap, swapAT, swapA, swapT };
