let arr=[1,2,3,4,5,6,7,8];
let mid=0;
let low=0,high=arr.length-1;
mid=high-low/2;
let t=5;


if(t==arr[mid]){
    console.log("mathced");
}

else if(arr[mid]>t){
    high=mid-1;
}
else{
    low=mid+1
}
