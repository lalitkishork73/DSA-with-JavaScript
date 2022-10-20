let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function Container(arr) {
  let l = 0,
    r = arr.length - 1,
    max = Number.MIN_VALUE;
  while (l < r) {
    let ls = arr[l],
      rs = arr[r];
      let min = Math.min(ls, rs);
      let len = r - l;
      let area=min*len;
      max=Math.max(max,area);

      if(ls<rs){
        l++;
      }
      else{
        r--;
      } 
  }
  return max;
}
console.log(Container(arr));
