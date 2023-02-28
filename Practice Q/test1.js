// let map = {}
// let b = [1, 2, 6, 8, 44, 7, 2, 2, 1, 6, 9]
// b.sort(a,b=>a-b)
// for (let i = 0; i < b.length; i++) {
//     map[b[i]] = (map[b[i]] || 0) + 1;

// }
// console.log(map)


function fibonacci(num) {
    let res=''
    if (num <= 1) {
      res+=1;
       
    }
    else {
      res+=fibonacci(num - 1) + fibonacci(num - 2);
    }
    return res; 
  }
  
  // Example usage
  console.log(fibonacci(4)); // 1