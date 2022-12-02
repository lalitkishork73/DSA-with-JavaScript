const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];

const carCompanies = ["Tata", "Maruti", "Hyundai", "Mahindra"]
const carModels = ["Nano", "Alto", "i10", "kuv"]

//result that i want
/* const carDetails = {
    "Tata": "Nano",
    "Maruti": "Alto",
    "Hyundai": "i10",
    "Mahindra": "kuv"
} */
let carDetails = (carCompanies, carModels) => {

    const carDetail = {};

    for (let i = 0; i < carCompanies.length; i++) {
        carDetail[carCompanies[i]] = carModels[i];
    }
    console.log(carDetail);
}

carDetails(carCompanies, carModels);
// =========================================== 1 ==================================================== //


function findCard(value, suit) {
    for (let i = 0; i < cardData.length; i++) {
        if (cardData[i].value === value && cardData[i].suit === suit) {
            return true;
        }
    }
    return false;
}
console.log(findCard(7, 'diamond'));
console.log(findCard(10, 'club'));

/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true
*/

// =============================================== 2 ================================================ //


/**
 2. write a function which returns the list of available suits in the above data
 * ans => ["heart", "club", "diamond"]
 */

function getSuits(cardData) {
    // write your code here
    let suits = cardData.map(element => element.suit);
    let filt = suits.filter((valu, index) => { return suits.indexOf(valu) === index });
    return filt;
}
console.log(getSuits(cardData));

// ================================================ 3 =============================================== //


/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
 */

function getSuitCount(cardData) {
    // write your code here
    let mainobj = {}
    mainobj.heart = 0;
    mainobj.club = 0;
    mainobj.diamond = 0;
    for (let i = 0; i < cardData.length; i++) {
        if (cardData[i].suit === "club") {
            mainobj.club++;
        }
        if (cardData[i].suit === "heart") {
            mainobj.heart++;
        }
        if (cardData[i].suit === "diamond") {
            mainobj.diamond++;
        }
    }
    console.log("mathod:=> 1")
    console.log(mainobj);
}
getSuitCount(cardData);

// Mathod 2=================================
let getSuitCounter = (cardData) => {
    let suits = cardData.map(element => element.suit);
    const count = {};
    suits.forEach(element => {
        count[element] = (count[element] || 0) + 1;
    });
    return count;
}
console.log("mathod:=> 2")
console.log(getSuitCounter(cardData));
// ================================================= 4 ============================================== //

function getSuitValues(cardData) {
    // write your code here
    let mainobj = {}
    let p = 0, j = 0, k = 0;
    mainobj.heart = [];
    mainobj.club = [];
    mainobj.diamond = [];
    for (let i = 0; i < cardData.length; i++) {
        if (cardData[i].suit === "club") {
            mainobj.club[j++] = cardData[i].value;
        }
        if (cardData[i].suit === "heart") {
            mainobj.heart[p++] = cardData[i].value;;
        }
        if (cardData[i].suit === "diamond") {
            mainobj.diamond[k++] = cardData[i].value;;
        }
    }
    console.log("mathod:=> 1")
    console.log(mainobj);
}
getSuitValues(cardData);
/** 
 *  4. write a function which returns an object with the suits as its key and its available values as value
 *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]} 
 *   
*/



