console.log('2. Prototype Chain & Inheritance process ...');

// EXAMPLE 1
const animal = {
    eat() {
        console.log("eating...");
    }
};

// Object.create() (Cara Membuat Inheritance)
const cat = Object.create(animal);
cat.meow = function() {
    console.log("meow");
};

console.log("Example 1:");
cat.meow();  // meow
cat.eat();   // eating...


// EXAMPLE 2
const Person = {
    greet() {
        console.log("Hello, " + this.name);
    }
};
const happid = Object.create(Person);
happid.name = "Happid";
console.log("Example 2:");
happid.greet(); // "Hello, Happid"


