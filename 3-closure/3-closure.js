// Function Factory (closure untuk membuat "template")
console.log("INI EXAMPLE KE-3");

const multiplyBy = (x) => {
    return function(y) {
        return x * y;
    };
}

const double = multiplyBy(2);
console.log(double(5)); // 10

const triple = multiplyBy(3);
console.log(triple(5)); // 15
console.log("");
