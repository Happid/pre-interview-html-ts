console.log('');
console.log('3. Syntactic sugar process ...');

// Example 1: Menggunakan class
class Car {
    constructor(brand) {
        this.brand = brand;
    }

    sayHi() {
        console.log("Hi, " + this.brand);
    }
}


// Example 2: Syntactic sugar (versi asli)
// function Car(brand) {
//     this.brand = brand;
// }
// Car.prototype.sayHi = function() {
//     console.log("Hi, " + this.brand);
// };

// Hasilnya 100% sama.
console.log(Car.prototype);
