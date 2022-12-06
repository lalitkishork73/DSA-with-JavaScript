
function rotate(arr,left,right){
    while(left< right){
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
    }
  console.log(arr);
}
function reverse(arr,k)
{
    if(arr.length <=1) return;
    rotate(arr, 0,arr.length-1)
    rotate(arr, 0,k)
    rotate(arr, k+1, arr.length-1)
return arr
}
nums= [1,2,3,4,5,6,7,8,9]  //9 8 7 6 1 2 3 4 5 
let d =reverse(nums,4)
console.log(d);
