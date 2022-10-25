let s = "aababcabc";

function SubString(s){
  let result = 0;
  let split = s.split("")
  let right = 0;
  let temp = [];
  
  while(right < split.length){
      
      temp.push(split[right])
      
      if(temp.length === 3){
          if(temp.indexOf(temp[0]) === temp.lastIndexOf(temp[0]) && temp.indexOf(temp[1]) === temp.lastIndexOf(temp[1])){
              result++;
          }
          temp.shift();
      }
      right++;
  }
  return result
      
}

console.log(SubString(s));