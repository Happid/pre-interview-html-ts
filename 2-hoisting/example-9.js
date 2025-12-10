let i = 10;

function demo() {
    console.log("Example No 8 => ", i); // ❌ ReferenceError (karena ada "let a" di scope ini)
    let i = 20;
}

demo();