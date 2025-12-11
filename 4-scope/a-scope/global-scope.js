console.log("Global scope loaded...");
let x = 10; // global scope

function printX() {
    console.log("akses di dalam function => ", x); // bisa akses
}

printX();
console.log("akses di luar function => ", x); // bisa akses juga
