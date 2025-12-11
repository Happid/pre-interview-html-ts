console.log("");
console.log("lexical environment loaded...");
function outer() {
    let x = 5;

    function inner() {
        console.log(x); // inner "ingat" lexical environment outer()
    }

    inner();
}

outer();