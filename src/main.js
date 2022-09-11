// imports
const measureRuntime = require("./measureRuntime");
const hashName = require("./hashName");

const count = require("../exercises/count");
const pairSum = require("../exercises/pairSum");
const pairSumHash = require("./pairSumHash");


// lesson code
const array1 = Array(1000000).fill(null).map(el => Math.floor(Math.random() * 100));
const array2 = Array(1000000).fill(null).map(el => Math.floor(Math.random() * 100));


// ===== trying out count -- O(n) =====
// console.log("This is how many numbers equal 50 in array1:", count(array1, 50));
// console.log("This is how long my count function takes:", measureRuntime(count, array1, 50));


// ===== trying out pairSum -- O(n^2) =====
// console.log("This is how long pairSum takes:", measureRuntime(pairSum, array1, array2, 120));


// ===== intro to hash tables =====
// const someObject = {
//   "name": "Trevor",
//   "namf": "slkdjfslkfjkd",
//   "class": "icepops"
// };

// someObject["class"] // "icepops"
// someObject["qwerty"] // undefined


// ===== trying out pairSumHash -- O(n) =====
// console.log("This is how long pairSumHash takes:", measureRuntime(pairSumHash, array1, array2, 120));