const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

// IMPORTANT: solve all problems using using destructuring and rest syntax


// ============================================================================= //
//1.
// remove first element from places array and print the remaining array 
//result = ['gurgaon', 'jaipur', 'pune']
const [ct, ...remcity] = places;
console.log(remcity);


// ============================================================================= //
//2.
// insert that element at the start of the morePlaces array and print the new array
// result =  ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']
//============================================================================== // 
// const cty="delhi";                   <====== first assign in variable and add  in new array
// const newPlaces=[cty,...morePlaces]; <====== we can do like this also
const newPlaces = ["delhi", ...morePlaces];
console.log(newPlaces);

// ============================================================================= //
// 3.
// take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]
const [cti, ...morePlace] = morePlaces;
const [one, two, tree, ...rem] = places;
const mainResult = [...morePlace, one, two, tree];
console.log(mainResult);


const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
        pinCode: 123455,
        city: "delhi"
    },
    likes: ["music", "movies"]
}

// 4.
// destructure and store pincode into a variable named myPincode
// let { ...a } = myData.address;
// const myPincode = a.pinCode;
// console.log(myPincode);

//&&&&&&&&&&&&&&&&&&&&&&&&&&&

const { address: { pinCode: myPincode, city } } = myData;
console.log(myPincode);
// 5.
// destructure and store second like into a vaiable named myLike
const { likes: [musix, myLike] } = myData;
console.log(myLike);