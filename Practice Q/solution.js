/* 
const funds = require("./funds.json");

// console.log(funds[0])

// 1. Find the number of funds whose fund_house is TAURUSMUTUALFUND_MF

// 2. Find the number of funds for each fund_house
// Sample out
// {
//   "FH_A: 23,
//   "FH_B": 34,
//   ...
// }



// 3. Find the number of funds for each fund_type for each fund_house
// Sample output
// {
//   "FH_A": {
//     "TYPE_X": 12,
//     "TYPE_Y": 23,
//   },
//   "FH_B": {
//       "TYPE_X": 13,
//         ...
//   }
// }


// function fundHouse(funds) {
//   let map2 = new Map();
//   for (i = 0; i < funds.length; i++) {
//     if (funds[i].fund_type != undefined) {
//       if (map2.has(funds[i].fund_house)) {
//         let m = map2.get(funds[i].fund_house);
//         let y = m.get(funds[i].fund_type);
//        if(y){ 
// // console.log👍
//         m.set(funds[i].fund_type, y + 1)
//        }else{

//        }
//       } else {
//         let x = new Map();
//         x.set(funds[i].fund_type, 1)
//         map2.set(funds[i].fund_house, x)
//       }
//     }
//   }
//   return map2;
// }
gn
// let c = fundHouse(funds)

// console.log(c)
// 4. Find the average volatility of each fund_house
// {
//   "FH_A": 12.3,
//   "FH_B": 32.2
// }


function average(funds) {
  let map = new Map();
  let map2 = new Map();
  for (i = 0; i < funds.length; i++) {
    if (map.has(funds[i].fund_house)) {
      map.set(funds[i].fund_house, map.get(funds[i].fund_house) + 1);

    } else {
      map.set(funds[i].fund_house, 1)
    }
  }

  console.log(map)
  for (i = 0; i < funds.length; i++) {
    if (map2.has(funds[i].fund_house)) {
      let sum = (map2.get(funds[i].fund_house) + funds[i].volatility);
      map2.set(funds[i].fund_house, sum);
    } else {
      map2.set(funds[i].fund_house, funds[i].volatility)
    }
  }
  // return map2;
  for (i = 0; i < funds.length; i++) {

    if (map.has(funds[i].fund_house) && map2.has(funds[i].fund_house)) {
      let x = (funds[i].fund_house);
      map.set(funds[i].fund_house, map2.get(x) / map.get(x))
    }
  }

  console.log(map2)

  return map;
}

let c = average(funds);
console.log(c);
*/


const obj = [
    {
        name: "visanu",
        id: 1,
        type: "saving",
        age: 24,
        bank: "chak de india bank"
    },
    {
        name: "bisanu",
        id: 2,
        type: "saving",
        age: 26,
        bank: "chak de india bank"
    },
    {
        name: "misanu",
        id: 3,
        type: "current",
        age: 28,
        bank: "startup de bank"
    },
    {
        name: "tisanu",
        id: 4,
        type: "current",
        age: 30,
        bank: "chaddi fasi bank"
    },
]

const funds = [
    { fund_name: 'Fund1', fund_type: 'TYPE_X', fund_house: 'FH_A' },
    { fund_name: 'Fund2', fund_type: 'TYPE_Y', fund_house: 'FH_A' },
    { fund_name: 'Fund3', fund_type: 'TYPE_X', fund_house: 'FH_B' },
    { fund_name: 'Fund4', fund_type: 'TYPE_X', fund_house: 'FH_C' },
    { fund_name: 'Fund5', fund_type: 'TYPE_Y', fund_house: 'FH_C' },
    { fund_name: 'Fund6', fund_type: 'TYPE_Z', fund_house: 'FH_C' }
];

// Compute the number of funds for each fund type for each fund house
const result = {};
funds.forEach(fund => {
    const { fund_type, fund_house } = fund;
    if (!result[fund_house]) {
        result[fund_house] = {};
    }
    if (!result[fund_house][fund_type]) {
        result[fund_house][fund_type] = 0;
    }
    result[fund_house][fund_type]++;
});

// Print the result
console.log(result);