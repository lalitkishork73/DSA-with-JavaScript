let arr = [1, 1, 1, 2, 3, 5, 4, 8, 1, 2, 2];
let count=0;

let myMap = new Map();
let map = {};

for (let i of arr) {
  myMap.set(i, myMap.get(i) + 1 || 1);
}

for (let i in arr) {
  map[arr[i]] = map[arr[i]] + 1 || 1;
}

for(let [key,value] of myMap){
    if(value==1){   
        count++;
    }
}

console.log(myMap);
console.log(map);
console.log(count);
