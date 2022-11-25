 let arr = [{name: "a", age: 10}, {name: "b", age: 20}, {name:"c", age :5}] 

 let test=[...arr].sort((a,b)=>a.age-b.age)

 console.log(test);


// let obj={
//     name:"ki",
//     add:{
//         st:"dsd"
//     }
// }

// let obj1=JSON.parse(JSON.stringify(obj));

/* 
let obj = {
    a: 100,
    b: function() { console.log(this.a) }
}
obj.b() 
// find({{$ls:{age:20},$gt:{age:10}}) */