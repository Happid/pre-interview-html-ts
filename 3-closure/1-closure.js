function outer() {
    let counter = 0;

    function inner() {
        counter++;
        console.log(counter);
    }

    return inner;
}

const increment = outer();

console.log("INI EXAMPLE KE-1");
increment();
increment();
increment();
console.log("");

// outer() sudah selesai dieksekusi
// Tapi variabel counter tidak hilang
// inner() masih “ingat” variabel dari lexical scope-nya
// Itulah closure