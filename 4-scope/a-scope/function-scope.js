console.log("");
console.log("Function scope loaded...");
function foo() {
    let y = 20; // function scope
    console.log("akses di dalam function => ",y);
}

foo();
console.log(y); // ❌ Error: y is not defined
