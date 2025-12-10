const user = new Person(); // ❌ ReferenceError: Cannot access 'Person' before initialization

class Person {
    constructor() {
        this.name = "John";
    }
}
console.log(user);
