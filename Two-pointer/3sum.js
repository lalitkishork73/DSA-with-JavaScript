let nums = [-1, 0, 1, 2, -1, -4];

function ThreeSum(arr) {
  arr.sort((a, b) => a - b);
  let Trep = [];
  for (let i = 0; i < arr.length - 2; i++) {
    // pass same number in array for x counter
    if (arr[i] === arr[i - 1]) {
      continue;
    }
    // x+y+z=0 => y+z=-x => arr[l]+arr[r]=-arr[i]  // x=-4  y+z=4 =>0  logic
    let target = -arr[i];
    let l = i + 1,
      r = arr.length - 1;
    while (l < r) {
      if (arr[l] + arr[r] === target) {
        Trep.push([arr[l++], -target, arr[r--]]);
        /*  while (arr[l] === arr[l + 1]) {
          l++;
        }
        l++;
        while (arr[r] === arr[r - 1]) {
          r--;
        }
        r--; */
      } else if (arr[l] + arr[r] > target) {
        r--;
      } else {
        l++;
      }
    }
  }

  return Trep;
}

console.log(ThreeSum(nums));
