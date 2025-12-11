console.log('1. this di global scope ...');

console.log(this); // Window { ... }

var a = 10;
console.log("Variable Declaration (var) => ", this.a); // 10

let b = 20;
console.log("Variable Declaration (let) => ", this.b); // undefined