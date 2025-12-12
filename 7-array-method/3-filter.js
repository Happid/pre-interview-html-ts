console.log("");
console.log("Processing filter Section...");

// ***** filter 1
const myNumbs = [1, 2, 3, 4, 5, 6];
const evens = myNumbs.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]

// ***** filter 2
const users = [
    { name: "Happi", active: true },
    { name: "Ilmi", active: false }
];
const activeUsers = users.filter(u => u.active);
console.log(activeUsers); // [ { name: "Happi", active: true } ]
