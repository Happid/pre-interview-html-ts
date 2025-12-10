let tempArray = [1, 2, 3, 2, 4, 5, 6, 6, 7, 4, 8];

let unique = tempArray.filter((item, index, arr) => {
    return arr.indexOf(item) === arr.lastIndexOf(item);
});

let duplicates = tempArray.filter((item, index, arr) => {
    return arr.indexOf(item) !== index;
});
duplicates = [...new Set(duplicates)];

let distinct = [...new Set(tempArray)].sort((a, b) => a - b);

console.log("THIS RESULTS USING FILTER AND FUNCTION JS");
console.log("Output Unique Value => ", unique); // [1, 3, 5, 7, 8]
console.log("Output Duplicate Value => ", duplicates); // [2, 4, 6]
console.log("Output Distinct Value => ", distinct); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log("====================================");