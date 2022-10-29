// const arr = [1, 1, 1, 1] ,k = 2 ;
// let pair=[]
// // for(let i=0;i<arr.length;i++) {
// //     for(let j=i+1;j<arr.length;j++){
// //         if(arr[i]+arr[j]==k){
// //            pair.push([arr[i],arr[j]]); 
// //         }
// //     }
// // }

// l/* et i=0,j=i+1;

// while(i<arr.length || j<arr.length){
//     if(arr[i]+arr[j]==k){
//         pair.push([arr[i],arr[j]])
//         j++;

//     }
//     if(j==arr.length-1){
//         i++;

//     } 
// }

// console.log(pair); */


// const arr = [1,1,5, 7, 1, 8, 9],k=2;

// arr.sort((a,b)=>a-b);
// let map=new Map()
// for(let i=0;i<arr.length;i++){
//     map.set(arr[i],map.get(i))+1||1;
// }
// let ar=[]
// for([keys,values] of map){
//     ar.push(keys);
// }

// console.log(ar[k-1],ar[ar.length-k])

const arr1 = [1, 3, 4, 5],arr2 = [2, 4, 6, 8];
 
function merge(left,right){
    let i=0,j=0,l=left.length,r=right.length,res=[];
    while(i<l || j<r){
        if(i===l){
            res.push(right[j]);
            j++;
        }
        if(j===r || left[i]<=right[j]){
            res.push(left[i]);
            i++;
        }
        
        else{
            res.push(right[j]);
            j++;
        }

    }
    return res;

}

console.log(merge(arr1,arr2));
