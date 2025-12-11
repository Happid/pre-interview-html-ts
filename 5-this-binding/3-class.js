setTimeout(() => {

    console.log('');
    console.log('3. this di class ...');

    // CLASS 1
    class Person {
        constructor(name) {
            this.name = name;
        }

        sayHello() {
            console.log("Hello, I'm " + this.name);
        }
    }
    const p = new Person("Happid");
    p.sayHello(); // "Hi, I'm Happid"


    // CLASS 2
    class Counter {
        constructor() {
            this.count = 0;
        }

        inc() {
            this.count++;
            console.log(this.count);
        }
    }
    const c = new Counter();
    setTimeout(c.inc); // NaN
    setTimeout(() => c.inc()); // 1

})

