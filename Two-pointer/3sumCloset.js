let nums = [-1, 2, 1, -4],
  target = 1;

function closestBrut(arr, t) {
  let closest = Number.MAX_VALUE;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (Math.abs(t - closest) > Math.abs(t - (arr[i] + arr[j] + arr[k]))) {
          closest = arr[i] + arr[j] + arr[k];
        }
      }
    }
  }
  return closest;
}
console.log(closestBrut(nums, target));

function closest(arr, t) {
  arr.sort((a, b) => a - b);
  let closest = Number.MAX_VALUE;

  for (let i = 0; i < arr.length - 2; i++) {
    let l = i + 1,
      r = arr.length - 1;
    while (l < r) {
      let sum = arr[i] + arr[l] + arr[r];
      if (Math.abs(t - closest) > Math.abs(t - sum)) {
        closest = sum;
      }
      if (sum > t) {
        r--;
      } else {
        l++;
      }
    }
  }
  return closest;
}
console.log(closest(nums, target));
