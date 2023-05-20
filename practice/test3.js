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


// let arr=[2,5,6,9,8,5,23,1,5,1];

// let k=arr.map((e)=>{
//     return e;
// })

// let map={}

// for(let i=0;i<arr.length;i++){
//     map[arr[i]]=map[arr[i]]+1||1;
// }

// console.log(map);
// let rows=5
// for(let i=1;i<=rows;i++){
//     let str=''
//     for(let j=1;j<=rows-i;j++){
//         str+=' '
//     }
//     for(let k=1;k<=i;k++){
//         str+='* ';
//     }
//     console.log(str)
// }
// for(let i=rows-1;i>=1;i--){
//     let str=''
//     for(let j=1;j<=rows-i;j++){
//         str+=' '
//     }
//     for(let k=1;k<=i;k++){
//         str+='* ';
//     }
//     console.log(str)
// }

    
let s='abbsadadef'

const uniqueChars = [...new Set(s)];
let maxLength = 0;

  // Iterate through all possible pairs of characters
  for (let i = 0; i < uniqueChars.length - 1; i++) {
    for (let j = i + 1; j < uniqueChars.length; j++) {
      const char1 = uniqueChars[i];
      const char2 = uniqueChars[j];
      let prevChar = '';
      let count = 0;
      let isValid = true;

      // Iterate through the string and count the valid characters
      for (let k = 0; k < s.length; k++) {
        const currentChar = s[k];
        if (currentChar === char1 || currentChar === char2) {
          if (currentChar === prevChar) {
            isValid = false;
            break;
          }
          count++;
          prevChar = currentChar;
        }
      }

      // Update the maximum length if the current pair produces a longer valid string
      if (isValid && count > maxLength) {
        maxLength = count;
      }
    }
  }

  console.log(maxLength);