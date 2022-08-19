 let A=["1","1",1,2,2,5,3,2,22,5,15,48,9];
 objA={};

 for(let i=0; i < A.length; i++){
    objA[A[i]]=(objA[A[i]]||0)+1;
 }

 console.log(objA);

function frequencyCounter(){

        let arr1=[2,4,2,3]

        let arr2=[9,16,4,4]

        let obj = {}

        arr2.forEach(ele=>{
            if(obj[ele]){
                obj [ele] +=1
            }else obj[ele] = 1
        })
        for(let i of arr1){
            if(obj[i*i]){
                obj[i*i] -=1
            }else return false
        }
        return true
}
console.log(frequencyCounter())