let array=[1,2,5,6,9,53,21,2];

let b=array.filter((k)=>{
    return k>2;
});

let a=array.map((obj)=>{
    return obj==2;
})
// console.log(b);
console.log(a);