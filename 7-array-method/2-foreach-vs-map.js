console.log("");
console.log("Processing forEach vs Map Section...");
let myNumbers = [1, 2, 3];

// ***** forEach
const result3 = myNumbers.forEach(num => num * 2);
console.log("forEach tidak menghasilkan array baru => ",result3); // undefined

// ***** map
const result4 = myNumbers.map(num => num * 2);
console.log("map menghasilkan array baru => ",result4); // [2, 4, 6]