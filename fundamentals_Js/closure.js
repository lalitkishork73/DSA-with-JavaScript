/* //DEff:1==> A Closer is a function having access to the parent scope. it preserve the data from outside.

var i=10;
function show(){
    var j=20;
    console.log(j+" ");
    console.log(i+" ");
}

show();

//DEff:2==> A closure is inner Funciton that has access to the outer (enclosing) function's variables.

// every closure, we have three scopes:-
// 1-> Local Scope(Own Scope) 2-> Outer Function Scope 3-> Global Scope

// Nested Function

function Outer(){
    var j=2;
    console.log(j)
    function innerFunc(){
        var k=3;
        console.log(k)
    }
    innerFunc();
}

Outer();
 */



function outer(){
    let set=5;
    return function test() {
        let a = 5;
        
        function inner() {
            a = 2
            return a*set;
        }

        return inner()*a
    }
    
}
let test = outer()
let b=test()

console.dir(test())
console.dir(b)



