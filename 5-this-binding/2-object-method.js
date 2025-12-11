console.log('');
console.log('2. this di object method ...');

// METHOD 1
const user = {
    name: "Happid",
    sayHi() {
        console.log("Method 1 => ", this.name);
    }
};
user.sayHi(); // "Happid"

// METHOD 2
const animal = {
    type: "cat",
    sayHi() {
        setTimeout(function() {
            console.log("Method 2 => ", this.type);
        });
    }
};
animal.sayHi(); // undefined
