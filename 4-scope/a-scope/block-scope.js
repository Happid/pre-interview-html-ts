console.log("");
console.log("Block scope loaded...");
{
    var a = 50;
    let z = 30;
    const w = 40;
    console.log(`akses di dalam block =>  a=${a}, z=${z}, w=${w}`);
}

console.log("akses di luar block =>",a); // bisa akses
console.log(z); // ❌ Error
console.log(w); // ❌ Error
