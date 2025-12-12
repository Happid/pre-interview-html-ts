console.log("Processing Map Section...");

const nums = [1, 2, 3];
const result = nums.map(n => n * 2);
console.log("map 1 => ", result); // [2, 4, 6]

const names = ["Happi", "Dani"];
const result1 = names.map(n => ({ name: n }));
console.log("map 2 => ",result1); // [ { name: "Happi" }, { name: "Dani" } ]