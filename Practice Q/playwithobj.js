/* ( For this question, you can try writing code on a piece of paper and then talk to the camera..just talk about what you will be using in your code) Given a requirement where you have a list of objects, each object containing the following details of a candidate in a cohort - first name, last name, gender and age. You are required to create and array of string that containing the FULL NAMES of the candidates, Which of the three( foreach, map , filter) will you use.

 */


let data = [
    {
        firstname: "lalit",
        lastname: "kishor",
        gender: "male",
        age: 25
    },
    {
        firstname: "pragesh",
        lastname: "yadav",
        gender: "male",
        age: 26
    },
    {
        firstname: "mahesh",
        lastname: "dhage",
        gender: "male",
        age: 22
    },
    {
        firstname: "pratik",
        lastname: "pidkalwar",
        gender: "male",
        age: 22
    },
    {
        firstname: "sandeep",
        lastname: "kumar",
        gender: "male",
        age: 28
    },
    {
        firstname: "rosalia",
        lastname: "a",
        gender: "female",
        age: 22
    },
    {
        firstname: "dua",
        lastname: "lipa",
        gender: "female",
        age: 25
    },
    {
        firstname: "yoona",
        lastname: "lee",
        gender: "female",
        age: 31
    },
    {
        firstname: "sejeoung",
        lastname: "kim",
        gender: "female",
        age: 29
    },
    {
        firstname: "nancy",
        lastname: "jawel",
        gender: "female",
        age: 22
    },
    {
        firstname: "jung-so",
        lastname: "min",
        gender: "female",
        age: 33
    },
    {
        firstname: "scarlet",
        lastname: "johanson",
        gender: "female",
        age: 38
    },
    {
        firstname: "jena",
        lastname: "ortega",
        gender: "female",
        age: 20
    },
]


//Method 1
function Fullname() {


    function method1() {
        let res = [];

        data.forEach((e) => {
            res.push(e.firstname + " " + e.lastname);
            console.log(e.firstname)
        })

        console.log(res)
    }
    function method2() {


        //this method is not effective in the and we have use of map
        let res = data.filter((e) => {
            return e.firstname;
        }).map((e) => { return e.firstname + " " + e.lastname });

        console.log(res)
    }
    function method3() {

        // map is best method

        let res = data.map((e) => {
            return e.firstname + " " + e.lastname;
        })

        console.log(res)
    }

    method1();
    method2();
    method3();
}

Fullname();

function AverageAge(){
   
    let res = data.map((e) => e.age).reduce((a,b)=>a+b,0)/data.length;
    // let ress=res.reduce((a,b)=>a+b,0)/data.length;
    
    console.log(Math.floor(res))


}

AverageAge();

function FemaleNames(){
   
    let res = data.filter((e)=>{
        return e.gender==="female"
    }).map((e) => e.firstname+ " " + e.lastname)
    // let ress=res.reduce((a,b)=>a+b,0)/data.length;
    
    console.log(res)


}

FemaleNames();

