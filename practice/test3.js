// let array=[1,2,5,6,9,53,21,2];

// let b=array.filter((k)=>{
//     return k>2;
// });

// let a=array.map(String)
// // console.log(b);
// console.log(a);

// function vector(data){
//     let i=3000;
//     setTimeout(()=>{
//         data(i);
//     },2000)
// }


// function mono(k){
//     console.log('i love you ',k);
// }

// vector(mono);
let n=5;
let str=''
for(let i=1;i<=n;i++){
    for(let j=1;j<=i -1;j++){
        str+=' ';
    }
    for(let k=i;k<=(2*n-1);k++){
        str+='*';
    }
    str+='\n'
}

console.log(str);