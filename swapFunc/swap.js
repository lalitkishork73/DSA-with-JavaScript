// Swapp by addition and swap

const swap=(arr, i, j)=>{
  arr[i] = arr[i] + arr[j];
  arr[j] = arr[i] - arr[j];
  arr[i] = arr[i] - arr[j];
}

module.exports={swap};
