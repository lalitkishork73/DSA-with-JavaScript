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


let arr=[2,5,6,9,8,5,23,1,5,1];


let k=arr.map((e)=>{
    return e;
})

let map={}

for(let i=0;i<arr.length;i++){
    map[arr[i]]=map[arr[i]]+1||1;
}

console.log(map);