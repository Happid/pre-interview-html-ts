console.log("");
console.log("Processing reduce Section...");

// ***** reduce 1
const myNmbs = [1, 2, 3, 4];
const total = myNmbs.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log("Example 1 =>", total); // 0+1+2+3+4 = 10

// ***** reduce 2
const words = ["saya", "sedang", "belajar", "JS"];
// Karena kita tidak memberi initialValue, acc akan mulai dari elemen pertama.
const sentence = words.reduce((acc, curr) => acc + " " + curr);
console.log("Example 2 =>", sentence); // "saya sedang belajar JS"

// ***** reduce 3
const myNmbs1 = [10, 5, 8, 20, 3];
const max = myNmbs1.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, 0);
console.log("Example 3 =>", max); // 20

// ***** reduce 4
const myNmbs2 = [1, 2, 3, 4, 5];
const newArr = myNmbs2.reduce((acc, curr) => {
    if (curr % 2 === 0) acc.push(curr);
    return acc;
}, []);

console.log("Example 4 =>", newArr); // [2, 4]

// ***** reduce 5
const letters = ["a", "b", "a", "c", "b", "a"];
const count = letters.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log("Example 5 =>", count); // { a: 3, b: 2, c: 1 }
