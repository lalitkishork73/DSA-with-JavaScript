let data = [1, 2, 5, 9, 66, 14, 9, 2, 68, 4];
let data1 = [8, 5, 9, 0, 4, 5, 9, 5, 2, 7, 5, 9];
let data2=[];
let l=data.length;
let m=data1.length;

let lolo={};


for (let i = 0; i <l; i++) {
  data2.push(data[i]);
}
for (let i = 0; i <m; i++) {
  data2.push(data1[i]);
}

console.log([...data, ...data1].sort((a, b) => a - b));
