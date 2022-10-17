let arr=[1,2,4,5,11,12,35,95,51];

let maxSum=0,sum=0,i=0,j=arr.length,k=3;

while(i<k){
    sum=sum+arr[i];
    i++;
}
maxSum=sum;
i=k;
while(i<j){
    sum+=arr[i]-arr[i-k];
    if(sum>maxSum){
        maxSum=sum;
    }   
    i++;
}


console.log(maxSum);