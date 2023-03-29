// class Queue{
//     constructor(){
//         this.items=[]
//     }

//     enqueue(){

//     }

// }



let obj = {
    name: 4,
    f: function (data) {
        console.log(`${this.name} time more of ${data} is ${this.name * data}`)
    }
}

obj.name=9+"d"
obj.f(25)