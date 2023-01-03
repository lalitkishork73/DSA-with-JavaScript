let n = 5, ans = 0, i = 0;

while (n != 0) {
    let bit=n&1;
    if(bit==1){
        ans=ans+Math.pow(2,i);
    }
    n=n>>1;
    i++;
}

console.log(ans);