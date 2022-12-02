const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];

// IMPORTANT: SOLVE the following questions using two methods
// 1. use for loop 
// 2. USE HIGHER ORDER FUNCTIONS TO SOLVE THE ABOVE QUESTIONS(map, filter, find, forEach etc. )


// ==================================== 0 ==================================== //

function profileLookup(name, property) {
    //write your code here
    for (let i = 0; i < facebookProfiles.length; i++) {
        if (facebookProfiles[i].firstName === name) {
            if (facebookProfiles[i] === property) {
                return facebookProfiles[i][property]
            } else if (facebookProfiles[i].address === property)
                return facebookProfiles[i].address[property]
            else return "no such property"
        }
    } return "person does not exist"

}
let b = profileLookup("Pritesh", "number");
let c = profileLookup("Sabiha", "address");
console.log("mathod 1");
console.log(b);
console.log(c);

// Second Mathod
function profileLookup(name, property) {
    const result = facebookProfiles.filter(x => x.firstName === name).map(x => x[property]);
    return result;
}
console.log("mathod 2");
console.log(profileLookup("Pritesh", "number"))
// complete the above function such that when it is called with name and property, then it should return its value
// ex
// profileLookup("Pritesh", "number"), then it should return his number

// handle edge cases like:
//      if name is not in the list, return "person does not exist"
//      if property is not present then return "no such property"
// 
// Hint: dynamically access properties using square bracket

// ================================== 1 ====================================== //

function getNamesFromGurgaon(facebookProfiles) {
    //write your code here
    let gurgramHoofies = [];

    for (let i = 0; i < facebookProfiles.length; i++) {
        if (facebookProfiles[i].address.location === "gurgaon") {
            gurgramHoofies.push(facebookProfiles[i].firstName + " " + facebookProfiles[i].lastName);
        }
    }
    return gurgramHoofies;
}
console.log("mathod 1");
console.log(getNamesFromGurgaon(facebookProfiles));
// SECOND MAthod

let guragaonhoodes = facebookProfiles.filter(Element => Element.address.location === "alwar").map(x => x.firstName + " " + x.lastName);
console.log("mathod 2");
console.log(guragaonhoodes);
//complete the above functin such that it returns the list of full names of all people of gurgaon.
// ex = ['Jay ', 'Pritesh Kumar']

// ==================================2 ====================================== //

function stateName(state) {
    let stateHoodies = [];
    for (let i = 0; i < facebookProfiles.length; i++) {
        if (facebookProfiles[i].address.state === state) {
            stateHoodies.push(facebookProfiles[i].firstName + " " + facebookProfiles[i].lastName);
        }
    }
    return stateHoodies;
}
console.log("mathod 1");
console.log(stateName("up"));

// Mathod==>2

function stateHoodies(state) {

    let stateHoodies = facebookProfiles.filter(Element => Element.address.state == state).map(state => state.firstName + " " + state.lastName);
    console.log(stateHoodies);
}
console.log("mathod 2");
stateHoodies("rajasthan");

// 2. complete this function, which takes state name as argument and return the name 
// of one of its residents

// ================================== 3 ====================================== //

function getDLStatus(facebookProfiles) {
    //write your code here
    let RealDrivers = [];
    for (let i = 0; i < facebookProfiles.length; i++) {
        if (facebookProfiles[i].address.location === "gurgaon") {
            if (facebookProfiles[i].hasDrivingLicense) {
                RealDrivers.push(facebookProfiles[i].firstName + " " + facebookProfiles[i].lastName + " - D/L => Cycle Chala lete hai");
            }
            else {
                RealDrivers.push(facebookProfiles[i].firstName + " " + facebookProfiles[i].lastName + " - N D/L => Cycle nahi Chalane aati");
            }
        }
    }
    return RealDrivers;

}
console.log("mathod 1");
console.log(getDLStatus(facebookProfiles));


//Mathod ===>2====================

function realDrivers(location) {
    let isDrivers = facebookProfiles.filter(Element => Element.address.location === location).map(isDriver => {
        if (isDriver.firstName && isDriver.hasDrivingLicense) return isDriver.firstName + " " + isDriver.lastName + " - D/L => Cycle Chala lete hai";
        else {
            return (isDriver.firstName + " " + isDriver.lastName + " - N D/L => Cycle nahi Chalane aati");
        }

    })
    return isDrivers;
}
console.log("mathod 2");
console.log(realDrivers("lucknow"));
//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. 
// like shown in the example below
// ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']

// =================================== 4 ===================================== //

function getFullName(facebookProfiles) {
    //write your code here
    const fullName = [];
    for (let i = 0; i < facebookProfiles.length; i++) {
        if (facebookProfiles[i].firstName) {
            if (!facebookProfiles[i].lastName) {
                fullName.push(facebookProfiles[i].firstName);
            }
            else {
                fullName.push(facebookProfiles[i].firstName + " " + facebookProfiles[i].lastName);
            }

        }

    }
    return fullName;
}

console.log("mathod 1");
console.log(getFullName(facebookProfiles))

// Mathod ==2
console.log("mathod 2");
function GetFullName(facebookProfiles) {
    const Names = facebookProfiles.filter(Element => Element.firstName || Element.lastName).map(fullNames => fullNames.firstName + " " + fullNames.lastName);
    console.log(Names);
}
GetFullName(facebookProfiles);

// 4. write a function which returns full names in an array
//ans = ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay' ]


// ===================================== 5 =================================== //

function getLikes(facebookProfiles) {
    //write your code here
    const fullName = [];
    for (let i = 0; i < facebookProfiles.length; i++) {
        if (facebookProfiles[i].likes) {
            fullName.push(...facebookProfiles[i].likes);
        }
    }
    return fullName;
}
console.log("mathod 1");
console.log(getLikes(facebookProfiles));
// 2 method

function GetLikes(facebookProfiles) {
    const likes = facebookProfiles.filter(Element => Element.likes).map(likes => likes.likes);
    console.log(likes);

} console.log("mathod 2");
GetLikes(facebookProfiles);

// 5. write a function which returns all likes of all the people in an array
//hint: use spread syntax
//ans = ['music', 'movies', 'code', 'podcasts', 'travel', 'driving', 'food', 'mobile']

// ====================================== 6 ================================== //

function getNameFromDelhiWithDL(facebookProfiles) {
    //write your code here
    for (let i = 0; i < facebookProfiles.length; i++) {
        if (facebookProfiles[i].address.location === "delhi" && facebookProfiles.hasDrivingLicense) {
            console.log(facebookProfiles[i].address.location)
        }
    }
    console.log("No such Person in a list");
}
console.log("mathod 1");
getNameFromDelhiWithDL(facebookProfiles);

// Mathod==> 2
function driversWithoutDL(facebookProfiles) {
    const delhiDriver = facebookProfiles.filter(Element => Element.address.location == "delhi" && Element.hasDrivingLicense);
    const isDriver = delhiDriver.map(isDriver => isDriver.firstName);
    if (delhiDriver.length == 0) {
        return "no such person in a list"
    }

}
console.log("mathod 2");
console.log(driversWithoutDL(facebookProfiles));



//6. write a function which return  the name of the any one person who live in delhi and has driving license
//ans => "no such person"

// ======================================= 7 ================================= //

function getNameOfDriverWithoutDL(facebookProfiles) {
    //write your code here
    for (let i = 0; i < facebookProfiles.length; i++) {
        if (facebookProfiles[i].likes[i] == "driving" && !facebookProfiles[i].hasDrivingLicense) {
            return facebookProfiles[i].firstName
        }
    }
    console.log(" No One in the list Who likes driving and don't have license")
}
console.log("mathod 1");
console.log(getNameOfDriverWithoutDL(facebookProfiles));


// Mathod ===> 2
console.log("mathod 2");
const noobDriver = facebookProfiles.filter((Element) => !Element.hasDrivingLicense && Element.likes);
for (let i = 0; i < noobDriver.length; i++) {
    if (noobDriver[i].likes[i] === "driving") {
        console.log(noobDriver[i].firstName);
    }
}

//7. write a function which return the name of the any one person who like driving but doesnt have driving license
//asn => pritesh


