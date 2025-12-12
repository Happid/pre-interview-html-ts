setTimeout(() => {
    console.log("");
    console.log("4. Micro & Macro Quequeque...");
    console.log("Start");

    setTimeout(() => {
        console.log("Macrotask: Timeout");
    }, 0);

    Promise.resolve()
        .then(() => console.log("Microtask 1"))
        .then(() => console.log("Microtask 2"));

    console.log("End");
}, 1000)


